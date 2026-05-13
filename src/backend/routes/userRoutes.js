const express = require('express');
const router = express.Router();
const users = require('../data/users');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// =========================
// AUTH
// =========================

// Registro
router.post('/register', async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const existe = users.find(u => u.email === email);
  if (existe) {
    return res.status(400).json({ error: "El email ya está registrado" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const nuevoUsuario = new User(
    users.length + 1,
    nombre,
    email,
    hashed,
    rol || "estudiante"   // ✔ AHORA SÍ FUNCIONA
  );

  users.push(nuevoUsuario);

  res.json({ message: "Usuario registrado correctamente", usuario: nuevoUsuario });
});


// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña son obligatorios" });
  }

  const usuario = users.find(u => u.email === email);
  if (!usuario) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }

  const esValida = await bcrypt.compare(password, usuario.password);
  if (!esValida) {
    return res.status(400).json({ error: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { id: usuario.id, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({
    message: "Login exitoso",
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    }
  });
});

// =========================
// RECUPERACIÓN DE CONTRASEÑA
// =========================

router.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email es obligatorio" });
  }

  const usuario = users.find(u => u.email === email);
  if (!usuario) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }

  const token = jwt.sign(
    { id: usuario.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  usuario.resetToken = token;

  res.json({
    message: "Token de recuperación generado",
    token
  });
});

router.post('/validate-reset-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token es obligatorio" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const usuario = users.find(u => u.id === decoded.id && u.resetToken === token);

    if (!usuario) {
      return res.status(400).json({ error: "Token inválido o expirado" });
    }

    res.json({ message: "Token válido", userId: usuario.id });

  } catch (error) {
    return res.status(400).json({ error: "Token inválido o expirado" });
  }
});

router.post('/reset-password', async (req, res) => {
  const { userId, newPassword } = req.body;

  if (!userId || !newPassword) {
    return res.status(400).json({ error: "userId y nueva contraseña son obligatorios" });
  }

  const usuario = users.find(u => u.id === userId);

  if (!usuario || !usuario.resetToken) {
    return res.status(400).json({ error: "Token no válido o usuario no encontrado" });
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  usuario.password = hashed;

  delete usuario.resetToken;

  res.json({ message: "Contraseña actualizada correctamente" });
});

// =========================
// CRUD PROTEGIDO
// =========================

// GET: permitido para admin y estudiante
router.get('/', authMiddleware, (req, res) => {
  res.json(users);
});

// POST: solo admin
router.post('/', authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  if (!nombre || !email || !password || !rol) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const existe = users.find(u => u.email === email);
  if (existe) {
    return res.status(400).json({ error: "El email ya está registrado" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const nuevoUsuario = new User(
    users.length + 1,
    nombre,
    email,
    hashed,
    rol
  );

  users.push(nuevoUsuario);

  res.json({ message: "Usuario creado correctamente", usuario: nuevoUsuario });
});

// PUT: solo admin
router.put('/:id', authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const { id } = req.params;
  const { nombre, email, rol } = req.body;

  const usuario = users.find(u => u.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  if (nombre) usuario.nombre = nombre;
  if (email) usuario.email = email;
  if (rol) usuario.rol = rol;

  res.json({ message: "Usuario actualizado", usuario });
});

// DELETE: solo admin
router.delete('/:id', authMiddleware, roleMiddleware("admin"), (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(u => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  users.splice(index, 1);

  res.json({ message: "Usuario eliminado correctamente" });
});

module.exports = router;
