console.log('JS OK')
// ── FORWARD DECLARATIONS (previne TDZ — variáveis usadas antes da definição completa) ──
var currentLang = 'pt';
function t(key, fallback){
  try{ return TRANSLATIONS?.[currentLang]?.[key] || TRANSLATIONS?.['pt']?.[key] || fallback || key; }
  catch(e){ return fallback || key; }
}

function openLocked(name,desc){
  document.getElementById('modal-title').textContent=name;
  document.getElementById('modal-desc').textContent=desc+' '+t('modal.insira.codigo');
  document.getElementById('modal-locked').classList.add('open');
}
function closeModal(e){if(e.target===document.getElementById('modal-locked'))closeModalDirect();}
function closeModalDirect(){document.getElementById('modal-locked').classList.remove('open');document.getElementById('modal-code').value='';}
function tryUnlock(){
  const code=document.getElementById('modal-code').value.trim().toUpperCase();
  if(code==='DEMO123'){closeModalDirect();toastMsg(t('toast.desbloqueado'));}
  else{document.getElementById('modal-code').style.borderColor='var(--rose)';setTimeout(()=>document.getElementById('modal-code').style.borderColor='',1200);toastMsg(t('toast.codigo.invalido'));}
}

// ── MODAL UPSELL ──
function openUpsell(id){
  const u=upsells[id];
  document.getElementById('upsell-modal-title').textContent=u.icon+' '+u.title;
  document.getElementById('upsell-modal-sub').textContent=u.sub;
  document.getElementById('upsell-old-price').textContent=u.oldPrice;
  document.getElementById('upsell-new-price').textContent=u.newPrice;
  document.getElementById('upsell-buy-btn').textContent=u.btnLabel;
  document.getElementById('upsell-features').innerHTML=u.features.map(f=>`<div class="upsell-feat"><span>${f.icon}</span><span>${f.text}</span></div>`).join('');
  document.getElementById('modal-upsell').classList.add('open');
}
function closeUpsellModal(e){if(e.target===document.getElementById('modal-upsell'))closeUpsellDirect();}
function closeUpsellDirect(){document.getElementById('modal-upsell').classList.remove('open');}

// ── TOAST ──
let toastTimer;
let toastTopTimer;
function toastMsg(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2500);
}
function toastTop(msg){
  const el=document.getElementById('toast-top');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTopTimer);toastTopTimer=setTimeout(()=>el.classList.remove('show'),1500);
}

// ── SISTEMA DE ACESSO ──
const USUARIOS = {
  'admin@encontros.com': {
    senha: 'admin2024',
    nome: 'Administrador',
    avatar: '👑',
    plano: 'Admin — Acesso Total',
    planoBg: 'linear-gradient(135deg,#B8860B,#C9973A)',
    modulos: {
      dinamicas: true,
      perguntas: true,
      quebraGelos: true,
      estudos: true,
      encontros: true,
      devocional: true,
      planejador: true,
      guia: true,
      floresça: true,
    }
  },
  'aluna@email.com': {
    senha: 'aluna123',
    nome: 'Maria Silva',
    avatar: '🌸',
    plano: 'Produto Principal',
    planoBg: 'var(--rose)',
    modulos: {
      dinamicas: true,
      perguntas: false,
      quebraGelos: false,
      estudos: false,
      encontros: false,
      devocional: false,
      planejador: false,
      guia: true,
      floresça: true,
    }
  },
  'nova@email.com': {
    senha: 'nova123',
    nome: 'Ana Teste',
    avatar: '🌱',
    plano: 'Acesso Total',
    planoBg: 'linear-gradient(135deg,#7B5EA7,#9B7CC7)',
    modulos: {
      dinamicas: true,
      perguntas: true,
      quebraGelos: true,
      estudos: true,
      encontros: true,
      devocional: true,
      planejador: true,
      guia: true,
      floresça: true,
    }
  },
  'brenda@encontros.com': {
    senha: 'brenda123',
    nome: 'Brenda',
    avatar: '💜',
    plano: 'Full Access',
    planoBg: 'linear-gradient(135deg,#7B5EA7,#9B7CC7)',
    modulos: {
      dinamicas: true,
      perguntas: true,
      quebraGelos: true,
      estudos: true,
      encontros: true,
      devocional: true,
      planejador: true,
      guia: true,
      floresça: true,
    }
  },
  'brenda.combo@encontros.com': {
    senha: 'brenda456',
    nome: 'Brenda',
    avatar: '🌸',
    plano: 'Only Combo',
    planoBg: 'linear-gradient(135deg,#C9952A,#E8B84B)',
    modulos: {
      dinamicas: true,
      perguntas: false,
      quebraGelos: false,
      estudos: false,
      encontros: false,
      devocional: false,
      planejador: true,
      guia: false,
      floresça: false,
    }
  },
};

const MODULOS_LABELS = {
  dinamicas:   {icon:'🎭', key:'lib.dinamicas'},
  perguntas:   {icon:'💬', key:'lib.perguntas'},
  quebraGelos: {icon:'🧊', key:'lib.quebraGelos'},
  estudos:     {icon:'📖', key:'lib.estudos'},
  encontros:   {icon:'🌸', key:'prod.encontros.titulo'},
  devocional:  {icon:'📖', key:'prod.devocional.titulo'},
  planejador:  {icon:'📝', key:'bonus.planejador.titulo'},
  guia:        {icon:'🎤', key:'bonus.guia.titulo'},
  floresça:    {icon:'🌸', key:'bonus.floresca.titulo'},
};
// Helper para pegar label traduzido
function moduloLabel(k){ return MODULOS_LABELS[k] ? t(MODULOS_LABELS[k].key) : k; }

let usuarioAtual = null;
const STORAGE_KEY_AUTH = 'encontros_auth_v1';

function fazerLogin(){
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const senha = document.getElementById('login-senha').value;
  const lembrar = document.getElementById('login-lembrar').checked;
  const errEl = document.getElementById('login-error');
  const emailEl = document.getElementById('login-email');
  const senhaEl = document.getElementById('login-senha');

  emailEl.classList.remove('error');
  senhaEl.classList.remove('error');
  errEl.classList.remove('show');

  const user = USUARIOS[email];
  if(!user || user.senha !== senha){
    emailEl.classList.add('error');
    senhaEl.classList.add('error');
    errEl.classList.add('show');
    return;
  }

  usuarioAtual = {...user, email};
  if(lembrar){
    try{ localStorage.setItem(STORAGE_KEY_AUTH, email); }catch(e){}
  } else {
    try{ localStorage.removeItem(STORAGE_KEY_AUTH); }catch(e){}
  }
  entrarNoApp();
}

function loginRapidoNovo(){
  // Limpa TODOS os dados da conta nova para simular primeira vez
  const email = 'nova@email.com';
  try{
    // Coletar todas as chaves primeiro, depois deletar (evita corrupção de índice)
    const allKeys = [];
    for(let i=0; i<localStorage.length; i++) allKeys.push(localStorage.key(i));
    allKeys.filter(k=>k && k.includes(email.replace('@','').replace('.',''))).forEach(k=>localStorage.removeItem(k));
    // Também pelo email direto
    allKeys.filter(k=>k && k.includes(email)).forEach(k=>localStorage.removeItem(k));
  }catch(e){}
  loginRapido(email,'nova123','profile-nova');
}

function loginRapido(email, senha, btnId){
  // Highlight selected profile
  document.querySelectorAll('.login-profile-btn').forEach(b=>b.classList.remove('selecionado'));
  if(btnId) document.getElementById(btnId).classList.add('selecionado');

  document.getElementById('login-email').value = email;
  document.getElementById('login-senha').value = senha;
  document.getElementById('login-lembrar').checked = true;

  // Small delay so user sees the selection before transitioning
  setTimeout(()=>fazerLogin(), 350);
}

function entrarNoApp(){
  const loginEl = document.getElementById('login-screen');
  const appEl   = document.getElementById('app');

  loginEl.classList.add('saindo');
  setTimeout(()=>{
    loginEl.classList.remove('active','saindo');
    appEl.style.opacity = '';
    appEl.style.transform = '';
    appEl.classList.add('visivel');
    // Mostrar nav e botões
    const nav = document.getElementById('bottom-nav');
    if(nav) nav.style.display = '';
    const wfab = document.getElementById('whatsapp-fab');
    if(wfab) wfab.style.display = '';
    const gerarFab = document.getElementById('gerar-fab-wrap');
    if(gerarFab) gerarFab.classList.add('visivel');
    // Scroll listener do FAB na home
    const homeScreen = document.getElementById('screen-home');
    if(homeScreen) homeScreen.onscroll = () => fabScrollCheck();
    // Posicionar FAB após renderização completa
    setTimeout(fabScrollCheck, 400);
    carregarStorage();
    carregarHistorico();
    carregarHistoricoEnc();
    atualizarUIUsuario();
    atualizarBloqueios();
    renderDinamicas(dinamicas);
    renderPlanos();
    renderFavoritos();
    renderHistorico();
    popularFiltroCategoria();
    const _fcl=document.getElementById('fav-count-label'); if(_fcl) _fcl.textContent=`${favorites.length} salvos`;
    // Mostrar aba admin só para admin
    const isAdmin = usuarioAtual?.email === 'admin@encontros.com';
    document.getElementById('nav-admin').style.display = isAdmin ? 'flex' : 'none';
    if(isAdmin) renderAdminPanel();
    // Mostrar dica do dia
    setTimeout(mostrarTipDoDia, 800);
    // Checar novidades
    renderNovidadesList();
    checkNovidadesModal();
    // Mostrar FAB de Gerar na home (já declarado acima)
    // Onboarding para novas usuárias (após novidades)
    setTimeout(()=>{
      // Se o modal de novidades estiver aberto, espera ele fechar
      const novEl = document.getElementById('novidades-overlay');
      if(novEl && novEl.classList.contains('open')){
        const orig = fecharNovidades;
        window._onbAfterNov = ()=>{ setTimeout(abrirOnboarding, 600); };
      } else {
        abrirOnboarding();
      }
    }, 2500);
    toastMsg('✦ ' + t('home.welcome.back').replace('🌿','').trim().split(',')[0] + ', ' + usuarioAtual.nome.split(' ')[0] + '!');
    setTimeout(aplicarIdioma, 50);
  }, 380);
}

function fazerLogout(){
  const loginEl = document.getElementById('login-screen');
  const appEl   = document.getElementById('app');
  closePerfil();
  appEl.classList.remove('visivel');
  planos = []; favorites = []; historico = []; historicoEnc = []; favTabAtiva = 'todos';
  conjuntosGerados = [];
  conjuntosEncontros = [];
  currentConjunto = null;
  currentGeradaId = null;
  geradasSessao = [];
  encontrosGeradosSessao = [];
  usuarioAtual = null;
  try{ localStorage.removeItem(STORAGE_KEY_AUTH); }catch(e){}
  document.getElementById('modal-usuario').classList.remove('open');
  document.getElementById('login-email').value = '';
  document.getElementById('login-senha').value = '';
  document.getElementById('login-error').classList.remove('show');
  // Limpar estado visual dos quick-login profiles
  document.querySelectorAll('.login-profile-btn').forEach(b => b.classList.remove('selecionado'));
  // Resetar card do gerador para placeholder
  const gdT = document.getElementById('gd-titulo'); if(gdT) gdT.textContent = '—';
  const gdD = document.getElementById('gd-desc'); if(gdD) gdD.textContent = '';
  // Esconder nav, FAB e whatsapp ao sair
  const fab = document.getElementById('gerar-fab-wrap');
  if(fab) fab.classList.remove('visivel');
  const nav = document.getElementById('bottom-nav');
  if(nav) nav.style.display = 'none';
  const wfab = document.getElementById('whatsapp-fab');
  if(wfab) wfab.style.display = 'none';
  // Voltar para home screen
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const home = document.getElementById('screen-home');
  if(home) home.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const nh = document.getElementById('nav-home');
  if(nh) nh.classList.add('active');
  setTimeout(()=>{ loginEl.classList.add('active'); }, 380);
}

function atualizarUIUsuario() {
  if (!usuarioAtual) return;

  let iniciais = '';

  if (usuarioAtual.nome) {
    iniciais = usuarioAtual.nome
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('');
  }

  const av = document.getElementById('user-avatar');
  if (av) av.textContent = iniciais;

  const userNameLabel = document.getElementById('user-name-label');
  if (userNameLabel && usuarioAtual.nome) {
    userNameLabel.innerHTML =
      usuarioAtual.nome.split(' ')[0] +
      (usuarioAtual.email === 'admin@encontros.com'
        ? ' <span class="admin-tag">ADMIN</span>'
        : '');
  }

  const topbarWelcome = document.getElementById('topbar-welcome');
  if (topbarWelcome) {
    topbarWelcome.textContent = t('home.welcome.back');
  }

  // Aba admin
  const isAdmin = usuarioAtual.email === 'admin@encontros.com';
  const navAdmin = document.getElementById('nav-admin');
  if (navAdmin) navAdmin.style.display = isAdmin ? 'flex' : 'none';
  if (isAdmin) setTimeout(renderAdminPanel, 100);
}
function atualizarBloqueios(){
  if(!usuarioAtual) return;
  const m = usuarioAtual.modulos;

  // Helper para cards de biblioteca simples
  function setCard(selector, unlocked, openFn, lockedName, lockedDesc){
    const el = document.querySelector(selector);
    if(!el) return;
    if(unlocked){
      el.classList.remove('locked');
      el.classList.add('unlocked');
      const badge = el.querySelector('.lock-badge');
      if(badge) badge.remove();
      el.onclick = openFn;
    } else {
      el.classList.add('locked');
      el.classList.remove('unlocked');
      if(!el.querySelector('.lock-badge')){
        const b = document.createElement('div');
        b.className='lock-badge'; b.textContent='🔒';
        el.prepend(b);
      }
      el.onclick = ()=>openLocked(lockedName, lockedDesc);
    }
  }

  // Helper para cards premium — sempre re-renderiza baseado no estado atual
  function setPremiumCard(selector, unlocked, openFn, icon, title, desc, lockedName, lockedDesc){
    const el = document.querySelector(selector);
    if(!el) return;
    if(unlocked){
      el.className = 'bonus-card';
      el.innerHTML = `
        <div class="bonus-icon">${icon}</div>
        <div>
          <div class="bonus-badge" style="background:var(--rose-light);color:var(--rose)">${t('bonus.desbloqueado')}</div>
          <div class="bonus-title">${title}</div>
          <div class="bonus-sub">${desc}</div>
        </div>`;
      el.onclick = openFn;
    } else {
      // Restaura como premium-card bloqueado
      const isPrimary = selector.includes('encontros');
      el.className = isPrimary ? 'premium-card premium-card-main' : 'premium-card premium-card-secondary';
      el.setAttribute('data-mod', selector.replace(/\[data-mod="(.+)"\]/, '$1'));
      if(isPrimary){
        el.innerHTML = `
          <div class="premium-card-glow"></div>
          <div class="premium-top-badge" data-i18n="prod.mais.vendido">⭐ ${t('prod.mais.vendido')}</div>
          <div class="premium-inner">
            <div class="premium-icon-wrap">🌸</div>
            <div class="premium-content">
              <div class="premium-title">${t('prod.encontros.titulo')}</div>
              <div class="premium-desc">${t('prod.encontros.desc')}</div>
              <div class="premium-features">
                <span class="premium-feat">${t('prod.encontros.feat1')}</span>
                <span class="premium-feat">${t('prod.encontros.feat2')}</span>
                <span class="premium-feat">${t('prod.encontros.feat3')}</span>
              </div>
            </div>
          </div>
          <div class="premium-footer">
            <div class="premium-price-row"><span class="premium-old">De R$47</span><span class="premium-new">R$24,90</span></div>
            <button class="premium-btn">${t('btn.ver.oferta')}</button>
          </div>`;
      } else {
        el.innerHTML = `
          <div class="premium-inner" style="gap:12px">
            <div class="premium-icon-wrap premium-icon-sm">${icon}</div>
            <div class="premium-content">
              <div class="premium-badge-secondary">${selector.includes('planejador') ? t('prod.novo') : t('prod.oferta.especial')}</div>
              <div class="premium-title" style="font-size:15px">${title}</div>
              <div class="premium-desc" style="font-size:12px">${desc}</div>
            </div>
          </div>
          <div class="premium-footer" style="padding-top:12px">
            <div class="premium-price-row"><span class="premium-old">${selector.includes('planejador') ? 'De R$27' : 'De R$27'}</span><span class="premium-new" style="font-size:18px">${selector.includes('planejador') ? 'R$14,90' : 'R$12,90'}</span></div>
            <button class="premium-btn premium-btn-sm">${t('btn.ver.oferta')}</button>
          </div>`;
      }
      // Use upsell modal with prices for premium products
      if(selector.includes('encontros')) el.onclick = ()=>openUpsell(1);
      else if(selector.includes('devocional')) el.onclick = ()=>openUpsell(2);
      else if(selector.includes('planejador')) el.onclick = ()=>openUpsell(3);
      else if(selector.includes('quebraGelos')) el.onclick = ()=>openUpsell(4);
      else if(selector.includes('perguntas')) el.onclick = ()=>openUpsell(5);
      else if(selector.includes('estudos')) el.onclick = ()=>openUpsell(6);
      else el.onclick = ()=>openLocked(lockedName, lockedDesc);
    }
  }

  setCard('[data-mod="perguntas"]',   m.perguntas,   ()=>abrirPerguntas(), t('lib.perguntas'), t('din.sub'));
  setCard('[data-mod="quebraGelos"]', m.quebraGelos, ()=>abrirQuebraGelos(), t('lib.quebraGelos'), t('din.sub'));
  setCard('[data-mod="estudos"]',     m.estudos,     ()=>abrirEstudos(), t('lib.estudos'), t('din.sub'));

  setPremiumCard('[data-mod="encontros"]', m.encontros, ()=>abrirEncontros(), '🌸',
    t('prod.encontros.titulo'), t('prod.encontros.desc'),
    t('prod.encontros.titulo'), t('prod.encontros.desc'));

  setPremiumCard('[data-mod="devocional"]', m.devocional, ()=>abrirDevocional(), '📖',
    t('prod.devocional.titulo'), t('prod.devocional.desc'),
    t('prod.devocional.titulo'), t('prod.devocional.desc'));

  setPremiumCard('[data-mod="planejador"]', m.planejador, ()=>abrirPlanejador(), '📝',
    t('bonus.planejador.titulo'), t('bonus.planejador.sub'),
    t('bonus.planejador.titulo'), t('bonus.planejador.sub'));

  renderPlanejadorCampos();
}

function setUmcTab(tab){
  document.getElementById('umc-tab-perfil').classList.toggle('active', tab==='perfil');
  document.getElementById('umc-tab-modulos').classList.toggle('active', tab==='modulos');
  document.getElementById('umc-painel-perfil').style.display = tab==='perfil' ? '' : 'none';
  document.getElementById('umc-painel-modulos').style.display = tab==='modulos' ? '' : 'none';
}

function trocarFoto(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    const dataUrl = e.target.result;
    // Salva no localStorage por conta
    const key = 'foto_' + usuarioAtual.email;
    localStorage.setItem(key, dataUrl);
    // Atualiza avatar no modal e na topbar
    renderAvatar(dataUrl);
    toastMsg(t('perfil.foto'));
  };
  reader.readAsDataURL(file);
}

function renderAvatar(dataUrl){
  const initials = usuarioAtual?.nome.split(' ').map(n=>n[0]).slice(0,2).join('') || '?';
  // Avatar mini dropdown
  const av = document.getElementById('user-modal-avatar');
  if(av){
    if(dataUrl){ av.innerHTML=`<img src="${dataUrl}" alt="">`; av.style.background='none'; }
    else { av.innerHTML=initials; av.style.background=''; }
  }
  // Avatar tela de perfil
  const pav = document.getElementById('perfil-avatar-img');
  if(pav){
    if(dataUrl){ pav.innerHTML=`<img src="${dataUrl}" alt="">`; pav.style.background='none'; }
    else { pav.innerHTML=initials; pav.style.background=''; }
  }
  // Avatar topbar
  const badgeAvatar = document.querySelector('.user-avatar');
  if(badgeAvatar){
    if(dataUrl){ badgeAvatar.innerHTML=`<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="">`; }
    else { badgeAvatar.innerHTML=initials; }
  }
}

function carregarPerfil(){
  if(!usuarioAtual) return;
  const key = 'perfil_' + usuarioAtual.email;
  try{
    const dados = JSON.parse(localStorage.getItem(key)||'{}');
    document.getElementById('perfil-nome').value = dados.nome || usuarioAtual.nome || '';
    document.getElementById('perfil-telefone').value = dados.telefone || '';
    document.getElementById('perfil-igreja').value = dados.igreja || '';
    document.getElementById('perfil-cidade').value = dados.cidade || '';
    document.getElementById('perfil-cargo').value = dados.cargo || '';
    document.getElementById('perfil-bio').value = dados.bio || '';
  }catch(e){}
  // Carrega foto
  const fotoKey = 'foto_' + usuarioAtual.email;
  const foto = localStorage.getItem(fotoKey);
  renderAvatar(foto || null);
}

function salvarPerfil(){
  if(!usuarioAtual) return;
  const dados = {
    nome: document.getElementById('perfil-nome').value.trim(),
    telefone: document.getElementById('perfil-telefone').value.trim(),
    igreja: document.getElementById('perfil-igreja').value.trim(),
    cidade: document.getElementById('perfil-cidade').value.trim(),
    cargo: document.getElementById('perfil-cargo').value.trim(),
    bio: document.getElementById('perfil-bio').value.trim(),
  };
  const key = 'perfil_' + usuarioAtual.email;
  localStorage.setItem(key, JSON.stringify(dados));
  // Atualiza nome exibido se preenchido
  if(dados.nome){
    document.getElementById('user-modal-nome').textContent = dados.nome;
    document.querySelector('.user-name-plain') && (document.querySelector('.user-name-plain').textContent = dados.nome.split(' ')[0]);
  }
  toastMsg(t('perfil.salvo'));
}

function salvarPerfilEFechar(){
  salvarPerfil();
  // Fecha o accordion da seção info
  togglePerfilSecao('info'); // toggles it closed since it's open
}

// ESC fecha o perfil overlay
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const renomear = document.getElementById('modal-renomear');
    if(renomear?.classList.contains('open')){ renomear.classList.remove('open'); _renomearId=null; return; }
    const conjunto = document.getElementById('conjunto-preview-overlay');
    if(conjunto?.classList.contains('open')){ fecharConjuntoPreviewBtn(); return; }
    const novidades = document.getElementById('novidades-overlay');
    if(novidades?.classList.contains('open')){ fecharNovidades(); return; }
    const perfil = document.getElementById('perfil-overlay');
    if(perfil?.classList.contains('open')){ closePerfil(); return; }
    const aval = document.getElementById('aval-overlay');
    if(aval?.classList.contains('open')){ fecharAval(); return; }
    const stories = document.getElementById('stories-overlay');
    if(stories?.classList.contains('open')){ fecharStories(); return; }
    const desfav = document.getElementById('modal-desfav-overlay');
    if(desfav?.classList.contains('open')){ desfav.classList.remove('open'); return; }
  }
});

function togglePerfilSecao(sec){
  const isOpen = document.getElementById('psecao-'+sec)?.style.display !== 'none';
  // Fecha todas
  ['info','modulos','seguranca'].forEach(s=>{
    const el = document.getElementById('psecao-'+s);
    const btn = document.getElementById('pmenu-'+s);
    const arrow = document.getElementById('parrow-'+s);
    if(el) el.style.display = 'none';
    if(btn) btn.classList.remove('active');
    if(arrow) arrow.style.transform = '';
  });
  // Se estava fechada, abre
  if(!isOpen){
    const el = document.getElementById('psecao-'+sec);
    const btn = document.getElementById('pmenu-'+sec);
    const arrow = document.getElementById('parrow-'+sec);
    if(el){ el.style.display = ''; el.style.animation = 'slideDown .2s ease'; }
    if(btn) btn.classList.add('active');
    if(arrow) arrow.style.transform = 'rotate(90deg)';
    if(sec==='modulos') renderPerfilModulos();
    if(sec==='seguranca') renderPerfilSeguranca();
  }
}

