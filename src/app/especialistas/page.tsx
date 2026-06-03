import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialistas MASI IA | Agentes de IA para empresas",
  description:
    "Conheça os especialistas de IA da MASI: social media, designer, copywriter, BI, tendências, estratégia, financeiro e SDR.",
};

const specialists = [
  {
    name: "Social Media IA",
    description:
      "Cria conteúdos, legendas e hashtags, agenda publicações e sugere pautas semanais com análise",
    cost: "R$ 3.500 – 6.000/mês",
    image: "/images/agentes-nobg/Farol.png",
    color: "#ec4899",
  },
  {
    name: "Designer IA",
    description:
      "Gera artes, banners, posts, stories e anúncios em tempo real, sempre no estilo da marca",
    cost: "R$ 3.000 – 10.000/mês",
    image: "/images/agentes-nobg/Designer.png",
    color: "#a855f7",
  },
  {
    name: "Copywriter IA",
    description:
      "Escreve headlines, e-mails, páginas, scripts e posts com gatilhos e estrutura profissional",
    cost: "R$ 2.500 – 7.000/mês",
    image: "/images/agentes-nobg/Briefer.png",
    color: "#f59e0b",
  },
  {
    name: "Analista de BI IA",
    label: "ANALISTA DE",
    description:
      "Cria dashboards, analisa margem, CAC, LTV, equilíbrio e gera relatórios semanais claros",
    cost: "R$ 5.000 – 12.000/mês",
    image: "/images/agentes-nobg/Pulse.png",
    color: "#06b6d4",
  },
  {
    name: "Tendências IA",
    label: "ANALISTA DE",
    description:
      "Monitora mercado, concorrência e comportamento do consumidor antes das reuniões estratégicas",
    cost: "R$ 4.000 – 9.000/mês",
    image: "/images/agentes-nobg/Sentinela-tendencias.png",
    color: "#8B5CF6",
    avatarZoom: "115%",
    avatarYOffset: "-34%",
  },
  {
    name: "Estrategista IA",
    label: "CONSELHEIRO",
    description:
      "Questiona decisões, aponta riscos e sugere caminhos com base nos dados reais da empresa",
    cost: "R$ 8.000 – 20.000+/mês",
    image: "/images/agentes-nobg/Stratego.png",
    color: "#16a34a",
  },
  {
    name: "Gestor Financeiro IA",
    description:
      "Monitora indicadores financeiros em tempo real, alerta sobre desvios e projeta cenários futuros",
    cost: "R$ 5.000 – 12.000/mês",
    image: "/images/agentes-nobg/Cifra-gestora.png",
    color: "#10b981",
    avatarZoom: "130%",
    avatarYOffset: "-36%",
  },
  {
    name: "SDR",
    description:
      "Analisa pipeline, sugere abordagens, identifica gargalos e gera planos de ação para vendas",
    cost: "R$ 5.000 – 10.000/mês",
    image: "/images/agentes-nobg/Closer.png",
    color: "#7c3aed",
  },
];

export default function EspecialistasPage() {
  return (
    <main className="min-h-screen bg-[#ECECEC] text-[#111827]">
      <section className="mx-auto w-full max-w-6xl px-5 py-9 sm:px-7">
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist) => (
            <article
              className="group flex min-h-[370px] flex-col rounded-[10px] border border-black/10 bg-white p-[18px] shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_72px_rgba(15,23,42,0.12)]"
              key={specialist.name}
              style={
                {
                  "--agent-color": specialist.color,
                  "--avatar-size": specialist.avatarZoom ?? "105%",
                  "--avatar-y": specialist.avatarYOffset ?? "-40%",
                } as React.CSSProperties
              }
            >
              <div className="flex justify-center pb-[18px] pt-2">
                <div
                  className="relative size-[97px] overflow-hidden rounded-full bg-white"
                  style={{
                    border: `2px solid ${specialist.color}`,
                    boxShadow: `0 7px 25px ${specialist.color}35, 0 0 0 4px ${specialist.color}18`,
                  }}
                >
                  <Image
                    alt={`Agente ${specialist.name}`}
                    className="absolute left-1/2 top-1/2 h-[var(--avatar-size)] w-[var(--avatar-size)] -translate-x-1/2 translate-y-[var(--avatar-y)] object-cover object-center transition duration-300 group-hover:scale-[1.05]"
                    height={220}
                    src={specialist.image}
                    width={220}
                  />
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#12984e]">
                  {specialist.label ?? "ESPECIALISTA"}
                </p>
                <h2 className="mt-2 text-[22px] font-semibold leading-tight text-slate-950">
                  {specialist.name}
                </h2>
                <p className="mt-3.5 flex-1 text-[13px] leading-[22px] text-slate-600">
                  {specialist.description}
                </p>
                <div className="mt-3.5 rounded-[10px] border border-slate-950/10 bg-[#ECECEC] px-3.5 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Custo equivalente
                    <br />
                    no mercado
                  </p>
                  <p className="mt-1 text-[14px] font-semibold text-slate-950">
                    {specialist.cost}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
