"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function TutoríasPage() {
  const tutorias = [
    {
      id: 1,
      profesor: "Ing. Carlos López",
      fecha: "2026-05-10",
      hora: "10:00 AM",
      estado: "Pendiente",
    },
    {
      id: 2,
      profesor: "Lic. Andrea Ruiz",
      fecha: "2026-05-12",
      hora: "4:00 PM",
      estado: "Confirmada",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mis Tutorías</h1>

      <div className={styles.grid}>
        {tutorias.map((t) => (
          <div key={t.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{t.profesor}</h3>
            <p className={styles.text}>Fecha: {t.fecha}</p>
            <p className={styles.text}>Hora: {t.hora}</p>

            <span
              className={`${styles.estado} ${
                t.estado === "Pendiente" ? styles.pendiente : styles.confirmada
              }`}
            >
              {t.estado}
            </span>

            <Link
              href={`/dashboard/estudiante/tutorias/${t.id}/ver`}
              className={styles.btnPrimary}
            >
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/dashboard/estudiante/tutorias/1/solicitar"
        className={styles.btnPrimary}
      >
        Solicitar Nueva Tutoría
      </Link>
    </div>
  );
}
