"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function EntregarTareaPage() {
  const [archivo, setArchivo] = useState(null);

  const tarea = {
    titulo: "Informe de Seguridad Industrial",
    curso: "Seguridad Industrial Avanzada",
    fecha: "2026-05-10",
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Entregar Tarea</h1>

      <div className={styles.card}>
        <p className={styles.label}>
          Tarea: <span>{tarea.titulo}</span>
        </p>

        <p className={styles.label}>
          Curso: <span>{tarea.curso}</span>
        </p>

        <p className={styles.label}>
          Fecha límite: <span>{tarea.fecha}</span>
        </p>

        <div className={styles.uploadBox}>
          <label className={styles.uploadLabel}>Subir archivo:</label>
          <input
            type="file"
            className={styles.fileInput}
            onChange={(e) => setArchivo(e.target.files[0])}
          />
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Comentarios opcionales..."
        />

        <button className={styles.btnPrimary}>
          Enviar Tarea
        </button>

        <Link href="/dashboard/estudiante/tareas" className={styles.btnSecondary}>
          Cancelar
        </Link>
      </div>
    </div>
  );
}
