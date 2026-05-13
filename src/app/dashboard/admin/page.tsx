"use client";

import AdminTopBar from "@/components/admin/AdminTopBar";

export default function AdminDashboard() {
  return (
    <div className="dashboard">
      <AdminTopBar />
      <h1 className="title">Panel del Administrador</h1>

      {/* Tarjetas de estadísticas */}
      <div className="stats">
        <div className="stat">
          <span className="stat-label">Usuarios registrados</span>
          <span className="stat-value">1,245</span>
        </div>

        <div className="stat">
          <span className="stat-label">Cursos activos</span>
          <span className="stat-value">32</span>
        </div>

        <div className="stat">
          <span className="stat-label">Empresas asociadas</span>
          <span className="stat-value">14</span>
        </div>
      </div>

      {/* Acciones rápidas */}
      <h2 className="subtitle">Acciones rápidas</h2>

      <div className="actions">
        <a href="/dashboard/admin/cursos/crear" className="action">Crear curso</a>
       <a href="/dashboard/admin/usuarios/crear" className="action">+ Crear Usuarios</a>
        <a href="/dashboard/admin/pagos" className="action">Ver finanzas</a>
      </div>

    </div>
  );
}
