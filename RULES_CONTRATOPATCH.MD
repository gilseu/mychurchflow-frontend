# PATCH CONTRACT — MyChurchFlow

## 🎯 Objetivo

Este arquivo define o contrato técnico do sistema de patch notes do MyChurchFlow.

Evita quebrar:
- importação JSON
- histórico de novidades
- badge "novo"
- modal
- integração app + admin

---

## 1. 🔑 Chaves de localStorage (NÃO RENOMEAR)

- patch_notes_admin_v1
- patch_notes_last_seen

### Significado

patch_notes_admin_v1  
→ patches criados no admin

patch_notes_last_seen  
→ última versão vista pelo usuário

### Regra

Se mudar:
- atualizar app.js
- atualizar patchnotes.js
- testar tudo

---

## 2. 📦 Estrutura obrigatória do patch

{
  "id": "v1_9_1",
  "versao": "1.9.1",
  "data": "2026-03-18",
  "novidade": true,
  "titulo": "Título",
  "itens": [
    { "icon": "✨", "texto": "Descrição" }
  ]
}

### Obrigatórios

- id
- versao
- data
- titulo
- itens

### Itens

- icon
- texto

### Regra

Nunca trocar:
- versao
- titulo
- itens
- icon
- texto

---

## 3. 🔢 Regra do ID

id = "v" + versao.replaceAll(".", "_")

Ex:
1.9.1 → v1_9_1

### Regra

Se mudar:
- revisar ordenação
- revisar deduplicação
- revisar modal

---

## 4. 🧠 App.js — partes críticas

### Constantes

- STORAGE_PATCH_VISTA
- STORAGE_PATCH_ADMIN

### Estado

- PATCH_NOTES_PADRAO
- PATCH_NOTES

### Funções

- normalizarPatchNote
- sortPatchNotes
- carregarPatchNotes
- salvarPatchNotesNoStorage
- addPatchNote
- getLatestPatchNote
- checkNovidadesModal
- abrirNovidadesModal
- fecharNovidades
- fecharNovidadesOverlay

### Regra

Não renomear sem revisar tudo

---

## 5. 🧩 IDs do App (OBRIGATÓRIOS)

- novidades-overlay
- novidades-modal-versao
- novidades-modal-titulo
- novidades-modal-lista

### Regra

Se mudar ID:
- atualizar JS
- testar modal

---

## 6. ⚠️ Regra do Modal

Hoje usa:

comparação → versao  
salvamento → versao

### Regra

Se trocar para ID:
- mudar comparação
- mudar salvamento

Se não, quebra

---

## 7. 🛠️ Admin — IDs obrigatórios

### IA

- patch-json-input
- btn-fill-example
- btn-copy-prompt
- btn-import-json

### Formulário

- patch-versao
- patch-data
- patch-titulo
- patch-itens-wrap
- btn-clear-form
- btn-add-item
- btn-save-patch

### Debug

- last-seen-value
- latest-patch-value
- btn-reset-last-seen
- btn-copy-reset-command

### Lista

- patch-count
- patch-total-badge
- patch-lista-admin

### Regra

HTML e JS devem bater EXATAMENTE

---

## 8. ⚙️ Admin JS — funções críticas

- getPatchNotes
- savePatchNotes
- addPatchNote
- excluirPatchNote
- render
- getFormData
- clearForm
- createItemBlock
- copiarJSON
- importarJSON
- copiarPromptIA

---

## 9. ❌ Erro clássico

HTML:
patch-json-input

JS:
json-input

Resultado:
- null
- quebra
- "JSON inválido"

### Regra

Sempre testar:

document.getElementById('ID')

---

## 10. ✅ Mudanças seguras

- cores
- layout
- textos
- espaçamento
- novos campos opcionais

---

## 11. ⚠️ Mudanças perigosas

- renomear localStorage
- trocar IDs
- mudar versao
- mudar icon/texto
- mudar lógica do modal
- mudar estrutura de itens

---

## 12. ✔️ Checklist antes de alterar

### App

- [ ] storage intacto
- [ ] modal funciona
- [ ] badge funciona
- [ ] histórico funciona

### Admin

- [ ] JSON input existe
- [ ] botões funcionam
- [ ] lista renderiza

### Dados

- [ ] versao ok
- [ ] data ok
- [ ] titulo ok
- [ ] itens ok
- [ ] icon/texto ok

---

## 13. 🧠 Regra final

Sempre:

1. revisar HTML
2. revisar JS
3. testar importação
4. testar cadastro
5. testar modal
6. testar badge
7. testar histórico

Nunca alterar nome sem revisar os dois lados