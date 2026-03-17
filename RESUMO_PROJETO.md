# 📋 Resumo do Projeto — Encontros de Mulheres v1.5.2

## 🔧 O QUE FOI FEITO NESTE CHAT

### Bugs Corrigidos (10 originais + 5 emergenciais)
1. **Login/Logout** — Ordem de inicialização corrigida (carregarModulosAdmin antes da sessão)
2. **Double-render** — IIFE duplicada removida, INIT reestruturado
3. **Favoritos perguntas** — `p.texto` → `p.pergunta`, `p.categoria` → `p.categoriaLabel`
4. **Gerador sem persistência** — `salvarStorage()` adicionado em 6 funções
5. **conjuntosEncontros** — Nova chave localStorage, incluído no save/load
6. **Dados fantasma no gerador** — Cards não geram mais aleatórios a cada render
7. **Seletor de tema** — Opção "🎲 Aleatório" adicionada como padrão
8. **Card dinâmica hardcoded** — Placeholder "—" + auto-gerar no primeiro acesso
9. **Logout visual** — Limpa profiles, gerador, todos os estados
10. **Limpar histórico** — Agora persiste no localStorage
11. **TDZ (temporal dead zone)** — `historico`, `historicoEnc`, `encontrosGeradosSessao`, `conjuntosEncontros` movidos para topo do script
12. **renderDinamicas faltando** — Adicionado em `entrarNoApp()`
13. **TRANSLATIONS circular** — 9 referências `t()` dentro do próprio objeto substituídas por strings literais
14. **fav-count-label null** — 4 referências tornadas null-safe
15. **openPerfil undefined** — Corrigido para `abrirPerfilTela()`

### Traduções Implementadas (PT/EN/ES)
| Conteúdo | Itens | Campos traduzidos |
|---|---|---|
| 200 Dinâmicas | 200 | título + objetivo (1-8: completo c/ passos) |
| 50 Encontros | 50 | título, categoria, quebraGelo, reflexão, perguntas, oração |
| 50 Quebra-Gelos | 50 | título, categoria, objetivo, como aplicar, dica |
| 30 Estudos | 30 | título, reflexão, perguntas, aplicação |
| 100 Perguntas | 100 | texto completo + categoria |
| 7 Devocional | 7 | título, reflexão, pergunta, aplicação, oração |
| Guia do Líder | 5 passos | títulos, textos, dicas (data-i18n) |
| Onboarding | 5 passos | título + descrição (ONB_PASSOS_I18N) |
| UI (chaves i18n) | 397 PT / 398 EN / 397 ES | toasts, labels, modais, filtros |

### UI/UX
- Todos os modais abrem no **topo da tela** (align-items:flex-start + padding-top:40px)
- Stories e Ao Vivo mantidos centralizados (tela cheia)
- Dica do Dia agora usa getDinamica() para tradução

---

## 🏗️ ARQUITETURA DE TRADUÇÃO

### Sistema de i18n (interface)
- Objeto `TRANSLATIONS` com 3 blocos: `pt`, `en`, `es`
- Função `t(key, fallback)` busca a chave no idioma atual
- `data-i18n` no HTML para texto estático
- `data-i18n-ph` para placeholders
- `aplicarIdioma()` re-renderiza tudo ao trocar idioma
- `setLang(lang)` salva no localStorage e aplica

### Getters de conteúdo (dados dinâmicos)
```
getDinamica(raw)     → usa DINAMICAS_TRADUCOES[lang][id]
getEncontro(raw)     → usa ENCONTROS_TRADUCOES + ENC_BODY_EN/ES
getQuebraGelo(raw)   → usa QUEBRAGELOS_TRADUCOES + QG_BODY_EN/ES
getEstudo(raw)       → usa ESTUDOS_TRADUCOES + EST_BODY_EN/ES
getPerguntaTrad(raw) → usa PERGUNTAS_TRADUCOES + PERG_EN/ES
getDevocionalTrad(raw) → usa DEVOCIONAL_TRADUCOES + DEV_BODY_EN/ES
```

