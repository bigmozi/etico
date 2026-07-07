# PRD v1 — Site Institucional Digital Ético

**Cliente:** Etico Digital / digital.ético
**Versão:** 1.0
**Status:** Rascunho para aprovação (checkpoint pré-HTML)
**Escopo desta fase:** Site institucional multi-página — Home, Sobre, Serviços & Cursos, Contato (LPs dedicadas de curso e integração Hotmart ficam para fase futura)

---

## 1. Visão Geral

> **Digital Ético** é uma legaltech de compliance digital recém-fundada por uma advogada e DPO certificada. Atua em dois eixos: **B2B** (compliance digital, DPO as a Service, governança de IA, resposta a incidentes) e **B2C/Educação** (cursos e capacitação em LGPD, ECA Digital, formação de profissionais de Marketing, RH, TI e Direito).
>
> Este é o **primeiro ativo digital próprio da marca**. A identidade visual já foi desenvolvida e aprovada (Newtab Comunicação, 2025/2026) — o site precisa materializar essa identidade e estabelecer autoridade institucional, gerar leads B2B qualificados via formulário/agendamento, e preparar o terreno (sem ainda vender) para os produtos educacionais que ganharão landing pages dedicadas numa fase futura.

**Objetivo estratégico:** lançar a presença digital institucional com credibilidade jurídica + modernidade digital + acolhimento humano (linha mestra do briefing de marca), convertendo visitantes B2B em conversas qualificadas e capturando interesse antecipado (lista de espera) para os cursos.

---

## 2. Contexto e Problema

Vivemos um momento de ruptura regulatória no Brasil (LGPD, Marco Civil da Internet, ECA Digital, Marco Regulatório da IA). A demanda por compliance digital cresce, mas a oferta do mercado é **"ou muito técnica e inacessível, ou genérica demais para gerar impacto real"** — é exatamente o vácuo que a Digital Ético existe para ocupar.

| Problema | Impacto |
|---|---|
| Empresa nova, sem presença digital própria | Não existe nenhum ponto de prova/credibilidade para conversão — toda a primeira impressão recai sobre o site |
| Identidade visual aprovada mas ainda não implementada em nenhum canal | Marca "dé / digital.ético" não está materializada — risco de inconsistência se o site nascer fora do padrão |
| Sem cases, clientes ou depoimentos reais (empresa nova) | Prova social tradicional não está disponível — credibilidade precisa vir de credenciais (DPO certificada), clareza de proposta e portfólio robusto |
| Conteúdo dos 2 cursos ainda não definido | LPs de curso ficam fora do escopo — institucional precisa "segurar" a comunicação dos produtos educacionais com uma seção teaser + captura de lista de espera |
| Reaproveitamento da instalação WordPress não confirmado | Risco de retrabalho técnico — esta PRD assume **instalação nova**, a confirmar antes da Fase 1 técnica |

---

## 3. Públicos-Alvo e Personas

Mapeamento extraído do briefing de marca da fundadora — cobre os dois universos (B2B e B2C) que a marca precisa endereçar com o mesmo grau de autoridade e acessibilidade.

### B2B — Organizações

| Persona | Descrição | Tensão central |
|---|---|---|
| **Tier 1 — Grandes Corporações** | +500 colaboradores, exposição regulatória alta, precisam de DPO e governança formal de dados | "Preciso de conformidade sólida e parceiro de longo prazo — mas uma legaltech nova gera desconfiança de porte" |
| **Tier 2 — Fintechs & Startups** | Crescimento rápido, regulação intensa (BACEN, CVM, ANPD), investidores exigindo due diligence | "Cresço rápido, preciso de agilidade — mas sem abrir mão de rigor jurídico" |
| **Tier 3 — PMEs** | Sabem que precisam de compliance, orçamento limitado, não sabem por onde começar | "Quero clareza, custo-benefício e implementação prática — sem juridiquês" |

### B2C — Pessoas Físicas

| Persona | Dor principal |
|---|---|
| **Profissionais de Marketing** | "Não sei se o que faço está de acordo com a LGPD e as normas digitais" |
| **Profissionais de RH** | "Preciso proteger a empresa e as pessoas, mas não tenho suporte técnico" |
| **Influenciadores Digitais** | "Não sabia que poderia ser responsabilizado" |
| **Profissionais de TI** | "Sei o que fazer tecnicamente, mas não sei o que a lei exige" |
| **Advogados** | "Meus clientes me perguntam sobre temas que preciso dominar melhor" |

### P0 do site institucional

⚠️ **Inferido, não confirmado pelo cliente** — entra na lista de pendências (Seção 12).

