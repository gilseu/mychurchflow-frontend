# 🌍 RULES — I18N (Sistema de Tradução)

## 📌 OBJETIVO
Garantir que TODO o sistema seja 100% traduzível, escalável e consistente entre idiomas (PT, EN, ES).

---

## 🧠 PRINCÍPIO CENTRAL

❌ NENHUM TEXTO FIXO NO CÓDIGO  
✔ TODO TEXTO DEVE PASSAR PELO SISTEMA DE TRADUÇÃO

---

## 🔑 1. PADRÃO DE TRADUÇÃO

### JS
Sempre usar:

t('chave.traducao')

Exemplo:
t('btn.salvar')

---

### HTML

#### Texto interno:
data-i18n="chave"

#### Placeholder:
data-i18n-ph="chave"

#### Title:
data-i18n-title="chave"

---

## 🚫 2. PROIBIDO

❌ Texto direto:
"Salvar"
"Buscar..."
"Livre"
"Voltar"

❌ Template string com texto fixo:
`${valor || 'Livre'}`

❌ Placeholder fixo:
placeholder="Digite aqui"

❌ Title fixo:
title="Abrir"

---

## ✅ 3. OBRIGATÓRIO

✔ Todo texto visível deve ter chave i18n  
✔ Todo fallback deve usar t()  
✔ Todo botão deve usar i18n  
✔ Todo label deve usar i18n  
✔ Todo erro deve usar i18n  
✔ Todo toast deve usar i18n  

---

## 🧱 4. ESTRUTURA DAS CHAVES

### Padrão:

area.elemento.acao

Exemplo:

btn.salvar  
btn.voltar  
login.erro  
plan.pergunta.placeholder  
home.banner.title  

---

## 📚 5. CATEGORIAS PADRÃO

### BOTÕES
btn.salvar  
btn.voltar  
btn.editar  
btn.usar  
btn.ver  

---

### LOGIN
login.email  
login.senha  
login.btn  
login.erro  

---

### HOME
home.title  
home.subtitle  
home.banner.title  

---

### PLANEJADOR
plan.tema  
plan.pergunta  
plan.quebraGelo  
plan.sug.usar  

---

### COMUM
common.loading  
common.error  
common.empty  
common.free  

---

## ⚠️ 6. DADOS DINÂMICOS

### ❌ ERRADO
q.titulo  
p.pergunta  

### ✔ CORRETO (FASE AVANÇADA)
titulo: {
  pt: "Texto",
  en: "Text",
  es: "Texto"
}

---

## 🔄 7. FALLBACK OBRIGATÓRIO

Sempre:

t('chave') || 'fallback seguro'

Exemplo:
t('common.free') || 'Livre'

---

## 🎯 8. PADRÃO PARA TEMPLATE STRING

### ❌ ERRADO
`${tempo || 'Livre'}`

### ✔ CORRETO
`${tempo || t('common.free')}`

---

## 🧩 9. SISTEMA DE APLICAÇÃO

Toda vez que idioma mudar:

✔ atualizar textos (data-i18n)
✔ atualizar placeholders
✔ atualizar titles
✔ atualizar conteúdos dinâmicos

---

## 🧪 10. TESTE OBRIGATÓRIO

Checklist:

- [ ] Trocar idioma muda TODOS textos
- [ ] Nenhum texto fica em PT fixo
- [ ] Placeholder traduz
- [ ] Botões traduzem
- [ ] Toast traduz
- [ ] Modal traduz

---

## 🚀 11. PADRÃO DE ESCALABILIDADE

✔ Fácil adicionar novo idioma  
✔ Sem duplicação de texto  
✔ Sem lógica hardcoded  
✔ Centralização total no i18n.js  

---

## 🔒 12. REGRA DE OURO

Se aparecer qualquer texto fixo no código:

👉 É BUG  
👉 Deve ser removido  

---

## 🧠 13. FILOSOFIA

O código NÃO contém texto  
O código chama texto  

---

## 📌 RESUMO

Sem exceções:
✔ Tudo passa por t()
✔ Tudo usa chave
✔ Nada hardcoded
✔ Tudo escalável