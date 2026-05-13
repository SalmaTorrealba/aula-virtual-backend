"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ConfiguracionPage() {
  // Empresa
  const [empresa, setEmpresa] = useState("Aula Virtual");
  const [email, setEmail] = useState("admin@aula.com");
  const [telefono, setTelefono] = useState("+34 600 000 000");

  // Sistema
  const [tema, setTema] = useState("claro");
  const [notificaciones, setNotificaciones] = useState(true);

  // Seguridad
  const [passwordActual, setPasswordActual] = useState("");
  const [passwordNueva, setPasswordNueva] = useState("");
  const [passwordConfirmar, setPasswordConfirmar] = useState("");

  return (
    <div className="content">
      <h1 className={styles.title}>Configuración</h1>

      {/* Empresa */}
      <section className={styles.card}>
        <h2 className={styles.subtitle}>Información de la Empresa</h2>

        <form className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Nombre de la empresa</label>
              <input
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email de contacto</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Teléfono</label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar</button>
        </form>
      </section>

      {/* Sistema */}
      <section className={styles.card}>
        <h2 className={styles.subtitle}>Preferencias del Sistema</h2>

        <form className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Tema</label>
              <select value={tema} onChange={(e) => setTema(e.target.value)}>
                <option value="claro">Claro</option>
                <option value="oscuro">Oscuro</option>
              </select>
            </div>

            <div className={styles.formGroupCheck}>
              <input
                type="checkbox"
                checked={notificaciones}
                onChange={(e) => setNotificaciones(e.target.checked)}
              />
              <label>Activar notificaciones</label>
            </div>
          </div>

          <button className={styles.btnPrimary}>Guardar</button>
        </form>
      </section>

      {/* Seguridad */}
      <section className={styles.card}>
        <h2 className={styles.subtitle}>Seguridad</h2>

        <form className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Contraseña actual</label>
              <input
                type="password"
                value={passwordActual}
                onChange={(e) => setPasswordActual(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Nueva contraseña</label>
              <input
                type="password"
                value={passwordNueva}
                onChange={(e) => setPasswordNueva(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Confirmar contraseña</label>
              <input
                type="password"
                value={passwordConfirmar}
                onChange={(e) => setPasswordConfirmar(e.target.value)}
              />
            </div>
          </div>

          <button className={styles.btnPrimary}>Actualizar Contraseña</button>
        </form>
      </section>
    </div>
  );
}
