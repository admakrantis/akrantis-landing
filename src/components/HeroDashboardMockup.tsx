const NAV_ITEMS = [
  { label: "Visão Geral", active: true, badge: null, check: false },
  { label: "Pendências", active: false, badge: { value: "4", color: "#ef4444" }, check: false },
  { label: "Fluxo de Lotes", active: false, badge: { value: "2", color: "#d97706" }, check: false },
  { label: "Compliance", active: false, badge: null, check: true },
] as const;

const METRICS = [
  { label: "Conformidade Documental", value: "89%", note: "", valueColor: "#16a34a", noteBg: "", noteColor: "" },
  { label: "Lotes em Aberto", value: "3", note: "risco", valueColor: "#d97706", noteBg: "#fffbeb", noteColor: "#b45309" },
  { label: "Alertas Críticos", value: "2", note: "", valueColor: "#dc2626", noteBg: "", noteColor: "" },
] as const;

const ALERTS = [
  { dot: "#ef4444", label: "Licença LO-2024-441 vencida — CETESB · Guarulhos", badge: "CRÍTICO", badgeBg: "#fef2f2", badgeColor: "#dc2626" },
  { dot: "#f59e0b", label: "Condicionante C-14 vence em 6 dias — Efluentes", badge: "ATENÇÃO", badgeBg: "#fffbeb", badgeColor: "#b45309" },
  { dot: "#f59e0b", label: "Parceiro Vidal Ltda — aptidão irregular", badge: "ATENÇÃO", badgeBg: "#fffbeb", badgeColor: "#b45309" },
] as const;

export function HeroDashboardMockup() {
  return (
    <div
      style={{
        transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
        transformOrigin: "top center",
        width: "100%",
        willChange: "transform",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #dde3ec",
          borderRadius: 12,
          boxShadow:
            "0 24px 64px -12px rgba(15,23,42,0.20), 0 8px 24px -6px rgba(15,23,42,0.10)",
          overflow: "hidden",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            height: 32,
            background: "#f1f5f9",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 6,
            flexShrink: 0,
          }}
        >
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ef4444", opacity: 0.6 }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#f59e0b", opacity: 0.6 }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#22c55e", opacity: 0.6 }} />
          <span style={{ marginLeft: 8, fontSize: 10, color: "#94a3b8", fontWeight: 500 }}>
            Akrantis — Grupo Industrial
          </span>
        </div>

        {/* App body */}
        <div style={{ display: "flex", height: 400 }}>

          {/* Sidebar */}
          <div
            style={{
              width: 164,
              background: "#f8fafc",
              borderRight: "1px solid #e2e8f0",
              padding: "12px 0",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "0 14px 14px" }}>
              <span style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", letterSpacing: "-0.04em" }}>
                AK
              </span>
              <span style={{ fontSize: 10, color: "#94a3b8", marginLeft: 5, fontWeight: 500 }}>
                akrantis
              </span>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 1, padding: "0 6px" }}>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 8px",
                    borderRadius: 6,
                    background: item.active ? "#e2e8f0" : "transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: item.active ? 600 : 400,
                      color: item.active ? "#0f172a" : "#64748b",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#fff",
                        background: item.badge.color,
                        borderRadius: 8,
                        padding: "1px 5px",
                        minWidth: 16,
                        textAlign: "center",
                      }}
                    >
                      {item.badge.value}
                    </span>
                  )}
                  {item.check && (
                    <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 700 }}>✓</span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Main panel */}
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              padding: "14px 16px",
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            {/* Header */}
            <div
              style={{
                marginBottom: 14,
                borderBottom: "1px solid #f1f5f9",
                paddingBottom: 10,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", letterSpacing: "-0.01em" }}>
                Dashboard — Grupo Industrial Akrantis
              </div>
              <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>
                07 mai. 2026 · atualizado agora
              </div>
            </div>

            {/* Metric cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "10px 10px 9px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "#64748b",
                      fontWeight: 500,
                      marginBottom: 5,
                      lineHeight: 1.35,
                    }}
                  >
                    {m.label}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: m.valueColor,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {m.value}
                    </span>
                    {m.note && (
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 600,
                          color: m.noteColor,
                          background: m.noteBg,
                          padding: "1px 4px",
                          borderRadius: 4,
                        }}
                      >
                        {m.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Alerts section label */}
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 7,
              }}
            >
              Alertas ativos
            </div>

            {/* Alert rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {ALERTS.map((alert) => (
                <div
                  key={alert.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "7px 10px",
                    border: "1px solid #f1f5f9",
                    borderRadius: 7,
                    background: "#fafbfc",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: alert.dot,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      flex: 1,
                      fontSize: 10,
                      color: "#334155",
                      lineHeight: 1.4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {alert.label}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      color: alert.badgeColor,
                      background: alert.badgeBg,
                      padding: "2px 5px",
                      borderRadius: 4,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {alert.badge}
                  </span>
                  <span style={{ fontSize: 10, color: "#94a3b8", flexShrink: 0 }}>Ver →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
