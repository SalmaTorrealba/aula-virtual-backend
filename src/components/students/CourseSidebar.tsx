"use client";

import "./course-sidebar.css";

export default function CourseSidebar() {
  return (
    <aside className="course-sidebar">
      <h3 className="sidebar-title">Cursos</h3>

      <div className="sidebar-module">
        <h4>Módulo 1: Fundamentos</h4>
        <ul>
          <li className="completed">2.1: Nutilas de nemes</li>
          <li className="completed">2.2: Medición de Parmoetalo</li>
        </ul>
      </div>

      <div className="sidebar-module">
        <h4>Módulo 2: Técnicas Avanzadas</h4>
        <ul>
          <li>2.3: Medición de Flujos de Calor</li>
          <li>2.4: Evaciación de Eloperasion</li>
          <li>2.5: Derinición de Lamentos</li>
        </ul>
      </div>

      <div className="sidebar-module">
        <h4>Módulo 3: Juolutas acuaiudadas</h4>
      </div>

      <div className="sidebar-module">
        <h4>Módulo 12: Técnicas Avanzadas</h4>
      </div>
    </aside>
  );
}
