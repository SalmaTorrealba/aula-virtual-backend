"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function EditarPerfilPage() {
  const [form, setForm] = useState({
    nombre: "Samara",
    email: "estudiante@correo.com",
    telefono: "600000000",
    avatar: "/avatars/usuario.svg",
    password: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarCambios = () => {
    alert("Cambios guardados correctamente ✔");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Editar Perfil</h1>

      <div className={styles.card}>
        {/* FOTO */}
        <div className={styles.avatarSection}>
          <img src={form.avatar} className={styles.avatar} />
          <button className={styles.btnSecondary}>Cambiar Foto</button>
        </div>

        {/* FORMULARIO */}
        <div className={styles.form}>
          <div className={styles.field}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <h3 className={styles.subtitle}>Cambiar Contraseña</h3>

          <div className={styles.field}>
            <label>Contraseña Actual</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Nueva Contraseña</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button className={styles.btnPrimary} onClick={guardarCambios}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
