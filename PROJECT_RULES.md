# ⚙️ MyChurchFlow --- Project Rules (Advanced)

## 📌 Contexto

Projeto em HTML, CSS e JavaScript puro, estruturado para evolução como
SaaS.

------------------------------------------------------------------------

## 🎨 Design System

-   designsystem.html é a fonte visual oficial
-   DESIGN_SYSTEM.md define padrões visuais
-   Nunca criar estilos fora do padrão

------------------------------------------------------------------------

## 📁 Estrutura

-   HTML → estrutura
-   CSS → /assets/css/
-   JS → /assets/js/

------------------------------------------------------------------------

## ❌ Proibido

-   CSS inline

-   JS inline (onclick, etc)

-   ```{=html}
    <style>
    ```
    no HTML

-   misturar lógica com HTML

-   criar código fora da arquitetura

------------------------------------------------------------------------

## ✅ Obrigatório

-   Separar HTML, CSS e JS
-   Usar addEventListener
-   Código limpo e organizado
-   Compatível com Vite

------------------------------------------------------------------------

## 🧠 JavaScript (Padrão Profissional)

### Localização

-   /assets/js/

### Estrutura obrigatória

// ===== CONFIG ===== // ===== STATE ===== // ===== DOM ===== // =====
FUNCTIONS ===== // ===== EVENTS ===== // ===== INIT =====

### Regras

-   Sem JS inline
-   Evitar duplicação
-   Separar responsabilidades
-   Código previsível

### Evolução (quando crescer)

-   auth.js
-   storage.js
-   ui.js
-   router.js

------------------------------------------------------------------------

## 🌍 Internacionalização (i18n)

Idiomas: - BR - EN - ES

### Regras obrigatórias

-   Todo texto novo deve ter tradução
-   Nunca deixar texto fixo em apenas um idioma
-   Centralizar traduções

Exemplo: const translations = { br: {}, en: {}, es: {} }

------------------------------------------------------------------------

## 📝 Patch Notes

### Regras

-   Registrar mudanças importantes
-   Texto curto e direto
-   Atualizar sempre após alterações

------------------------------------------------------------------------

## 🔄 Refatoração

-   Não quebrar funcionalidades
-   Não alterar design sem necessidade
-   Validar tudo após mudanças

------------------------------------------------------------------------

## 🔍 Revisão obrigatória

Antes de finalizar qualquer tarefa:

1.  Revisar todo o código
2.  Revisar novamente (segunda verificação obrigatória)

------------------------------------------------------------------------

## 🤖 Copilot

Sempre iniciar com:

Use DESIGN_SYSTEM.md como referência visual obrigatória. Use
PROJECT_RULES.md como regra técnica obrigatória.

------------------------------------------------------------------------

## 🚀 Objetivo

Código: - limpo - escalável - previsível - pronto para backend futuro
