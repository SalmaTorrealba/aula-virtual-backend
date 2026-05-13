"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function CursosPage() {
  const cursos = [
    {
      id: 101,
      titulo: "MÁSTER EN EFICIENCIA ENERGÉTICA",
      profesor: "Anonino_ID_101",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:19",
      estado: "Publicado",
      precio: 9.0,
    },
    {
      id: 202,
      titulo: "CURSO DE SEGURIDAD INDUSTRIAL",
      profesor: "Anonino_ID_202",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:40",
      estado: "Publicado",
      precio: 9.0,
    },
  ];

  const eliminarCurso = (id: number) => {
    alert(`Curso ${id} eliminado (demo)`);
  };

  return (
    <div className="content">
      <h1 className={styles.title}>Gestión Integral de Cursos</h1>

      <div className={styles.actions}>
        <Link href="/dashboard/admin/cursos/crear" className={styles.btnPrimary}>
          + Crear Nuevo Curso
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID Curso</th>
              <th>Título Técnico</th>
              <th>Profesor</th>
              <th>Categoría</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Precio (€)</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.titulo}</td>
                <td>{curso.profesor}</td>
                <td>{curso.categoria}</td>
                <td>{curso.fecha}</td>
                <td>{curso.estado}</td>
                <td>{curso.precio}</td>
                <td>
                  <div className={styles.actionsRow}>
                    <Link
                      href={`/dashboard/admin/cursos/editar/${curso.id}`}
                      className={styles.btnEdit}
                    >
                      Editar
                    </Link>

                    <button
                      className={styles.btnDelete}
                      onClick={() => eliminarCurso(curso.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
