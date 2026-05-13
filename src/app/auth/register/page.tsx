"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./register.css";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validateForm() {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!validateEmail(email)) newErrors.email = "Correo inválido";
    if (pass.length < 6) newErrors.pass = "La contraseña debe tener mínimo 6 caracteres";
    if (pass !== confirm) newErrors.confirm = "Las contraseñas no coinciden";
    if (!accepted) newErrors.accepted = "Debes aceptar los términos";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("Registro exitoso");

      // Redirección automática al login
      setTimeout(() => {
        router.push("/auth/login");
      }, 800);
    }
  }

  return (
    <div className="register-background">
      <div className="register-card">

        <img
          src="/logos/Logo-ingenieria.png"
          className="register-logo"
          alt="Logo"
        />

        <h2 className="register-title">Crear cuenta</h2>

        <form className="register-form" onSubmit={handleSubmit}>

          {/* Nombre */}
          <div>
            <label className="register-label">Nombre completo</label>
            <input
              type="text"
              className={`register-input ${errors.name ? "input-error" : ""}`}
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="register-label">Correo electrónico</label>
            <input
              type="email"
              className={`register-input ${errors.email ? "input-error" : ""}`}
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Contraseña */}
          <div>
            <label className="register-label">Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                className={`register-input ${errors.pass ? "input-error" : ""}`}
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

          {/* Confirmación */}
          <div>
            <label className="register-label">Confirmar contraseña</label>
            <div className="password-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                className={`register-input ${errors.confirm ? "input-error" : ""}`}
                placeholder="********"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <span
                className="toggle-pass"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.confirm && <p className="error-text">{errors.confirm}</p>}
          </div>

          {/* Términos */}
          <div className="terms-box">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>Acepto los términos y condiciones</span>
          </div>
          {errors.accepted && <p className="error-text">{errors.accepted}</p>}

          <button type="submit" className="register-btn">
            Registrarme
          </button>

        </form>

      </div>
    </div>
  );
}
