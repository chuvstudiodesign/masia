import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA de Design e Conteúdo | MASI IA",
  description:
    "Do briefing ao feed sem você precisar fazer nada. A IA de conteúdo da masIA escreve, cria e publica direto nas suas redes sociais.",
};

const features = [
  "Escreve o texto e a copy de cada post",
  "Cria o carrossel com design no padrão da sua marca",
  "Gera a arte para feed, stories e anúncios",
  "Publica de forma integrada nas suas redes sociais",
  "Analisa performance e sugere a próxima pauta",
];

export default function IAConteudoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-[#111827]">
      <div className="network-bg" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-[#f6faf7]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center rounded-xl bg-[#18bf62] text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
              M
            </span>
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

      <section className="mx-auto w-full max-w-7xl px-5 pb-8 pt-20 sm:px-8">
        <p className="section-kicker">// do briefing ao feed — sem você precisar fazer nada</p>
        <h1 className="section-title mt-4 max-w-4xl">
          Você imaginou ter um post pronto, com copy, arte e legenda, publicado no seu feed sem você precisar abrir uma única ferramenta?
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-snug text-slate-800">
          Na masIA, isso já é o dia a dia de centenas de empresários.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="section-copy mt-0">
              A IA de conteúdo da masIA escreve seu conteúdo no estilo da sua
              marca e ainda publica direto nas suas redes sociais de forma
              integrada, sem precisar exportar, sem precisar aprovar cada peça,
              sem depender de ninguém.
            </p>
            <p className="mt-6 text-base font-semibold text-slate-800">
              Você define a estratégia. Ela executa.
            </p>
            <p className="mt-6 rounded-2xl border border-emerald-950/10 bg-[#f0faf4] px-5 py-4 text-sm leading-7 text-slate-600">
              Enquanto você fecha uma venda, a sua presença digital já está sendo construída.
            </p>
            <a
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white"
              href="/#acesso"
            >
              Ver exemplo de post gerado →
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              O que ela faz por você
            </p>
            <div className="grid gap-3">
              {features.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-white/72 px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                  key={item}
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-[#18bf62]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
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
