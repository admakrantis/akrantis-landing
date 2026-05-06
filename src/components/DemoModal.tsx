"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  nome: string;
  email: string;
  empresa: string;
}

const initialForm: FormState = { nome: "", email: "", empresa: "" };

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFieldChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(2, 6, 23, 0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Agendar demonstração"
          >
            <motion.div
              className="bg-white w-full relative overflow-hidden"
              style={{ maxWidth: 440, borderRadius: 12, padding: 32 }}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      Agendar demonstração
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">
                      Retornaremos em até 24h para confirmar.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {(
                        [
                          {
                            field: "nome" as const,
                            label: "Nome",
                            type: "text",
                            placeholder: "Seu nome completo",
                            autoComplete: "name",
                          },
                          {
                            field: "email" as const,
                            label: "Email corporativo",
                            type: "email",
                            placeholder: "voce@empresa.com.br",
                            autoComplete: "email",
                          },
                          {
                            field: "empresa" as const,
                            label: "Empresa",
                            type: "text",
                            placeholder: "Nome da empresa",
                            autoComplete: "organization",
                          },
                        ] as const
                      ).map(({ field, label, type, placeholder, autoComplete }) => (
                        <div key={field}>
                          <label className="text-xs font-medium text-slate-700 mb-1.5 block">
                            {label}
                          </label>
                          <input
                            type={type}
                            required
                            autoComplete={autoComplete}
                            value={form[field]}
                            onChange={handleFieldChange(field)}
                            placeholder={placeholder}
                            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-md outline-none focus:border-slate-400 transition-colors placeholder:text-slate-400 text-slate-900"
                          />
                        </div>
                      ))}

                      <button
                        type="submit"
                        className="w-full py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80 mt-2"
                        style={{ backgroundColor: "#166534", borderRadius: 6 }}
                      >
                        Enviar solicitação
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="py-8 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <Check size={22} className="text-green-700" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      Solicitação recebida.
                    </h3>
                    <p className="text-sm text-slate-500">
                      Retornaremos em até 24h.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
