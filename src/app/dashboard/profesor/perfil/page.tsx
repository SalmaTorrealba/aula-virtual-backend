"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function PerfilProfesorPage() {
  const router = useRouter();

  // Datos de ejemplo (luego los conectas a tu BD)
  const profesor = {
    nombre: "Carlos Mendoza",
    email: "profesor@correo.com",
    telefono: "+34 600 123 456",
    especialidad: "Seguridad Industrial",
    avatar: "/avatars/profesor.svg",
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Mi Perfil</h1>

        {/* AVATAR */}
        <div className={styles.avatarBox}>
          <img src={profesor.avatar} alt="avatar" className={styles.avatar} />
        </div>

        {/* DATOS */}
        <div className={styles.infoBox}>
          <p><strong>Nombre:</strong> {profesor.nombre}</p>
          <p><strong>Email:</strong> {profesor.email}</p>
          <p><strong>Teléfono:</strong> {profesor.telefono}</p>
          <p><strong>Especialidad:</strong> {profesor.especialidad}</p>
        </div>

        {/* BOTONES */}
        <button
          className={styles.btnPrimary}
          onClick={() => router.push("/dashboard/profesor/perfil/editar")}
        >
          Editar Perfil
        </button>

      
      </div>
    </div>
  );
}
