const STORAGE_PATCH_ADMIN = 'patch_notes_admin_v1';

function getPatchNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_PATCH_ADMIN) || '[]');
}

function savePatchNotes(data) {
  localStorage.setItem(STORAGE_PATCH_ADMIN, JSON.stringify(data));
}

function addPatchNote(patchData) {
  const lista = getPatchNotes();

  const novoPatch = {
    id: `v${String(patchData.versao).replaceAll('.', '_')}`,
    versao: patchData.versao,
    data: patchData.data,
    titulo: patchData.titulo,
    itens: patchData.itens,
    novidade: true
  };

  const filtrado = lista.filter(p => p.id !== novoPatch.id);
  filtrado.push(novoPatch);

  filtrado.sort((a, b) => {
  const diffData = new Date(b.data) - new Date(a.data);
  if (diffData !== 0) return diffData;

  const va = String(a.versao).split('.').map(Number);
  const vb = String(b.versao).split('.').map(Number);

  for (let i = 0; i < Math.max(va.length, vb.length); i++) {
    const na = va[i] || 0;
    const nb = vb[i] || 0;
    if (nb !== na) return nb - na;
  }

  return 0;
});

  savePatchNotes(filtrado);
}

function excluirPatchNote(id) {
  if (!confirm('Excluir patch?')) return;

  const lista = getPatchNotes().filter(p => p.id !== id);
  savePatchNotes(lista);
  render();
}

function formatarData(dataISO) {
  const d = new Date(dataISO + 'T00:00:00');
  return d.toLocaleDateString('pt-BR');
}

function render() {
  const lista = document.getElementById('patch-lista-admin');
  const count = document.getElementById('patch-count');

  const data = getPatchNotes();

  if (count) count.innerText = `(${data.length})`;

  if (!data.length) {
    lista.innerHTML = '<p class="patch-empty">Nenhuma patch note cadastrada ainda.</p>';
    return;
  }

  lista.innerHTML = data.map(p => `
    <div class="patch-card">
      <div class="patch-top">
        <div>
          <div class="patch-title">v${p.versao} — ${p.titulo}</div>
          <div class="patch-date">${formatarData(p.data)}</div>
        </div>

        <button class="patch-delete" data-id="${p.id}">
          Excluir
        </button>
      </div>

      <ul class="patch-items">
        ${p.itens.map(i => `<li>${i.icon} ${i.texto}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function getFormData() {
  const versao = document.getElementById('patch-versao').value.trim();
  const data = document.getElementById('patch-data').value;
  const titulo = document.getElementById('patch-titulo').value.trim();

  const blocks = document.querySelectorAll('.patch-item-block');
  const itens = [];

  blocks.forEach(block => {
    const texto = block.querySelector('.patch-item-texto')?.value.trim();
    const icon = block.querySelector('.field')?.dataset.icon || '🆕';

    if (texto) {
      itens.push({ icon, texto });
    }
  });

  if (!versao || !data || !titulo || itens.length === 0) {
    alert('Preencha todos os campos');
    return null;
  }

  return { versao, data, titulo, itens };
}

function clearForm() {
  document.getElementById('patch-versao').value = '';
  document.getElementById('patch-data').value = '';
  document.getElementById('patch-titulo').value = '';

  document.getElementById('patch-itens-wrap').innerHTML = createItemBlock(1);
}

function createItemBlock(index) {
  const icons = ['🆕','✨','🔒','⚙️','🎨','📱','💬','📖','🧊','🌸','❤️','📋','⏱️','📸','🌐','👤'];

  return `
    <div class="patch-item-block">
      <div class="icon-picker">
        ${icons.map((i, idx) => `
          <button class="icon-option ${idx === 0 ? 'active' : ''}" data-icon="${i}">
            ${i}
          </button>
        `).join('')}
      </div>

      <div class="field" data-icon="🆕">
        <span class="field-icon">🆕</span>
        <input class="patch-item-texto" type="text" placeholder="Item ${index}">
      </div>
    </div>
  `;
} 
function preencherExemploJSON() {
  const input = document.getElementById('patch-json-input');
  if (!input) return;

  input.value = `{
  "versao": "1.9.0",
  "data": "2026-03-18",
  "titulo": "Melhorias no sistema",
  "itens": [
    { "icon": "✨", "texto": "Novo sistema de favoritos" },
    { "icon": "⚙️", "texto": "Correções no carregamento" }
  ]
}`;
} 
function copiarJSON() {
  navigator.clipboard.writeText(JSON.stringify(getPatchNotes(), null, 2));
  alert('Copiado!');
}

function importarJSON() {
  const input = document.getElementById('patch-json-input');

  try {
    const parsed = JSON.parse(input.value);

    if (Array.isArray(parsed)) {
      parsed.forEach(p => addPatchNote(p));
    } else {
      addPatchNote(parsed);
    }

    render();
    alert('Importado!');
  } catch {
    alert('JSON inválido');
  }
}

function copiarPromptIA() {
  const prompt = `Crie um patch note em JSON:

{
  "versao": "1.9.0",
  "data": "2026-03-18",
  "titulo": "Título",
  "itens": [
    { "icon": "✨", "texto": "Item 1" }
  ]
}`;

  navigator.clipboard.writeText(prompt);
  alert('Prompt copiado!');
}

document.addEventListener('click', (e) => {

  if (e.target.id === 'btn-save-patch') {
    const data = getFormData();
    if (!data) return;

    addPatchNote(data);
    render();
    clearForm();
  }

  if (e.target.id === 'btn-add-item') {
    const wrap = document.getElementById('patch-itens-wrap');
    const total = wrap.querySelectorAll('.patch-item-block').length + 1;

    const div = document.createElement('div');
    div.innerHTML = createItemBlock(total);
    wrap.appendChild(div.firstElementChild);
  }

  if (e.target.classList.contains('patch-delete')) {
    excluirPatchNote(e.target.dataset.id);
  }

  if (e.target.classList.contains('icon-option')) {
    const block = e.target.closest('.patch-item-block');

    block.querySelectorAll('.icon-option').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const icon = e.target.dataset.icon;

    const field = block.querySelector('.field');
    const iconEl = block.querySelector('.field-icon');

    field.dataset.icon = icon;
    iconEl.textContent = icon;
  }

  if (e.target.id === 'btn-copy-json') copiarJSON();
  if (e.target.id === 'btn-import-json') importarJSON();
  if (e.target.id === 'btn-fill-example') preencherExemploJSON();
  if (e.target.id === 'btn-copy-prompt') copiarPromptIA();
});

document.addEventListener('DOMContentLoaded', () => {
  render();
});