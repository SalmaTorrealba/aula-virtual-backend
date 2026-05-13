class User {
  constructor(id, nombre, email, password, rol = "estudiante") {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password; // encriptada
    this.rol = rol; // estudiante | profesor | admin
  }
}

module.exports = User;
