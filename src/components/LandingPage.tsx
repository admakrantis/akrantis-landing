"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { InfiniteGrid } from "./InfiniteGrid";
import { DemoModal } from "./DemoModal";
import { FadeIn } from "./FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";

// ─── Mockup iframe shadow (Stripe-style) ────────────────────────────────────
const MOCKUP_SHADOW =
  "rgba(50,50,93,0.18) 0px 24px 48px -12px, rgba(0,0,0,0.12) 0px 12px 28px -10px";

// ─── Product Sections ────────────────────────────────────────────────────────
interface ProductBlock {
  title: string;
  body: string;
  mockupSrc: string;
  reversed: boolean;
}

const PRODUCT_BLOCKS: ProductBlock[] = [
  {
    title: "Compliance em tempo real",
    body: "Licenças, condicionantes e vencimentos monitorados automaticamente. Alertas antes da fiscalização, não depois.",
    mockupSrc: "/mockups/compliance.html",
    reversed: false,
  },
  {
    title: "Rastreie cada resíduo do lote ao certificado",
    body: "MTR, transporte, CDF e encerramento em um fluxo único. Bloqueios automáticos quando há risco documental.",
    mockupSrc: "/mockups/fluxo-lotes.html",
    reversed: true,
  },
  {
    title: "Ingestão automática de documentos",
    body: "Arraste licenças, MTRs e CDFs. O sistema identifica, extrai e vincula automaticamente ao contexto correto.",
    mockupSrc: "/mockups/ingestao.html",
    reversed: false,
  },
  {
    title: "Visão consolidada da operação",
    body: "Dashboard ESG com alertas críticos, cobertura documental e pipeline de lotes — tudo em uma visão.",
    mockupSrc: "/mockups/dashboard.html",
    reversed: true,
  },
];

// ─── Status pills ─────────────────────────────────────────────────────────────
const STATUS_PILLS = [
  { symbol: "●", label: "Licença válida", dotColor: "#16a34a" },
  { symbol: "⚠", label: "Condicionante vence em 14 dias", dotColor: "#d97706" },
  { symbol: "✓", label: "Parceiro apto", dotColor: "#64748b" },
] as const;

// ─── Mockup container ─────────────────────────────────────────────────────────
function MockupFrame({ src }: { src: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #e5edf5",
        boxShadow: MOCKUP_SHADOW,
        background: "#f8fafc",
      }}
    >
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          pointerEvents: "none",
        }}
        scrolling="no"
        tabIndex={-1}
        aria-hidden="true"
        loading="lazy"
      />
    </div>
  );
}

