"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function VerReportePage(props: any) {
  const router = useRouter();
  const { id } = use(props.params);

  // Datos de ejemplo (luego los conectas a tu BD)
  const reporte = {
    titulo: "Reporte Financiero - Abril",
    fecha: "2026-05-01",
    descripcion: "Resumen de ingresos, egresos y balance general del mes.",
    contenido: `
      - Ingresos totales: $12,500
      - Egresos totales: $7,200
      - Balance final: $5,300
      - Cursos con mayor ingreso: Seguridad Industrial, Primeros Auxilios
      - Gastos principales: Material didáctico, mantenimiento de plataforma
    `,
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>{reporte.titulo}</h1>

        <p className={styles.date}>Fecha: {reporte.fecha}</p>

        <p className={styles.desc}>{reporte.descripcion}</p>

        <div className={styles.contentBox}>
          <pre className={styles.content}>{reporte.contenido}</pre>
        </div>

        <button className={styles.btnBack} onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
