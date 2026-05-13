"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CrearReportePage() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reporte creado (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Crear Reporte</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Título del reporte</label>
              <input
                type="text"
                placeholder="Ej: Ingresos del mes"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Categoría</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={styles.select}
              >
                <option value="">Seleccionar</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Pagos">Pagos</option>
                <option value="Nómina">Nómina</option>
                <option value="Cursos">Cursos</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Fecha</label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Monto (€)</label>
              <input
                type="number"
                placeholder="0.00"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Descripción</label>
            <textarea
              placeholder="Detalles del reporte"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className={styles.textarea}
            />
          </div>

          <button className={styles.btnPrimary}>Crear Reporte</button>
        </form>
      </div>
    </div>
  );
}
