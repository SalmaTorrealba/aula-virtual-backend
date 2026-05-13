"use client";

import TopBar from "@/components/students/StudentTopBar";
import SettingSidebar  from "@/components/students/SettingsSidebar"
import "./configuracion.css";

export default function ConfiguracionPage() {
  return (
    <div className="config-container">
      <div className="config-card">
        <h2 className="config-section-title">Cambiar contraseña</h2>

        <div className="campo">
          <label>Contraseña actual</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="campo">
          <label>Nueva contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="campo">
          <label>Confirmar nueva contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="btn">Actualizar contraseña</button>
      </div>

      <div className="config-card">
        <h2 className="config-section-title">Sesiones activas</h2>
        <p className="config-info">
          Puedes cerrar todas las sesiones abiertas en otros dispositivos.
        </p>
        <button className="btn btn-secundario">Cerrar todas las sesiones</button>
      </div>
    </div>
  );
}
