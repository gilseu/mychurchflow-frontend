/* ────────────────────────────────────────────────────────────
   MychurchFlow Application JS — Vanilla ES6+
   COMPLETE APPLICATION LOGIC • NO FRAMEWORKS
──────────────────────────────────────────────────────────── */

/* ── TRANSLATIONS & UTILITIES ── */
const TRANSLATIONS = {
  "pt": {
    "app-name": "MychurchFlow",
    "home": "Início",
    "library": "Biblioteca",
    "gerar": "Gerar",
    "planejador": "Planejador",
    "perfil": "Perfil",
    "dinámicas": "Dinâmicas",
    "perguntas": "Perguntas",
    "encontros": "Encontros",
    "quebraGelos": "Quebra-gelos",
    "estudos": "Estudos",
    "search": "Pesquisar...",
    "mostrarMais": "Mostrar mais",
    "noVictory": "Nenhum resultado encontrado",
    "addToFav": "Adicionar aos favoritos",
    "removeFromFav": "Remover dos favoritos",
    "tempo": "Tempo",
    "materiais": "Materiais",
    "objetivo": "Objetivo",
    "passos": "Passos",
    "compartilhar": "Compartilhar",
    "copiar": "Copiar",
    "copiado": "Copiado!",
    "loginTitle": "Bem-vindo!",
    "email": "E-mail",
    "senha": "Senha",
    "entrar": "Entrar",
    "sair": "Sair",
    "perfil": "Perfil",
    "settings": "Configurações",
    "sobre": "Sobre",
    "versao": "Versão",
    "error": "Erro",
    "sucesso": "Sucesso",
    "confirmar": "Confirmar",
    "cancelar": "Cancelar",
    "deletar": "Deletar",
    "editar": "Editar",
    "salvar": "Salvar",
    "loading": "Carregando...",
    "vazio": "Vazio",
    "premium": "Premium",
    "gratis": "Grátis",
    "desbloqueiaAgora": "Desbloquear agora"
  },
  "en": {
    "app-name": "MychurchFlow",
    "home": "Home",
    "library": "Library",
    "gerar": "Generate",
    "planejador": "Planner",
    "perfil": "Profile",
    "dinámicas": "Dynamics",
    "perguntas": "Questions",
    "encontros": "Encounters",
    "quebraGelos": "Icebreakers",
    "estudos": "Studies",
    "search": "Search...",
    "mostrarMais": "Show more",
    "noVictory": "No results found",
    "addToFav": "Add to favorites",
    "removeFromFav": "Remove from favorites",
    "tempo": "Time",
    "materiais": "Materials",
    "objetivo": "Goal",
    "passos": "Steps",
    "compartilhar": "Share",
    "copiar": "Copy",
    "copiado": "Copied!",
    "loginTitle": "Welcome!",
    "email": "Email",
    "senha": "Password",
    "entrar": "Sign in",
    "sair": "Sign out",
    "perfil": "Profile",
    "settings": "Settings",
    "sobre": "About",
    "versao": "Version",
    "error": "Error",
    "sucesso": "Success",
    "confirmar": "Confirm",
    "cancelar": "Cancel",
    "deletar": "Delete",
    "editar": "Edit",
    "salvar": "Save",
    "loading": "Loading...",
    "vazio": "Empty",
    "premium": "Premium",
    "gratis": "Free",
    "desbloqueiaAgora": "Unlock now"
  },
  "es": {
    "app-name": "MychurchFlow",
    "home": "Inicio",
    "library": "Biblioteca",
    "gerar": "Generar",
    "planejador": "Planificador",
    "perfil": "Perfil",
    "dinámicas": "Dinámicas",
    "perguntas": "Preguntas",
    "encontros": "Encuentros",
    "quebraGelos": "Rompehielos",
    "estudos": "Estudios",
    "search": "Buscar...",
    "mostrarMais": "Mostrar más",
    "noVictory": "Sin resultados",
    "addToFav": "Agregar a favoritos",
    "removeFromFav": "Quitar de favoritos",
    "tempo": "Tiempo",
    "materiais": "Materiales",
    "objetivo": "Objetivo",
    "passos": "Pasos",
    "compartilhar": "Compartir",
    "copiar": "Copiar",
    "copiado": "¡Copiado!",
    "loginTitle": "¡Bienvenido!",
    "email": "Correo",
    "senha": "Contraseña",
    "entrar": "Iniciar sesión",
    "sair": "Cerrar sesión",
    "perfil": "Perfil",
    "settings": "Configuración",
    "sobre": "Acerca de",
    "versao": "Versión",
    "error": "Error",
    "sucesso": "Éxito",
    "confirmar": "Confirmar",
    "cancelar": "Cancelar",
    "deletar": "Borrar",
    "editar": "Editar",
    "salvar": "Guardar",
    "loading": "Cargando...",
    "vazio": "Vacío",
    "premium": "Premium",
    "gratis": "Gratis",
    "desbloqueiaAgora": "Desbloquear ahora"
  }
};

