import Link from "next/link";
import styles from "./page.module.css";

export default function MiPerfilPage() {
  const estudiante = {
    nombre: "Samara",
    email: "estudiante@correo.com",
    rol: "Estudiante",
    avatar: "/avatars/usuario.svg",
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mi Perfil</h1>

      <div className={styles.card}>
        <img src={estudiante.avatar} className={styles.avatar} />

        <div className={styles.info}>
          <p><span>Nombre:</span> {estudiante.nombre}</p>
          <p><span>Email:</span> {estudiante.email}</p>
          <p><span>Rol:</span> {estudiante.rol}</p>
        </div>

        <Link
          href="/dashboard/estudiante/perfil/editar"
          className={styles.btnPrimary}
        >
          Editar Perfil
        </Link>
      </div>
    </div>
  );
}
