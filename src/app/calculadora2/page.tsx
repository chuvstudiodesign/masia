'use client';

import { useState } from 'react';
import Image from 'next/image';

const MASIA_PRICE = 3000;

const specialists = [
  { id: 'social',       name: 'Social Media',          cost: 6000,  image: '/images/agentes-nobg/Farol.png',               color: '#ec4899' },
  { id: 'designer',     name: 'Designer',               cost: 10000, image: '/images/agentes-nobg/Designer.png',            color: '#a855f7' },
  { id: 'copy',         name: 'Copywriter',             cost: 7000,  image: '/images/agentes-nobg/Briefer.png',             color: '#f59e0b' },
  { id: 'bi',           name: 'Analista de BI',         cost: 12000, image: '/images/agentes-nobg/Pulse.png',               color: '#06b6d4' },
  { id: 'tendencias',   name: 'Analista de Tendências', cost: 9000,  image: '/images/agentes-nobg/Sentinela-tendencias.png',color: '#8B5CF6' },
  { id: 'estrategista', name: 'Estrategista',           cost: 20000, image: '/images/agentes-nobg/Stratego.png',            color: '#16a34a' },
  { id: 'financeiro',   name: 'Gestor Financeiro',      cost: 12000, image: '/images/agentes-nobg/Cifra-gestora.png',       color: '#10b981' },
  { id: 'sdr',          name: 'SDR',                    cost: 10000, image: '/images/agentes-nobg/Closer.png',              color: '#7c3aed' },
];

export default function Calculadora2Page() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['social']));

  const toggle = (id: string) =>
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const totalMarket = specialists
    .filter(s => selected.has(s.id))
    .reduce((sum, s) => sum + s.cost, 0);

  const savings    = Math.max(0, totalMarket - MASIA_PRICE);
  const hasSelection = selected.size > 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]">
      <div className="network-bg" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {specialists.map(s => {
            const active = selected.has(s.id);
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                style={{
                  border: `2px solid ${active ? s.color : 'rgba(0,0,0,0.08)'}`,
                  background: active ? `${s.color}10` : '#fff',
                  boxShadow: active ? `0 4px 24px ${s.color}30` : '0 2px 8px rgba(0,0,0,0.05)',
                  borderRadius: 20,
                  padding: '18px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%', overflow: 'hidden',
                    background: '#fff', border: `2px solid ${s.color}40`,
                    boxShadow: `0 4px 12px ${s.color}25`,
                    position: 'relative', flexShrink: 0,
                  }}>
                    <Image src={s.image} alt={s.name} width={56} height={56}
                      style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -46%)', objectFit: 'contain', width: '110%', height: '110%' }}
                    />
                  </div>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                    border: active ? 'none' : '1.5px solid rgba(0,0,0,0.18)',
                    background: active ? s.color : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.18s',
                  }}>
                    {active && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.2 }}>{s.name}</p>
                  <p style={{ fontSize: 12, color: active ? s.color : '#94a3b8', margin: '4px 0 0', fontWeight: 600, transition: 'color 0.18s' }}>
                    R$ {s.cost.toLocaleString('pt-BR')}/mês
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Summary */}
        <div
          className="mt-8 overflow-hidden rounded-[24px]"
          style={{
            background: hasSelection ? '#0f2415' : '#fff',
            border: hasSelection ? 'none' : '1px solid rgba(0,0,0,0.08)',
            transition: 'background 0.3s',
          }}
        >
          {!hasSelection ? (
            <div className="flex items-center justify-center gap-2 py-10 text-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-slate-400">
                <path d="M7 11V3M7 3L3 7M7 3l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-slate-400">Selecione os perfis acima para ver a comparação</p>
            </div>
          ) : (
            <div className="grid gap-0 sm:grid-cols-3">
              {/* Market */}
              <div style={{ padding: '32px 28px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 10 }}>No mercado</p>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  R$ {totalMarket.toLocaleString('pt-BR')}
                </p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>por mês</p>
              </div>

              {/* masIA */}
              <div style={{ padding: '32px 28px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'rgba(24,191,98,0.08)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#18bf62', textTransform: 'uppercase', marginBottom: 10 }}>Com a masIA</p>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#18bf62', letterSpacing: '-0.03em', lineHeight: 1 }}>R$ 3.000</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>9 especialistas / mês</p>
              </div>

              {/* Savings — mesma cor que masIA */}
              <div style={{ padding: '32px 28px', background: 'rgba(24,191,98,0.08)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#18bf62', textTransform: 'uppercase', marginBottom: 10 }}>Economia mensal</p>
                <p style={{ fontSize: 28, fontWeight: 800, color: '#18bf62', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  R$ {savings.toLocaleString('pt-BR')}
                </p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                  {savings > 0 ? `${Math.round((savings / totalMarket) * 100)}% de economia` : 'por mês'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Highlight box */}
        <div className="mt-5 rounded-[20px] border border-emerald-950/10 bg-[#f0faf4] px-6 py-5">
          <p className="text-sm font-semibold leading-6 text-slate-700">
            <span className="mr-2 font-bold text-emerald-700">Com a masIA,</span>
            você tem 9 especialistas trabalhando com você toda semana, por R$ 3.000/mês. Menos do que o custo de um único profissional especializado.
          </p>
        </div>

      </div>
    </main>
  );
}
