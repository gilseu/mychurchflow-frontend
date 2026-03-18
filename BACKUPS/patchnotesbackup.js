// ===============================
// CONFIG
// ===============================
const STORAGE_KEY = 'patch_notes_admin_v1';

// ===============================
// STORE (pronto pra backend depois)
// ===============================
const PatchNotesStore = {
  getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },

  saveAll(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

// ===============================
// SERVICE
// ===============================
const PatchNotesService = {
  getAll() {
    return PatchNotesStore.getAll();
  },

  add(patch) {
    let list = PatchNotesStore.getAll();

    const novoPatch = {
      id: `v${patch.versao.replaceAll('.', '_')}`,
      versao: patch.versao,
      data: patch.data,
      titulo: patch.titulo,
      itens: patch.itens,
      novidade: true
    };

    // evita duplicado
    list = list.filter(p => p.id !== novoPatch.id);

    list.push(novoPatch);

    list.sort((a, b) => new Date(b.data) - new Date(a.data));

    PatchNotesStore.saveAll(list);
  },

  delete(id) {
    let list = PatchNotesStore.getAll();
    list = list.filter(p => p.id !== id);
    PatchNotesStore.saveAll(list);
  }
};

// ===============================
// ICONES
// ===============================
const ICONS = ['🆕','✨','🔒','⚙️','🎨','📱','💬','📖','🧊','🌸','❤️','📋','⏱️','📸','🌐','👤'];

// ===============================
// UI
// ===============================
function render() {
  const lista = document.getElementById('patch-lista-admin');
  const count = document.getElementById('patch-count');

  const data = PatchNotesService.getAll();

  count.innerText = `(${data.length})`;

  if (!data.length) {
    lista.innerHTML = '<p class="patch-empty">Nenhuma patch note cadastrada ainda.</p>';
    return;
  }

  lista.innerHTML = data.map(patch => `
    <div class="patch-card">
      <div class="patch-top">
        <div>
          <div class="patch-title">v${patch.versao} — ${patch.titulo}</div>
          <div class="patch-date">${formatDate(patch.data)}</div>
        </div>

        <button class="patch-delete" data-id="${patch.id}">
          Excluir
        </button>
      </div>

      <ul class="patch-items">
        ${patch.itens.map(i => `<li>${i.icon} ${i.texto}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function formatDate(date) {
  const d = new Date(date + 'T00:00:00');
  return d.toLocaleDateString('pt-BR');
}

// ===============================
// FORM
// ===============================
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

// ===============================
// ITEM BLOCK
// ===============================
function createItemBlock(index) {
  return `
    <div class="patch-item-block">
      <div class="icon-picker">
        ${ICONS.map((i, idx) => `
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

// ===============================
// EVENTOS
// ===============================
document.addEventListener('click', (e) => {
  // salvar
  if (e.target.matches('.btn-primary')) {
    const data = getFormData();
    if (!data) return;

    PatchNotesService.add(data);
    render();
    clearForm();
  }

  // deletar
  if (e.target.matches('.patch-delete')) {
    const id = e.target.dataset.id;

    if (confirm('Excluir patch?')) {
      PatchNotesService.delete(id);
      render();
    }
  }

  // adicionar item
  if (e.target.matches('.btn-secondary') && e.target.innerText.includes('Adicionar')) {
    const wrap = document.getElementById('patch-itens-wrap');
    const total = wrap.querySelectorAll('.patch-item-block').length + 1;

    const div = document.createElement('div');
    div.innerHTML = createItemBlock(total);

    wrap.appendChild(div.firstElementChild);
  }

  // icones
  if (e.target.matches('.icon-option')) {
    const block = e.target.closest('.patch-item-block');

    block.querySelectorAll('.icon-option').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const icon = e.target.dataset.icon;

    const field = block.querySelector('.field');
    const iconEl = block.querySelector('.field-icon');

    field.dataset.icon = icon;
    iconEl.textContent = icon;
  }

  // copiar JSON
  if (e.target.innerText.includes('Copiar JSON')) {
    const data = PatchNotesService.getAll();
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert('Copiado!');
  }

  // importar JSON IA
  if (e.target.innerText.includes('Importar JSON')) {
    const input = document.getElementById('json-input');

    try {
      const parsed = JSON.parse(input.value);

      if (Array.isArray(parsed)) {
        parsed.forEach(p => PatchNotesService.add(p));
      } else {
        PatchNotesService.add(parsed);
      }

      render();
      alert('Importado!');
    } catch {
      alert('JSON inválido');
    }
  }
});

// ===============================
// INIT
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  render();
});