// Mantém compatibilidade com chamadas existentes de setPerfilSecao
function setPerfilSecao(sec){ togglePerfilSecao(sec); }

function renderPerfilModulos(){
  const el = document.getElementById('perfil-modulos-lista');
  if(!el || !usuarioAtual) return;
  el.innerHTML = Object.entries(usuarioAtual.modulos).map(([k,v])=>{
    const info = MODULOS_LABELS[k];
    if(!info) return '';
    return `<div class="umc-mod-row">
      <span class="umc-mod-icon">${info.icon}</span>
      <span class="umc-mod-name">${moduloLabel(k)}</span>
      <span class="umc-mod-check">${v?'✅':'🔒'}</span>
    </div>`;
  }).join('');
}

function renderPerfilSeguranca(){
  const u = usuarioAtual;
  if(!u) return;
  const emailEl = document.getElementById('perfil-sec-email');
  const planoEl = document.getElementById('perfil-sec-plano');
  if(emailEl) emailEl.textContent = u.email;
  if(planoEl) planoEl.textContent = u.plano;
}

function abrirMenuUsuario(){
  if(!usuarioAtual){ fazerLogout(); return; }
  abrirPerfilTela();
}
function closeMenuUsuario(){
  // mantido para compatibilidade — não faz nada pois o mini dropdown foi removido
}

function abrirPerfilTela(){
  if(!usuarioAtual) return;
  const u = usuarioAtual;
  document.getElementById('perfil-hero-nome').textContent = u.nome;
  document.getElementById('perfil-hero-email').textContent = u.email;
  const plEl = document.getElementById('perfil-hero-plano');
  plEl.textContent = u.plano; plEl.style.background = u.planoBg;
  const foto = localStorage.getItem('foto_' + u.email);
  const av = document.getElementById('perfil-avatar-img');
  if(foto){ av.innerHTML=`<img src="${foto}" alt="">`; av.style.background='none'; }
  else { av.textContent=u.nome.split(' ').map(n=>n[0]).slice(0,2).join(''); av.style.background=''; }
  // Barra de atalhos admin
  const adminBar = document.getElementById('perfil-admin-bar');
  if(adminBar) adminBar.style.display = u.email==='admin@encontros.com' ? 'flex' : 'none';
  carregarPerfil();
  // Fecha todas as seções — usuária escolhe qual abrir
  ['info','modulos','seguranca'].forEach(s=>{
    const el = document.getElementById('psecao-'+s);
    const btn = document.getElementById('pmenu-'+s);
    const arrow = document.getElementById('parrow-'+s);
    if(el) el.style.display = 'none';
    if(btn) btn.classList.remove('active');
    if(arrow) arrow.style.transform = '';
  });
  document.getElementById('perfil-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closePerfil(){
  document.getElementById('perfil-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function fecharPerfil(e){
  if(e.target===document.getElementById('perfil-overlay')) closePerfil();
}

// ── RESTAURAR SESSÃO — movido para bloco INIT no final do arquivo ──

// ── LANGUAGE DROPDOWN ──
const LANG_FLAGS = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸' };
const LANG_FLAG_IMGS = { pt:'https://flagcdn.com/w40/br.png', en:'https://flagcdn.com/w40/us.png', es:'https://flagcdn.com/w40/es.png' };
const LANG_CODES = { pt:'PT', en:'EN', es:'ES' };

function toggleLoginLang(force){
  const dd = document.getElementById('login-lang-dropdown');
  const trigger = document.getElementById('login-lang-trigger');
  if(!dd) return;
  const open = force !== undefined ? force : !dd.classList.contains('open');
  dd.classList.toggle('open', open);
  if(trigger) trigger.classList.toggle('open', open);
}
document.addEventListener('click', e=>{
  const ll = document.getElementById('login-lang');
  if(ll && !ll.contains(e.target)) toggleLoginLang(false);
});
function toggleLangDropdown(force){
  const dd = document.getElementById('lang-dropdown');
  const trigger = document.getElementById('tlang-trigger');
  if(!dd) return;
  const open = force !== undefined ? force : !dd.classList.contains('open');
  dd.classList.toggle('open', open);
  if(trigger) trigger.classList.toggle('open', open);
}
document.addEventListener('click', e=>{
  const lang = document.getElementById('topbar-lang');
  if(lang && !lang.contains(e.target)) toggleLangDropdown(false);
});

// ── ESC KEY — fecha qualquer modal aberto ──
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  const modals = [
    {id:'modal-locked',   fn: closeModalDirect},
    {id:'modal-plano',    fn: closePlanoDirectModal},
    {id:'modal-upsell',   fn: closeUpsellDirect},
    {id:'modal-sug-preview', fn: closeSugPreviewDirect},
    {id:'modal-usuario',  fn: ()=>document.getElementById('modal-usuario').classList.remove('open')},
    {id:'modal-browse-din', fn: ()=>document.getElementById('modal-browse-din').classList.remove('open')},
    {id:'modal-din-preview', fn: closeDinPreviewDirect},
  ];
  for(const m of modals){
    const el = document.getElementById(m.id);
    if(el && el.classList.contains('open')){ m.fn(); break; }
  }
});

// ── WHATSAPP ──
const WHATSAPP_NUMERO = '5548998144008';
function abrirWhatsApp(){
  const msg = encodeURIComponent('Olá! Preciso de ajuda com o app Encontros de Mulheres. 🌸');
  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${msg}`, '_blank');
}

// ── DICA DO DIA ──
const STORAGE_KEY_TIP = 'encontros_tip_v1';
function mostrarTipDoDia(){
  try{
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY_TIP)||'{}');
    const hoje  = new Date().toDateString();
    if(salvo.data === hoje && salvo.fechado) return;
  }catch(e){}

  // Sorteia uma dinâmica como dica do dia (baseado na data para ser consistente)
  const idx = new Date().getDate() % dinamicas.length;
  const raw = dinamicas[idx];
  const d   = getDinamica(raw);
  document.getElementById('tip-titulo').textContent = d.titulo;
  document.getElementById('tip-desc').textContent   = d.objetivo;
  document.getElementById('daily-tip').style.display = 'flex';
  try{ localStorage.setItem(STORAGE_KEY_TIP, JSON.stringify({data: new Date().toDateString(), id: raw.id, fechado: false})); }catch(e){}
}
function fecharTip(){
  document.getElementById('daily-tip').style.display = 'none';
  try{
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY_TIP)||'{}');
    localStorage.setItem(STORAGE_KEY_TIP, JSON.stringify({...salvo, fechado: true}));
  }catch(e){}
}
function abrirTipDoDia(){
  try{
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY_TIP)||'{}');
    if(salvo.id) openDetail(salvo.id);
  }catch(e){}
}

// ── HISTÓRICO ──
const STORAGE_KEY_HIST = ()=>`encontros_hist_v1_${usuarioAtual?.email||'guest'}`;
// historico — declarado no topo do script

function salvarHistorico(){ try{ localStorage.setItem(STORAGE_KEY_HIST(), JSON.stringify(historico)); }catch(e){} }
function carregarHistorico(){ try{ const h=localStorage.getItem(STORAGE_KEY_HIST()); historico=h?JSON.parse(h):[]; }catch(e){ historico=[]; } }

function updateDoneBtn(){
  const btn = document.getElementById('detail-done-btn');
  if(!btn || !currentDetail) return;
  const feita = historico.some(h=>h.id===currentDetail.id);
  btn.textContent = feita ? t('din.realizada') : t('din.marcar.realizada');
  btn.classList.toggle('feita', feita);
}

function renderHistorico() {
  const c = document.getElementById('historico-list');
  if (!c) return;

  const allHist = [
    ...historico.map(h => ({ ...h, tipo: h.tipo || 'dinamica' })),
    ...historicoEnc.map(h => ({ ...h, tipo: h.tipo || 'encontro' }))
  ].sort((a, b) => new Date(b.data) - new Date(a.data));

  if (!allHist.length) {
    c.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📅</div>
        <h4>${t('hist.vazio.titulo')}</h4>
        <p>${t('hist.vazio.sub')}</p>
        <button onclick="nav('screen-dinamicas','nav-dinamicas')" style="margin-top:8px;padding:10px 20px;background:var(--gerar-grad);border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;cursor:pointer">🎭 Ver Dinâmicas</button>
      </div>
    `;
    return;
  }

  c.innerHTML = allHist.map(h => {
    const aval = h.avaliacao;
    const estrelas = aval ? '⭐'.repeat(aval.estrelas) + '☆'.repeat(5 - aval.estrelas) : '';
    const icon = h.tipo === 'encontro' ? '🌸' : '🎭';

    const avalHtml = aval
      ? `
        <div style="margin-top:8px;padding:8px 10px;background:var(--bg);border-radius:10px;font-size:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:14px">${estrelas}</span>
            ${aval.participantes ? `<span class="tag" style="font-size:10px">👥 ${aval.participantes} participantes</span>` : ''}
          </div>
          ${aval.obs ? `<p style="color:var(--text-soft);margin:0;line-height:1.4">${aval.obs}</p>` : ''}
        </div>
      `
      : `
        <button onclick="abrirAval(${h.id}, '${h.tipo}')" style="margin-top:8px;font-size:11px;color:var(--rose);background:none;border:1px dashed var(--rose);border-radius:8px;padding:4px 10px;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">
          + Adicionar avaliação
        </button>
      `;

    return `
      <div class="hist-card">
        <div class="hist-card-top">
          <h4>${h.titulo}</h4>
          <span class="hist-date">${new Date(h.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
        </div>
        <div class="content-card-meta" style="margin-bottom:6px">
          <span class="tag">${h.categoria}</span>
          <span class="tag sage">⏱ ${h.tempo || '60 min'}</span>
          <span class="tag" style="background:var(--sage-light);color:var(--sage)">✓ Realizada</span>
          <span class="tag" style="background:var(--gold-pale);color:var(--gold)">${icon} ${h.tipo === 'encontro' ? 'Encontro' : 'Dinâmica'}</span>
        </div>
        ${avalHtml}
        <button class="hist-del-btn" onclick="removerHistorico(${h.id}, '${h.tipo}')" style="margin-top:10px">
          ${t('hist.remover.btn')}
        </button>
      </div>
    `;
  }).join('');
}

function removerHistorico(id, tipo){
  if(tipo === 'encontro'){
    historicoEnc = historicoEnc.filter(h=>h.id!==id);
    salvarHistoricoEnc();
  } else {
    historico = historico.filter(h=>h.id!==id);
    salvarHistorico();
  }
  renderHistorico();
  toastMsg(t('toast.hist.removido'));
}

// ── TIMER ──
let timerInterval = null;
let timerTotal = 0;
let timerLeft = 0;
let timerRunning = false;

function timerToggleOpen(){
  const bar = document.getElementById('timer-bar');
  const btn = document.getElementById('detail-timer-btn');
  if(bar.style.display === 'flex'){
    bar.style.display = 'none';
    if(btn) btn.classList.remove('timer-open');
    clearInterval(timerInterval); timerRunning = false;
  } else {
    timerOpen();
    if(btn) btn.classList.add('timer-open');
  }
}

