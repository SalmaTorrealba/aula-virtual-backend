"use client";

import StudentDarkSidebar from "@/components/students/StudentDarkSidebar";
import ConfiguracionSidebar from "@/components/students/SettingsSidebar";
import React from "react";

interface ConfiguracionLayoutProps {
  children: React.ReactNode;
}

export default function ConfiguracionLayout({ children }: ConfiguracionLayoutProps) {
  return (
    <div className="config-layout">
      <StudentDarkSidebar />

      <div className="config-layout-inner">
        <ConfiguracionSidebar />

        <div className="config-layout-content">
          {children}
        </div>
      </div>
    </div>
  );
}
