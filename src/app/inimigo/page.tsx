import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "O Inimigo Comum | masIA",
  description:
    "Não é falta de esforço. É falta de informação na hora certa. A masIA resolve o gargalo da análise estratégica.",
};

const problems = [
  {
    icon: "◈",
    text: "Erros que poderiam ser evitados com mais dados e mais perspectivas",
  },
  {
    icon: "◉",
    text: "Decisões que ficam para depois porque a análise demora e custa caro",
  },
  {
    icon: "✦",
    text: "Oportunidades que escapam porque ninguém estava olhando para elas",
  },
];

// ── Shared styles ──────────────────────────────────────────────────────────────
const card = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: "#fff", borderRadius: 28, overflow: "hidden", ...extra,
});

const btn = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: "#18bf62", color: "#fff", borderRadius: 999,
  padding: "13px 30px", fontSize: 13, fontWeight: 700,
  textDecoration: "none", letterSpacing: "0.04em", ...extra,
});

export default function InimigoPage() {
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
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {["Início","Workshop","Action","Aceleração","Founder","Advisor","Academy"].map(l => (
              <a key={l} href="https://masinegocios.com.br" style={{ fontSize: 13, color: "#444", textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          <a href="https://ia.masinegocios.com.br/" style={btn({ fontSize: 12, padding: "8px 18px" })}>
            XPMIA
          </a>
        </div>
      </header>

      {/* ── CARDS ────────────────────────────────────────────────────────── */}
      <div className="inimigo-cards" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* ── INTRO CARD ─────────────────────────────────────────────────── */}
        <div style={card({ padding: "80px 56px 72px" })}>
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#18bf62", display: "block", marginBottom: 20 }}>
              // o problema não é você
            </span>
            <h1 style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0a0a0a", lineHeight: 1.06, margin: 0 }}>
              Não é falta de esforço.<br />É falta de informação na hora certa.
            </h1>
          </div>
        </div>

        {/* ── COPY CARD ──────────────────────────────────────────────────── */}
        <div style={card({ padding: "64px 56px" })}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 17, lineHeight: 1.78, color: "#2a2a2a", marginBottom: 24 }}>
              Você trabalha muito. Conhece o seu mercado. Tem experiência. Mas todo empresário que já chegou longe sabe: chegou um momento em que a intuição não era mais suficiente. Em que as decisões ficaram complexas demais para tomar sozinho. Em que você precisava de alguém que pensasse com você, não uma vez por trimestre, mas toda semana.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.78, color: "#2a2a2a", margin: 0 }}>
              O problema não são as pessoas da sua equipe. O problema é que <strong>análise estratégica de alto nível é cara, lenta e difícil de manter com consistência.</strong>
            </p>
          </div>
        </div>

        {/* ── PROBLEMS + SOLUTION CARD ───────────────────────────────────── */}
        <div style={card({ background: "#0f1a10", padding: "72px 56px" })}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            {/* Problems */}
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 14, textTransform: "uppercase" }}>
              Os três gargalos
            </span>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, marginBottom: 40 }}>
              O que está travando a sua empresa agora.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
              {problems.map((p, i) => (
                <div key={i} style={{
                  display: "flex", flexDirection: "column", gap: 16,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 20, padding: "28px 28px",
                }}>
                  <span style={{ fontSize: 24, color: "#18bf62" }}>{p.icon}</span>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.88)", lineHeight: 1.5, margin: 0 }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 64 }} />

            {/* Solution */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 16, textTransform: "uppercase" }}>
                  A solução
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08, marginBottom: 32 }}>
                  A masIA resolve esse gargalo.
                </h2>
                <a href="https://ia.masinegocios.com.br/" style={btn()}>
                  SOLICITAR ACESSO
                </a>
              </div>
              <div>
                <p style={{ fontSize: 16, lineHeight: 1.78, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>
                  9 especialistas que trabalham com você toda semana, analisando, identificando padrões, considerando mais fatores e devolvendo planos que você pode executar de imediato. Para que você seja mais rápido, mais preciso e cometa menos erros do que seria possível sozinho.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {[["Mais rápido","nas decisões"],["Mais preciso","nas análises"],["Menos erros","nos movimentos"]].map(([v, l]) => (
                    <div key={v} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", padding: "16px 14px", textAlign: "center" }}>
                      <p style={{ fontSize: 13, fontWeight: 800, color: "#18bf62", marginBottom: 4 }}>{v}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── CTA CARD ───────────────────────────────────────────────────── */}
        <div style={card({ background: "#0f1a10", padding: "80px 56px" })}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 16 }}>
              ACESSO
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08, marginBottom: 20 }}>
              Sua empresa precisa de mais do que ideias. Precisa de direção, método e execução.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
              Solicite acesso à masIA e veja como transformar diagnóstico, estratégia e acompanhamento em uma rotina de gestão mais clara, inteligente e acionável.
            </p>
            <a href="https://ia.masinegocios.com.br/" style={btn({ padding: "15px 40px", fontSize: 14 })}>
              SOLICITAR ACESSO À MASIA
            </a>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <div style={{ ...card({ background: "#e8e8e8", borderRadius: 28 }), padding: "48px 56px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, marginBottom: 36 }}>
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
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>© 2025 Masi Mais | Criado por <a href="https://www.chuv.studio" style={{ color: "#18bf62", textDecoration: "none" }}>Chuv Studio</a></p>
          </div>
        </div>

      </div>
    </div>
  );
}
