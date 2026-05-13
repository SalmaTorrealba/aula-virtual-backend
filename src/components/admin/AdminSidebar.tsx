import Link from "next/link";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaWallet,
  FaHeadset,
  FaCog
} from "react-icons/fa";
import "./AdminSidebar.css";


export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <nav className="sidebar-menu">

        <Link href="/dashboard/admin" className="menu-item active">
          <FaTachometerAlt className="icon" />
          <span>DASHBOARD</span>
        </Link>

        <Link href="/dashboard/admin/cursos" className="menu-item">
          <FaBook className="icon" />
          <span>GESTIÓN DE CURSOS</span>
        </Link>

        <Link href="/dashboard/admin/usuarios" className="menu-item">
          <FaUsers className="icon" />
          <span>GESTIÓN DE USUARIOS</span>
        </Link>

        <Link href="/dashboard/admin/finanzas" className="menu-item">
          <FaWallet className="icon" />
          <span>FINANZAS Y FACTURACIÓN</span>
        </Link>

        <Link href="/dashboard/admin/soporte" className="menu-item">
          <FaHeadset className="icon" />
          <span>SOPORTE TÉCNICO</span>
        </Link>

        <Link href="/dashboard/admin/configuracion" className="menu-item">
          <FaCog className="icon" />
          <span>CONFIGURACIÓN</span>
        </Link>

      </nav>

    </aside>
  );
}
