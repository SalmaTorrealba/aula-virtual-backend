"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function SolicitarTutoriaPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Solicitar Tutoría</h1>

      <div className={styles.card}>
        <label className={styles.label}>Seleccionar fecha:</label>
        <input type="date" className={styles.input} />

        <label className={styles.label}>Seleccionar hora:</label>
        <input type="time" className={styles.input} />

        <button className={styles.btnPrimary}>Enviar Solicitud</button>

        <Link href="/dashboard/estudiante/tutorias" className={styles.btnSecondary}>
          Cancelar
        </Link>
      </div>
    </div>
  );
}
