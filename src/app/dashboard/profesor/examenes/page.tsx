"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ExamenesPage() {
  const router = useRouter();

  // Datos de ejemplo (luego los conectas a tu BD)
  const examenesActivos = [
    { id: 1, titulo: "Examen de Seguridad Industrial", fecha: "2026-05-15" },
    { id: 2, titulo: "Examen de Primeros Auxilios", fecha: "2026-05-20" },
  ];

  const examenesFinalizados = [
    { id: 3, titulo: "Examen de Energía Solar", fecha: "2026-04-28" },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Exámenes</h1>

        {/* BOTÓN CREAR */}
        <button
          className={styles.btnCreate}
          onClick={() => router.push("/dashboard/profesor/examenes/nuevo")}
        >
          Crear nuevo examen
        </button>

        {/* ACTIVOS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Activos</h2>

          <div className={styles.list}>
            {examenesActivos.map((examen) => (
              <div key={examen.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{examen.titulo}</span>
                  <span className={styles.date}>Fecha: {examen.fecha}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/examenes/${examen.id}`)
                  }
                >
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FINALIZADOS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Finalizados</h2>

          <div className={styles.list}>
            {examenesFinalizados.map((examen) => (
              <div key={examen.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{examen.titulo}</span>
                  <span className={styles.date}>Fecha: {examen.fecha}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/examenes/${examen.id}`)
                  }
                >
                  Ver
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
