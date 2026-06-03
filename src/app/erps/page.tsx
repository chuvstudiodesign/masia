'use client';

import { useEffect, useRef } from 'react';
import { Space_Grotesk } from 'next/font/google';

const sg = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

const LAYER_COUNT = 14;
const TOTAL_DEPTH = 20;
const CHAMFER     = 27;
const CR          = 7;

function buildPath(W: number, H: number): string {
  const R = 36, C = CHAMFER, r = CR, d = r * Math.SQRT1_2;
  return [
    `M ${C + r} 0`,
    `L ${W - R} 0`,    `Q ${W} 0 ${W} ${R}`,
    `L ${W} ${H - R}`, `Q ${W} ${H} ${W - R} ${H}`,
    `L ${R} ${H}`,     `Q 0 ${H} 0 ${H - R}`,
    `L 0 ${C + r}`,
    `Q 0 ${C} ${d} ${C - d}`,
    `L ${C - d} ${d}`,
    `Q ${C} 0 ${C + r} 0`,
    'Z',
  ].join(' ');
}

function layerBg(i: number) {
  const t = i / (LAYER_COUNT - 1);
  const a = (0.90 - t * 0.30).toFixed(2);
  return `
    linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 50%),
    linear-gradient(to bottom, rgba(200,210,206,${a}) 0%, rgba(182,194,190,${a}) 100%)
  `;
}

let _tx = 0, _ty = 0;

interface CardProps {
  label: string;
  floatPhase?: number;
  baseRotY?: number;
}

function GlassCard({ label, floatPhase = 0, baseRotY = 10 }: CardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);
  const cx      = useRef(0);
  const cy      = useRef(0);
  const t0      = useRef<number | null>(null);

  useEffect(() => {
    const updateClip = () => {
      if (!wrapRef.current) return;
      // offsetWidth/Height = pre-transform layout size, unaffected by ancestor scale
      const W = wrapRef.current.offsetWidth;
      const H = wrapRef.current.offsetHeight;
      if (W && H) wrapRef.current.style.setProperty('--clip-path', `path('${buildPath(W, H)}')`);
    };
    updateClip();
    const ro = new ResizeObserver(updateClip);
    if (wrapRef.current) ro.observe(wrapRef.current);

    const tick = (t: number) => {
      if (!t0.current) t0.current = t;
      const s = (t - t0.current) / 1000;

      cx.current += (_tx - cx.current) * 0.055;
      cy.current += (_ty - cy.current) * 0.055;

      const floatY    = Math.sin(s * 0.72 + floatPhase) * 13;
      const floatRoll = Math.sin(s * 0.52 + floatPhase) * 0.5;

      if (wrapRef.current) {
        wrapRef.current.style.transform = `
          rotateX(${cy.current}deg)
          rotateY(${cx.current + baseRotY}deg)
          rotateZ(${floatRoll}deg)
          translateY(${floatY}px)
        `;
        const sx = 28 + (cx.current / 26) * 44;
        const sy = 16 + (cy.current / 16) * 34;
        wrapRef.current.style.setProperty('--sx', `${sx}%`);
        wrapRef.current.style.setProperty('--sy', `${sy}%`);
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [floatPhase, baseRotY]);

  return (
    <div
      ref={wrapRef}
      className={sg.className}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      } as React.CSSProperties}
    >
      {Array.from({ length: LAYER_COUNT }, (_, i) => {
        const isFront = i >= LAYER_COUNT - 5;
        return (
          <div key={i} style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 36,
            background: layerBg(i),
            clipPath: 'var(--clip-path)',
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
            backdropFilter: isFront ? 'blur(6px) saturate(1.8)' : undefined,
            WebkitBackdropFilter: isFront ? 'blur(6px) saturate(1.8)' : undefined,
            transform: `translateZ(${(i - LAYER_COUNT) * (TOTAL_DEPTH / LAYER_COUNT)}px)`,
            pointerEvents: 'none',
          }} />
        );
      })}

      <div style={{
        position: 'relative',
        padding: '17px 52px',
        minHeight: 99,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 36,
        clipPath: 'var(--clip-path)',
        transform: 'translateZ(0px)',
        background: `linear-gradient(135deg,
          rgba(255,255,255,0.72) 0%,
          rgba(255,255,255,0.38) 40%,
          rgba(255,255,255,0.22) 100%
        )`,
        backdropFilter: 'blur(38px) saturate(2.1) brightness(1.07)',
        WebkitBackdropFilter: 'blur(38px) saturate(2.1) brightness(1.07)',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.82), inset 0 2px 0 rgba(255,255,255,0.92)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 65% 65% at 92% 8%,  rgba(33,197,94,0.03) 0%, transparent 100%),
            radial-gradient(ellipse 65% 65% at 2%  92%, rgba(33,197,94,0.03) 0%, transparent 100%)
          `,
        }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: `radial-gradient(
            ellipse 82% 55% at var(--sx, 28%) var(--sy, 16%),
            rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.15) 45%, transparent 70%
          )`,
        }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit',
          mixBlendMode: 'screen', pointerEvents: 'none',
          background: `linear-gradient(108deg,
            rgba(180,200,255,0.18) 0%, rgba(255,180,200,0.12) 35%,
            rgba(180,255,220,0.1) 65%, rgba(220,180,255,0.14) 100%
          )`,
        }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.05) 100%)',
        }} />
        <span style={{
          fontSize: '2.45rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          position: 'relative',
          color: '#21C55E',
          textShadow: '0 1px 0 rgba(255,255,255,0.6)',
          display: 'block',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function ErpsPage() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      _tx =  (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2) * 26;
      _ty = -(e.clientY - window.innerHeight / 2) / (window.innerHeight / 2) * 16;
    };
    const onLeave = () => { _tx = 0; _ty = 0; };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#ECECEC',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      perspective: '1200px',
      perspectiveOrigin: '50% 50%',
    }}>

      <div className="erps-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <div style={{ display: 'flex', gap: 33, alignItems: 'center' }}>
          <GlassCard label="ERPs"  floatPhase={0}   baseRotY={10} />
          <GlassCard label="CRMs"  floatPhase={1.8} baseRotY={-10} />
        </div>
        <GlassCard label="Checkout" floatPhase={3.4} baseRotY={10} />
      </div>
    </div>
  );
}
