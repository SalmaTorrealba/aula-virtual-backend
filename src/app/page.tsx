"use client";

import "./home.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="home-container">

      {/* HEADER */}
      <header className="home-header">
  <div className="logo-container">
<img src="/logos/Logo-ingenieria.png" className="login-logo" alt="Logo" />
    <span className="logo-text">Aula Virtual</span>
  </div>

  <button className="login-btn" onClick={() => router.push("/auth/login")}>
    Iniciar sesión
  </button>
</header>


      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Tu plataforma de aprendizaje moderna y eficiente</h1>
        <p className="hero-subtitle">
          Cursos, evaluaciones, tutorías y seguimiento académico en un solo lugar.
        </p>

        <button className="cta-btn" onClick={() => router.push("/auth/register")}>
          Comenzar ahora
        </button>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits">
        <div className="benefit-card">
          <h3>📚 Aprende a tu ritmo</h3>
          <p>Accede a tus cursos desde cualquier dispositivo.</p>
        </div>

        <div className="benefit-card">
          <h3>📝 Evaluaciones claras</h3>
          <p>Exámenes, tareas y calificaciones organizadas.</p>
        </div>

        <div className="benefit-card">
          <h3>🤝 Tutorías personalizadas</h3>
          <p>Comunicación directa con tutores y profesores.</p>
        </div>

        <div className="benefit-card">
          <h3>📊 Seguimiento en tiempo real</h3>
          <p>Visualiza tu progreso y rendimiento académico.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        © {new Date().getFullYear()} Aula Virtual — Todos los derechos reservados
      </footer>

    </div>
  );
}
