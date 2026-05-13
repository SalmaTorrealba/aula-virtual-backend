"use client";

import { useState } from "react";
import styles from "./crear.module.css";
import ProfesorTopBar from "@/components/profesor/ProfesorTopBar";

export default function CrearProyecto() {
  const [form, setForm] = useState({
    titulo: "",
    modulo: "",
    dificultad: "",
    estado: "borrador",
    descripcion: "",
    imagen: null,
  });

  function handleChange(e: any) {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value as any);
    });

    const res = await fetch("/api/proyectos", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      alert("Proyecto creado correctamente");
    } else {
      alert("Error al crear proyecto");
    }
  }

  return (
    <div className={styles.page}>
        <ProfesorTopBar/>
      <h1 className={styles.title}>Crear Nuevo Proyecto</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.group}>
          <label>Título Técnico</label>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <label>Módulo Asociado</label>
          <input
            type="text"
            name="modulo"
            value={form.modulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Dificultad</label>
            <select
              name="dificultad"
              value={form.dificultad}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="bajo">Bajo</option>
              <option value="medio">Medio</option>
              <option value="alto">Alto</option>
            </select>
          </div>

          <div className={styles.group}>
            <label>Estado</label>
            <select
              name="estado"
              value={form.estado}
              onChange={handleChange}
            >
              <option value="borrador">Borrador</option>
              <option value="publicado">Publicado</option>
            </select>
          </div>
        </div>

        <div className={styles.group}>
          <label>Descripción Técnica</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows={6}
            required
          ></textarea>
        </div>

        <div className={styles.group}>
          <label>Imagen de Portada</label>
          <input type="file" name="imagen" accept="image/*" onChange={handleChange} />
        </div>

        <button className={styles.btnCrear} type="submit">
          Crear Proyecto
        </button>
      </form>
    </div>
  );
}
