/* ========================================
   TABS - NAVEGAÇÃO PRINCIPAL
   ======================================== */

/**
 * Alterna entre os painéis principais (monetizacao, financeiro, roadmap, etc)
 */
function switchMain(id, btn) {
  // Remover classe active de todos os painéis
  document.querySelectorAll('.main-panel').forEach(p => p.classList.remove('active'));

  // Remover classe active de todos os botões
  document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));

  // Adicionar classe active ao painel selecionado
  document.getElementById('main-' + id).classList.add('active');

  // Adicionar classe active ao botão clicado
  btn.classList.add('active');

  // Inicializar gráfico do financeiro quando acessado
  if (id === 'financeiro' && !window.chartBuilt) {
    window.chartBuilt = true;
    setTimeout(buildChart, 100);
  }

  // Inicializar gráfico internacional quando acessado
  if (id === 'internacional' && !window.intlChartBuilt) {
    window.intlChartBuilt = true;
    setTimeout(buildIntlChart, 100);
  }
}

/**
 * Alterna entre os painéis secundários (imagens, vídeos, copy)
 */
function switchSub(id, btn) {
  // Remover classe active de todos os painéis secundários
  document.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));

  // Remover classe active de todos os botões secundários
  document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));

  // Adicionar classe active ao painel selecionado
  document.getElementById('sub-' + id).classList.add('active');

  // Adicionar classe active ao botão clicado
  btn.classList.add('active');
}

/* ========================================
   GRÁFICOS - FINANCEIRO
   ======================================== */

/**
 * Constrói o gráfico de projeção de receita (mês 1-6)
 */
function buildChart() {
  const canvas = document.getElementById('growthChart');
  if (!canvas) return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
      datasets: [
        {
          label: 'Faturamento',
          data: [800, 920, 1128, 1350, 1580, 1840],
          backgroundColor: '#1D9E75',
          borderRadius: 4
        },
        {
          label: 'Custos totais',
          data: [689, 689, 700, 710, 720, 735],
          backgroundColor: '#F87171',
          borderRadius: 4
        },
        {
          label: 'Lucro líquido',
          data: [111, 231, 428, 640, 860, 1105],
          backgroundColor: '#378ADD',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#7A736A',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            color: '#7A736A',
            font: {
              size: 12
            },
            callback: function(v) {
              return 'R$ ' + v.toLocaleString('pt-BR');
            }
          },
          grid: {
            color: 'rgba(122,115,106,0.1)'
          }
        }
      }
    }
  });
}

/* ========================================
   GRÁFICOS - INTERNACIONAL
   ======================================== */

/**
 * Constrói o gráfico de faturamento acumulado por mercado (6 meses)
 */
function buildIntlChart() {
  const canvas = document.getElementById('intlChart');
  if (!canvas) return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
      datasets: [
        {
          label: 'Brasil',
          data: [800, 920, 1128, 1350, 1580, 1840],
          backgroundColor: '#378ADD',
          borderRadius: 4
        },
        {
          label: 'ES Latino',
          data: [0, 0, 300, 480, 620, 780],
          backgroundColor: '#EF9F27',
          borderRadius: 4
        },
        {
          label: 'EN EUA',
          data: [0, 0, 0, 600, 900, 1200],
          backgroundColor: '#1D9E75',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#7A736A',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: '#7A736A',
            font: {
              size: 12
            },
            callback: function(v) {
              return 'R$ ' + v.toLocaleString('pt-BR');
            }
          },
          grid: {
            color: 'rgba(122,115,106,0.1)'
          }
        }
      }
    }
  });
}

/* ========================================
   INICIALIZAÇÃO - EVENT LISTENERS
   ======================================== */

/**
 * Inicializa todos os event listeners dos botões de navegação
 */
function inicializarListeners() {
  // Botões de tabs principais
  const mainTabs = document.querySelectorAll('.main-tab');
  mainTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Extrair o ID da data attribute ou usar a ordem
      const panelId = this.getAttribute('data-panel') || this.textContent.toLowerCase().replace(/\s+/g, '-');

      // Determinar o ID correto baseado no índice
      const allTabs = Array.from(mainTabs);
      const index = allTabs.indexOf(this);
      const panelIds = ['monetizacao', 'financeiro', 'roadmap', 'criativos', 'internacional'];
      const id = panelIds[index] || panelId;

      switchMain(id, this);
    });
  });

  // Botões de tabs secundárias
  const subTabs = document.querySelectorAll('.sub-tab');
  subTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const panelId = this.getAttribute('data-panel') || this.textContent.toLowerCase().replace(/\s+/g, '-');
      switchSub(panelId, this);
    });
  });
}

/**
 * Executa a inicialização quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', inicializarListeners);
