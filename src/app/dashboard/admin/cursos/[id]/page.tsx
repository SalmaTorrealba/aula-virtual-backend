"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./editar.css";

export default function EditarCurso({ params }: any) {
  const { id } = params;

  // Datos temporales (hasta conectar MySQL)
  const [curso, setCurso] = useState({
    titulo: "Título del curso",
    profesor: "Profesor asignado",
    categoria: "Ingeniería Técnica",
    precio: "9.00",
    estado: "Publicado",
  });

  const handleChange = (e: any) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Guardado (aún sin BD)");
  };

  return (
    <div className="editar-container">
      <h1>Editar Curso #{id}</h1>

      <form className="form-editar" onSubmit={handleSubmit}>
        
        <label>Título Técnico</label>
        <input
          type="text"
          name="titulo"
          value={curso.titulo}
          onChange={handleChange}
        />

        <label>Profesor Asignado</label>
        <input
          type="text"
          name="profesor"
          value={curso.profesor}
          onChange={handleChange}
        />

        <label>Categoría Técnica</label>
        <select
          name="categoria"
          value={curso.categoria}
          onChange={handleChange}
        >
          <option>Ingeniería Técnica</option>
          <option>Programación</option>
          <option>Marketing</option>
        </select>

        <label>Precio (€)</label>
        <input
          type="number"
          name="precio"
          value={curso.precio}
          onChange={handleChange}
        />

        <label>Estado</label>
        <select
          name="estado"
          value={curso.estado}
          onChange={handleChange}
        >
          <option>Publicado</option>
          <option>Borrador</option>
        </select>

        <div className="botones">
          <button type="submit" className="guardar">
            Guardar Cambios
          </button>

          <Link href="/dashboard/admin/cursos" className="cancelar">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
