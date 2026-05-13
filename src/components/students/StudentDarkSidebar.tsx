"use client";

import Link from "next/link";
import "./student-dark-sidebar.css";

export default function StudentDarkSidebar() {
  return (
    <aside className="student-dark-sidebar">

      <nav className="student-menu">

        <Link href="/dashboard/estudiante/mis-cursos" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
          <span>Mis Cursos</span>
        </Link>

        <Link href="/dashboard/estudiante/mi-area" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
          </svg>
          <span>Mi Área</span>
        </Link>

        <Link href="/dashboard/estudiante/perfil" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <path d="M3 3v18h18" />
            <path d="M7 14l3-3 4 4 5-6" />
          </svg>
          <span>Mi Perfil</span>
        </Link>

        <Link href="/dashboard/estudiante/catalogo" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1" />
          </svg>
          <span>Catálogo</span>
        </Link>

        <Link href="/dashboard/estudiante/recursos" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1" />
          </svg>
          <span>Recursos</span>
        </Link>

        <Link href="/dashboard/estudiante/configuracion" className="student-item">
          <span className="bar"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1" />
          </svg>
          <span>Configuración</span>
        </Link>

      </nav>

    </aside>
  );
}
