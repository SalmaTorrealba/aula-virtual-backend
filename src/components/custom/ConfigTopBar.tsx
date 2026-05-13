"use client";

export default function ConfigTopBar() {
  return (
    <header className="config-topbar">
      <nav className="config-topbar-nav">
        <a href="/inicio">INICIO</a>
         <a href="/dashboard/estudiante/catalogo">CATALOGO</a>
        <a href="/sobre-nosotros">SOBRE NOSOTROS</a>

        <a href="/auth/login" className="config-topbar-login">
        INICIAR SESIÓN
        </a>

      </nav>
    </header>
  );
}
