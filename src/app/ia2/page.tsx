import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como usar IA para aumentar o faturamento | MASI IA",
  description:
    "A masIA amplifica o que você já sabe fazer. Com 9 especialistas treinados pelo Breno Masi analisando sua empresa, gerando planos e identificando oportunidades.",
};

const pillars = [
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

const steps = [
  {
    num: "01",
    title: "Diagnostique",
    text: "A empresa passa pelo Raio-X MASI para mapear maturidade, gargalos e oportunidades.",
  },
  {
    num: "02",
    title: "Priorize",
    text: "A plataforma organiza Score MASI, SWOT, OKRs e frentes críticas de melhoria.",
  },
  {
    num: "03",
    title: "Aprove",
    text: "Agentes sugerem ações práticas. O gestor revisa, aprova, ajusta ou rejeita.",
  },
  {
    num: "04",
    title: "Acompanhe",
    text: "Ações aprovadas viram tarefas, rotinas e ciclos acompanháveis pela empresa.",
  },
];

const faq = [
  {
    q: "A masIA é um curso de inteligência artificial?",
    a: "Não. É uma plataforma de mentoria e aceleração empresarial com IA aplicada à gestão, diagnóstico, estratégia e execução.",
  },
  {
    q: "A plataforma substitui o empresário ou a liderança?",
    a: "Não. Ela analisa, organiza e recomenda. A decisão continua com os empresários e gestores.",
  },
  {
    q: "As ações são executadas automaticamente?",
    a: "As recomendações passam por aprovação. Depois disso, podem virar tarefas, rotinas ou acompanhamentos dentro da plataforma.",
  },
];

const integrations = [
  "Sem trocar de plataforma",
  "Sem perder contexto",
  "Sem começar do zero cada vez",
];

export default function IA2Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#d4d4d4] text-[#111827]">

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#d4d4d4]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
              M
            </span>
            <span className="text-base font-semibold tracking-tight">MASI IA</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#agentes">Agentes</a>
            <a href="#especialistas">Especialistas</a>
            <a href="#integracoes">Integrações</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            href="https://ia.masinegocios.com.br/"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#18bf62] px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#12a955]"
          >
            Solicitar acesso
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background iframe */}
        <iframe
          src="/background"
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d4d4d4]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start justify-center px-5 pb-20 pt-24 sm:px-8">
          {/* Badges */}
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur">
              <span className="size-1.5 rounded-full bg-[#18bf62]" />
              Acesso por convite
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 shadow-sm backdrop-blur">
              47/50 análises preenchidas este mês
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 shadow-sm backdrop-blur">
              3 análises disponíveis
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
            Como usar IA para aumentar o faturamento, reduzir custos e multiplicar produtividade na sua empresa.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A masIA amplifica o que você já sabe fazer. Com 9 especialistas treinados pelo Breno Masi analisando sua empresa, gerando planos e identificando oportunidades que você não teria tempo de enxergar sozinho.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://ia.masinegocios.com.br/"
              className="inline-flex h-13 items-center justify-center rounded-full bg-[#18bf62] px-8 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:bg-[#12a955]"
            >
              Solicitar acesso
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-13 items-center justify-center rounded-full border border-black/10 bg-white/65 px-8 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-white"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── Pilares ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#d4d4d4] py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Transforme diagnóstico em execução com agentes de IA.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Prioridades claras, ações coordenadas e acompanhamento contínuo.
              </p>
              <a
                href="https://ia.masinegocios.com.br/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
              >
                Ver como funciona
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border border-black/8 bg-white/60 p-5 backdrop-blur"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {p.label}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agentes Network ─────────────────────────────────────────── */}
      <section className="relative bg-[#0f1a10] py-20 text-white" id="agentes">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
              O time que você sempre quis ter
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              9 especialistas. Um time completo.<br className="hidden sm:block" /> Disponíveis agora.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50/70">
              A masIA não entrega respostas soltas. Cada agente atua em uma frente da gestão, conectado ao diagnóstico, aos objetivos e à realidade do negócio.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[560px] px-4">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src="/agentes-2"
              className="h-[620px] w-full border-0"
              title="Rede de Agentes MASI IA"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://ia.masinegocios.com.br/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-8 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
          >
            Solicitar acesso
          </a>
        </div>
      </section>

      {/* ── Especialistas ───────────────────────────────────────────── */}
      <section className="relative bg-[#d4d4d4] py-20" id="especialistas">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Time de IA
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              9 especialistas. Um time completo. Disponíveis agora.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Para cada especialista da masIA, existe um profissional de mercado equivalente que você pagaria por mês. Veja a diferença.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full overflow-hidden">
          <iframe
            src="/especialistas"
            className="h-[880px] w-full border-0"
            title="Especialistas MASI IA"
          />
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://ia.masinegocios.com.br/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-8 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
          >
            Solicitar acesso
          </a>
        </div>
      </section>

      {/* ── ERPs / Integrações ──────────────────────────────────────── */}
      <section className="relative bg-[#ececec] py-20" id="integracoes">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Integrações
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                A masIA se conecta ao sistema que você já usa.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Integrações nativas com ERPs, CRMs e plataformas de checkout. Sem planilhas manuais, sem troca de ferramentas, sem começar do zero a cada reunião.
              </p>
              <div className="mt-7 grid gap-3">
                {integrations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-black/8 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <span className="size-2 shrink-0 rounded-full bg-[#18bf62]" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="https://ia.masinegocios.com.br/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
              >
                Solicitar acesso
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <iframe
                src="/erps"
                className="h-[660px] w-full border-0"
                title="ERPs, CRMs e Checkout"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Raio-X / Grafico 3D ─────────────────────────────────────── */}
      <section className="relative bg-[#d4d4d4] py-20" id="raio-x">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <iframe
                src="/grafico-3d"
                className="h-[660px] w-full border-0"
                title="Raio-X do Negócio"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Raio-X do negócio
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Antes do plano de ação, a plataforma entende onde a empresa realmente está.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                O Diagnóstico MASI analisa marketing, vendas, sistemas de gestão, inovação, escala e financeiro. O Score MASI mostra a maturidade da empresa e ajuda a priorizar o que limita o crescimento.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Score MASI", "Pilares de maturidade", "Áreas críticas", "Base para OKRs"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-black/8 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sentinela ───────────────────────────────────────────────── */}
      <section className="relative bg-[#0f1a10] py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
              Sentinela
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Inteligência de mercado para não decidir no escuro.
            </h2>
            <p className="mt-5 text-base leading-7 text-emerald-50/70">
              O Sentinela monitora sinais relevantes, concorrência, tendências e oportunidades. Em vez de notícias soltas, você recebe leituras contextualizadas para o seu negócio.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[["Ativos", "16"], ["Alertas", "0"], ["Oportunidades", "5"], ["Neutros", "8"]].map(([label, val]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-2xl font-semibold text-[#18bf62]">{val}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-emerald-200/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-emerald-300">Leitura estratégica desta semana</p>
            <p className="mt-4 text-base leading-7 text-emerald-50/80">
              "Identificamos 3 movimentos da concorrência direta que afetam sua margem de captação. Recomendamos revisão do posicionamento de preço no plano anual antes do trimestre."
            </p>
            <p className="mt-4 text-xs text-emerald-500">Gerado pelo Sentinela · Atualizado há 2h</p>
          </div>
        </div>
      </section>

      {/* ── Da análise para a ação ──────────────────────────────────── */}
      <section className="relative bg-[#d4d4d4] py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Da análise para a ação
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                A IA sugere. Você aprova. A empresa executa com clareza.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                As recomendações vêm com prioridade, origem, pilar MASI, responsável sugerido e motivo. O gestor mantém o controle antes de transformar uma sugestão em tarefa.
              </p>
              <a
                href="https://ia.masinegocios.com.br/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
              >
                Solicitar acesso
              </a>
            </div>
            <div className="grid gap-3">
              {[
                { label: "Alta prioridade", title: "Revisar proposta comercial", desc: "Pilar: Vendas · Responsável: SDR IA", status: "Aprovar" },
                { label: "Média prioridade", title: "Publicar conteúdo semanal", desc: "Pilar: Marketing · Responsável: Social Media IA", status: "Aprovar" },
                { label: "Alta prioridade", title: "Analisar margem do produto X", desc: "Pilar: Financeiro · Responsável: BI IA", status: "Em análise" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-black/8 bg-white/60 p-4 backdrop-blur"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#18bf62]/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Como funciona ───────────────────────────────────────────── */}
      <section className="relative bg-[#ececec] py-24" id="como-funciona">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Como funciona
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Da análise à execução, sem perder o fio da estratégia.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                O sistema cria uma cadência de gestão: diagnostica, prioriza, recomenda e acompanha os próximos movimentos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-black/8 bg-white/60 p-5 backdrop-blur"
                >
                  <span className="text-sm font-semibold text-[#18bf62]">{s.num}</span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#d4d4d4] py-24" id="faq">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              3 Perguntas frequentes sobre a masIA
            </h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-black/8 bg-white/60 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ───────────────────────────────────────────────── */}
      <section className="relative bg-[#0f1a10] py-24 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.04] px-8 py-16 text-center sm:px-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">Acesso</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Sua empresa precisa de mais do que ideias. Precisa de direção, método e execução.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-50/70">
              Solicite acesso à masIA e veja como transformar diagnóstico, estratégia e acompanhamento em uma rotina de gestão mais clara, inteligente e acionável.
            </p>
            <a
              href="https://ia.masinegocios.com.br/"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#18bf62] px-10 text-base font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
            >
              Solicitar acesso à masIA
            </a>
            <p className="mt-4 text-xs text-emerald-50/40">
              Acesso por convite · Para empresários e lideranças que querem accelerar com método e controle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-[#0a1209] px-5 py-12 text-sm text-emerald-50/50 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white">M</span>
                <span className="text-base font-semibold text-white">MASI IA</span>
              </div>
              <p className="mt-4 text-sm leading-6">
                Mentoria empresarial com inteligência artificial aplicada à gestão, diagnóstico e execução.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">Programas</p>
              <div className="grid gap-2">
                {["Workshop", "Action", "Aceleração", "Founder", "Advisor", "Academy"].map((item) => (
                  <a key={item} href="https://masinegocios.com.br" className="hover:text-white transition">{item}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">Redes</p>
              <div className="grid gap-2">
                <a href="https://instagram.com/masinegocios" className="hover:text-white transition">Instagram</a>
                <a href="https://youtube.com/@masinegocios" className="hover:text-white transition">YouTube</a>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">Suporte</p>
              <div className="grid gap-2">
                <a href="https://masinegocios.com.br" className="hover:text-white transition">Central de Ajuda</a>
                <a href="https://masinegocios.com.br" className="hover:text-white transition">Política de Privacidade</a>
                <a href="https://masinegocios.com.br" className="hover:text-white transition">Termos de Serviço</a>
                <a href="https://masinegocios.com.br/contato" className="hover:text-white transition">Contato</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
            <p>© 2026 MASI IA · Todos os direitos reservados</p>
            <p>Criado por <a href="https://chuvstudio.com" className="hover:text-white transition">Chuv Studio</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
