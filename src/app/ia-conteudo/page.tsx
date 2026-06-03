'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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

const CAROUSEL_SLIDES = [
  {
    type: 'cover' as const,
    text: 'O que ela faz por você?',
    sub: 'A IA de conteúdo da masIA',
  },
  { type: 'item' as const, num: '01', text: 'Escreve o texto e a copy de cada post' },
  { type: 'item' as const, num: '02', text: 'Cria o carrossel com design no padrão da sua marca' },
  { type: 'item' as const, num: '03', text: 'Gera a arte para feed, stories e anúncios' },
  { type: 'item' as const, num: '04', text: 'Publica de forma integrada nas suas redes sociais' },
  { type: 'item' as const, num: '05', text: 'Analisa performance e sugere a próxima pauta' },
  {
    type: 'closing' as const,
    text: 'Enquanto você fecha uma venda, a sua presença digital já está sendo construída.',
  },
];

// ─── Carousel Mockup ──────────────────────────────────────────────────────────

function CarouselMockup({ caption, isGenerating }: { caption: string; isGenerating: boolean }) {
  const [slide, setSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = CAROUSEL_SLIDES.length;

  const goTo = (i: number) => setSlide(Math.max(0, Math.min(total - 1, i)));

  const onDragStart = (x: number) => { dragStartX.current = x; setDragging(true); };
  const onDragMove  = (x: number) => { if (dragging) setDragOffset(x - dragStartX.current); };
  const onDragEnd   = (x: number) => {
    const delta = dragStartX.current - x;
    if (delta > 50) goTo(slide + 1);
    else if (delta < -50) goTo(slide - 1);
    setDragOffset(0);
    setDragging(false);
  };

  const cellStyle: React.CSSProperties = {
    flex: '0 0 100%', minWidth: '100%', height: '100%',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '28px 24px', textAlign: 'center',
  };

  return (
    <div className="mx-auto max-w-[340px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/12">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5">
        <div className="grid size-7 shrink-0 place-items-center rounded-full bg-[#18bf62] text-[10px] font-bold text-white">MA</div>
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-900">suamarca</p>
          <p className="text-[9px] text-slate-400">agora mesmo</p>
        </div>
        <span className="text-xs text-slate-300">•••</span>
      </div>

      {/* Slide area */}
      <div
        className="relative aspect-square select-none overflow-hidden"
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
        onMouseDown={e => onDragStart(e.clientX)}
        onMouseMove={e => onDragMove(e.clientX)}
        onMouseUp={e => onDragEnd(e.clientX)}
        onMouseLeave={() => { if (dragging) { setDragOffset(0); setDragging(false); } }}
        onTouchStart={e => onDragStart(e.touches[0].clientX)}
        onTouchMove={e => { e.preventDefault(); onDragMove(e.touches[0].clientX); }}
        onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
      >
        {/* Sliding track — all slides in a row */}
        <div style={{
          display: 'flex', width: '100%', height: '100%',
          transform: `translateX(calc(${-slide * 100}% + ${dragOffset}px))`,
          transition: dragging ? 'none' : 'transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
        }}>
          {/* Cover */}
          <div style={{ ...cellStyle, background: 'linear-gradient(135deg, #0b2010 0%, #18bf62 100%)' }}>
            <div style={{ position: 'relative', width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '2px solid #afff00', boxShadow: '0 7px 25px #afff0055, 0 0 0 4px #afff0030', marginBottom: 16, flexShrink: 0 }}>
              <Image src="/images/agentes-nobg/Designer.png" alt="Designer IA" width={121} height={121} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, calc(-50% + 5px)) scale(1.1)', objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', marginBottom: 10, textTransform: 'uppercase' }}>A IA de conteúdo da masIA</span>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.18, letterSpacing: '-0.02em' }}>O que ela faz por você?</p>
            <div style={{ marginTop: 16, width: 32, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.4)' }} />
          </div>
          {/* Items */}
          {CAROUSEL_SLIDES.filter(s => s.type === 'item').map(s => (
            <div key={s.num} style={{ ...cellStyle, background: '#0f1e13' }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: 'rgba(24,191,98,0.18)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 16 }}>{s.num}</span>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{s.text}</p>
              <div style={{ marginTop: 20, width: 24, height: 2, borderRadius: 99, background: '#18bf62' }} />
            </div>
          ))}
          {/* Closing */}
          <div style={{ ...cellStyle, background: 'linear-gradient(135deg, #18bf62 0%, #0d9848 100%)' }}>
            <span style={{ fontSize: 28, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>"</span>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.45, letterSpacing: '-0.01em' }}>
              {CAROUSEL_SLIDES.find(s => s.type === 'closing')?.text}
            </p>
          </div>
        </div>

        {/* Generating overlay */}
        {isGenerating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30 backdrop-blur-sm">
            <div className="flex gap-1.5">
              {[0,1,2].map(i => <span key={i} className="size-2.5 rounded-full bg-white" style={{ animation: `bounce 0.8s ease-in-out ${i * 0.16}s infinite` }} />)}
            </div>
            <p className="text-xs font-semibold text-white">Gerando carrossel...</p>
          </div>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
          {Array.from({ length: total }, (_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === slide ? 16 : 6, height: 6, borderRadius: 99, background: i === slide ? '#fff' : 'rgba(255,255,255,0.45)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0 }} />
          ))}
        </div>

        {/* Counter */}
        <div style={{ position: 'absolute', top: 10, right: 12, background: 'rgba(0,0,0,0.45)', borderRadius: 99, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: '#fff' }}>
          {slide + 1}/{total}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3">
        <div className="mb-2 flex items-center gap-3">
          {/* Like */}
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          {/* Comment */}
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {/* Send/Share */}
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          {/* Save */}
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto"><polygon points="19 21 12 16 5 21 5 3 19 3"/></svg>
        </div>
        <p className="text-[11px] font-semibold text-slate-800">2.847 curtidas</p>
        <div className="mt-1 min-h-[48px] text-[11px] leading-[1.55] text-slate-700">
          {isGenerating ? (
            <span className="italic text-slate-400">Gerando copy...</span>
          ) : (
            <><strong>suamarca</strong>{' '}{caption}<span className="animate-pulse">|</span></>
          )}
        </div>
      </div>
    </div>
  );
}

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
    }, 4000);
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

        {/* Live carousel preview */}
        <div className="flex flex-col items-center gap-4">
          <CarouselMockup caption={caption} isGenerating={isGenerating} />
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