### Objetos de tradução de conteúdo
- `DINAMICAS_TRADUCOES` — {en:{1:{titulo,objetivo,materiais,passos,aplicacao},...}, es:{...}}
- `ENCONTROS_TRADUCOES` — {en:{cats:{},titles:{}}, es:{...}}
- `ENC_BODY_EN/ES` — {1:{qg,ref,prg:[],ora}, ...} (50 itens)
- `QUEBRAGELOS_TRADUCOES` — {en:{cats:{},titles:{}}, es:{...}}
- `QG_BODY_EN/ES` — {1:{obj,como,dica}, ...} (50 itens)
- `ESTUDOS_TRADUCOES` — {en:{titles:{}}, es:{...}}
- `EST_BODY_EN/ES` — {1:{ref,prg:[],apl}, ...} (30 itens)
- `PERGUNTAS_TRADUCOES` — {en:{cats:{}}, es:{...}}
- `PERG_EN/ES` — {'p1':'...', ...} (100 itens)
- `DEVOCIONAL_TRADUCOES` — {en:{titles:{}}, es:{...}}
- `DEV_BODY_EN/ES` — {1:{ref,perg,apl,ora}, ...} (7 itens)
- `ONB_PASSOS_I18N` — {pt:[...], en:[...], es:[...]} (5 passos)

---

## 📂 ESTRUTURA DO ARQUIVO (8500+ linhas)

```
Linha ~68-780     → CSS (temas light/dark, modais, overlays)
Linha ~788-860    → HTML Login screen
Linha ~862-2078   → HTML App screens (home, dinâmicas, gerar, planejador, guia, floresça, encontros, devocional, quebraGelos, estudos, perguntas, favoritos, histórico, admin, perfil, modais)
Linha ~2080-2440  → JS dados: dinamicas[], perguntas100[]
Linha ~2441-2470  → JS variáveis de estado (favorites, planos, historico, etc.)
Linha ~2470-4060  → JS funções core (nav, render, gerador, planejador, favoritos)
Linha ~4060-4200  → JS login/logout/auth
Linha ~4200-4700  → JS perfil, admin, bloqueios
Linha ~4700-5160  → JS histórico, timer, avaliação, stories
Linha ~5160-5200  → JS onboarding, ao vivo
Linha ~5330-5750  → TRANSLATIONS PT (397 chaves)
Linha ~5750-6150  → TRANSLATIONS EN (398 chaves)
Linha ~6150-6500  → TRANSLATIONS ES (397 chaves)
Linha ~6500-6700  → Traduções de conteúdo (ENCONTROS, QUEBRAGELOS, ESTUDOS, PERGUNTAS, DEVOCIONAL, ENC_BODY, QG_BODY, EST_BODY, PERG, DEV_BODY)
Linha ~6700-6850  → Getters com tradução
Linha ~6850-7100  → DINAMICAS_TRADUCOES (200 EN + 200 ES)
Linha ~7100-7300  → dados: encontros50[], devocional7[], quebraGelos50[]
Linha ~7300-7600  → dados: estudos30[], funções de conteúdo
Linha ~7600-7900  → PATCH_NOTES, funções novidades
Linha ~7900-8520  → INIT block
```

---

## ⚠️ O QUE AINDA PODE SER MELHORADO

### Tradução
- **Dinâmicas 9-200**: título e objetivo traduzidos, mas passos/materiais/aplicação ainda em PT
- **Patch Notes**: textos hardcoded em PT (array PATCH_NOTES)
- **Versículos**: referências bíblicas em PT (ex: "Salmos 37:5") — manter universal ou traduzir

### Funcional
- Senhas em texto claro no JS — não usar em produção
- Módulos controlados pelo frontend — sem validação server
- Dados somem se usuário limpar cache
- Botão de compra só faz toast — sem checkout integrado

### Contas de teste
- admin@encontros.com / admin2024 → Admin, acesso total
- aluna@email.com / aluna123 → Produto principal (maioria bloqueado)
- nova@email.com / nova123 → Acesso total (auto-reset)

---

## 🔑 CHAVES DE PERSISTÊNCIA (localStorage)
```
encontros_auth_v1                    → email logado
encontros_planos_v1_{email}          → planejamentos
encontros_favoritos_v1_{email}       → IDs dinâmicas fav
encontros_hist_gerador_v1_{email}    → histórico gerador
encontros_hist_enc_ger_v1_{email}    → histórico encontros gerados
encontros_uso_din_v1_{email}         → contador uso dinâmicas
encontros_hist_v1_{email}            → histórico + avaliações
encontros_hist_enc_v1_{email}        → histórico encontros
encontros_versao_v1_{email}          → versão vista
encontros_onboarding_v1_{email}      → tour completo
encontros_modulos_admin_v1           → módulos (global)
encontros_lang_v1                    → idioma PT/EN/ES
tema                                 → light/dark
foto_{email}                         → foto perfil base64
perfil_{email}                       → nome customizado
fav_perguntas_{email}                → IDs perguntas fav
fav_encontros_{email}                → IDs encontros fav
fav_qgelos_{email}                   → IDs quebra-gelos fav
```
