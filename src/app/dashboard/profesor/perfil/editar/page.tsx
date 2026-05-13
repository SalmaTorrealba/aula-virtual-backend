"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function EditarPerfilProfesorPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "Carlos Mendoza",
    email: "profesor@correo.com",
    telefono: "+34 600 123 456",
    especialidad: "Seguridad Industrial",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardarCambios = () => {
    // Guardar en BD
    router.push("/dashboard/profesor/perfil");
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Editar Perfil</h1>

        <div className={styles.form}>
          <div className={styles.field}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Especialidad</label>
            <input
              type="text"
              name="especialidad"
              value={form.especialidad}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={guardarCambios}>
            Guardar Cambios
          </button>

          <button className={styles.btnSecondary} onClick={() => router.back()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

