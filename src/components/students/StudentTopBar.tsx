"use client";

import { useState } from "react";
import styles from "./StudentTopBar.module.css";

export default function StudentTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <h2 className={styles.title}>Bienvenida, Samara</h2>

      <div className={styles.userSection} onClick={() => setOpen(!open)}>
        <span className={styles.name}>Samara</span>
        <img src="/avatars/usuario.svg" className={styles.avatar} />

        {open && (
          <div className={styles.menu}>
            <a href="/dashboard/estudiante/perfil">Mi Perfil</a>
            <a href="/auth/login" className={styles.login}>Cerrar Sesión</a>
          </div>
        )}
      </div>
    </header>
  );
}
