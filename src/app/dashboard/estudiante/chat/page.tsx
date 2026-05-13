"use client";

import { useState, useRef } from "react";
import styles from "./page.module.css";

export default function ChatPage() {
  const [mensaje, setMensaje] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [chat, setChat] = useState([
    {
      emisor: "soporte",
      texto: "Hola Samara 👋 ¿En qué puedo ayudarte hoy?",
      avatar: "/avatars/instructor.svg",
    },
  ]);

  const fileInputRef = useRef(null);

  const enviarMensaje = () => {
    if (!mensaje.trim() && !archivo) return;

    const nuevoMensaje = {
      emisor: "usuario",
      texto: mensaje,
      archivo: archivo ? archivo.name : null,
      avatar: "/avatars/usuario.svg",
    };

    setChat([...chat, nuevoMensaje]);
    setMensaje("");
    setArchivo(null);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          emisor: "soporte",
          texto: "Gracias por tu mensaje, lo reviso enseguida.",
          avatar: "/avatars/instructor.svg",
        },
      ]);
    }, 800);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Chat de Soporte</h1>

      <div className={styles.chatBox}>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`${styles.mensajeContainer} ${
              msg.emisor === "usuario" ? styles.right : styles.left
            }`}
          >
            <img src={msg.avatar} className={styles.avatar} />

            <div
              className={`${styles.mensaje} ${
                msg.emisor === "usuario" ? styles.usuario : styles.soporte
              }`}
            >
              {msg.texto}

              {msg.archivo && (
                <div className={styles.archivoAdjunto}>
                  📎 {msg.archivo}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputBox}>
        <button
          className={styles.btnFile}
          onClick={() => fileInputRef.current.click()}
        >
          📎
        </button>

        <input
          type="file"
          ref={fileInputRef}
          className={styles.hiddenInput}
          onChange={(e) => setArchivo(e.target.files[0])}
        />

        <input
          type="text"
          className={styles.input}
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button className={styles.btnSend} onClick={enviarMensaje}>
          ➤
        </button>
      </div>

      {archivo && (
        <div className={styles.previewArchivo}>
          Archivo seleccionado: {archivo.name}
        </div>
      )}
    </div>
  );
}
