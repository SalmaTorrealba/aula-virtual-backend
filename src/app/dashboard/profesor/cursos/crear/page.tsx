"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function CrearCurso() {
  const router = useRouter();

  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    duracion: "",
    descripcion: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const crearCurso = () => {
    // Aquí podrías guardar en BD, pero por ahora solo redirigimos
    router.push("/dashboard/profesor/cursos");
  };

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Crear Curso</h1>

        <div className={styles.formGrid}>
          <div className={styles.column}>
            <div className={styles.field}>
              <label>Título del Curso</label>
              <input
                type="text"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label>Categoría</label>
              <select
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">Seleccionar</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Energía">Energía</option>
                <option value="Primeros Auxilios">Primeros Auxilios</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Duración (horas)</label>
              <input
                type="number"
                name="duracion"
                value={form.duracion}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.field}>
              <label>Descripción</label>
              <textarea
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            <div className={styles.field}>
              <label>Imagen del Curso (URL)</label>
              <input
                type="text"
                name="imagen"
                value={form.imagen}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
        </div>

        <button className={styles.btnPrimary} onClick={crearCurso}>
          Crear Curso
        </button>
      </div>
    </div>
  );
}
