# RULES ARCHITECTURE — MyChurchFlow

## 🎯 Objetivo

Este arquivo define o contrato arquitetural oficial do MyChurchFlow.

Ele existe para evitar:
- crescimento desorganizado
- lógica duplicada
- acoplamento indevido entre landing, app, admin e backend
- regressões ao evoluir módulos
- migrações quebradas entre localStorage e Supabase

Este contrato complementa os arquivos de regras já existentes para patch notes, contrato técnico do sistema de patch e design system do projeto. Ele deve ser aplicado junto com essas regras, nunca isoladamente. fileciteturn2file0L1-L18 fileciteturn2file1L1-L23 fileciteturn2file2L1-L19

---

## 1. 🧱 Estrutura oficial do sistema

Estrutura atual reconhecida:

```text
/public
  /admin
  /app
    /assets
      /css
        app.css
      /js
        app-core.js
        app-modulos.js
        app-planejador.js
        i18n.js
        storage.js
        store.js
        supabase-client.js
        supabase-config.js
    index.html
  /assets
    /css
      landingpage.css
    /js
      landingpage.js
  index.html
```

### Regra

A arquitetura oficial do MyChurchFlow possui 4 camadas:

1. **Landing** → aquisição e venda
2. **App** → experiência do usuário final
3. **Admin** → operação e gestão interna
4. **Backend (Supabase)** → persistência, autenticação e fonte de verdade

### Proibição

Não misturar responsabilidades entre essas camadas.

---

## 2. 🌐 Função de cada área

### Landing

Responsável por:
- apresentação do produto
- comunicação comercial
- CTA
- encaminhamento para checkout, login ou cadastro

Não é responsável por:
- lógica interna do app
- renderização de módulos do usuário
- regras de plano
- leitura de dados privados do usuário

### App

Responsável por:
- interface principal do produto
- renderização de módulos
- ações do usuário
- sincronização com backend via camada apropriada

Não é responsável por:
- regras administrativas internas
- gestão editorial do sistema
- decisões comerciais da landing

### Admin

Responsável por:
- operação interna
- cadastro, manutenção e organização de conteúdo
- gestão de patch notes
- configuração operacional do sistema

Não é responsável por:
- conter lógica duplicada do app
- criar formatos incompatíveis com o frontend consumidor

### Backend (Supabase)

Responsável por:
- autenticação real
- persistência de dados
- políticas de acesso
- integridade por usuário
- sincronização multi-device

---

## 3. 🔒 Fronteiras obrigatórias

### Regra central

Cada camada pode conversar com outra apenas pelo caminho correto.

### Fluxos permitidos

- Landing → login, cadastro, checkout, navegação
- App → store/camada de dados → Supabase
- Admin → estrutura de dados compatível com app/backend
- App/Admin → assets compartilhados, quando fizer sentido visual ou utilitário

### Fluxos proibidos

- Landing acessando lógica interna do app
- Landing lendo dados privados do usuário final
- Módulo do app acessando Supabase diretamente sem passar pela camada definida
- Admin salvando estruturas sem contrato formal
- UI decidindo regra de negócio crítica

### Regra prática

Evitar o padrão:

```text
UI → Supabase direto
```

Preferir sempre:

```text
UI → store/camada de dados → persistência
```

---

## 4. 🧠 Fonte de verdade

### Estado do frontend

`usuarioAtual` pode continuar existindo no frontend como estado operacional de interface.

### Fonte de verdade real

A fonte de verdade de autenticação, acesso, conteúdo persistente e sincronização é o backend.

### Regra

Nunca tratar somente o frontend como verdade definitiva para:
- autenticação
- plano ativo
- acesso por recurso
- favoritos persistentes
- histórico persistente
- planejamentos persistidos

### Interpretação correta

- **frontend** = estado de experiência
- **backend** = estado persistente e confiável

---

## 5. 💾 Contrato de persistência

### Regra oficial

Toda persistência do sistema deve seguir este raciocínio:

1. ler estado atual
2. aplicar transformação
3. salvar pela camada correta
4. atualizar UI
5. manter fallback apenas quando necessário

### Ordem preferida de persistência

#### Dados locais ou temporários
Podem usar localStorage quando forem:
- preferências visuais
- estado efêmero
- cache auxiliar
- fallback temporário de migração

#### Dados de produto reais
Devem ir para backend quando forem:
- favoritos
- histórico
- planejador
- unlocks
- assinatura
- acesso por plano
- progresso relevante

### Regra crítica

localStorage pode existir como suporte.
Ele **não deve** continuar indefinidamente como única fonte de verdade dos dados centrais do produto.

---

## 6. 🔄 Contrato de migração localStorage → Supabase

Toda migração deve seguir o padrão oficial abaixo.

### Fase 1 — Compatibilidade
- manter leitura legada
- identificar estado local existente
- buscar estado remoto autenticado
- fundir com segurança quando necessário

### Fase 2 — Escrita controlada
- ações novas passam a gravar no backend
- localStorage pode continuar como redundância temporária

