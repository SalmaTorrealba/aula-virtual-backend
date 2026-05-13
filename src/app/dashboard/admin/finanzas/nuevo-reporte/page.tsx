"use client";
import "./nuevo-reporte.css";

export default function NuevoReportePage() {
  return (
    <div className="reporte-wrapper">
      <div className="reporte-page">

        <h1 className="reporte-title">Nuevo reporte financiero</h1>
        <p className="reporte-subtitle">
          Completa la información para generar un nuevo reporte financiero.
        </p>

        <form className="reporte-form">

          {/* RANGO DE FECHAS */}
          <div className="form-group">
            <label>Rango de fechas</label>
            <input type="date" />
            <input type="date" />
          </div>

          {/* TIPO DE REPORTE */}
          <div className="form-group">
            <label>Tipo de reporte</label>
            <select>
              <option value="">Seleccionar tipo</option>
              <option value="ingresos">Ingresos</option>
              <option value="pagos">Pagos</option>
              <option value="pendientes">Pendientes</option>
              <option value="completo">Reporte completo</option>
            </select>
          </div>

          {/* CATEGORÍA */}
          <div className="form-group">
            <label>Categoría</label>
            <select>
              <option value="">Todas</option>
              <option value="master">Máster</option>
              <option value="curso">Curso</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          {/* ESTADO */}
          <div className="form-group">
            <label>Estado de pago</label>
            <select>
              <option value="">Todos</option>
              <option value="pagado">Pagado</option>
              <option value="pendiente">Pendiente</option>
              <option value="fallido">Fallido</option>
            </select>
          </div>

          {/* NOTAS */}
          <div className="form-group full">
            <label>Notas adicionales</label>
            <textarea placeholder="Escribe detalles opcionales para este reporte..."></textarea>
          </div>

          {/* BOTÓN */}
          <button type="submit" className="reporte-btn">
            GENERAR REPORTE
          </button>

        </form>

      </div>
    </div>
  );
}
