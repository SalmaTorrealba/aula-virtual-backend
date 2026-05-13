"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function MisExamenesPage() {
  const examenes = [
    {
      id: 1,
      titulo: "Examen Final — Seguridad Industrial Avanzada",
      estado: "Pendiente",
      curso: "Seguridad Industrial Avanzada",
    },
    {
      id: 2,
      titulo: "Evaluación — Primeros Auxilios",
      estado: "Completado",
      curso: "Primeros Auxilios",
    },
    {
      id: 3,
      titulo: "Prueba — Manejo de Herramientas",
      estado: "Pendiente",
      curso: "Manejo de Herramientas",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mis Exámenes</h1>

      <div className={styles.grid}>
        {examenes.map((examen) => (
          <div key={examen.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{examen.titulo}</h3>
            <p className={styles.curso}>Curso: {examen.curso}</p>

            <span
              className={`${styles.estado} ${
                examen.estado === "Pendiente"
                  ? styles.pendiente
                  : styles.completado
              }`}
            >
              {examen.estado}
            </span>

            {examen.estado === "Pendiente" ? (
              <Link
                href={`/dashboard/estudiante/examenes/${examen.id}`}
                className={styles.btnPrimary}
              >
                Presentar Examen
              </Link>
            ) : (
              <Link
                href={`/dashboard/estudiante/examenes/${examen.id}/resultado`}
                className={styles.btnPrimary}
              >
                Ver Resultado
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
