'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────

const FORMATS = ['Feed', 'Stories', 'Carrossel', 'Anúncio'] as const;
type Format = typeof FORMATS[number];

const POST_DATA: Record<Format, {
  caption: string;
  gradient: string;
  label?: string;
  aspect: string;
  slides?: number;
}> = {
  Feed: {
    caption: 'Você sabia que 87% dos empreendedores ainda criam conteúdo manualmente? Com a masIA, sua marca publica todos os dias — sem você precisar abrir uma única ferramenta. #MarketingDigital #IA #Empreendedorismo',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    aspect: 'aspect-square',
  },
  Stories: {
    caption: 'Arrasta pra cima e descobre como a IA está transformando o marketing das PMEs 🚀',
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    label: 'Ver mais ↑',
    aspect: 'aspect-[9/16] max-h-[420px]',
  },
  Carrossel: {
    caption: '5 erros que empresários cometem no marketing digital — e como a IA resolve cada um. Desliza →',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    aspect: 'aspect-square',
    slides: 5,
  },
  Anúncio: {
    caption: 'Sua marca presente todos os dias, sem agência, sem stress. Conheça a masIA e transforme sua presença digital.',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    label: 'Saiba mais',
    aspect: 'aspect-square',
  },
};

const STEPS = [
  {
    num: '01',
    title: 'Você define',
    desc: 'Tom de voz, público e objetivos da sua marca em um briefing simples.',
    icon: '✦',
  },
  {
    num: '02',
    title: 'IA cria',
    desc: 'Copy, arte, legenda e hashtags gerados automaticamente no estilo da sua marca.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Publica',
    desc: 'Postagem direta nas suas redes, sem exportar, sem aprovar, sem depender de ninguém.',
    icon: '◉',
  },
];

const FEATURES = [
  'Escreve o texto e a copy de cada post',
  'Cria o carrossel com design no padrão da sua marca',
  'Gera a arte para feed, stories e anúncios',
  'Publica de forma integrada nas suas redes sociais',
  'Analisa performance e sugere a próxima pauta',
];

const STATS = [
  { value: '3×', label: 'mais posts por semana' },
  { value: '0', label: 'ferramentas para abrir' },
  { value: '24h', label: 'presença digital contínua' },
  { value: '100%', label: 'no estilo da sua marca' },
];

// ─── Post Mockup ──────────────────────────────────────────────────────────────

