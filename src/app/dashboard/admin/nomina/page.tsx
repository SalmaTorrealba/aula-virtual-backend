"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function NominaPage() {
  const nominas = [
    {
      id: 1,
      empleado: "Juan Pérez",
      mes: "Marzo 2024",
      estado: "Pagado",
      monto: 1200,
    },
    {
      id: 2,
      empleado: "Ana Gómez",
      mes: "Marzo 2024",
      estado: "Pendiente",
      monto: 980,
    },
  ];

  const eliminarNomina = (id: number) => {
    alert(`Nómina ${id} eliminada (demo)`);
  };

  return (
    <div className="content">
      <h1 className={styles.title}>Gestión de Nómina</h1>

      <div className={styles.actions}>
        <Link href="/dashboard/admin/nomina/crear" className={styles.btnPrimary}>
          + Registrar Nómina
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Empleado</th>
              <th>Mes</th>
              <th>Estado</th>
              <th>Monto (€)</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {nominas.map((n) => (
              <tr key={n.id}>
                <td>{n.id}</td>
                <td>{n.empleado}</td>
                <td>{n.mes}</td>
                <td>{n.estado}</td>
                <td>{n.monto}</td>
                <td>
                  <div className={styles.actionsRow}>
                    <Link
                      href={`/dashboard/admin/nomina/editar/${n.id}`}
                      className={styles.btnEdit}
                    >
                      Editar
                    </Link>

                    <button
                      className={styles.btnDelete}
                      onClick={() => eliminarNomina(n.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
