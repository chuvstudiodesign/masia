import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "masIA vs. Concorrência | Comparativo",
  description:
    "Inteligência estratégica contínua. Sem os custos do modelo convencional.",
};

type Val = { check: "yes" | "no" | "partial"; label?: string };

const rows: { feature: string; masia: Val; generica: Val; consultoria: Val }[] = [
  {
    feature: "Investimento mensal",
    masia:      { check: "yes",     label: "R$ 3.000/mês" },
    generica:   { check: "partial", label: "R$ 800 – 1.500" },
    consultoria:{ check: "no",      label: "R$ 5.000 – 30.000+" },
  },
  {
    feature: "Treinamento especializado em gestão",
    masia:      { check: "yes",     label: "Treinada pelo Breno Masi" },
    generica:   { check: "partial", label: "Genérico" },
    consultoria:{ check: "partial", label: "Depende do perfil" },
  },
  {
    feature: "Disponibilidade 24/7",
    masia:      { check: "yes" },
    generica:   { check: "yes" },
    consultoria:{ check: "no",      label: "Horário comercial" },
  },
  {
    feature: "Análise do seu negócio específico",
    masia:      { check: "yes",     label: "9 especialistas dedicados" },
    generica:   { check: "partial", label: "Resposta genérica" },
    consultoria:{ check: "partial", label: "Custo muito alto" },
  },
  {
    feature: "Atualização constante",
    masia:      { check: "yes",     label: "Breno atualiza toda semana" },
    generica:   { check: "partial", label: "Ciclos lentos" },
    consultoria:{ check: "no",      label: "Metodologia estática" },
  },
  {
    feature: "Sem vínculo contratual",
    masia:      { check: "yes" },
    generica:   { check: "yes" },
    consultoria:{ check: "no",      label: "Contrato mínimo" },
  },
  {
    feature: "Integração com dados da empresa",
    masia:      { check: "yes",     label: "Análise semanal do seu negócio" },
    generica:   { check: "partial", label: "Limitado" },
    consultoria:{ check: "partial", label: "Pontual, não contínuo" },
  },
  {
    feature: "Reduz erros de decisão",
    masia:      { check: "yes",     label: "Especialistas por área" },
    generica:   { check: "partial", label: "Sem contexto estratégico" },
    consultoria:{ check: "partial", label: "Alta dependência humana" },
  },
  {
    feature: "Velocidade de resposta",
    masia:      { check: "yes",     label: "Imediata, 24/7" },
    generica:   { check: "yes",     label: "Rápida, sem contexto" },
    consultoria:{ check: "no",      label: "Dias ou semanas" },
  },
];

function Indicator({ val }: { val: Val }) {
  const icon =
    val.check === "yes"     ? { bg: "#dcfce7", color: "#16a34a", symbol: "✓" } :
    val.check === "no"      ? { bg: "#fee2e2", color: "#dc2626", symbol: "✕" } :
                              { bg: "#f1f5f9", color: "#94a3b8", symbol: "—" };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: icon.bg, color: icon.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800,
      }}>
        {icon.symbol}
      </div>
      {val.label && (
        <span style={{ fontSize: 11, color: "#64748b", fontWeight: 500, lineHeight: 1.3, maxWidth: 140 }}>
          {val.label}
        </span>
      )}
    </div>
  );
}

function MasiaIndicator({ val }: { val: Val }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: "#18bf62", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800,
      }}>
        ✓
      </div>
      {val.label && (
        <span style={{ fontSize: 11, color: "#166534", fontWeight: 600, lineHeight: 1.3, maxWidth: 140 }}>
          {val.label}
        </span>
      )}
    </div>
  );
}

