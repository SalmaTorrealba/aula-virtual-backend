import styles from "./page.module.css";
import Link from "next/link";

export default function ReportesPage() {
  const metricas = [
    { titulo: "Ingresos del mes", valor: "4.320 €" },
    { titulo: "Pagos completados", valor: "128" },
    { titulo: "Nóminas pagadas", valor: "32" },
    { titulo: "Cursos vendidos", valor: "54" },
  ];

  const actividad = [
    { id: 1, tipo: "Pago completado", fecha: "2024-03-15", detalle: "Juan Pérez - 49.99€" },
    { id: 2, tipo: "Nómina pagada", fecha: "2024-03-14", detalle: "Ana Gómez - 980€" },
    { id: 3, tipo: "Curso vendido", fecha: "2024-03-13", detalle: "Seguridad Industrial" },
  ];

  return (
    <div className="content">
      <h1 className={styles.title}>Reportes y Métricas</h1>

      {/* Botón Nuevo Reporte */}
      <div className={styles.actions}>
        <Link href="/dashboard/admin/reportes/crear" className={styles.btnSecondary}>
          + Nuevo Reporte
        </Link>
      </div>

      {/* Tarjetas de métricas */}
      <div className={styles.cardsGrid}>
        {metricas.map((m, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.cardTitle}>{m.titulo}</span>
            <span className={styles.cardValue}>{m.valor}</span>
          </div>
        ))}
      </div>

      {/* Actividad reciente */}
      <h2 className={styles.subtitle}>Actividad Reciente</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Detalle</th>
            </tr>
          </thead>

          <tbody>
            {actividad.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.tipo}</td>
                <td>{a.fecha}</td>
                <td>{a.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
