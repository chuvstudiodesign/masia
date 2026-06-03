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
  { label: "DETECTA", title: "Oportunidades e riscos", text: "O Sentinela monitora mercado, concorrência e sinais que podem afetar a empresa." },
  { label: "PRIORIZA", title: "Gaps de maior impacto", text: "O Raio-X mostra onde vendas, marketing, gestão, escala e financeiro precisam de atenção." },
  { label: "SUGERE",   title: "Próximas ações",        text: "Os agentes transformam diagnósticos em recomendações com motivo, prioridade e responsável." },
  { label: "ACOMPANHA",title: "Rotinas de execução",   text: "Automações revisam KPIs, briefings, scorecards, coaching e atualização estratégica." },
];

const steps = [
  { num: "1", title: "Diagnóstico", text: "A empresa passa pelo Raio-X MASI para mapear maturidade, gargalos e oportunidades." },
  { num: "2", title: "Priorize",    text: "A plataforma organiza Score MASI, SWOT, OKRs e frentes críticas de melhoria." },
  { num: "3", title: "Aprove",      text: "Agentes sugerem ações práticas. O gestor revisa, aprova, ajusta ou rejeita." },
  { num: "4", title: "Acompanhe",   text: "Ações aprovadas viram tarefas, rotinas e ciclos acompanháveis pela empresa." },
];

const faq = [
  { q: "A masIA é um curso de inteligência artificial?",       a: "Não. É uma plataforma de mentoria e aceleração empresarial com IA aplicada à gestão, diagnóstico, estratégia e execução." },
  { q: "A plataforma substitui o empresário ou a liderança?",  a: "Não. Ela analisa, organiza e recomenda. A decisão continua com os empresários e gestores." },
  { q: "As ações são executadas automaticamente?",             a: "As recomendações passam por aprovação. Depois disso, podem virar tarefas, rotinas ou acompanhamentos dentro da plataforma." },
];

// ── Shared card style ──────────────────────────────────────────────────────────
const card = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: "#fff",
  borderRadius: 28,
  overflow: "hidden",
  ...extra,
});

const btn = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: "#18bf62", color: "#fff", borderRadius: 999,
  padding: "13px 30px", fontSize: 13, fontWeight: 700,
  textDecoration: "none", letterSpacing: "0.04em",
  ...extra,
});

const kicker = (light = false): React.CSSProperties => ({
  fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
  color: light ? "rgba(255,255,255,0.65)" : "#18bf62",
  marginBottom: 16, display: "block",
});

const h2style = (light = false): React.CSSProperties => ({
  fontSize: "clamp(1.9rem, 2.6vw, 2.8rem)",
  fontWeight: 700, letterSpacing: "-0.03em",
  color: light ? "#fff" : "#0a0a0a",
  lineHeight: 1.08, margin: 0,
});

const bodyText = (light = false): React.CSSProperties => ({
  fontSize: 15, lineHeight: 1.72,
  color: light ? "rgba(255,255,255,0.78)" : "#555",
  marginTop: 16,
});

