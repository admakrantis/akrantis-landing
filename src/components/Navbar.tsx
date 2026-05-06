"use client";

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span
          className="text-[15px] text-slate-950"
          style={{ fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          Akrantis
        </span>

        <button
          onClick={onOpenModal}
          className="text-sm text-white px-4 py-1.5 font-medium transition-opacity hover:opacity-90 active:opacity-80"
          style={{ backgroundColor: "#166534", borderRadius: "6px" }}
        >
          Agendar demonstração
        </button>
      </div>
    </header>
  );
}