Proposta: **híbrido** — decisores B2B (principalmente Tier 2 e Tier 3, mais alinhados ao estágio inicial da empresa) **e** profissionais B2C avaliando credibilidade antes de considerar os cursos. Driver emocional primário: **autoridade acessível / credibilidade**.

P fora de foco principal nesta fase: Tier 1 (grandes corporações) — site institucional simples não sustenta ainda um processo de procurement robusto; pode ser endereçado quando houver cases reais.

---

## 4. Escopo

**Natureza do produto:** site institucional **multi-página** (4 páginas), responsivo, mobile-first, em **WordPress (instalação nova)**.

### Mapa do site

```
/                    Home (hero + teasers das demais páginas)
/sobre               Sobre (Quem Somos / Por que existimos / Missão, Visão, Valores / fundadora)
/servicos-e-cursos   Serviços & Cursos (Compliance & Governança / Educação & Capacitação + teaser de cursos)
/contato             Contato (formulário qualificado)
```

### Priorização

| Prioridade | Itens |
|---|---|
| **P0 (Go Live)** | 4 páginas (Home, Sobre, Serviços & Cursos, Contato), navegação fixa, footer institucional |
| **P1** | Seção de cursos dentro de Serviços & Cursos (teaser + captura de e-mail), selos de credenciais, Política de Privacidade / Termos de Uso (P1 alto — empresa de compliance sem política própria é uma contradição visível) |
| **P2** | Blog/Notícias, FAQ estendido para SEO/AIO |

### Fora do escopo desta fase

- LP1 e LP2 de cursos (estrutura persuasiva, botões de compra, área de bônus/vídeo)
- Integração com checkout Hotmart e pixels de rastreamento
- Estrutura multi-página completa (páginas dedicadas de Resultados, Blog, etc.)

Esses itens retornam ao roteiro quando o cliente definir o conteúdo real dos 2 cursos (Seção 12).

---

## 5. Sistema de Design

Identidade visual **já aprovada** (Newtab Comunicação) — esta seção adapta os tokens para web, sem alterar a direção criativa.

### Cores

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-azul-profundo` | Azul Profundo | `#001D49` | Fundos escuros (hero, footer), textos de destaque, marca |
| `--color-dourado` | Dourado | `#C6872A` | Accent — CTAs, ícones, itálico de destaque nos títulos |
| `--color-areia` | Areia | `#D3C4A8` | Seções alternadas, fundos leves |
| `--color-off-white` | Off-White (apoio) | `#FAF8F4` | Fundo base — direção sugerida no briefing original, hex a validar |
| `--color-quase-preto` | Quase Preto (apoio) | `#1C1917` | Texto principal — direção sugerida no briefing original, hex a validar |

⚠️ Apenas Azul Profundo, Dourado e Areia constam na identidade final aprovada. Off-White e Quase Preto são direções complementares do briefing original — uso proposto aqui, sujeito a validação da fundadora.

**Evitar** (restrição explícita do briefing de marca): roxo/lilás + branco (estética genérica de legaltech), verde "compliance" (associado a concorrentes de posicionamento baixo).

### Tipografia

Família única: **Alexandria** (Google Fonts)

| Peso | Uso |
|---|---|
| Light (300) | Títulos editoriais (h1, h2) |
| Regular (400) | Corpo de texto, UI, labels |
| Bold (700) | Destaques, CTAs, wordmark ".ético" |

Padrão de destaque: itálico em Dourado para a palavra-chave de cada título de seção (ex.: "Quem somos *e por que existimos*", "Como queremos *ser percebidos*") — segue o padrão visual do próprio briefing de marca.

### Border radius

| Elemento | Raio |
|---|---|
| Cards / blocos de serviço | 8px |
| Botões / CTAs | pill (999px) |
| Imagens / molduras de destaque | 4px |

### Marca

- Assinatura preferencial (horizontal): mark "dé" (quadrado Azul Profundo, "dé" em Dourado) + wordmark "digital**.ético**" (digital em Azul Profundo, **.ético** em Dourado Bold)
- Assinatura secundária (vertical): mark sobre wordmark, centralizado

---

## 6. Arquitetura de Informação

### Navegação global (fixa)

`[dé digital.ético]` · Home · Sobre · Serviços & Cursos · Contato · **[Agendar Conversa]** (CTA pill, dourado)

### CTAs por página

| Página | CTA |
|---|---|
| Home | Primário: **"Agendar Conversa"** (hero) · teasers com link para Sobre, Serviços & Cursos e Contato |
| Sobre | Sem CTA direto — foco em autoridade/credibilidade |
| Serviços & Cursos — pilar Compliance & Governança | **"Solicitar Proposta"** → `/contato` |
| Serviços & Cursos — pilar Educação & Capacitação / teaser de cursos | **"Entrar na lista de espera"** → captura de e-mail |
| Contato | Formulário qualificado (segmento, tamanho da empresa, principal desafio) |

