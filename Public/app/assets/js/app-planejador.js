// ── PLANEJADOR ──

function syncPlannerRuntimeState(){
  if(!window.appStore) return;
  window.appStore.syncMany({ planoDinId, planoQGId, planoPergId });
}

function renderPlanejadorCampos(){
  const m = usuarioAtual?.modulos || {};

  renderPlanQuebraGeloWrap(m);

  const pgWrap = document.getElementById('plan-perguntas-wrap');
  if(pgWrap){
    if(m.perguntas){
      pgWrap.innerHTML = `
        <div id="plan-perg-chosen" style="display:none">
          <div class="plan-din-chosen-card">
            <div class="plan-din-chosen-badge">❓ ${t('plan.pergunta')}</div>
            <div class="plan-din-chosen-title" id="plan-perg-chosen-title"></div>
            <div class="plan-din-chosen-meta" id="plan-perg-chosen-meta"></div>
            <div class="plan-din-chosen-actions">
              <button class="plan-din-btn-edit" onclick="editarPergunta()">${t('btn.alterar')}</button>
            </div>
          </div>
        </div>

        <div id="plan-perg-sug" style="display:none;margin-bottom:8px"></div>

        <button
          type="button"
          class="plan-din-btn-edit"
          id="plan-perg-manual-toggle"
          onclick="togglePerguntaManual()"
          style="margin-top:8px;align-self:flex-start">
          ${t('plan.pergunta.manual.choose')}
        </button>

        <textarea
          class="plan-textarea"
          id="plan-pergunta"
          rows="2"
          placeholder="${t('plan.pergunta.placeholder')}"
          style="display:none;margin-top:8px"></textarea>`;
    } else {
      pgWrap.innerHTML = `<div class="plan-locked-field" onclick="openLocked('${t('plan.pergunta.locked.titulo')}','')">
        <span class="plan-locked-icon">💬</span>
        <div><div class="plan-locked-title">${t('plan.pergunta.locked.titulo')}</div><div class="plan-locked-sub">${t('plan.pergunta.locked.sub')}</div></div>
        <span class="plan-locked-arrow">›</span></div>`;
    }
  }
}

function toggleFavoritoPlano(id){
  const idx = planos.findIndex(p => String(p.id) === String(id));
  if(idx < 0) return;

  planos[idx].favorito = !planos[idx].favorito;
  salvarStorage();
  renderPlanos();

  toastMsg(planos[idx].favorito ? t('toast.fav.add') : t('toast.fav.rm'));
}

function renderPlanQuebraGeloWrap(m){
  const qbWrap = document.getElementById('plan-quebraGelo-wrap');
  if(!qbWrap) return;

  if(m.quebraGelos){
    qbWrap.innerHTML = `
      <div id="plan-qg-chosen" style="display:none">
        <div class="plan-din-chosen-card">
          <div class="plan-din-chosen-badge">🧊 ${t('plan.quebraGelo')}</div>
          <div class="plan-din-chosen-title" id="plan-qg-chosen-title"></div>
          <div class="plan-din-chosen-meta" id="plan-qg-chosen-meta"></div>
          <div class="plan-din-chosen-actions">
            <button class="plan-din-btn-edit" onclick="editarQuebraGelo()">${t('btn.alterar')}</button>
          </div>
        </div>
      </div>

      <div id="plan-qg-sug" style="display:none"></div>

      <button
        type="button"
        class="plan-din-btn-edit"
        id="plan-qg-manual-toggle"
        onclick="togglePlanQGManual()"
        style="margin-top:8px;align-self:flex-start">
        ${t('plan.manual.type')}
      </button>

      <textarea
        class="plan-textarea"
        id="plan-quebraGelo"
        rows="2"
        placeholder="${t('plan.quebraGelo.placeholder')}"
        style="display:none;margin-top:8px"></textarea>`;
  } else {
    qbWrap.innerHTML = `<div class="plan-locked-field" onclick="openLocked('${t('plan.quebraGelo.locked.titulo')}','')">
      <span class="plan-locked-icon">🧊</span>
      <div><div class="plan-locked-title">${t('plan.quebraGelo.locked.titulo')}</div><div class="plan-locked-sub">${t('plan.quebraGelo.locked.sub')}</div></div>
      <span class="plan-locked-arrow">›</span></div>`;
  }
}

function renderPlanQGSugestoes(data){
  const qgEl = document.getElementById('plan-qg-sug');
  if(!qgEl) return;

  if(!data?.qids?.length){
    qgEl.style.display = 'none';
    qgEl.innerHTML = '';
    window._planQGSugestoes = [];
    window._planQGExpandido = false;
    return;
  }

  const lista = data.qids
    .map(id => quebraGelos50.find(q => q.id === id))
    .filter(Boolean);

  if(!lista.length){
    qgEl.style.display = 'none';
    qgEl.innerHTML = '';
    window._planQGSugestoes = [];
    window._planQGExpandido = false;
    return;
  }

  window._planQGSugestoes = lista;
  window._planQGExpandido = false;
  qgEl.style.display = 'block';
  atualizarListaQG();
}

function atualizarListaQG(){
  const qgEl = document.getElementById('plan-qg-sug');
  const lista = window._planQGSugestoes || [];
  if(!qgEl || !lista.length) return;

  const visiveis = lista.slice(0, 3);

  qgEl.innerHTML = `
    <div class="plan-sug-header">
      <span>🧊</span>
      <span>${t('plan.sug.qgelos')}</span>
      <button class="plan-sug-all-btn" onclick="abrirBrowseQuebraGelos()">
        ${t('plan.sug.ver.todas')}
      </button>
    </div>

    <div class="plan-sug-list">
      ${visiveis.map(q => `
        <div class="plan-sug-item">
          <div class="plan-sug-item-info">
            <div class="plan-sug-item-title">${q.titulo}</div>
            <div class="plan-sug-item-meta">⏱ ${q.duracao || t('common.free')}</div>
          </div>

          <div class="plan-sug-item-btns">
            <button class="btn-preview-sug" onclick="previewQGById(${q.id}, false)">👁</button>
            <button
              class="btn-usar-sug"
              data-titulo="${q.titulo.replace(/"/g, '&quot;')}"
              onclick="usarSugestaoQG(this.dataset.titulo, ${q.id})">
              ${t('plan.sug.usar')}
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function togglePlanQGLista(){
  abrirBrowseQuebraGelos();
}

function usarSugestaoQG(titulo, id){
  selecionarQuebraGelo(id, titulo);
}

function togglePlanQGManual(){
  const ta = document.getElementById('plan-quebraGelo');
  const btn = document.getElementById('plan-qg-manual-toggle');
  if(!ta || !btn) return;

  const aberto = ta.style.display !== 'none';
  if(!aberto){
    planoQGId = null;
  syncPlannerRuntimeState();
    const chosen = document.getElementById('plan-qg-chosen');
    if(chosen) chosen.style.display = 'none';
  }

  ta.style.display = aberto ? 'none' : 'block';
  btn.textContent = aberto ? t('plan.manual.type') : t('plan.manual.close');
}

// ── PLANEJADOR ──
function markError(fieldId, inputId){
  document.getElementById(fieldId).classList.add('has-error');
  document.getElementById(inputId).classList.add('error');
}
function clearError(fieldId, inputId){
  document.getElementById(fieldId).classList.remove('has-error');
  document.getElementById(inputId).classList.remove('error');
}

