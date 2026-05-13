"use client";

import { useUserStore } from "@/store/useUserStore";

export default function Sidebar() {
  const { role } = useUserStore();

  const adminMenu = ["Inicio", "Cursos", "Clases", "Usuarios"];
  const profesorMenu = ["Inicio", "Mis cursos", "Mis clases"];
  const estudianteMenu = ["Inicio", "Mis cursos"];

  // 👉 MENÚ POR DEFECTO PARA EVITAR QUE DESAPAREZCA
  let menu = ["Inicio"];

  if (role === "admin") menu = adminMenu;
  if (role === "profesor") menu = profesorMenu;
  if (role === "estudiante") menu = estudianteMenu;

  return (
    <aside
      style={{
        width: "250px",
        background: "#1e1e1e",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Aula Virtual</h2>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menu.map((item) => (
            <li key={item} style={{ margin: "10px 0" }}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
