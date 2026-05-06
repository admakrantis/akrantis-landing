"use client";

import { useState } from "react";
import { Shield, Users, GitBranch, Award, type LucideIcon } from "lucide-react";
import { Navbar } from "./Navbar";
import { InfiniteGrid } from "./InfiniteGrid";
import { AnimatedUnderlineText } from "./AnimatedUnderlineText";
import { DemoModal } from "./DemoModal";
import { FadeIn } from "./FadeIn";

// ─── Data ──────────────────────────────────────────────────────────────────

const STATUS_PILLS = [
  { dot: "●", label: "Licença válida", dotColor: "#16a34a" },
  { dot: "⚠", label: "Condicionante vence em 14 dias", dotColor: "#d97706" },
  { dot: "✓", label: "Parceiro apto", dotColor: "#64748b" },
] as const;

const PROBLEM_ITEMS = [
  "Licenças em PDF espalhadas por e-mail e pastas no Drive",
  "Condicionantes anotadas em planilha sem responsável nem prazo",
  "Parceiros aprovados na confiança — sem cruzar com licença vigente",
  "MTR emitido, CDF nunca chegou, ninguém sabe onde foi o resíduo",
  "Auditoria chega. Começa a corrida.",
] as const;

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: Shield,
    title: "Suas licenças sob controle",
    body: "Carrega suas licenças ambientais, extrai condicionantes com IA e monitora cada uma. Alerta antes de vencer. Não depois.",
  },
  {
    icon: Users,
    title: "Aptidão de parceiros em tempo real",
    body: "A Akrantis cruza licenças de transportadores e destinadores com a classe do resíduo. Se houver restrição, você vê antes de emitir o MTR.",
  },
  {
    icon: GitBranch,
    title: "NF, MTR, CDF em um fluxo rastreável",
    body: "Integração com SINIR. Ingestão automática de documentos. O sistema lê, organiza e linka — rastreabilidade do lote em tempo real.",
  },
  {
    icon: Award,
    title: "Cadeia de custódia certificada",
    body: "No fechamento do ciclo, a Akrantis gera o certificado ambiental com toda a cadeia de custódia — pronto para auditoria, ESG ou órgão fiscalizador.",
  },
];

const STATS = [
  { number: "100%", label: "Licenças monitoradas" },
  { number: "∞", label: "Lotes rastreados" },
  { number: "360°", label: "Visão da cadeia" },
] as const;

// ─── Component ─────────────────────────────────────────────────────────────

