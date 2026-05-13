"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function AuditoriaPage() {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroUsuario, setFiltroUsuario] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");

  const logs = [
    { id: 1, usuario: "Admin", tipo: "Login", fecha: "2024-03-15", detalle: "Inicio de sesión exitoso" },
    { id: 2, usuario: "Juan Pérez", tipo: "Pago", fecha: "2024-03-14", detalle: "Pago completado 49.99€" },
    { id: 3, usuario: "Sistema", tipo: "Nómina", fecha: "2024-03-13", detalle: "Nómina generada" },
  ];

  const filtrados = logs.filter((l) => {
    return (
      (filtroTipo ? l.tipo === filtroTipo : true) &&
      (filtroUsuario ? l.usuario.toLowerCase().includes(filtroUsuario.toLowerCase()) : true) &&
      (filtroFecha ? l.fecha === filtroFecha : true)
    );
  });

  return (
    <div className="content">
      <h1 className={styles.title}>Auditoría del Sistema</h1>

      {/* Filtros */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Filtrar por usuario"
          value={filtroUsuario}
          onChange={(e) => setFiltroUsuario(e.target.value)}
        />

        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          <option value="">Tipo</option>
          <option value="Login">Login</option>
          <option value="Pago">Pago</option>
          <option value="Nómina">Nómina</option>
        </select>

        <input
          type="date"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
        />
      </div>

      {/* Tabla */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Detalle</th>
            </tr>
          </thead>

          <tbody>
            {filtrados.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.usuario}</td>
                <td>{l.tipo}</td>
                <td>{l.fecha}</td>
                <td>{l.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
