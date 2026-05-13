"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function EditarCurso(props: any) {
  const router = useRouter();

  // params es un Promise → se desenrolla con use()
  const { id } = use(props.params);

  const [form, setForm] = useState({
    fechaEntrega: "",
    informacion: "",
    detalles: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarCambios = () => {
    router.push(`/dashboard/profesor/cursos/${id}`);
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Editar Información</h1>

        <div className={styles.form}>
          <div className={styles.field}>
            <label>Fecha de entrega</label>
            <input
              type="date"
              name="fechaEntrega"
              value={form.fechaEntrega}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Información adicional</label>
            <textarea
              name="informacion"
              value={form.informacion}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <div className={styles.field}>
            <label>Detalles / Cambios</label>
            <textarea
              name="detalles"
              value={form.detalles}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={guardarCambios}>
            Guardar Cambios
          </button>

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
