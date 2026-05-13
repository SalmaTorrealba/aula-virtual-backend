// src/components/student/StudentMenu.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./student-menu.css";


export default function StudentMenu({ userName = "Estudiante" }: { userName?: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleLogout() {
    try { localStorage.removeItem("token"); sessionStorage.removeItem("token"); } catch {}
    router.push("http://localhost:3000/auth/login");
  }

  return (
    <div className="student-menu">
      <div className="student-trigger" onClick={() => setOpen(!open)} role="button" aria-expanded={open}>
        <span className="student-name">{userName}</span>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </div>

      {open && (
        <div className="student-dropdown">
          <button onClick={() => { setOpen(false); router.push("/dashboard/estudiante/perfil"); }} className="item">Mi perfil</button>
          <button onClick={() => { setOpen(false); router.push("/dashboard/estudiante/configuracion"); }} className="item">Configuración</button>
          <button onClick={handleLogout} className="item logout">Cerrar sesión</button>
          <button onClick={() => { setOpen(false); router.push("/dashboard/estudiante/ayuda"); }} className="item">Ayuda</button>
          <button onClick={() => { setOpen(false); router.push("/dashboard/estudiante/contacto"); }} className="item">Contacto</button>
          </div>
      )}
    </div>
  );
}
