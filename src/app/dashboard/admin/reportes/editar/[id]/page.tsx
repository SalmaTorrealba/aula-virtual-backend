import styles from "./editarreportes.css";

export default function EditarReportePage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="content">
      <h1 className="title">Editar Reporte #{id}</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Título del reporte</label>
              <input type="text" placeholder="Ej: Ingresos del mes" />
            </div>

            <div className={styles.formGroup}>
              <label>Categoría</label>
              <select className={styles.select}>
                <option value="">Seleccionar</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Pagos">Pagos</option>
                <option value="Nómina">Nómina</option>
                <option value="Cursos">Cursos</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Fecha</label>
              <input type="date" />
            </div>

            <div className={styles.formGroup}>
              <label>Monto (€)</label>
              <input type="number" placeholder="0.00" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Descripción</label>
            <textarea
              placeholder="Detalles del reporte"
              className={styles.textarea}
            />
          </div>

          <button className={styles.btnPrimary}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
