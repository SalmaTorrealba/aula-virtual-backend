import styles from "./page.module.css";

export default function EditarPagoPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="content">
      <h1 className="title">Editar Pago #{id}</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Usuario</label>
              <input type="text" placeholder="Nombre del usuario" />
            </div>

            <div className={styles.formGroup}>
              <label>Curso</label>
              <input type="text" placeholder="Nombre del curso" />
            </div>

            <div className={styles.formGroup}>
              <label>Fecha</label>
              <input type="date" />
            </div>

            <div className={styles.formGroup}>
              <label>Monto (€)</label>
              <input type="number" placeholder="0.00" />
            </div>

            <div className={styles.formGroup}>
              <label>Estado</label>
              <select className={styles.select}>
                <option value="Completado">Completado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Fallido">Fallido</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
