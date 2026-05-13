import styles from "./page.module.css";
import Link from "next/link";

export default function CursosProfesor() {
  const cursos = [
    {
      id: 1,
      titulo: "Seguridad Industrial Avanzada",
      alumnos: 32,
      imagen: "/img/curso1.jpg",
    },
    {
      id: 2,
      titulo: "Eficiencia Energética en Plantas",
      alumnos: 21,
      imagen: "/img/curso2.jpg",
    },
    {
      id: 3,
      titulo: "Primeros Auxilios",
      alumnos: 18,
      imagen: "/img/curso3.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mis Cursos</h1>

        <Link href="/dashboard/profesor/cursos/crear" className={styles.btnPrimary}>
          + Crear Curso
        </Link>
      </div>

      <div className={styles.grid}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${curso.imagen})` }}
            />

            <div className={styles.info}>
              <h3 className={styles.courseTitle}>{curso.titulo}</h3>
              <p className={styles.meta}>{curso.alumnos} alumnos</p>

              <Link
                href={`/dashboard/profesor/cursos/${curso.id}`}
                className={styles.btnSecondary}
              >
                Gestionar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
