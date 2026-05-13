"use client";
import "./inicio.css";

export default function InicioPage() {
  return (
    <div className="inicio-wrapper">

      {/* HERO PRINCIPAL */}
      <section className="hero">
        <div className="hero-content">
          <h1>FORMACIÓN TÉCNICA ESPECIALIZADA EN INGENIERÍA</h1>
          <p>Capacitación profesional para el sector industrial, energético y tecnológico.</p>
          <button className="hero-btn">VER CATÁLOGO</button>
        </div>
      </section>

      {/* CURSOS DESTACADOS */}
      <section className="destacados">
        <h2>CURSOS DESTACADOS</h2>

        <div className="cursos-grid">

          {/* CURSO 1 */}
          <div className="curso-card">
            <div className="curso-img img1"></div>
            <h3>SEGURIDAD INDUSTRIAL AVANZADA</h3>
            <p className="precio">28€</p>
            <button className="curso-btn">MATRICULARME</button>
          </div>

          {/* CURSO 2 */}
          <div className="curso-card">
            <div className="curso-img img2"></div>
            <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
            <p className="precio">28€</p>
            <button className="curso-btn">MATRICULARME</button>
          </div>

          {/* CURSO 3 */}
          <div className="curso-card">
            <div className="curso-img img3"></div>
            <h3>AUTOMATIZACIÓN INDUSTRIAL</h3>
            <p className="precio">29€</p>
            <button className="curso-btn">MATRICULARME</button>
          </div>

          {/* CURSO 4 */}
          <div className="curso-card">
            <div className="curso-img img4"></div>
            <h3>ENERGÍAS RENOVABLES</h3>
            <p className="precio">29€</p>
            <button className="curso-btn">MATRICULARME</button>
          </div>

        </div>
      </section>

    </div>
  );
}
