import styles from "./page.module.css";
import Link from "next/link";

export default function ResultadoExamenPage() {
  const resultado = {
    nota: 8.4,
    aciertos: 17,
    fallos: 3,
    tiempo: "24 minutos",
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Resultado del Examen</h1>

      <div className={styles.card}>
        <p className={styles.label}>
          Nota final: <span>{resultado.nota}</span>
        </p>

        <p className={styles.label}>
          Aciertos: <span>{resultado.aciertos}</span>
        </p>

        <p className={styles.label}>
          Fallos: <span>{resultado.fallos}</span>
        </p>

        <p className={styles.label}>
          Tiempo empleado: <span>{resultado.tiempo}</span>
        </p>

        <Link
          href="/dashboard/estudiante/examenes"
          className={styles.btnPrimary}
        >
          Volver a mis exámenes
        </Link>
      </div>
    </div>
  );
}
