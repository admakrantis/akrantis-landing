import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow — fundo com profundidade */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Borda superior — linha de acento */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, #6366f1 0%, #0ea5e9 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Header: logo mark + nome */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* AK logomark */}
          <div
            style={{
              width: 52,
              height: 52,
              background: "#ffffff",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#0f172a",
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-1px",
                fontFamily: "sans-serif",
                lineHeight: 1,
              }}
            >
              AK
            </span>
          </div>

          <span
            style={{
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              fontFamily: "sans-serif",
            }}
          >
            akrantis
          </span>
        </div>

        {/* Main content — centro */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 820,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#64748b",
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.08em",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
              }}
            >
              Compliance Ambiental
            </span>
          </div>

          <span
            style={{
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-3px",
              fontFamily: "sans-serif",
              lineHeight: 1,
            }}
          >
            Infraestrutura de
            Rastreabilidade
            Ambiental
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#94a3b8",
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            Licenças, condicionantes, MTRs e certificados em uma plataforma.
          </span>

          <span
            style={{
              color: "#475569",
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            akrantis.com.br
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
