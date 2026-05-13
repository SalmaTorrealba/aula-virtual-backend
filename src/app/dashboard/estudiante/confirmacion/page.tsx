"use client";

import "./confirmacion.css";
import ConfigTopBar from "@/components/custom/ConfigTopBar";
import "@/components/custom/ConfigTopBar.css";

export default function ConfirmacionPage() {
  const numeroPedido = Math.floor(Math.random() * 900000 + 100000);

  return (
    <>
      <ConfigTopBar />

      <div className="confirmacion-page">

        <div className="confirmacion-container">

          {/* ICONO + TITULO */}
          <div className="confirmacion-header">
            <div className="check-icon">✔</div>
            <h1>¡PAGO CONFIRMADO!</h1>
            <p className="subtitulo">
              Tu compra se ha procesado correctamente.
            </p>
          </div>

          <div className="confirmacion-grid">

            {/* DETALLES DEL PEDIDO */}
            <div className="confirmacion-box">
              <h2>DETALLES DEL PEDIDO</h2>

              <p><strong>Número de pedido:</strong> #{numeroPedido}</p>

              <div className="pedido-item">
                <span>MÁSTER EN EFICIENCIA ENERGÉTICA</span>
                <span>59€</span>
              </div>

              <div className="pedido-item">
                <span>Módulo 1 Técnicas Avanzadas</span>
                <span>29€</span>
              </div>

              <div className="pedido-linea">
                <span>Subtotal</span>
                <span>88€</span>
              </div>

              <div className="pedido-linea">
                <span>Impuestos</span>
                <span>12€</span>
              </div>

              <div className="pedido-total">
                <span>Total</span>
                <span>100€</span>
              </div>
            </div>

            {/* DATOS DE FACTURACIÓN */}
            <div className="confirmacion-box">
              <h2>DATOS DE FACTURACIÓN</h2>

              <p><strong>Nombre del Cliente:</strong> Registrado durante el pago</p>
              <p><strong>Número de tarjeta:</strong> **** **** **** 1234</p>
              <p><strong>MM/YY:</strong> 04/29</p>
              <p><strong>Cardholder:</strong> Registrado durante el pago</p>
              <p><strong>Dirección:</strong> No requerida</p>

              <div className="mensaje-email">
                Se te ha enviado un correo electrónico con los datos de acceso.
              </div>
            </div>

          </div>

          {/* BOTONES */}
          <div className="confirmacion-botones">
            <a href="/dashboard/estudiante/mis-cursos" className="btn-mis-cursos">
              ACCEDER A MIS CURSOS
            </a>

            <button className="btn-factura">
              DESCARGAR FACTURA (PDF)
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
