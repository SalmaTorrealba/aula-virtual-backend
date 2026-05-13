"use client";
import "./finanzas.css";
import { useRouter } from "next/navigation";

export default function FinanzasPage() {
  const router = useRouter();

  return (
    <div className="finanzas-wrapper">
      <div className="finanzas-page">

        <h1 className="finanzas-title">FINANZAS Y FACTURACIÓN</h1>
        <p className="finanzas-subtitle">
          Control de pagos, ingresos y reportes financieros.
        </p>

        {/* FILTROS SUPERIORES */}
        <div className="finanzas-filtros">
          <div className="filtro-box">
            <span className="filtro-icon">📅</span>
            <input type="text" placeholder="FECHA 2023 - 05/02/2024" />
          </div>

          <div className="filtro-box">
            <select>
              <option value="">CATEGORÍA</option>
              <option value="master">Máster</option>
              <option value="curso">Curso</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          <div className="filtro-box">
            <select>
              <option value="">ESTADO</option>
              <option value="pagado">Pagado</option>
              <option value="pendiente">Pendiente</option>
              <option value="fallido">Fallido</option>
            </select>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="finanzas-grid">

          {/* TABLA DE PAGOS */}
          <div className="finanzas-tabla">
            <table>
              <thead>
                <tr>
                  <th>ID PEDIDO</th>
                  <th>ID USUARIO</th>
                  <th>FECHA DE PAGO</th>
                  <th>CURSO(S)</th>
                  <th>MÉTODO</th>
                  <th>ESTADO</th>
                  <th>TOTAL</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#10000001</td>
                  <td>Alumno_ID_101</td>
                  <td>25/09/2023</td>
                  <td>Título del curso</td>
                  <td>VISA</td>
                  <td className="estado pagado">Pagado</td>
                  <td>29€</td>
                </tr>

                <tr>
                  <td>#10000002</td>
                  <td>Alumno_ID_202</td>
                  <td>24/09/2023</td>
                  <td>CURSO DE INDUSTRIAL</td>
                  <td>VISA</td>
                  <td className="estado pagado">Pagado</td>
                  <td>29€</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RESUMEN DEL PEDIDO */}
          <div className="finanzas-resumen">
            <h3>RESUMEN DEL PEDIDO</h3>

            <p><strong>Curso:</strong> Título del curso</p>
            <p><strong>Precio:</strong> 850€</p>
            <p><strong>Descuento:</strong> 50€</p>
            <p><strong>Total:</strong> 800€</p>

            <button className="finanzas-btn">ACCEDER A MIS CURSOS</button>
          </div>

        </div>

        {/* BOTÓN ABAJO DEL TODO */}
        <div className="finanzas-boton-final">
          <button
            className="finanzas-reporte-btn"
            onClick={() =>
              router.push("/dashboard/admin/finanzas/nuevo-reporte")
            }
          >
            CREAR NUEVO REPORTE FINANCIERO
          </button>
        </div>

      </div>
    </div>
  );
}
