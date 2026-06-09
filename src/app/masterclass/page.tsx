import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: 'variable' });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

const dores = [
  'Você toma decisões sem dados e fica na dúvida sobre se está realmente indo na direção certa',
  'Seu planejamento estratégico existe no papel, mas na prática ninguém acompanha a execução',
  'Você não tem visibilidade em tempo real para saber se suas metas estão sendo batidas ou não',
  'Sua equipe é pequena, as demandas crescem e não é viável contratar para cada função que falta',
  'Você passa mais tempo no operacional do que deveria e a estratégia fica sempre para depois',
];

const transformacoes = [
  'Como montar um planejamento com SWOT, OKRs e metas monitoradas semana a semana no trimestre',
  'Como deixar a intuição de lado e tomar decisões com base em dados, números e análises reais',
  'Como ter análise financeira, inteligência de mercado e marketing sem contratar mais',
  'Como sair do operacional e atuar no estratégico enquanto toda a estrutura trabalha por você',
  'Como ter visibilidade em tempo real de cada meta e tarefa sem precisar perguntar a ninguém',
];

export default function MasterclassPage() {
  return (
    <main className="min-h-screen bg-[#ECECEC] text-[#111827]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Dores */}
          <div style={{ background: '#0d1a10', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{
              padding: '28px 30px 18px',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span className={spaceGrotesk.className} style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#fff',
                WebkitTextStroke: '0.4px #fff',
              }}>
                O que você vive hoje
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '30px 30px 30px' }}>
              {dores.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 10,
                  padding: '13px 15px',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: '#EA580C',
                    border: '1.5px solid #F97316',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 1,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className={inter.className} style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: '#fff',
                    margin: 0,
                    fontWeight: 400,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transformação */}
          <div style={{
            background: 'linear-gradient(135deg, #144229, #1e5e3b)',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '28px 30px 18px',
              background: 'rgba(0,0,0,0.18)',
              borderBottom: '1px solid rgba(255,255,255,0.10)',
            }}>
              <span className={spaceGrotesk.className} style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#fff',
                WebkitTextStroke: '0.4px #fff',
              }}>
                O que você vai ter depois
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '30px 30px 30px' }}>
              {transformacoes.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.10)',
                  borderRadius: 10,
                  padding: '13px 15px',
                  border: '1px solid rgba(255,255,255,0.11)',
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: '#196e38',
                    border: '1.5px solid #2e9e56',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 1,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className={inter.className} style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: '#fff',
                    margin: 0,
                    fontWeight: 400,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
