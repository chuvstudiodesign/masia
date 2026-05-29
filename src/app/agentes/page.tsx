import Link from "next/link";
import type { Metadata } from "next";
import { AgentesNetwork } from "../components/AgentesNetwork";

export const metadata: Metadata = {
  title: "Agentes MASI IA | 9 especialistas em IA para sua empresa",
  description:
    "9 especialistas em IA — financeiro, comercial, marketing, estratégia — analisam sua empresa em tempo real. Diagnóstico, plano de vendas e OKRs gerados em minutos.",
};

const builders = [
  { initials: "LC", name: "Lucas" },
  { initials: "MA", name: "Maria" },
  { initials: "JV", name: "João" },
  { initials: "AN", name: "Ana" },
];

export default function AgentesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]">
      <div className="network-bg" aria-hidden="true" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-[#f6faf7]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
              M
            </span>
            <span className="text-base font-semibold tracking-tight">MASI IA</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <Link href="/#raio-x">Raio-X</Link>
            <Link href="/#agentes">Agentes</Link>
            <Link href="/#execucao">Execução</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <a
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#18bf62] px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#12a955]"
            href="#acesso"
          >
            Solicitar acesso
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:pt-8">

        {/* Left column */}
        <div className="flex flex-col">

          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-950/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
            <span className="size-2 animate-pulse rounded-full bg-[#18bf62]" />
            9 especialistas em IA
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-slate-950">
            <span className="block">Vender mais.</span>
            <span className="block">Faturar mais.</span>
            <span className="block text-[#18bf62]">Economizar mais.</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-700">
            A inteligência estratégica da sua empresa.
          </p>

          {/* Description */}
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
            9 especialistas em IA — financeiro, comercial, marketing, estratégia
            — analisam sua empresa em tempo real. Diagnóstico, plano de vendas e
            OKRs gerados em minutos e revisitados toda semana.
          </p>

          {/* Stats card */}
          <div className="mt-8 w-full max-w-sm rounded-2xl border border-emerald-950/10 bg-white/80 p-5 shadow-lg shadow-slate-950/[0.06] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Aplicações deste mês
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                3 disponíveis
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#18bf62]"
                style={{ width: `${(47 / 50) * 100}%` }}
              />
            </div>
            <div className="mt-2.5 flex items-end justify-between">
              <p className="text-2xl font-bold text-slate-950">
                47
                <span className="ml-1 text-sm font-medium text-slate-400">/ 50 analisadas</span>
              </p>
              <p className="text-xs font-medium text-slate-400">3 análises disponíveis</p>
            </div>
          </div>

          {/* CTA */}
          <a
            className="mt-7 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:bg-[#12a955]"
            href="#acesso"
            id="acesso"
          >
            Solicitar acesso
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Quem está construindo */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {builders.map((b) => (
                <span
                  key={b.initials}
                  className="grid size-8 place-items-center rounded-full border-2 border-white bg-emerald-100 text-xs font-bold text-emerald-800 shadow-sm"
                  title={b.name}
                >
                  {b.initials}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Quem está construindo</p>
              <p className="text-xs text-slate-500">Time MASI IA · acesso por indicação</p>
            </div>
          </div>
        </div>

        {/* Right column — native agent network */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[525px]">
            <AgentesNetwork />
          </div>
        </div>
      </section>
    </main>
  );
}
