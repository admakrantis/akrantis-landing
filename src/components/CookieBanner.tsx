"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "akrantis_cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "12px 24px",
        }}
      >
        <p
          style={{
            flex: "1 1 280px",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            color: "#94a3b8",
            margin: 0,
          }}
        >
          Usamos cookies para melhorar sua experiência e analisar o uso do site,
          conforme nossa{" "}
          <a
            href="/privacidade"
            style={{ color: "#cbd5e1", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            Política de Privacidade
          </a>
          .
        </p>

        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button
            onClick={() => dismiss("rejected")}
            style={{
              padding: "8px 18px",
              borderRadius: 5,
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.3)",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
          >
            Rejeitar
          </button>
          <button
            onClick={() => dismiss("accepted")}
            style={{
              padding: "8px 18px",
              borderRadius: 5,
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              background: "#ffffff",
              color: "#0f172a",
              border: "1px solid transparent",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