// ── Tema → dinâmicas sugeridas (IDs) + versículos + perguntas + quebra-gelos ──
const temasData = {
  'Gratidão':              {ids:[6,1],   versos:['1 Tessalonicenses 5:18','Filipenses 4:6','Salmos 100:4','Colossenses 3:17'],  pids:['p1','p7','p11'], qids:[4,6,3]},
  'Amizade':               {ids:[8,7],   versos:['Provérbios 17:17','João 15:13','Eclesiastes 4:9','1 Samuel 18:1'],            pids:['p41','p42','p43'], qids:[1,5,11]},
  'Fé em tempos difíceis': {ids:[2,5],   versos:['Jeremias 29:11','Romanos 8:28','Filipenses 4:13','Isaías 41:10'],            pids:['p3','p8','p14'], qids:[7,10,3]},
  'Identidade em Cristo':  {ids:[3,1],   versos:['Gênesis 1:27','2 Coríntios 5:17','Efésios 2:10','Salmos 139:14'],            pids:['p9','p5','p15'], qids:[5,8,11]},
  'Esperança':             {ids:[5,4],   versos:['Jeremias 29:11','Romanos 15:13','Hebreus 11:1','Lamentações 3:22'],          pids:['p14','p3','p8'], qids:[7,13,10]},
  'Oração':                {ids:[2,6],   versos:['Filipenses 4:6','Mateus 6:9','1 Tessalonicenses 5:17','Tiago 5:16'],         pids:['p4','p12','p6'], qids:[3,8,1]},
  'Propósito':             {ids:[4,3],   versos:['Jeremias 29:11','Efésios 2:10','Romanos 8:28','Salmos 138:8'],               pids:['p13','p19','p9'], qids:[13,10,5]},
  'Perdão':                {ids:[1,8],   versos:['Efésios 4:32','Colossenses 3:13','Mateus 6:14','Lucas 6:37'],                pids:['p15','p5','p18'], qids:[10,4,7]},
  'Comunhão':              {ids:[7,8],   versos:['Atos 2:42','Hebreus 10:25','1 João 1:7','Romanos 12:10'],                    pids:['p41','p7','p11'], qids:[1,2,11]},
  'Família':               {ids:[5,1],   versos:['Josué 24:15','Provérbios 31:25','Efésios 6:1','Salmos 128:3'],               pids:['p21','p22','p15'], qids:[10,4,9]},
  // ── NOVOS TEMAS ──
  'Paz':                   {ids:[19,48], versos:['João 14:27','Filipenses 4:7','Isaías 26:3','Salmos 29:11'],                  pids:['p3','p8','p5'],   qids:[1,4,6]},
  'Força e Resiliência':   {ids:[34,99], versos:['Isaías 40:31','Filipenses 4:13','Salmos 46:1','2 Coríntios 12:9'],           pids:['p8','p14','p18'], qids:[7,10,13]},
  'Amor':                  {ids:[9,57],  versos:['1 Coríntios 13:4','João 15:12','1 João 4:19','Romanos 5:8'],                 pids:['p41','p42','p7'], qids:[2,5,11]},
  'Alegria':               {ids:[17,60], versos:['Neemias 8:10','Salmos 16:11','João 15:11','Habacuque 3:18'],                 pids:['p1','p7','p11'],  qids:[6,4,9]},
  'Crescimento Espiritual':{ids:[14,21], versos:['2 Pedro 3:18','Colossenses 1:10','Hebreus 5:14','Efésios 4:15'],             pids:['p10','p17','p12'],qids:[12,14,13]},
  'Testemunho':            {ids:[5,15],  versos:['Mateus 5:16','1 Pedro 3:15','Salmos 66:16','Atos 1:8'],                      pids:['p3','p7','p13'],  qids:[7,11,10]},
  'Serviço':               {ids:[107,126],versos:['Marcos 10:45','Gálatas 5:13','1 Pedro 4:10','Mateus 25:40'],               pids:['p13','p16','p19'],qids:[11,1,5]},
  'Sabedoria':             {ids:[126,154],versos:['Tiago 1:5','Provérbios 3:5','Salmos 111:10','Provérbios 9:10'],            pids:['p6','p15','p19'], qids:[3,8,12]},
  'Adoração':              {ids:[20,4],  versos:['João 4:24','Salmos 100:1','Romanos 12:1','Salmos 95:6'],                     pids:['p4','p12','p2'],  qids:[3,1,8]},
  'Cura Interior':         {ids:[1,48],  versos:['Salmos 147:3','Isaías 53:5','Jeremias 17:14','Apocalipse 21:4'],             pids:['p5','p8','p15'],  qids:[10,7,4]},
};

let planoDinId = null; // ID da dinâmica selecionada no plano
let planoQGId  = null; // ID do quebra-gelo selecionado no plano
let planoPergId = null; // ID da pergunta selecionada no plano

function onTemaSelect(val){
  const input = document.getElementById('plan-tema');
  const sugestao = document.getElementById('plan-sugestao');
  clearError('field-tema','plan-tema-select');
  clearError('field-tema','plan-tema');
  // reset dynamic, quebra-gelo and pergunta selection
  resetDinSelecao();
  resetQGSelecao();
  resetPergSelecao();

  if(val === 'outro'){
    input.style.display = 'block'; input.focus();
    sugestao.style.display = 'none';
    document.getElementById('field-dinamica-free').style.display = 'flex';
    document.getElementById('verse-chips').style.display = 'none';
    renderSugPergQG(null);
  } else if(val === ''){
    input.style.display = 'none'; input.value = '';
    sugestao.style.display = 'none';
    document.getElementById('field-dinamica-free').style.display = 'flex';
    document.getElementById('verse-chips').style.display = 'none';
    renderSugPergQG(null);
  } else {
    input.style.display = 'none'; input.value = val;
    const data = temasData[val];
    if(data){
      // render dynamics list
      const list = data.ids.map(id => dinamicas.find(d=>d.id===id)).filter(Boolean);
      renderSugList(list);
      sugestao.style.display = 'block';
      document.getElementById('field-dinamica-free').style.display = 'none';
      // verse chips
      renderVerseChips(data.versos);
      // perguntas + quebra-gelos
      renderSugPergQG(data);
    } else {
      sugestao.style.display = 'none';
      document.getElementById('field-dinamica-free').style.display = 'flex';
      document.getElementById('verse-chips').style.display = 'none';
      renderSugPergQG(null);
    }
  }
}

function renderSugList(list){
  document.getElementById('plan-sug-list').innerHTML = list.map(d=>`
    <div class="plan-sug-item">
      <div class="plan-sug-item-info">
        <div class="plan-sug-item-title">${d.titulo}</div>
        <div class="plan-sug-item-meta">${d.categoria} · ⏱ ${d.tempo}</div>
      </div>
      <div class="plan-sug-item-btns">
        <button class="btn-preview-sug" onclick="previewDinById(${d.id}, false)">👁</button>
        <button class="btn-usar-sug" onclick="selecionarDinamica(${d.id})">${t('plan.sug.usar')}</button>
      </div>
    </div>`).join('');
}