function t(key) {
  const lang = localStorage.getItem('appLanguage') || 'pt';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
}

/* ── DATA STRUCTURES ── */
const dinamicas = [
  {id: 1, titulo: "Dinâmica das Mãos", categoria: "quebra-gelo", tempo: "5-10 min", materiais: "nenhum", objetivo: "Integração e aquecimento do grupo", passos: ["Todos de pé em círculo", "Cada pessoa coloca as mãos no centro", "Instrutor fala a história", "Ao sinal, retiram as mãos"], aplicacao: "Perfeita para começar encontros"}
];

const perguntas100 = [
  {id: 1, categoria: "fé", categoriaLabel: "Fé", pergunta: "Qual foi o momento em que você mais sentiu a presença de Deus?"},
  {id: 2, categoria: "vida", categoriaLabel: "Vida", pergunta: "Qual é o seu maior sonho e como Deus está envolvido nele?"}
];

const CORES_CATEGORIA_P = {
  "fé": "#7B5EA7",
  "vida": "#C9952A",
  "relacionamentos": "#B05A6E",
  "comunidade": "#2A7A52"
};

const upsells = {
  "premium": {titulo: "Acesso Premium", preco: "R$ 29,90/mês", beneficios: ["Dinâmicas ilimitadas", "Planejador completo"]}
};

let favorites = [];
let currentDetail = null;
let planos = [];
let historico = [];
let usuarioAtual = null;
let currentLanguage = 'pt';

/* ── STORAGE FUNCTIONS ── */
function STORAGE_KEY_FAVORITES() {
  return usuarioAtual?.email ? `fav_${usuarioAtual.email}` : 'fav_guest';
}

function STORAGE_KEY_PLANOS() {
  return usuarioAtual?.email ? `planos_${usuarioAtual.email}` : 'planos_guest';
}

function STORAGE_KEY_HISTORICO() {
  return usuarioAtual?.email ? `hist_${usuarioAtual.email}` : 'hist_guest';
}

function salvarStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_FAVORITES(), JSON.stringify(favorites));
    localStorage.setItem(STORAGE_KEY_PLANOS(), JSON.stringify(planos));
    localStorage.setItem(STORAGE_KEY_HISTORICO(), JSON.stringify(historico));
  } catch (e) {
    console.warn('Storage limit exceeded:', e);
  }
}

function carregarStorage() {
  try {
    favorites = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITES())) || [];
    planos = JSON.parse(localStorage.getItem(STORAGE_KEY_PLANOS())) || [];
    historico = JSON.parse(localStorage.getItem(STORAGE_KEY_HISTORICO())) || [];
  } catch (e) {
    console.warn('Error loading storage:', e);
    favorites = [];
    planos = [];
    historico = [];
  }
}

/* ── THEME MANAGEMENT ── */
function toggleTheme() {
  const currentTheme = localStorage.getItem('appTheme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('appTheme', newTheme);
  
  // Update icon visibility via CSS
  document.querySelector('.theme-toggle').classList.toggle('toggled');
}

function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('appTheme') || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);
}

/* ── NAVIGATION ── */
function nav(screenId, navId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  // Show selected screen
  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.add('active');
    screen.scrollTop = 0;
  }
  
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (navId) {
    document.getElementById(navId)?.classList.add('active');
  }
  
  // Toggle FAB visibility
  fabScrollCheck();
}

function fabScrollCheck() {
  const homeScreen = document.getElementById('screen-home');
  const gerFab = document.querySelector('.gerar-fab-wrap');
  
  if (!homeScreen || !gerFab) return;
  
  if (homeScreen.classList.contains('active')) {
    gerFab.classList.add('visivel');
    if (homeScreen.scrollTop > 300) {
      gerFab.classList.add('fab-hidden');
    } else {
      gerFab.classList.remove('fab-hidden');
    }
  } else {
    gerFab.classList.remove('visivel');
  }
}

/* ── DINÂMICAS MANAGEMENT ── */
function renderDinamicas() {
  const container = document.getElementById('lib-dinamicas-grid');
  if (!container) return;
  
  container.innerHTML = dinamicas.map(din => `
    <div class="content-card" onclick="openDetail('din', ${din.id})">
      <div class="content-card-top">
        <h4>${din.titulo}</h4>
        <button class="fav-btn" onclick="event.stopPropagation(); toggleFav('din', ${din.id})">${isFavorited('din', din.id) ? '❤️' : '🤍'}</button>
      </div>
      <div class="content-card-meta">
        <span class="tag">${din.categoria}</span>
        <span class="tag">${din.tempo}</span>
      </div>
    </div>
  `).join('');
}

