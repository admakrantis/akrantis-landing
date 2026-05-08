const SIDEBAR_NAV = [
  { label: "Visão Geral", active: false },
  { label: "Pendências", active: false },
  { label: "Pendentes Fiscais", active: false },
] as const;

const SIDEBAR_ENTITIES = [
  { label: "Unidades", active: true },
  { label: "Parceiros", active: false },
  { label: "Licenças", active: false },
  { label: "Compliance", active: false },
  { label: "Relatórios Obrigatórios", active: false },
] as const;

const TABLE_ROWS = [
  {
    name: "Akrantis Indústria Guarulhos",
    cnpj: "45.123.678/0001-90",
    uf: "SP",
    cobertura: "0%",
    lotes: 2,
    pendencias: 9,
    status: "Bloqueada",
    statusBg: "#fee2e2",
    statusColor: "#991b1b",
    selected: true,
  },
  {
    name: "Planta Fortaleza · CE",
    cnpj: "45.123.678/0002-71",
    uf: "CE",
    cobertura: "—",
    lotes: 1,
    pendencias: 0,
    status: "Sem licença",
    statusBg: "#fef3c7",
    statusColor: "#92400e",
    selected: false,
  },
  {
    name: "Planta Recife · PE",
    cnpj: "45.123.678/0003-52",
    uf: "PE",
    cobertura: "—",
    lotes: 1,
    pendencias: 2,
    status: "Sem licença",
    statusBg: "#fef3c7",
    statusColor: "#92400e",
    selected: false,
  },
  {
    name: "Planta Salvador · BA",
    cnpj: "45.123.678/0004-33",
    uf: "BA",
    cobertura: "—",
    lotes: 1,
    pendencias: 0,
    status: "Sem licença",
    statusBg: "#fef3c7",
    statusColor: "#92400e",
    selected: false,
  },
] as const;

function SidebarItem({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      style={{
        padding: "5px 8px",
        borderRadius: 5,
        background: active ? "#e2e8f0" : "transparent",
        cursor: "default",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: active ? 600 : 400,
          color: active ? "#0f172a" : "#64748b",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function FieldPair({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 11, fontWeight: 500, color: valueColor ?? "#0f172a" }}>
        {value}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ fontSize: 9, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
      {children}
    </div>
  );
}

function ResumoRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid #f8fafc" }}>
      <span style={{ fontSize: 11, color: "#64748b" }}>{label}</span>
      <span style={{ fontSize: 11, fontWeight: 600, color: valueColor ?? "#0f172a" }}>{value}</span>
    </div>
  );
}

