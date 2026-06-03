import Image from "next/image";
import Link from "next/link";
import { BrainHero } from "./components/BrainHero";

const platformStats = [
  "Diagnóstico MASI",
  "Score de maturidade",
  "OKRs e SWOT",
  "Agentes especializados",
];

const dailyActions = [
  {
    label: "Detecta",
    title: "Oportunidades e riscos",
    text: "O Sentinela monitora mercado, concorrência e sinais que podem afetar a empresa.",
  },
  {
    label: "Prioriza",
    title: "Gaps de maior impacto",
    text: "O Raio-X mostra onde vendas, marketing, gestão, escala e financeiro precisam de atenção.",
  },
  {
    label: "Sugere",
    title: "Próximas ações",
    text: "Os agentes transformam diagnósticos em recomendações com motivo, prioridade e responsável.",
  },
  {
    label: "Acompanha",
    title: "Rotinas de execução",
    text: "Automações revisam KPIs, briefings, scorecards, coaching e atualização estratégica.",
  },
];

const agents = [
  ["Maestro", "Orquestra diagnóstico, agentes e execução."],
  ["Sentinela", "Monitora mercado e oportunidades."],
  ["Pulse", "Gera scorecards e sinais de saúde."],
  ["Scout", "Atualiza SWOT e leituras estratégicas."],
  ["Focco", "Apoia funil, demanda e vendas."],
  ["Farol", "Organiza marca, conteúdo e próximos passos."],
];

const steps = [
  {
    title: "Diagnostique",
    text: "A empresa passa pelo Raio-X MASI para mapear maturidade, gargalos e oportunidades.",
  },
  {
    title: "Priorize",
    text: "A plataforma organiza Score MASI, SWOT, OKRs e frentes críticas de melhoria.",
  },
  {
    title: "Aprove",
    text: "Agentes sugerem ações práticas. O gestor revisa, aprova, ajusta ou rejeita.",
  },
  {
    title: "Acompanhe",
    text: "Ações aprovadas viram tarefas, rotinas e ciclos acompanháveis pela empresa.",
  },
];

const automations = [
  "Verificação de KPIs a cada 6 horas",
  "Briefings preparados a cada 12 horas",
  "Varredura diária de mercado",
  "Scorecard semanal da saúde do negócio",
  "Coaching estratégico semanal",
  "Atualização mensal da SWOT",
];

const faq = [
  {
    question: "A MASI IA é um curso de inteligência artificial?",
    answer:
      "Não. É uma plataforma de mentoria e aceleração empresarial com IA aplicada à gestão, diagnóstico, estratégia e execução.",
  },
  {
    question: "A plataforma substitui o empresário ou a liderança?",
    answer:
      "Não. Ela analisa, organiza e recomenda. A decisão continua com os empresários e gestores.",
  },
  {
    question: "As ações são executadas automaticamente?",
    answer:
      "As recomendações passam por aprovação. Depois disso, podem virar tarefas, rotinas ou acompanhamentos dentro da plataforma.",
  },
  {
    question: "Preciso entender de IA para usar?",
    answer:
      "Não. A proposta é aplicar IA à gestão empresarial de forma orientada, prática e conectada ao método MASI.",
  },
];

