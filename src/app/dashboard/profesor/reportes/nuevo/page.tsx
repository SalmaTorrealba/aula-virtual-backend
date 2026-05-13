"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function NuevoReportePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    contenido: "",
    fecha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarReporte = () => {
    // Aquí guardarías en BD
    router.push("/dashboard/profesor/reportes");
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear Nuevo Reporte</h1>

        <div className={styles.form}>
          <div className={styles.field}>
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: Reporte Financiero - Abril"
            />
          </div>

          <div className={styles.field}>
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Breve descripción del reporte"
            />
          </div>

          <div className={styles.field}>
            <label>Contenido</label>
            <textarea
              name="contenido"
              value={form.contenido}
              onChange={handleChange}
              className={styles.textareaLarge}
              placeholder="Escribe aquí el contenido del reporte"
            />
          </div>

          <div className={styles.field}>
            <label>Fecha</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={guardarReporte}>
            Guardar Reporte
          </button>

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
