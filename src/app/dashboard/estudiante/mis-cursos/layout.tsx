"use client";

   // ← FALTABA ESTO

import StudentTopBar from "@/components/students/StudentTopBar";
import "./mis-cursos-layout.css";

interface EstudianteLayoutProps {
  children: React.ReactNode;
}

export default function EstudianteLayout({ children }: EstudianteLayoutProps) {
  return (
    <div className="estudiante-layout">
 {/* si quieres sidebar de curso aquí */}
      {/* O si quieres el sidebar general del estudiante: */}


      <div className="estudiante-main">
       
        <div className="estudiante-content">{children}</div>
      </div>
    </div>
  );
}
