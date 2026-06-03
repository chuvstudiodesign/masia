'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const CAROUSEL_SLIDES = [
  { type: 'cover' as const, text: 'O que ela faz por você?', sub: 'A IA de conteúdo da masIA' },
  { type: 'item' as const, num: '01', text: 'Escreve o texto e a copy de cada post' },
  { type: 'item' as const, num: '02', text: 'Cria o carrossel com design no padrão da sua marca' },
  { type: 'item' as const, num: '03', text: 'Gera a arte para feed, stories e anúncios' },
  { type: 'item' as const, num: '04', text: 'Publica de forma integrada nas suas redes sociais' },
  { type: 'item' as const, num: '05', text: 'Analisa performance e sugere a próxima pauta' },
  { type: 'closing' as const, text: 'Enquanto você fecha uma venda, a sua presença digital já está sendo construída.' },
];

export default function CarrosselPage() {
  const [slide, setSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);
  const [caption, setCaption] = useState('');
  const dragStartX = useRef(0);
  const total = CAROUSEL_SLIDES.length;
  const FULL_CAPTION = 'Você sabia que 87% dos empreendedores ainda criam conteúdo manualmente? Com a masIA, sua marca publica todos os dias — sem você precisar abrir uma única ferramenta. #MarketingDigital #IA #Empreendedorismo';

  useEffect(() => {
    const gen = setTimeout(() => {
      setIsGenerating(false);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setCaption(FULL_CAPTION.slice(0, i));
        if (i >= FULL_CAPTION.length) clearInterval(interval);
      }, 22);
      return () => clearInterval(interval);
    }, 4000);
    return () => clearTimeout(gen);
  }, []);

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
    <main style={{ width: '100vw', height: '100vh', background: '#ECECEC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0);opacity:1} 50%{transform:translateY(-6px);opacity:0.6} }`}</style>
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
          {/* Track */}
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
                {[0,1,2].map(i => (
                  <span key={i} className="size-2.5 rounded-full bg-white" style={{ animation: `bounce 0.8s ease-in-out ${i * 0.16}s infinite` }} />
                ))}
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
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto"><polygon points="19 21 12 16 5 21 5 3 19 3"/></svg>
          </div>
          <p className="text-[11px] font-semibold text-slate-800">2.847 curtidas</p>
          <div className="mt-1 text-[11px] leading-[1.55] text-slate-700" style={{ height: 78, overflow: 'hidden' }}>
            {isGenerating ? (
              <span className="italic text-slate-400">Gerando copy...</span>
            ) : (() => {
              const hi = caption.indexOf('#');
              const text = hi === -1 ? caption : caption.slice(0, hi);
              const tags = hi === -1 ? '' : caption.slice(hi);
              return <><strong>suamarca</strong>{' '}{text}{tags && <span style={{ color: '#18bf62' }}>{tags}</span>}<span className="animate-pulse">|</span></>;
            })()}
          </div>
        </div>
      </div>
      <p style={{ marginTop: 12, fontSize: 12, color: '#888', textAlign: 'center' }}>✓ A masIA já publica para você</p>
    </main>
  );
}
