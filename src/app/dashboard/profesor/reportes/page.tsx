"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ReportesPage() {
  const router = useRouter();

  // Datos de ejemplo
  const reportes = [
    { id: 1, titulo: "Reporte Financiero - Abril", fecha: "2026-05-01" },
    { id: 2, titulo: "Reporte de Cursos Activos", fecha: "2026-04-28" },
    { id: 3, titulo: "Reporte de Alumnos", fecha: "2026-04-20" },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Reportes</h1>

        {/* BOTÓN CREAR */}
        <button
          className={styles.btnCreate}
          onClick={() => router.push("/dashboard/profesor/reportes/nuevo")}
        >
          Crear nuevo reporte
        </button>

        {/* LISTA DE REPORTES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Historial de reportes</h2>

          <div className={styles.list}>
            {reportes.map((reporte) => (
              <div key={reporte.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.name}>{reporte.titulo}</span>
                  <span className={styles.date}>Fecha: {reporte.fecha}</span>
                </div>

                <button
                  className={styles.btnView}
                  onClick={() =>
                    router.push(`/dashboard/profesor/reportes/${reporte.id}`)
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
