"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function VerTareaPage(props: any) {
  const router = useRouter();
  const { id } = use(props.params);

  // Datos de ejemplo (luego los conectas a tu BD)
  const tarea = {
    titulo: "Informe de Seguridad",
    descripcion: "El alumno debe entregar un informe detallado sobre los riesgos laborales.",
    fechaEntrega: "2026-05-10",
    estado: "Pendiente",
    alumnos: [
      { id: 1, nombre: "Juan Pérez", estado: "Entregado" },
      { id: 2, nombre: "María López", estado: "Pendiente" },
      { id: 3, nombre: "Carlos Ruiz", estado: "Pendiente" },
    ],
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>{tarea.titulo}</h1>

        <p className={styles.desc}>{tarea.descripcion}</p>

        <div className={styles.infoBox}>
          <span><strong>Fecha de entrega:</strong> {tarea.fechaEntrega}</span>
          <span><strong>Estado:</strong> {tarea.estado}</span>
        </div>

        {/* LISTA DE ALUMNOS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Entregas de alumnos</h2>

          <div className={styles.list}>
            {tarea.alumnos.map((alumno) => (
              <div key={alumno.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{alumno.nombre}</span>
                  <span className={styles.status}>{alumno.estado}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/tareas/${id}/alumno/${alumno.id}`)
                  }
                >
                  Ver entrega
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.btnBack} onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
