"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CrearNominaPage() {
  const [empleado, setEmpleado] = useState("");
  const [mes, setMes] = useState("");
  const [monto, setMonto] = useState("");
  const [estado, setEstado] = useState("Pagado");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Nómina registrada (demo)");
  };

  return (
    <div className="content">
      <h1 className="title">Registrar Nómina</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal} onSubmit={handleSubmit}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Empleado</label>
              <input
                type="text"
                placeholder="Nombre del empleado"
                value={empleado}
                onChange={(e) => setEmpleado(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Mes</label>
              <input
                type="text"
                placeholder="Ej: Marzo 2024"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
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
                <option value="Pagado">Pagado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Registrar Nómina</button>
        </form>
      </div>
    </div>
  );
}
