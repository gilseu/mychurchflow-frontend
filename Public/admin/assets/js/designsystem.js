/* ========================================
   CONFIGURAÇÕES
   ======================================== */

// Temas disponíveis
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

/* ========================================
   CACHE DE ELEMENTOS
   ======================================== */

let themeBtn = null;
let themeIcon = null;
let themeLabel = null;
let htmlElement = null;

/**
 * Inicializa cache de elementos do DOM
 */
function cacheElements() {
  htmlElement = document.documentElement;
  themeBtn = document.querySelector('.theme-btn');
  themeIcon = document.getElementById('ticon');
  themeLabel = document.getElementById('tlabel');
}

/* ========================================
   FUNÇÕES - ALTERNÂNCIA DE TEMA
   ======================================== */

/**
 * Alterna entre tema claro e escuro
 */
function toggleTheme() {
  const isDark = htmlElement.getAttribute('data-theme') === THEME_DARK;
  const newTheme = isDark ? THEME_LIGHT : THEME_DARK;

  // Atualizar atributo do HTML
  htmlElement.setAttribute('data-theme', newTheme);

  // Atualizar ícone e label
  if (isDark) {
    // Mudar para tema claro
    themeIcon.textContent = '☽';
    themeLabel.textContent = 'Escuro';
  } else {
    // Mudar para tema escuro
    themeIcon.textContent = '☀';
    themeLabel.textContent = 'Claro';
  }

  // Salvar tema na localStorage
  localStorage.setItem('theme-preference', newTheme);
}

/* ========================================
   FUNÇÕES - PERSISTÊNCIA DE TEMA
   ======================================== */

/**
 * Carrega tema salvo do localStorage ou usa padrão
 */
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme-preference');

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  } else {
    // Usar tema inicial do HTML para determinar UI
    const currentTheme = htmlElement.getAttribute('data-theme') || THEME_DARK;
    updateThemeUI(currentTheme);
  }
}

/**
 * Atualiza UI para refletir o tema atual
 */
function updateThemeUI(theme) {
  if (theme === THEME_DARK) {
    themeIcon.textContent = '☀';
    themeLabel.textContent = 'Claro';
  } else {
    themeIcon.textContent = '☽';
    themeLabel.textContent = 'Escuro';
  }
}

/* ========================================
   EVENTOS
   ======================================== */

/**
 * Inicializa todos os event listeners
 */
function initializeEventListeners() {
  // Event listener do botão de alternar tema
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
}

/* ========================================
   INICIALIZAÇÃO
   ======================================== */

/**
 * Executa inicialização quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
  // Preparar elementos do DOM
  cacheElements();

  // Carregar preferência de tema
  loadThemePreference();

  // Inicializar event listeners
  initializeEventListeners();
});