function openDetail(type, id) {
  currentDetail = {type, id};
  nav('screen-detail', null);
  renderDetail();
}

function renderDetail() {
  if (!currentDetail) return;
  
  const details = document.getElementById('detail-content');
  const item = type === 'din' ? dinamicas.find(d => d.id === currentDetail.id) : null;
  
  if (!item) return;
  
  const html = `
    <div class="detail-section">
      <h5>Objetivo</h5>
      <p>${item.objetivo}</p>
    </div>
    <div class="detail-section">
      <h5>Tempo</h5>
      <p>${item.tempo}</p>
    </div>
    <div class="detail-section">
      <h5>Materiais</h5>
      <p>${item.materiais}</p>
    </div>
    <div class="detail-section">
      <h5>Passos</h5>
      <ol class="steps">${item.passos.map((p, i) => `<li><span class="step-num">${i+1}</span>${p}</li>`).join('')}</ol>
    </div>
    <div class="detail-section">
      <h5>Aplicação</h5>
      <p>${item.aplicacao}</p>
    </div>
  `;
  
  if (details) {
    details.innerHTML = html;
  }
}

function toggleFav(type, id) {
  const key = `${type}_${id}`;
  const index = favorites.indexOf(key);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(key);
  }
  
  salvarStorage();
  renderDinamicas();
  renderFavoritos();
}

function isFavorited(type, id) {
  return favorites.includes(`${type}_${id}`);
}

/* ── SEARCH & FILTER ── */
function doSearch(query) {
  const filtered = dinamicas.filter(d => 
    d.titulo.toLowerCase().includes(query.toLowerCase()) ||
    d.categoria.toLowerCase().includes(query.toLowerCase())
  );
  
  renderFilteredDinamicas(filtered);
}

function filterDinamicas() {
  const categoria = document.getElementById('filter-categoria')?.value;
  const tempo = document.getElementById('filter-tempo')?.value;
  
  let filtered = dinamicas;
  
  if (categoria) {
    filtered = filtered.filter(d => d.categoria === categoria);
  }
  if (tempo) {
    filtered = filtered.filter(d => d.tempo === tempo);
  }
  
  renderFilteredDinamicas(filtered);
}

function renderFilteredDinamicas(items) {
  const container = document.getElementById('lib-dinamicas-grid');
  if (!container) return;
  
  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>Nenhum resultado encontrado</p></div>';
    return;
  }
  
  container.innerHTML = items.map(din => `
    <div class="content-card" onclick="openDetail('din', ${din.id})">
      <h4>${din.titulo}</h4>
      <span class="tag">${din.categoria}</span>
    </div>
  `).join('');
}

