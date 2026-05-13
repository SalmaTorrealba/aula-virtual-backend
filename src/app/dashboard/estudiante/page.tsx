import styles from "./page.module.css";
import Link from "next/link";

export default function EstudianteInicio() {
  const cursoActual = {
    titulo: "Curso de Seguridad Industrial",
    progreso: 65,
  };

  const misCursos = [
    { id: 1, titulo: "Primeros Auxilios", progreso: 20 },
    { id: 2, titulo: "Manejo de Herramientas", progreso: 0 },
    { id: 3, titulo: "Electricidad Básica", progreso: 10 },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Bienvenido</h1>

      {/* MÉTRICAS */}
      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <h3 className={styles.metricValue}>8.7</h3>
          <p className={styles.metricLabel}>Nota Media</p>
        </div>

        <div className={styles.metricCard}>
          <h3 className={styles.metricValue}>3</h3>
          <p className={styles.metricLabel}>Tareas por Entregar</p>
        </div>
      </div>

      {/* Mi Curso Actual */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mi Curso Actual</h2>

        <div className={styles.currentCourse}>
          <div className={styles.courseImage}></div>

          <div className={styles.courseInfo}>
            <h3>{cursoActual.titulo}</h3>
            <p>Progreso: {cursoActual.progreso}%</p>
            <button className={styles.btnPrimary}>Continuar Lección</button>
          </div>
        </div>
      </section>

      {/* Mis Cursos */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mis Cursos</h2>

        <div className={styles.grid}>
          {misCursos.map((curso) => (
            <div key={curso.id} className={styles.card}>
              <div className={styles.cardImage}></div>
              <h4>{curso.titulo}</h4>
              <p>Progreso: {curso.progreso}%</p>
            </div>
          ))}
        </div>

        <Link href="/dashboard/estudiante/mis-cursos">
  <button className={styles.btnSecondary}>Ver todos mis cursos</button>
</Link>


      </section>
    </div>
  );
}
