"use client";

import { useState } from "react";
import styles from "./ProfessorTopBar.module.css";

export default function ProfessorTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <h2 className={styles.title}>Bienvenido, Profesor</h2>

      <div className={styles.user} onClick={() => setOpen(!open)}>
        <span className={styles.name}>Profesor</span>
        <img src="/avatars/profesor.svg" className={styles.avatar} />

        {open && (
          <div className={styles.menu}>
            <a href="/dashboard/profesor/perfil">Mi Perfil</a>
            <a href="/auth/login" className={styles.login}>Cerrar Sesión</a>
          </div>
        )}
      </div>
    </header>
  );
}