// ── Page ──────────────────────────────────────────────────────────────────────
export default function IA2Page() {
  return (
    <div className={dm.className} style={{ background: "linear-gradient(180deg,#D4D4D4 0%,#DFDFDF 60%,#EBEBEB 100%)", minHeight: "100vh" }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(212,212,212,0.82)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="https://masinegocios.com.br" style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a", textDecoration: "none", letterSpacing: "-0.02em" }}>
            masi negócios
          </a>
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }} className="hidden-mobile">
            {["Início","Workshop","Action","Aceleração","Founder","Advisor","Academy"].map(l => (
              <a key={l} href="https://masinegocios.com.br" style={{ fontSize: 13, color: "#444", textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          <a href="https://ia.masinegocios.com.br/" style={btn({ fontSize: 12, padding: "8px 18px" })}>
            XPMIA
          </a>
        </div>
      </header>

      {/* ── CARDS WRAPPER ────────────────────────────────────────────────── */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* ── HERO CARD ──────────────────────────────────────────────────── */}
        <div style={{ ...card(), position: "relative", minHeight: "88vh" }}>
          {/* background iframe */}
          <iframe src="/background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", pointerEvents: "none" }} aria-hidden tabIndex={-1} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%)" }} />

          {/* content */}
          <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "80px 48px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: "88vh" }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#18bf62", color: "#fff", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 700, marginBottom: 28 }}>masi</span>
              <h1 style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", lineHeight: 1.07, margin: "0 0 22px", maxWidth: 520 }}>
                Como usar IA para aumentar o faturamento, reduzir custos e multiplicar produtividade na sua empresa.
              </h1>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.72, maxWidth: 440, marginBottom: 36 }}>
                A masIA amplifica o que você já sabe fazer. Com 9 especialistas treinados pelo Breno Masi analisando sua empresa, gerando planos e identificando oportunidades que você não teria tempo de enxergar sozinho.
              </p>
              <a href="https://ia.masinegocios.com.br/" style={btn()}>SOLICITAR ACESSO</a>
            </div>

            {/* right — Spline placeholder */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: 520 }}>
              {/* TODO: replace inner content with Spline iframe when URL is provided */}
              <div style={{ width: 260, height: 520, borderRadius: 40, border: "8px solid rgba(0,0,0,0.09)", background: "#f0f0f0", overflow: "hidden", boxShadow: "0 48px 100px rgba(0,0,0,0.13)", position: "relative" }}>
                <Image src="/images/masi-platform/raio-x.png" alt="masIA app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", top: 70, left: 10, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.05)", minWidth: 155 }}>
                <p style={{ fontSize: 11, color: "#888", fontWeight: 500, marginBottom: 4 }}>Agentes Ativos</p>
                <p style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0a", marginBottom: 8 }}>16</p>
                <div style={{ display: "flex", gap: 3 }}>
                  {["#18bf62","#3b82f6","#f59e0b","#ec4899"].map(c => <span key={c} style={{ width: 20, height: 20, borderRadius: "50%", background: c, border: "2px solid #fff" }} />)}
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 110, right: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", borderRadius: 14, padding: "10px 14px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.05)", maxWidth: 180 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#0a0a0a", marginBottom: 2 }}>Insta Creator</p>
                <p style={{ fontSize: 11, color: "#666" }}>Gerando artes 100% Autônoma.</p>
              </div>
            </div>
          </div>

          {/* access bar */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid rgba(0,0,0,0.07)", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, padding: "13px 28px", zIndex: 10 }}>
            {[{ dot: true, text: "ACESSO POR CONVITE" }, { text: "47/50 ANÁLISES PREENCHIDAS ESTE MÊS" }, { text: "3 ANÁLISES DISPONÍVEIS", green: true }].map((item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: item.green ? "#18bf62" : "#888" }}>
                {item.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#18bf62" }} />}
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ── PILARES CARD ───────────────────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 52px" }}>
            <h2 style={{ ...h2style(), marginBottom: 14 }}>Transforme diagnóstico em execução com agentes de IA.</h2>
            <p style={{ fontSize: 15, color: "#777", margin: 0 }}>Prioridades claras, ações coordenadas e acompanhamento contínuo.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 48 }}>
            {pillars.map(p => (
              <div key={p.label} style={{ borderRadius: 18, border: "1px solid rgba(0,0,0,0.07)", padding: "24px 18px", background: "#fafafa" }}>
                <span style={{ ...kicker(), marginBottom: 12 }}>{p.label}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0a", margin: "0 0 8px" }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://ia.masinegocios.com.br/" style={btn()}>VER COMO FUNCIONAR</a>
          </div>
        </div>

        {/* ── AGENTES CARD ───────────────────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={kicker()}>TIME DE IA</span>
              <h2 style={{ ...h2style(), marginBottom: 0 }}>Agentes especializados trabalhando em paralelo pela sua empresa.</h2>
              <p style={bodyText()}>Para cada especialista da masIA, existe um profissional de mercado equivalente que você pagaria por mês. Veja a diferença.</p>
              <a href="https://ia.masinegocios.com.br/" style={btn({ marginTop: 32 })}>SOLICITAR ACESSO</a>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 520 }}>
              <iframe src="/agentes-2" style={{ width: "100%", height: "100%", border: "none" }} title="Rede de Agentes" />
            </div>
          </div>
        </div>

        {/* ── ESPECIALISTAS CARD ─────────────────────────────────────────── */}
        <div style={card()}>
          <div style={{ padding: "72px 56px 48px", textAlign: "center" }}>
            <span style={kicker()}>O TIME QUE VOCÊ SEMPRE QUIS TER</span>
            <h2 style={{ ...h2style(), marginBottom: 14 }}>9 especialistas. Um time completo. Disponíveis agora.</h2>
            <p style={{ fontSize: 15, color: "#666", maxWidth: 580, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Para cada especialista da masIA, existe um profissional de mercado equivalente que você pagaria por mês. Veja a diferença.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={btn()}>SOLICITAR ACESSO</a>
          </div>
          <iframe src="/especialistas" style={{ width: "100%", height: 860, border: "none", display: "block" }} title="Especialistas MASI" />
        </div>

        {/* ── INTEGRAÇÕES CARD ───────────────────────────────────────────── */}
        <div style={card({ background: "#f0fdf6" })}>
          <div style={{ padding: "72px 56px 48px", textAlign: "center" }}>
            <span style={kicker()}>O TIME QUE VOCÊ SEMPRE QUER TER</span>
            <h2 style={{ ...h2style(), marginBottom: 14 }}>A MasIA se conecta ao sistema que você já usa.</h2>
            <p style={{ fontSize: 15, color: "#555", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Integração com os principais ERPs, CRMs e plataformas de checkout do mercado. Com conexão nativa a todos os seus sistemas, a masIA lê os dados de onde eles já estão, sem planilha manual, sem precisar trocar de ferramenta.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={btn({ marginBottom: 0 })}>SOLICITAR ACESSO</a>
          </div>
          <iframe src="/erps" style={{ width: "100%", height: 660, border: "none", display: "block" }} title="ERPs CRMs Checkout" />
          <div style={{ padding: "36px 56px 52px", display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            {["SEM TROCAR DE PLATAFORMA","SEM PERDER CONTEXTO","SEM COMEÇAR DO ZERO CADA VEZ"].map(l => (
              <span key={l} style={{ borderRadius: 999, border: "1px solid rgba(0,0,0,0.13)", background: "#fff", padding: "10px 22px", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", color: "#444" }}>{l}</span>
            ))}
          </div>
          <div style={{ textAlign: "center", paddingBottom: 64 }}>
            <a href="https://ia.masinegocios.com.br/" style={btn()}>SOLICITAR ACESSO</a>
          </div>
        </div>

        {/* ── RAIO-X CARD ────────────────────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 520 }}>
              <iframe src="/grafico-3d" style={{ width: "100%", height: "100%", border: "none" }} title="Raio-X do Negócio" />
            </div>
            <div>
              <span style={kicker()}>RAIO-X DO NEGÓCIO</span>
              <h2 style={{ ...h2style(), marginBottom: 0 }}>Antes do plano de ação, a plataforma entende onde a empresa realmente está.</h2>
              <p style={bodyText()}>O Diagnóstico MASI analisa marketing, vendas, sistemas de gestão, inovação, escala e financeiro. O Score MASI mostra a maturidade da empresa e ajuda a priorizar o que limita o crescimento.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28 }}>
                {["SCORE MASI","PILARES DE MATURIDADE","ÁREAS CRÍTICAS","BASE PARA OKRS"].map(l => (
                  <div key={l} style={{ borderRadius: 10, border: "1px solid rgba(0,0,0,0.09)", background: "#fafafa", padding: "12px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", color: "#444" }}>{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── SENTINELA CARD ─────────────────────────────────────────────── */}
        <div style={card({ background: "#18bf62", padding: "72px 56px" })}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={kicker(true)}>SENTINELA</span>
              <h2 style={{ ...h2style(true), marginBottom: 0 }}>Inteligência de mercado para não decidir no escuro.</h2>
              <p style={bodyText(true)}>O Sentinela monitora sinais relevantes, concorrência, tendências e oportunidades. Em vez de notícias soltas, você recebe leituras contextualizadas para o seu negócio.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 28 }}>
                {["ATIVOS","ALERTAS","OPORTUNIDADES","NEUTROS"].map(l => (
                  <div key={l} style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.15)", padding: "12px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", color: "#fff" }}>{l}</div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.18)" }}>
              <Image src="/images/masi-platform/sentinela.png" alt="Sentinela" width={680} height={440} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* ── DA ANÁLISE PARA A AÇÃO CARD ────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={kicker()}>DA ANÁLISE PARA A AÇÃO</span>
              <h2 style={{ ...h2style(), marginBottom: 0 }}>A IA sugere. Você aprova. A empresa executa com clareza.</h2>
              <p style={bodyText()}>As recomendações vêm com prioridade, origem, pilar MASI, responsável sugerido e motivo. O gestor mantém o controle antes de transformar uma sugestão em tarefa.</p>
              <a href="https://ia.masinegocios.com.br/" style={btn({ marginTop: 32 })}>SOLICITAR ACESSO</a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 280, borderRadius: 36, overflow: "hidden", boxShadow: "0 40px 90px rgba(0,0,0,0.13)", border: "8px solid rgba(0,0,0,0.07)" }}>
                <Image src="/images/masi-platform/sugestoes.png" alt="Ações sugeridas" width={280} height={520} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── COMO FUNCIONA CARD ─────────────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 52px" }}>
            <span style={kicker()}>COMO FUNCIONA</span>
            <h2 style={{ ...h2style(), marginBottom: 12 }}>Da análise à execução, sem perder o fio da estratégia.</h2>
            <p style={{ fontSize: 15, color: "#777", margin: 0 }}>O sistema cria uma cadência de gestão: diagnostica, prioriza, recomenda e acompanha os próximos movimentos.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 48 }}>
            {steps.map(s => (
              <div key={s.title} style={{ borderRadius: 18, border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa", padding: "24px 18px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#18bf62", marginBottom: 12 }}>{s.num}</p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0a", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://ia.masinegocios.com.br/" style={btn()}>SOLICITAR ACESSO</a>
          </div>
        </div>

        {/* ── FAQ CARD ───────────────────────────────────────────────────── */}
        <div style={card({ padding: "72px 56px" })}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }}>
            <div>
              <span style={kicker()}>FAQ</span>
              <h2 style={{ ...h2style(), fontSize: "clamp(1.8rem,2.4vw,2.6rem)" }}>3 Perguntas frequentes sobre a MasIA</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faq.map((item, i) => (
                <details key={i} style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,0.08)", background: "#fafafa", overflow: "hidden" }}>
                  <summary style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, color: "#0a0a0a", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    {item.q}
                    <span style={{ fontSize: 20, color: "#18bf62", flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ padding: "0 20px 16px", fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <div style={{ ...card({ background: "#e8e8e8", borderRadius: 28 }), padding: "56px 56px 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#0a0a0a", marginBottom: 10 }}>masi negócios</p>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>Acreditamos que o futuro do Brasil está na força do empreendedorismo.</p>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#999", marginBottom: 14 }}>HOME</p>
              {["Founder","Workshop","Action","Aceleração","Presencial","Advisor","Academy"].map(l => (
                <a key={l} href="https://masinegocios.com.br" style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 7 }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#999", marginBottom: 14 }}>REDES SOCIAIS</p>
              {[["Instagram","https://www.instagram.com/masinegocios"],["YouTube","https://www.youtube.com/masinegocios"]].map(([l,h]) => (
                <a key={l} href={h} style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 7 }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#999", marginBottom: 14 }}>MAIS INFORMAÇÕES</p>
              {["Central de Ajuda","Política de Privacidade","Termos de Serviço","Contato"].map(l => (
                <a key={l} href="https://masinegocios.com.br" style={{ display: "block", fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 7 }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.09)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>© 2025 Masi Mais | Criado por <a href="https://www.chuv.studio" style={{ color: "#18bf62", textDecoration: "none" }}>Chuv Studio</a></p>
          </div>
        </div>

      </div>{/* end cards wrapper */}
    </div>
  );
}
