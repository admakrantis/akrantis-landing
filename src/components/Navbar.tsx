"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 border-b transition-all duration-200"
      style={{
        borderColor: scrolled ? "rgba(226,232,240,0.7)" : "rgba(226,232,240,1)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <img src="/logo.png" alt="Akrantis" style={{ height: '40px', width: 'auto', display: 'block' }} />

        <button
          onClick={onOpenModal}
          className="text-sm text-white px-4 py-1.5 font-medium transition-colors active:opacity-80"
          style={{ backgroundColor: "#0f172a", borderRadius: "6px" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e293b")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f172a")}
        >
          Agendar demonstração
        </button>
      </div>
    </header>
  );
}
