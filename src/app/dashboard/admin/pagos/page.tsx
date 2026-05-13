"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function PagosPage() {
  const pagos = [
    {
      id: 1,
      usuario: "Juan Pérez",
      curso: "Máster en Eficiencia Energética",
      fecha: "2024-03-12",
      estado: "Completado",
      monto: 49.99,
    },
    {
      id: 2,
      usuario: "Ana Gómez",
      curso: "Seguridad Industrial",
      fecha: "2024-03-15",
      estado: "Pendiente",
      monto: 29.99,
    },
  ];

  const eliminarPago = (id: number) => {
    alert(`Pago ${id} eliminado (demo)`);
  };

  return (
    <div className="content">
      <h1 className={styles.title}>Gestión de Pagos</h1>

      <div className={styles.actions}>
        <Link href="/dashboard/admin/pagos/crear" className={styles.btnPrimary}>
          + Registrar Pago
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Curso</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Monto (€)</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {pagos.map((pago) => (
              <tr key={pago.id}>
                <td>{pago.id}</td>
                <td>{pago.usuario}</td>
                <td>{pago.curso}</td>
                <td>{pago.fecha}</td>
                <td>{pago.estado}</td>
                <td>{pago.monto}</td>
                <td>
                  <div className={styles.actionsRow}>
                    <Link
                      href={`/dashboard/admin/pagos/editar/${pago.id}`}
                      className={styles.btnEdit}
                    >
                      Editar
                    </Link>

                    <button
                      className={styles.btnDelete}
                      onClick={() => eliminarPago(pago.id)}
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
