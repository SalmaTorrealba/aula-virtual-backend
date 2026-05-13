"use client";

import Link from "next/link";
import styles from "./CursoSidebar.module.css";

export default function CursoSidebar({ id }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Curso</h2>

      <nav className={styles.menu}>
        <Link href={`/dashboard/profesor/cursos/${id}`} className={styles.item}>Resumen</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/modulos`} className={styles.item}>Módulos</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/tareas`} className={styles.item}>Tareas</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/examenes`} className={styles.item}>Exámenes</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/alumnos`} className={styles.item}>Alumnos</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/chat`} className={styles.item}>Chat</Link>
        <Link href={`/dashboard/profesor/cursos/${id}/reportes`} className={styles.item}>Reportes</Link>
      </nav>
    </aside>
  );
}
