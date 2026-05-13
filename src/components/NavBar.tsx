"use client";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Menú centrado con separación */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-20 text-sm font-semibold text-gray-700 tracking-wide">
            <a className="nav-link">INICIO</a>
            <a className="nav-link">CURSOS</a>
            <a className="nav-link">EMPRESAS</a>
            <a className="nav-link">SOBRE NOSOTROS</a>
          </div>
        </nav>

        {/* Botón a la derecha */}
        <a
          href="/auth/register"
          className="bg-[#F57C00] hover:bg-[#EF6C00] text-white font-semibold py-2 px-5 rounded-md transition"
        >
          REGISTRARSE
        </a>

      </div>
    </header>
  );
}
