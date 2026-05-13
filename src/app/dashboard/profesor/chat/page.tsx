"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "alumno", text: "Hola profesor, tengo una duda." },
    { id: 2, sender: "profesor", text: "Hola, claro, dime." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now(), sender: "profesor", text: input },
    ]);

    setInput("");
  };

  return (
    <div className={styles.background}>
      <div className={styles.chatCard}>
        <h1 className={styles.title}>Chat con Alumno</h1>

        {/* MENSAJES */}
        <div className={styles.messagesBox}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={
                msg.sender === "profesor"
                  ? styles.messageRight
                  : styles.messageLeft
              }
            >
              <div className={styles.avatar}>
                {msg.sender === "profesor" ? "P" : "A"}
              </div>

              <div className={styles.bubble}>{msg.text}</div>
            </div>
          ))}
        </div>
        

        {/* INPUT */}
        <div className={styles.inputBox}>
          <button className={styles.attachBtn}>📎</button>

          <input
            type="text"
            className={styles.input}
            placeholder="Escribe un mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className={styles.sendBtn} onClick={sendMessage}>
            ➤
          </button>

        </div>
      </div>
    </div>
  );
}
