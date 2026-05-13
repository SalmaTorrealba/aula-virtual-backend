"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function VerTutoriaPage() {
  const tutoria = {
    profesor: "Ing. Carlos López",
    fecha: "2026-05-10",
    hora: "10:00 AM",
    estado: "Pendiente",
  };

  const [mensaje, setMensaje] = useState("");
  const [chat, setChat] = useState([
    { emisor: "profesor", texto: "Hola Samara, estaré listo para la tutoría." },
  ]);

  const enviarMensaje = () => {
    if (!mensaje.trim()) return;

    setChat([...chat, { emisor: "usuario", texto: mensaje }]);
    setMensaje("");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Detalles de la Tutoría</h1>

      <div className={styles.card}>
        <p className={styles.label}>
          Profesor: <span>{tutoria.profesor}</span>
        </p>

        <p className={styles.label}>
          Fecha: <span>{tutoria.fecha}</span>
        </p>

        <p className={styles.label}>
          Hora: <span>{tutoria.hora}</span>
        </p>

        <p className={styles.label}>
          Estado: <span>{tutoria.estado}</span>
        </p>

        <div className={styles.btnRow}>
          <button className={styles.btnCancel}>Cancelar Tutoría</button>
          <Link
            href={`/dashboard/estudiante/tutorias/${1}/solicitar`}
            className={styles.btnReagendar}
          >
            Reagendar
          </Link>
        </div>
      </div>

      {/* CHAT DENTRO DE LA TUTORÍA */}
      <h2 className={styles.subtitle}>Chat con el Profesor</h2>

      <div className={styles.chatBox}>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`${styles.msg} ${
              msg.emisor === "usuario" ? styles.userMsg : styles.profMsg
            }`}
          >
            {msg.texto}
          </div>
        ))}
      </div>

      <div className={styles.inputBox}>
        <input
          type="text"
          className={styles.input}
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button className={styles.btnPrimary} onClick={enviarMensaje}>
          Enviar
        </button>
      </div>

      <Link href="/dashboard/estudiante/tutorias" className={styles.btnBack}>
        Volver
      </Link>
    </div>
  );
}
