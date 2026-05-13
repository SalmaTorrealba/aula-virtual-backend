"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function VerAlumnoPage(props: any) {
  const router = useRouter();
  const { id } = use(props.params);

  // Datos de ejemplo (luego los conectas a tu BD)
  const alumno = {
    nombre: "Juan Pérez",
    curso: "Seguridad Industrial",
    progreso: 80,
    tareas: [
      { id: 1, titulo: "Tarea 1", estado: "Entregada" },
      { id: 2, titulo: "Tarea 2", estado: "Pendiente" },
    ],
    examenes: [
      { id: 1, titulo: "Examen 1", nota: "8.5" },
      { id: 2, titulo: "Examen 2", nota: "7.0" },
    ],
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>{alumno.nombre}</h1>
        <p className={styles.subtitle}>{alumno.curso}</p>

        {/* PROGRESO */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Progreso</h2>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${alumno.progreso}%` }}
            ></div>
          </div>
          <p className={styles.progressText}>{alumno.progreso}% completado</p>
        </div>

        {/* TAREAS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tareas</h2>
          <div className={styles.list}>
            {alumno.tareas.map((tarea) => (
              <div key={tarea.id} className={styles.item}>
                <span>{tarea.titulo}</span>
                <span className={styles.badge}>{tarea.estado}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EXÁMENES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Exámenes</h2>
          <div className={styles.list}>
            {alumno.examenes.map((examen) => (
              <div key={examen.id} className={styles.item}>
                <span>{examen.titulo}</span>
                <span className={styles.badge}>{examen.nota}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MENSAJES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Mensajes</h2>
          <button
            className={styles.btnChat}
            onClick={() =>
              router.push(`/dashboard/profesor/alumnos/${id}/chat`)
            }
          >
            Abrir Chat
          </button>
        </div>

        <button className={styles.btnBack} onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
