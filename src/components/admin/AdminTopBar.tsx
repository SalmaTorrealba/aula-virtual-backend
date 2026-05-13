"use client";

import { useState } from "react";
import AdminMenu from "./AdminMenu";
import useUserStore from "../../store/useUserStore";
import "./AdminTopBar.css";

export default function AdminTopBar() {
  const email = useUserStore((state) => state.email);
  const role = useUserStore((state) => state.role);
  const logout = useUserStore((state) => state.logout);

  const [open, setOpen] = useState(false);

  return (
    <header className="admin-topbar">
      <div className="admin-topbar-right">

        {/* Información del usuario */}
        <div className="admin-user-info" onClick={() => setOpen(!open)}>
          <span className="admin-user-name">{email || "Admin"}</span>
          <span className="admin-user-role">{role || "Administrador"}</span>
        </div>

        {/* Avatar */}
        <img
          src="/img/user.png"
          alt="Admin"
          className="admin-avatar"
          onClick={() => setOpen(!open)}
        />

        {/* Dropdown */}
        {open && (
          <div className="admin-dropdown">
            <a href="/dashboard/admin/perfil" className="admin-dropdown-item">
              Ver perfil
            </a>

            <button
              className="admin-dropdown-item logout"
              onClick={() => {
                logout();
                window.location.href = "/auth/login";
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
