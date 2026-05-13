"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function MisTareasPage() {
  const tareas = [
    {
      id: 1,
      titulo: "Informe de Seguridad Industrial",
      curso: "Seguridad Industrial Avanzada",
      fecha: "2026-05-10",
      estado: "Pendiente",
    },
    {
      id: 2,
      titulo: "Cuestionario de Primeros Auxilios",
      curso: "Primeros Auxilios",
      fecha: "2026-05-08",
      estado: "Entregado",
    },
    {
      id: 3,
      titulo: "Reporte de Herramientas",
      curso: "Manejo de Herramientas",
      fecha: "2026-05-12",
      estado: "Pendiente",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mis Tareas</h1>

      <div className={styles.grid}>
        {tareas.map((tarea) => (
          <div key={tarea.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{tarea.titulo}</h3>
            <p className={styles.curso}>Curso: {tarea.curso}</p>
            <p className={styles.fecha}>Fecha límite: {tarea.fecha}</p>

            {tarea.estado === "Pendiente" ? (
              <Link
                href={`/dashboard/estudiante/tareas/${tarea.id}/entregar`}
                className={styles.btnPrimary}
              >
                Entregar Tarea
              </Link>
            ) : (
              <Link
                href={`/dashboard/estudiante/tareas/${tarea.id}/ver`}
                className={styles.btnPrimary}
              >
                Ver Entrega
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