function renderSugPergQG(data){
  const pergEl = document.getElementById('plan-perg-sug');
  const ta = document.getElementById('plan-pergunta');
  if(ta) ta.style.display = 'none';

  const btn = document.getElementById('plan-perg-manual-toggle');
  if(btn){
    btn.style.display = 'inline-flex';
    btn.textContent = t('plan.pergunta.manual.choose');
  }

  if(pergEl && data?.pids?.length){
    const pergs = data.pids.map(id => perguntas100.find(p => p.id === id)).filter(Boolean);
    if(pergs.length){
      pergEl.style.display = 'block';
      pergEl.innerHTML = `
        <div class="plan-sug-list">
          ${pergs.map(p => `
            <div class="plan-sug-item">
              <div class="plan-sug-item-info">
                <div class="plan-sug-item-title">${p.pergunta}</div>
                <div class="plan-sug-item-meta">${p.categoriaLabel}</div>
              </div>
              <div class="plan-sug-item-btns">
                <button
                  class="btn-usar-sug"
                  data-pergunta="${p.pergunta.replace(/"/g, '&quot;')}"
                  onclick="selecionarPergunta('${p.id}', this.dataset.pergunta)">
                  ${t('plan.sug.usar')}
                </button>
              </div>
            </div>`).join('')}
        </div>`;
    } else {
      pergEl.style.display = 'none';
      pergEl.innerHTML = '';
    }
  } else if(pergEl){
    pergEl.style.display = 'none';
    pergEl.innerHTML = '';
  }

  renderPlanQGSugestoes(data);
}

function usarSugestaoPerguntas(texto){
  selecionarPergunta(null, texto);
}


function selecionarQuebraGelo(id, titulo){
  const q = quebraGelos50.find(x=>x.id===id);
  const text = titulo || q?.titulo || '';
  if(!text) return;

  planoQGId = id || null;
  syncPlannerRuntimeState();
  const ta = document.getElementById('plan-quebraGelo');
  if(ta){
    ta.value = text;
  }

  const chosen = document.getElementById('plan-qg-chosen');
  if(chosen){
    document.getElementById('plan-qg-chosen-title').textContent = text;
    document.getElementById('plan-qg-chosen-meta').textContent = q ? (q.categoria + ' · ⏱ ' + q.duracao) : '';
    chosen.style.display = 'block';
  }

  const sug = document.getElementById('plan-qg-sug'); if(sug) sug.style.display = 'none';
  const btn = document.getElementById('plan-qg-manual-toggle'); if(btn) btn.style.display = 'none';
  if(ta) ta.style.display = 'none';

  // Close browse modal if open
  const browse = document.getElementById('modal-browse-qg');
  if(browse) browse.classList.remove('open');

  toastMsg('🧊 ' + t('plan.sug.escolhida'));
}

function editarQuebraGelo(){
  planoQGId = null;
  syncPlannerRuntimeState();
  const chosen = document.getElementById('plan-qg-chosen'); if(chosen) chosen.style.display = 'none';

  const sug = document.getElementById('plan-qg-sug');
  if(sug){
    if(window._planQGSugestoes?.length){
      sug.style.display = 'block';
      atualizarListaQG();
    } else {
      sug.style.display = 'none';
      sug.innerHTML = '';
    }
  }

  const btn = document.getElementById('plan-qg-manual-toggle');
  if(btn){
    btn.style.display = 'inline-flex';
    btn.textContent = t('plan.manual.type');
  }

  const ta = document.getElementById('plan-quebraGelo');
  if(ta){
    ta.style.display = 'none';
  }
}

function resetQGSelecao(){
  planoQGId = null;
  syncPlannerRuntimeState();
  const chosen = document.getElementById('plan-qg-chosen'); if(chosen) chosen.style.display = 'none';
  const sug = document.getElementById('plan-qg-sug'); if(sug){ sug.style.display = 'none'; }
  const btn = document.getElementById('plan-qg-manual-toggle');
  if(btn){ btn.style.display = 'inline-flex'; btn.textContent = t('plan.manual.type'); }
  const ta = document.getElementById('plan-quebraGelo');
  if(ta){ ta.style.display = 'none'; ta.value = ''; }
}

function resetDinSelecao(){
  planoDinId = null;
  syncPlannerRuntimeState();
  document.getElementById('plan-din-chosen').style.display = 'none';
  document.getElementById('plan-dinamica').value = '';
  document.getElementById('plan-dinamica-free').value = '';
}

function resetPergSelecao(){
  planoPergId = null;
  syncPlannerRuntimeState();
  const chosen = document.getElementById('plan-perg-chosen'); if(chosen) chosen.style.display = 'none';
  const sug = document.getElementById('plan-perg-sug'); if(sug){ sug.style.display = 'none'; }
  const btn = document.getElementById('plan-perg-manual-toggle');
  if(btn){ btn.style.display = 'inline-flex'; btn.textContent = t('plan.pergunta.manual.choose'); }
  const ta = document.getElementById('plan-pergunta');
  if(ta){ ta.style.display = 'none'; ta.value = ''; }
}

function selecionarPergunta(id, texto){
  const p = perguntas100.find(x=>x.id===id);
  const text = texto || p?.pergunta || '';
  if(!text) return;

  planoPergId = id || null;
  syncPlannerRuntimeState();
  const ta = document.getElementById('plan-pergunta');
  if(ta){ ta.value = text; }

  const chosen = document.getElementById('plan-perg-chosen');
  if(chosen){
    document.getElementById('plan-perg-chosen-title').textContent = text;
    document.getElementById('plan-perg-chosen-meta').textContent = p ? p.categoriaLabel : '';
    chosen.style.display = 'block';
  }

  const sug = document.getElementById('plan-perg-sug'); if(sug) sug.style.display = 'none';
  const btn = document.getElementById('plan-perg-manual-toggle'); if(btn) btn.style.display = 'none';
  if(ta) ta.style.display = 'none';

  toastMsg('❓ ' + t('plan.sug.escolhida'));
}

function editarPergunta(){
  planoPergId = null;
  syncPlannerRuntimeState();
  const chosen = document.getElementById('plan-perg-chosen'); if(chosen) chosen.style.display = 'none';

  const sug = document.getElementById('plan-perg-sug');
  if(sug){
    if(sug.innerHTML.trim()){
      sug.style.display = 'block';
    } else {
      sug.style.display = 'none';
    }
  }

  const btn = document.getElementById('plan-perg-manual-toggle');
  if(btn){
    btn.style.display = 'inline-flex';
    btn.textContent = t('plan.pergunta.manual.choose');
  }

  const ta = document.getElementById('plan-pergunta');
  if(ta){ ta.style.display = 'none'; }
}

function togglePerguntaManual(){
  const ta = document.getElementById('plan-pergunta');
  const btn = document.getElementById('plan-perg-manual-toggle');
  if(!ta || !btn) return;

  const aberto = ta.style.display !== 'none';
  if(!aberto){
    planoPergId = null;
  syncPlannerRuntimeState();
    const chosen = document.getElementById('plan-perg-chosen'); if(chosen) chosen.style.display = 'none';
  }

  ta.style.display = aberto ? 'none' : 'block';
  btn.textContent = aberto ? t('plan.pergunta.manual.choose') : t('plan.manual.close');
}

