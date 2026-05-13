"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function EditarUsuarioPage({ params }: any) {
  const userId = params.id;

  // Datos de ejemplo (luego se conectará a BD)
  const [nombre, setNombre] = useState("Ejemplo Usuario");
  const [email, setEmail] = useState("usuario@correo.com");
  const [rol, setRol] = useState("Admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Usuario actualizado (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Editar Usuario</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Nombre completo</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
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
                <option value="Estudiante">Estudiante</option>
                <option value="Profesor">Profesor</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar cambios</button>
        </form>
      </div>
    </div>
  );
}
