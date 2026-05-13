import styles from "./page.module.css";

export default function ProfesorDashboard() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Dashboard</h1>

      {/* MÉTRICAS */}
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.value}>5</span>
          <span className={styles.label}>Cursos</span>
        </div>

        <div className={styles.metric}>
          <span className={styles.value}>17</span>
          <span className={styles.label}>Alumnos</span>
        </div>

        <div className={styles.metric}>
          <span className={styles.value}>3</span>
          <span className={styles.label}>Entregas</span>
        </div>

        <div className={styles.metric}>
          <span className={styles.value}>4.8 ⭐</span>
          <span className={styles.label}>Valoración</span>
        </div>
      </div>

      {/* SECCIONES */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Progreso General</h2>
          <div className={styles.placeholder}>Gráfica</div>
        </div>

        <div className={styles.card}>
          <h2>Últimas Entregas</h2>
          <div className={styles.list}>
            <p>Carlos Ruiz — Seguridad Industrial</p>
            <p>María López — Eficiencia Energética</p>
            <p>Javier Peña — Primeros Auxilios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
