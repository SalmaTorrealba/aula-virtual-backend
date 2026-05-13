import Link from "next/link";
import styles from "./page.module.css";

export default function PreguntasExamenPage() {
  const preguntas = [
    {
      id: 1,
      texto: "¿Cuál es el equipo de protección individual obligatorio en trabajos en altura?",
    },
    {
      id: 2,
      texto: "¿Qué documento certifica la formación en seguridad industrial?",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Preguntas del Examen</h1>

      <div className={styles.card}>
        {preguntas.map((p) => (
          <div key={p.id} className={styles.pregunta}>
            <p>{p.texto}</p>
            <input className={styles.input} placeholder="Tu respuesta..." />
          </div>
        ))}

        <Link
          href="../resultado"
          className={styles.btnPrimary}
        >
          Enviar Examen
        </Link>
      </div>
    </div>
  );
}
