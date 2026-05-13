"use client";

import { useUserStore } from "@/store/useUserStore";
import { signOut } from "next-auth/react";

export default function Header() {
  const { email, role } = useUserStore();

  // 👉 AQUÍ VA EXACTAMENTE ESTA LÍNEA
  const roleLabel = role ? role[0].toUpperCase() + role.slice(1) : "Cargando…";

  const logout = async () => {
    useUserStore.getState().clearUser();
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <header
      style={{
        width: "100%",
        height: "60px",
        background: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ margin: 0, fontWeight: "600" }}>
        Panel de {roleLabel}
      </h3>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontSize: "14px", color: "#555" }}>{email}</span>

        <button
          onClick={logout}
          style={{
            background: "#d9534f",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
