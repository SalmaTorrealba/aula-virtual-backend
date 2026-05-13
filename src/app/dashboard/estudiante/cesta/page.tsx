"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CestaPage() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(data);
  }, []);

  const subtotal = carrito.reduce((acc, c) => acc + c.precio, 0);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Cesta de Compra</h1>

      <div className={styles.layout}>
        
        {/* LISTA DE CURSOS */}
        <div className={styles.cursos}>
          {carrito.map((curso, i) => (
            <div key={i} className={styles.card}>
              <img src={curso.imagen} className={styles.img} />

              <div className={styles.info}>
                <h3 className={styles.nombre}>{curso.nombre}</h3>
                <p className={styles.prof}>Profesor: {curso.profesor}</p>
              </div>

              <p className={styles.precio}>€{curso.precio}</p>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <div className={styles.resumen}>
          <h2 className={styles.resumenTitle}>Resumen del Pedido</h2>

          <div className={styles.row}>
            <span>Subtotal</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.row}>
            <span>Impuestos</span>
            <span>€0.00</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>

          <Link href="/dashboard/estudiante/pago" className={styles.btnPrimary}>
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
}