function selecionarDinamica(id){
  const d = dinamicas.find(x=>x.id===id);
  if(!d) return;
  planoDinId = id;
  syncPlannerRuntimeState();
  document.getElementById('plan-dinamica').value = d.titulo;
  document.getElementById('plan-din-chosen-title').textContent = d.titulo;
  document.getElementById('plan-din-chosen-meta').textContent = d.categoria + ' · ⏱ ' + d.tempo;
  document.getElementById('plan-din-chosen').style.display = 'block';
  document.getElementById('plan-sugestao').style.display = 'none';
  document.getElementById('field-dinamica-free').style.display = 'none';
  document.getElementById('modal-browse-din').classList.remove('open');
  clearError('field-dinamica','plan-dinamica');
  toastMsg(t('toast.din.escolhida'));
}

function editarDinamica(){
  const temaSel = document.getElementById('plan-tema-select').value;
  planoDinId = null;
  syncPlannerRuntimeState();
  document.getElementById('plan-din-chosen').style.display = 'none';
  document.getElementById('plan-dinamica').value = '';
  if(temaSel && temaSel !== 'outro' && temasData[temaSel]){
    document.getElementById('plan-sugestao').style.display = 'block';
  } else {
    document.getElementById('field-dinamica-free').style.display = 'flex';
  }
}

// Preview dinâmica (abre modal)
let dinPreviewId = null;
let dinPreviewFromBrowse = false;
function previewDinById(id, fromBrowse){
  const d = dinamicas.find(x=>x.id===id);
  if(!d) return;
  dinPreviewId = id;
  dinPreviewFromBrowse = fromBrowse;
  document.getElementById('dp-titulo').textContent = d.titulo;
  document.getElementById('dp-tags').innerHTML = `<span class="tag">${d.categoria}</span><span class="tag sage">⏱ ${d.tempo}</span>`;
  document.getElementById('dp-body').innerHTML = `
    <div class="detail-section"><h5>${t('din.objetivo')}</h5><p>${d.objetivo}</p></div>
    <div class="detail-section"><h5>${t('din.materiais')}</h5><p>${d.materiais}</p></div>
    <div class="detail-section"><h5>${t('din.passos.label')}</h5>
      <ul class="steps">${d.passos.map((p,i)=>`<li><span class="step-num">${i+1}</span>${p}</li>`).join('')}</ul>
    </div>
    <div class="detail-section" style="border-left:3px solid var(--gold)"><h5>${t('din.aplicacao')}</h5><p>${d.aplicacao}</p></div>`;
  document.getElementById('modal-din-preview').classList.add('open');
}
function previewDinPlano(){ if(planoDinId) previewDinById(planoDinId, false); }
function closeDinPreview(e){ if(e.target===document.getElementById('modal-din-preview')) closeDinPreviewDirect(); }
function closeDinPreviewDirect(){ document.getElementById('modal-din-preview').classList.remove('open'); }
function usarDinPreview(){
  if(dinPreviewId) selecionarDinamica(dinPreviewId);
  closeDinPreviewDirect();
}

function onDinFreeInput(val){
  document.getElementById('plan-dinamica').value = val;
  planoDinId = null;
  syncPlannerRuntimeState();
  if(val) clearError('field-dinamica-free','plan-dinamica-free');
}

// ── Browse modal ──
function abrirBrowseDinamica(){
  renderBrowseDin(dinamicas);
  document.getElementById('browse-din-search').value = '';
  document.getElementById('modal-browse-din').classList.add('open');
}
function closeBrowseDin(e){ if(e.target===document.getElementById('modal-browse-din')) document.getElementById('modal-browse-din').classList.remove('open'); }
function filterBrowseDin(q){
  renderBrowseDin(q ? dinamicas.filter(d=>
    d.titulo.toLowerCase().includes(q.toLowerCase())||
    d.categoria.toLowerCase().includes(q.toLowerCase())
  ) : dinamicas);
}
function renderBrowseDin(list){
  document.getElementById('browse-din-list').innerHTML = list.map(d=>`
    <div class="browse-din-item">
      <div style="flex:1;min-width:0">
        <h5>${d.titulo}</h5>
        <p>${d.categoria} · ⏱ ${d.tempo}</p>
      </div>
      <div class="browse-din-item-btns">
        <button class="btn-preview-sug" onclick="previewDinById(${d.id},true)">👁</button>
        <button class="btn-usar-sug" onclick="selecionarDinamica(${d.id})">${t('browse.din.use')}</button>
      </div>
    </div>`).join('');
}

// ── Browse modal (Quebra-gelo) ──
let qgPreviewId = null;
let qgPreviewFromBrowse = false;
function previewQGById(id, fromBrowse){
  const q = quebraGelos50.find(x=>x.id===id);
  if(!q) return;
  qgPreviewId = id;
  qgPreviewFromBrowse = fromBrowse;
  document.getElementById('qg-titulo').textContent = q.titulo;
  document.getElementById('qg-tags').innerHTML = `<span class="tag">${q.categoria}</span><span class="tag sage">⏱ ${q.duracao}</span>`;
  document.getElementById('qg-body').innerHTML = `
    <div class="detail-section"><h5>${t('qg.detail.objetivo')}</h5><p>${q.objetivo}</p></div>
    <div class="detail-section"><h5>${t('qg.detail.como')}</h5><p>${q.como}</p></div>
    <div class="detail-section" style="border-left:3px solid var(--gold)"><h5>${t('qg.detail.dica')}</h5><p>${q.dica}</p></div>`;
  document.getElementById('modal-qg-preview').classList.add('open');
}
function previewQGPlano(){ if(planoQGId) previewQGById(planoQGId, false); }
function closeQGPreview(e){ if(e.target===document.getElementById('modal-qg-preview')) closeQGPreviewDirect(); }
function closeQGPreviewDirect(){ document.getElementById('modal-qg-preview').classList.remove('open'); }
function usarQGPreview(){ if(qgPreviewId) selecionarQuebraGelo(qgPreviewId); closeQGPreviewDirect(); }

function abrirBrowseQuebraGelos(){
  renderBrowseQG(quebraGelos50);
  document.getElementById('browse-qg-search').value = '';
  document.getElementById('modal-browse-qg').classList.add('open');
}
function closeBrowseQG(e){ if(e.target===document.getElementById('modal-browse-qg')) document.getElementById('modal-browse-qg').classList.remove('open'); }
function filterBrowseQG(q){
  const base = quebraGelos50;
  renderBrowseQG(q ? base.filter(x=>
    x.titulo.toLowerCase().includes(q.toLowerCase())||
    x.categoria.toLowerCase().includes(q.toLowerCase())
  ) : base);
}
function renderBrowseQG(list){
  document.getElementById('browse-qg-list').innerHTML = list.map(q=>`
    <div class="browse-din-item">
      <div style="flex:1;min-width:0">
        <h5>${q.titulo}</h5>
        <p>${q.categoria} · ⏱ ${q.duracao}</p>
      </div>
      <div class="browse-din-item-btns">
        <button class="btn-preview-sug" onclick="previewQGById(${q.id},true)">👁</button>
        <button class="btn-usar-sug" onclick="selecionarQuebraGelo(${q.id})">${t('browse.qg.use')}</button>
      </div>
    </div>`).join('');
}

