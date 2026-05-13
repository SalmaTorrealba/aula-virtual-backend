"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function NuevoExamenPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
    duracion: "",
    preguntas: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarExamen = () => {
    // Aquí guardarías en BD
    router.push("/dashboard/profesor/examenes");
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear Nuevo Examen</h1>

        <div className={styles.form}>
          <div className={styles.field}>
            <label>Nombre del examen</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: Examen de Seguridad Industrial"
            />
          </div>

          <div className={styles.field}>
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Describe el contenido del examen"
            />
          </div>

          <div className={styles.field}>
            <label>Fecha del examen</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Duración (minutos)</label>
            <input
              type="number"
              name="duracion"
              value={form.duracion}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: 60"
            />
          </div>

          <div className={styles.field}>
            <label>Número de preguntas</label>
            <input
              type="number"
              name="preguntas"
              value={form.preguntas}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: 20"
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={guardarExamen}>
            Guardar Examen
          </button>

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