export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DemoModal isOpen={modalOpen} onClose={closeModal} />
      <Navbar onOpenModal={openModal} />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
          <InfiniteGrid />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Headline */}
            <h1
              className="font-bold text-slate-950 mb-5"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              <AnimatedUnderlineText>
                Sua licença ambiental vence.
              </AnimatedUnderlineText>
              <br />
              <span className="text-slate-800" style={{ fontWeight: 700 }}>
                Você vai saber antes da fiscalização ou depois?
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-slate-500 mb-3 mx-auto"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                maxWidth: 580,
              }}
            >
              Akrantis centraliza licenças, condicionantes, parceiros, MTRs e
              certificados em uma única{" "}
              <span
                className="text-slate-700 underline underline-offset-[3px] decoration-slate-300"
                style={{ fontWeight: 600 }}
              >
                infraestrutura
              </span>{" "}
              de rastreabilidade ambiental.
            </p>

            {/* Reinforcement line */}
            <p className="text-slate-400 mb-9" style={{ fontSize: "0.875rem" }}>
              Sem planilha. Sem documento perdido. Sem surpresa na auditoria.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
              <button
                onClick={openModal}
                className="text-white font-medium transition-opacity hover:opacity-90 active:opacity-80"
                style={{
                  backgroundColor: "#166534",
                  padding: "10px 22px",
                  borderRadius: 6,
                  fontSize: "0.9375rem",
                }}
              >
                Ver demonstração →
              </button>
              <button
                onClick={scrollToFeatures}
                className="text-slate-700 font-medium bg-transparent border border-slate-200 transition-colors hover:bg-slate-50 active:bg-slate-100"
                style={{
                  padding: "10px 22px",
                  borderRadius: 6,
                  fontSize: "0.9375rem",
                }}
              >
                Saiba mais
              </button>
            </div>

            {/* Status Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {STATUS_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 text-slate-500 bg-slate-50 border border-slate-100 rounded-full px-3 py-1"
                  style={{ fontSize: "11px", lineHeight: 1 }}
                >
                  <span style={{ color: pill.dotColor, fontSize: "9px" }}>
                    {pill.dot}
                  </span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 2 — Problema ────────────────────────────────────────── */}
        <section className="bg-slate-50 py-24 px-6">
          <FadeIn className="max-w-2xl mx-auto">
            <h2
              className="text-slate-900 mb-8"
              style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Como a maioria das indústrias gerencia compliance ambiental hoje
            </h2>

            <ul className="space-y-4 mb-10">
              {PROBLEM_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 font-medium"
                    style={{ color: "#ef4444", fontSize: "0.8125rem" }}
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span className="text-slate-700" style={{ fontSize: "0.9375rem" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-200">
              <p
                className="text-slate-800"
                style={{ fontWeight: 600, fontSize: "0.9375rem" }}
              >
                Isso não é falta de cuidado. É falta de sistema.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── SEÇÃO 3 — Features ────────────────────────────────────────── */}
        <section id="features" className="bg-white py-24 px-6">
          <FadeIn className="max-w-5xl mx-auto">
            <h2
              className="text-slate-900 text-center mb-12"
              style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Uma infraestrutura. O ciclo completo.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEATURE_CARDS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="border border-slate-200 bg-white"
                  style={{ borderRadius: 8, padding: 24 }}
                >
                  <Icon
                    size={20}
                    className="mb-4"
                    style={{ color: "#166534" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-slate-900 mb-2"
                    style={{ fontSize: "0.9375rem", fontWeight: 600 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-slate-600"
                    style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── SEÇÃO 4 — Indicadores ─────────────────────────────────────── */}
        <section className="bg-white py-20 px-6 border-t border-slate-100">
          <FadeIn className="max-w-3xl mx-auto">
            <h2
              className="text-slate-900 mb-4"
              style={{ fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Visibilidade consolidada da operação ambiental
            </h2>
            <p
              className="text-slate-600 mb-14"
              style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}
            >
              Enquanto documentos, condicionantes e resíduos ficam espalhados
              entre unidades, estados e parceiros, a Akrantis estrutura tudo em
              uma visão única — pronta para auditoria, compliance e gestão.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {STATS.map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-slate-900 mb-1.5"
                    style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}
                  >
                    {number}
                  </div>
                  <div className="text-slate-500" style={{ fontSize: "0.75rem" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── SEÇÃO 5 — Risco (dark) ────────────────────────────────────── */}
        <section className="bg-slate-950 py-24 px-6">
          <FadeIn className="max-w-2xl mx-auto">
            <h2
              className="text-white mb-8"
              style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Uma licença vencida não gera apenas multa.
            </h2>

            <div className="space-y-5 text-slate-400" style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
              <p>
                Ela compromete auditorias, paralisa operações e pode transferir{" "}
                <em
                  className="not-italic font-medium"
                  style={{ color: "#86efac" }}
                >
                  responsabilidade ambiental
                </em>{" "}
                para o gerador.
              </p>
              <p>
                Parceiro sem licença vigente vira{" "}
                <em
                  className="not-italic font-medium"
                  style={{ color: "#86efac" }}
                >
                  risco compartilhado
                </em>
                .
                <br />
                CDF ausente vira passivo.
                <br />
                Auditoria ESG reprovada pode custar{" "}
                <em
                  className="not-italic font-medium"
                  style={{ color: "#86efac" }}
                >
                  contratos inteiros
                </em>
                .
              </p>
              <p>
                Não é questão de cuidado.
                <br />
                É questão de ter ou não ter o dado na hora certa.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── SEÇÃO 6 — Origem ──────────────────────────────────────────── */}
        <section className="bg-slate-50 py-24 px-6">
          <FadeIn
            className="mx-auto text-center"
            style={{ maxWidth: 600 } as React.CSSProperties}
          >
            <p className="text-slate-600" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Akrantis foi construída de dentro da operação, não de fora dela.
              Cada fluxo, cada campo, cada alerta foi desenhado por quem conhece
              o que acontece quando a licença vence, o parceiro não tem aptidão
              e a auditoria chega.
            </p>
          </FadeIn>
        </section>

        {/* ── SEÇÃO 7 — CTA Final ───────────────────────────────────────── */}
        <section className="bg-white py-28 px-6">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2
              className="text-slate-950 mb-4"
              style={{ fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25 }}
            >
              Pronto para ver funcionando com os dados da sua operação?
            </h2>
            <p className="text-slate-500 mb-9" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
              Demonstração personalizada. Sem script genérico. Você traz sua
              operação, a gente mostra como a Akrantis resolve.
            </p>

            <button
              onClick={openModal}
              className="text-white font-medium transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                backgroundColor: "#166534",
                padding: "14px 28px",
                borderRadius: 6,
                fontSize: "0.9375rem",
              }}
            >
              Agendar demonstração →
            </button>

            <p className="mt-5 text-slate-500" style={{ fontSize: "0.8125rem" }}>
              Demonstração aplicada à realidade da sua operação.
            </p>
            <p className="mt-1 text-slate-400" style={{ fontSize: "0.6875rem" }}>
              Sem apresentação genérica. Sem compromisso.
            </p>
          </FadeIn>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────── */}
        <footer className="bg-slate-950 px-6 py-6 text-center">
          <p className="text-slate-400" style={{ fontSize: "0.875rem" }}>
            © 2026 Akrantis Infraestrutura Ambiental. Todos os direitos
            reservados.
          </p>
        </footer>
      </main>
    </>
  );
}
