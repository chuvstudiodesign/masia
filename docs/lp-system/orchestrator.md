# Sistema de Orquestracao da LP MASI IA

Este e o sistema interno para criar a landing page da MASI IA com qualidade de estrategia, copy, design, implementacao e verificacao.

## Principio central

O agente principal atua como orquestrador. Ele nao tenta resolver tudo sozinho quando a tarefa tem varias disciplinas. Ele enquadra o problema, delega para especialistas, integra as respostas, decide o caminho e so entao executa.

O objetivo nao e criar uma pagina bonita rapidamente. O objetivo e criar uma LP clara, persuasiva, tecnicamente solida e fiel ao produto real.

## Referencias externas usadas

- Anthropic recomenda sistemas agenticos simples e composaveis, com padroes como orquestrador-workers e evaluator-optimizer para tarefas complexas e iterativas: https://www.anthropic.com/engineering/building-effective-agents
- Unbounce recomenda uma LP focada em um objetivo, CTA visivel, prova social, produto em acao e poucas distracoes: https://unbounce.com/landing-page-articles/landing-page-best-practices/
- Unbounce tambem descreve os elementos essenciais de uma landing page: proposta unica de valor, hero, beneficios, prova social e CTA claro: https://unbounce.com/landing-pages/elements-of-a-winning-landing-page/
- Baymard reforca que decisoes de UX devem ser baseadas em pesquisa e que percepcao de confianca depende muito da apresentacao visual: https://baymard.com/ e https://baymard.com/blog/perceived-security-of-payment-form

## Fontes internas obrigatorias

- `contexto-masi-ia.md`
- `referencias-masi/`
- `docs/lp-system/agent-briefs.md`
- `docs/lp-system/quality-gates.md`
- `docs/lp-system/page-blueprint.md`

## Fluxo padrao

1. Contexto
   - Ler o documento de contexto.
   - Conferir prints relevantes.
   - Identificar o objetivo da rodada.

2. Decomposicao
   - Separar o trabalho em estrategia, produto, copy, UX, visual, codigo e QA.
   - Delegar apenas tarefas independentes e bem definidas.

3. Sintese
   - Comparar respostas dos agentes.
   - Remover redundancia.
   - Resolver conflitos.
   - Produzir uma decisao unica.

4. Producao
   - Criar ou atualizar copy.
   - Criar arquitetura da pagina.
   - Implementar visual e componentes.
   - Usar prints reais quando fizer sentido.

5. Validacao
   - Rodar quality gates.
   - Rodar lint/build.
   - Verificar visualmente em desktop e mobile quando houver UI.

## Handoffs

Cada transferencia entre agentes deve usar este formato:

```text
Contexto recebido:
Decisoes tomadas:
Arquivos relevantes:
Pendencias:
Riscos:
Proximo agente responsavel:
```

Exemplo Copy -> UX:

```text
Contexto recebido:
LP para empresarios com empresas em operacao, foco em diagnostico, OKRs e execucao.

Decisoes tomadas:
Promessa principal: "A mentoria empresarial com IA que transforma diagnostico em execucao".
CTA principal: "Solicitar acesso".

Pendencias:
Definir destino do CTA: formulario, WhatsApp, email, rota interna ou ferramenta externa.

Riscos:
Copy parecer abstrata se nao usar prints e exemplos reais.

Proximo agente responsavel:
Arquiteto UX/CRO deve ordenar secoes para provar produto antes da autoridade institucional.
```

## Padroes de delegacao

Use orquestrador-workers quando:

- a tarefa envolve muitas disciplinas;
- a melhor estrutura ainda nao esta obvia;
- ha varias telas/provas para interpretar;
- copy e UX precisam evoluir juntas.

Use evaluator-optimizer quando:

- ja existe uma versao de copy ou UI;
- os criterios de qualidade estao claros;
- uma revisao adversarial pode melhorar o resultado;
- a pagina precisa de polimento final.

## Regra de integracao

Agentes sugerem. O orquestrador decide.

Nenhum output de agente entra direto na pagina sem:

- checagem contra o posicionamento da MASI IA;
- consistencia com os prints;
- adequacao ao publico empresario;
- revisao de clareza, promessa e prova.

## Sequencia recomendada para esta LP

1. Diagnostico de oferta e narrativa.
2. Wireframe textual da LP.
3. Copy completa por secao.
4. Direcao visual baseada nos prints.
5. Implementacao Next.js.
6. QA de conversao.
7. QA tecnico e responsivo.
8. Performance/SEO.
9. Ajustes finais.