// ── Versículos ──
const versiculoMap = {
  'joão':'john','joao':'john','mateus':'matthew','marcos':'mark','lucas':'luke',
  'atos':'acts','romanos':'romans','gálatas':'galatians','galatas':'galatians',
  'efésios':'ephesians','efesios':'ephesians','filipenses':'philippians',
  'colossenses':'colossians','hebreus':'hebrews','tiago':'james',
  'apocalipse':'revelation','gênesis':'genesis','genesis':'genesis',
  'êxodo':'exodus','exodo':'exodus','salmos':'psalms','provérbios':'proverbs',
  'proverbios':'proverbs','isaías':'isaiah','isaias':'isaiah',
  'jeremias':'jeremiah','ezequiel':'ezekiel','daniel':'daniel','rute':'ruth',
  'lamentações':'lamentations','lamentacoes':'lamentations',
  '1 coríntios':'1corinthians','1 corintios':'1corinthians',
  '2 coríntios':'2corinthians','2 corintios':'2corinthians',
  '1 tessalonicenses':'1thessalonians','2 tessalonicenses':'2thessalonians',
  '1 timóteo':'1timothy','1 timoteo':'1timothy',
  '2 timóteo':'2timothy','2 timoteo':'2timothy',
  '1 pedro':'1peter','2 pedro':'2peter',
  '1 joão':'1john','2 joão':'2john','3 joão':'3john',
  'eclesiastes':'ecclesiastes','josué':'joshua','josue':'joshua',
  '1 samuel':'1samuel','2 samuel':'2samuel',
};

// Base local de versículos (cobre todos os chips sugeridos)
const versiculosLocais = {
  '1 tessalonicenses 5:18': 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.',
  'filipenses 4:6': 'Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos conhecidos diante de Deus pela oração e súplica com ação de graças.',
  'filipenses 4:13': 'Posso tudo naquele que me fortalece.',
  'salmos 100:4': 'Entrai pelos seus portões com ações de graças, pelos seus átrios com louvores; rendei-lhe graças e bendizei o seu nome.',
  'colossenses 3:17': 'E tudo quanto fizerdes, seja em palavra, seja em ato, fazei tudo em nome do Senhor Jesus, dando por ele graças a Deus Pai.',
  'provérbios 17:17': 'Em todo o tempo ama o amigo; e para a hora da angústia nasce o irmão.',
  'joão 15:13': 'Ninguém tem maior amor do que este: de dar alguém a sua vida pelos seus amigos.',
  'eclesiastes 4:9': 'Melhor é serem dois do que um, porque têm melhor paga do seu trabalho.',
  '1 samuel 18:1': 'E aconteceu que, acabando ele de falar com Saul, a alma de Jônatas se ligou à alma de Davi, e Jônatas o amou como a sua própria alma.',
  'jeremias 29:11': 'Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.',
  'romanos 8:28': 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.',
  'isaías 41:10': 'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.',
  'gênesis 1:27': 'E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.',
  '2 coríntios 5:17': 'Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.',
  'efésios 2:10': 'Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.',
  'salmos 139:14': 'Render-te-ei graças, porque de um modo assombrosamente maravilhoso me formaste; as tuas obras são admiráveis, e a minha alma o sabe muito bem.',
  'romanos 15:13': 'Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.',
  'hebreus 11:1': 'Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que não se vêem.',
  'lamentações 3:22': 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim.',
  'mateus 6:9': 'Portanto, vós orareis assim: Pai nosso, que estás nos céus, santificado seja o teu nome.',
  'tiago 5:16': 'Confessai as vossas ofensas uns aos outros, e orai uns pelos outros, para serdes curados. A oração feita por um justo pode muito em seus efeitos.',
  'efésios 4:32': 'Sede bondosos uns para com os outros, misericordiosos, perdoando-vos mutuamente, como também Deus vos perdoou em Cristo.',
  'colossenses 3:13': 'Suportando-vos uns aos outros, e perdoando-vos mutuamente, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.',
  'mateus 6:14': 'Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós.',
  'lucas 6:37': 'Não julgueis, e não sereis julgados; não condeneis, e não sereis condenados; soltai, e sereis soltos.',
  'atos 2:42': 'E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.',
  'hebreus 10:25': 'Não deixando a nossa congregação, como é costume de alguns; antes admoestando-nos uns aos outros; e tanto mais quanto vedes que o dia se vai aproximando.',
  '1 joão 1:7': 'Mas, se andarmos na luz, como ele está na luz, temos comunhão uns com os outros, e o sangue de Jesus Cristo seu Filho nos purifica de todo o pecado.',
  'romanos 12:10': 'Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.',
  'josué 24:15': 'E, se vos parece mal servir ao Senhor, escolhei hoje a quem sirvais; mas eu e a minha casa serviremos ao Senhor.',
  'provérbios 31:25': 'A força e a honra são o seu traje, e se rirá do dia por vir.',
  'efésios 6:1': 'Filhos, obedecei a vossos pais no Senhor, porque isto é justo.',
  'salmos 128:3': 'Tua mulher será como a videira frutífera nos lados da tua casa; os teus filhos, como plantas de oliveira em redor da tua mesa.',
  'joão 3:16': 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
  'salmos 23:1': 'O Senhor é o meu pastor; nada me faltará.',
  'isaías 40:31': 'Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.',
  'romanos 8:1': 'Portanto, já agora nenhuma condenação há para os que estão em Cristo Jesus.',
  'efésios 2:8': 'Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.',
};

function normalizarRef(ref){
  let r = ref.trim().toLowerCase();
  r = r.replace(/\s*:\s*/g,':').replace(/\s+/g,' ');
  const entries = Object.entries(versiculoMap).sort((a,b)=>b[0].length-a[0].length);
  for(const [pt, en] of entries){
    if(r.startsWith(pt)){ r = en + r.slice(pt.length); break; }
  }
  return r;
}

function buscarVersiculoLocal(ref){
  const key = ref.trim().toLowerCase().replace(/\s*:\s*/g,':').replace(/\s+/g,' ');
  return versiculosLocais[key] || null;
}

async function buscarVersiculo(){
  const ref = document.getElementById('plan-versiculo-ref').value.trim();
  if(!ref){ toastMsg(t('toast.ref.invalida')); return; }
  hideVerseSuggDropdown();

  // 1. Base local (instantâneo, português Almeida)
  const local = buscarVersiculoLocal(ref);
  if(local){ mostrarVersiculoEncontrado(ref, local); return; }

  // 2. API com tradução Almeida (português)
  document.getElementById('verse-loading').style.display = 'flex';
  document.getElementById('verse-result').style.display = 'none';
  document.getElementById('verse-error').style.display = 'none';
  document.getElementById('plan-verse-btn').disabled = true;

  try {
    const normalized = normalizarRef(ref).replace(/\s+/g,'+');
    const versaoTrad = t('verse.translation'); // almeida / kjv / rvr1960
    let res  = await fetch(`https://bible-api.com/${normalized}?translation=${versaoTrad}`);
    const data = await res.json();

    if(data.error || !data.text){
      // Almeida não encontrou — mostra mensagem útil em vez de inglês
      throw new Error('not found');
    }

    const texto    = data.text.replace(/\n/g,' ').trim();
    const refLabel = data.reference || ref;
    mostrarVersiculoEncontrado(refLabel, texto);

  } catch(e){
    document.getElementById('verse-loading').style.display = 'none';
    const errEl = document.getElementById('verse-error');
    errEl.style.display = 'block';
    errEl.innerHTML = t('plan.verse.nao.encontrado');
  } finally {
    document.getElementById('plan-verse-btn').disabled = false;
  }
}