// ─── Product block ────────────────────────────────────────────────────────────
function ProductBlock({ title, body, mockupSrc, reversed }: ProductBlock) {
  const textCol = (
    <div className="flex flex-col justify-center" style={{ maxWidth: 420 }}>
      <h3
        className="text-slate-900 mb-4"
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
        {body}
      </p>
    </div>
  );

  const mockupCol = (
    <div className="flex-1 min-w-0">
      <MockupFrame src={mockupSrc} />
    </div>
  );

  return (
    <FadeIn>
      <div
        className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
        style={{ flexDirection: reversed ? undefined : undefined }}
      >
        {reversed ? (
          <>
            {mockupCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {mockupCol}
          </>
        )}
      </div>
    </FadeIn>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToProduct = () => {
    document.getElementById("produto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
          <InfiniteGrid />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600"
                style={{ fontSize: "12px", fontWeight: 500 }}
              >
                <span style={{ color: "#16a34a", fontSize: "8px" }}>●</span>
                Infraestrutura de compliance ambiental
              </span>
            </div>

            {/* H1 + H2 */}
            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              <span className="text-slate-950 block">
                Sua licença ambiental vence.
              </span>
              <span className="text-slate-400 block mt-1">
                Você vai saber antes da fiscalização ou depois?
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-slate-500 mx-auto mb-3"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: 560 }}
            >
              Akrantis centraliza licenças, condicionantes, parceiros, MTRs e
              certificados em uma única infraestrutura de rastreabilidade
              ambiental.
            </p>

            {/* Reinforcement */}
            <p className="text-slate-400 mb-10" style={{ fontSize: "0.875rem" }}>
              Sem planilha. Sem documento perdido. Sem surpresa na auditoria.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="text-white font-medium transition-opacity hover:opacity-90 active:opacity-80"
                style={{
                  backgroundColor: "#166534",
                  padding: "11px 24px",
                  borderRadius: 6,
                  fontSize: "0.9375rem",
                }}
              >
                Ver demonstração →
              </button>
              <button
                onClick={scrollToProduct}
                className="text-slate-700 font-medium border border-slate-200 transition-colors hover:bg-slate-50 active:bg-slate-100"
                style={{
                  padding: "11px 24px",
                  borderRadius: 6,
                  fontSize: "0.9375rem",
                }}
              >
                Saiba mais
              </button>
            </div>

            {/* Status pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {STATUS_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1 text-slate-500"
                  style={{ fontSize: "11px" }}
                >
                  <span style={{ color: pill.dotColor, fontSize: "9px" }}>
                    {pill.symbol}
                  </span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUTO — 4 blocos alternados ─────────────────────────────────── */}
        <section id="produto" className="bg-white py-8 px-6">
          <div className="max-w-6xl mx-auto space-y-28 py-16">
            {PRODUCT_BLOCKS.map((block) => (
              <ProductBlock key={block.title} {...block} />
            ))}
          </div>
        </section>

        {/* ── NÚMEROS ───────────────────────────────────────────────────────── */}
        <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div
                  className="text-slate-900 mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="text-slate-500" style={{ fontSize: "0.8125rem" }}>
                  Licenças monitoradas
                </div>
              </div>

              <div>
                <div
                  className="text-slate-900 mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter target={0} />
                </div>
                <div className="text-slate-500" style={{ fontSize: "0.8125rem" }}>
                  Surpresas na auditoria
                </div>
              </div>

              <div>
                <div
                  className="text-slate-900 mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter target={360} suffix="°" />
                </div>
                <div className="text-slate-500" style={{ fontSize: "0.8125rem" }}>
                  Visão da cadeia
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── RISCO (dark) ──────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#0f172a" }} className="py-28 px-6">
          <FadeIn className="max-w-2xl mx-auto">
            <h2
              className="text-white mb-9"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
              }}
            >
              Uma licença vencida não gera apenas multa.
            </h2>

            <div
              className="space-y-5"
              style={{
                color: "#94a3b8",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
              }}
            >
              <p>
                Ela compromete auditorias, paralisa operações e pode transferir{" "}
                <em className="not-italic font-medium" style={{ color: "#86efac" }}>
                  responsabilidade ambiental
                </em>{" "}
                para o gerador.
              </p>
              <p>
                Parceiro sem licença vigente vira{" "}
                <em className="not-italic font-medium" style={{ color: "#86efac" }}>
                  risco compartilhado
                </em>
                . CDF ausente vira passivo. Auditoria ESG reprovada pode custar{" "}
                <em className="not-italic font-medium" style={{ color: "#86efac" }}>
                  contratos inteiros
                </em>
                .
              </p>
              <p>
                Não é questão de cuidado.
                <br />É questão de ter ou não ter o dado na hora certa.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── CREDIBILIDADE ─────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-24 px-6">
          <FadeIn className="max-w-xl mx-auto text-center">
            <p
              className="text-slate-600"
              style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}
            >
              Akrantis foi construída de dentro da operação, não de fora dela.
              Cada fluxo, cada campo, cada alerta foi desenhado por quem conhece
              o que acontece quando a licença vence, o parceiro não tem aptidão
              e a auditoria chega.
            </p>
          </FadeIn>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
        <section className="bg-white py-28 px-6">
          <FadeIn className="max-w-xl mx-auto text-center">
            <h2
              className="text-slate-950 mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
              }}
            >
              Pronto para ver funcionando com os dados da sua operação?
            </h2>
            <p
              className="text-slate-500 mb-9"
              style={{ fontSize: "1rem", lineHeight: 1.7 }}
            >
              Demonstração personalizada. Sem script genérico.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="text-white font-semibold transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                backgroundColor: "#166534",
                padding: "14px 32px",
                borderRadius: 6,
                fontSize: "0.9375rem",
              }}
            >
              Agendar demonstração →
            </button>

            <p className="mt-6 text-slate-400" style={{ fontSize: "0.8125rem" }}>
              Demonstração aplicada à realidade da sua operação.
            </p>
            <p className="mt-1 text-slate-400" style={{ fontSize: "0.75rem" }}>
              Sem apresentação genérica. Sem compromisso.
            </p>
          </FadeIn>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer className="bg-slate-950 px-6 py-8 text-center">
          <p className="text-slate-500" style={{ fontSize: "0.8125rem" }}>
            © 2026 Akrantis Infraestrutura Ambiental.
          </p>
        </footer>
      </main>
    </>
  );
}
