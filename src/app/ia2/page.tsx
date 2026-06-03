import type { Metadata } from "next";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Como usar IA para aumentar o faturamento | masIA",
  description:
    "A masIA amplifica o que você já sabe fazer. Com 9 especialistas treinados pelo Breno Masi analisando sua empresa, gerando planos e identificando oportunidades.",
};

const pillars = [
  {
    label: "DETECTA",
    title: "Oportunidades e riscos",
    text: "O Sentinela monitora mercado, concorrência e sinais que podem afetar a empresa.",
  },
  {
    label: "PRIORIZA",
    title: "Gaps de maior impacto",
    text: "O Raio-X mostra onde vendas, marketing, gestão, escala e financeiro precisam de atenção.",
  },
  {
    label: "SUGERE",
    title: "Próximas ações",
    text: "Os agentes transformam diagnósticos em recomendações com motivo, prioridade e responsável.",
  },
  {
    label: "ACOMPANHA",
    title: "Rotinas de execução",
    text: "Automações revisam KPIs, briefings, scorecards, coaching e atualização estratégica.",
  },
];

const steps = [
  { num: "1", title: "Diagnóstico", text: "A empresa passa pelo Raio-X MASI para mapear maturidade, gargalos e oportunidades." },
  { num: "2", title: "Priorize", text: "A plataforma organiza Score MASI, SWOT, OKRs e frentes críticas de melhoria." },
  { num: "3", title: "Aprove", text: "Agentes sugerem ações práticas. O gestor revisa, aprova, ajusta ou rejeita." },
  { num: "4", title: "Acompanhe", text: "Ações aprovadas viram tarefas, rotinas e ciclos acompanháveis pela empresa." },
];

const faq = [
  { q: "A masIA é um curso de inteligência artificial?", a: "Não. É uma plataforma de mentoria e aceleração empresarial com IA aplicada à gestão, diagnóstico, estratégia e execução." },
  { q: "A plataforma substitui o empresário ou a liderança?", a: "Não. Ela analisa, organiza e recomenda. A decisão continua com os empresários e gestores." },
  { q: "As ações são executadas automaticamente?", a: "As recomendações passam por aprovação. Depois disso, podem virar tarefas, rotinas ou acompanhamentos dentro da plataforma." },
];

