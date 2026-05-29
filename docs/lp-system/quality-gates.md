# Quality Gates da LP

Use esta lista antes de considerar qualquer versao da LP pronta.

## Gate 1: Clareza em 5 segundos

A primeira dobra precisa responder:

- O que e?
- Para quem e?
- Qual problema resolve?
- Qual e o proximo passo?

Resultado esperado:

> A MASI IA e uma plataforma de mentoria/aceleracao empresarial com IA que diagnostica a empresa, organiza prioridades e acompanha a execucao.

## Gate 2: Posicionamento correto

A pagina deve vender:

- mentoria empresarial com IA;
- aceleracao com metodo MASI;
- diagnostico, OKRs, SWOT e acompanhamento;
- agentes especializados;
- inteligencia de mercado e automacoes.

Nao deve vender:

- curso de IA;
- ferramenta de prompts;
- chatbot generico;
- consultoria humana tradicional disfarçada;
- automacao magica que toma decisoes pelo empresario.

## Gate 3: Prova concreta

Cada promessa importante precisa de uma prova:

- Diagnostico: print do Raio-X e Score MASI.
- Agentes trabalhando: print do Meu Dia/logs.
- Mercado: print do Sentinela.
- Execucao: print de Acoes Sugeridas.
- Rotina recorrente: print de Automacoes.

## Gate 4: Conversao

- Um CTA principal.
- CTA visivel no hero.
- CTA repetido apos blocos decisivos.
- Copy do CTA orientada a acao.
- Sem links concorrentes desnecessarios.
- Formulario ou aplicacao com baixa friccao quando for criado.

## Gate 5: Objecoes

A LP precisa responder:

- Isso e uma plataforma, mentoria ou consultoria?
- Como funciona na pratica?
- Quem toma as decisoes?
- O que acontece depois do diagnostico?
- Preciso entender de IA?
- Serve para qual tipo de empresa?
- Quanto tempo leva para configurar?
- Meus dados ficam sob controle?

## Gate 6: Escaneabilidade

- Titulos autoexplicativos.
- Paragrafos curtos.
- Bullets com beneficios concretos.
- Numeros e labels quando ajudarem.
- Prints com legenda clara.
- Nada depende de leitura longa para fazer sentido.

## Gate 7: Visual

- Usar fundo claro e sinais visuais do produto.
- Evitar visual SaaS escuro generico.
- Evitar gradientes roxos dominantes.
- Evitar cards dentro de cards sem necessidade.
- Usar screenshots reais com enquadramento legivel.
- Garantir que texto nao sobreponha imagens.

## Gate 8: Tecnico

Antes de finalizar:

- `npm run lint`
- `npm run build`
- consultar docs locais em `node_modules/next/dist/docs/` antes de usar APIs especificas do framework;
- verificar desktop e mobile;
- verificar console;
- checar imagens;
- checar contraste basico;
- checar tempo de carregamento razoavel.

## Gate 9: SEO e publicacao

- Um unico H1.
- Metadata clara no `layout.tsx`.
- Titulo e descricao coerentes com a oferta.
- Open Graph quando a versao estiver proxima de publicacao.
- Imagens com tamanho adequado.
- Sem dependencia pesada para efeito simples.
- CTA final testado.
