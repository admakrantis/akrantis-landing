"use client";

import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Truck, Recycle } from "lucide-react";
import { Navbar } from "./Navbar";
import { InfiniteGrid } from "./InfiniteGrid";
import { DemoModal } from "./DemoModal";
import { FadeIn } from "./FadeIn";

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

// ─── Mockup scale constants ───────────────────────────────────────────────────
// Mockups designed at 900px wide (228px sidebar + ~672px content)
const MOCKUP_DESIGN_WIDTH = 900;
const MOCKUP_DESIGN_HEIGHT = Math.round(MOCKUP_DESIGN_WIDTH * (10 / 16)); // 562px

// ─── Mockup container ─────────────────────────────────────────────────────────
function MockupFrame({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = containerWidth > 0 ? containerWidth / MOCKUP_DESIGN_WIDTH : 1;
  const containerHeight = containerWidth > 0
    ? Math.round(MOCKUP_DESIGN_HEIGHT * scale)
    : undefined;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: containerHeight,
        aspectRatio: containerHeight == null ? "16/10" : undefined,
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
          width: MOCKUP_DESIGN_WIDTH,
          height: MOCKUP_DESIGN_HEIGHT,
          border: "none",
          display: "block",
          pointerEvents: "none",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
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
  return (
    <FadeIn>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">

        {/* Texto — sempre primeiro em mobile */}
        <div className={`flex flex-col justify-center w-full md:max-w-[420px] ${reversed ? "md:order-2" : "md:order-1"}`}>
          <h3 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1rem", color: "#0f172a" }}>
            {title}
          </h3>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#64748b" }}>
            {body}
          </p>
        </div>

        {/* Mockup — sempre segundo em mobile */}
        <div className={`w-full md:flex-1 md:min-w-0 ${reversed ? "md:order-1" : "md:order-2"}`}>
          <MockupFrame src={mockupSrc} />
        </div>

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
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  backgroundColor: "#f1f5f9",
                  color: "#475569",
                  border: "1px solid #e2e8f0",
                }}
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
                className="text-white font-medium transition-colors active:opacity-80"
                style={{
                  backgroundColor: "#0f172a",
                  padding: "11px 24px",
                  borderRadius: 6,
                  fontSize: "0.9375rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e293b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f172a")}
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
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{
                    fontSize: "11px",
                    backgroundColor: "#f1f5f9",
                    color: "#475569",
                    border: "1px solid #e2e8f0",
                  }}
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
        <section
          style={{
            backgroundColor: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0",
            padding: "100px 24px",
          }}
        >
          <FadeIn>
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                maxWidth: 960,
                margin: "0 auto",
              }}
            >
              {[
                {
                  highlight: "MTR → CDF",
                  unit: "rastreabilidade ponta a ponta",
                  label: "do manifesto ao certificado de destinação em um fluxo único",
                },
                {
                  highlight: "SINIR",
                  unit: "cobertura nacional",
                  label: "integração com o sistema federal de resíduos sólidos",
                },
                {
                  highlight: "I · II-A · II-B",
                  unit: "classes NBR 10004",
                  label: "resíduos perigosos e não perigosos monitorados por classe",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0 40px",
                    textAlign: "center",
                    borderRight: i < 2 ? "1px solid #e2e8f0" : undefined,
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: "#0f172a",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {item.highlight}
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#020617",
                      marginTop: 4,
                    }}
                  >
                    {item.unit}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#64748b",
                      marginTop: 8,
                      maxWidth: 200,
                      margin: "8px auto 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
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
                <em className="not-italic font-medium" style={{ color: "#94a3b8" }}>
                  responsabilidade ambiental
                </em>{" "}
                para o gerador.
              </p>
              <p>
                Parceiro sem licença vigente vira{" "}
                <em className="not-italic font-medium" style={{ color: "#94a3b8" }}>
                  risco compartilhado
                </em>
                . CDF ausente vira passivo. Auditoria ESG reprovada pode custar{" "}
                <em className="not-italic font-medium" style={{ color: "#94a3b8" }}>
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
        <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
          <FadeIn>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              style={{
                maxWidth: 1000,
                margin: "0 auto",
                alignItems: "center",
              }}
            >
              {/* Coluna esquerda */}
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#64748b",
                    marginBottom: 16,
                  }}
                >
                  Por que existe
                </p>
                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#020617",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Construído de dentro, não de fora.
                </h2>
                <p
                  style={{
                    marginTop: 20,
                    fontSize: 18,
                    color: "#475569",
                    lineHeight: 1.7,
                  }}
                >
                  A maioria dos sistemas de compliance ambiental foi construída por
                  desenvolvedores que nunca viram uma licença de operação, nunca
                  receberam uma auditoria e nunca precisaram provar a destinação de
                  um resíduo Classe I.
                </p>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 18,
                    color: "#475569",
                    lineHeight: 1.7,
                  }}
                >
                  Akrantis foi construída por quem operou nos três lados da cadeia
                  — como gerador, como transportador e como destinador. Cada campo
                  existe porque já causou problema real quando estava faltando. Cada
                  alerta existe porque alguém já foi pego de surpresa sem ele.
                </p>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 18,
                    color: "#475569",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  O resultado é um sistema que não precisa de treinamento para fazer
                  sentido — porque replica a lógica de quem já vive essa operação.
                </p>
              </div>

              {/* Coluna direita — 3 cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    Icon: ShieldCheck,
                    title: "Gerador",
                    text: "Conhecimento de quem precisa provar destinação correta para auditorias e renovação de licença.",
                  },
                  {
                    Icon: Truck,
                    title: "Transportador",
                    text: "Experiência de quem emite MTR, coordena rotas e responde solidariamente pelo resíduo em trânsito.",
                  },
                  {
                    Icon: Recycle,
                    title: "Destinador",
                    text: "Visão de quem recebe, processa e emite CDF — e sabe o que acontece quando o documento chega errado.",
                  },
                ].map(({ Icon, title, text }) => (
                  <div
                    key={title}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 12,
                      padding: "20px 24px",
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <Icon size={20} color="#64748b" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "#020617",
                          marginBottom: 4,
                        }}
                      >
                        {title}
                      </p>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              className="text-white font-semibold transition-colors active:opacity-80"
              style={{
                backgroundColor: "#0f172a",
                padding: "14px 32px",
                borderRadius: 6,
                fontSize: "0.9375rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e293b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f172a")}
            >
              Agendar demonstração →
            </button>

            <p className="mt-6 text-slate-400" style={{ fontSize: "0.8125rem" }}>
              Demonstração aplicada à realidade da sua operação.
            </p>
          </FadeIn>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer className="bg-slate-950 px-6 py-10 text-center">
          <p className="text-slate-500" style={{ fontSize: "0.8125rem" }}>
            © 2026 Akrantis Infraestrutura Ambiental Ltda · CNPJ 65.493.422/0001-91
            {" · "}
            <a href="/termos" className="hover:text-slate-300 transition-colors underline underline-offset-2">
              Termos de Uso
            </a>
          </p>
          <p className="text-slate-500 mt-1.5" style={{ fontSize: "0.8125rem" }}>
            Av. Santos Dumont, 2828 · Aldeota · Fortaleza · CE · CEP 60150-162
          </p>
          <p className="text-slate-500 mt-1.5" style={{ fontSize: "0.8125rem" }}>
            (85) 99803-8229
          </p>
        </footer>
      </main>
    </>
  );
}