export default function IA2Page() {
  return (
    <div className={dm.className} style={{ background: "#f5f5f5", color: "#111" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(245,245,245,0.88)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="https://masinegocios.com.br" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: "#111", letterSpacing: "-0.02em" }}>masi negócios</span>
          </a>
          {/* Links */}
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Início", "Workshop", "Action", "Aceleração", "Founder", "Advisor", "Academy"].map(l => (
              <a key={l} href="https://masinegocios.com.br" style={{ fontSize: 13, color: "#444", textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          {/* CTA */}
          <a href="https://ia.masinegocios.com.br/" style={{
            background: "#18bf62", color: "#fff",
            borderRadius: 999, padding: "8px 20px",
            fontSize: 13, fontWeight: 700, textDecoration: "none",
            letterSpacing: "0.02em",
          }}>
            XPMIA
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#f5f5f5" }}>
        {/* Background embed */}
        <iframe
          src="/background"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
          aria-hidden="true"
          tabIndex={-1}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(245,245,245,0) 60%, rgba(245,245,245,1) 100%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 28px", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 48 }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#18bf62", color: "#fff", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 700, marginBottom: 24 }}>
              masi
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0a0a0a", maxWidth: 540, margin: "0 0 24px" }}>
              Como usar IA para aumentar o faturamento, reduzir custos e multiplicar produtividade na sua empresa.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#555", maxWidth: 460, marginBottom: 36 }}>
              A masIA amplifica o que você já sabe fazer. Com 9 especialistas treinados pelo Breno Masi analisando sua empresa, gerando planos e identificando oportunidades que você não teria tempo de enxergar sozinho.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#18bf62", color: "#fff", borderRadius: 999,
              padding: "14px 32px", fontSize: 14, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.04em",
            }}>
              SOLICITAR ACESSO
            </a>
          </div>

          {/* Right — Spline placeholder + floating cards */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: 580 }}>
            {/* TODO: substituir pelo iframe do Spline quando URL disponível */}
            <div style={{
              width: 280, height: 560,
              borderRadius: 44, border: "8px solid rgba(0,0,0,0.1)",
              background: "linear-gradient(160deg, #e8f5ee 0%, #c8e6d4 100%)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
              overflow: "hidden",
              position: "relative",
            }}>
              <Image src="/images/masi-platform/raio-x.png" alt="masIA app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
            {/* Card: 16 Agentes Ativos */}
            <div style={{
              position: "absolute", top: 80, left: -20,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(16px)",
              borderRadius: 16, padding: "12px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
              minWidth: 160,
            }}>
              <p style={{ fontSize: 11, color: "#888", fontWeight: 500, marginBottom: 4 }}>Agentes Ativos</p>
              <p style={{ fontSize: 26, fontWeight: 700, color: "#0a0a0a" }}>16</p>
              <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                {["#18bf62","#3b82f6","#f59e0b","#ec4899"].map(c => (
                  <span key={c} style={{ width: 22, height: 22, borderRadius: "50%", background: c, border: "2px solid #fff" }} />
                ))}
              </div>
            </div>
            {/* Card: Insta Creator */}
            <div style={{
              position: "absolute", bottom: 100, right: -30,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(16px)",
              borderRadius: 16, padding: "12px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
              maxWidth: 200,
            }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#0a0a0a", marginBottom: 2 }}>Insta Creator</p>
              <p style={{ fontSize: 11, color: "#666" }}>Gerando artes 100% Autônoma.</p>
            </div>
          </div>
        </div>

        {/* Bottom access bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          borderTop: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(245,245,245,0.9)",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 40,
          padding: "14px 28px", zIndex: 10,
        }}>
          {[
            { dot: true, text: "ACESSO POR CONVITE" },
            { text: "47/50 ANÁLISES PREENCHIDAS ESTE MÊS" },
            { text: "3 ANÁLISES DISPONÍVEIS", green: true },
          ].map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: item.green ? "#18bf62" : "#666" }}>
              {item.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#18bf62" }} />}
              {item.text}
            </span>
          ))}
        </div>
      </section>

      {/* ── PILARES ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "100px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", maxWidth: 700, margin: "0 auto 12px" }}>
            Transforme diagnóstico em execução com agentes de IA.
          </h2>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 56 }}>
            Prioridades claras, ações coordenadas e acompanhamento contínuo.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "left", marginBottom: 48 }}>
            {pillars.map(p => (
              <div key={p.label} style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", padding: "24px 20px", background: "#fafafa" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 12 }}>{p.label}</p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0a", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <a href="https://ia.masinegocios.com.br/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#18bf62", color: "#fff", borderRadius: 999,
            padding: "14px 36px", fontSize: 13, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>
            VER COMO FUNCIONAR
          </a>
        </div>
      </section>

      {/* ── AGENTES NETWORK ─────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>TIME DE IA</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 20, lineHeight: 1.1 }}>
              Agentes especializados trabalhando em paralelo pela sua empresa.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 36 }}>
              Para cada especialista da masIA, existe um profissional de mercado equivalente que você pagaria por mês. Veja a diferença.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#18bf62", color: "#fff", borderRadius: 999,
              padding: "14px 32px", fontSize: 13, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
            }}>
              SOLICITAR ACESSO
            </a>
          </div>
          <div style={{ borderRadius: 24, overflow: "hidden", height: 560 }}>
            <iframe src="/agentes-2" style={{ width: "100%", height: "100%", border: "none" }} title="Rede de Agentes" />
          </div>
        </div>
      </section>

      {/* ── ESPECIALISTAS ───────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 48px", padding: "0 28px", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>O TIME QUE VOCÊ SEMPRE QUIS TER</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 16 }}>
            9 especialistas. Um time completo. Disponíveis agora.
          </h2>
          <p style={{ fontSize: 15, color: "#666", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Para cada especialista da masIA, existe um profissional de mercado equivalente que você pagaria por mês. Veja a diferença.
          </p>
          <a href="https://ia.masinegocios.com.br/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#18bf62", color: "#fff", borderRadius: 999,
            padding: "14px 32px", fontSize: 13, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>
            SOLICITAR ACESSO
          </a>
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <iframe src="/especialistas" style={{ width: "100%", height: 860, border: "none", display: "block" }} title="Especialistas MASI" />
        </div>
      </section>

      {/* ── ERPs / INTEGRAÇÕES ──────────────────────────────────────────── */}
      <section style={{ background: "#f0fdf4", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 48px", padding: "0 28px", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>O TIME QUE VOCÊ SEMPRE QUER TER</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 16 }}>
            A MasIA se conecta ao sistema que você já usa.
          </h2>
          <p style={{ fontSize: 15, color: "#555", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Integração com os principais ERPs, CRMs e plataformas de checkout do mercado. Com conexão nativa a todos os seus sistemas, a masIA lê os dados de onde eles já estão, sem planilha manual, sem precisar trocar de ferramenta.
          </p>
          <a href="https://ia.masinegocios.com.br/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#18bf62", color: "#fff", borderRadius: 999,
            padding: "14px 32px", fontSize: 13, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em", marginBottom: 48,
          }}>
            SOLICITAR ACESSO
          </a>
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <iframe src="/erps" style={{ width: "100%", height: 680, border: "none", display: "block" }} title="ERPs CRMs Checkout" />
        </div>
        <div style={{ maxWidth: 1280, margin: "40px auto 0", padding: "0 28px", display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {["SEM TROCAR DE PLATAFORMA", "SEM PERDER CONTEXTO", "SEM COMEÇAR DO ZERO CADA VEZ"].map(l => (
            <span key={l} style={{
              borderRadius: 999, border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff", padding: "10px 22px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", color: "#444",
            }}>{l}</span>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="https://ia.masinegocios.com.br/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#18bf62", color: "#fff", borderRadius: 999,
            padding: "14px 32px", fontSize: 13, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>
            SOLICITAR ACESSO
          </a>
        </div>
      </section>

      {/* ── RAIO-X ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f5", padding: "80px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ borderRadius: 24, overflow: "hidden", height: 560 }}>
            <iframe src="/grafico-3d" style={{ width: "100%", height: "100%", border: "none" }} title="Raio-X do Negócio" />
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>RAIO-X DO NEGÓCIO</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.7rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 20, lineHeight: 1.1 }}>
              Antes do plano de ação, a plataforma entende onde a empresa realmente está.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
              O Diagnóstico MASI analisa marketing, vendas, sistemas de gestão, inovação, escala e financeiro. O Score MASI mostra a maturidade da empresa e ajuda a priorizar o que limita o crescimento.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["SCORE MASI", "PILARES DE MATURIDADE", "ÁREAS CRÍTICAS", "BASE PARA OKRS"].map(l => (
                <div key={l} style={{
                  borderRadius: 10, border: "1px solid rgba(0,0,0,0.1)",
                  background: "#fff", padding: "12px 16px",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#444",
                }}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SENTINELA ───────────────────────────────────────────────────── */}
      <section style={{ background: "#18bf62", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>SENTINELA</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.7rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.1 }}>
              Inteligência de mercado para não decidir no escuro.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32 }}>
              O Sentinela monitora sinais relevantes, concorrência, tendências e oportunidades. Em vez de notícias soltas, você recebe leituras contextualizadas para o seu negócio.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["ATIVOS", "ALERTAS", "OPORTUNIDADES", "NEUTROS"].map(l => (
                <div key={l} style={{
                  borderRadius: 10, border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.15)", padding: "12px 16px",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#fff",
                }}>{l}</div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.2)" }}>
            <Image
              src="/images/masi-platform/sentinela.png"
              alt="Sentinela — Inteligência de mercado"
              width={700}
              height={460}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── DA ANÁLISE PARA A AÇÃO ──────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>DA ANÁLISE PARA A AÇÃO</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.7rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 20, lineHeight: 1.1 }}>
              A IA sugere. Você aprova. A empresa executa com clareza.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 36 }}>
              As recomendações vêm com prioridade, origem, pilar MASI, responsável sugerido e motivo. O gestor mantém o controle antes de transformar uma sugestão em tarefa.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#18bf62", color: "#fff", borderRadius: 999,
              padding: "14px 32px", fontSize: 13, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
            }}>
              SOLICITAR ACESSO
            </a>
          </div>
          <div style={{
            borderRadius: 32, overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
            border: "8px solid rgba(0,0,0,0.08)",
            background: "#f0f0f0",
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            maxWidth: 300, margin: "0 auto",
          }}>
            <Image
              src="/images/masi-platform/sugestoes.png"
              alt="Ações sugeridas pelos agentes"
              width={300}
              height={520}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ───────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f5", padding: "100px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>COMO FUNCIONA</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 12 }}>
            Da análise à execução, sem perder o fio da estratégia.
          </h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 56 }}>
            O sistema cria uma cadência de gestão: diagnostica, prioriza, recomenda e acompanha os próximos movimentos.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "left", marginBottom: 48 }}>
            {steps.map(s => (
              <div key={s.title} style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: "24px 20px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#18bf62", marginBottom: 12 }}>{s.num}</p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0a0a0a", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{s.text}</p>
              </div>
            ))}
          </div>
          <a href="https://ia.masinegocios.com.br/" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "#18bf62", color: "#fff", borderRadius: 999,
            padding: "14px 36px", fontSize: 13, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>
            SOLICITAR ACESSO
          </a>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f5", padding: "100px 28px", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.4vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", lineHeight: 1.1 }}>
              3 Perguntas frequentes sobre a MasIA
            </h2>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {faq.map((item, i) => (
              <details key={i} style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,0.09)", background: "#fff", overflow: "hidden" }}>
                <summary style={{ padding: "18px 20px", fontSize: 14, fontWeight: 600, color: "#0a0a0a", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}
                  <span style={{ fontSize: 18, color: "#18bf62", flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: "0 20px 18px", fontSize: 14, color: "#666", lineHeight: 1.7 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: "#f0f0f0", borderTop: "1px solid rgba(0,0,0,0.08)", padding: "64px 28px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#0a0a0a", marginBottom: 12 }}>masi negócios</p>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>
                Acreditamos que o futuro do Brasil está na força do empreendedorismo.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#888", marginBottom: 16 }}>HOME</p>
              {["Founder", "Workshop", "Action", "Aceleração", "Presencial", "Advisor", "Academy"].map(l => (
                <a key={l} href="https://masinegocios.com.br" style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 8 }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#888", marginBottom: 16 }}>REDES SOCIAIS</p>
              {[["Instagram", "https://www.instagram.com/masinegocios"], ["YouTube", "https://www.youtube.com/masinegocios"]].map(([l, href]) => (
                <a key={l} href={href} style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 8 }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#888", marginBottom: 16 }}>MAIS INFORMAÇÕES</p>
              {["Central de Ajuda", "Política de Privacidade", "Termos de Serviço", "Contato"].map(l => (
                <a key={l} href="https://masinegocios.com.br" style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 8 }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#999" }}>© 2025 Masi Mais | Criado por <a href="https://www.chuv.studio" style={{ color: "#18bf62", textDecoration: "none" }}>Chuv Studio</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
