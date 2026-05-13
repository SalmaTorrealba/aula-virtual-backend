"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function PerfilAdminPage() {
  const [nombre, setNombre] = useState("Administrador");
  const [email, setEmail] = useState("admin@aula.com");
  const [telefono, setTelefono] = useState("+34 600 000 000");

  return (
    <div className="content">
      <h1 className={styles.title}>Mi Perfil</h1>

      <div className={styles.card}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}></div>
          <div>
            <h2 className={styles.name}>{nombre}</h2>
            <p className={styles.role}>Administrador del Sistema</p>
          </div>
        </div>

        <form className={styles.form}>
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
              <label>Teléfono</label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