function Screenshot({
  alt,
  className = "",
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-emerald-950/10 bg-white/80 shadow-[0_24px_90px_rgba(15,23,42,0.12)] ${className}`}
    >
      <Image
        alt={alt}
        className="h-full w-full object-cover object-center"
        height={900}
        priority={priority}
        src={src}
        width={1600}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]"
      id="top"
    >
      <div className="network-bg" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-[#f6faf7]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
              M
            </span>
            <span className="text-base font-semibold tracking-tight">MASI IA</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#raio-x">Raio-X</a>
            <a href="#agentes">Agentes</a>
            <a href="#execucao">Execução</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#18bf62] px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#12a955]"
            href="#acesso"
          >
            Solicitar acesso
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl items-center gap-10 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pt-6">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
            <span className="size-2 rounded-full bg-[#18bf62]" />
            Mentoria empresarial com IA
          </div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
            Transforme diagnóstico em execução com agentes de IA.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A MASI IA aplica o método MASI para analisar sua empresa,
            organizar prioridades, sugerir ações e acompanhar o crescimento com
            mais clareza, foco e controle.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:bg-[#12a955]"
              href="#acesso"
            >
              Solicitar acesso à MASI IA
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/65 px-7 text-sm font-semibold text-slate-800 transition hover:bg-white"
              href="#como-funciona"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500">
            Para empresários, sócios e times de gestão que querem sair do
            improviso e operar com método.
          </p>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[620px]">
          <BrainHero />
          <div className="absolute left-0 top-10 z-10 rounded-2xl border border-emerald-950/10 bg-white/88 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur">
            <p className="text-xs font-medium text-slate-500">Agentes ativos</p>
            <p className="mt-1 text-2xl font-semibold text-slate-950">16</p>
          </div>
          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-2xl border border-emerald-950/10 bg-white/88 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur sm:block">
            <p className="text-xs font-medium text-slate-500">Score MASI</p>
            <p className="mt-1 text-2xl font-semibold text-amber-500">52</p>
          </div>
          <div className="absolute bottom-10 right-4 z-10 rounded-2xl border border-emerald-950/10 bg-white/88 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur">
            <p className="text-xs font-medium text-slate-500">Ações sugeridas</p>
            <p className="mt-1 text-2xl font-semibold text-[#18bf62]">43</p>
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 hidden w-[76%] -translate-x-1/2 rounded-2xl border border-emerald-950/10 bg-white/70 px-4 py-3 text-center text-sm font-medium text-slate-600 shadow-xl shadow-slate-950/10 backdrop-blur md:block">
            Diagnóstico, agentes, mercado e execução conectados em um sistema vivo.
          </div>
        </div>
      </section>

      <section className="relative border-y border-emerald-950/10 bg-white/58 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {platformStats.map((item) => (
            <div
              className="rounded-xl border border-emerald-950/10 bg-white/70 px-4 py-4 text-sm font-semibold text-slate-700"
              key={item}
            >
              <span className="mr-2 inline-block size-2 rounded-full bg-[#18bf62]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">O problema</p>
            <h2 className="section-title">
              Empresas não travam por falta de ideias. Travam por falta de
              clareza operacional.
            </h2>
            <p className="section-copy">
              Muitos empresários sabem que precisam melhorar vendas, gestão,
              processos, equipe, margem ou posicionamento. O desafio é
              transformar essa percepção em prioridades claras, ações
              coordenadas e acompanhamento contínuo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {dailyActions.map((item) => (
              <article className="system-card" key={item.title}>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {item.label}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"
        id="raio-x"
      >
        <div className="order-2 lg:order-1">
          <Screenshot
            alt="Raio-X do Negócio com Score MASI e pilares de maturidade."
            className="aspect-[1.2]"
            src="/images/masi-platform/raio-x.png"
          />
        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="section-kicker">Raio-X do negócio</p>
          <h2 className="section-title">
            Antes do plano de ação, a plataforma entende onde a empresa
            realmente está.
          </h2>
          <p className="section-copy">
            O Diagnóstico MASI analisa marketing, vendas, sistemas de gestão,
            inovação, escala e financeiro. O Score MASI mostra a maturidade da
            empresa e ajuda a priorizar o que limita o crescimento.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Score MASI", "Pilares de maturidade", "Áreas críticas", "Base para OKRs"].map(
              (item) => (
                <div className="mini-proof" key={item}>
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative bg-[#102019] py-24 text-white" id="agentes">
        <div className="network-bg-dark" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">Time de IA</p>
            <h2 className="section-title text-white">
              Agentes especializados trabalhando em paralelo pela sua empresa.
            </h2>
            <p className="section-copy text-emerald-50/72">
              A MASI IA não entrega respostas soltas. Cada agente atua em uma
              frente da gestão, conectado ao diagnóstico, aos objetivos e à
              realidade do negócio.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map(([name, text], index) => (
              <article
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                key={name}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-white text-sm font-bold text-[#102019]">
                    {name.slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-xs text-emerald-200">
                      online · agente {index + 1}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-emerald-50/72">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Sentinela</p>
          <h2 className="section-title">
            Inteligência de mercado para não decidir no escuro.
          </h2>
          <p className="section-copy">
            O Sentinela monitora sinais relevantes, concorrência, tendências e
            oportunidades. Em vez de notícias soltas, você recebe leituras
            contextualizadas para o seu negócio.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["5", "oportunidades"],
              ["0", "alertas"],
              ["10", "relevância"],
            ].map(([value, label]) => (
              <div className="rounded-2xl border border-emerald-950/10 bg-white/75 p-4" key={label}>
                <p className="text-3xl font-semibold text-[#18bf62]">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Screenshot
          alt="Tela Sentinela com análises de inteligência de mercado."
          className="aspect-[1.24]"
          src="/images/masi-platform/sentinela.png"
        />
      </section>

      <section
        className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]"
        id="execucao"
      >
        <Screenshot
          alt="Ações sugeridas pelos agentes com botões de aprovar e rejeitar."
          className="aspect-[1.25]"
          src="/images/masi-platform/sugestoes.png"
        />
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Da análise para a ação</p>
          <h2 className="section-title">
            A IA sugere. Você aprova. A empresa executa com clareza.
          </h2>
          <p className="section-copy">
            As recomendações vêm com prioridade, origem, pilar MASI, responsável
            sugerido e motivo. O gestor mantém o controle antes de transformar
            uma sugestão em tarefa.
          </p>
          <a
            className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
            href="#acesso"
          >
            Ver fluxo de aprovação
          </a>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8" id="como-funciona">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Como funciona</p>
            <h2 className="section-title">
              Da análise à execução, sem perder o fio da estratégia.
            </h2>
            <p className="section-copy">
              O sistema cria uma cadência de gestão: diagnostica, prioriza,
              recomenda e acompanha os próximos movimentos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article className="system-card" key={step.title}>
                <span className="text-sm font-semibold text-[#18bf62]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-emerald-950/10 bg-white/55 py-20 backdrop-blur">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Automações</p>
            <h2 className="section-title">
              Rotinas recorrentes para manter a gestão em movimento.
            </h2>
            <p className="section-copy">
              Automação aqui não é promessa mágica. É disciplina operacional
              aplicada com tecnologia e aprovação humana.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {automations.map((item) => (
              <div className="mini-proof bg-white/80" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[24px] border border-emerald-950/10 bg-white/72 p-8 shadow-sm">
            <p className="section-kicker">Para quem é</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Empresários que querem profissionalizar a gestão e acelerar com
              controle.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>Empresas em crescimento ou reorganização.</li>
              <li>Lideranças que precisam alinhar estratégia e operação.</li>
              <li>Negócios com equipe, metas e desafios reais de execução.</li>
            </ul>
          </article>
          <article className="rounded-[24px] border border-emerald-950/10 bg-white/72 p-8 shadow-sm">
            <p className="section-kicker">Não é para</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Quem procura apenas um curso, um chatbot ou IA sem método.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>Quem quer aprender prompts genéricos.</li>
              <li>Quem espera que a IA tome decisões sozinha.</li>
              <li>Quem não pretende acompanhar a execução.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8" id="faq">
        <div className="text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title mx-auto max-w-3xl">
            Perguntas que um empresário deveria fazer antes de usar IA na
            gestão.
          </h2>
        </div>
        <div className="mt-10 grid gap-4">
          {faq.map((item) => (
            <article
              className="rounded-2xl border border-emerald-950/10 bg-white/75 p-6"
              key={item.question}
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-10 sm:px-8" id="acesso">
        <div className="overflow-hidden rounded-[32px] bg-[#102019] px-6 py-14 text-white shadow-2xl shadow-slate-950/20 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="section-kicker text-emerald-300">Acesso</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Sua empresa precisa de mais do que ideias. Precisa de direção,
                método e execução.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/72">
                Solicite acesso à MASI IA e veja como transformar diagnóstico,
                estratégia e acompanhamento em uma rotina de gestão mais clara,
                inteligente e acionável.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <a
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white transition hover:bg-[#12a955]"
                href="mailto:lucas@masinegocios.com.br?subject=Solicitar%20acesso%20%C3%A0%20MASI%20IA"
              >
                Solicitar acesso à MASI IA
              </a>
              <p className="mt-4 text-center text-xs leading-5 text-emerald-50/55">
                Acesso indicado para empresários e lideranças que querem
                acelerar a empresa com método e controle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-emerald-950/10 px-5 py-8 text-sm text-slate-500 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>MASI IA · Mentoria empresarial com inteligência artificial</span>
          <a href="#top">Voltar ao topo</a>
        </div>
      </footer>
    </main>
  );
}
