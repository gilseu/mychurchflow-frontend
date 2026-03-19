# PATCH RULES — MyChurchFlow

## 🎯 Objetivo

Gerar patch notes claros, rápidos e com linguagem de produto para o MyChurchFlow, sempre prontos para uso no sistema (JSON válido).

---

## 📦 Estrutura obrigatória

Toda resposta deve seguir exatamente este formato JSON:

{
  "versao": "X.X.X",
  "data": "YYYY-MM-DD",
  "titulo": "Título da atualização",
  "itens": [
    { "icon": "✨", "texto": "Texto do item" }
  ]
}

---

## 🧠 Regras gerais

- Responder **APENAS com JSON válido**
- Não escrever nada fora do JSON
- Usar sempre **aspas duplas**
- Não usar comentários
- Não usar vírgula no último item
- Sempre incluir: versao, data, titulo, itens

---

## ✍️ Escrita (MUITO IMPORTANTE)

- Linguagem simples e clara
- Foco no benefício, não no código
- Frases curtas
- Evitar termos técnicos desnecessários
- Soar como atualização de app (SaaS)

---

## 🧩 Estrutura dos itens

Cada item deve ser:

{ "icon": "X", "texto": "Descrição curta" }

Regras:
- Máximo: 3 a 6 itens
- Cada item = 1 melhoria
- Começar com letra maiúscula
- Não usar ponto final (opcional, mas preferir sem)

---

## 🎨 Ícones padrão

✨ Nova funcionalidade  
⚙️ Correção ou ajuste  
📱 App / interface  
🎨 Visual / design  
🔒 Segurança  
💬 Comunicação / interação  
📋 Organização / dados  
🚀 Performance  
🧠 Inteligência / IA  

---

## 🔢 Versionamento

- Correção pequena → 1.9.1
- Melhoria média → 1.10.0
- Mudança grande → 2.0.0

Sempre incrementar versão (NUNCA repetir)

---

## 🔄 Conversão técnica → produto

Exemplos:

❌ "Corrigido ID do textarea"
✅ "Corrigida a importação de patch notes por JSON"

❌ "Ajuste no event listener"
✅ "Melhorado o comportamento dos botões do painel"

---

## 📅 Data

Formato obrigatório:
YYYY-MM-DD

---

## 🚫 O que NÃO fazer

- Não explicar código
- Não mencionar erro interno
- Não falar "bug" (usar "correção")
- Não escrever texto fora do JSON
- Não usar linguagem técnica demais

---

## ⚡ Comando padrão de uso

Quando o usuário pedir:

"cria patch notes da atualização"

OU

"gera patch"

OU

"patch notes"

O sistema deve:

1. Inferir melhorias com base no contexto recente
2. Organizar em até 3–6 itens
3. Aplicar regras acima
4. Retornar JSON pronto

---

## 🧪 Exemplo correto

{
  "versao": "1.9.1",
  "data": "2026-03-18",
  "titulo": "Melhorias no painel de patch notes",
  "itens": [
    { "icon": "⚙️", "texto": "Corrigida a importação de patch notes por JSON" },
    { "icon": "✨", "texto": "Adicionado fluxo de criação com IA" },
    { "icon": "🎨", "texto": "Aprimorada a organização visual do painel" }
  ]
}