"use client";

import Sidebar from "@/components/students/StudentSidebar";
import "./facturas.css";

export default function FacturasPage() {
  return (
    <div className="facturas-layout">
      <Sidebar />

      <div className="facturas-container">
        <h1 className="facturas-title">Mis Facturas</h1>
        <p className="facturas-subtitle">Descarga tus facturas y comprobantes de pago.</p>

        <div className="facturas-table-wrapper">
          <table className="facturas-table">
            <thead>
              <tr>
                <th>ID Factura</th>
                <th>Fecha</th>
                <th>Curso</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#F-2024-001</td>
                <td>12/03/2024</td>
                <td>Máster en Energética</td>
                <td>850€</td>
                <td>
                  <button className="factura-btn">Descargar PDF</button>
                </td>
              </tr>

              <tr>
                <td>#F-2024-002</td>
                <td>20/04/2024</td>
                <td>Curso de Industrial</td>
                <td>29€</td>
                <td>
                  <button className="factura-btn">Descargar PDF</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
