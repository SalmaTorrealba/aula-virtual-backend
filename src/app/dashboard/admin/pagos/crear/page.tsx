"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CrearPagoPage() {
  const [usuario, setUsuario] = useState("");
  const [curso, setCurso] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("Completado");
  const [monto, setMonto] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pago registrado (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Registrar Pago</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Usuario</label>
              <input
                type="text"
                placeholder="Nombre del usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Curso</label>
              <input
                type="text"
                placeholder="Nombre del curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              />
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

            <div className={styles.formGroup}>
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className={styles.select}
              >
                <option value="Completado">Completado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Fallido">Fallido</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Registrar Pago</button>
        </form>
      </div>
    </div>
  );
}
