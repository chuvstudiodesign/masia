import type { CSSProperties } from "react";

const pillars = [
  {
    accent: "#ef4444",
    key: "M",
    score: 45,
    subtitle: "0 áreas críticas · 0 em dia",
    title: "Marketing e Retenção",
  },
  {
    accent: "#eab308",
    key: "A",
    score: 35,
    subtitle: "2 áreas críticas · 0 em dia",
    title: "Aceleração de Vendas",
  },
  {
    accent: "#22c55e",
    key: "S",
    score: 50,
    subtitle: "0 áreas críticas · 0 em dia",
    title: "Sistemas de Gestão e Pessoas",
  },
  {
    accent: "#8b5cf6",
    key: "I",
    score: 60,
    subtitle: "0 áreas críticas · 4 em dia",
    title: "Inovação Contínua",
  },
  {
    accent: "#3b82f6",
    key: "E",
    score: 55,
    subtitle: "0 áreas críticas · 1 em dia",
    title: "Fundamentos da Escala",
  },
  {
    accent: "#f97316",
    key: "F",
    score: 65,
    subtitle: "0 áreas críticas · 5 em dia",
    title: "Financeiro e Sustentabilidade",
  },
];

function RadarChart() {
  const axis = [
    { label: "M", score: 45, x: 150, y: 52, color: "#ef4444" },
    { label: "A", score: 35, x: 230, y: 96, color: "#eab308" },
    { label: "S", score: 50, x: 230, y: 184, color: "#22c55e" },
    { label: "I", score: 60, x: 150, y: 230, color: "#8b5cf6" },
    { label: "E", score: 55, x: 70, y: 184, color: "#3b82f6" },
    { label: "F", score: 65, x: 70, y: 96, color: "#f97316" },
  ];

  return (
    <div className="radar-card">
      <svg className="radar-svg" viewBox="0 0 300 300" role="img" aria-label="Gráfico radar dos pilares MASI">
        <g className="radar-grid">
          {[34, 58, 82].map((radius) => (
            <polygon
              fill="none"
              key={radius}
              points={[
                `150,${150 - radius}`,
                `${150 + radius * 0.866},${150 - radius * 0.5}`,
                `${150 + radius * 0.866},${150 + radius * 0.5}`,
                `150,${150 + radius}`,
                `${150 - radius * 0.866},${150 + radius * 0.5}`,
                `${150 - radius * 0.866},${150 - radius * 0.5}`,
              ].join(" ")}
              stroke="rgba(148, 163, 184, 0.26)"
              strokeWidth="1"
            />
          ))}
          {axis.map((point) => (
            <line
              key={point.label}
              stroke="rgba(148, 163, 184, 0.22)"
              strokeWidth="1"
              x1="150"
              x2={point.x}
              y1="150"
              y2={point.y}
            />
          ))}
        </g>
        <polygon
          className="radar-area"
          fill="rgba(34, 197, 94, 0.12)"
          points="150,113 180,133 188,171 150,199 109,174 101,115"
          stroke="none"
        />
        <polygon
          className="radar-line"
          fill="none"
          points="150,113 180,133 188,171 150,199 109,174 101,115 150,113"
          stroke="#ef4444"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        {axis.map((point, index) => {
          const coords = [
            [150, 113],
            [180, 133],
            [188, 171],
            [150, 199],
            [109, 174],
            [101, 115],
          ][index];

          return (
            <g className="radar-dot" key={point.label} style={{ "--delay": `${0.45 + index * 0.08}s` } as CSSProperties}>
              <circle cx={coords[0]} cy={coords[1]} fill={point.color} r="4.2" />
              <circle cx={coords[0]} cy={coords[1]} fill="none" r="7.3" stroke="rgba(255,255,255,0.92)" strokeWidth="2.4" />
            </g>
          );
        })}
        {axis.map((point) => (
          <g className="radar-label" key={point.label}>
            <text fill={point.color} fontSize="15" fontWeight="800" textAnchor="middle" x={point.x} y={point.y - 10}>
              {point.label}
            </text>
            <text fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle" x={point.x} y={point.y + 7}>
              {point.score}
            </text>
          </g>
        ))}
      </svg>

      <div className="radar-scale">
        <span />
        <span />
        <span />
      </div>
      <div className="radar-stages">
        <span>Sobrevivência</span>
        <span>Estruturação</span>
        <strong>Aceleração</strong>
        <span>Referência</span>
      </div>
    </div>
  );
}

export default function GerarPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f7faf8] px-6 py-10">
      <div className="network-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#d4d4d4]/0 via-transparent to-[#d4d4d4]/72"
        aria-hidden="true"
      />

      <section className="generated-screen relative z-10 grid w-full max-w-6xl grid-cols-[320px_1fr] gap-6">
        <RadarChart />

        <div className="pillar-stack grid gap-4">
          {pillars.map((pillar, index) => (
            <article
              className="pillar-row"
              key={pillar.key}
              style={
                {
                  "--accent": pillar.accent,
                  "--delay": `${0.24 + index * 0.1}s`,
                  "--score": `${pillar.score}%`,
                } as CSSProperties
              }
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="pillar-key">{pillar.key}</span>
                <div className="min-w-0">
                  <h2>{pillar.title}</h2>
                  <p>{pillar.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="pillar-bar">
                  <span />
                </span>
                <strong>{pillar.score}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