### Fase 3 — Estabilização
- validar leitura remota
- validar escrita remota
- validar sessão em múltiplos acessos

### Fase 4 — Limpeza
- remover dependência antiga quando o fluxo estiver estável

### Regra

Nunca migrar tudo de uma vez se o módulo já estiver em uso.
A estratégia oficial é **modular, incremental e reversível**.

---

## 7. 🧩 Contrato de módulos

Todo módulo novo ou refatorado deve seguir uma estrutura previsível.

### Ciclo padrão

```text
init → load → render → actions → persist
```

### Significado

- **init** → preparar contexto e listeners
- **load** → buscar ou montar dados
- **render** → desenhar interface
- **actions** → reagir a cliques, formulários e eventos
- **persist** → salvar via camada adequada

### Regra

Não criar módulos que misturem tudo em uma única função gigante.

### Objetivo

Permitir que favoritos, histórico, planejador e próximos módulos sigam o mesmo padrão mental.

---

## 8. 📁 Responsabilidade dos arquivos do app

### `app-core.js`
Responsável por:
- bootstrap geral do app
- fluxo inicial
- integrações centrais
- orquestração entre partes

Não deve virar:
- depósito de regra de negócio de todos os módulos
- arquivo de persistência direta de tudo

### `app-modulos.js`
Responsável por:
- render e comportamento de módulos gerais
- composição de features de uso

Não deve virar:
- camada de banco
- repositório caótico de utilidades sem contexto

### `app-planejador.js`
Responsável por:
- lógica específica do planejador
- render do planejador
- ações do planejador

Não deve conter:
- regras genéricas do sistema inteiro

### `i18n.js`
Responsável por:
- textos
- traduções
- chaves de interface

Não deve conter:
- regra de negócio
- persistência

### `storage.js`
Responsável por:
- abstrações de armazenamento local
- leitura e escrita de localStorage
- compatibilidades temporárias

Não deve virar:
- camada principal de negócio
- decisão de plano, auth ou permissão

### `store.js`
Responsável por:
- centralizar leitura/escrita de dados do app
- organizar acesso a persistência
- servir de ponte entre UI e backend/local

Regra preferida:
- toda lógica de persistência compartilhada deve convergir para cá ou para camada equivalente

### `supabase-config.js`
Responsável por:
- configuração do projeto
- chaves públicas e parâmetros necessários

### `supabase-client.js`
Responsável por:
- instância do cliente
- helpers de acesso ao backend

### Regra geral

Quanto mais sensível for a persistência, menos ela deve ficar espalhada em arquivos de UI.

---

## 9. 🔒 Contrato do backend

O backend oficial do projeto usa Supabase com Auth, Postgres e RLS, já com políticas e grants aplicados no fluxo atual do projeto.

### Regra

Toda operação sensível deve respeitar:
- autenticação real
- user_id correto
- policies existentes
- separação por usuário

### Nunca fazer

- confiar em user_id vindo solto do frontend sem contexto autenticado
- salvar dados globais de usuário em estrutura compartilhada sem proteção
- criar atalho que contorne RLS

### Verdade do projeto

A resolução do erro de permissão anterior mostrou que grants, RLS e policies são partes críticas do sistema e não podem ser tratados como detalhe de implementação. Esse cuidado já foi consolidado no estado atual do projeto.

---

## 10. 👤 Contrato de autenticação e sessão

### Regra oficial

Auth real pertence ao Supabase Auth.

### O frontend pode:
- refletir usuário logado
- atualizar UI
- restaurar sessão visual
- esconder ou exibir módulos

### O frontend não pode:
- inventar autenticação
- confiar só em variável local para validar acesso
- decidir sozinho direitos permanentes do usuário

### Padrão esperado

- sessão validada
- perfil disponível
- acesso derivado de fonte persistente

---

## 11. 💳 Contrato de planos e acesso

### Regra arquitetural

Plano, unlocks, assinatura e acesso são dados de negócio.

Logo:
- podem ser refletidos no frontend
- devem ser definidos e persistidos no backend

### Proibição

Não deixar regra definitiva de acesso apenas em:
- localStorage
- HTML
- flags soltas em JS de interface

### Interpretação correta

- UI mostra o que está disponível
- backend determina o que é permitido

---

## 12. ⭐ Contrato recomendado para favoritos

Como favoritos é o próximo módulo a migrar, ele vira o modelo oficial para os próximos.

### Estrutura conceitual

Cada favorito deve ser ligado a:
- `user_id`
- `item_type`
- `item_id`
- `created_at`

### Regra

Deve existir proteção contra duplicidade por usuário + tipo + item.

### Fluxo ideal

- usuário clica
- UI responde rápido
- store processa
- backend persiste
- interface reidrata corretamente

### Objetivo

Usar favoritos como primeiro padrão de persistência SaaS real sem quebrar o app legado.

---

## 13. 🕘 Contrato recomendado para histórico

Histórico deve seguir a mesma escola de arquitetura dos favoritos.

### Regra

Não criar um padrão novo só porque o tipo de dado mudou.

