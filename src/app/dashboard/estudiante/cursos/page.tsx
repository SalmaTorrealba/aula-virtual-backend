"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function CursosPage() {
  const router = useRouter();

  const cursos = [
    {
      id: 1,
      nombre: "Seguridad Industrial Avanzada",
      precio: 49.99,
      profesor: "Ing. Carlos López",
      imagen: "/curso1.jpg",
    },
    {
      id: 2,
      nombre: "Primeros Auxilios",
      precio: 39.99,
      profesor: "Lic. Andrea Ruiz",
      imagen: "/curso2.jpg",
    },
  ];

  const comprarCurso = (curso) => {
    // Guardar en localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(curso);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redirigir a la cesta
    router.push("/dashboard/estudiante/cesta");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Cursos Disponibles</h1>

      <div className={styles.grid}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.card}>
            <img src={curso.imagen} className={styles.img} />

            <h3 className={styles.cardTitle}>{curso.nombre}</h3>
            <p className={styles.text}>Profesor: {curso.profesor}</p>
            <p className={styles.precio}>€{curso.precio}</p>

            <button
              className={styles.btnPrimary}
              onClick={() => comprarCurso(curso)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
