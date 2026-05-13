"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./admin-menu.css";

type Props = {
  userName?: string;
  onLogout?: () => void;
};

export default function AdminMenu({ userName = "Administrador", onLogout }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleNavigate(path: string) {
    setOpen(false);
    router.push(path);
  }

  async function handleLogout() {
    setOpen(false);

    // Si el caller pasó una función onLogout, la ejecutamos y salimos
    if (onLogout) {
      onLogout();
      return;
    }

    // Limpieza local (token en localStorage / sessionStorage)
    try {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    } catch (e) {
      // no hacemos nada si falla la limpieza
    }

    // Si necesitas invalidar sesión en backend, descomenta y adapta:
    /*
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch (err) {
      // manejar error si es necesario
    }
    */

    // Redirigir al login absoluto solicitado
    router.push("http://localhost:3000/auth/login");
  }

  return (
    <div className="admin-menu-wrapper">
      <div
        className="admin-menu-trigger"
        onClick={() => setOpen(!open)}
        role="button"
        aria-expanded={open}
      >
        <div className="avatar-icon">A</div>
        <span className="admin-name">{userName}</span>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </div>

      {open && (
        <div className="admin-dropdown" role="menu">
          <button className="dropdown-item" onClick={() => handleNavigate("/dashboard/admin/perfil")}>
            Mi perfil
          </button>
          <button className="dropdown-item" onClick={() => handleNavigate("/dashboard/admin/configuracion")}>
            Configuración
          </button>
          <button className="dropdown-item logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
