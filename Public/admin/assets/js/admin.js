/* ========================================
   CONFIGURAÇÕES
   ======================================== */
const SENHA_CORRETA = "123456"; // 🔥 TROCA ISSO

/* ========================================
   ELEMENTOS DO DOM
   ======================================== */
const loginElement = document.getElementById("login");
const painelElement = document.getElementById("painel");
const senhaInput = document.getElementById("senha");
const entrarButton = document.querySelector("button");

/* ========================================
   AUTENTICAÇÃO
   ======================================== */

/**
 * Verifica se credenciais estão corretas e exibe o painel
 */
function entrar() {
  const senha = senhaInput.value;

  if (senha === SENHA_CORRETA) {
    mostrarPainel();
  } else {
    alert("Senha incorreta");
    senhaInput.value = "";
    senhaInput.focus();
  }
}

/**
 * Exibe o painel e oculta a tela de login
 */
function mostrarPainel() {
  loginElement.classList.add("hidden");
  painelElement.classList.remove("hidden");
  localStorage.setItem("admin_logado", "true");
}

/**
 * Oculta o painel e exibe login
 */
function fazerLogout() {
  painelElement.classList.add("hidden");
  loginElement.classList.remove("hidden");
  localStorage.removeItem("admin_logado");
  senhaInput.value = "";
  senhaInput.focus();
}

/* ========================================
   INICIALIZAÇÃO
   ======================================== */

/**
 * Verifica se o usuário já está logado
 */
function verificarStatusLogado() {
  if (localStorage.getItem("admin_logado") === "true") {
    mostrarPainel();
  }
}

/**
 * Permite login ao pressionar Enter
 */
function handleKeyPress(event) {
  if (event.key === "Enter") {
    entrar();
  }
}

/**
 * Inicializa os event listeners
 */
function inicializar() {
  // Verificar se já está logado
  verificarStatusLogado();

  // Event listener do botão entrar
  entrarButton.addEventListener("click", entrar);

  // Event listener para tecla Enter no input de senha
  senhaInput.addEventListener("keypress", handleKeyPress);
}

// Executar inicialização quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", inicializar);
