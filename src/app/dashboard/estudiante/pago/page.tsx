"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function PagoPage() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(data);
  }, []);

  const total = carrito.reduce((acc, c) => acc + c.precio, 0);

  const pagar = () => {
    alert("Pago procesado correctamente ✔");
    localStorage.removeItem("carrito");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pasarela de Pago</h1>

      <div className={styles.layout}>
        
        {/* FORMULARIO DE TARJETA */}
        <div className={styles.formCard}>
          <h2 className={styles.subtitle}>Datos de Pago</h2>

          <div className={styles.field}>
            <label>Nombre en la tarjeta</label>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.field}>
            <label>Número de tarjeta</label>
            <input type="text" className={styles.input} placeholder="1234 5678 9012 3456" />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Expiración</label>
              <input type="text" className={styles.input} placeholder="MM/AA" />
            </div>

            <div className={styles.field}>
              <label>CVC</label>
              <input type="text" className={styles.input} placeholder="123" />
            </div>
          </div>

          <button className={styles.btnPrimary} onClick={pagar}>
            Pagar Ahora
          </button>
        </div>

        {/* RESUMEN */}
        <div className={styles.resumen}>
          <h2 className={styles.subtitle}>Resumen del Pedido</h2>

          {carrito.map((curso, i) => (
            <div key={i} className={styles.resumenItem}>
              <span>{curso.nombre}</span>
              <span>€{curso.precio}</span>
            </div>
          ))}

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
