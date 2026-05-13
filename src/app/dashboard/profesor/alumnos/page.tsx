"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function AlumnosPage() {
  const router = useRouter();

  // Datos de ejemplo (luego los conectas a tu BD)
  const alumnos = [
    { id: 1, nombre: "Juan Pérez", curso: "Seguridad Industrial" },
    { id: 2, nombre: "María López", curso: "Primeros Auxilios" },
    { id: 3, nombre: "Carlos Ruiz", curso: "Energía Solar" },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Alumnos</h1>

        <div className={styles.list}>
          {alumnos.map((alumno) => (
            <div key={alumno.id} className={styles.item}>
              <div className={styles.info}>
                <span className={styles.name}>{alumno.nombre}</span>
                <span className={styles.course}>{alumno.curso}</span>
              </div>

              <button
                className={styles.btnView}
                onClick={() =>
                  router.push(`/dashboard/profesor/alumnos/${alumno.id}`)
                }
              >
                Ver
              </button>
            </div>
          ))}
        </div>

        <button className={styles.btnBack} onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
