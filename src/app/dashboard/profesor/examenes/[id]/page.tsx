"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function VerExamenPage(props: any) {
  const router = useRouter();
  const { id } = use(props.params);

  // Datos de ejemplo (luego los conectas a tu BD)
  const examen = {
    titulo: "Examen de Seguridad Industrial",
    descripcion: "Evaluación teórica sobre riesgos laborales y medidas preventivas.",
    fecha: "2026-05-15",
    duracion: 60,
    preguntas: 20,
    estado: "Activo",
    alumnos: [
      { id: 1, nombre: "Juan Pérez", estado: "Presentado" },
      { id: 2, nombre: "María López", estado: "Pendiente" },
      { id: 3, nombre: "Carlos Ruiz", estado: "Presentado" },
    ],
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>{examen.titulo}</h1>

        <p className={styles.desc}>{examen.descripcion}</p>

        <div className={styles.infoBox}>
          <p><strong>Fecha:</strong> {examen.fecha}</p>
          <p><strong>Duración:</strong> {examen.duracion} minutos</p>
          <p><strong>Preguntas:</strong> {examen.preguntas}</p>
          <p><strong>Estado:</strong> {examen.estado}</p>
        </div>

        {/* LISTA DE ALUMNOS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Alumnos</h2>

          <div className={styles.list}>
            {examen.alumnos.map((alumno) => (
              <div key={alumno.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{alumno.nombre}</span>
                  <span className={styles.status}>{alumno.estado}</span>
                </div>
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
