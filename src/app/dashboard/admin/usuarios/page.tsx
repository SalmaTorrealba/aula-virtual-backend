"use client";
import styles from "./page.module.css";
import Link from "next/link";

export default function UsuariosPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <h1 className={styles.title}>GESTIÓN DE USUARIOS</h1>

        <div className={styles.actions}>
          <Link href="/dashboard/admin/usuarios/crear" className={styles.btnCrear}>
            + Crear Usuario
          </Link>
        </div>

        <h2 className={styles.subtitle}>Listado de Usuarios</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {/* Aquí luego conectamos con tu backend */}
              <tr>
                <td>Ejemplo Usuario</td>
                <td>usuario@correo.com</td>
                <td>Admin</td>
                <td>
                <a href={"/dashboard/admin/usuarios/editar"} className={styles.btnEdit}>
                Editar
                </a>

                  <button className={styles.btnDelete}>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