function mostrarVersiculoEncontrado(refLabel, texto){
  document.getElementById('verse-loading').style.display = 'none';
  document.getElementById('verse-ref-label').textContent = refLabel;
  document.getElementById('verse-text').textContent = '"' + texto + '"';
  document.getElementById('plan-estudo').value = refLabel + ' — ' + texto;
  document.getElementById('verse-result').style.display = 'block';
  document.getElementById('verse-error').style.display = 'none';
  document.getElementById('plan-verse-btn').disabled = false;
  clearError('field-estudo','plan-versiculo-ref');
  toastMsg(t('toast.versiculo.encontrado'));
}

function limparVersiculo(){
  document.getElementById('verse-result').style.display = 'none';
  document.getElementById('plan-versiculo-ref').value = '';
  document.getElementById('plan-estudo').value = '';
}

// Pool para autocomplete (todos os versículos sugeridos + base local)
const allVerseSugg = [...new Set([
  ...Object.values(temasData).flatMap(t=>t.versos),
  'João 3:16','Salmos 23:1','Isaías 40:31','Romanos 8:1','Efésios 2:8',
  'Filipenses 4:13','Provérbios 3:5','Jeremias 29:11'
])];

function renderVerseChips(versos){
  const chips = document.getElementById('verse-chips');
  chips.innerHTML = versos.map(v=>`<span class="verse-chip" onclick="useVerseChip('${v}')">${v}</span>`).join('');
  chips.style.display = 'flex';
}
function useVerseChip(ref){
  document.getElementById('plan-versiculo-ref').value = ref;
  hideVerseSuggDropdown();
  buscarVersiculo();
}
function onVerseInput(val){
  clearError('field-estudo','plan-versiculo-ref');
  if(val.length < 2){ hideVerseSuggDropdown(); return; }
  const q = val.toLowerCase();
  const matches = allVerseSugg.filter(v=>v.toLowerCase().includes(q));
  if(!matches.length){ hideVerseSuggDropdown(); return; }
  const dd = document.getElementById('verse-sugg-dropdown');
  dd.innerHTML = matches.slice(0,6).map(v=>{
    const hi = v.replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<strong>$1</strong>');
    return `<div class="verse-sugg-item" onclick="useVerseChip('${v}')">${hi}</div>`;
  }).join('');
  dd.style.display = 'block';
}
function showVerseSuggDropdown(){
  const val = document.getElementById('plan-versiculo-ref').value;
  if(val.length >= 2) onVerseInput(val);
}
function hideVerseSuggDropdown(){
  const dd = document.getElementById('verse-sugg-dropdown');
  if(dd) dd.style.display = 'none';
}
// ── CUSTOM DATEPICKER ──
let dpDate = null; // selected Date object
let dpViewYear, dpViewMonth; // currently displayed month

function dpInit(){
  const now = new Date();
  dpViewYear = now.getFullYear();
  dpViewMonth = now.getMonth();
}

function dpOpen(){
  if(!dpViewYear) dpInit();
  dpRenderCalendar();
  document.getElementById('dp-calendar').classList.add('open');
  document.getElementById('dp-input-row').style.borderColor = 'var(--gold)';
}

function dpClose(){
  document.getElementById('dp-calendar').classList.remove('open');
  document.getElementById('dp-input-row').style.borderColor = '';
}

function dpToggle(){
  const cal = document.getElementById('dp-calendar');
  if(cal.classList.contains('open')) dpClose();
  else dpOpen();
}

function dpRenderCalendar(){
  if(!dpViewYear) dpInit();
  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const weekdays = ['D','S','T','Q','Q','S','S'];
  const today = new Date();
  const firstDay = new Date(dpViewYear, dpViewMonth, 1).getDay();
  const daysInMonth = new Date(dpViewYear, dpViewMonth+1, 0).getDate();
  const daysInPrev = new Date(dpViewYear, dpViewMonth, 0).getDate();

  let days = '';
  // Prev month padding
  for(let i = firstDay-1; i >= 0; i--){
    days += `<div class="dp-day dp-day-empty dp-other-month">${daysInPrev - i}</div>`;
  }
  // Current month days
  for(let d = 1; d <= daysInMonth; d++){
    const isToday = d===today.getDate() && dpViewMonth===today.getMonth() && dpViewYear===today.getFullYear();
    const isSelected = dpDate && d===dpDate.getDate() && dpViewMonth===dpDate.getMonth() && dpViewYear===dpDate.getFullYear();
    let cls = 'dp-day';
    if(isToday) cls += ' dp-today';
    if(isSelected) cls += ' dp-selected';
    days += `<div class="${cls}" onclick="dpSelectDay(${d})">${d}</div>`;
  }
  // Next month padding
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  let next = 1;
  for(let i = firstDay + daysInMonth; i < totalCells; i++){
    days += `<div class="dp-day dp-day-empty dp-other-month">${next++}</div>`;
  }

  document.getElementById('dp-calendar').innerHTML = `
    <div class="dp-cal-header">
      <span class="dp-cal-title">${months[dpViewMonth]} de ${dpViewYear}</span>
      <div class="dp-cal-nav">
        <button class="dp-cal-btn" onclick="dpNav(-1)">‹</button>
        <button class="dp-cal-btn" onclick="dpNav(1)">›</button>
      </div>
    </div>
    <div class="dp-weekdays">${weekdays.map(w=>`<div class="dp-weekday">${w}</div>`).join('')}</div>
    <div class="dp-days">${days}</div>
    <div class="dp-cal-footer">
      <button class="dp-cal-foot-btn" onclick="dpClear()" data-i18n="dp.limpar">Limpar</button>
      <button class="dp-cal-foot-btn" onclick="dpSelectToday()" data-i18n="dp.hoje">Hoje</button>
    </div>`;
}

function dpNav(dir){
  dpViewMonth += dir;
  if(dpViewMonth > 11){ dpViewMonth = 0; dpViewYear++; }
  if(dpViewMonth < 0){ dpViewMonth = 11; dpViewYear--; }
  dpRenderCalendar();
}

function dpSelectDay(d){
  dpDate = new Date(dpViewYear, dpViewMonth, d);
  dpSetValue(dpDate);
  dpClose();
}

function dpSelectToday(){
  dpDate = new Date();
  dpViewYear = dpDate.getFullYear();
  dpViewMonth = dpDate.getMonth();
  dpSetValue(dpDate);
  dpClose();
}

function dpSetValue(date){
  if(!date) return;
  const dd = String(date.getDate()).padStart(2,'0');
  const mm = String(date.getMonth()+1).padStart(2,'0');
  const yyyy = date.getFullYear();
  document.getElementById('dp-text-input').value = `${dd}/${mm}/${yyyy}`;
  // ISO format for hidden field
  document.getElementById('plan-data').value = `${yyyy}-${mm}-${dd}`;
  document.getElementById('dp-clear-btn').style.display = 'block';
  clearError('field-data','plan-data');
}

