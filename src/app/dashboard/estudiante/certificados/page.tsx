"use client";

import styles from "./page.module.css";

export default function CertificadosPage() {
  const certificados = [
    {
      id: 1,
      nombre: "Seguridad Industrial Avanzada",
      fecha: "2026-05-15",
      estado: "Disponible",
    },
    {
      id: 2,
      nombre: "Primeros Auxilios",
      fecha: "2026-04-20",
      estado: "Disponible",
    },
    {
      id: 3,
      nombre: "Manejo de Herramientas",
      fecha: "2026-03-10",
      estado: "En proceso",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mis Certificados</h1>

      <div className={styles.grid}>
        {certificados.map((cert) => (
          <div key={cert.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{cert.nombre}</h3>
            <p className={styles.text}>Fecha: {cert.fecha}</p>
            <span
              className={`${styles.badge} ${
                cert.estado === "Disponible"
                  ? styles.disponible
                  : styles.proceso
              }`}
            >
              {cert.estado}
            </span>

            {cert.estado === "Disponible" && (
              <button className={styles.btnPrimary}>
                Descargar PDF
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
