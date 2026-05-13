"use client";

import "./admin.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">

      <aside className="sidebar">
        <h2 className="sidebar-logo">Admin</h2>

        <nav className="sidebar-menu">
          <a href="/dashboard/admin" className="sidebar-item">Dashboard</a>
          <a href="/dashboard/admin/usuarios" className="sidebar-item">Usuarios</a>
          <a href="/dashboard/admin/cursos" className="sidebar-item">Cursos</a>
          <a href="/dashboard/admin/pagos" className="sidebar-item">Pagos</a>
          <a href="/dashboard/admin/nomina" className="sidebar-item">Nómina</a>
          <a href="/dashboard/admin/reportes" className="sidebar-item">Reportes</a>
          <a href="/dashboard/admin/auditoria" className="sidebar-item">Auditoría</a>
          <a href="/dashboard/admin/configuracion" className="sidebar-item">Configuración</a>
        </nav>
      </aside>

      <main className="content">
        {children}
      </main>

    </div>
  );
}
