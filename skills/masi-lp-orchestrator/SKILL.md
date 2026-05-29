---
name: masi-lp-orchestrator
description: Orquestra a criacao, revisao e evolucao da landing page da MASI IA. Use quando Codex precisar transformar contexto do produto MASI IA em estrategia de LP, copy, arquitetura de secoes, direcao visual, implementacao Next.js, QA de conversao, acessibilidade, performance e iteracoes com agentes especialistas.
---

# MASI LP Orchestrator

## Overview

Use esta skill para atuar como orquestrador da LP da MASI IA. O objetivo e delegar pesquisa, copy, UX, design, frontend e QA a agentes especializados, sintetizar as decisoes e so entao implementar ou revisar a pagina.

## Fontes locais

Antes de qualquer decisao importante, leia:

- `contexto-masi-ia.md`: entendimento do produto, telas, agentes e copy bruta.
- `docs/lp-system/orchestrator.md`: sistema operacional de criacao da LP.
- `docs/lp-system/quality-gates.md`: criterios de aprovacao.
- `docs/lp-system/agent-briefs.md`: prompts e responsabilidades dos agentes.

Use os prints em `referencias-masi/` como prova visual do produto real.

## Modelo de trabalho

Atue como orquestrador, nao como executor solitario.

1. Enquadre o objetivo da rodada: estrategia, copy, visual, implementacao ou revisao.
2. Delegue subtarefas independentes quando houver trabalho paralelo real.
3. Integre os resultados em uma decisao unica.
4. Aplique quality gates antes de editar codigo.
5. Implemente em Next.js apenas depois que narrativa e estrutura estiverem claras.
6. Consulte docs locais em `node_modules/next/dist/docs/` antes de usar APIs ou padroes especificos do Next.js.
7. Verifique com lint, build e browser quando houver UI.

## Agentes padrao

- Estrategista de Oferta: define promessa, publico, dores, categoria e objecoes.
- Analista de Produto MASI: extrai valor das telas, agentes, Diagnostico MASI, Sentinela, OKRs e automacoes.
- Copywriter de Conversao: escreve headline, subheadline, secoes, CTAs, FAQs e microcopy.
- Arquiteto UX/CRO: define ordem das secoes, hierarquia, friccao, prova e fluxo de conversao.
- Diretor Visual: traduz os prints em linguagem visual da LP sem copiar a interface operacional.
- Frontend Engineer: implementa em Next.js/React/Tailwind seguindo o design aprovado.
- QA de Conversao: revisa clareza, objecoes, CTAs, prova, escaneabilidade e consistencia.
- QA Tecnico: revisa responsividade, acessibilidade, performance, lint, build e erros de console.
- Performance/SEO: revisa metadata, headings, imagens, JS desnecessario e criterios basicos de publicacao.

## Quality Gates obrigatorios

Nao considere a LP pronta se qualquer item falhar:

- O hero explica em 5 segundos o que e, para quem e qual o proximo passo.
- A LP vende "mentoria/aceleracao empresarial com IA", nao "curso de IA" nem "chatbot".
- O fluxo mostra diagnostico -> recomendacoes -> aprovacao -> tarefas/execucao.
- Ha prova visual real da plataforma.
- O CTA principal e unico e repetido com consistencia.
- Objeções principais foram respondidas: o que e, como funciona, quem decide, tempo, dados, acesso e valor.
- A linguagem e empresarial, clara e sem prometer automacao magica.
- Mobile e desktop nao tem texto quebrado, sobreposicao ou UI confusa.
- Existe um unico H1, metadata adequada e imagens dimensionadas.
- `npm run lint` e `npm run build` passam antes de finalizar.

## Direcao de posicionamento

Promessa base:

> A mentoria empresarial com IA que transforma diagnostico em execucao.

Proposta base:

> A MASI IA aplica o metodo MASI para analisar sua empresa, organizar prioridades, criar OKRs e acompanhar o crescimento com agentes especializados.

Evite:

- "A IA resolve tudo sozinha."
- "Chatbot para empresarios."
- "Curso de prompts."
- "Automacao generica."

Prefira:

- "A IA analisa. Voce aprova. A empresa executa com clareza."
- "Um time de agentes monitorando oportunidades, gaps e proximas acoes."
- "Diagnostico, OKRs, SWOT, scorecards, automacoes e inteligencia de mercado em um so ambiente."
