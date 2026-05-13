"use client";

import { useState } from "react";
import "./forgot.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(email)) newErrors.email = "Correo inválido";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      // Aquí normalmente llamarías a tu API:
      // await fetch("/api/auth/forgot-password", { ... })
    }
  }

  return (
    <div className="forgot-background">
      <div className="forgot-card">

        <img
          src="/logos/Logo-ingenieria.png"
          className="forgot-logo"
          alt="Logo"
        />

        <h2 className="forgot-title">Recuperar contraseña</h2>

        {!success ? (
          <form className="forgot-form" onSubmit={handleSubmit}>

            <div>
              <label className="forgot-label">Correo electrónico</label>
              <input
                type="email"
                className={`forgot-input ${errors.email ? "input-error" : ""}`}
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <button type="submit" className="forgot-btn">
              Enviar instrucciones
            </button>

          </form>
        ) : (
          <p className="success-text">
            Te enviamos un correo con instrucciones para recuperar tu contraseña.
          </p>
        )}

      </div>
    </div>
  );
}