function timerOpen(){
  if(!currentDetail) return;
  // Parse tempo from "15 min" or "10-15 min" → use max value
  const tempoStr = currentDetail.tempo || '10 min';
  const nums = tempoStr.match(/\d+/g);
  const mins = nums ? Math.max(...nums.map(Number)) : 10;
  timerTotal = mins * 60;
  timerLeft = timerTotal;
  timerRunning = false;
  const bar = document.getElementById('timer-bar');
  bar.style.display = 'flex';
  document.getElementById('timer-label').textContent = `⏱ ${mins} min — ${currentDetail.titulo}`;
  document.getElementById('timer-play-btn').textContent = '▶';
  document.getElementById('timer-play-btn').className = 'timer-btn play';
  timerUpdateDisplay();
  bar.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function timerToggle(){
  if(timerRunning){
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timer-play-btn').textContent = '▶';
    document.getElementById('timer-play-btn').className = 'timer-btn play';
  } else {
    timerRunning = true;
    document.getElementById('timer-play-btn').textContent = '⏸';
    document.getElementById('timer-play-btn').className = 'timer-btn pause';
    timerInterval = setInterval(()=>{
      timerLeft--;
      timerUpdateDisplay();
      if(timerLeft <= 0){
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('timer-play-btn').textContent = '▶';
        document.getElementById('timer-play-btn').className = 'timer-btn play';
        toastMsg(t('toast.tempo.esgotado'));
      }
    }, 1000);
  }
}

function timerReset(){
  clearInterval(timerInterval);
  timerRunning = false;
  timerLeft = timerTotal;
  document.getElementById('timer-play-btn').textContent = '▶';
  document.getElementById('timer-play-btn').className = 'timer-btn play';
  timerUpdateDisplay();
}

function timerUpdateDisplay(){
  const m = Math.floor(timerLeft / 60);
  const s = timerLeft % 60;
  const display = document.getElementById('timer-display');
  const fill = document.getElementById('timer-fill');
  if(!display) return;
  display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  display.className = timerLeft <= 60 && timerLeft > 0 ? 'timer-display urgente' : 'timer-display';
  const pct = timerTotal > 0 ? (timerLeft / timerTotal * 100) : 100;
  if(fill) fill.style.width = pct + '%';
  if(fill) fill.style.background = timerLeft <= 60 ? 'var(--rose)' : 'var(--gold)';
}

// ── AVALIAÇÃO PÓS-ENCONTRO ──
let avalStar = 0;
let avalNum = '';
let avalDinamica = null;

function toggleDone() {
  if (!currentDetail) return;

  const idx = historico.findIndex(h => String(h.id) === String(currentDetail.id));

  if (idx >= 0) {
    historico.splice(idx, 1);
  } else {
    historico.unshift({
      id: currentDetail.id,
      titulo: currentDetail.titulo,
      categoria: currentDetail.categoria,
      tempo: currentDetail.tempo,
      data: new Date().toISOString(),
      avaliacao: null,
      tipo: 'dinamica'
    });
  }

  if (typeof salvarHistorico === 'function') salvarHistorico();
  updateDoneBtn();
  renderHistorico();
  if (idx < 0) {
    setTimeout(() => abrirAval({ ...currentDetail, tipo: 'dinamica' }), 800);
  }
}

function abrirAval(dinamica){
  avalDinamica = dinamica;
  avalStar = 0;
  avalNum = '';
  document.getElementById('aval-din-nome').textContent = dinamica.titulo;
  document.getElementById('aval-obs').value = '';
  document.querySelectorAll('.aval-num-btn').forEach(b=>b.classList.remove('selected'));
  avalRenderStars();
  document.getElementById('aval-overlay').classList.add('open');
}

function fecharAval(){
  document.getElementById('aval-overlay').classList.remove('open');
}

function fecharAvalOverlay(e){
  if(e.target===document.getElementById('aval-overlay')) fecharAval();
}

function avalSetStar(n){
  avalStar = n;
  avalRenderStars();
}

function avalRenderStars(){
  for(let i=1;i<=5;i++){
    document.getElementById('aval-s'+i).textContent = i <= avalStar ? '⭐' : '☆';
  }
}

function avalSetNum(btn, val){
  avalNum = val;
  document.querySelectorAll('.aval-num-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

function salvarAval() {
  if (!avalDinamica || avalStar < 1) return;

  const aval = {
    estrelas: avalStar,
    participantes: avalNum,
    obs: document.getElementById('aval-obs').value.trim(),
    data: new Date().toISOString()
  };

  if (avalDinamica.tipo === 'encontro') {
    const idx = historicoEnc.findIndex(h => String(h.id) === String(avalDinamica.id));
    if (idx >= 0) {
      historicoEnc[idx].avaliacao = aval;
      if (typeof salvarHistoricoEnc === 'function') salvarHistoricoEnc();
    }
  } else {
    const idx = historico.findIndex(h => String(h.id) === String(avalDinamica.id));
    if (idx >= 0) {
      historico[idx].avaliacao = aval;
      if (typeof salvarHistorico === 'function') salvarHistorico();
    }
  }

  fecharAval();
  renderHistorico();
  toastMsg(t('toast.aval.salva'));
}

// ── STORIES ──
let storiesBgImage = null; // Image object da foto escolhida ou null = gradiente
let storiesBgMode = 'gradient'; // 'gradient' | 'photo'
let storiesPhotoOpacity = 0.52; // Opacidade do overlay escuro sobre a foto (0=transparente, 1=preto)

function storiesBgSelect(mode){
  storiesBgMode = mode;
  document.querySelectorAll('.stories-bg-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('sbg-gradient')?.classList.add('active');
  storiesBgImage = null;
  storiesShowOpacityBar(false);
  renderStoriesCanvas();
}

function storiesBgCamera(){
  document.getElementById('stories-bg-camera-input').click();
}
function storiesBgGaleria(){
  document.getElementById('stories-bg-file').click();
}

function storiesSetOpacity(val){
  // slider: 0=transparente (foto visível), 100=preto (foto escondida)
  storiesPhotoOpacity = val / 100;
  renderStoriesCanvas();
}

function storiesShowOpacityBar(show){
  const bar = document.getElementById('stories-opacity-bar');
  if(bar) bar.style.display = show ? 'flex' : 'none';
}

function storiesHandleFile(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      storiesBgImage = img;
      storiesBgMode = 'photo';
      document.querySelectorAll('.stories-bg-btn').forEach(b=>b.classList.remove('active'));
      document.getElementById('sbg-galeria')?.classList.add('active');
      storiesShowOpacityBar(true);
      renderStoriesCanvas();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function renderStoriesCanvas(){
  if(!currentDetail) return;
  const canvas = document.getElementById('stories-canvas');
  const ctx = canvas.getContext('2d');
  const w = 1080, h = 1920;
  canvas.width = w; canvas.height = h;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  // ── FUNDO ──
  if(storiesBgImage){
    // Cover: escala para preencher 9:16 sem distorcer
    const iw = storiesBgImage.width, ih = storiesBgImage.height;
    const scale = Math.max(w/iw, h/ih);
    const sw = iw*scale, sh = ih*scale;
    const sx = (w-sw)/2, sy = (h-sh)/2;
    ctx.drawImage(storiesBgImage, sx, sy, sw, sh);
    // Overlay escuro controlado pelo slider de opacidade
    ctx.fillStyle = `rgba(0,0,0,${storiesPhotoOpacity})`;
    ctx.fillRect(0, 0, w, h);
    // Vinheta sutil nas bordas
    const vig = ctx.createRadialGradient(w/2,h/2,h*0.3,w/2,h/2,h*0.75);
    vig.addColorStop(0,'rgba(0,0,0,0)');
    vig.addColorStop(1,'rgba(0,0,0,0.35)');
    ctx.fillStyle = vig;
    ctx.fillRect(0,0,w,h);
  } else {
    // Gradiente padrão
    const grad = ctx.createLinearGradient(0, 0, w, h);
    if(isDark){
      grad.addColorStop(0,'#2d1b3d'); grad.addColorStop(0.5,'#3d2456'); grad.addColorStop(1,'#1a1025');
    } else {
      grad.addColorStop(0,'#f9e4f0'); grad.addColorStop(0.5,'#fdf0f8'); grad.addColorStop(1,'#f5dced');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,w,h);
    // Círculos decorativos
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = isDark ? '#fff' : '#c97bb0';
    ctx.beginPath(); ctx.arc(w*0.85, h*0.12, 280, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(w*0.1, h*0.88, 220, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1;
  }

  const textColor = storiesBgImage ? '#ffffff' : (isDark ? '#ffffff' : '#4a1a3a');
  const accentColor = storiesBgImage ? 'rgba(255,255,255,.85)' : (isDark ? '#e8a0d0' : '#c97bb0');
  const softColor = storiesBgImage ? 'rgba(255,255,255,.7)' : (isDark ? 'rgba(255,255,255,.85)' : '#5a2a4a');

  // App name top
  ctx.fillStyle = storiesBgImage ? 'rgba(255,255,255,.65)' : (isDark ? 'rgba(255,255,255,.5)' : 'rgba(180,80,150,.6)');
  ctx.font = '700 48px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Encontros de Mulheres 🌸', w/2, 140);

  // Category pill
  const catW=400,catH=72,catX=(w-catW)/2,catY=240;
  ctx.fillStyle = storiesBgImage ? 'rgba(255,255,255,.18)' : (isDark ? 'rgba(255,255,255,.12)' : 'rgba(201,123,176,.15)');
  roundRect(ctx,catX,catY,catW,catH,36); ctx.fill();
  ctx.fillStyle = accentColor; ctx.font='600 40px sans-serif';
  ctx.fillText(currentDetail.categoria+' · '+currentDetail.tempo, w/2, catY+46);

  // Title
  ctx.fillStyle = textColor; ctx.font='bold 88px serif';
  wrapText(ctx, currentDetail.titulo, w/2, 440, w-120, 100);

  // Divider
  ctx.strokeStyle = storiesBgImage ? 'rgba(255,255,255,.3)' : (isDark ? 'rgba(255,255,255,.2)' : 'rgba(180,80,150,.3)');
  ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(120,780); ctx.lineTo(w-120,780); ctx.stroke();

  // Objetivo
  ctx.fillStyle = accentColor; ctx.font='700 44px sans-serif'; ctx.textAlign='left';
  ctx.fillText('🎯 OBJETIVO', 100, 860);
  ctx.fillStyle = softColor; ctx.font='400 52px sans-serif';
  wrapText(ctx, currentDetail.objetivo, 100, 940, w-200, 68, 'left');

  // Aplicação box
  const boxY=1380;
  ctx.fillStyle = storiesBgImage ? 'rgba(255,255,255,.12)' : (isDark ? 'rgba(255,255,255,.08)' : 'rgba(201,123,176,.12)');
  roundRect(ctx,80,boxY,w-160,360,32); ctx.fill();
  ctx.fillStyle = accentColor; ctx.font='700 40px sans-serif'; ctx.textAlign='left';
  ctx.fillText('✦ Aplicação Espiritual', 120, boxY+60);
  ctx.fillStyle = softColor; ctx.font='400 44px sans-serif';
  wrapText(ctx, currentDetail.aplicacao, 120, boxY+120, w-280, 58, 'left', 4);

  // Bottom tag
  ctx.fillStyle = storiesBgImage ? 'rgba(255,255,255,.4)' : (isDark ? 'rgba(255,255,255,.3)' : 'rgba(180,80,150,.4)');
  ctx.font='500 40px sans-serif'; ctx.textAlign='center';
  ctx.fillText('app Encontros de Mulheres', w/2, h-80);
}

function abrirStories(){
  if(!currentDetail) return;
  storiesBgImage = null; storiesBgMode = 'gradient';
  storiesPhotoOpacity = 0.52;
  const sliderEl = document.getElementById('stories-opacity-slider');
  if(sliderEl) sliderEl.value = 48;
  storiesShowOpacityBar(false);
  document.querySelectorAll('.stories-bg-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('sbg-gradient')?.classList.add('active');
  // Configurar input handlers
  const fileEl = document.getElementById('stories-bg-file');
  const camEl  = document.getElementById('stories-bg-camera-input');
  fileEl.onchange = e=>storiesHandleFile(e.target.files[0]);
  camEl.onchange  = e=>storiesHandleFile(e.target.files[0]);
  renderStoriesCanvas();
  document.getElementById('stories-overlay').classList.add('open');
}

function roundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxW, lineH, align='center', maxLines=99){
  if(!text) return y;
  const words = text.split(' ');
  let line = '';
  let lineCount = 0;
  ctx.textAlign = align;
  for(let i=0;i<words.length;i++){
    const test = line + words[i] + ' ';
    if(ctx.measureText(test).width > maxW && line){
      ctx.fillText(line.trim(), x, y);
      line = words[i] + ' ';
      y += lineH;
      lineCount++;
      if(lineCount >= maxLines) break;
    } else { line = test; }
  }
  if(line.trim() && lineCount < maxLines) ctx.fillText(line.trim(), x, y);
  return y;
}

function fecharStories(){
  document.getElementById('stories-overlay').classList.remove('open');
}

function fecharStoriesOverlay(e){
  if(e.target===document.getElementById('stories-overlay')) fecharStories();
}

function salvarStories(){
  const canvas = document.getElementById('stories-canvas');
  const link = document.createElement('a');
  link.download = `dinamica-${currentDetail?.id||'encontro'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  toastMsg(t('toast.imagem.salva'));
}

// ── COMPARTILHAR ──
function compartilharDinamica(){
  if(!currentDetail) return;
  const d = currentDetail;
  const texto = `🌸 *${d.titulo}*\n\n🎯 ${d.objetivo}\n📦 Materiais: ${d.materiais}\n⏱ Tempo: ${d.tempo}\n\n✦ ${d.aplicacao}\n\n_Via app Encontros de Mulheres_`;
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

function compartilharEncontroGerado(){
  const c = currentConjunto;
  if(!c){ toastMsg(t('toast.conj.primeiro')); return; }
  const d = c.din;
  let texto = `✨ *Encontro de Mulheres*\n`;
  if(c.tema && c.tema !== 'Aleatório') texto += `🏷 Tema: ${c.tema}\n`;
  texto += `\n🎭 *Dinâmica: ${d.titulo}*\n${d.objetivo}\n⏱ ${d.tempo} · 📦 ${d.materiais}`;
  if(c.estudo) texto += `\n\n📖 *Estudo: ${c.estudo.titulo}*\n${c.estudo.reflexao?.slice(0,180)}…`;
  if(c.pergunta) texto += `\n\n💬 *Pergunta:* ${c.pergunta.pergunta || c.pergunta.texto || ''}`;
  texto += `\n\n_Via app Encontros de Mulheres_ 🌸`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}

// ── ONBOARDING ──
const STORAGE_KEY_ONB = ()=> `encontros_onboarding_v1_${usuarioAtual?.email||'guest'}`;
let onbIdx = 0;
const ONB_PASSOS_I18N = {
  pt: [
    { icon:'🌸', titulo:'Bem-vinda ao Encontros de Mulheres!', desc:'Tudo que você precisa para conduzir encontros transformadores está aqui. Vamos te mostrar as principais funcionalidades em 5 passos rápidos.' },
    { icon:'🎭', titulo:'200 Dinâmicas Completas', desc:'Explore centenas de dinâmicas com objetivo, materiais, passo a passo e aplicação. Use o filtro por categoria para encontrar a ideal para o seu encontro.' },
    { icon:'✨', titulo:'Gerador de Encontros', desc:'Toque em "Gerar" na barra inferior para criar um conjunto completo: dinâmica + estudo bíblico + pergunta poderosa — tudo com um toque!' },
    { icon:'🎙', titulo:'Modo Ao Vivo', desc:'Ao abrir qualquer dinâmica, toque no botão 🎙 para conduzir o encontro passo a passo em tela cheia. Perfeito para usar na frente do grupo.' },
    { icon:'❤️', titulo:'Salve seus favoritos', desc:'Toque no coração 🤍 em qualquer dinâmica, pergunta, quebra-gelo ou encontro para salvá-lo. Acesse tudo rapidamente na aba Favoritos.' },
  ],
  en: [
    { icon:'🌸', titulo:'Welcome to Women\'s Meetings!', desc:'Everything you need to lead transforming meetings is here. We\'ll show you the main features in 5 quick steps.' },
    { icon:'🎭', titulo:'200 Complete Dynamics', desc:'Explore hundreds of dynamics with objectives, materials, step-by-step and application. Use the category filter to find the perfect one for your meeting.' },
    { icon:'✨', titulo:'Meeting Generator', desc:'Tap "Generate" on the bottom bar to create a complete set: dynamic + Bible study + powerful question — all with one tap!' },
    { icon:'🎙', titulo:'Live Mode', desc:'When opening any dynamic, tap the 🎙 button to lead the meeting step by step in full screen. Perfect for using in front of the group.' },
    { icon:'❤️', titulo:'Save your favorites', desc:'Tap the heart 🤍 on any dynamic, question, icebreaker or meeting to save it. Access everything quickly in the Favorites tab.' },
  ],
  es: [
    { icon:'🌸', titulo:'¡Bienvenida a Encuentros de Mujeres!', desc:'Todo lo que necesitas para conducir encuentros transformadores está aquí. Te mostraremos las principales funcionalidades en 5 pasos rápidos.' },
    { icon:'🎭', titulo:'200 Dinámicas Completas', desc:'Explora cientos de dinámicas con objetivo, materiales, paso a paso y aplicación. Usa el filtro por categoría para encontrar la ideal para tu encuentro.' },
    { icon:'✨', titulo:'Generador de Encuentros', desc:'Toca "Generar" en la barra inferior para crear un conjunto completo: dinámica + estudio bíblico + pregunta poderosa — ¡todo con un toque!' },
    { icon:'🎙', titulo:'Modo En Vivo', desc:'Al abrir cualquier dinámica, toca el botón 🎙 para conducir el encuentro paso a paso en pantalla completa. Perfecto para usar frente al grupo.' },
    { icon:'❤️', titulo:'Guarda tus favoritos', desc:'Toca el corazón 🤍 en cualquier dinámica, pregunta, rompehielo o encuentro para guardarlo. Accede a todo rápidamente en la pestaña Favoritos.' },
  ],
};
const ONB_PASSOS = ONB_PASSOS_I18N.pt; // fallback

function abrirOnboarding(){
  try{ if(localStorage.getItem(STORAGE_KEY_ONB())==='done') return; }catch(e){}
  onbIdx = 0;
  document.getElementById('onb-overlay').classList.add('open');
  onbRender();
}

function onbRender(){
  const passos = ONB_PASSOS_I18N[currentLang] || ONB_PASSOS_I18N.pt;
  const p = passos[onbIdx];
  document.getElementById('onb-icon').textContent = p.icon;
  document.getElementById('onb-titulo').textContent = p.titulo;
  document.getElementById('onb-desc').textContent = p.desc;
  document.getElementById('onb-btn').textContent = onbIdx < passos.length-1 ? t('onb.proximo') : t('onb.comecar');
  const prog = document.getElementById('onb-progress');
  prog.innerHTML = passos.map((_,i)=>`<div class="onb-pip${i<=onbIdx?' done':''}"></div>`).join('');
}

function onbNext(){
  const passos = ONB_PASSOS_I18N[currentLang] || ONB_PASSOS_I18N.pt;
  if(onbIdx < passos.length-1){ onbIdx++; onbRender(); }
  else { fecharOnboarding(); }
}

function fecharOnboarding(){
  document.getElementById('onb-overlay').classList.remove('open');
  try{ localStorage.setItem(STORAGE_KEY_ONB(),'done'); }catch(e){}
}

// ── MODO AO VIVO ──
let aoVivoPassos = [];
let aoVivoIdx = 0;

function abrirAoVivo(){
  if(!currentDetail) return;
  const d = getDinamica(currentDetail);
  aoVivoPassos = [
    { label: t('gerar.card.dinamica'), conteudo: `<strong>${d.titulo}</strong><br><br>${d.objetivo}` },
    { label: t('din.materiais'), conteudo: `📦 ${d.materiais}` },
    ...d.passos.map((p, i) => ({ label: `${t('aovivo.passo.label')} ${i+1}`, conteudo: p })),
    { label: t('din.aplicacao'), conteudo: `✦ ${d.aplicacao}` },
  ];
  aoVivoIdx = 0;
  document.getElementById('aovivo-overlay').classList.add('open');
  aoVivoRender();
}

function fecharAoVivo(){
  const overlay = document.getElementById('aovivo-overlay');
  overlay.classList.remove('open');
  overlay.style.background = '';
}

function aoVivoNav(dir){
  aoVivoIdx = Math.max(0, Math.min(aoVivoPassos.length - 1, aoVivoIdx + dir));
  aoVivoRender();
}

function aoVivoRender(){
  const total = aoVivoPassos.length;
  const passo = aoVivoPassos[aoVivoIdx];
  const isLast = aoVivoIdx === total - 1;
  document.getElementById('aovivo-step-label').textContent = `${passo.label} · ${aoVivoIdx+1} / ${total}`;
  document.getElementById('aovivo-titulo').textContent = currentDetail ? getDinamica(currentDetail).titulo : '';
  document.getElementById('aovivo-content').innerHTML = passo.conteudo;
  // dots — último fica dourado
  document.getElementById('aovivo-dots').innerHTML = aoVivoPassos.map((_,i)=>
    `<div class="aovivo-dot${i===aoVivoIdx?' active':''}${i===total-1?' last':''}"></div>`).join('');
  // fundo do overlay muda no último passo
  const overlay = document.getElementById('aovivo-overlay');
  overlay.style.background = isLast ? 'linear-gradient(180deg,#2A1840 0%,#1A0A18 100%)' : '#1A0A18';
  // label muda cor
  document.getElementById('aovivo-step-label').style.color = isLast ? 'var(--gold)' : 'rgba(255,255,255,.5)';
  // botões
  document.getElementById('aovivo-prev').style.display = aoVivoIdx===0 ? 'none' : 'block';
  const nextBtn = document.getElementById('aovivo-next');
  nextBtn.textContent = isLast ? t('aovivo.concluir') : t('aovivo.proximo');
  nextBtn.style.background = isLast ? 'linear-gradient(135deg,#B8860B,#C9973A)' : 'var(--gold)';
  nextBtn.onclick = isLast ? fecharAoVivo : ()=>aoVivoNav(1);
}

// ── ADMIN PANEL ──
function renderAdminPanel(){
  if(!usuarioAtual || usuarioAtual.email !== 'admin@encontros.com') return;

  // Stats
  const total  = Object.keys(USUARIOS).length;
  const ativos = Object.values(USUARIOS).length;
  document.getElementById('admin-stats').innerHTML = `
    <div class="admin-stat"><div class="admin-stat-num">${total}</div><div class="admin-stat-label">${t('admin.stat.usuarios')}</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${ativos}</div><div class="admin-stat-label">${t('admin.stat.ativos')}</div></div>
  `;

  // Users list
  const MODULOS_ADMIN = [
    {key:'dinamicas'},
    {key:'perguntas'},
    {key:'quebraGelos'},
    {key:'estudos'},
    {key:'encontros'},
    {key:'devocional'},
    {key:'planejador'},
  ];

  const list = document.getElementById('admin-users-list');
  list.innerHTML = Object.entries(USUARIOS).map(([email, u])=>{
    const iniciais = u.nome.split(' ').map(n=>n[0]).slice(0,2).join('');
    const mods = MODULOS_ADMIN.map(m=>`
      <div class="admin-mod-row">
        <span>${moduloLabel(m.key)}</span>
        <button class="toggle-pill ${u.modulos[m.key]?'on':'off'}"
          onclick="adminToggleMod('${email}','${m.key}',this)"
          title="${moduloLabel(m.key)}"></button>
      </div>`).join('');
    return `
      <div class="admin-user-card">
        <div class="admin-user-top">
          <div class="admin-user-avatar">${iniciais}</div>
          <div class="admin-user-info">
            <div class="admin-user-nome">${u.nome}</div>
            <div class="admin-user-email">${email}</div>
          </div>
        </div>
        <div class="admin-modulos-grid">${mods}</div>
      </div>`;
  }).join('');
}

function adminToggleMod(email, modKey, btn){
  const u = USUARIOS[email];
  if(!u) return;
  u.modulos[modKey] = !u.modulos[modKey];
  btn.classList.toggle('on',  u.modulos[modKey]);
  btn.classList.toggle('off', !u.modulos[modKey]);
  // Se for o usuário logado, atualiza em tempo real
  if(usuarioAtual?.email === email){
    usuarioAtual.modulos[modKey] = u.modulos[modKey];
    atualizarBloqueios();
  }
  // Persiste no localStorage
  salvarModulosAdmin();
  toastMsg(u.modulos[modKey] ? '✅ Módulo liberado' : '🔒 Módulo bloqueado');
}

const STORAGE_KEY_MODULOS = 'encontros_modulos_admin_v1';

function salvarModulosAdmin(){
  try{
    const data = {};
    Object.entries(USUARIOS).forEach(([email, u])=>{
      data[email] = {...u.modulos};
    });
    localStorage.setItem(STORAGE_KEY_MODULOS, JSON.stringify(data));
  }catch(e){}
}

function carregarModulosAdmin(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY_MODULOS);
    if(!saved) return;
    const data = JSON.parse(saved);
    Object.entries(data).forEach(([email, mods])=>{
      if(USUARIOS[email]){
        Object.assign(USUARIOS[email].modulos, mods);
      }
    });
  }catch(e){}
}


// ── GETTERS COM TRADUÇÃO COMPLETA ──
function getEncontro(e){
  const tr=ENCONTROS_TRADUCOES[currentLang];
  const body=currentLang==='en'?ENC_BODY_EN[e.id]:currentLang==='es'?ENC_BODY_ES[e.id]:null;
  if(!tr&&!body) return e;
  return {...e,
    titulo:tr?.titles?.[e.id]||e.titulo,
    categoria:tr?.cats?.[e.categoria]||e.categoria,
    quebraGelo:body?.qg||e.quebraGelo,
    reflexao:body?.ref||e.reflexao,
    perguntas:body?.prg||e.perguntas,
    oracao:body?.ora||e.oracao
  };
}
function getQuebraGelo(q){
  const tr=QUEBRAGELOS_TRADUCOES[currentLang];
  const body=currentLang==='en'?QG_BODY_EN[q.id]:currentLang==='es'?QG_BODY_ES[q.id]:null;
  if(!tr&&!body) return q;
  return {...q,
    titulo:tr?.titles?.[q.id]||q.titulo,
    categoria:tr?.cats?.[q.categoria]||q.categoria,
    objetivo:body?.obj||q.objetivo,
    como:body?.como||q.como,
    dica:body?.dica||q.dica
  };
}
function getEstudo(e){
  const tr=ESTUDOS_TRADUCOES[currentLang];
  const body=currentLang==='en'?EST_BODY_EN[e.id]:currentLang==='es'?EST_BODY_ES[e.id]:null;
  if(!tr&&!body) return e;
  return {...e,
    titulo:tr?.titles?.[e.id]||e.titulo,
    reflexao:body?.ref||e.reflexao,
    perguntas:body?.prg||e.perguntas,
    aplicacao:body?.apl||e.aplicacao
  };
}
function getPerguntaTrad(p){
  const tr=PERGUNTAS_TRADUCOES[currentLang];
  const pergTr=currentLang==='en'?PERG_EN[p.id]:currentLang==='es'?PERG_ES[p.id]:null;
  if(!tr&&!pergTr) return p;
  return {...p,
    categoriaLabel:tr?.cats?.[p.categoriaLabel]||p.categoriaLabel,
    pergunta:pergTr||p.pergunta
  };
}
function getDevocionalTrad(d){
  const tr=DEVOCIONAL_TRADUCOES[currentLang];
  const body=currentLang==='en'?DEV_BODY_EN[d.id]:currentLang==='es'?DEV_BODY_ES[d.id]:null;
  if(!tr&&!body) return d;
  return {...d,
    titulo:tr?.titles?.[d.id]||d.titulo,
    reflexao:body?.ref||d.reflexao,
    pergunta:body?.perg||d.pergunta,
    aplicacao:body?.apl||d.aplicacao,
    oracao:body?.ora||d.oracao
  };
}

// ── TRADUÇÕES DE DINÂMICAS (pré-existente) ──
var DINAMICAS_TRADUCOES = {
  en: {
    1: { titulo:'Touch of Gratitude', objetivo:'Cultivate mutual appreciation in the group', materiais:'Paper and pen', passos:['Distribute papers to all participants','Each one writes the name of another participant at the top','Write a special quality about that person','Fold the paper and deliver it anonymously','Read aloud and celebrate together'], aplicacao:'Just as Paul gave thanks for the churches (Phil 1:3), we learn to see the value in each other.' },
    2: { titulo:'Stone, Word and Prayer', objetivo:'Intercede for one another with intention', materiais:'Small pebbles', passos:['Give each participant a small stone','Each one writes a prayer request on paper','Exchange papers randomly','Each one prays for the need they received','Keep the stone as a symbol of intercession'], aplicacao:'Bear one another\'s burdens (Gal 6:2). Each stone represents a sister in the heart.' },
    3: { titulo:'Mirror of Words', objetivo:'Affirm identity in Christ', materiais:'Small mirror or metallic paper', passos:['Form pairs in the group','One looks at the other as if in a mirror','Speaks a biblical truth about her','The other receives with eyes closed','They switch roles and repeat'], aplicacao:'We are made in the image of God (Gen 1:27). To see Christ in another is to see the Creator.' },
    4: { titulo:'Faith Timeline', objetivo:'Share the faith journey visually', materiais:'Paper and colored pens', passos:['Distribute large sheets to each participant','Draw a horizontal line in the center','Mark key moments in the faith journey','Place a positive symbol ✦ and a difficult one ✗','Share with the group in 2 minutes each'], aplicacao:'Let us remember the path God brought us through. Each step shaped our character.' },
    5: { titulo:'Letter to the Future', objetivo:'Project faith and hope into the future', materiais:'Envelopes and paper', passos:['Each participant receives an envelope and paper','Write a letter to themselves one year from now','Describe who they want to be, what faith they want to have','Seal the envelope with the opening date','The group prays over the letters before storing'], aplicacao:'Faith is the assurance of things hoped for (Heb 11:1). Writing it down is an act of faith.' },
    6: { titulo:'Map of Blessings', objetivo:'Recognize everyday blessings', materiais:'Colored sticky notes', passos:['Give each person 5 sticky notes','Each one writes a different blessing on each one','Stick them on a wall or board','Read aloud the ones that touched their hearts most','Close with a prayer of thanksgiving'], aplicacao:'Give thanks in all circumstances (1 Thess 5:18). Seeing blessings transforms your perspective.' },
    7: { titulo:'Guess Who I Am', objetivo:'Bring participants closer in a fun way', materiais:'Name tags and pens', passos:['Each one writes 3 unusual facts about herself','No name is written','The leader reads and the group tries to guess who it is','The "discovery" introduces herself fully','They finish with a group round of applause'], aplicacao:'We are many members but one body. Getting to know one another is valuing the body of Christ.' },
    8: { titulo:'Invisible Gift of Words', objetivo:'Practice active encouragement', materiais:'Paper and pen', passos:['Form a circle with participants','Each one folds a paper and passes it to the right','Writes an encouragement for the person on the left','Passes again without reading','At the end each one opens and reads her "gift"'], aplicacao:'The tongue has the power of life (Prov 18:21). Words chosen with love are eternal gifts.' },
    9: { titulo:'Letters of Encouragement', objetivo:'Strengthen and encourage one another', materiais:'Paper and pen', passos:['Distribute paper and pen to each participant','Draw names for each to write to','Each writes an encouraging message','Deliver the letters to recipients','Allow time to read and share reactions'], aplicacao:'Words of encouragement can change someone\'s day and life. (1 Thess 5:11)' },
    10: { titulo:'Prayer in Pairs', objetivo:'Strengthen spiritual fellowship through prayer', materiais:'None', passos:['Divide the group into pairs','Each pair shares a prayer request','They pray for each other quietly','Then briefly share with the group','Close with collective prayer'], aplicacao:'Praying together creates deep spiritual connection. Where two or three gather... (Matt 18:20)' },
    11: { titulo:'Life Verse', objetivo:'Share verses that marked their journey', materiais:'Bible', passos:['Ask each one to think of the most important verse in their life','Each woman shares the verse and its story','The group listens attentively','They can ask about how God used that verse','Close in prayer based on shared verses'], aplicacao:'God\'s Word strengthens, guides and transforms lives. (Josh 1:9)' },
    12: { titulo:'Group Gratitude', objetivo:'Encourage and share gratitude', materiais:'None', passos:['Sit the group in a circle','Each woman says one thing she thanks God for today','It can be simple or profound','The group responds with "amen" or applause','Continue until everyone has participated'], aplicacao:'Collective gratitude strengthens the heart of the whole community. (Ps 136:1)' },
    13: { titulo:'My Greatest Challenge', objetivo:'Share challenges and find support', materiais:'None', passos:['Create an atmosphere of trust and safety','Each participant shares her greatest current challenge','The group listens without judgment','They can offer words of support and encouragement','Close by praying specifically for each challenge'], aplicacao:'God sustains us in challenges. Cast your burden on the Lord. (Ps 55:22)' },
    14: { titulo:'Recent Learning', objetivo:'Share recent spiritual growth', materiais:'None', passos:['Ask each one to reflect on the week or month','Each woman shares something God taught her','It can be a biblical teaching or life lesson','The group can identify or add to it','Close thanking God for the growth'], aplicacao:'God teaches us daily through His Word and experiences. (Prov 3:5)' },
    15: { titulo:'Who Inspired Me', objetivo:'Value people who impacted their faith', materiais:'None', passos:['Ask each one to think of someone who inspired her faith','Each woman presents that person and tells the story','How that person impacted her walk with God','The group celebrates these stories of influence','Close praying for the people mentioned'], aplicacao:'God uses people to inspire and strengthen us. (Heb 10:24)' },
    16: { titulo:'My Hope', objetivo:'Reflect and share future hope', materiais:'None', passos:['Ask each one to think of her hopes','Each woman shares a future hope','It can be personal, family or spiritual','The group celebrates and prays for the hopes','Close declaring God has good plans'], aplicacao:'God has plans to prosper and not harm, to give hope and a future. (Jer 29:11)' },
    17: { titulo:'My Greatest Joy', objetivo:'Share and celebrate joys', materiais:'None', passos:['Create a celebratory joyful atmosphere','Each woman shares something that brought great joy','Can be recent or a special life moment','The group celebrates with applause or amen','Close in praise and thanksgiving'], aplicacao:'The joy of the Lord strengthens us and overflows to those around. (Ps 16:11)' },
    18: { titulo:'An Answered Prayer', objetivo:'Share answered prayers and strengthen faith', materiais:'None', passos:['Ask each one to think of an answered prayer','Each woman shares the prayer and how God answered','May be different from expected but still an answer','The group celebrates and thanks God','Close in collective prayer of gratitude'], aplicacao:'God hears and answers our prayers — sometimes in surprising ways. (Phil 4:6)' },
    19: { titulo:'My Place of Peace', objetivo:'Share moments and places of spiritual peace', materiais:'None', passos:['Ask each one to think of her place of peace','Each woman describes where or when she feels peace','Can be a physical place or spiritual moment','The group shares how they find peace in God','Close with a moment of silence and prayer'], aplicacao:'God gives us a peace that surpasses all understanding. (John 14:27)' },
    20: { titulo:'My Favorite Song', objetivo:'Share songs that touch the soul and unite the group', materiais:'None', passos:['Ask each one to think of her favorite Christian song','Each woman tells the title and why it\'s special','She can sing a part if she wants','The group may identify with the songs','Close singing together a song known by all'], aplicacao:'Worship unites hearts and draws us closer to God and one another. (Ps 100:1)' },
    21: { titulo:'Something I Learned from God', objetivo:'Share wisdom received from God', materiais:'None', passos:['Ask each one to reflect on what God has been teaching','Each woman shares something God taught her recently','Can be through Bible, prayer or circumstance','The group listens and can add similar experiences','Close thanking God for wisdom'], aplicacao:'God gives wisdom generously when we ask in faith. (James 1:5)' },
    22: { titulo:'A Life Lesson', objetivo:'Share valuable lessons learned', materiais:'None', passos:['Ask each one to think of an important life lesson','Each woman shares the lesson and how she learned it','Can be through difficulty, joy or God\'s word','The group listens and learns from experiences','Close in prayer asking wisdom to apply the lessons'], aplicacao:'We learn from experiences and God uses them to shape us. (Prov 4:7)' },
    23: { titulo:'A Promise for Today', objetivo:'Connect with specific biblical promises', materiais:'Bible', passos:['Ask each one to find a promise in the Bible','Each participant reads the promise aloud','Shares why this promise is important today','The group prays the promise over each other','Close declaring promises together'], aplicacao:'God\'s promises are Yes and Amen. Each one is an anchor for our souls. (2 Cor 1:20)' },
    24: { titulo:'Something That Motivates Me', objetivo:'Share spiritual motivations', materiais:'None', passos:['Ask each one to think about what motivates her','Each woman shares her spiritual motivation','Why she keeps following God despite difficulties','The group celebrates and strengthens motivations','Close declaring the purpose of living for God'], aplicacao:'Whatever you do, do it wholeheartedly, as for the Lord. (Col 3:17)' },
    25: { titulo:'A Dream in the Heart', objetivo:'Share dreams and future aspirations', materiais:'None', passos:['Ask each one to think of a dream in her heart','Each woman shares a dream or aspiration','It can be personal, professional or spiritual','The group prays over each dream','Close declaring that God fulfills promises'], aplicacao:'Delight yourself in the Lord and He will give you the desires of your heart. (Ps 37:4)' },
    26: { titulo:'My Faith Journey', objetivo:'Share the path of faith from beginning to now', materiais:'None', passos:['Ask each one to reflect on her faith journey','Each woman shares the beginning of her faith','Key moments that marked her walk','The group listens with respect and gratitude','Close thanking God for each journey'], aplicacao:'Each faith journey is unique and precious. God writes unique stories. (Ps 139:16)' },
    27: { titulo:'Something That Draws Me to God', objetivo:'Reflect on what strengthens the spiritual connection', materiais:'None', passos:['Ask each one to think of what draws her to God','Each woman shares that practice or moment','Can be prayer, worship, nature or silence','The group discovers new ways to connect with God','Close in a moment of worship together'], aplicacao:'Draw near to God and He will draw near to you. (James 4:8)' },
    28: { titulo:'My Word for Today', objetivo:'Choose a word that represents the current moment', materiais:'None', passos:['Ask each one to choose a word for today','Each woman shares the word and explains briefly','The group receives each word with attention','They can encourage based on the word chosen','Close praying the words over each other'], aplicacao:'The Word of God is living and active. Each word chosen with purpose has power. (Heb 4:12)' },
    29: { titulo:'Something I Want to Improve', objetivo:'Reflect on areas of growth and share vulnerably', materiais:'None', passos:['Create a safe and welcoming environment','Each woman shares an area she wants to improve','Can be spiritual, personal or relational','The group encourages and offers support','Close praying for each area mentioned'], aplicacao:'God works in us to will and act according to His good purpose. (Phil 2:13)' },
    30: { titulo:'An Important Virtue', objetivo:'Reflect on virtues and character', materiais:'None', passos:['Ask each one to think of the most important virtue','Each woman shares a virtue and why it matters','How she tries to practice it daily','The group discusses and adds perspectives','Close praying for the development of these virtues'], aplicacao:'The fruit of the Spirit transforms our character and impacts those around us. (Gal 5:22)' },
    31: { titulo:'A Special Memory', objetivo:'Share meaningful memories with gratitude', materiais:'None', passos:['Ask each one to think of a special memory','Each woman shares the memory and its meaning','Can be from childhood, family or church','The group listens with empathy and celebration','Close thanking God for the memories'], aplicacao:'Gratitude for the past strengthens faith for the future. (Ps 77:11)' },
    32: { titulo:'Something That Challenges Me', objetivo:'Share challenges and find community support', materiais:'None', passos:['Create a trusting environment','Each woman shares something that challenges her in faith','Can be doubt, fear or difficult circumstance','The group offers support and prayer','Close in specific intercession for each challenge'], aplicacao:'In all these things we are more than conquerors through Him. (Rom 8:37)' },
    33: { titulo:'My Favorite Verse', objetivo:'Share and celebrate special verses', materiais:'Bible', passos:['Ask each one to share her favorite verse','Each woman reads the verse and explains its meaning','Why this verse is so special to her','The group receives each verse with respect','Close praying the verses over the group'], aplicacao:'The Word of God is lamp to our feet and light to our path. (Ps 119:105)' },
    34: { titulo:'Something That Strengthens Me', objetivo:'Share sources of spiritual strength', materiais:'None', passos:['Ask each one to think of what strengthens her in God','Each woman shares that source of strength','Can be worship, prayer, community or Word','The group discovers new sources of strength','Close in worship and declaration of God\'s strength'], aplicacao:'Those who wait on the Lord will renew their strength. (Isa 40:31)' },
    35: { titulo:'An Experience with God', objetivo:'Share remarkable spiritual experiences', materiais:'None', passos:['Create an atmosphere of reverence and openness','Each woman shares a remarkable spiritual experience','Can be in prayer, Bible or a circumstance','The group listens with respect and gratitude','Close thanking God for the experiences'], aplicacao:'Taste and see that the Lord is good. Each experience with God is precious. (Ps 34:8)' },
    36: { titulo:'Something I Want to Thank', objetivo:'Practice collective gratitude', materiais:'None', passos:['Open with a moment of silence and reflection','Each woman shares a reason for gratitude to God','Can be simple or profound, recent or old','The group responds with "amen" or "glory to God"','Close in collective prayer of thanksgiving'], aplicacao:'Gratitude honors God and opens doors for more blessings. (Ps 107:1)' },
    37: { titulo:'A Word of Hope', objetivo:'Share hope and encourage one another', materiais:'None', passos:['Ask each one to think of a word of hope','Each woman shares her word and why','How this hope sustains her daily','The group receives the words with gratitude','Close declaring God is faithful and will fulfill what He promised'], aplicacao:'Let us hold firmly to the hope we profess, for He who promised is faithful. (Heb 10:23)' },
    38: { titulo:'A Story of Overcoming', objetivo:'Share overcoming stories and strengthen faith', materiais:'None', passos:['Create a celebratory and grateful atmosphere','Each woman shares an overcoming story','How God helped her overcome a difficulty','The group celebrates with applause and amen','Close praying and thanking for the victories'], aplicacao:'I can do all things through Him who strengthens me. God enables us to overcome. (Phil 4:13)' },
    39: { titulo:'Something I Learned from the Bible', objetivo:'Share recent biblical teachings', materiais:'Bible', passos:['Ask each one to think of something she learned from the Bible','Each woman shares a recent biblical teaching','How that teaching impacted her life','The group can ask and go deeper','Close praying to apply the teachings'], aplicacao:'God\'s Word illuminates, teaches and transforms our daily life. (Ps 119:105)' },
    40: { titulo:'My Spiritual Motivation', objetivo:'Share what motivates the spiritual walk', materiais:'None', passos:['Ask each one to reflect on her greatest motivation','Each woman shares what motivates her spiritually','Why she keeps following God despite difficulties','The group celebrates and strengthens motivations','Close declaring the purpose of living for God'], aplicacao:'Whatever you do, do it wholeheartedly, as for the Lord. (Col 3:17)' },
    41: { titulo:'Sharing Hope', objetivo:'Reinforce hope in God', materiais:'None', passos:['Open in prayer asking God to fill hearts with hope','Each woman shares something that gives her hope','Can be a promise, experience or certainty','The group celebrates each shared hope','Close declaring God has plans of peace for all'], aplicacao:'God has plans of peace for us, to give us hope and a future. (Jer 29:11)' },
    42: { titulo:'Testimony of the Week', objetivo:'Share recent experiences with God', materiais:'None', passos:['Ask each one to think of what God did this week','Each participant tells something God did recently','Can be small or big, internal or external','The group celebrates and thanks for the testimonies','Close in collective prayer of gratitude'], aplicacao:'Testimonies strengthen collective faith and glorify God. (Ps 66:16)' },
    43: { titulo:'Verse That Sustains Me', objetivo:'Strengthen faith in difficult times', materiais:'Bible', passos:['Ask each one to think of the verse that sustains her in difficulties','Each woman shares that verse','Tells how it helped her in a difficult moment','The group prays that verse over each one','Close declaring God strengthens and sustains'], aplicacao:'Do not fear, for I am your God. I will strengthen you and help you. (Isa 41:10)' },
    44: { titulo:'My Greatest Gratitude', objetivo:'Encourage deep gratitude', materiais:'None', passos:['Ask each one to think of the greatest gratitude in her life','Each woman shares what she\'s most grateful to God for','Can be health, family, salvation, or a specific moment','The group receives with "amen" and celebration','Close in deep prayer of thanksgiving'], aplicacao:'Gratitude honors God and transforms our heart. Give thanks to the Lord. (Ps 107:1)' },
    45: { titulo:'A Word from God', objetivo:'Share spiritual direction received', materiais:'Bible', passos:['Ask each one to think of a word God spoke to her heart','Each woman shares that biblical word','How she received it and what it means to her','The group prays that word over each one','Close declaring the Word guides our steps'], aplicacao:'God\'s Word is a lamp that illuminates our path. (Ps 119:105)' },
    46: { titulo:'Something I Learned from a Challenge', objetivo:'Reflect on growth through difficulties', materiais:'None', passos:['Create a safe welcoming environment','Each woman shares a challenge and its learning','How God transformed her through difficulty','The group listens with empathy and celebrates growth','Close praying for trials still underway'], aplicacao:'Trials produce perseverance and make us more like Christ. (James 1:3)' },
    47: { titulo:'Intercessory Prayer', objetivo:'Strengthen the ministry of intercession', materiais:'None', passos:['Divide the group into pairs or trios','Each woman shares a personal prayer request','Others pray specifically for that request','Switch roles so all are prayed for','Close with collective prayer for the requests'], aplicacao:'Prayer unites the group and changes lives. Interceding is the greatest act of love. (1 Tim 2:1)' },
    48: { titulo:'My Source of Peace', objetivo:'Reflect on deep spiritual peace', materiais:'None', passos:['Open with a moment of silence and breathing','Each participant shares what brings her peace','Can be prayer, nature, worship, Word or God\'s presence','The group learns new sources of peace','Close with a moment of silence and gratitude'], aplicacao:'Christ\'s peace guards our hearts and minds. (John 14:27)' },
    49: { titulo:'Verse for Today', objetivo:'Start the meeting connected with the Word', materiais:'Bible', passos:['Ask each one to read a verse that marked her day','Each participant reads the verse aloud','Briefly explains why it impacted the day','The group receives each Word with attention','Close declaring the Word renews the spirit'], aplicacao:'This is the day the Lord has made. The Word renews our spirit each morning. (Ps 118:24)' },
    50: { titulo:'Overcoming Story', objetivo:'Share victories and strengthen faith', materiais:'None', passos:['Create a celebratory grateful atmosphere','Each woman tells a challenge overcome with God\'s help','How the process went and what she learned','The group celebrates with applause and amen','Close praying and thanking for the victories'], aplicacao:'I can do all things through Him who strengthens me. God enables us to overcome anything. (Phil 4:13)' },
    51: { titulo:'My Favorite Promise', objetivo:'Share precious biblical promises' },
    52: { titulo:'Something That Draws Me to God (2)', objetivo:'Reflect on transforming spiritual practices' },
    53: { titulo:'Spiritual Memory', objetivo:'Share remarkable spiritual memories' },
    54: { titulo:'A Virtue I Want to Develop', objetivo:'Reflect on Christian character growth' },
    55: { titulo:'My Strength Verse', objetivo:'Share verses that renew strength' },
    56: { titulo:'My Journey with God', objetivo:'Share the personal walk with God' },
    57: { titulo:'A Word of Encouragement', objetivo:'Strengthen one another with words of life' },
    58: { titulo:'Something God Taught Me', objetivo:'Share lessons received from God' },
    59: { titulo:'My Motivation in Faith', objetivo:'Reflect on purpose and spiritual motivation' },
    60: { titulo:'Something That Brings Me Joy', objetivo:'Share and celebrate everyday joys' },
    61: { titulo:'A Dream God Placed in Me', objetivo:'Share dreams and purposes given by God' },
    62: { titulo:'A Bible Lesson', objetivo:'Share recent biblical learnings' },
    63: { titulo:'Something I Want to Thank God for Today', objetivo:'Practice gratitude in the present moment' },
    64: { titulo:'A Word of Faith', objetivo:'Strengthen faith through declarations' },
    65: { titulo:'My Hope in God', objetivo:'Reflect and share hope in God' },
    66: { titulo:'A Verse That Guides Me', objetivo:'Share verses that guide life' },
    67: { titulo:'Something I Learned from Someone Else', objetivo:'Value relationships as a source of learning' },
    68: { titulo:'My Source of Courage', objetivo:'Reflect on spiritual courage' },
    69: { titulo:'A Word That Defines My Moment', objetivo:'Reflect on the current season of life' },
    70: { titulo:'Something I Want to Surrender to God', objetivo:'Practice surrender and trust in God' },
    71: { titulo:'An Experience with Prayer', objetivo:'Share transforming experiences with prayer' },
    72: { titulo:'Something That Draws Me to People', objetivo:'Reflect on what strengthens community bonds' },
    73: { titulo:'A Word of Wisdom', objetivo:'Share wisdom received from God and life' },
    74: { titulo:'My Spiritual Inspiration', objetivo:'Share what inspires the spiritual walk' },
    75: { titulo:'Something That Gives Me Hope', objetivo:'Share sources of hope and encouragement' },
    76: { titulo:'A Story of Faith', objetivo:'Share faith stories that strengthen the group' },
    77: { titulo:'My Greatest Spiritual Lesson', objetivo:'Share the most important spiritual learning' },
    78: { titulo:'A Word of Gratitude', objetivo:'Express gratitude through meaningful words' },
    79: { titulo:'Something That Strengthens My Faith', objetivo:'Share what sustains faith in difficult times' },
    80: { titulo:'My Prayer for the Future', objetivo:'Share hopes and prayers for what is to come' },
    81: { titulo:'Word of Gratitude', objetivo:'Practice gratitude through shared words' },
    82: { titulo:'Verse of Hope', objetivo:'Share verses that bring hope and comfort' },
    83: { titulo:'Something God Did for Me', objetivo:'Share testimonies of God\'s action in life' },
    84: { titulo:'My Source of Joy', objetivo:'Reflect on what brings true and lasting joy' },
    85: { titulo:'Something I Want to Surrender to God (2)', objetivo:'Practice trusting God with specific areas' },
    86: { titulo:'My Word for Today (2)', objetivo:'Choose a word that represents the current moment' },
    87: { titulo:'My Motivation in Faith (2)', objetivo:'Share what keeps the flame of faith alive' },
    88: { titulo:'Something That Gives Me Peace', objetivo:'Share sources of peace and serenity in God' },
    89: { titulo:'A Lesson I Learned', objetivo:'Share valuable lessons from life experiences' },
    90: { titulo:'My Favorite Promise (2)', objetivo:'Celebrate God\'s faithful promises' },
    91: { titulo:'Something That Draws Me to God (3)', objetivo:'Deepen the connection with God' },
    92: { titulo:'My Spiritual Journey', objetivo:'Share the spiritual journey with the group' },
    93: { titulo:'Something I Want to Thank God for Today (2)', objetivo:'Cultivate daily gratitude' },
    94: { titulo:'My Spiritual Inspiration (2)', objetivo:'Share who and what inspires faith' },
    95: { titulo:'Something God Taught Me (2)', objetivo:'Reflect on recent divine teachings' },
    96: { titulo:'My Source of Courage (2)', objetivo:'Share where courage comes from in Christ' },
    97: { titulo:'Something I Want to Improve (2)', objetivo:'Reflect on growth areas with vulnerability' },
    98: { titulo:'A Word of Hope (2)', objetivo:'Strengthen hope through God\'s promises' },
    99: { titulo:'Something That Strengthens Me (2)', objetivo:'Share sources of spiritual and emotional strength' },
    100: { titulo:'An Experience with God (2)', objetivo:'Share transforming encounters with God' },
    101: { titulo:'Algo que Quero Aprender', objetivo:'Reflect on crescimento and aprendizado contínuo' },
    102: { titulo:'Minha Palavra para o Futuro', objetivo:'Reflect on hope and expectativa futura' },
    103: { titulo:'Something That Draws Me to People (2)', objetivo:'Reflect on o amor ao próximo na prática' },
    104: { titulo:'My Prayer Today', objetivo:'Share pedidos de prayer and orar juntas' },
    105: { titulo:'Something That Inspires Me', objetivo:'Share fontes de inspiração spiritual' },
    106: { titulo:'A Word of Faith (2)', objetivo:'Strengthen faith através de declarações' },
    107: { titulo:'Something That Motivates Me to Serve', objetivo:'Reflect on motivação para o serviço cristão' },
    108: { titulo:'Minha História de Fé', objetivo:'Share momentos marcantes de faith' },
    109: { titulo:'Something I Learned from a Challenge (2)', objetivo:'Reflect on crescimento em meio às dificuldades' },
    110: { titulo:'My Word of Gratitude', objetivo:'Express gratitude for goodness eternal de Deus' },
    111: { titulo:'Algo que Me Traz Esperança', objetivo:'Reflect and compartilhar motivos de hope' },
    112: { titulo:'My Spiritual Motivation (2)', objetivo:'Reflect on propósito and motivação para Deus' },
    113: { titulo:'Something I Want to Surrender to God (3)', objetivo:'Practice surrender de preocupações Deus' },
    114: { titulo:'Minha Promessa para Hoje', objetivo:'Strengthen faith com promessas biblicals dailys' },
    115: { titulo:'Algo que Me Dá Força', objetivo:'Reflect on fontes de força spiritual' },
    116: { titulo:'Minha Palavra de Paz', objetivo:'Reflect on peace em meio às tribulações' },
    117: { titulo:'Something I Learned in the Bible', objetivo:'Share ensinamentos bíblicos recentes' },
    118: { titulo:'My Experience with Prayer', objetivo:'Share experiências que fortalecem vida de prayer' },
    119: { titulo:'Algo que Me Dá Alegria', objetivo:'Share and celebrar joys do cotidiano' },
    120: { titulo:'My Hope in God (2)', objetivo:'Reflect on hope ancorada in God' },
    121: { titulo:'Sharing Hope (2)', objetivo:'Strengthen trust in God' },
    122: { titulo:'My Word of Gratitude (2)', objetivo:'Estimular gratitude que nos aproxima de Deus' },
    123: { titulo:'Verse That Sustains Me (2)', objetivo:'Share promessas biblicals que sustentam' },
    124: { titulo:'Something I Learned from God (2)', objetivo:'Reflect on aprendizado spiritual recebido de Deus' },
    125: { titulo:'My Source of Peace (2)', objetivo:'Reflect on peace spiritual deep' },
    126: { titulo:'My Motivation to Serve', objetivo:'Reflect on o serviço como expressão dos dons' },
    127: { titulo:'A Word of Courage', objetivo:'Strengthen courage spiritual no grupo' },
    128: { titulo:'My Story with God', objetivo:'Share experiências espirituais marcantes' },
    129: { titulo:'Something I Want to Surrender to God (4)', objetivo:'Practice surrender and trust in God' },
    130: { titulo:'My Hope for the Future', objetivo:'Reflect on o futuro com hope and faith' },
    131: { titulo:'Something That Inspires Me (2)', objetivo:'Share fontes de inspiração spiritual' },
    132: { titulo:'My Prayer Today (2)', objetivo:'Share pedidos and orar juntas' },
    133: { titulo:'Something That Strengthens Me (3)', objetivo:'Share o que renova as forças espirituais' },
    134: { titulo:'A Word of Wisdom (2)', objetivo:'Share wisdom adquirida na caminhada' },
    135: { titulo:'My Favorite Promise (3)', objetivo:'Share promessas biblicals preciosas' },
    136: { titulo:'Something I Learned from a Challenge (3)', objetivo:'Reflect on maturidade adquirida em desafios' },
    137: { titulo:'My Source of Joy (2)', objetivo:'Share fontes de joy que vêm de Deus' },
    138: { titulo:'Something That Draws Me to God (4)', objetivo:'Reflect on práticas que aproximam de Deus' },
    139: { titulo:'My Word of Hope', objetivo:'Share hope and encorajar umas às outras' },
    140: { titulo:'Something I Want to Improve (3)', objetivo:'Reflect on áreas de crescimento spiritual' },
    141: { titulo:'My Experience with Prayer (2)', objetivo:'Share experiências que fortalecem prayer' },
    142: { titulo:'Something That Gives Me Courage', objetivo:'Reflect on courage spiritual' },
    143: { titulo:'My Word for Today (3)', objetivo:'Conectar com direção spiritual através da Palavra' },
    144: { titulo:'Something I Want to Thank God For (2)', objetivo:'Practice gratitude for goodness eternal de Deus' },
    145: { titulo:'My Spiritual Inspiration (3)', objetivo:'Share pessoas que inspiram and edificam faith' },
    146: { titulo:'Something I Learned in the Bible (2)', objetivo:'Share ensinamentos bíblicos transformadores' },
    147: { titulo:'My Motivation in Faith (3)', objetivo:'Reflect on propósito de viver para o Senhor' },
    148: { titulo:'Something That Gives Me Peace (2)', objetivo:'Reflect on peace que excede o entendimento' },
    149: { titulo:'My Story of Overcoming', objetivo:'Share superações and fortalecer faith' },
    150: { titulo:'Something That Draws Me to People (3)', objetivo:'Reflect on o amor ao próximo como identidade cristã' },
    151: { titulo:'My Hope in God (3)', objetivo:'Reflect on hope genuína in God' },
    152: { titulo:'Something I Learned from Someone Else (2)', objetivo:'Valorizar relacionamentos como fonte de aprendizado' },
    153: { titulo:'My Source of Wisdom', objetivo:'Reflect on como buscar wisdom divina' },
    154: { titulo:'Something That Motivates Me to Serve (2)', objetivo:'Reflect on motivação para o serviço com amor' },
    155: { titulo:'My Word of Faith', objetivo:'Strengthen faith através de declarações biblicals' },
    156: { titulo:'Something That Strengthens My Faith (2)', objetivo:'Reflect on o que fortalece faith no cotidiano' },
    157: { titulo:'My Prayer for the Future (2)', objetivo:'Reflect on o futuro com faith através da prayer' },
    158: { titulo:'Something I Want to Surrender Today', objetivo:'Practice surrender daily de preocupações Deus' },
    159: { titulo:'My Word of Gratitude (3)', objetivo:'Express gratitude and joy pelo novo dia' },
    160: { titulo:'Something That Draws Me to God (5)', objetivo:'Reflect on práticas espirituais transformadoras' },
    161: { titulo:'Sharing Hope (3)', objetivo:'Strengthen hope in God' },
    162: { titulo:'My Word of Gratitude (4)', objetivo:'Estimular gratitude que aproxima o cprayer de Deus' },
    163: { titulo:'Verse That Sustains Me (3)', objetivo:'Share promessas biblicals que renovam as forças' },
    164: { titulo:'Something I Learned from God (3)', objetivo:'Reflect on aprendizado spiritual recebido de Deus' },
    165: { titulo:'My Source of Peace (3)', objetivo:'Reflect on peace de Cristo que acalma' },
    166: { titulo:'My Motivation to Serve (2)', objetivo:'Reflect on o serviço como expressão dos dons' },
    167: { titulo:'A Word of Courage (2)', objetivo:'Strengthen courage spiritual no grupo' },
    168: { titulo:'My Story with God (2)', objetivo:'Share como surrenderr os caminhos Deus traz peace' },
    169: { titulo:'Something I Want to Surrender to God (5)', objetivo:'Practice surrender de cargas and preocupações Deus' },
    170: { titulo:'My Hope for the Future (2)', objetivo:'Reflect on hope futura com faith' },
    171: { titulo:'Something That Inspires Me (3)', objetivo:'Share exemplos de faith que motivam' },
    172: { titulo:'My Prayer Today (3)', objetivo:'Share pedidos and orar juntas' },
    173: { titulo:'Something That Strengthens Me (4)', objetivo:'Reflect on o que fortalece faith' },
    174: { titulo:'A Word of Wisdom (3)', objetivo:'Share wisdom adquirida na caminhada' },
    175: { titulo:'My Favorite Promise (4)', objetivo:'Share promessas biblicals preciosas' },
    176: { titulo:'Something I Learned from a Challenge (4)', objetivo:'Reflect on perseverança adquirida nas provações' },
    177: { titulo:'My Source of Joy (3)', objetivo:'Share joys que vêm da presença de Deus' },
    178: { titulo:'Something That Draws Me to God (6)', objetivo:'Reflect on Palavra como caminho para Deus' },
    179: { titulo:'My Word of Hope (2)', objetivo:'Share hope and encorajar umas às outras' },
    180: { titulo:'Something I Want to Improve (4)', objetivo:'Reflect on áreas de crescimento spiritual' },
    181: { titulo:'My Experience with Prayer (3)', objetivo:'Share experiências de prayer contínua' },
    182: { titulo:'Something That Gives Me Courage (2)', objetivo:'Reflect on courage ancorada in God' },
    183: { titulo:'My Word for Today (4)', objetivo:'Guardar Palavra no cprayer para direção daily' },
    184: { titulo:'Something I Want to Thank God For (3)', objetivo:'Practice gratitude celebrando o dia que Deus fez' },
    185: { titulo:'My Spiritual Inspiration (4)', objetivo:'Share pessoas que encorajam and edificam' },
    186: { titulo:'Something I Learned in the Bible (3)', objetivo:'Share ensinamentos bíblicos que ensinam and orientam' },
    187: { titulo:'My Motivation in Faith (4)', objetivo:'Reflect on propósito de glorificar Deus' },
    188: { titulo:'Something That Gives Me Peace (3)', objetivo:'Reflect on peace de Deus que guarda o cprayer' },
    189: { titulo:'My Story of Overcoming (2)', objetivo:'Share como Deus nos fortalece para superar' },
    190: { titulo:'Something That Draws Me to People (4)', objetivo:'Reflect on o amor ao próximo como marca do discípulo' },
    191: { titulo:'My Hope in God (4)', objetivo:'Reflect on hope que confía no Senhor' },
    192: { titulo:'Something I Learned from Someone Else (3)', objetivo:'Valorizar relacionamentos como ferramenta de crescimento' },
    193: { titulo:'My Source of Wisdom (2)', objetivo:'Reflect on como buscar wisdom que traz felicidade' },
    194: { titulo:'Something That Motivates Me to Serve (3)', objetivo:'Reflect on serviço como expressão de amor' },
    195: { titulo:'My Word of Faith (2)', objetivo:'Strengthen faith através de declarações biblicals' },
    196: { titulo:'Something That Strengthens My Faith (3)', objetivo:'Reflect on o que fortalece faith no Senhor' },
    197: { titulo:'My Prayer for the Future (3)', objetivo:'Reflect on o futuro com faith através da prayer' },
    198: { titulo:'Something I Want to Surrender Today (2)', objetivo:'Practice trust and surrender daily Deus' },
    199: { titulo:'My Word of Gratitude (5)', objetivo:'Express gratitude for goodness eternal de Deus' },
    200: { titulo:'Something That Draws Me to God (7)', objetivo:'Celebrate jornada spiritual and renovar o compromisso with God' },
  },
  es: {
    1: { titulo:'Toque de Gratitud', objetivo:'Cultivar la apreciación mutua en el grupo', materiais:'Papel y bolígrafo', passos:['Distribuye papeles a todas las participantes','Cada una escribe el nombre de otra participante arriba','Escribe una cualidad especial de esa persona','Dobla el papel y entrégalo anónimamente','Lee en voz alta y celebren juntas'], aplicacao:'Así como Pablo agradecía por las iglesias (Fil 1:3), aprendemos a ver el valor en las demás.' },
    2: { titulo:'Piedra, Palabra y Oración', objetivo:'Interceder las unas por las otras con intención', materiais:'Piedras pequeñas', passos:['Entrega una piedra a cada participante','Cada una escribe una petición de oración en papel','Intercambian los papeles aleatoriamente','Cada una ora por la necesidad que recibió','Guardan la piedra como símbolo de intercesión'], aplicacao:'Sobrellevad los unos las cargas de los otros (Gál 6:2). Cada piedra representa a una hermana en el corazón.' },
    3: { titulo:'Espejo de Palabras', objetivo:'Afirmar la identidad en Cristo', materiais:'Espejo pequeño o papel metalizado', passos:['Forma parejas en el grupo','Una mira a la otra como si fuera un espejo','Dice una verdad bíblica sobre ella','La otra recibe con los ojos cerrados','Se turnan y repiten'], aplicacao:'Somos hechas a imagen de Dios (Gén 1:27). Ver a Cristo en la otra es ver al Creador.' },
    4: { titulo:'Línea del Tiempo de la Fe', objetivo:'Compartir el recorrido de fe de forma visual', materiais:'Papel y bolígrafo de colores', passos:['Distribuye hojas grandes a cada participante','Dibujen una línea horizontal en el centro','Marquen momentos clave del camino de fe','Coloquen símbolo positivo ✦ y difícil ✗','Compartan con el grupo en 2 minutos cada una'], aplicacao:'Recordemos el camino que Dios nos trajo. Cada etapa fue moldeando nuestro carácter.' },
    5: { titulo:'Carta al Futuro', objetivo:'Proyectar fe y esperanza hacia el futuro', materiais:'Sobres y papel', passos:['Cada participante recibe un sobre y papel','Escriben una carta para sí mismas dentro de un año','Describen quién quieren ser, qué fe quieren tener','Cierran el sobre con la fecha de apertura','El grupo ora sobre las cartas antes de guardarlas'], aplicacao:'La fe es la certeza de lo que se espera (Heb 11:1). Escribirlo es un acto de fe.' },
    6: { titulo:'Mapa de Bendiciones', objetivo:'Reconocer las bendiciones cotidianas', materiais:'Post-its de colores', passos:['Entrega 5 post-its por persona','Cada una escribe una bendición diferente en cada uno','Los pegan en una pared o cartelera','Leen en voz alta los que más tocaron su corazón','Cierran con una oración de acción de gracias'], aplicacao:'Dad gracias en todo (1 Tes 5:18). Ver las bendiciones transforma la perspectiva de vida.' },
    7: { titulo:'Adivina Quién Soy', objetivo:'Acercar a las participantes de forma divertida', materiais:'Tarjetas y bolígrafos', passos:['Cada una escribe 3 datos inusuales sobre sí misma','No escribe su nombre','La líder lee y el grupo trata de adivinar quién es','La "descubierta" hace su presentación completa','Terminan con un aplauso colectivo'], aplicacao:'Somos muchos miembros pero un solo cuerpo. Conocernos es valorar el cuerpo de Cristo.' },
    8: { titulo:'Regalo Invisible de Palabras', objetivo:'Practicar el ánimo activo', materiais:'Papel y bolígrafo', passos:['Forma un círculo con las participantes','Cada una dobla un papel y lo pasa a la derecha','Escribe un ánimo para la persona a su izquierda','Pasa nuevamente sin leer','Al final cada una abre y lee su "regalo"'], aplicacao:'La lengua tiene poder de vida (Prov 18:21). Las palabras elegidas con amor son regalos eternos.' },
    9: { titulo:'Cartas de Ánimo', objetivo:'Fortalecer y animar unas a otras', materiais:'Papel y bolígrafo', passos:['Distribuye papel y bolígrafo a cada participante','Sortea nombres para que cada una escriba','Cada una escribe un mensaje de ánimo','Entrega las cartas a las destinatarias','Da tiempo para leer y compartir reacciones'], aplicacao:'Las palabras de ánimo pueden cambiar el día y la vida de alguien. (1 Tes 5:11)' },
    10: { titulo:'Oración en Parejas', objetivo:'Fortalecer la comunión espiritual a través de la oración', materiais:'Ninguno', passos:['Divide el grupo en parejas','Cada pareja comparte un pedido de oración','Oran una por la otra en voz baja','Luego comparten brevemente con el grupo','Cierra con oración colectiva'], aplicacao:'Orar juntas crea conexión espiritual profunda. Donde dos o tres se reúnen... (Mt 18:20)' },
    11: { titulo:'Versículo de Vida', objetivo:'Compartir versículos que marcaron el caminar', materiais:'Biblia', passos:['Pide que cada una piense en el versículo más importante de su vida','Cada mujer comparte el versículo y la historia detrás','El grupo escucha atentamente','Pueden preguntar cómo Dios usó ese versículo','Cierra en oración basada en los versículos compartidos'], aplicacao:'La Palabra de Dios fortalece, guía y transforma vidas. (Jos 1:9)' },
    12: { titulo:'Gratitud en Grupo', objetivo:'Estimular y compartir gratitud', materiais:'Ninguno', passos:['Sienta al grupo en círculo','Cada mujer dice algo por lo que agradece a Dios hoy','Puede ser simple o profundo','El grupo responde con "amén" o aplauso','Continúa hasta que todas hayan participado'], aplicacao:'La gratitud colectiva fortalece el corazón de toda la comunidad. (Sal 136:1)' },
    13: { titulo:'Mi Mayor Desafío', objetivo:'Compartir desafíos y encontrar apoyo', materiais:'Ninguno', passos:['Crea un ambiente de confianza y seguridad','Cada participante comparte su mayor desafío actual','El grupo escucha sin juzgar','Pueden ofrecer palabras de apoyo y ánimo','Cierra orando específicamente por cada desafío'], aplicacao:'Dios nos sostiene en los desafíos. Echa tu carga sobre el Señor. (Sal 55:22)' },
    14: { titulo:'Aprendizaje Reciente', objetivo:'Compartir crecimiento espiritual reciente', materiais:'Ninguno', passos:['Pide que cada una reflexione sobre la semana o mes','Cada mujer comparte algo que Dios le enseñó','Puede ser una enseñanza bíblica o lección de vida','El grupo puede identificarse o complementar','Cierra agradeciendo a Dios por el crecimiento'], aplicacao:'Dios nos enseña diariamente a través de Su Palabra y experiencias. (Prov 3:5)' },
    15: { titulo:'Quién Me Inspiró', objetivo:'Valorar personas que impactaron la fe', materiais:'Ninguno', passos:['Pide que cada una piense en alguien que inspiró su fe','Cada mujer presenta a esa persona y cuenta la historia','Cómo esa persona impactó su caminar con Dios','El grupo celebra esas historias de influencia','Cierra orando por las personas mencionadas'], aplicacao:'Dios usa personas para inspirarnos y fortalecernos. (Heb 10:24)' },
    16: { titulo:'Mi Esperanza', objetivo:'Reflexionar y compartir esperanza futura', materiais:'Ninguno', passos:['Pide que cada una piense en sus esperanzas','Cada mujer comparte una esperanza futura','Puede ser personal, familiar o espiritual','El grupo celebra y ora por las esperanzas','Cierra declarando que Dios tiene planes buenos'], aplicacao:'Dios tiene planes de prosperarnos, de darnos esperanza y un futuro. (Jer 29:11)' },
    17: { titulo:'Mi Mayor Alegría', objetivo:'Compartir y celebrar alegrías', materiais:'Ninguno', passos:['Crea un clima de celebración y alegría','Cada mujer comparte algo que trajo gran alegría','Puede ser reciente o un momento especial de la vida','El grupo celebra con aplausos o amén','Cierra en alabanza y acción de gracias'], aplicacao:'El gozo del Señor nos fortalece y desborda hacia quienes nos rodean. (Sal 16:11)' },
    18: { titulo:'Una Oración Respondida', objetivo:'Compartir respuestas de oración y fortalecer la fe', materiais:'Ninguno', passos:['Pide que cada una piense en una oración respondida','Cada mujer comparte la oración y cómo Dios respondió','Puede ser diferente de lo esperado pero aún así una respuesta','El grupo celebra y agradece a Dios','Cierra en oración colectiva de gratitud'], aplicacao:'Dios escucha y responde nuestras oraciones — a veces de formas sorprendentes. (Fil 4:6)' },
    19: { titulo:'Mi Lugar de Paz', objetivo:'Compartir momentos y lugares de paz espiritual', materiais:'Ninguno', passos:['Pide que cada una piense en su lugar de paz','Cada mujer describe dónde o cuándo siente paz','Puede ser un lugar físico o un momento espiritual','El grupo comparte cómo encuentra paz en Dios','Cierra con un momento de silencio y oración'], aplicacao:'Dios nos da una paz que sobrepasa todo entendimiento. (Jn 14:27)' },
    20: { titulo:'Mi Canción Favorita', objetivo:'Compartir canciones que tocan el alma y unen al grupo', materiais:'Ninguno', passos:['Pide que cada una piense en su canción cristiana favorita','Cada mujer dice el título y por qué es especial','Puede cantar un fragmento si quiere','El grupo puede identificarse con las canciones','Cierra cantando juntas una canción conocida por todas'], aplicacao:'La adoración une corazones y nos acerca a Dios y unas a otras. (Sal 100:1)' },
    21: { titulo:'Algo que Aprendí de Dios', objetivo:'Compartir sabiduría recibida de Dios', materiais:'Ninguno', passos:['Pide que cada una reflexione sobre lo que Dios ha enseñado','Cada mujer cuenta algo que Dios le enseñó recientemente','Puede ser a través de la Biblia, oración o circunstancia','El grupo escucha y puede agregar experiencias similares','Cierra agradeciendo a Dios por la sabiduría'], aplicacao:'Dios da sabiduría generosamente cuando pedimos con fe. (Stg 1:5)' },
    22: { titulo:'Una Lección de Vida', objetivo:'Compartir lecciones valiosas aprendidas', materiais:'Ninguno', passos:['Pide que cada una piense en una lección importante de la vida','Cada mujer comparte la lección y cómo la aprendió','Puede ser a través de dificultad, alegría o palabra de Dios','El grupo escucha y aprende de las experiencias','Cierra en oración pidiendo sabiduría para aplicar las lecciones'], aplicacao:'Aprendemos de las experiencias y Dios las usa para moldearnos. (Prov 4:7)' },
    23: { titulo:'Una Promesa para Hoy', objetivo:'Conectarse con promesas bíblicas específicas', materiais:'Biblia', passos:['Pide que cada una encuentre una promesa en la Biblia','Cada participante lee la promesa en voz alta','Comparte por qué esta promesa es importante hoy','El grupo ora la promesa sobre cada una','Cierra declarando las promesas juntas'], aplicacao:'Las promesas de Dios son Sí y Amén. Cada una es un ancla para nuestras almas. (2 Cor 1:20)' },
    24: { titulo:'Algo que Me Motiva', objetivo:'Compartir motivaciones espirituales', materiais:'Ninguno', passos:['Pide que cada una piense en lo que la motiva','Cada mujer comparte su motivación espiritual','Por qué sigue a Dios a pesar de las dificultades','El grupo celebra y fortalece las motivaciones','Cierra declarando el propósito de vivir para Dios'], aplicacao:'Todo lo que hagáis, hacedlo de corazón, como para el Señor. (Col 3:17)' },
    25: { titulo:'Un Sueño en el Corazón', objetivo:'Compartir sueños y aspiraciones futuras', materiais:'Ninguno', passos:['Pide que cada una piense en un sueño en su corazón','Cada mujer comparte un sueño o aspiración','Puede ser personal, profesional o espiritual','El grupo ora sobre cada sueño','Cierra declarando que Dios cumple las promesas'], aplicacao:'Deléitate en el Señor y Él concederá los deseos de tu corazón. (Sal 37:4)' },
    26: { titulo:'Mi Camino de Fe', objetivo:'Compartir el camino de fe desde el inicio hasta hoy', materiais:'Ninguno', passos:['Pide que cada una reflexione sobre su camino de fe','Cada mujer comparte el inicio de su fe','Momentos clave que marcaron su caminar','El grupo escucha con respeto y gratitud','Cierra agradeciendo a Dios por cada camino'], aplicacao:'Cada camino de fe es único y precioso. Dios escribe historias únicas. (Sal 139:16)' },
    27: { titulo:'Algo que Me Acerca a Dios', objetivo:'Reflexionar sobre lo que fortalece la conexión espiritual', materiais:'Ninguno', passos:['Pide que cada una piense en lo que la acerca a Dios','Cada mujer comparte esa práctica o momento','Puede ser oración, adoración, naturaleza o silencio','El grupo descubre nuevas formas de conectar con Dios','Cierra en un momento de adoración juntas'], aplicacao:'Acercaos a Dios y Él se acercará a vosotros. (Stg 4:8)' },
    28: { titulo:'Mi Palabra para Hoy', objetivo:'Elegir una palabra que represente el momento actual', materiais:'Ninguno', passos:['Pide que cada una elija una palabra para hoy','Cada mujer comparte la palabra y explica brevemente','El grupo recibe cada palabra con atención','Pueden animar basándose en la palabra elegida','Cierra orando las palabras sobre cada una'], aplicacao:'La Palabra de Dios es viva y eficaz. Cada palabra elegida con propósito tiene poder. (Heb 4:12)' },
    29: { titulo:'Algo que Quiero Mejorar', objetivo:'Reflexionar sobre áreas de crecimiento y compartir con vulnerabilidad', materiais:'Ninguno', passos:['Crea un ambiente seguro y acogedor','Cada mujer comparte un área que quiere mejorar','Puede ser espiritual, personal o relacional','El grupo anima y ofrece apoyo','Cierra orando por cada área mencionada'], aplicacao:'Dios obra en nosotras para querer y hacer según Su buena voluntad. (Fil 2:13)' },
    30: { titulo:'Una Virtud Importante', objetivo:'Reflexionar sobre virtudes y carácter', materiais:'Ninguno', passos:['Pide que cada una piense en la virtud más importante','Cada mujer comparte una virtud y por qué importa','Cómo intenta practicarla diariamente','El grupo discute y agrega perspectivas','Cierra orando por el desarrollo de estas virtudes'], aplicacao:'El fruto del Espíritu transforma nuestro carácter e impacta a quienes nos rodean. (Gál 5:22)' },
    31: { titulo:'Un Recuerdo Especial', objetivo:'Compartir recuerdos significativos con gratitud', materiais:'Ninguno', passos:['Pide que cada una piense en un recuerdo especial','Cada mujer comparte el recuerdo y su significado','Puede ser de la infancia, familia o iglesia','El grupo escucha con empatía y celebración','Cierra agradeciendo a Dios por los recuerdos'], aplicacao:'La gratitud por el pasado fortalece la fe para el futuro. (Sal 77:11)' },
    32: { titulo:'Algo que Me Desafía', objetivo:'Compartir desafíos y encontrar apoyo comunitario', materiais:'Ninguno', passos:['Crea un ambiente de confianza','Cada mujer comparte algo que la desafía en la fe','Puede ser duda, miedo o circunstancia difícil','El grupo ofrece apoyo y oración','Cierra en intercesión específica por cada desafío'], aplicacao:'En todas estas cosas somos más que vencedoras por medio de Él. (Rom 8:37)' },
    33: { titulo:'Mi Versículo Favorito', objetivo:'Compartir y celebrar versículos especiales', materiais:'Biblia', passos:['Pide que cada una comparta su versículo favorito','Cada mujer lee el versículo y explica su significado','Por qué este versículo es tan especial para ella','El grupo recibe cada versículo con respeto','Cierra orando los versículos sobre el grupo'], aplicacao:'La Palabra de Dios es lámpara a nuestros pies y luz a nuestro camino. (Sal 119:105)' },
    34: { titulo:'Algo que Me Fortalece', objetivo:'Compartir fuentes de fortaleza espiritual', materiais:'Ninguno', passos:['Pide que cada una piense en lo que la fortalece en Dios','Cada mujer comparte esa fuente de fortaleza','Puede ser adoración, oración, comunidad o Palabra','El grupo descubre nuevas fuentes de fortaleza','Cierra en adoración y declaración de la fuerza de Dios'], aplicacao:'Los que esperan en el Señor renovarán sus fuerzas. (Is 40:31)' },
    35: { titulo:'Una Experiencia con Dios', objetivo:'Compartir experiencias espirituales marcantes', materiais:'Ninguno', passos:['Crea un clima de reverencia y apertura','Cada mujer relata una experiencia espiritual marcante','Puede ser en oración, en la Biblia o una circunstancia','El grupo escucha con respeto y gratitud','Cierra agradeciendo a Dios por las experiencias'], aplicacao:'Gustad y ved que el Señor es bueno. Cada experiencia con Dios es preciosa. (Sal 34:8)' },
    36: { titulo:'Algo que Quiero Agradecer', objetivo:'Practicar gratitud colectiva', materiais:'Ninguno', passos:['Abre con un momento de silencio y reflexión','Cada mujer comparte un motivo de gratitud a Dios','Puede ser simple o profundo, reciente o antiguo','El grupo responde con "amén" o "gloria a Dios"','Cierra en oración colectiva de acción de gracias'], aplicacao:'La gratitud honra a Dios y abre puertas para más bendiciones. (Sal 107:1)' },
    37: { titulo:'Una Palabra de Esperanza', objetivo:'Compartir esperanza y animar unas a otras', materiais:'Ninguno', passos:['Pide que cada una piense en una palabra de esperanza','Cada mujer comparte su palabra y por qué','Cómo esa esperanza la sostiene en el día a día','El grupo recibe las palabras con gratitud','Cierra declarando que Dios es fiel y cumplirá lo que prometió'], aplicacao:'Mantengamos firme la esperanza que profesamos, porque fiel es el que prometió. (Heb 10:23)' },
    38: { titulo:'Una Historia de Superación', objetivo:'Compartir historias de superación y fortalecer la fe', materiais:'Ninguno', passos:['Crea un clima de celebración y gratitud','Cada mujer comparte una historia de superación','Cómo Dios la ayudó a superar una dificultad','El grupo celebra con aplausos y amén','Cierra en oración agradeciendo por las victorias'], aplicacao:'Todo lo puedo en aquel que me fortalece. Dios nos capacita para superar. (Fil 4:13)' },
    39: { titulo:'Algo que Aprendí de la Biblia', objetivo:'Compartir enseñanzas bíblicas recientes', materiais:'Biblia', passos:['Pide que cada una piense en algo que aprendió de la Biblia','Cada mujer comparte una enseñanza bíblica reciente','Cómo esa enseñanza impactó su vida','El grupo puede preguntar y profundizar','Cierra en oración pidiendo aplicar las enseñanzas'], aplicacao:'La Palabra de Dios ilumina, enseña y transforma nuestra vida diaria. (Sal 119:105)' },
    40: { titulo:'Mi Motivación Espiritual', objetivo:'Compartir lo que motiva el caminar espiritual', materiais:'Ninguno', passos:['Pide que cada una reflexione sobre su mayor motivación','Cada mujer comparte lo que la motiva espiritualmente','Por qué sigue a Dios a pesar de las dificultades','El grupo celebra y fortalece las motivaciones','Cierra declarando el propósito de vivir para Dios'], aplicacao:'Y todo lo que hagáis, hacedlo de corazón, como para el Señor. (Col 3:17)' },
    41: { titulo:'Compartiendo Esperanza', objetivo:'Reforzar la esperanza en Dios', materiais:'Ninguno', passos:['Abre en oración pidiendo que Dios llene los corazones de esperanza','Cada mujer comparte algo que le da esperanza','Puede ser una promesa, experiencia o certeza','El grupo celebra cada esperanza compartida','Cierra declarando que Dios tiene planes de paz para todas'], aplicacao:'Dios tiene planes de paz para nosotras, de darnos esperanza y un futuro. (Jer 29:11)' },
    42: { titulo:'Testimonio de la Semana', objetivo:'Compartir experiencias recientes con Dios', materiais:'Ninguno', passos:['Pide que cada una piense en lo que Dios hizo esta semana','Cada participante cuenta algo que Dios hizo recientemente','Puede ser pequeño o grande, interno o externo','El grupo celebra y agradece por los testimonios','Cierra en oración colectiva de gratitud'], aplicacao:'Los testimonios fortalecen la fe colectiva y glorifican a Dios. (Sal 66:16)' },
    43: { titulo:'Versículo que Me Sostiene', objetivo:'Fortalecer la fe en momentos difíciles', materiais:'Biblia', passos:['Pide que cada una piense en el versículo que la sostiene en dificultades','Cada mujer comparte ese versículo','Cuenta cómo la ayudó en algún momento difícil','El grupo ora ese versículo sobre cada una','Cierra declarando que Dios fortalece y sostiene'], aplicacao:'No temas, porque yo soy tu Dios. Yo te fortaleceré y te ayudaré. (Is 41:10)' },
    44: { titulo:'Mi Mayor Gratitud', objetivo:'Estimular gratitud profunda', materiais:'Ninguno', passos:['Pide que cada una piense en la mayor gratitud de su vida','Cada mujer comparte por lo que más agradece a Dios','Puede ser salud, familia, salvación o un momento específico','El grupo recibe con "amén" y celebración','Cierra en oración profunda de acción de gracias'], aplicacao:'La gratitud honra a Dios y transforma nuestro corazón. Dad gracias al Señor. (Sal 107:1)' },
    45: { titulo:'Una Palabra de Dios', objetivo:'Compartir dirección espiritual recibida', materiais:'Biblia', passos:['Pide que cada una piense en una palabra que Dios habló a su corazón','Cada mujer comparte esa palabra bíblica','Cómo la recibió y qué significa para ella','El grupo ora esa palabra sobre cada una','Cierra declarando que la Palabra guía los pasos'], aplicacao:'La Palabra de Dios es lámpara que ilumina nuestro camino. (Sal 119:105)' },
    46: { titulo:'Algo que Aprendí de un Desafío', objetivo:'Reflexionar sobre crecimiento en medio de dificultades', materiais:'Ninguno', passos:['Crea un ambiente seguro y acogedor','Cada mujer comparte un desafío y su aprendizaje','Cómo Dios la transformó a través de esa dificultad','El grupo escucha con empatía y celebra el crecimiento','Cierra orando por las pruebas que aún están en curso'], aplicacao:'Las pruebas producen perseverancia y nos hacen más semejantes a Cristo. (Stg 1:3)' },
    47: { titulo:'Oración de Intercesión', objetivo:'Fortalecer el ministerio de intercesión', materiais:'Ninguno', passos:['Divide el grupo en parejas o tríos','Cada mujer comparte un pedido de oración personal','Las demás oran específicamente por ese pedido','Se turnan para que todas sean oradas','Cierra con oración colectiva por los pedidos'], aplicacao:'La oración une al grupo y cambia vidas. Interceder es el mayor acto de amor. (1 Tim 2:1)' },
    48: { titulo:'Mi Fuente de Paz', objetivo:'Reflexionar sobre paz espiritual profunda', materiais:'Ninguno', passos:['Abre con un momento de silencio y respiración','Cada participante comparte lo que le trae paz','Puede ser oración, naturaleza, alabanza, Palabra o presencia de Dios','El grupo aprende nuevas fuentes de paz','Cierra con momento de silencio y gratitud'], aplicacao:'La paz de Cristo guarda nuestros corazones y mentes. (Jn 14:27)' },
    49: { titulo:'Versículo para Hoy', objetivo:'Comenzar el encuentro conectadas con la Palabra', materiais:'Biblia', passos:['Pide que cada una lea un versículo que marcó su día','Cada participante lee el versículo en voz alta','Explica brevemente por qué impactó el día','El grupo recibe cada Palabra con atención','Cierra declarando que la Palabra renueva el espíritu'], aplicacao:'Este es el día que hizo el Señor. La Palabra renueva nuestro espíritu cada mañana. (Sal 118:24)' },
    50: { titulo:'Historia de Superación', objetivo:'Compartir superaciones y fortalecer la fe', materiais:'Ninguno', passos:['Crea un clima de celebración y gratitud','Cada mujer cuenta un desafío que superó con ayuda de Dios','Cómo fue el proceso y lo que aprendió','El grupo celebra con aplausos y amén','Cierra en oración agradeciendo por las victorias'], aplicacao:'Todo lo puedo en aquel que me fortalece. Dios nos capacita para superar cualquier cosa. (Fil 4:13)' },
    51: { titulo:'Mi Promesa Favorita', objetivo:'Compartir promesas bíblicas preciosas' },
    52: { titulo:'Algo que Me Acerca a Dios (2)', objetivo:'Reflexionar sobre prácticas espirituales transformadoras' },
    53: { titulo:'Memoria Espiritual', objetivo:'Compartir memorias espirituales marcantes' },
    54: { titulo:'Una Virtud que Quiero Desarrollar', objetivo:'Reflexionar sobre el crecimiento del carácter cristiano' },
    55: { titulo:'Mi Versículo de Fuerza', objetivo:'Compartir versículos que renuevan las fuerzas' },
    56: { titulo:'Mi Camino con Dios', objetivo:'Compartir el caminar personal con Dios' },
    57: { titulo:'Una Palabra de Ánimo', objetivo:'Fortalecerse unas a otras con palabras de vida' },
    58: { titulo:'Algo que Dios Me Enseñó', objetivo:'Compartir aprendizajes recibidos de Dios' },
    59: { titulo:'Mi Motivación en la Fe', objetivo:'Reflexionar sobre propósito y motivación espiritual' },
    60: { titulo:'Algo que Me Trae Alegría', objetivo:'Compartir y celebrar alegrías del cotidiano' },
    61: { titulo:'Un Sueño que Dios Puso en Mí', objetivo:'Compartir sueños y propósitos dados por Dios' },
    62: { titulo:'Una Lección de la Biblia', objetivo:'Compartir aprendizajes bíblicos recientes' },
    63: { titulo:'Algo que Quiero Agradecer Hoy', objetivo:'Practicar gratitud en el momento presente' },
    64: { titulo:'Una Palabra de Fe', objetivo:'Fortalecer la fe a través de declaraciones' },
    65: { titulo:'Mi Esperanza en Dios', objetivo:'Reflexionar y compartir esperanza en Dios' },
    66: { titulo:'Un Versículo que Me Guía', objetivo:'Compartir versículos que orientan la vida' },
    67: { titulo:'Algo que Aprendí de Otra Persona', objetivo:'Valorar las relaciones como fuente de aprendizaje' },
    68: { titulo:'Mi Fuente de Coraje', objetivo:'Reflexionar sobre el coraje espiritual' },
    69: { titulo:'Una Palabra que Define Mi Momento', objetivo:'Reflexionar sobre la estación actual de la vida' },
    70: { titulo:'Algo que Quiero Entregar a Dios', objetivo:'Practicar la entrega y confianza en Dios' },
    71: { titulo:'Una Experiencia con la Oración', objetivo:'Compartir experiencias transformadoras con la oración' },
    72: { titulo:'Algo que Me Acerca a las Personas', objetivo:'Reflexionar sobre lo que fortalece los vínculos comunitarios' },
    73: { titulo:'Una Palabra de Sabiduría', objetivo:'Compartir sabiduría recibida de Dios y de la vida' },
    74: { titulo:'Mi Inspiración Espiritual', objetivo:'Compartir lo que inspira el caminar espiritual' },
    75: { titulo:'Algo que Me Da Esperanza', objetivo:'Compartir fuentes de esperanza y ánimo' },
    76: { titulo:'Una Historia de Fe', objetivo:'Compartir historias de fe que fortalecen al grupo' },
    77: { titulo:'Mi Mayor Aprendizaje Espiritual', objetivo:'Compartir el aprendizaje espiritual más importante' },
    78: { titulo:'Una Palabra de Gratitud', objetivo:'Expresar gratitud a través de palabras significativas' },
    79: { titulo:'Algo que Fortalece Mi Fe', objetivo:'Compartir lo que sostiene la fe en tiempos difíciles' },
    80: { titulo:'Mi Oración para el Futuro', objetivo:'Compartir esperanzas y oraciones para lo que viene' },
    81: { titulo:'Palabra de Gratitud', objetivo:'Practicar gratitud a través de palabras compartidas' },
    82: { titulo:'Versículo de Esperanza', objetivo:'Compartir versículos que traen esperanza y consuelo' },
    83: { titulo:'Algo que Dios Hizo por Mí', objetivo:'Compartir testimonios de la acción de Dios en la vida' },
    84: { titulo:'Mi Fuente de Alegría', objetivo:'Reflexionar sobre lo que trae verdadera y duradera alegría' },
    85: { titulo:'Algo que Quiero Entregar a Dios (2)', objetivo:'Practicar confiar en Dios con áreas específicas' },
    86: { titulo:'Mi Palabra para Hoy (2)', objetivo:'Elegir una palabra que represente el momento actual' },
    87: { titulo:'Mi Motivación en la Fe (2)', objetivo:'Compartir lo que mantiene viva la llama de la fe' },
    88: { titulo:'Algo que Me Da Paz', objetivo:'Compartir fuentes de paz y serenidad en Dios' },
    89: { titulo:'Una Lección que Aprendí', objetivo:'Compartir lecciones valiosas de experiencias de vida' },
    90: { titulo:'Mi Promesa Favorita (2)', objetivo:'Celebrar las promesas fieles de Dios' },
    91: { titulo:'Algo que Me Acerca a Dios (3)', objetivo:'Profundizar la conexión con Dios' },
    92: { titulo:'Mi Camino Espiritual', objetivo:'Compartir el camino espiritual con el grupo' },
    93: { titulo:'Algo que Quiero Agradecer Hoy (2)', objetivo:'Cultivar la gratitud diaria' },
    94: { titulo:'Mi Inspiración Espiritual (2)', objetivo:'Compartir quién y qué inspira la fe' },
    95: { titulo:'Algo que Dios Me Enseñó (2)', objetivo:'Reflexionar sobre enseñanzas divinas recientes' },
    96: { titulo:'Mi Fuente de Coraje (2)', objetivo:'Compartir de dónde viene el coraje en Cristo' },
    97: { titulo:'Algo que Quiero Mejorar (2)', objetivo:'Reflexionar sobre áreas de crecimiento con vulnerabilidad' },
    98: { titulo:'Una Palabra de Esperanza (2)', objetivo:'Fortalecer la esperanza a través de las promesas de Dios' },
    99: { titulo:'Algo que Me Fortalece (2)', objetivo:'Compartir fuentes de fortaleza espiritual y emocional' },
    100: { titulo:'Una Experiencia con Dios (2)', objetivo:'Compartir encuentros transformadores con Dios' },
    101: { titulo:'Algo que Quero Aprender', objetivo:'Reflexionar sobre crescimento y aprendizado contínuo' },
    102: { titulo:'Minha Palavra para o Futuro', objetivo:'Reflexionar sobre esperanza y expectativa futura' },
    103: { titulo:'Algo que Me Acerca a las Personas (2)', objetivo:'Reflexionar sobre o amor ao próximo na prática' },
    104: { titulo:'Mi Oración Hoy', objetivo:'Compartir pedidos de oración y orar juntas' },
    105: { titulo:'Algo que Me Inspira', objetivo:'Compartir fontes de inspiração espiritual' },
    106: { titulo:'Una Palabra de Fe (2)', objetivo:'Fortalecer a fe através de declarações' },
    107: { titulo:'Algo que Me Motiva a Servir', objetivo:'Reflexionar sobre motivação para o serviço cristão' },
    108: { titulo:'Minha História de Fé', objetivo:'Compartir momentos marcantes de fe' },
    109: { titulo:'Algo que Aprendí de un Desafío (2)', objetivo:'Reflexionar sobre crescimento em meio às dificuldades' },
    110: { titulo:'Mi Palabra de Gratitud', objetivo:'Expresar gratitud por la bondad eterna de Deus' },
    111: { titulo:'Algo que Me Traz Esperança', objetivo:'Reflexionar y compartilhar motivos de esperanza' },
    112: { titulo:'Mi Motivación Espiritual (2)', objetivo:'Reflexionar sobre propósito y motivação para Deus' },
    113: { titulo:'Algo que Quiero Entregar a Dios (3)', objetivo:'Practicar entrega de preocupações a Dios' },
    114: { titulo:'Minha Promessa para Hoje', objetivo:'Fortalecer a fe com promessas bíblicas diarias' },
    115: { titulo:'Algo que Me Dá Força', objetivo:'Reflexionar sobre fontes de força espiritual' },
    116: { titulo:'Minha Palavra de Paz', objetivo:'Reflexionar sobre paz em meio às tribulações' },
    117: { titulo:'Algo que Aprendí en la Biblia', objetivo:'Compartir ensinamentos bíblicos recentes' },
    118: { titulo:'Mi Experiencia con la Oración', objetivo:'Compartir experiências que fortalecem a vida de oración' },
    119: { titulo:'Algo que Me Dá Alegria', objetivo:'Compartir y celebrar alegrías do cotidiano' },
    120: { titulo:'Mi Esperanza en Dios (2)', objetivo:'Reflexionar sobre esperanza ancorada en Dios' },
    121: { titulo:'Compartiendo Esperanza (2)', objetivo:'Fortalecer a confianza en Dios' },
    122: { titulo:'Mi Palabra de Gratitud (2)', objetivo:'Estimular gratitud que nos aproxima de Deus' },
    123: { titulo:'Versículo que Me Sostiene (2)', objetivo:'Compartir promessas bíblicas que sustentam' },
    124: { titulo:'Algo que Aprendí de Dios (2)', objetivo:'Reflexionar sobre aprendizado espiritual recebido de Deus' },
    125: { titulo:'Mi Fuente de Paz (2)', objetivo:'Reflexionar sobre paz espiritual profunda' },
    126: { titulo:'Mi Motivación para Servir', objetivo:'Reflexionar sobre o serviço como expressão dos dons' },
    127: { titulo:'Una Palabra de Coraje', objetivo:'Fortalecer a coraje espiritual no grupo' },
    128: { titulo:'Mi Historia con Dios', objetivo:'Compartir experiências espirituais marcantes' },
    129: { titulo:'Algo que Quiero Entregar a Dios (4)', objetivo:'Practicar a entrega y confianza en Dios' },
    130: { titulo:'Mi Esperanza para el Futuro', objetivo:'Reflexionar sobre o futuro com esperanza y fe' },
    131: { titulo:'Algo que Me Inspira (2)', objetivo:'Compartir fontes de inspiração espiritual' },
    132: { titulo:'Mi Oración Hoy (2)', objetivo:'Compartir pedidos y orar juntas' },
    133: { titulo:'Algo que Me Fortalece (3)', objetivo:'Compartir o que renova as forças espirituais' },
    134: { titulo:'Una Palabra de Sabiduría (2)', objetivo:'Compartir sabiduría adquirida na caminhada' },
    135: { titulo:'Mi Promesa Favorita (3)', objetivo:'Compartir promessas bíblicas preciosas' },
    136: { titulo:'Algo que Aprendí de un Desafío (3)', objetivo:'Reflexionar sobre maturidade adquirida em desafios' },
    137: { titulo:'Mi Fuente de Alegría (2)', objetivo:'Compartir fontes de alegría que vêm de Deus' },
    138: { titulo:'Algo que Me Acerca a Dios (4)', objetivo:'Reflexionar sobre práticas que aproximam de Deus' },
    139: { titulo:'Mi Palabra de Esperanza', objetivo:'Compartir esperanza y encorajar umas às outras' },
    140: { titulo:'Algo que Quiero Mejorar (3)', objetivo:'Reflexionar sobre áreas de crescimento espiritual' },
    141: { titulo:'Mi Experiencia con la Oración (2)', objetivo:'Compartir experiências que fortalecem a oración' },
    142: { titulo:'Algo que Me Da Coraje', objetivo:'Reflexionar sobre coraje espiritual' },
    143: { titulo:'Mi Palabra para Hoy (3)', objetivo:'Conectar com direção espiritual através da Palavra' },
    144: { titulo:'Algo que Quiero Agradecer (2)', objetivo:'Practicar gratitud por la bondad eterna de Deus' },
    145: { titulo:'Mi Inspiración Espiritual (3)', objetivo:'Compartir pessoas que inspiram y edificam a fe' },
    146: { titulo:'Algo que Aprendí en la Biblia (2)', objetivo:'Compartir ensinamentos bíblicos transformadores' },
    147: { titulo:'Mi Motivación en la Fe (3)', objetivo:'Reflexionar sobre propósito de viver para o Senhor' },
    148: { titulo:'Algo que Me Da Paz (2)', objetivo:'Reflexionar sobre a paz que excede o entendimento' },
    149: { titulo:'Mi Historia de Superación', objetivo:'Compartir superações y fortalecer a fe' },
    150: { titulo:'Algo que Me Acerca a las Personas (3)', objetivo:'Reflexionar sobre o amor ao próximo como identidade cristã' },
    151: { titulo:'Mi Esperanza en Dios (3)', objetivo:'Reflexionar sobre esperanza genuína en Dios' },
    152: { titulo:'Algo que Aprendí de Otra Persona (2)', objetivo:'Valorizar relacionamentos como fonte de aprendizado' },
    153: { titulo:'Mi Fuente de Sabiduría', objetivo:'Reflexionar sobre como buscar sabiduría divina' },
    154: { titulo:'Algo que Me Motiva a Servir (2)', objetivo:'Reflexionar sobre motivação para o serviço com amor' },
    155: { titulo:'Mi Palabra de Fe', objetivo:'Fortalecer a fe através de declarações bíblicas' },
    156: { titulo:'Algo que Fortalece Mi Fe (2)', objetivo:'Reflexionar sobre o que fortalece a fe no cotidiano' },
    157: { titulo:'Mi Oración para el Futuro (2)', objetivo:'Reflexionar sobre o futuro com fe através da oración' },
    158: { titulo:'Algo que Quiero Entregar Hoy', objetivo:'Practicar entrega diaria de preocupações a Dios' },
    159: { titulo:'Mi Palabra de Gratitud (3)', objetivo:'Expresar gratitud y alegría pelo novo dia' },
    160: { titulo:'Algo que Me Acerca a Dios (5)', objetivo:'Reflexionar sobre práticas espirituais transformadoras' },
    161: { titulo:'Compartiendo Esperanza (3)', objetivo:'Fortalecer esperanza en Dios' },
    162: { titulo:'Mi Palabra de Gratitud (4)', objetivo:'Estimular gratitud que aproxima o coración de Deus' },
    163: { titulo:'Versículo que Me Sostiene (3)', objetivo:'Compartir promessas bíblicas que renovam as forças' },
    164: { titulo:'Algo que Aprendí de Dios (3)', objetivo:'Reflexionar sobre aprendizado espiritual recebido de Deus' },
    165: { titulo:'Mi Fuente de Paz (3)', objetivo:'Reflexionar sobre a paz de Cristo que acalma' },
    166: { titulo:'Mi Motivación para Servir (2)', objetivo:'Reflexionar sobre o serviço como expressão dos dons' },
    167: { titulo:'Una Palabra de Coraje (2)', objetivo:'Fortalecer a coraje espiritual no grupo' },
    168: { titulo:'Mi Historia con Dios (2)', objetivo:'Compartir como entregar os caminhos a Dios traz paz' },
    169: { titulo:'Algo que Quiero Entregar a Dios (5)', objetivo:'Practicar entrega de cargas y preocupações a Dios' },
    170: { titulo:'Mi Esperanza para el Futuro (2)', objetivo:'Reflexionar sobre esperanza futura com fe' },
    171: { titulo:'Algo que Me Inspira (3)', objetivo:'Compartir exemplos de fe que motivam' },
    172: { titulo:'Mi Oración Hoy (3)', objetivo:'Compartir pedidos y orar juntas' },
    173: { titulo:'Algo que Me Fortalece (4)', objetivo:'Reflexionar sobre o que fortalece a fe' },
    174: { titulo:'Una Palabra de Sabiduría (3)', objetivo:'Compartir sabiduría adquirida na caminhada' },
    175: { titulo:'Mi Promesa Favorita (4)', objetivo:'Compartir promessas bíblicas preciosas' },
    176: { titulo:'Algo que Aprendí de un Desafío (4)', objetivo:'Reflexionar sobre perseverança adquirida nas provações' },
    177: { titulo:'Mi Fuente de Alegría (3)', objetivo:'Compartir alegrías que vêm da presença de Deus' },
    178: { titulo:'Algo que Me Acerca a Dios (6)', objetivo:'Reflexionar sobre a Palavra como caminho para Deus' },
    179: { titulo:'Mi Palabra de Esperanza (2)', objetivo:'Compartir esperanza y encorajar umas às outras' },
    180: { titulo:'Algo que Quiero Mejorar (4)', objetivo:'Reflexionar sobre áreas de crescimento espiritual' },
    181: { titulo:'Mi Experiencia con la Oración (3)', objetivo:'Compartir experiências de oración contínua' },
    182: { titulo:'Algo que Me Da Coraje (2)', objetivo:'Reflexionar sobre coraje ancorada en Dios' },
    183: { titulo:'Mi Palabra para Hoy (4)', objetivo:'Guardar a Palavra no coración para direção diaria' },
    184: { titulo:'Algo que Quiero Agradecer (3)', objetivo:'Practicar gratitud celebrando o dia que Deus fez' },
    185: { titulo:'Mi Inspiración Espiritual (4)', objetivo:'Compartir pessoas que encorajam y edificam' },
    186: { titulo:'Algo que Aprendí en la Biblia (3)', objetivo:'Compartir ensinamentos bíblicos que ensinam y orientam' },
    187: { titulo:'Mi Motivación en la Fe (4)', objetivo:'Reflexionar sobre propósito de glorificar a Dios' },
    188: { titulo:'Algo que Me Da Paz (3)', objetivo:'Reflexionar sobre a paz de Deus que guarda o coración' },
    189: { titulo:'Mi Historia de Superación (2)', objetivo:'Compartir como Deus nos fortalece para superar' },
    190: { titulo:'Algo que Me Acerca a las Personas (4)', objetivo:'Reflexionar sobre o amor ao próximo como marca do discípulo' },
    191: { titulo:'Mi Esperanza en Dios (4)', objetivo:'Reflexionar sobre esperanza que confía no Senhor' },
    192: { titulo:'Algo que Aprendí de Otra Persona (3)', objetivo:'Valorizar relacionamentos como ferramenta de crescimento' },
    193: { titulo:'Mi Fuente de Sabiduría (2)', objetivo:'Reflexionar sobre como buscar sabiduría que traz felicidade' },
    194: { titulo:'Algo que Me Motiva a Servir (3)', objetivo:'Reflexionar sobre serviço como expressão de amor' },
    195: { titulo:'Mi Palabra de Fe (2)', objetivo:'Fortalecer a fe através de declarações bíblicas' },
    196: { titulo:'Algo que Fortalece Mi Fe (3)', objetivo:'Reflexionar sobre o que fortalece a fe no Senhor' },
    197: { titulo:'Mi Oración para el Futuro (3)', objetivo:'Reflexionar sobre o futuro com fe através da oración' },
    198: { titulo:'Algo que Quiero Entregar Hoy (2)', objetivo:'Practicar confianza y entrega diaria a Dios' },
    199: { titulo:'Mi Palabra de Gratitud (5)', objetivo:'Expresar gratitud por la bondad eterna de Deus' },
    200: { titulo:'Algo que Me Acerca a Dios (7)', objetivo:'Celebrar a jornada espiritual y renovar o compromisso con Dios' },
  }
};

// t() — declarada no topo do script

// Obtém dinâmica traduzida
function getDinamica(d){
  const tr = DINAMICAS_TRADUCOES[currentLang]?.[d.id];
  if(!tr) return d;
  return { ...d, titulo: tr.titulo||d.titulo, objetivo: tr.objetivo||d.objetivo,
    materiais: tr.materiais||d.materiais, passos: tr.passos||d.passos, aplicacao: tr.aplicacao||d.aplicacao };
}

// Aplica idioma à interface
function aplicarIdioma(){
  // Atualiza botões de idioma (login + app + topbar dropdown)
  ['pt','en','es'].forEach(l => {
    const btn = document.getElementById(`lang-btn-${l}`);
    if(btn) btn.classList.toggle('active', l===currentLang);
    const pill = document.getElementById(`app-lang-${l}`);
    if(pill) pill.classList.toggle('active', l===currentLang);
    const item = document.getElementById(`tlang-${l}`);
    if(item) item.classList.toggle('active', l===currentLang);
  });
  // Atualiza bandeira do botão trigger — topbar
  const triggerFlag = document.getElementById('tlang-current-flag');
  if(triggerFlag){ triggerFlag.src = LANG_FLAG_IMGS[currentLang]; triggerFlag.alt = LANG_CODES[currentLang]; }
  // Atualiza bandeira do botão trigger — login
  const loginFlagImg = document.getElementById('login-flag-img');
  const loginFlagCode = document.getElementById('login-flag-code');
  if(loginFlagImg){ loginFlagImg.src = LANG_FLAG_IMGS[currentLang]; loginFlagImg.alt = LANG_CODES[currentLang]; }
  if(loginFlagCode) loginFlagCode.textContent = LANG_CODES[currentLang];

  // Aplica todos os data-i18n (incluindo options)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(!val) return;
    // Banner title has \n that should become <br>
    if(key === 'home.banner.title' || key === 'floresca.hero.titulo'){
      el.innerHTML = val.replace(/\n/g,'<br>');
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  // Topbar welcome (logged in state)
  if(usuarioAtual){
    const welcomeEl = document.getElementById('topbar-welcome');
    if(welcomeEl) welcomeEl.textContent = t('home.welcome.back');
  }
  // Atualiza search placeholders dinamicamente
  const searches = {
    'din-search-input': 'din.busca',
    'perg-search': 'perg.busca',
    'main-search': 'home.search',
  };
  Object.entries(searches).forEach(([id,key])=>{
    const el = document.getElementById(id);
    if(el) el.placeholder = t(key);
  });

  // Navbar labels
  const navMap = { 'nav-home':'nav.inicio','nav-dinamicas':'nav.dinamicas','nav-gerar':'nav.gerar','nav-historico':'nav.historico','nav-admin':'nav.admin' };
  Object.entries(navMap).forEach(([id,key])=>{
    const el = document.getElementById(id);
    if(el) el.querySelector('.nav-label').textContent = t(key);
  });

  // Re-renderiza listas traduzíveis
  renderDinamicas(dinamicas);
  if(document.getElementById('screen-historico').classList.contains('active')) renderHistorico();
  // Re-renderiza telas dinâmicas
  renderPlanejadorCampos();
  renderPainelEncontro();
  renderCardsGerarDinamica();
  renderHistoricoConjuntos();
  if(document.getElementById('screen-encontros').classList.contains('active')) renderEncontros(encontros50);
  if(document.getElementById('screen-perguntas').classList.contains('active')) renderPerguntas(perguntas100);
  if(document.getElementById('screen-quebraGelos').classList.contains('active')) renderQuebraGelos(quebraGelos50);
  if(document.getElementById('screen-estudos').classList.contains('active')) renderEstudos(estudos30);
  if(document.getElementById('screen-devocional').classList.contains('active')) renderDevocional();
  if(document.getElementById('screen-novidades').classList.contains('active')) renderNovidadesList();
  // Atualiza filtros de categoria/tempo com textos traduzidos
  atualizarFiltrosTraduzidos();
  // Re-renderiza módulos (usam labels traduzidos)
  if(usuarioAtual){
    renderPerfilModulos();
    atualizarBloqueios();
    if(document.getElementById('screen-admin')?.classList.contains('active')) renderAdminPanel();
  }
}

function atualizarFiltrosTraduzidos(){
  // Filtro de tempo dinâmicas
  const tempoSel = document.getElementById('din-filter-tempo');
  if(tempoSel){
    const val = tempoSel.value;
    tempoSel.innerHTML = `
      <option value="">${t('filtro.tempo')}</option>
      <option value="10">${t('filtro.tempo.10')}</option>
      <option value="15">${t('filtro.tempo.15')}</option>
      <option value="20">${t('filtro.tempo.20')}</option>
      <option value="25">${t('filtro.tempo.25')}</option>
      <option value="30">${t('filtro.tempo.30')}</option>`;
    tempoSel.value = val;
  }
  // Filtro categoria dinâmicas
  const catSel = document.getElementById('din-filter-cat');
  if(catSel){
    const val = catSel.value;
    popularFiltroCategoria();
    catSel.value = val;
  }
  // Filtro categoria perguntas
  const pergCatSel = document.getElementById('perg-filter-cat');
  if(pergCatSel){
    const val = pergCatSel.value;
    const cats = [
      ['vida_espiritual','Vida Espiritual','Spiritual Life','Vida Espiritual'],
      ['vida_pessoal','Vida Pessoal','Personal Life','Vida Personal'],
      ['relacionamentos','Relacionamentos','Relationships','Relaciones'],
      ['gratidao_esperanca','Gratidão e Esperança','Gratitude & Hope','Gratitud y Esperanza'],
      ['proposito_chamado','Propósito e Chamado','Purpose & Calling','Propósito y Llamado'],
      ['fe_no_cotidiano','Fé no Cotidiano','Daily Faith','Fe en lo Cotidiano'],
      ['crescimento_espiritual','Crescimento Espiritual','Spiritual Growth','Crecimiento Espiritual'],
      ['reflexao_final','Reflexão Final','Final Reflection','Reflexión Final'],
      ['extras','Extras','Extras','Extras'],
    ];
    const idx = {pt:1,en:2,es:3};
    const li = idx[currentLang]||1;
    pergCatSel.innerHTML = `<option value="">${t('filtro.categoria')}</option>` +
      cats.map(c=>`<option value="${c[0]}">${c[li]}</option>`).join('');
    pergCatSel.value = val;
  }
  // Botões limpar
  const clearDin = document.getElementById('din-filter-clear');
  if(clearDin && clearDin.style.display!=='none') clearDin.textContent = t('filtro.limpar');
  const clearPerg = document.getElementById('perg-clear');
  if(clearPerg && clearPerg.style.display!=='none') clearPerg.textContent = t('filtro.limpar');
}

function setLang(lang){
  currentLang = lang;
  try{ localStorage.setItem(STORAGE_KEY_LANG, lang); }catch(e){}
  aplicarIdioma();
  toastMsg(lang==='pt'? '🇧🇷 Português' : lang==='en'? '🇺🇸 English' : '🇪🇸 Español');
}

// Carrega idioma salvo ou detecta pelo navegador
(function(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    if(saved){ currentLang=saved; return; }
  }catch(e){}
  const nav = (navigator.language||'pt').toLowerCase();
  if(nav.startsWith('en')) currentLang='en';
  else if(nav.startsWith('es')) currentLang='es';
  else currentLang='pt';
})();

// ── 50 ENCONTROS COMPLETOS ──
const encontros50 = [
  {id:1,titulo:'Confiança em Deus',categoria:'Fé e Confiança',versiculo:'Salmos 37:5',versiculoTexto:'Entregue o seu caminho ao Senhor, confie nele, e ele agirá.',quebraGelo:'Compartilhe um momento em que confiou em Deus e viu Ele agir.',reflexao:'A confiança não é ausência de medo, mas certeza de que Deus está no controle. Quando entregamos nossas preocupações a Ele, encontramos paz genuína.',perguntas:['Qual é a diferença entre confiar em Deus e confiar em nossas próprias forças?','Como podemos fortalecer nossa confiança quando as circunstâncias parecem impossíveis?','Que promessas de Deus nos ajudam a confiar mais profundamente?'],oracao:'Senhor, ajuda-nos a entregar completamente nossas vidas e preocupações a Ti. Fortalece nossa confiança em Teu caráter fiel e em Tuas promessas. Amém.'},
  {id:2,titulo:'Paz Interior',categoria:'Fé e Confiança',versiculo:'Filipenses 4:6-7',versiculoTexto:'Não se preocupem com nada; em todas as circunstâncias, apresentem seus pedidos a Deus por meio de oração e súplica, com ação de graças. E a paz de Deus, que excede todo entendimento, guardará o coração e a mente de vocês em Cristo Jesus.',quebraGelo:'Compartilhe um lugar ou momento em que você sente paz profunda. Por quê?',reflexao:'A paz interior não vem de circunstâncias perfeitas, mas da presença de Deus em nosso coração. É um presente que transcende a lógica humana.',perguntas:['Como distinguir entre paz verdadeira e simples ausência de problemas?','Quais práticas espirituais nos ajudam a cultivar paz interior?','Como podemos manter a paz quando enfrentamos tempestades da vida?'],oracao:'Pai celestial, derrama Tua paz sobre nós. Que ela guarde nossos corações e mentes em Cristo, mesmo quando o mundo ao redor está em caos. Amém.'},
  {id:3,titulo:'Vida de Oração',categoria:'Fé e Confiança',versiculo:'1 Tessalonicenses 5:17',versiculoTexto:'Orem sem cessar.',quebraGelo:'Qual é sua forma favorita de orar? (silenciosamente, em voz alta, caminhando, etc.)',reflexao:'A oração é conversa íntima com Deus. Não é sobre palavras perfeitas, mas sobre coração aberto. Cada oração, por mais simples, é ouvida pelo Pai.',perguntas:['Como podemos desenvolver uma vida de oração consistente em meio à rotina?','Qual é a diferença entre oração de petição e oração de adoração?','Como sabemos que Deus ouve nossas orações?'],oracao:'Senhor, ensina-nos a orar. Abre nossos corações para conversa constante contigo. Que nossas orações reflitam fé, gratidão e confiança em Teu amor. Amém.'},
  {id:4,titulo:'Esperança Renovada',categoria:'Fé e Esperança',versiculo:'Romanos 15:13',versiculoTexto:'Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que transbordem de esperança pelo poder do Espírito Santo.',quebraGelo:'Compartilhe um momento em que sua esperança foi renovada quando tudo parecia perdido.',reflexao:'A esperança cristã não é otimismo ingênuo, mas confiança fundamentada nas promessas de Deus. Ela nos sustenta quando tudo ao redor desaba.',perguntas:['Como diferenciamos esperança em Deus de esperança em circunstâncias?','Quais promessas bíblicas renovam sua esperança?','Como podemos ajudar outras mulheres a recuperar a esperança?'],oracao:'Senhor, renova nossa esperança. Quando nos sentimos desesperadas, lembra-nos de Tuas promessas. Que nossa esperança em Ti seja contagiante e inspire outras mulheres. Amém.'},
  {id:5,titulo:'Fé que Persevera',categoria:'Fé e Esperança',versiculo:'Hebreus 12:1-2',versiculoTexto:'Portanto, livrem-se de tudo o que os atrapalha e do pecado que os enreda, e corram com perseverança a corrida que nos é proposta. Fixemos os olhos em Jesus, o iniciador e consumador da nossa fé.',quebraGelo:'Qual é um desafio que você está enfrentando agora? Como sua fé a ajuda a perseverar?',reflexao:'A fé não é um sentimento passageiro, mas uma decisão diária de confiar em Deus. Perseverança significa continuar quando é difícil.',perguntas:['O que significa "correr a corrida com perseverança"?','Como mantemos o foco em Jesus quando as dificuldades nos cercam?','Qual é o papel da comunidade na nossa perseverança?'],oracao:'Pai, fortalece nossa fé para perseverar. Quando cansarmos, renova nossas forças. Que nunca percamos de vista Jesus, nosso exemplo supremo de fé. Amém.'},
  {id:6,titulo:'Vencendo o Medo',categoria:'Fé e Esperança',versiculo:'2 Timóteo 1:7',versiculoTexto:'Pois Deus não nos deu espírito de medo, mas de poder, de amor e de bom senso.',quebraGelo:'Qual é um medo que você superou com a ajuda de Deus?',reflexao:'O medo é natural, mas não deve nos dominar. Deus nos oferece poder, amor e discernimento para vencer qualquer medo.',perguntas:['Qual é a diferença entre medo saudável e medo que nos paralisa?','Como o amor de Deus nos liberta do medo?','Que práticas nos ajudam a confiar quando temos medo?'],oracao:'Senhor, liberta-nos do medo. Enche-nos com Teu poder, Teu amor e Teu discernimento. Que confiemos em Ti mesmo quando temos medo. Amém.'},
  {id:7,titulo:'Humildade de Coração',categoria:'Virtudes Cristãs',versiculo:'1 Pedro 5:5-6',versiculoTexto:'Todos vocês, revistam-se de humildade para com os outros, porque "Deus se opõe aos soberbos, mas concede graça aos humildes." Humilhem-se, portanto, sob a poderosa mão de Deus, para que ele os exalte no tempo devido.',quebraGelo:'Compartilhe um momento em que a humildade a ajudou em um relacionamento.',reflexao:'Humildade não é baixa autoestima, mas reconhecimento de que dependemos de Deus. É força sob controle, não fraqueza.',perguntas:['Como diferenciamos humildade verdadeira de falsa modéstia?','De que formas o orgulho nos prejudica espiritualmente?','Como cultivamos humildade em uma cultura que valoriza autopromoção?'],oracao:'Senhor, cultiva em nós corações humildes. Ajuda-nos a reconhecer nossa dependência de Ti e a valorizar os outros. Que nossa humildade reflita Teu caráter. Amém.'},
  {id:8,titulo:'Generosidade',categoria:'Virtudes Cristãs',versiculo:'2 Coríntios 9:7',versiculoTexto:'Cada um deve dar conforme determinou em seu coração, não com tristeza ou sob pressão, pois Deus ama quem dá com alegria.',quebraGelo:'Compartilhe uma experiência de dar generosamente e como se sentiu.',reflexao:'Generosidade é expressão de fé. Quando damos livremente, reconhecemos que tudo vem de Deus e que Ele supre nossas necessidades.',perguntas:['Como podemos ser generosas mesmo quando temos pouco?','Qual é a diferença entre dar por obrigação e dar com alegria?','Como a generosidade nos transforma espiritualmente?'],oracao:'Pai, abre nossos corações para a generosidade. Que demos com alegria, sabendo que Tua provisão é suficiente. Que nossa generosidade reflita Teu amor infinito. Amém.'},
  {id:9,titulo:'Perseverança',categoria:'Virtudes Cristãs',versiculo:'Tiago 1:2-4',versiculoTexto:'Considerem motivo de grande alegria o fato de passarem por várias provações, pois vocês sabem que a prova de sua fé produz perseverança. E a perseverança deve levar seu trabalho até ao fim, para que vocês sejam maduros e íntegros, não lhes faltando nada.',quebraGelo:'Qual é um objetivo que você perseguiu por muito tempo antes de alcançar?',reflexao:'Perseverança não é apenas resistência, mas crescimento através das dificuldades. Cada desafio nos molda e nos aproxima da maturidade espiritual.',perguntas:['Como vemos as provações como oportunidades de crescimento?','Qual é a diferença entre perseverança e teimosia?','Como nos encorajamos mutuamente na perseverança?'],oracao:'Senhor, fortalece nossa perseverança. Que vejamos as dificuldades como oportunidades de crescimento. Que nunca desistamos de seguir a Ti. Amém.'},
  {id:10,titulo:'Santidade',categoria:'Virtudes Cristãs',versiculo:'1 Pedro 1:15-16',versiculoTexto:'Mas assim como é santo aquele que os chamou, sejam santos vocês também em tudo o que fizerem; pois está escrito: "Sejam santos, porque eu sou santo."',quebraGelo:'O que significa santidade para você? Como você a vive no dia a dia?',reflexao:'Santidade significa estar separada para Deus, vivendo com integridade e pureza. Não é perfeição, mas busca constante de agradar a Deus.',perguntas:['Como entendemos santidade em um mundo que valoriza o oposto?','Quais áreas de nossas vidas precisam ser consagradas a Deus?','Como a santidade nos liberta em vez de nos prender?'],oracao:'Senhor, consagra-nos para Ti. Que vivamos com integridade e pureza, refletindo Teu caráter santo. Que nossa santidade seja atrativa e inspiradora. Amém.'},
  {id:11,titulo:'Bondade',categoria:'Virtudes Cristãs',versiculo:'Efésios 4:32',versiculoTexto:'Sejam bondosos e compassivos uns com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.',quebraGelo:'Compartilhe um ato de bondade que recebeu e como isso a impactou.',reflexao:'Bondade é compaixão em ação. Quando somos bondosas, refletimos o coração de Jesus que se compadecia dos sofredores.',perguntas:['Como a bondade nos diferencia em um mundo muitas vezes duro?','Qual é a relação entre bondade e perdão?','Como podemos ser bondosas mesmo com quem nos machucou?'],oracao:'Pai, enche nossos corações de bondade genuína. Que vejamos as necessidades alheias e respondamos com compaixão. Que nossa bondade reflita Teu amor. Amém.'},
  {id:12,titulo:'Paciência',categoria:'Virtudes Cristãs',versiculo:'Colossenses 3:12',versiculoTexto:'Portanto, como escolhidos de Deus, santos e amados, revistam-se de compaixão, bondade, humildade, mansidão e paciência.',quebraGelo:'Em qual situação você mais precisa exercer paciência?',reflexao:'Paciência não é passividade, mas força controlada. É esperar no tempo de Deus sem ansiedade, confiando em Sua sabedoria.',perguntas:['Como diferenciamos paciência de resignação?','O que nos ajuda a ser pacientes quando queremos resultados imediatos?','Como a paciência nos aproxima de Deus?'],oracao:'Senhor, cultiva paciência em nossos corações. Ajuda-nos a esperar em Teu tempo, confiando em Tua sabedoria. Que nossa paciência inspire outras mulheres. Amém.'},
  {id:13,titulo:'Identidade em Cristo',categoria:'Identidade e Propósito',versiculo:'2 Coríntios 5:17',versiculoTexto:'Portanto, se alguém está em Cristo, é nova criatura. As coisas antigas já passaram; eis que surgiram coisas novas!',quebraGelo:'Como sua vida mudou desde que você aceitou Jesus?',reflexao:'Nossa identidade não é definida por nosso passado, aparência ou realizações, mas por quem somos em Cristo. Somos filhas amadas de Deus.',perguntas:['Como deixamos para trás a identidade antiga e abraçamos a nova em Cristo?','Quais são as características de nossa identidade em Cristo?','Como essa identidade nos liberta de comparações e inseguranças?'],oracao:'Senhor, ajuda-nos a entender profundamente quem somos em Cristo. Que nossa identidade seja enraizada em Teu amor, não em circunstâncias externas. Amém.'},
  {id:14,titulo:'Chamado de Deus',categoria:'Identidade e Propósito',versiculo:'1 Coríntios 12:4-6',versiculoTexto:'Há diferentes tipos de dons, mas um só Espírito. Há diferentes tipos de ministérios, mas um só Senhor. Há diferentes tipos de atividades, mas é o mesmo Deus que realiza todas elas em todos.',quebraGelo:'Qual você acredita ser seu chamado ou propósito principal?',reflexao:'Cada mulher tem um chamado único de Deus. Não é sobre ser como outras, mas descobrir e cumprir o propósito específico que Deus tem para você.',perguntas:['Como descobrimos nosso chamado?','Como nossos dons e talentos se relacionam com nosso chamado?','Como podemos encorajar umas às outras em nossos chamados?'],oracao:'Pai, revela nosso chamado. Que usemos nossos dons para Tua glória. Que cada uma de nós cumpra o propósito específico que Tu planejaste. Amém.'},
  {id:15,titulo:'Propósito de Vida',categoria:'Identidade e Propósito',versiculo:'Jeremias 29:11',versiculoTexto:'Pois eu bem sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de lhes dar esperança e um futuro.',quebraGelo:'Qual é um objetivo que você gostaria de alcançar nos próximos anos?',reflexao:'Deus tem um propósito para nossas vidas que vai além de nossas expectativas. Quando alinhamos nossa vida com Seu propósito, encontramos verdadeira satisfação.',perguntas:['Como diferenciamos nossos desejos do propósito de Deus?','Como o propósito de Deus nos traz esperança?','Como podemos ajudar outras mulheres a descobrir seu propósito?'],oracao:'Senhor, alinha nossos desejos com Teu propósito. Que vivamos com propósito claro e significado profundo. Que nossa vida seja testemunho de Teu plano perfeito. Amém.'},
  {id:16,titulo:'Vida Abundante',categoria:'Vida e Relacionamentos',versiculo:'João 10:10',versiculoTexto:'O ladrão vem apenas para roubar, matar e destruir; eu vim para que tenham vida, e a tenham plenamente.',quebraGelo:'O que significa "vida abundante" para você?',reflexao:'Vida abundante não é riqueza material, mas plenitude espiritual. É viver com propósito, alegria, paz e relacionamentos significativos em Cristo.',perguntas:['Como diferenciamos vida abundante de sucesso mundano?','Quais são os elementos de uma vida verdadeiramente abundante?','Como podemos experimentar abundância mesmo em circunstâncias difíceis?'],oracao:'Senhor, enche nossas vidas de abundância em Ti. Que experimentemos plenitude espiritual, alegria profunda e paz duradoura. Que nossa vida seja testemunho de Tua generosidade. Amém.'},
  {id:17,titulo:'Amizades Saudáveis',categoria:'Vida e Relacionamentos',versiculo:'Provérbios 17:17',versiculoTexto:'O amigo ama em todo tempo, e o irmão nasce para a hora da angústia.',quebraGelo:'Compartilhe sobre uma amizade que a transformou.',reflexao:'Amizades saudáveis são dádivas de Deus. Elas nos sustentam, nos desafiam a crescer e refletem o amor de Cristo.',perguntas:['Quais são as características de uma amizade saudável?','Como cultivamos amizades que nos aproximam de Deus?','Como podemos ser amigas melhores umas para as outras?'],oracao:'Pai, abençoa nossas amizades. Que sejam baseadas em amor genuíno, honestidade e fé compartilhada. Que nos encorajemos mutuamente no caminho com Cristo. Amém.'},
  {id:18,titulo:'Família',categoria:'Vida e Relacionamentos',versiculo:'Efésios 5:25',versiculoTexto:'Maridos, amem suas esposas, assim como Cristo amou a igreja e se entregou por ela.',quebraGelo:'Qual é um valor familiar que você gostaria de passar para a próxima geração?',reflexao:'A família é o primeiro lugar onde aprendemos sobre amor, perdão e compromisso. Quando construímos famílias baseadas em Cristo, impactamos gerações.',perguntas:['Como construímos relacionamentos familiares sólidos?','Como lidamos com conflitos familiares de forma cristã?','Como a fé fortalece os laços familiares?'],oracao:'Senhor, abençoa nossas famílias. Que sejam lugares de amor, segurança e fé. Que cada membro cresça em conhecimento de Ti. Que nossa família seja reflexo do Teu amor. Amém.'},
  {id:19,titulo:'Amor ao Próximo',categoria:'Amor e Comunidade',versiculo:'Mateus 22:37-39',versiculoTexto:'Ame o Senhor, seu Deus, de todo o seu coração, de toda a sua alma e de toda a sua mente. Este é o primeiro e o maior mandamento. E o segundo é semelhante a ele: Ame o seu próximo como a si mesmo.',quebraGelo:'Quem é seu "próximo"? Como você demonstra amor a ele?',reflexao:'Amar o próximo é expressão prática de nosso amor por Deus. Não é sentimento, mas ação deliberada de servir e cuidar.',perguntas:['Como amamos aqueles que são diferentes de nós?','Como o amor ao próximo nos transforma?','Como podemos amar mesmo quando não recebemos amor em troca?'],oracao:'Senhor, abre nossos corações para amar o próximo genuinamente. Que vejamos Jesus em cada pessoa que encontramos. Que nosso amor seja ação, não apenas palavras. Amém.'},
  {id:20,titulo:'Amor que Transforma',categoria:'Amor e Comunidade',versiculo:'1 João 4:7-8',versiculoTexto:'Amados, amemos uns aos outros, pois o amor vem de Deus. Todo aquele que ama nasceu de Deus e conhece a Deus. Quem não ama não conhece a Deus, porque Deus é amor.',quebraGelo:'Como o amor de Deus a transformou?',reflexao:'O amor de Deus é transformador. Quando experimentamos Seu amor profundamente, somos capacitadas a amar outros de forma sacrificial.',perguntas:['Como o amor de Deus nos liberta de medo e insegurança?','Como podemos refletir o amor de Deus para outras mulheres?','Qual é o poder transformador do amor genuíno?'],oracao:'Pai, que experimentemos profundamente Teu amor. Que esse amor nos transforme e nos capacite a amar outros sacrificialmente. Que nosso amor seja testemunho de Teu caráter. Amém.'},
  {id:21,titulo:'Comunhão Autêntica',categoria:'Amor e Comunidade',versiculo:'1 João 1:7',versiculoTexto:'Mas se andamos na luz, como ele está na luz, temos comunhão uns com os outros, e o sangue de Jesus, seu Filho, nos purifica de todo pecado.',quebraGelo:'Quando você se sente verdadeiramente conectada com outras mulheres?',reflexao:'Comunhão autêntica vai além de socialização. É compartilhar vida, vulnerabilidade e fé em comunidade que caminha juntos em Cristo.',perguntas:['O que diferencia comunhão verdadeira de simples amizade?','Como criamos espaços seguros para vulnerabilidade?','Como a comunhão nos fortalece espiritualmente?'],oracao:'Senhor, cria em nós comunhão autêntica. Que sejamos vulneráveis, honestas e apoiadoras umas das outras. Que nossa comunidade seja reflexo do corpo de Cristo. Amém.'},
  {id:22,titulo:'Renovação Espiritual',categoria:'Crescimento Espiritual',versiculo:'Romanos 12:2',versiculoTexto:'Não se conformem com o padrão deste mundo, mas transformem-se pela renovação da sua mente, para que comprovem qual é a vontade de Deus: o que é bom, agradável e perfeito.',quebraGelo:'Qual é uma área de sua vida que você gostaria que Deus renovasse?',reflexao:'Renovação espiritual é processo contínuo. O Espírito Santo trabalha em nós diariamente, transformando nossa mente, coração e comportamento.',perguntas:['Como permitimos que Deus nos renove?','Quais hábitos precisamos abandonar para crescer espiritualmente?','Como a renovação espiritual afeta nossas decisões diárias?'],oracao:'Senhor, renova nossa mente e coração. Transforma-nos à imagem de Cristo. Que cada dia sejamos mais parecidas com Jesus. Amém.'},
  {id:23,titulo:'Crescimento Espiritual',categoria:'Crescimento Espiritual',versiculo:'2 Pedro 3:18',versiculoTexto:'Antes, cresçam na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo. A ele seja a glória, agora e para sempre! Amém.',quebraGelo:'Como você tem crescido espiritualmente nos últimos anos?',reflexao:'Crescimento espiritual não é instantâneo. É jornada de aprendizado, prática e transformação contínua através da graça de Deus.',perguntas:['Quais são os sinais de crescimento espiritual?','Como o estudo bíblico e a oração contribuem para nosso crescimento?','Como podemos ajudar outras mulheres em seu crescimento espiritual?'],oracao:'Pai, que cresçamos em graça e conhecimento de Jesus. Que nossa fé se aprofunde cada dia. Que sejamos discípulas que fazem discípulas. Amém.'},
  {id:24,titulo:'Disciplina Espiritual',categoria:'Crescimento Espiritual',versiculo:'1 Timóteo 4:7-8',versiculoTexto:'Rejeite as fábulas profanas e os contos de velhas. Antes, discipline-se para a piedade; pois o exercício físico tem algum valor, mas a piedade tem valor para tudo, trazendo promessas para a vida presente e para a vida futura.',quebraGelo:'Qual é uma disciplina espiritual que você pratica regularmente?',reflexao:'Disciplina espiritual não é legalismo, mas práticas intencionais que nos aproximam de Deus e fortalecem nossa fé.',perguntas:['Quais são as disciplinas espirituais essenciais?','Como mantemos consistência em nossas práticas espirituais?','Como a disciplina nos liberta em vez de nos prender?'],oracao:'Senhor, ajuda-nos a ser disciplinadas em nossa vida espiritual. Que nossas práticas nos aproximem de Ti. Que a disciplina nos fortaleça e nos liberte. Amém.'},
  {id:25,titulo:'Caminho da Sabedoria',categoria:'Sabedoria e Discernimento',versiculo:'Tiago 1:5',versiculoTexto:'Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá generosamente sem achar ruim, e lhe será concedida.',quebraGelo:'Qual é uma decisão sábia que você tomou e como isso a abençoou?',reflexao:'Sabedoria é mais que conhecimento. É aplicação prática de verdades divinas em nossas vidas. Deus oferece sabedoria generosamente aos que a pedem.',perguntas:['Como diferenciamos sabedoria de inteligência?','Como buscamos sabedoria de Deus em nossas decisões?','Como a sabedoria nos protege de erros?'],oracao:'Senhor, concede-nos sabedoria. Que tomemos decisões que agradem a Ti. Que nossa sabedoria inspire outras mulheres. Amém.'},
  {id:26,titulo:'Discernimento Espiritual',categoria:'Sabedoria e Discernimento',versiculo:'Hebreus 5:14',versiculoTexto:'Mas o alimento sólido é para os adultos, para aqueles que pelo uso têm as faculdades exercitadas para discernir tanto o bem como o mal.',quebraGelo:'Como você discerne a vontade de Deus em situações confusas?',reflexao:'Discernimento é capacidade de distinguir entre bem e mal, verdade e mentira. Desenvolve-se através da prática e intimidade com Deus.',perguntas:['Como desenvolvemos discernimento espiritual?','Como o Espírito Santo nos guia no discernimento?','Como podemos ajudar outras mulheres a desenvolver discernimento?'],oracao:'Pai, aguça nosso discernimento espiritual. Que vejamos claramente a verdade. Que o Espírito Santo nos guie em cada decisão. Amém.'},
  {id:27,titulo:'Tomando Decisões Sábias',categoria:'Sabedoria e Discernimento',versiculo:'Provérbios 3:5-6',versiculoTexto:'Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.',quebraGelo:'Qual é uma decisão importante que você está enfrentando agora?',reflexao:'Decisões sábias vêm de confiar em Deus mais que em nós mesmas. Quando buscamos Sua orientação, Ele nos guia para o melhor caminho.',perguntas:['Como buscamos a vontade de Deus antes de tomar decisões?','Qual é o papel da oração, conselho e circunstâncias em nossas decisões?','Como confiamos em Deus mesmo quando não entendemos Seu plano?'],oracao:'Senhor, guia nossas decisões. Que confiemos em Ti mais que em nós mesmas. Que cada escolha nos aproxime de Teu propósito. Amém.'},
  {id:28,titulo:'Gratidão',categoria:'Gratidão e Alegria',versiculo:'Colossenses 3:15-17',versiculoTexto:'Que a paz de Cristo controle seus corações, visto que vocês foram chamados em um só corpo para essa paz. E sejam gratos.',quebraGelo:'Pelo que você é mais grata a Deus?',reflexao:'Gratidão é reconhecimento das bênçãos de Deus. Quando somos gratas, nossa perspectiva muda e vemos a generosidade divina em cada detalhe.',perguntas:['Como a gratidão transforma nossa perspectiva?','Como podemos ser gratas mesmo em circunstâncias difíceis?','Como a gratidão nos aproxima de Deus?'],oracao:'Senhor, abre nossos olhos para Tuas bênçãos. Que sejamos mulheres gratas em todas as circunstâncias. Que nossa gratidão inspire outras. Amém.'},
  {id:29,titulo:'Gratidão Diária',categoria:'Gratidão e Alegria',versiculo:'1 Tessalonicenses 5:16-18',versiculoTexto:'Alegrem-se sempre, orem sem cessar, deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.',quebraGelo:'Qual é uma prática diária que a ajuda a ser grata?',reflexao:'Gratidão diária é prática intencional. Quando cultivamos o hábito de reconhecer bênçãos todos os dias, nossa fé se fortalece.',perguntas:['Como podemos cultivar gratidão como prática diária?','Qual é a diferença entre gratidão ocasional e gratidão contínua?','Como a gratidão diária afeta nossa saúde emocional e espiritual?'],oracao:'Pai, ajuda-nos a ser gratas diariamente. Que reconheçamos Tuas bênçãos em cada momento. Que nossa gratidão seja constante e genuína. Amém.'},
  {id:30,titulo:'Alegria',categoria:'Gratidão e Alegria',versiculo:'Neemias 8:10',versiculoTexto:'Não fiquem tristes, pois a alegria do Senhor é a sua força.',quebraGelo:'Quando você se sente mais alegre? O que causa essa alegria?',reflexao:'Alegria verdadeira não depende de circunstâncias, mas da presença de Deus. É força que nos sustenta mesmo nas dificuldades.',perguntas:['Como diferenciamos alegria de felicidade?','Como encontramos alegria em tempos difíceis?','Como a alegria nos fortalece para servir a Deus?'],oracao:'Senhor, enche nossos corações de alegria. Que experimentemos a força que vem de Ti. Que nossa alegria seja contagiante e inspiradora. Amém.'},
  {id:31,titulo:'Perdão',categoria:'Perdão e Cura',versiculo:'Efésios 4:31-32',versiculoTexto:'Afastem-se de vocês toda amargura, ira e cólera, gritaria e calúnia, e toda forma de malícia. Sejam bondosos e compassivos uns com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.',quebraGelo:'Como o perdão a libertou de algo?',reflexao:'Perdão não é fraqueza, mas força. Quando perdoamos, nos libertamos da amargura e nos alinhamos com o coração de Deus.',perguntas:['Como diferenciamos perdão verdadeiro de fingimento?','Como perdoamos aqueles que nos machucaram profundamente?','Como o perdão nos transforma?'],oracao:'Senhor, ajuda-nos a perdoar como Tu nos perdoaste. Que o perdão nos liberte da amargura. Que nossa capacidade de perdoar reflita Teu amor. Amém.'},
  {id:32,titulo:'Cura Emocional',categoria:'Perdão e Cura',versiculo:'Salmos 147:3',versiculoTexto:'Ele cura os de coração quebrantado e liga as suas feridas.',quebraGelo:'Como Deus a curou de uma ferida emocional?',reflexao:'Deus é especialista em cura. Ele não apenas cura feridas físicas, mas também emocional e espiritualmente nos restaura.',perguntas:['Como permitimos que Deus cure nossas feridas emocionais?','Qual é o papel da comunidade na cura?','Como compartilhamos nossa cura com outras mulheres?'],oracao:'Pai, cura nossas feridas emocionais. Que experimentemos Tua restauração profunda. Que nossa cura seja testemunho de Teu poder. Amém.'},
  {id:33,titulo:'Libertação do Passado',categoria:'Perdão e Cura',versiculo:'Filipenses 3:13-14',versiculoTexto:'Irmãos, não penso que eu mesmo já o tenha alcançado; mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante, prossigo para o alvo, para o prêmio do chamado celestial de Deus em Cristo Jesus.',quebraGelo:'Como você deixou para trás algo do seu passado?',reflexao:'Não podemos mudar o passado, mas podemos deixá-lo para trás. Deus nos oferece novo começo e vida abundante quando nos libertamos do que nos prende.',perguntas:['O que nos prende ao passado?','Como deixamos para trás culpa, vergonha e remorso?','Como nos movemos para frente com esperança?'],oracao:'Senhor, liberta-nos do passado. Que deixemos para trás culpa e vergonha. Que avancemos com esperança em Teu futuro para nós. Amém.'},
  {id:34,titulo:'Serviço Amoroso',categoria:'Serviço e Missão',versiculo:'Gálatas 5:13',versiculoTexto:'Vocês, meus irmãos, foram chamados para a liberdade. Mas não usem a liberdade para satisfazer os desejos da carne; antes, sirvam uns aos outros com amor.',quebraGelo:'Qual é uma forma de serviço que a traz alegria?',reflexao:'Serviço verdadeiro vem do amor, não da obrigação. Quando servimos com amor, refletimos o coração de Jesus que veio para servir.',perguntas:['Como diferenciamos serviço genuíno de serviço por obrigação?','Como o serviço nos transforma?','Como podemos servir mesmo quando estamos cansadas?'],oracao:'Senhor, enche nossos corações de amor para servir. Que nosso serviço seja expressão de Teu amor. Que sirvamos com alegria e humildade. Amém.'},
  {id:35,titulo:'Missão e Propósito',categoria:'Serviço e Missão',versiculo:'Mateus 28:19-20',versiculoTexto:'Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos.',quebraGelo:'Como você está envolvida na missão de Deus?',reflexao:'Cada cristã tem uma missão: compartilhar o evangelho e fazer discípulos. Não é apenas para pastores, mas para todas nós.',perguntas:['Como podemos ser missionárias em nosso dia a dia?','Como compartilhamos nossa fé de forma natural?','Como fazemos discípulas de outras mulheres?'],oracao:'Pai, usa-nos em Tua missão. Que compartilhemos o evangelho com coragem e amor. Que façamos discípulas que façam discípulas. Amém.'},
  {id:36,titulo:'Impacto Transformador',categoria:'Serviço e Missão',versiculo:'Mateus 5:14-16',versiculoTexto:'Vocês são a luz do mundo. Uma cidade construída sobre um monte não pode ser escondida. Assim brilhe a luz de vocês diante dos outros, para que vejam as suas boas obras e glorifiquem ao Pai de vocês que está nos céus.',quebraGelo:'Como você tem impactado a vida de outras mulheres?',reflexao:'Nosso impacto não é medido por grandeza, mas por fidelidade. Uma vida vivida para Cristo impacta gerações.',perguntas:['Como deixamos um legado espiritual?','Como nossas vidas impactam outras mulheres?','Como podemos ser intencionais em nosso impacto?'],oracao:'Senhor, que nossas vidas brilhem para Ti. Que impactemos outras mulheres para o reino. Que deixemos legado de fé e amor. Amém.'},
  {id:37,titulo:'Força em Deus',categoria:'Força e Resiliência',versiculo:'Filipenses 4:13',versiculoTexto:'Tudo posso naquele que me fortalece.',quebraGelo:'Quando você sentiu a força de Deus em sua vida?',reflexao:'Nossa força não vem de nós mesmas, mas de Deus. Quando reconhecemos nossa fraqueza, abrimos espaço para Sua força trabalhar em nós.',perguntas:['Como diferenciamos força humana de força divina?','Como buscamos força em Deus quando nos sentimos fracas?','Como compartilhamos nossa força com outras mulheres?'],oracao:'Senhor, fortalece-nos. Que reconheçamos nossa fraqueza e nos apoiemos em Tua força. Que sejamos mulheres fortes em Ti. Amém.'},
  {id:38,titulo:'Resiliência Espiritual',categoria:'Força e Resiliência',versiculo:'2 Coríntios 4:8-9',versiculoTexto:'Somos pressionados de todos os lados, mas não esmagados; perplexos, mas não desesperados; perseguidos, mas não abandonados; derrubados, mas não destruídos.',quebraGelo:'Como você se recuperou de uma dificuldade?',reflexao:'Resiliência é capacidade de se recuperar. Como cristãs, temos esperança que nos sustenta mesmo nas piores circunstâncias.',perguntas:['O que nos torna resilientes?','Como mantemos esperança em tempos difíceis?','Como ajudamos outras mulheres a serem resilientes?'],oracao:'Pai, cultiva resiliência em nós. Que nos recuperemos de dificuldades com esperança. Que nossa resiliência inspire outras. Amém.'},
  {id:39,titulo:'Superando Obstáculos',categoria:'Força e Resiliência',versiculo:'Romanos 8:37',versiculoTexto:'Em todas essas coisas somos mais que vencedores, por meio daquele que nos amou.',quebraGelo:'Qual é um obstáculo que você superou?',reflexao:'Obstáculos não são fim do caminho, mas oportunidades de crescimento. Em Cristo, somos mais que vencedoras.',perguntas:['Como vemos obstáculos como oportunidades?','Qual é a diferença entre vencer e ser vencida?','Como celebramos nossas vitórias em Cristo?'],oracao:'Senhor, ajuda-nos a superar obstáculos. Que sejamos vencedoras em Cristo. Que nossa vitória glorifique Teu nome. Amém.'},
  {id:40,titulo:'Comunicação Honesta',categoria:'Relacionamentos e Conflitos',versiculo:'Efésios 4:2-3',versiculoTexto:'Sejam completamente humildes e gentis; sejam pacientes, tolerando uns aos outros em amor; empenhem-se em manter a unidade do Espírito por meio do vínculo da paz.',quebraGelo:'Como a comunicação honesta melhorou um relacionamento seu?',reflexao:'Comunicação honesta e amorosa é fundação de relacionamentos saudáveis. Quando falamos a verdade com amor, construímos confiança.',perguntas:['Como comunicamos verdades difíceis com amor?','Qual é a diferença entre honestidade brutal e honestidade amorosa?','Como ouvimos verdadeiramente umas às outras?'],oracao:'Senhor, ajuda-nos a comunicar com honestidade e amor. Que nossas palavras construam, não destruam. Que sejamos ouvintes atentas. Amém.'},
  {id:41,titulo:'Resolvendo Conflitos',categoria:'Relacionamentos e Conflitos',versiculo:'Mateus 18:15',versiculoTexto:'Se seu irmão pecar contra você, vá e aponte o erro dele, em particular. Se ele o ouvir, você ganhou seu irmão.',quebraGelo:'Como você resolveu um conflito de forma cristã?',reflexao:'Conflitos são oportunidades de crescimento. Quando os resolvemos com sabedoria e amor, fortalecemos relacionamentos.',perguntas:['Como abordamos conflitos sem medo ou agressividade?','Qual é o papel do perdão na resolução de conflitos?','Como mantemos paz enquanto resolvemos desacordos?'],oracao:'Pai, ajuda-nos a resolver conflitos com sabedoria. Que busquemos paz e reconciliação. Que nossos relacionamentos se fortaleçam. Amém.'},
  {id:42,titulo:'Limites Saudáveis',categoria:'Relacionamentos e Conflitos',versiculo:'Mateus 12:34',versiculoTexto:'Pois a boca fala do que está cheio o coração.',quebraGelo:'Como estabelecer limites a ajudou em um relacionamento?',reflexao:'Limites saudáveis não são egoísmo, mas cuidado com nós mesmas. Quando estabelecemos limites, protegemos nossa paz e saúde emocional.',perguntas:['Como diferenciamos limites saudáveis de rejeição?','Como estabelecemos limites com amor?','Como respeitamos os limites de outras mulheres?'],oracao:'Senhor, ajuda-nos a estabelecer limites saudáveis. Que protejamos nossa paz sem ferir outras. Que sejamos sábias em nossas relações. Amém.'},
  {id:43,titulo:'Cuidando do Corpo',categoria:'Saúde e Bem-estar',versiculo:'1 Coríntios 6:19-20',versiculoTexto:'Vocês não sabem que o corpo de vocês é templo do Espírito Santo, que habita em vocês, que lhes foi dado por Deus? Vocês não são seus próprios donos; foram comprados por preço. Portanto, glorifiquem a Deus com o seu corpo.',quebraGelo:'Como você cuida de sua saúde física?',reflexao:'Nosso corpo é templo do Espírito Santo. Cuidar dele é forma de honrar a Deus e respeitar o presente que Ele nos deu.',perguntas:['Como equilibramos cuidado físico com confiança em Deus?','Qual é a relação entre saúde física e espiritual?','Como encorajamos umas às outras em hábitos saudáveis?'],oracao:'Senhor, ajuda-nos a cuidar de nossos corpos como templos Teus. Que tenhamos sabedoria para escolhas saudáveis. Que honremos a Ti com nosso corpo. Amém.'},
  {id:44,titulo:'Saúde Emocional',categoria:'Saúde e Bem-estar',versiculo:'Provérbios 17:22',versiculoTexto:'O coração alegre é bom remédio, mas o espírito abatido seca os ossos.',quebraGelo:'Como você cuida de sua saúde emocional?',reflexao:'Saúde emocional é importante. Quando cuidamos de nossas emoções, nos tornamos mais capazes de servir a Deus e aos outros.',perguntas:['Como reconhecemos quando nossa saúde emocional está comprometida?','Qual é o papel da comunidade na saúde emocional?','Como buscamos ajuda quando precisamos?'],oracao:'Pai, cuida de nossa saúde emocional. Que tenhamos coragem de buscar ajuda quando precisamos. Que nossa alegria seja restaurada. Amém.'},
  {id:45,titulo:'Equilíbrio e Descanso',categoria:'Saúde e Bem-estar',versiculo:'Mateus 11:28',versiculoTexto:'Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.',quebraGelo:'Como você encontra descanso e equilíbrio?',reflexao:'Descanso não é luxo, mas necessidade. Deus nos convida a descansar nEle e a encontrar equilíbrio em nossas vidas.',perguntas:['Como diferenciamos descanso verdadeiro de procrastinação?','Como encontramos equilíbrio entre trabalho e descanso?','Como o descanso nos aproxima de Deus?'],oracao:'Senhor, ajuda-nos a descansar. Que encontremos equilíbrio em nossas vidas. Que descansemos em Tua presença. Amém.'},
  {id:46,titulo:'Fé no Dia a Dia',categoria:'Fé Prática',versiculo:'Colossenses 3:17',versiculoTexto:'E tudo o que fizerem, façam de todo o coração, como para o Senhor e não para os homens, sabendo que receberão do Senhor a recompensa da herança. É a Cristo, o Senhor, que vocês estão servindo.',quebraGelo:'Como você vive sua fé nas atividades diárias?',reflexao:'Fé não é apenas para momentos de crise. Quando vivemos nossa fé diariamente, transformamos o ordinário em sagrado.',perguntas:['Como levamos nossa fé para o trabalho, escola e casa?','Como nossas ações refletem nossa fé?','Como podemos ser testemunhas em nossas atividades diárias?'],oracao:'Senhor, ajuda-nos a viver nossa fé diariamente. Que cada ação reflita nosso amor por Ti. Que sejamos testemunhas em tudo que fazemos. Amém.'},
  {id:47,titulo:'Integridade',categoria:'Fé Prática',versiculo:'Provérbios 10:9',versiculoTexto:'Quem caminha com integridade anda seguro, mas quem segue caminhos tortos será descoberto.',quebraGelo:'Como a integridade a protegeu ou a abençoou?',reflexao:'Integridade é viver de acordo com nossos valores mesmo quando ninguém está vendo. É fundação de caráter cristão.',perguntas:['Como mantemos integridade em um mundo que nos pressiona a comprometer?','Qual é a relação entre integridade e confiança?','Como ensinamos integridade às próximas gerações?'],oracao:'Pai, cultiva integridade em nós. Que vivamos de acordo com nossos valores. Que nossa integridade inspire outras mulheres. Amém.'},
  {id:48,titulo:'Contentamento',categoria:'Fé Prática',versiculo:'1 Timóteo 6:6-8',versiculoTexto:'Ora, a piedade com contentamento é grande ganho. Porque nada trouxemos a este mundo, e nada podemos levar dele. Tendo sustento e vestuário, estejamos com isso satisfeitos.',quebraGelo:'O que significa contentamento para você?',reflexao:'Contentamento não é apatia, mas satisfação em Deus. Quando somos contentes, nos libertamos da ganância e da inveja.',perguntas:['Como diferenciamos contentamento de conformismo?','Como cultivamos contentamento em uma cultura de consumo?','Como o contentamento nos liberta?'],oracao:'Senhor, cultiva contentamento em nossos corações. Que sejamos satisfeitas em Ti. Que nosso contentamento nos liberte da ganância. Amém.'},
  {id:49,titulo:'Transformação Contínua',categoria:'Transformação e Celebração',versiculo:'2 Coríntios 3:18',versiculoTexto:'E todos nós, que com o rosto descoberto refletimos a glória do Senhor, estamos sendo transformados à sua imagem com glória cada vez maior, pela ação do Senhor, que é o Espírito.',quebraGelo:'Como você tem sido transformada pela fé?',reflexao:'Transformação é processo contínuo. Não é sobre perfeição, mas sobre crescimento constante e aproximação de Cristo.',perguntas:['Como reconhecemos a transformação em nossas vidas?','Qual é o papel do Espírito Santo na transformação?','Como celebramos a transformação umas das outras?'],oracao:'Senhor, transforma-nos continuamente. Que cada dia sejamos mais parecidas com Cristo. Que nossa transformação inspire outras mulheres. Amém.'},
  {id:50,titulo:'Celebração e Gratidão Final',categoria:'Transformação e Celebração',versiculo:'Salmos 100:1-5',versiculoTexto:'Aclamem o Senhor, toda a terra. Sirvam o Senhor com alegria; venham à sua presença com cânticos de alegria. Pois o Senhor é bom e seu amor dura para sempre; sua fidelidade permanece por todas as gerações.',quebraGelo:'Pelo que você é mais grata nesta jornada de fé?',reflexao:'Celebração é reconhecimento de tudo que Deus fez. Quando celebramos juntas, fortalecemos nossa comunidade e nossa fé.',perguntas:['Como celebramos as vitórias espirituais?','Qual tem sido o impacto dos encontros em sua vida?','Como continuaremos crescendo juntas?'],oracao:'Pai, obrigada por esta jornada. Que continuemos crescendo em fé, amor e comunidade. Que nossa gratidão seja eterna. Que sigamos juntas em missão. Amém.'},
];