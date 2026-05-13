"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./settings-sidebar.css";

export default function SettingsSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <aside className="settings-sidebar">

      <div>
        <div className="settings-title">PERFIL DE USUARIO</div>
        <nav className="settings-menu">
          <Link
            href="/dashboard/estudiante/perfil"
            className={`settings-item ${isActive("/dashboard/estudiante/perfil") ? "active" : ""}`}
          >
            Perfil
          </Link>

          <Link
            href="/dashboard/estudiante/perfil/editar"
            className={`settings-item ${isActive("/dashboard/estudiante/perfil/editar") ? "active" : ""}`}
          >
            Editar perfil
          </Link>
        </nav>
      </div>

      <div>
        <div className="settings-title">SEGURIDAD Y ACCESO</div>
        <nav className="settings-menu">
          <Link
            href="/dashboard/estudiante/perfil/configuracion"
            className={`settings-item ${isActive("/dashboard/estudiante/perfil/configuracion") ? "active" : ""}`}
          >
            Configuración
          </Link>
           <Link
            href="/dashboard/estudiante/perfil/facturas"
            className={`settings-item ${isActive("/dashboard/estudiante/perfil/facturas") ? "active" : ""}`}
          >
            Gestión de Factutación
            </Link>
        </nav>
      </div>

    </aside>
  );
}
