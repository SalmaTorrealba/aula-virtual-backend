"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, FileText } from "lucide-react";
import styles from "./proyectos.module.css";
import ProfesorTopBar from "@/components/profesor/ProfesorTopBar";

export default function MisProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<any>(null);

  // Cargar proyectos desde API (cuando conectemos BD)
  useEffect(() => {
    fetch("/api/proyectos")
      .then((res) => res.json())
      .then((data) => setProyectos(data));
  }, []);

  return (
    <div className={styles.page}>
        <ProfesorTopBar/>
      <h1 className={styles.title}>Mis Proyectos</h1>

      <div className={styles.layout}>
        

        {/* TABLA IZQUIERDA */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>TÍTULO</th>
                <th>MÓDULO</th>
                <th>DIFICULTAD</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>

            <tbody>
              {proyectos.map((p: any) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.titulo}</td>
                  <td>{p.modulo}</td>
                  <td>{p.dificultad}</td>
                  <td>
                    {p.estado === "publicado" ? (
                      <span className={styles.badgePublicado}>Publicado</span>
                    ) : (
                      <span className={styles.badgeBorrador}>Borrador</span>
                    )}
                  </td>

                  <td className={styles.actions}>
                    <Eye size={18} onClick={() => setProyectoSeleccionado(p)} />
                    <Pencil size={18} onClick={() => editarProyecto(p.id)} />
                    <Trash2 size={18} onClick={() => eliminarProyecto(p.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

         <Link href="/dashboard/profesor/proyectos/crear" className={styles.btnNuevo}>
  Crear nuevo desafío técnico
</Link>

        </div>

        {/* PANEL DE DETALLES */}
        <div className={styles.details}>
          {!proyectoSeleccionado ? (
            <p className={styles.placeholder}>Selecciona un proyecto</p>
          ) : (
            <>
              <h2 className={styles.detailsTitle}>{proyectoSeleccionado.titulo}</h2>

              <div className={styles.cover}>
                <img src={proyectoSeleccionado.imagen} alt="portada" />
              </div>

              <h3 className={styles.sectionTitle}>Descripción Técnica</h3>
              <p className={styles.text}>{proyectoSeleccionado.descripcion}</p>

              <h3 className={styles.sectionTitle}>Recursos Adjuntos</h3>
              <div className={styles.resources}>
                {proyectoSeleccionado.recursos?.map((r: any, i: number) => (
                  <div key={i} className={styles.resourceItem}>
                    <FileText size={20} />
                    {r.nombre}
                  </div>
                ))}
              </div>

              <h3 className={styles.sectionTitle}>Solicitudes de Alumnos</h3>
              <div className={styles.solicitudes}>
                {proyectoSeleccionado.solicitudes?.map((s: any, i: number) => (
                  <div key={i} className={styles.solicitud}>
                    {s.alumno} — <span>{s.estado}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

// Funciones listas para conectar con backend
function editarProyecto(id: number) {
  console.log("Editar proyecto", id);
}

function eliminarProyecto(id: number) {
  console.log("Eliminar proyecto", id);
}
