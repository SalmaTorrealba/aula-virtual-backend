import styles from "./page.module.css";

export default function EditarNominaPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="content">
      <h1 className="title">Editar Nómina #{id}</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Empleado</label>
              <input type="text" placeholder="Nombre del empleado" />
            </div>

            <div className={styles.formGroup}>
              <label>Mes</label>
              <input type="text" placeholder="Ej: Marzo 2024" />
            </div>

            <div className={styles.formGroup}>
              <label>Monto (€)</label>
              <input type="number" placeholder="0.00" />
            </div>

            <div className={styles.formGroup}>
              <label>Estado</label>
              <select className={styles.select}>
                <option value="Pagado">Pagado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
