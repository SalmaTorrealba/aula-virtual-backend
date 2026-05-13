import styles from "./page.module.css";

export default function EditarCursoPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="content">
      <h1 className="title">Editar Curso #{id}</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formMinimal}>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Título Técnico</label>
              <input type="text" placeholder="Título del curso" />
            </div>

            <div className={styles.formGroup}>
              <label>Categoría Técnica</label>
              <input type="text" placeholder="Categoría" />
            </div>

            <div className={styles.formGroup}>
              <label>Profesor Asignado</label>
              <input type="text" placeholder="Profesor" />
            </div>

            <div className={styles.formGroup}>
              <label>Precio (€)</label>
              <input type="number" placeholder="0.00" />
            </div>

            <div className={styles.formGroup}>
              <label>Estado</label>
              <select className={styles.select}>
                <option value="Publicado">Publicado</option>
                <option value="Borrador">Borrador</option>
              </select>
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
