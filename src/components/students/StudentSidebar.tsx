"use client";

import Link from "next/link";
import styles from "./student-sidebar.module.css";

export default function StudentSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>🎓 Estudiante</h2>

      <nav className={styles.menu}>
        <a href="/dashboard/estudiante" className={styles.item}>🏠 Inicio</a>
        <a href="/dashboard/estudiante/cursos" className={styles.item}>📚 Cursos</a>
        <a href="/dashboard/estudiante/mis-cursos" className={styles.item}>📚 Mis Cursos</a>
        <a href="/dashboard/estudiante/examenes" className={styles.item}>📝 Exámenes</a>
        <a href="/dashboard/estudiante/tareas" className={styles.item}>📌 Tareas</a>
        <a href="/dashboard/estudiante/chat" className={styles.item}>💬 Chat</a>
        <a href="/dashboard/estudiante/tutorias" className={styles.item}>👨‍🏫 Tutorías</a>
        <a href="/dashboard/estudiante/certificados" className={styles.item}>📜 Certificados</a>
      </nav>
    </aside>
  );
}
