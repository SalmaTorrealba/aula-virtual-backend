"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validateForm() {
    const newErrors = {};

    if (!validateEmail(email)) newErrors.email = "Correo inválido";
    if (pass.length < 6) newErrors.pass = "La contraseña debe tener mínimo 6 caracteres";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login exitoso");

      // Redirección automática
      setTimeout(() => {
        router.push("/"); // o /dashboard si lo prefieres
      }, 800);
    }
  }

  return (
    <div className="login-background">
      <div className="login-card">

        <img
          src="/logos/Logo-ingenieria.png"
          className="login-logo"
          alt="Logo"
        />

        <h2 className="login-title">Iniciar sesión</h2>

        <form className="login-form" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="login-label">Correo electrónico</label>
            <input
              type="email"
              className={`login-input ${errors.email ? "input-error" : ""}`}
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Contraseña */}
          <div>
            <label className="login-label">Contraseña</label>

            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                className={`login-input ${errors.pass ? "input-error" : ""}`}
                placeholder="********"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <span
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>

            {errors.pass && <p className="error-text">{errors.pass}</p>}
          </div>
          <div className="forgot-link-box">
          <a href="/auth/forgot-password" className="forgot-link">
           ¿Olvidaste tu contraseña?
           </a>
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>

        </form>

      </div>
    </div>
  );
}