function dpClear(){
  dpDate = null;
  document.getElementById('dp-text-input').value = '';
  document.getElementById('plan-data').value = '';
  document.getElementById('dp-clear-btn').style.display = 'none';
  dpClose();
}

function dpHandleTyping(val){
  // Auto-format: insert / at positions 2 and 5
  let v = val.replace(/\D/g,'');
  if(v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
  if(v.length > 5) v = v.slice(0,5) + '/' + v.slice(5,9);
  document.getElementById('dp-text-input').value = v;
  document.getElementById('dp-clear-btn').style.display = v ? 'block' : 'none';
  // Parse if complete
  if(v.length === 10){
    const [dd,mm,yyyy] = v.split('/').map(Number);
    const parsed = new Date(yyyy, mm-1, dd);
    if(!isNaN(parsed) && parsed.getDate()===dd && parsed.getMonth()===mm-1 && parsed.getFullYear()===yyyy){
      dpDate = parsed;
      dpViewYear = yyyy;
      dpViewMonth = mm-1;
      document.getElementById('plan-data').value = `${yyyy}-${String(mm).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;
      clearError('field-data','plan-data');
      if(document.getElementById('dp-calendar').classList.contains('open')) dpRenderCalendar();
    }
  } else {
    document.getElementById('plan-data').value = '';
  }
}

function dpHandleKey(e){
  if(e.key==='Enter'||e.key==='Escape') dpClose();
  if(e.key==='ArrowDown') { e.preventDefault(); dpOpen(); }
}

// Close datepicker when clicking outside
document.addEventListener('click', function(e){
  const wrap = document.getElementById('dp-wrap');
  if(wrap && !wrap.contains(e.target)) dpClose();
});

// ── NOTIFICAÇÕES DE LEMBRETE ──
function toggleNotificacao(){
  const btn = document.getElementById('plan-notif-btn');
  const info = document.getElementById('plan-notif-info');
  const horaEl = document.getElementById('plan-hora');
  const dataEl = document.getElementById('plan-data');
  if(!btn) return;
  const ativo = btn.classList.toggle('ativo');
  if(ativo){
    // Pedir permissão de notificação
    if('Notification' in window && Notification.permission === 'default'){
      Notification.requestPermission();
    }
    const hora = horaEl?.value;
    const data = dataEl?.value;
    let msg = t('plan.notif.ativo');
    if(data && hora){
      const dt = new Date(data+'T'+hora);
      msg = `🔔 Lembrete ativado para ${dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})} às ${hora}`;
    } else if(hora){
      msg = `🔔 Lembrete ativado para às ${hora}`;
    } else {
      msg = t('plan.notif.ativo.semhora');
    }
    document.getElementById('plan-notif-info-text').textContent = msg;
    if(info) info.style.display = 'block';
  } else {
    if(info) info.style.display = 'none';
  }
}

function agendarNotificacao(plano){
  if(!plano.notif || !plano.data || !plano.hora) return;
  if(!('Notification' in window) || Notification.permission !== 'granted') return;
  const dt = new Date(plano.data+'T'+plano.hora);
  const agora = Date.now();
  const diff = dt.getTime() - agora;
  if(diff <= 0) return; // já passou
  // Lembrete 1h antes
  const diff1h = diff - 60*60*1000;
  if(diff1h > 0){
    setTimeout(()=>{
      new Notification('🌸 Lembrete de Encontro', {
        body: `Seu encontro "${plano.tema}" começa em 1 hora (${plano.hora})`,
        icon: '/favicon.ico'
      });
    }, diff1h);
  }
  // Lembrete na hora
  setTimeout(()=>{
    new Notification('🌸 Hora do Encontro!', {
      body: `Seu encontro "${plano.tema}" começa agora! Boa reunião 💜`,
      icon: '/favicon.ico'
    });
  }, diff);
}

function salvarPlano(){
  const temaSel = document.getElementById('plan-tema-select').value;
  const temaInput = document.getElementById('plan-tema').value.trim();
  const tema = temaSel==='outro' ? temaInput : (temaSel ? temaSel : '');
  const dinVal = document.getElementById('plan-dinamica').value.trim() || document.getElementById('plan-dinamica-free').value.trim();
  const dataVal = document.getElementById('plan-data').value.trim();
  const versRef = document.getElementById('plan-versiculo-ref').value.trim();
  const oracaoVal = document.getElementById('plan-oracao').value.trim();

  let hasError = false;
  // tema
  if(!tema){
    const inp = temaSel==='outro'?'plan-tema':'plan-tema-select';
    markError('field-tema', inp); hasError=true;
  }
  // dinamica
  if(!dinVal){
    const fd = document.getElementById('field-dinamica-free');
    if(fd.style.display !== 'none'){ fd.classList.add('has-error'); document.getElementById('plan-dinamica-free').classList.add('error'); }
    else { markError('field-dinamica','plan-dinamica'); }
    hasError=true;
  }
  // data
  if(!dataVal){ markError('field-data','plan-data'); hasError=true; }
  // versículo
  if(!versRef){ markError('field-estudo','plan-versiculo-ref'); hasError=true; }

  if(hasError){ toastMsg(t('toast.campos.obrigatorios')); document.getElementById('screen-planejador').scrollTop=0; return; }

  const plano = {
    tema, data: dataVal,
    hora: document.getElementById('plan-hora')?.value || '',
    notif: document.getElementById('plan-notif-btn')?.classList.contains('ativo') || false,
    dinamica: dinVal, dinamicaId: planoDinId,
    estudo: document.getElementById('plan-estudo').value || versRef,
    versiculoRef: versRef,
    quebraGelo: document.getElementById('plan-quebraGelo')?.value?.trim() || '',
    quebraGeloId: planoQGId || null,
    pergunta: document.getElementById('plan-pergunta')?.value?.trim() || '',
    perguntaId: planoPergId || null,
    oracao: oracaoVal,
    notas: document.getElementById('plan-notas').value,
    id: Date.now()
  };
  planos.unshift(plano);
  salvarStorage();
  agendarNotificacao(plano);

  // reset form
  document.getElementById('plan-tema-select').value = '';
  document.getElementById('plan-tema').value = '';
  document.getElementById('plan-tema').style.display = 'none';
  document.getElementById('plan-sugestao').style.display = 'none';
  document.getElementById('plan-din-chosen').style.display = 'none';
  document.getElementById('field-dinamica-free').style.display = 'flex';
  document.getElementById('field-dinamica-free').classList.remove('has-error');
  document.getElementById('plan-dinamica-free').value = '';
  document.getElementById('plan-dinamica-free').classList.remove('error');
  document.getElementById('plan-dinamica').value = '';
  document.getElementById('verse-chips').style.display = 'none';
  ['plan-oracao','plan-notas'].forEach(id=>{document.getElementById(id).value='';});
  const horaEl = document.getElementById('plan-hora'); if(horaEl) horaEl.value = '';
  const notifBtn = document.getElementById('plan-notif-btn'); if(notifBtn) notifBtn.classList.remove('ativo');
  const notifInfo = document.getElementById('plan-notif-info'); if(notifInfo) notifInfo.style.display='none';
  dpClear();
  ['field-tema','field-data','field-estudo'].forEach(fid=>{
    document.getElementById(fid).classList.remove('has-error');
  });
  ['plan-tema-select','plan-data','plan-versiculo-ref'].forEach(iid=>{
    const el=document.getElementById(iid); if(el) el.classList.remove('error');
  });
  limparVersiculo();
  resetDinSelecao();
  resetQGSelecao();
  resetPergSelecao();
  renderPlanos();
  toastMsg(t('toast.enc.planejado'));
}

function renderPlanos(){
  const c = document.getElementById('planos-lista');
  if(!c) return;

  if(!planos.length){
    c.innerHTML = `
      <div class="empty-state" style="padding:30px 0">
        <div class="empty-icon">📝</div>
        <h4 style="font-family:'Cormorant Garamond',serif;font-size:17px;color:var(--purple2)">
          ${t('plan.vazio')}
        </h4>
        <p style="font-size:13px;color:var(--text-soft);line-height:1.6;margin-top:4px">
          ${t('plan.vazio.sub')}
        </p>
      </div>
    `;
    return;
  }

  const planosOrdenados = [...planos].sort((a, b) => {
  const favA = a.favorito ? 1 : 0;
  const favB = b.favorito ? 1 : 0;

  if(favA !== favB) return favB - favA;
  return (b.id || 0) - (a.id || 0);
});

c.innerHTML = '<div class="plan-saved-list">' + planosOrdenados.map(p => {
    const fav = !!p.favorito;

    return `
      <div 
  class="plan-saved-card ${fav ? 'plan-fav' : ''}" 
  onclick="openPlano(${p.id})" 
  style="cursor:pointer; ${fav ? 'border:1px solid var(--gold); box-shadow:0 4px 12px rgba(201,162,126,0.25);' : ''}">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
          <h5 style="flex:1;font-family:'Cormorant Garamond',serif;font-size:16px;color:var(--purple2)">
            ✦ ${p.tema}
          </h5>

          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
            <button
              type="button"
              onclick="event.stopPropagation(); toggleFavoritoPlano(${p.id})"
              title="${fav ? 'Remover dos favoritos' : 'Salvar nos favoritos'}"
              style="border:none;background:none;cursor:pointer;font-size:18px;line-height:1;padding:0">
              ${fav ? '❤️' : '🤍'}
            </button>

            <span style="font-size:11px;color:var(--text-soft);margin-top:3px">
              ${p.data ? new Date(p.data + 'T12:00:00').toLocaleDateString('pt-BR', { day:'2-digit', month:'short' }) : ''} ${p.hora ? '· ' + p.hora : ''}
            </span>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:4px">
          ${p.dinamica ? `<span style="font-size:12px;color:var(--text)">🎭 ${p.dinamica}</span>` : ''}
          ${p.quebraGelo ? `<span style="font-size:12px;color:var(--text)">🧊 ${p.quebraGelo}</span>` : ''}
          ${p.versiculoRef ? `<span style="font-size:12px;color:var(--text)">📖 ${p.versiculoRef}</span>` : ''}
          ${p.pergunta ? `<span style="font-size:12px;color:var(--text-soft);font-style:italic">💬 ${p.pergunta.slice(0,60)}${p.pergunta.length > 60 ? '…' : ''}</span>` : ''}
          ${p.oracao ? `<span style="font-size:12px;color:var(--text-soft)">🙏 ${p.oracao.slice(0,50)}${p.oracao.length > 50 ? '…' : ''}</span>` : ''}
          ${p.notas ? `<span style="font-size:12px;color:var(--text-soft)">📋 ${p.notas.slice(0,50)}${p.notas.length > 50 ? '…' : ''}</span>` : ''}
        </div>

        <div style="margin-top:8px;display:flex;align-items:center;gap:4px">
          <span style="font-size:11px;color:var(--gold);font-weight:600">
            ${t('plan.modal.ver.detalhes')}
          </span>
        </div>
      </div>
    `;
  }).join('') + '</div>';
}

let planoAtual=null;
function openPlano(id){
  const p=planos.find(x=>x.id===id); if(!p) return;
  planoAtual=p;
  document.getElementById('plano-modal-titulo').textContent=p.tema;
  document.getElementById('plano-modal-data').textContent=p.data?'📅 '+new Date(p.data+'T12:00:00').toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'})+(p.hora?' · ⏰ '+p.hora:''):'';
  const rows = [];

  // 1. Tema
  rows.push(`<div class="plano-modal-row"><h5>${t('plan.modal.tema')}</h5><p>${p.tema}</p></div>`);

  // 2. Dinâmica
  if(p.dinamica) rows.push(`
    <div class="plano-modal-row">
      <h5>${t('plan.modal.dinamica')}</h5>
      <p>${p.dinamica}</p>
      ${p.dinamicaId ? `<button class="plano-modal-row-btn" onclick="previewDinById(${p.dinamicaId},false)">${t('plan.modal.ver.din')}</button>` : ''}
    </div>`);

  // 3. Quebra-Gelo
  if(p.quebraGelo) rows.push(`
    <div class="plano-modal-row">
      <h5>${t('enc.detail.quebraGelo')}</h5>
      <p>${p.quebraGelo}</p>
      ${p.quebraGeloId ? `<button class="plano-modal-row-btn" onclick="openQGDetail(${p.quebraGeloId});closePlanoDirectModal()">${t('plan.modal.ver.qg')}</button>` : ''}
    </div>`);

  // 4. Versículo
  if(p.estudo || p.versiculoRef) rows.push(`
    <div class="plano-modal-row">
      <h5>${t('enc.detail.versiculo')}</h5>
      ${p.versiculoRef ? `<p style="font-weight:700;color:var(--gold);font-size:12px;margin-bottom:4px">${p.versiculoRef}</p>` : ''}
      ${p.estudo && p.estudo !== p.versiculoRef ? `<p style="font-style:italic">${p.estudo}</p>` : ''}
    </div>`);

  // 5. Pergunta para Discussão
  if(p.pergunta) rows.push(`<div class="plano-modal-row"><h5>${t('plan.modal.pergunta')}</h5><p>${p.pergunta}</p></div>`);

  // 6. Oração / Reflexão
  if(p.oracao) rows.push(`<div class="plano-modal-row"><h5>${t('plan.modal.oracao')}</h5><p>${p.oracao}</p></div>`);

  // 7. Anotações
  if(p.notas) rows.push(`<div class="plano-modal-row"><h5>${t('plan.modal.notas')}</h5><p>${p.notas}</p></div>`);

  document.getElementById('plano-modal-body').innerHTML = rows.join('');
  document.getElementById('modal-plano').classList.add('open');
}
function closePlanoModal(e){if(e.target===document.getElementById('modal-plano'))closePlanoDirectModal();}
function closePlanoDirectModal(){document.getElementById('modal-plano').classList.remove('open');planoAtual=null;}
function deletarPlano(){
  if(!planoAtual)return;
  planos=planos.filter(p=>p.id!==planoAtual.id);
  salvarStorage();
  closePlanoDirectModal(); renderPlanos();
  toastMsg(t('toast.enc.removido'));
}
// ── MODAL BLOQUEADO ──