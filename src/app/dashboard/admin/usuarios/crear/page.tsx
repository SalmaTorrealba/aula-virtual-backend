"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CrearUsuarioPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("Estudiante");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Usuario creado (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Crear Usuario</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Nombre completo</label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Rol</label>
              <select
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                className={styles.select}
              >
                <option value="Admin">Admin</option>
                <option value="Profesor">Profesor</option>
                <option value="Estudiante">Estudiante</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.btnPrimary}>Crear Usuario</button>
        </form>
      </div>
    </div>
  );
}