export default function TabelaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]">
      <div className="network-bg" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-kicker">// por que a masIA</p>
          <h1 className="section-title mx-auto mt-4 max-w-3xl">
            Inteligência estratégica contínua. Sem os custos do modelo convencional.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Outras IAs foram construídas por engenheiros. A masIA foi construída por um empresário para amplificar o que empresários já fazem bem.
          </p>
        </div>

        {/* ── Mobile layout: one card per feature ── */}
        <div className="sm:hidden space-y-3 mb-8">
          {rows.map(row => (
            <div key={row.feature} className="rounded-[20px] border border-emerald-950/10 bg-white overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">{row.feature}</p>
              </div>
              <div className="grid grid-cols-3">
                {/* masIA */}
                <div style={{ background: "#f0fdf4", borderRight: "1px solid rgba(24,191,98,0.15)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.08em", color: "#16a34a", textTransform: "uppercase", margin: 0 }}>masIA</p>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#18bf62", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800 }}>✓</div>
                  {row.masia.label && <span style={{ fontSize: 10, color: "#166534", fontWeight: 600, lineHeight: 1.3, textAlign: "center" }}>{row.masia.label}</span>}
                </div>
                {/* Genérica */}
                <div style={{ borderRight: "1px solid rgba(0,0,0,0.06)", padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.06em", color: "#94a3b8", textTransform: "uppercase", margin: 0 }}>IA genérica</p>
                  {(() => { const ic = row.generica.check === "yes" ? { bg:"#dcfce7",c:"#16a34a",s:"✓"} : row.generica.check === "no" ? {bg:"#fee2e2",c:"#dc2626",s:"✕"} : {bg:"#f1f5f9",c:"#94a3b8",s:"—"}; return <div style={{ width: 24, height: 24, borderRadius:"50%", background:ic.bg, color:ic.c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800 }}>{ic.s}</div>; })()}
                  {row.generica.label && <span style={{ fontSize: 10, color: "#64748b", lineHeight: 1.3, textAlign: "center" }}>{row.generica.label}</span>}
                </div>
                {/* Consultoria */}
                <div style={{ padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.06em", color: "#94a3b8", textTransform: "uppercase", margin: 0 }}>Consultoria</p>
                  {(() => { const ic = row.consultoria.check === "yes" ? { bg:"#dcfce7",c:"#16a34a",s:"✓"} : row.consultoria.check === "no" ? {bg:"#fee2e2",c:"#dc2626",s:"✕"} : {bg:"#f1f5f9",c:"#94a3b8",s:"—"}; return <div style={{ width: 24, height: 24, borderRadius:"50%", background:ic.bg, color:ic.c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800 }}>{ic.s}</div>; })()}
                  {row.consultoria.label && <span style={{ fontSize: 10, color: "#64748b", lineHeight: 1.3, textAlign: "center" }}>{row.consultoria.label}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop table ── */}
        <div className="hidden sm:block overflow-hidden rounded-[24px] border border-emerald-950/10 bg-white shadow-sm">

          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "20px 24px" }} />

            {/* masIA */}
            <div style={{ padding: "20px 16px", background: "#f0fdf4", borderLeft: "1px solid rgba(0,0,0,0.06)", textAlign: "center", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ display: "inline-block", background: "#18bf62", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", marginBottom: 6 }}>
                RECOMENDADO
              </span>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#0a0a0a", margin: 0 }}>masIA</p>
            </div>

            {/* Genérica */}
            <div style={{ padding: "20px 16px", textAlign: "center", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#64748b", margin: "20px 0 0" }}>Ferramenta de IA genérica</p>
            </div>

            {/* Consultoria */}
            <div style={{ padding: "20px 16px", textAlign: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#64748b", margin: "20px 0 0" }}>Consultoria tradicional</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              {/* Feature label */}
              <div style={{ padding: "20px 24px", display: "flex", alignItems: "center" }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", margin: 0, lineHeight: 1.4 }}>
                  {row.feature}
                </p>
              </div>

              {/* masIA value */}
              <div style={{
                padding: "20px 16px", background: "#f0fdf4",
                borderLeft: "1px solid rgba(24,191,98,0.15)",
                borderRight: "1px solid rgba(24,191,98,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <MasiaIndicator val={row.masia} />
              </div>

              {/* Genérica value */}
              <div style={{ padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
                <Indicator val={row.generica} />
              </div>

              {/* Consultoria value */}
              <div style={{ padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Indicator val={row.consultoria} />
              </div>
            </div>
          ))}
        </div>{/* end desktop table */}

        {/* Closing copy */}
        <div className="mt-8 rounded-[20px] border border-emerald-950/10 bg-white px-8 py-7">
          <p className="text-base leading-7 text-slate-600">
            <span className="font-semibold text-slate-900">A maioria das ferramentas de IA te dá uma resposta.</span>{" "}
            A masIA te dá o raciocínio completo porque foi treinada com a lógica de quem já tomou as mesmas decisões que você está tomando agora.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://ia.masinegocios.com.br/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-8 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
          >
            Solicitar acesso à masIA
          </a>
        </div>

      </div>
    </main>
  );
}
