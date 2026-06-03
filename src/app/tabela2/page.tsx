import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comparativo masIA | Tabela",
  description: "masIA vs. Ferramenta de IA genérica vs. Consultoria tradicional.",
};

type Val = { check: "yes" | "no" | "partial"; label?: string };

const rows: { feature: string; masia: Val; generica: Val; consultoria: Val }[] = [
  { feature: "Investimento mensal",                    masia: { check:"yes", label:"R$ 3.000/mês" },                   generica: { check:"partial", label:"R$ 800 – 1.500" },         consultoria: { check:"no",      label:"R$ 5.000 – 30.000+" } },
  { feature: "Treinamento especializado em gestão",    masia: { check:"yes", label:"Treinada pelo Breno Masi" },        generica: { check:"partial", label:"Genérico" },               consultoria: { check:"partial", label:"Depende do perfil" } },
  { feature: "Disponibilidade 24/7",                   masia: { check:"yes" },                                          generica: { check:"yes" },                                     consultoria: { check:"no",      label:"Horário comercial" } },
  { feature: "Análise do seu negócio específico",      masia: { check:"yes", label:"9 especialistas dedicados" },       generica: { check:"partial", label:"Resposta genérica" },      consultoria: { check:"partial", label:"Custo muito alto" } },
  { feature: "Atualização constante",                  masia: { check:"yes", label:"Breno atualiza toda semana" },      generica: { check:"partial", label:"Ciclos lentos" },           consultoria: { check:"no",      label:"Metodologia estática" } },
  { feature: "Sem vínculo contratual",                 masia: { check:"yes" },                                          generica: { check:"yes" },                                     consultoria: { check:"no",      label:"Contrato mínimo" } },
  { feature: "Integração com dados da empresa",        masia: { check:"yes", label:"Análise semanal do seu negócio" },  generica: { check:"partial", label:"Limitado" },               consultoria: { check:"partial", label:"Pontual, não contínuo" } },
  { feature: "Reduz erros de decisão",                 masia: { check:"yes", label:"Especialistas por área" },          generica: { check:"partial", label:"Sem contexto estratégico" },consultoria: { check:"partial", label:"Alta dependência humana" } },
  { feature: "Velocidade de resposta",                 masia: { check:"yes", label:"Imediata, 24/7" },                  generica: { check:"yes",     label:"Rápida, sem contexto" },   consultoria: { check:"no",      label:"Dias ou semanas" } },
];

function icProps(check: Val["check"]) {
  return check === "yes"     ? { bg: "#dcfce7", c: "#16a34a", s: "✓" }
       : check === "no"      ? { bg: "#fee2e2", c: "#dc2626", s: "✕" }
                             : { bg: "#f1f5f9", c: "#94a3b8", s: "—" };
}

function Indicator({ val }: { val: Val }) {
  const ic = icProps(val.check);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, textAlign:"center" }}>
      <div style={{ width:28, height:28, borderRadius:"50%", background:ic.bg, color:ic.c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800 }}>{ic.s}</div>
      {val.label && <span style={{ fontSize:11, color:"#64748b", fontWeight:500, lineHeight:1.3, maxWidth:140 }}>{val.label}</span>}
    </div>
  );
}

function MasiaIndicator({ val }: { val: Val }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, textAlign:"center" }}>
      <div style={{ width:28, height:28, borderRadius:"50%", background:"#18bf62", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800 }}>✓</div>
      {val.label && <span style={{ fontSize:11, color:"#166534", fontWeight:600, lineHeight:1.3, maxWidth:140 }}>{val.label}</span>}
    </div>
  );
}

