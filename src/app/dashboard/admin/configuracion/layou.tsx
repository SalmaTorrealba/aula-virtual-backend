"use client";

import SettingsSidebar from "@/components/students/SettingsSidebar";

export default function ConfiguracionLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SettingsSidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "220px",
          padding: "60px 40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "700px" }}>{children}</div>
      </div>
    </div>
  );
}
