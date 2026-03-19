/* ========================================
   CONFIGURAÇÕES
   ======================================== */
const BASE_PRICE = 19.90;
const TIMER_DURATION = 600; // 10 minutos em segundos

/* ========================================
   CACHE DE ELEMENTOS
   ======================================== */
let extraTotal = 0;
let timerInterval = null;

// Elementos de tema
let themeBtn = null;
let themeIcon = null;
let themeLabel = null;
let htmlElement = null;

// Elementos de modal
let checkoutModal = null;
let modalTotal = null;
let modalSavings = null;
let checkoutBtn = null;

// Elementos de FAQ
let faqItems = null;

// Elementos de timer
let timerEl = null;

// Elementos de observação
let fadeInElements = null;

/**
 * Inicializa cache de elementos do DOM
 */
function cacheElements() {
  // Tema
  htmlElement = document.documentElement;
  themeBtn = document.querySelector('.theme-btn');
  themeIcon = document.getElementById('ticon');
  themeLabel = document.getElementById('tlabel');

  // Modal
  checkoutModal = document.getElementById('checkoutModal');
  modalTotal = document.getElementById('modalTotal');
  modalSavings = document.getElementById('modalSavings');
  checkoutBtn = document.getElementById('checkoutBtn');

  // FAQ
  faqItems = document.querySelectorAll('.faq-item');

  // Timer
  timerEl = document.getElementById('timer');

  // Fade-in
  fadeInElements = document.querySelectorAll('.fade-in');
}

/* ========================================
   FUNÇÕES - TEMA
   ======================================== */

/**
 * Alterna entre tema claro e escuro
 */
function toggleTheme() {
  const isDark = htmlElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  htmlElement.setAttribute('data-theme', newTheme);
  themeIcon.textContent = isDark ? '☽' : '☀';
  themeLabel.textContent = isDark ? 'Escuro' : 'Claro';
  localStorage.setItem('theme-preference', newTheme);
}

/* ========================================
   FUNÇÕES - FAQ
   ======================================== */

/**
 * Alterna abertura/fechamento de item FAQ
 */
function toggleFaq(element) {
  const isOpen = element.classList.contains('open');

  // Fechar todos os itens
  faqItems.forEach(item => item.classList.remove('open'));

  // Abrir o item clicado se não estava aberto
  if (!isOpen) {
    element.classList.add('open');
  }
}

/* ========================================
   FUNÇÕES - MODAL E CHECKOUT
   ======================================== */

/**
 * Abre o modal de checkout
 */
function openModal() {
  checkoutModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal de checkout
 */
function closeModal() {
  checkoutModal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Alterna seleção de produtos extras (bumps)
 */
function toggleBump(element, price) {
  const check = element.querySelector('.modal-item-check');
  const isChecked = check.classList.contains('checked');

  if (isChecked) {
    check.classList.remove('checked');
    extraTotal = Math.round((extraTotal - price) * 100) / 100;
  } else {
    check.classList.add('checked');
    extraTotal = Math.round((extraTotal + price) * 100) / 100;
  }

  updateTotal();
}

/**
 * Atualiza o total exibido no modal
 */
function updateTotal() {
  const total = Math.round((BASE_PRICE + extraTotal) * 100) / 100;
  const savings = Math.round((29.80 + extraTotal - total) * 100) / 100;

  modalTotal.textContent = 'R$' + total.toFixed(2).replace('.', ',');

  if (savings > 0) {
    modalSavings.textContent =
      'Você economiza R$' + savings.toFixed(2).replace('.', ',') + ' em relação ao preço separado';
    modalSavings.style.display = 'block';
  } else {
    modalSavings.style.display = 'none';
  }
}

/**
 * Manipula clique no overlay do modal (fecha ao clicar fora)
 */
function handleModalClick(event) {
  if (event.target === checkoutModal) {
    closeModal();
  }
}

/* ========================================
   FUNÇÕES - TIMER
   ======================================== */

/**
 * Atualiza o timer de oferta limitada
 */
function updateTimer() {
  const key = 'mychurchflow_offer_timer_v1';
  let expiresAt = Number(localStorage.getItem(key) || 0);

  if (!expiresAt || expiresAt < Date.now()) {
    expiresAt = Date.now() + TIMER_DURATION * 1000;
    localStorage.setItem(key, String(expiresAt));
  }

  function tick() {
    const diff = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    const formattedTime =
      (minutes < 10 ? '0' : '') +
      minutes +
      ':' +
      (seconds < 10 ? '0' : '') +
      seconds;

    if (timerEl) {
      timerEl.textContent = formattedTime;
    }

    if (diff > 0) {
      timerInterval = setTimeout(tick, 1000);
    } else {
      expiresAt = Date.now() + TIMER_DURATION * 1000;
      localStorage.setItem(key, String(expiresAt));
      timerInterval = setTimeout(tick, 1000);
    }
  }

  tick();
}

/* ========================================
   FUNÇÕES - OBSERVADOR DE INTERSEÇÃO
   ======================================== */

/**
 * Inicia observação de elementos fade-in para animação ao scroll
 */
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeInElements.forEach(el => {
    observer.observe(el);
  });
}

/* ========================================
   EVENTOS
   ======================================== */

/**
 * Inicializa todos os event listeners
 */
function initializeEventListeners() {
  // Tema - botão
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // FAQ - items
  if (faqItems && faqItems.length > 0) {
    faqItems.forEach(item => {
      item.addEventListener('click', function () {
        toggleFaq(this);
      });
    });
  }

  // Modal - overlay
  if (checkoutModal) {
    checkoutModal.addEventListener('click', handleModalClick);
  }

  // Modal - items (bumps)
  const modalItems = document.querySelectorAll('[data-price]');
  modalItems.forEach(item => {
    item.addEventListener('click', function () {
      const price = parseFloat(this.getAttribute('data-price'));
      toggleBump(this, price);
    });
  });

  // Modal - botão fechar
  const closeButtons = document.querySelectorAll('.modal-close, .modal-header .modal-close');
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  // CTAs - abrir modal
  const ctaButtons = document.querySelectorAll('.cta-primary, .offer-cta, .sticky-bar-btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // VSL - abrir modal
  const vslWrap = document.querySelector('.vsl-wrap');
  if (vslWrap) {
    vslWrap.addEventListener('click', openModal);
  }

  // WhatsApp - botão
  const waBtn = document.querySelector('.wa-btn');
  if (waBtn) {
    waBtn.addEventListener('click', function (e) {
      // Deixar o comportamento padrão do link (href)
    });
  }

  // Checkout - botão final
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', closeModal);
  }

  // Sticky bar - botão
  const stickyBtn = document.querySelector('.sticky-bar-btn');
  if (stickyBtn) {
    stickyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  // Nav CTA - Acessar
  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.addEventListener('click', function (e) {
      // Deixar o href funcionar naturalmente
    });
  }
}

/* ========================================
   INICIALIZAÇÃO
   ======================================== */

/**
 * Executa toda a inicialização quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function () {
  // Cache de elementos
  cacheElements();

  // Inicializar event listeners
  initializeEventListeners();

  // Inicializar observador de interseção (fade-in)
  initIntersectionObserver();

  // Inicializar timer de oferta
  updateTimer();
});

/**
 * Limpar timer ao descarregar página
 */
window.addEventListener('beforeunload', function () {
  if (timerInterval) {
    clearTimeout(timerInterval);
  }
});