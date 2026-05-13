"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./configuracionSidebar.css";

export default function ConfiguracionSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "config-item active" : "config-item";

  return (
    <div className="config-sidebar">
      <h3 className="config-title">Configuración</h3>

      <Link
        href="/dashboard/estudiante/configuracion"
        className={isActive("/dashboard/estudiante/configuracion")}
      >
        Perfil de usuario
      </Link>

      <Link
        href="/dashboard/estudiante/configuracion/seguridad"
        className={isActive("/dashboard/estudiante/configuracion/seguridad")}
      >
        Seguridad y acceso
      </Link>

      <Link
        href="/dashboard/estudiante/configuracion/notificaciones"
        className={isActive("/dashboard/estudiante/configuracion/notificaciones")}
      >
        Notificaciones
      </Link>

      <Link
        href="/dashboard/estudiante/configuracion/facturacion"
        className={isActive("/dashboard/estudiante/configuracion/facturacion")}
      >
        Gestión de facturación
      </Link>
    </div>
  );
}
