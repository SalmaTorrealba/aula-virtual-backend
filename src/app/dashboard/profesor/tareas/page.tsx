"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function TareasPage() {
  const router = useRouter();

  // Datos de ejemplo
  const tareasPendientes = [
    { id: 1, titulo: "Informe de Seguridad", fecha: "2026-05-10" },
    { id: 2, titulo: "Cuestionario de Primeros Auxilios", fecha: "2026-05-12" },
  ];

  const tareasEntregadas = [
    { id: 3, titulo: "Reporte de Herramientas", fecha: "2026-05-01" },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Tareas</h1>

        {/* BOTÓN CREAR */}
        <button
          className={styles.btnCreate}
          onClick={() => router.push("/dashboard/profesor/tareas/nueva")}
        >
          Crear nueva tarea
        </button>

        {/* PENDIENTES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Por entregar</h2>

          <div className={styles.list}>
            {tareasPendientes.map((tarea) => (
              <div key={tarea.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{tarea.titulo}</span>
                  <span className={styles.date}>Fecha: {tarea.fecha}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/tareas/${tarea.id}`)
                  }
                >
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ENTREGADAS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Entregadas</h2>

          <div className={styles.list}>
            {tareasEntregadas.map((tarea) => (
              <div key={tarea.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{tarea.titulo}</span>
                  <span className={styles.date}>Fecha: {tarea.fecha}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/tareas/${tarea.id}`)
                  }
                >
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
