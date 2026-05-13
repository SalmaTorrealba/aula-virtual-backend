"use client";

import Link from "next/link";
import "./perfil-sidebar.css";

export default function PerfilSidebar() {
  return (
    <aside className="perfil-sidebar">
      <nav>
        <ul>
          <li><Link href="/dashboard/estudiante">Inicio</Link></li>
          <li><Link href="/dashboard/estudiante/cursos">Mis Cursos</Link></li>
          <li><Link href="/dashboard/estudiante/mi-area">Mi Área</Link></li>
          <li className="active"><Link href="/dashboard/estudiante/perfil">Mi Perfil</Link></li>
          <li><Link href="/dashboard/estudiante/catalogo">Catálogo</Link></li>
          <li></li><Link href="/dashboard/estudiante/tutorias">Tutorías</Link>
          <li className="logout"><Link href="/logout">Cerrar sesión</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