### Footer

Colunas: Sobre · Serviços · Contato/Redes (@digitaletico). Divisor. Rodapé com credencial principal (⚠️ CNPJ — pendência). Política de Privacidade / Termos.

---

## 7. UX e Conversão

**Tipo de negócio detectado:** híbrido — **B2B/Consultoria** (predominante nesta fase) + **Educação/Cursos** (modo teaser, sem conversão de venda ativa).

### Regras B2B/Consultoria aplicadas

- CTA primário único e consistente: **"Agendar Conversa"** (nunca "Entre em contato")
- Formulário com qualificação (segmento, porte, desafio principal)
- Âncora de credibilidade no hero: "Fundada por advogada e DPO certificada" + tagline **"compliance para um mundo conectado"**
- Seção de método/processo: "Como trabalhamos" — inspirada no valor **Parceria Genuína** ("não entregamos relatórios, construímos junto")
- Prova social: **não há clientes ainda** → substituída por selos de credenciais (DPO certificada, atuação em LGPD / ECA Digital / Marco da IA / BACEN-CVM)
- Sem progress bar, sem contador social, sem tabs de valor recorrente

### Componentes universais

- Selos de confiança junto ao CTA (DPO certificada · Salvador-BA · LGPD)
- Âncora de credibilidade no hero (ver acima)
- **Depoimentos:** ⚠️ inexistentes (empresa nova) — **omitidos do v1–v3**. Não usar depoimentos fictícios: conflitaria diretamente com o posicionamento "Confiança construída" e "Ética como Estratégia"
- **Urgência:** não aplicável nesta fase (sem cursos/prazos reais à venda) — omitida para não contradizer "Confiança construída ≠ Urgência alarmista"

### Benchmark (etapa futura, pós-v3)

Referências já indicadas pelo próprio cliente no briefing de marca:
- **LegalTech Premium** — Ironclad, Clio (paletas escuras sofisticadas, tipografia editorial, sensação "boutique jurídica")
- **Consultoria Estratégica** — McKinsey, Bain digital (estrutura editorial, hierarquia visual clara, uso de espaço negativo)
- **EdTech de Qualidade** — Coursera premium (acessível sem ser infantil, visual que incentiva aprendizado)

---

## 8. Especificação por Página

### Home (`/`)

- **Hero**: headline adaptada do posicionamento central — *"A legaltech que você finalmente entende"*; subheadline com a tagline **"compliance para um mundo conectado"** + frase de ponte B2B/B2C; selo de credencial "Fundada por advogada e DPO certificada"; CTA primário **Agendar Conversa** (pill, dourado). Visual: fundo Azul Profundo, Alexandria Light em grande escala, detalhe dourado em itálico
- **Teaser "Quem Somos"**: resumo curto da missão/propósito + link "Conhecer nossa história" → `/sobre`
- **Teaser "Áreas de Atuação"**: grid resumido dos 2 pilares (Compliance & Governança / Educação & Capacitação) + link "Ver todos os serviços" → `/servicos-e-cursos`
- **CTA final**: "Agendar Conversa" → `/contato`

### Sobre (`/sobre`)

- Scroll contínuo, sem tabs/accordion
- Bloco "Quem somos e por que existimos" (adaptado do briefing de marca)
- Missão / Visão / Propósito em 3 colunas
- 4 valores: Rigor com Clareza · Parceria Genuína · Ética como Estratégia · Educação Transformadora
- ⚠️ Foto e bio da fundadora: **placeholder** — pendência (Seção 12)

### Serviços & Cursos (`/servicos-e-cursos`)

Grid-índice no topo com 2 pilares, blocos inline alternando branco/areia abaixo:

**Pilar 1 — Compliance & Governança Digital**
- Compliance Digital (adequação a MCI, CDC, LGPD, PI, ECA Digital)
- DPO as a Service
- Governança de IA (RIIA, políticas de uso, Marco Regulatório da IA)
- Resposta a Incidentes de Segurança
- Regulamentação de Campanhas Promocionais
- CTA do pilar: **"Solicitar Proposta"** → `/contato`

**Pilar 2 — Educação & Capacitação**
- Educação Corporativa (treinamentos in-company, workshops, certificação)
- Cursos & Capacitação (LGPD, ECA Digital, módulos EAD, trilhas Marketing/RH)
- **Teaser de cursos**: "Em breve: cursos de LGPD, ECA Digital e capacitação para Marketing, RH, TI e Direito" — captura de e-mail (lista de espera), **sem checkout/Hotmart nesta fase**
- ⚠️ Conteúdo real dos 2 cursos (nome, preço, programa, bônus, vídeo): pendência — vira LP1/LP2 em fase futura

### Contato (`/contato`)