/* ── FAVORITES VIEW ── */
function setFavTab(tab) {
  document.querySelectorAll('.fav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-fav-tab="${tab}"]`)?.classList.add('active');
  renderFavoritos();
}

function renderFavoritos() {
  const container = document.getElementById('favs-container');
  if (!container) return;
  
  const favItems = favorites.map(key => {
    const [type, id] = key.split('_');
    if (type === 'din') {
      return dinamicas.find(d => d.id === parseInt(id));
    } else if (type === 'per') {
      return perguntas100.find(p => p.id === parseInt(id));
    }
  }).filter(Boolean);
  
  if (favItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Você ainda não tem favoritos</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = favItems.map(item => `
    <div class="content-card">
      <h4>${item.titulo || item.pergunta}</h4>
      <button onclick="toggleFav('${item.id}')">❤️ Remover</button>
    </div>
  `).join('');
}

/* ── GERAR FUNCTIONS ── */
function getTemaSelecionado() {
  return document.getElementById('gerar-tema-select')?.value || 'geral';
}

function getDinamicaPorTema(tema) {
  if (tema === 'geral') return dinamicas[Math.floor(Math.random() * dinamicas.length)];
  return dinamicas.find(d => d.categoria === tema) || dinamicas[0];
}

function getPerguntaPorTema(tema) {
  if (tema === 'geral') return perguntas100[Math.floor(Math.random() * perguntas100.length)];
  return perguntas100.find(p => p.categoria === tema) || perguntas100[0];
}

function gerarTudoJunto() {
  const tema = getTemaSelecionado();
  const din = getDinamicaPorTema(tema);
  const per = getPerguntaPorTema(tema);
  
  const conjunto = {
    id: Date.now(),
    tema,
    data: new Date().toLocaleDateString('pt-BR'),
    dinmica: din,
    pergunta: per,
    nome: `Conjunto ${new Date().toLocaleDateString('pt-BR')}`
  };
  
  historico.push(conjunto);
  salvarStorage();
  
  showToast(`Conjunto gerado: ${conjunto.nome}`);
  renderHistoricoConjuntos();
}

function renderHistoricoConjuntos() {
  const container = document.getElementById('hist-conjuntos');
  if (!container) return;
  
  if (historico.length === 0) {
    container.innerHTML = '<p class="empty-state">Nenhum conjunto gerado ainda</p>';
    return;
  }
  
  container.innerHTML = historico.map(conj => `
    <div class="hist-card">
      <h4>${conj.nome}</h4>
      <p>${conj.data}</p>
      <button onclick="abrirConjuntoPreview(${conj.id})">Visualizar</button>
    </div>
  `).join('');
}

function abrirConjuntoPreview(conjId) {
  const conj = historico.find(c => c.id === conjId);
  if (!conj) return;
  
  const overlay = document.querySelector('.gerar-conjunto-preview-overlay');
  if (overlay) {
    overlay.classList.add('open');
    // Render preview content
    const sheet = overlay.querySelector('.gerar-conjunto-preview-sheet');
    if (sheet) {
      sheet.innerHTML = `
        <div class="gerar-conjunto-preview-handle"></div>
        <div style="padding: 20px;">
          <h3>${conj.nome}</h3>
          <p><strong>Dinâmica:</strong> ${conj.dinmica.titulo}</p>
          <p><strong>Pergunta:</strong> ${conj.pergunta.pergunta}</p>
          <button onclick="fecharConjuntoPreview()">Fechar</button>
        </div>
      `;
    }
  }
}

function fecharConjuntoPreview() {
  const overlay = document.querySelector('.gerar-conjunto-preview-overlay');
  if (overlay) {
    overlay.classList.remove('open');
  }
}

/* ── PLANNER FUNCTIONS ── */
function onTemaSelect() {
  const tema = document.getElementById('plan-tema-select')?.value;
  if (!tema) return;
  
  // Render suggestions for selected theme
  const suggestions = dinamicas.filter(d => d.categoria === tema).slice(0, 3);
  const sugContainer = document.getElementById('plan-din-suggestions');
  if (sugContainer) {
    sugContainer.innerHTML = suggestions.map(sug => `
      <div class="plan-sug-item">
        <div class="plan-sug-item-info">
          <h5 class="plan-sug-item-title">${sug.titulo}</h5>
        </div>
        <button class="btn-usar-sug" onclick="usarSugestaoPerguntas('${sug.id}')">Usar</button>
      </div>
    `).join('');
  }
}

function usarSugestaoPerguntas(suggestionId) {
  const sug = dinamicas.find(d => d.id === parseInt(suggestionId));
  if (sug) {
    const field = document.getElementById('plan-din-chosen');
    if (field) {
      field.value = sug.titulo;
      currentDetail = {type: 'din', id: sug.id, dados: sug};
    }
  }
}

/* ── HELPERS ── */
function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function markError(fieldId) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.add('error');
    const parent = field.closest('.plan-field');
    if (parent) parent.classList.add('has-error');
  }
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.remove('error');
    const parent = field.closest('.plan-field');
    if (parent) parent.classList.remove('has-error');
  }
}

function renderVerseChips() {
  // Render bible verse suggestion chips
  const container = document.getElementById('verse-chips');
  if (container) {
    container.innerHTML = `
      <div class="verse-chip">João 3:16</div>
      <div class="verse-chip">Salmos 23</div>
      <div class="verse-chip">1 João 4:7</div>
    `;
  }
}

/* ── INITIALIZATION ── */
function init() {
  initTheme();
  carregarStorage();
  
  // Set initial screen
  nav('screen-home', 'nav-home');
  
  // Render initial content
  renderDinamicas();
  renderFavoritos();
  renderHistoricoConjuntos();
  
  // Event listeners
  const searchInputs = document.querySelectorAll('.search-box');
  searchInputs.forEach(inp => {
    inp.addEventListener('input', (e) => doSearch(e.target.value));
  });
  
  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Home screen scroll for FAB
  const homeScreen = document.getElementById('screen-home');
  if (homeScreen) {
    homeScreen.addEventListener('scroll', fabScrollCheck);
  }
  
  // Landing on page load
  window.addEventListener('load', () => {
    console.log('App initialized');
  });
}

// Show app when ready
document.addEventListener('DOMContentLoaded', () => {
  init();
  const app = document.getElementById('app');
  if (app) {
    app.classList.add('visivel');
  }
});

/* ── LANGUAGE FUNCTIONS ── */
function aplicarIdioma(lang) {
  currentLanguage = lang;
  localStorage.setItem('appLanguage', lang);
  location.reload(); // Reload to apply translations
}