export default function Tabela2Page() {
  return (
    <main className="relative min-h-screen bg-[#ECECEC] text-[#111827]">

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">

        {/* ── Mobile: card por feature ── */}
        <div className="sm:hidden space-y-3 mb-8">
          {rows.map(row => (
            <div key={row.feature} className="rounded-[20px] border border-emerald-950/10 bg-white overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">{row.feature}</p>
              </div>
              <div className="grid grid-cols-3">
                {[
                  { label: "masIA",      val: row.masia,      masia: true },
                  { label: "IA genérica", val: row.generica,  masia: false },
                  { label: "Consultoria", val: row.consultoria,masia: false },
                ].map((col, ci) => {
                  const ic = icProps(col.val.check);
                  return (
                    <div key={ci} style={{ background: col.masia ? "#f0fdf4" : undefined, borderRight: ci < 2 ? `1px solid ${col.masia ? "rgba(24,191,98,0.15)" : "rgba(0,0,0,0.06)"}` : undefined, padding:"14px 8px", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                      <p style={{ fontSize:9, fontWeight:800, letterSpacing:"0.08em", color: col.masia ? "#16a34a" : "#94a3b8", textTransform:"uppercase", margin:0 }}>{col.label}</p>
                      <div style={{ width:24, height:24, borderRadius:"50%", background: col.masia ? "#18bf62" : ic.bg, color: col.masia ? "#fff" : ic.c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800 }}>{col.masia ? "✓" : ic.s}</div>
                      {col.val.label && <span style={{ fontSize:10, color: col.masia ? "#166534" : "#64748b", fontWeight: col.masia ? 600 : 400, lineHeight:1.3, textAlign:"center" }}>{col.val.label}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop table ── */}
        <div className="hidden sm:block overflow-hidden rounded-[24px] border border-emerald-950/10 bg-white shadow-sm">
          {/* Header */}
          <div style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", borderBottom:"1px solid rgba(0,0,0,0.07)" }}>
            <div style={{ padding:"20px 24px" }} />
            <div style={{ padding:"20px 16px", background:"#f0fdf4", borderLeft:"1px solid rgba(0,0,0,0.06)", textAlign:"center", borderRight:"1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ display:"inline-block", background:"#18bf62", color:"#fff", borderRadius:999, fontSize:10, fontWeight:700, letterSpacing:"0.1em", padding:"3px 10px", marginBottom:6 }}>RECOMENDADO</span>
              <Image src="/images/logotipo.png" alt="masIA" width={80} height={28} style={{ margin:"0 auto", objectFit:"contain" }} />
            </div>
            <div style={{ padding:"20px 16px", textAlign:"center", borderRight:"1px solid rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize:13, fontWeight:700, color:"#64748b", margin:"20px 0 0" }}>Ferramenta de IA genérica</p>
            </div>
            <div style={{ padding:"20px 16px", textAlign:"center" }}>
              <p style={{ fontSize:13, fontWeight:700, color:"#64748b", margin:"20px 0 0" }}>Consultoria tradicional</p>
            </div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.feature} style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", borderBottom: i < rows.length-1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
              <div style={{ padding:"20px 24px", display:"flex", alignItems:"center" }}>
                <p style={{ fontSize:14, fontWeight:600, color:"#1e293b", margin:0, lineHeight:1.4 }}>{row.feature}</p>
              </div>
              <div style={{ padding:"20px 16px", background:"#f0fdf4", borderLeft:"1px solid rgba(24,191,98,0.15)", borderRight:"1px solid rgba(24,191,98,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <MasiaIndicator val={row.masia} />
              </div>
              <div style={{ padding:"20px 16px", display:"flex", alignItems:"center", justifyContent:"center", borderRight:"1px solid rgba(0,0,0,0.06)" }}>
                <Indicator val={row.generica} />
              </div>
              <div style={{ padding:"20px 16px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Indicator val={row.consultoria} />
              </div>
            </div>
          ))}
        </div>

        {/* Closing copy */}
        <div className="mt-8 rounded-[20px] border border-emerald-950/10 bg-white px-8 py-7">
          <p className="text-base leading-7 text-slate-600">
            <span className="font-semibold text-slate-900">A maioria das ferramentas de IA te dá uma resposta.</span>{" "}
            A masIA te dá o raciocínio completo porque foi treinada com a lógica de quem já tomou as mesmas decisões que você está tomando agora.
          </p>
        </div>

      </div>
    </main>
  );
}
