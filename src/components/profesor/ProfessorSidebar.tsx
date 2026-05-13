"use client";

import Link from "next/link";
import styles from "./ProfessorSidebar.module.css";

export default function ProfessorSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Profesor</h2>

      <nav className={styles.menu}>
        <Link href="/dashboard/profesor" className={styles.item}>Dashboard</Link>
        <Link href="/dashboard/profesor/cursos" className={styles.item}>Cursos</Link>
        <Link href="/dashboard/profesor/alumnos" className={styles.item}>Alumnos</Link>
        <Link href="/dashboard/profesor/tareas" className={styles.item}>Tareas</Link>
        <Link href="/dashboard/profesor/examenes" className={styles.item}>Exámenes</Link>
        <Link href="/dashboard/profesor/reportes" className={styles.item}>Reportes</Link>
        <Link href="/dashboard/profesor/chat" className={styles.item}>Chat</Link>
      </nav>
    </aside>
  );
}
