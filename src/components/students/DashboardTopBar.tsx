"use client";

import StudentMenu from "./StudentMenu";
import "./dashboard-topbar.css";

export default function DashboardTopBar({ userName = "Estudiante" }) {
  return (
    <header className="dashboard-topbar">
      <div className="dashboard-topbar-inner">

        <nav className="dashboard-top-nav">
          <a href="/dashboard/estudiante">INICIO</a>
          <a href="/dashboard/estudiante/mis-cursos">MIS CURSOS</a>
          <a href="/dashboard/estudiante/cursos">CURSOS</a>
          <a href="/dashboard/estudiante/mi-area">MI ÁREA</a>
        </nav>

        <div className="dashboard-topbar-right">
          <StudentMenu userName={userName} />
        </div>

      </div>
    </header>
  );
}