### O que manter
- user_id
- tipo de ação ou entidade
- referência do item
- timestamp

### Objetivo

Manter previsibilidade de leitura, auditoria de uso e sincronização entre dispositivos.

---

## 14. 🗓️ Contrato recomendado para planejador

O planejador é feature central e merece cuidado maior.

### Regra

Separar claramente:
- estado em edição
- autosave eventual
- persistência definitiva
- renderização da interface

### Proibição

Não misturar no mesmo bloco:
- render pesado
- manipulação de DOM
- serialização complexa
- persistência remota

### Objetivo

Permitir que o planejador cresça sem virar o arquivo mais frágil do projeto.

---

## 15. 🛠️ Contrato do admin

O admin é uma área operacional, não um segundo app improvisado.

### Responsabilidades permitidas
- cadastrar e organizar dados do sistema
- controlar estruturas administrativas
- gerenciar patch notes
- preparar conteúdo compatível com o consumo do app

### Responsabilidades proibidas
- criar estrutura fora do contrato
- depender de lógica escondida do frontend do app
- salvar formatos quebrados ou inconsistentes

### Regra crítica

Tudo que nascer no admin e for consumido no app deve obedecer contrato de dados.

O sistema de patch notes já segue esse princípio com estrutura fixa, IDs obrigatórios, localStorage específico e fluxo amarrado entre app e admin. Isso deve servir de modelo para outras áreas administrativas. fileciteturn2file0L20-L47

---

## 16. 🎯 Contrato da landing page

A landing é parte do produto, mas não é a área logada.

### Deve focar em
- posicionamento
- prova
- benefício
- CTA
- encaminhamento para ação

### Não deve fazer
- importar lógica do app
- renderizar estado de módulos internos
- depender de auth do produto para existir

### Regra

Landing deve ser leve, comercial e isolada.

---

## 17. 🎨 Contrato visual

O design system oficial do projeto usa `designsystem.html` como fonte de verdade visual, com tema dark, paleta e tipografia definidos. Toda interface nova deve respeitar esse padrão. fileciteturn2file1L1-L23

### Regra prática

- landing pode ser mais comercial
- app deve ser funcional e consistente
- admin deve ser utilitário e claro
- todos ainda devem parecer partes do mesmo produto

### Proibição

Não criar uma interface “solta” que ignore:
- paleta oficial
- tipografia oficial
- padrão de container
- padrão de botões

---

## 18. 🧪 Contrato de evolução segura

Toda mudança relevante no sistema deve responder estas perguntas antes de entrar:

1. Em qual camada isso pertence?
2. Isso cria duplicação de lógica?
3. Isso depende de dado persistente?
4. O backend precisa ser a fonte de verdade?
5. Isso respeita o padrão visual?
6. Isso mantém compatibilidade com o legado atual?

### Regra

Se a mudança quebrar fronteira entre landing, app, admin e backend, ela deve ser redesenhada antes de ser implementada.

---

## 19. 📦 Regra para criação de novas features

Toda feature nova deve nascer com:
- objetivo claro
- camada correta
- ponto de persistência definido
- impacto visual consistente
- plano de evolução

### Checklist mínimo

- [ ] pertence à camada correta
- [ ] não duplica regra existente
- [ ] não acessa backend por atalho inseguro
- [ ] tem padrão de render previsível
- [ ] respeita o contrato visual
- [ ] pode ser mantida sem medo de quebrar o resto

---

## 20. ⚠️ Mudanças perigosas

Mudanças que exigem revisão maior:
- mover lógica entre landing, app e admin sem critério
- espalhar persistência sensível em arquivos de UI
- tratar localStorage como banco permanente
- colocar regra de plano apenas no frontend
- deixar módulos chamarem backend de forma inconsistente
- quebrar a compatibilidade entre admin e app
- criar exceções fora do padrão de módulo

---

## 21. ✅ Mudanças seguras

Mudanças geralmente seguras:
- ajustes visuais alinhados ao design system
- melhoria de organização interna sem quebrar contratos
- extração de funções pequenas
- criação de helpers utilitários bem definidos
- migração incremental com fallback controlado

---

## 22. 📌 Prioridade arquitetural atual

Estado atual reconhecido do projeto:
- auth real funcionando
- logout funcionando
- restauração de sessão funcionando
- backend conectado
- RLS, policies e grants funcionando

### Próxima prioridade oficial

1. migrar favoritos
2. migrar histórico
3. migrar planejador
4. evoluir bloqueios por plano
5. consolidar assinatura e sync multi-device

### Regra

Seguir evolução modular, sem refatoração massiva.

---

## 23. 🧠 Regra final

O MyChurchFlow não deve evoluir por improviso.

Sempre seguir esta lógica:

1. definir camada correta
2. definir contrato de dados
3. definir ponto de persistência
4. implementar sem quebrar legado
5. validar UI
6. validar backend
7. só então expandir

### Princípio central

**Estabilidade vem antes de velocidade.**

### Princípio operacional

**Crescer sem bagunça é parte do produto.**