export function UnidadesMockup() {
  return (
    <div style={{ width: "100%", minWidth: 760 }}>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #dde3ec",
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
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
        <div style={{ display: "flex", height: 520 }}>

          {/* ── Sidebar ── */}
          <div
            style={{
              width: 190,
              background: "#f8fafc",
              borderRight: "1px solid #e2e8f0",
              padding: "12px 8px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
              overflowY: "hidden",
            }}
          >
            {/* Logo block */}
            <div style={{ padding: "0 6px 12px", borderBottom: "1px solid #e2e8f0", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                <span style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", letterSpacing: "-0.04em" }}>AK</span>
                <span style={{ fontSize: 10, color: "#64748b", fontWeight: 500 }}>Akrantis</span>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Rastreabilidade para Resíduos
              </div>
            </div>

            {/* Company */}
            <div style={{ padding: "0 6px 10px", marginBottom: 10, borderBottom: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 600, color: "#0f172a", lineHeight: 1.3 }}>
                  Grupo Industrial Akrantis
                </span>
              </div>
            </div>

            {/* Nav sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 1, marginBottom: 12 }}>
              {SIDEBAR_NAV.map((item) => (
                <SidebarItem key={item.label} {...item} />
              ))}
            </div>

            {/* Entities label */}
            <div style={{ padding: "0 6px", marginBottom: 4 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Entidades
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {SIDEBAR_ENTITIES.map((item) => (
                <SidebarItem key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* ── Main area (table + drawer overlay) ── */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#ffffff" }}>

            {/* Table area */}
            <div style={{ padding: "14px 16px 0", height: "100%", overflow: "hidden" }}>
              {/* Table header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>
                  Unidades
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#475569",
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: 5,
                    padding: "3px 9px",
                  }}
                >
                  + Nova unidade
                </span>
              </div>

              {/* Column headers */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 72px 60px auto",
                  padding: "5px 10px",
                  background: "#f8fafc",
                  borderRadius: "6px 6px 0 0",
                  borderBottom: "1px solid #e2e8f0",
                  gap: 4,
                }}
              >
                {["Unidade", "CNPJ", "UF", "Status"].map((col) => (
                  <span key={col} style={{ fontSize: 9, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {col}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {TABLE_ROWS.map((row) => (
                <div
                  key={row.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 72px 60px auto",
                    padding: "7px 10px",
                    borderBottom: "1px solid #f1f5f9",
                    background: row.selected ? "#fafafa" : "#ffffff",
                    gap: 4,
                    alignItems: "center",
                    outline: row.selected ? "none" : undefined,
                    boxShadow: row.selected ? "inset 3px 0 0 #0f172a" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: row.selected ? 600 : 400,
                      color: "#0f172a",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.name}
                  </span>
                  <span style={{ fontSize: 10, color: "#64748b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {row.cnpj}
                  </span>
                  <span style={{ fontSize: 10, color: "#64748b" }}>{row.uf}</span>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: row.statusColor,
                      background: row.statusBg,
                      borderRadius: 4,
                      padding: "2px 6px",
                      whiteSpace: "nowrap",
                      width: "fit-content",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Drawer (absolute overlay from right) ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: 340,
                background: "#ffffff",
                borderLeft: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Drawer header */}
              <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid #f1f5f9", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em", lineHeight: 1.3, flex: 1, marginRight: 8 }}>
                    Akrantis Indústria Guarulhos
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#991b1b",
                        background: "#fee2e2",
                        borderRadius: 4,
                        padding: "2px 7px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      Bloqueada
                    </span>
                    <span style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1, cursor: "default" }}>×</span>
                  </div>
                </div>
                <span style={{ fontSize: 10, color: "#94a3b8" }}>Unidade operacional</span>
              </div>

              {/* Scrollable body */}
              <div style={{ flex: 1, overflow: "hidden", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 14 }}>

                {/* Alert */}
                <div
                  style={{
                    background: "#fee2e2",
                    borderLeft: "3px solid #ef4444",
                    borderRadius: "0 6px 6px 0",
                    padding: "8px 10px",
                  }}
                >
                  <span style={{ fontSize: 10, color: "#991b1b", lineHeight: 1.5, fontWeight: 500 }}>
                    Unidade bloqueada — Licenças vencidas detectadas. Renove para reativar a operação.
                  </span>
                </div>

                {/* Fields */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 12px" }}>
                  <FieldPair label="CNPJ" value="45.123.678/0001-90" />
                  <FieldPair label="UF" value="SP" />
                  <FieldPair label="Sistema MTR" value="SINIR" />
                  <FieldPair label="Cobertura Documental" value="0%" valueColor="#dc2626" />
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f1f5f9" }} />

                {/* Resumo operacional */}
                <div>
                  <SectionLabel>Resumo Operacional</SectionLabel>
                  <ResumoRow label="Lotes ativos" value="2" />
                  <ResumoRow label="Volume de resíduos" value="—" />
                  <ResumoRow label="Pendências regulatórias" value="9" valueColor="#dc2626" />
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f1f5f9" }} />

                {/* Licenças */}
                <div>
                  <SectionLabel>Licenças desta Unidade</SectionLabel>
                  <ResumoRow label="Licenças vinculadas" value="LO-2024-441" valueColor="#dc2626" />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0" }}>
                    <span style={{ fontSize: 11, color: "#64748b" }}>Licença principal</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#dc2626" }}>
                      LO-2024-441 — vencida
                    </span>
                  </div>
                </div>

              </div>

              {/* Footer buttons */}
              <div
                style={{
                  borderTop: "1px solid #f1f5f9",
                  padding: "10px 14px",
                  display: "flex",
                  gap: 6,
                  flexShrink: 0,
                }}
              >
                {[
                  { label: "Ver licenças", primary: false },
                  { label: "Ver lotes", primary: false },
                  { label: "Fechar", primary: true },
                ].map(({ label, primary }) => (
                  <button
                    key={label}
                    style={{
                      flex: 1,
                      padding: "6px 0",
                      borderRadius: 5,
                      fontSize: 10,
                      fontWeight: 600,
                      cursor: "default",
                      border: primary ? "none" : "1px solid #e2e8f0",
                      background: primary ? "#0f172a" : "#ffffff",
                      color: primary ? "#ffffff" : "#475569",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
