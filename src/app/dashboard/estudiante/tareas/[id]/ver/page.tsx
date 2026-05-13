import Link from "next/link";
import styles from "./page.module.css";

export default function VerEntregaPage() {
  const entrega = {
    archivo: "informe_seguridad.pdf",
    fechaEntrega: "2026-05-08",
    nota: "9.2",
    comentarios: "Excelente trabajo, bien estructurado.",
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Entrega Realizada</h1>

      <div className={styles.card}>
        <p className={styles.label}>
          Archivo enviado: <span>{entrega.archivo}</span>
        </p>

        <p className={styles.label}>
          Fecha de entrega: <span>{entrega.fechaEntrega}</span>
        </p>

        <p className={styles.label}>
          Nota: <span>{entrega.nota}</span>
        </p>

        <p className={styles.label}>
          Comentarios del instructor:
          <br />
          <span>{entrega.comentarios}</span>
        </p>

        <Link href="/dashboard/estudiante/tareas" className={styles.btnPrimary}>
          Volver a mis tareas
        </Link>
      </div>
    </div>
  );
}
