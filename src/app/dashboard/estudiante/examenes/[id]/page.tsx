"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function PreguntasExamenPage() {
  const router = useRouter();

  // Tiempo total del examen (en segundos)
  const TIEMPO_TOTAL = 30 * 60; // 30 minutos
  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_TOTAL);

  // Cronómetro
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          router.push("../resultado"); // Auto-envía el examen
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [router]);

  // Formato mm:ss
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

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
      <div className={styles.header}>
        <h1 className={styles.title}>Examen — Preguntas</h1>

        <div className={styles.timer}>
          ⏱ {minutos}:{segundos.toString().padStart(2, "0")}
        </div>
      </div>

      <div className={styles.card}>
        {preguntas.map((p) => (
          <div key={p.id} className={styles.pregunta}>
            <p>{p.texto}</p>
            <input className={styles.input} placeholder="Tu respuesta..." />
          </div>
        ))}

        <Link href="../resultado" className={styles.btnPrimary}>
          Enviar Examen
        </Link>
      </div>
    </div>
  );
}
