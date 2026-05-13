"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CrearCursoPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nivel, setNivel] = useState("");
  const [profesor, setProfesor] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [portada, setPortada] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Curso registrado (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Crear nuevo curso</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          {/* GRID DE DOS COLUMNAS */}
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Título del curso</label>
              <input
                type="text"
                placeholder="Ej: Introducción a la eficiencia energética"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Categoría</label>
              <input
                type="text"
                placeholder="Automatización, sostenibilidad..."
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Nivel</label>
              <input
                type="text"
                placeholder="Básico, intermedio, avanzado"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Profesor</label>
              <input
                type="text"
                placeholder="Nombre del profesor"
                value={profesor}
                onChange={(e) => setProfesor(e.target.value)}
              />
            </div>
          </div>

          {/* DESCRIPCIÓN (OCUPA TODO EL ANCHO) */}
          <div className={styles.formGroup}>
            <label>Descripción técnica</label>
            <textarea
              placeholder="Describe el contenido del curso..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          {/* OTRA FILA DE DOS COLUMNAS */}
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Precio (€)</label>
              <input
                type="number"
                placeholder="Ej: 120"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Imagen del curso</label>
              <input type="file" onChange={(e) => setImagen(e.target.files?.[0] || null)} />
            </div>

            <div className={styles.formGroup}>
              <label>Imagen de portada</label>
              <input type="file" onChange={(e) => setPortada(e.target.files?.[0] || null)} />
            </div>
          </div>

          <button className={styles.btnPrimary}>Registrar curso</button>
        </form>
      </div>
    </div>
  );
}