function PostMockup({ format, caption, isGenerating }: {
  format: Format;
  caption: string;
  isGenerating: boolean;
}) {
  const data = POST_DATA[format];
  const isStories = format === 'Stories';

  return (
    <div className={`relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/12 ${isStories ? 'max-w-[240px]' : 'max-w-[340px]'}`}>
      {/* Header */}
      {!isStories && (
        <div className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5">
          <div className="grid size-7 shrink-0 place-items-center rounded-full bg-[#18bf62] text-[10px] font-bold text-white">
            MA
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900">suamarca</p>
            {data.label === 'Patrocinado' || format === 'Anúncio'
              ? <p className="text-[9px] text-slate-400">Patrocinado</p>
              : <p className="text-[9px] text-slate-400">agora mesmo</p>
            }
          </div>
          <span className="text-xs text-slate-300">•••</span>
        </div>
      )}

      {/* Visual area */}
      <div className={`relative w-full bg-gradient-to-br ${data.gradient} ${data.aspect} flex items-center justify-center overflow-hidden`}>
        {isStories && (
          <div className="absolute inset-x-3 top-3 flex gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-0.5 flex-1 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        )}
        {isStories && (
          <div className="absolute left-3 top-7 flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-full bg-white/20 text-[10px] font-bold text-white backdrop-blur-sm">MA</div>
            <p className="text-xs font-semibold text-white">suamarca</p>
          </div>
        )}

        {/* Carrossel dots */}
        {data.slides && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {Array.from({ length: data.slides }, (_, i) => (
              <div key={i} className={`h-1.5 rounded-full ${i === 0 ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
            ))}
          </div>
        )}

        {isGenerating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30 backdrop-blur-sm">
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="size-2 rounded-full bg-white"
                  style={{ animation: `bounce 0.8s ease-in-out ${i * 0.16}s infinite` }}
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-white">Gerando arte...</p>
          </div>
        )}

        {/* Stories CTA */}
        {isStories && data.label && !isGenerating && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {data.label}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!isStories && (
        <div className="p-3">
          <div className="mb-2 flex items-center gap-3 text-slate-500">
            <span className="text-base">♡</span>
            <span className="text-base">💬</span>
            <span className="text-base">✈</span>
            <span className="ml-auto text-base">🔖</span>
          </div>
          <p className="text-[11px] font-semibold text-slate-800">1.284 curtidas</p>
          <div className="mt-1 min-h-[48px] text-[11px] leading-[1.55] text-slate-700">
            {isGenerating ? (
              <span className="text-slate-400 italic">Gerando copy...</span>
            ) : (
              <>
                <strong>suamarca</strong>{' '}{caption}
                <span className="animate-pulse">|</span>
              </>
            )}
          </div>
          {data.label && format === 'Anúncio' && !isGenerating && (
            <button className="mt-2 w-full rounded-lg border border-slate-200 py-1.5 text-xs font-semibold text-slate-700">
              {data.label}
            </button>
          )}
        </div>
      )}

      {isStories && !isGenerating && (
        <div className="bg-black px-3 py-2">
          <p className="text-center text-[10px] leading-[1.5] text-white/80">{caption}<span className="animate-pulse">|</span></p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IAConteudoPage() {
  const [activeFormat, setActiveFormat] = useState<Format>('Feed');
  const [caption, setCaption] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsGenerating(true);
    setCaption('');
    const genTimeout = setTimeout(() => {
      setIsGenerating(false);
      const fullText = POST_DATA[activeFormat].caption;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setCaption(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 22);
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(genTimeout);
  }, [activeFormat]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]">
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-6px); opacity: 0.6; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease-out both; }
      `}</style>

      <div className="network-bg" aria-hidden="true" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-[#f6faf7]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white shadow-lg shadow-emerald-500/25">M</span>
            <span className="text-base font-semibold tracking-tight">MASI IA</span>
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#18bf62] px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#12a955]"
            href="/#acesso"
          >
            Solicitar acesso
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-kicker">// do briefing ao feed — sem você precisar fazer nada</p>
          <h1 className="section-title mt-4 max-w-2xl">
            Você imaginou ter um post pronto, com copy, arte e legenda, publicado no seu feed sem abrir uma única ferramenta?
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-800">
            Na masIA, isso já é o dia a dia de centenas de empresários.
          </p>
          <p className="section-copy">
            A IA de conteúdo escreve no estilo da sua marca e publica direto nas redes. Sem exportar, sem aprovar cada peça, sem depender de ninguém.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#12a955]"
              href="/#acesso"
            >
              Solicitar acesso
            </Link>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-7 text-sm font-semibold text-slate-800 transition hover:bg-white"
              href="#demo"
            >
              Ver demonstração →
            </a>
          </div>
        </div>

        {/* Live post preview */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {FORMATS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFormat(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeFormat === f
                    ? 'bg-[#18bf62] text-white shadow-md shadow-emerald-500/20'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <PostMockup format={activeFormat} caption={caption} isGenerating={isGenerating} />
          <p className="text-xs text-slate-400">
            {isGenerating ? '⚡ Gerando conteúdo...' : '✓ Pronto para publicar'}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-emerald-950/10 bg-white/58 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center px-6 py-8 text-center">
              <p className="text-4xl font-semibold text-[#18bf62]">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-[#102019] py-24 text-white" id="demo">
        <div className="network-bg-dark" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="section-kicker text-emerald-300">Como funciona</p>
            <h2 className="section-title mx-auto max-w-2xl text-white">
              Do briefing ao feed em três etapas automáticas.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <article
                key={step.num}
                className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-3xl text-emerald-400">{step.icon}</span>
                  <span className="text-xs font-bold text-emerald-500">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/72">{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-emerald-600 md:block">→</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features + closing quote */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="section-kicker">O que ela faz por você</p>
            <div className="mt-6 grid gap-3">
              {FEATURES.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-white/72 px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-white"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-[#18bf62]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-emerald-950/10 bg-[#f0faf4] p-8">
              <p className="text-2xl font-semibold leading-snug text-slate-900">
                "Você define a estratégia. Ela executa."
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                A IA de conteúdo da masIA escreve seu conteúdo no estilo da sua marca, cria as artes e publica direto nas redes sociais — de forma integrada, sem exportar, sem aprovar cada peça, sem depender de ninguém.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-950/10 bg-white/72 p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-800">
                Enquanto você fecha uma venda, a sua presença digital já está sendo construída.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-emerald-100" />
                <span className="text-xl text-emerald-500">◉</span>
                <div className="h-px flex-1 bg-emerald-100" />
              </div>
            </div>
            <Link
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white"
              href="#acesso-cta"
            >
              Ver exemplo de post gerado →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8" id="acesso-cta">
        <div className="overflow-hidden rounded-[32px] bg-[#102019] px-6 py-14 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="section-kicker text-emerald-300">Acesso</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Sua marca presente. Todos os dias. Sem depender de ninguém.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/72">
                Solicite acesso à MASI IA e veja a IA de conteúdo trabalhando pela sua marca enquanto você cuida do que importa.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <Link
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#18bf62] px-7 text-sm font-semibold text-white transition hover:bg-[#12a955]"
                href="/#acesso"
              >
                Solicitar acesso à MASI IA
              </Link>
              <p className="mt-4 text-center text-xs leading-5 text-emerald-50/55">
                Para empresários que querem presença digital sem precisar abrir uma ferramenta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-950/10 px-5 py-8 text-sm text-slate-500 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>MASI IA · Mentoria empresarial com inteligência artificial</span>
          <Link href="/">← Voltar ao site</Link>
        </div>
      </footer>
    </main>
  );
}
