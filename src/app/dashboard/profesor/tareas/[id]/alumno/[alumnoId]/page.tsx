"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function VerEntregaPage(props: any) {
  const router = useRouter();
  const { id, alumnoId } = use(props.params);

  // Datos de ejemplo (luego los conectas a tu BD real)
  const entrega = {
    alumno: "Juan Pérez",
    tarea: "Informe de Seguridad",
    archivo: "informe-seguridad.pdf",
    fechaEntrega: "2026-05-08",
    estado: "Entregado",
    comentarios: "Buen trabajo, pero falta detallar los riesgos eléctricos.",
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Entrega del Alumno</h1>

        <div className={styles.infoBox}>
          <p><strong>Alumno:</strong> {entrega.alumno}</p>
          <p><strong>Tarea:</strong> {entrega.tarea}</p>
          <p><strong>Fecha de entrega:</strong> {entrega.fechaEntrega}</p>
          <p><strong>Estado:</strong> {entrega.estado}</p>
        </div>

        {/* ARCHIVO */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Archivo entregado</h2>

          <div className={styles.fileBox}>
            <span>{entrega.archivo}</span>
            <button className={styles.btnDownload}>Descargar</button>
          </div>
        </div>

        {/* COMENTARIOS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Comentarios del profesor</h2>

          <div className={styles.commentBox}>
            {entrega.comentarios}
          </div>
        </div>

        {/* BOTONES */}
        <div className={styles.buttons}>
        

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
