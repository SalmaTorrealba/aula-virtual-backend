import styles from "./page.module.css";

export default function CursoPage() {
  const curso = {
    titulo: "Seguridad Industrial Avanzada",
    progreso: 65,
    notaMedia: 8.4,
    tareasPendientes: 2,
  };

  return (
    <div className={styles.wrapper}>
      
      {/* MÉTRICAS DEL CURSO */}
      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <h3 className={styles.metricValue}>{curso.notaMedia}</h3>
          <p className={styles.metricLabel}>Nota Media</p>
        </div>

        <div className={styles.metricCard}>
          <h3 className={styles.metricValue}>{curso.tareasPendientes}</h3>
          <p className={styles.metricLabel}>Tareas por Entregar</p>
        </div>

        <div className={styles.metricCard}>
          <h3 className={styles.metricValue}>{curso.progreso}%</h3>
          <p className={styles.metricLabel}>Progreso</p>
        </div>
      </div>

      {/* HEADER DEL CURSO */}
      <div className={styles.header}>
        <div className={styles.cover}></div>

        <div className={styles.info}>
          <h1 className={styles.title}>{curso.titulo}</h1>
          <p className={styles.progress}>Progreso: {curso.progreso}%</p>
          <button className={styles.btnPrimary}>Continuar Lección</button>
        </div>
      </div>

      {/* MÓDULOS */}
      <div className={styles.modules}>
        <h2 className={styles.sectionTitle}>Módulos del Curso</h2>

        <div className={styles.moduleCard}>
          <h3>Módulo 1: Fundamentos</h3>
          <ul>
            <li>Lección 1</li>
            <li>Lección 2</li>
            <li>Lección 3</li>
          </ul>
        </div>

        <div className={styles.moduleCard}>
          <h3>Módulo 2: Técnicas Avanzadas</h3>
          <ul>
            <li>Lección 1</li>
            <li>Lección 2</li>
            <li>Lección 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