- Formulário qualificado: nome, e-mail, segmento, porte da empresa, principal desafio (LGPD / DPO / IA / outro)
- Selos junto ao CTA: "Resposta em até 2 dias úteis" + credenciais
- Canais: Instagram @digitaletico · ⚠️ e-mail, telefone/WhatsApp e domínio — pendência

### Footer (presente nas 4 páginas)

- Colunas: Sobre · Serviços & Cursos · Contato/Redes
- ⚠️ CNPJ — pendência
- Política de Privacidade / Termos de Uso (P1)

---

## 9. Fases e Cronograma

Adaptado da proposta comercial PATUÁ (4 fases, jun–ago) ao escopo institucional desta PRD:

| Fase | Período | Escopo |
|---|---|---|
| **Fase 1** | até 21/06 | Alinhamento, resolução das pendências (Seção 12), PRD v1 aprovada |
| **Fase 2** | 22/06–05/07 | Wireframes mobile-first + UI/UX + site institucional v1–v3 (exploração visual) |
| **Fase 3** | 06/07–19/07 | v4–v5 (conversão/UX) + benchmark + ajustes de storytelling + responsividade |
| **Fase 4** | 20/07–16/08 | v6–v8 (navegação final), SEO/AIO técnico, QA, treinamento CMS, lançamento, hypercare |

LPs de curso, integração Hotmart e checkout: **fase futura** (pós 16/08), dependente da definição de conteúdo dos cursos pelo cliente.

---

## 10. Modelo de Pagamento

Conforme proposta comercial PATUÁ:

- **Valor:** R$ 5.000,00 (orçamento do cliente)
- **Parcelas:** 60% no início do projeto · 40% na entrega final
- **Equipe:** UX Designer · Desenvolvedor Web · Gestor de Projetos

**Exclusões:** LPs de curso e integração Hotmart estão fora deste orçamento — escopo e valor adicional a definir quando o conteúdo dos cursos estiver disponível.

---

## 11. KPIs

| Categoria | Métrica | Meta |
|---|---|---|
| Conversão | Nº de agendamentos via formulário/mês | A definir com o cliente |
| Conversão | Taxa hero → contato | A definir |
| Engajamento | Profundidade de scroll na seção Serviços | A definir |
| Engajamento | Cadastros na lista de espera de cursos | A definir |
| Institucional | Indexação Google + presença em respostas de IA (AIO) para termos como "compliance digital", "DPO as a service", "LGPD para empresas" | A definir |

---

## 12. Dependências (pendências a confirmar com o cliente)

1. **Conteúdo dos 2 cursos** (nome, preço, programa, bônus, vídeo) — necessário para LP1/LP2 (fase futura)
2. **Nome, foto e bio da fundadora** (advogada e DPO certificada)
3. **Domínio e dados de contato reais** (e-mail, telefone/WhatsApp, CNPJ)
4. **Confirmação sobre a instalação WordPress** — esta PRD assume **instalação nova**; confirmar antes da Fase 1 técnica
5. **Acervo fotográfico institucional** com autorização de uso (ou autorização para uso de banco de imagens)
6. **Integrações desejadas:** Analytics, Pixel (Meta/outros), e-mail marketing/CRM
7. **Confirmação do P0** do site institucional (híbrido B2B+B2C — Seção 3)

---

## 13. Referências

| Referência | Uso proposto |
|---|---|
| McKinsey / Bain (digital) | Hierarquia editorial e espaço negativo na seção Serviços |
| Ironclad / Clio | Tom "boutique jurídica" no Hero e em Quem Somos |
| Coursera (premium) | Acessibilidade visual na seção Cursos (teaser) |

---

## 14. Registro de Decisões

| Decisão | Status | Origem |
|---|---|---|
| Escopo desta fase = site institucional one-page, sem LPs de curso | ✅ Validado | Resposta do cliente |
| WordPress: instalação nova/limpa | ✅ Validado (provisório) | Resposta do cliente — reconfirmar antes da Fase 1 técnica |
| Identidade visual (cores, tipografia, logo) | ✅ Validado | Material Newtab já aprovado pela fundadora |
| Tipo de negócio: híbrido B2B/Consultoria + Educação | ✅ Validado | Briefing de marca |
| Estrutura: site multi-página (Home, Sobre, Serviços & Cursos, Contato) | ✅ Validado | Resposta do cliente |
| P0 institucional = híbrido (decisores B2B + profissionais B2C) | ⚠️ Inferido, não confirmado | Briefing de marca — pendência nº 7 |
| Depoimentos/cases | ⏸️ Omitidos do v1–v3 (empresa nova, sem clientes) | — |
| Cursos / LPs / Hotmart | ⏸️ Fora do escopo desta fase | Resposta do cliente |
