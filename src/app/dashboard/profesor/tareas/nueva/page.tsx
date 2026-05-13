"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function NuevaTareaPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    fechaEntrega: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarTarea = () => {
    // Aquí guardarías en BD
    router.push("/dashboard/profesor/tareas");
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Crear Nueva Tarea</h1>

        <div className={styles.form}>
          <div className={styles.field}>
            <label>Nombre de la tarea</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ej: Informe de Seguridad"
            />
          </div>

          <div className={styles.field}>
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Describe lo que el alumno debe entregar"
            />
          </div>

          <div className={styles.field}>
            <label>Fecha de entrega</label>
            <input
              type="date"
              name="fechaEntrega"
              value={form.fechaEntrega}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={guardarTarea}>
            Guardar Tarea
          </button>

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
