// ── RUNTIME STORE ──
// Estado central leve, sem quebrar as variáveis globais já existentes.
(function(global){
  'use strict';

  function clone(value){
    if(value == null) return value;
    if(typeof structuredClone === 'function'){
      try{ return structuredClone(value); }
      catch(e){}
    }
    if(Array.isArray(value)) return value.map(clone);
    if(typeof value === 'object'){
      try{ return JSON.parse(JSON.stringify(value)); }
      catch(e){ return value; }
    }
    return value;
  }

  const state = {
    usuarioAtual: null,
    currentLang: 'pt',
    favorites: [],
    planos: [],
    historico: [],
    historicoEnc: [],
    conjuntosGerados: [],
    conjuntosEncontros: [],
    encontrosGeradosSessao: [],
    geradasSessao: [],
    currentGeradaId: null,
    currentConjunto: null,
    planoDinId: null,
    planoQGId: null,
    planoPergId: null,
    theme: 'light'
  };

  const listeners = new Map();

  function notify(key, value){
    const subs = listeners.get(key);
    if(!subs) return;
    subs.forEach(fn => {
      try{ fn(clone(value), clone(state)); }
      catch(e){ console.warn('store subscriber error', e); }
    });
  }

  const appStore = {
    get(key, fallback = null){
      return Object.prototype.hasOwnProperty.call(state, key) ? state[key] : fallback;
    },

    set(key, value){
      state[key] = value;
      notify(key, value);
      return value;
    },

    syncMany(payload = {}){
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value;
        notify(key, value);
      });
      return payload;
    },

    update(key, updater, fallback = null){
      const current = this.get(key, fallback);
      const next = typeof updater === 'function' ? updater(current) : updater;
      return this.set(key, next);
    },

    remove(key){
      if(Object.prototype.hasOwnProperty.call(state, key)){
        delete state[key];
        notify(key, undefined);
      }
    },

    snapshot(){
      return clone(state);
    },

    subscribe(key, fn){
      if(!listeners.has(key)) listeners.set(key, new Set());
      const bucket = listeners.get(key);
      bucket.add(fn);
      return () => bucket.delete(fn);
    }
  };

  global.appStore = appStore;
})(window);


// ── FAVORITES API (SUPABASE) ──
(function(global){
  'use strict';

  async function getAuthenticatedUserId(){
    if (!global.supabaseClient) {
      console.error('supabaseClient não encontrado em window');
      return null;
    }

    const { data, error } = await global.supabaseClient.auth.getUser();
    if (error) {
      console.error('Erro ao obter usuário autenticado:', error);
      return null;
    }

    return data?.user?.id || null;
  }

  async function listRemoteFavorites(itemType = null){
    const userId = await getAuthenticatedUserId();
    if (!userId || !global.supabaseClient) return [];

    let query = global.supabaseClient
      .from('favorites')
      .select('id, user_id, item_type, item_id, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (itemType) {
      query = query.eq('item_type', itemType);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Erro ao listar favoritos remotos:', error);
      return [];
    }

    return data || [];
  }

  async function addRemoteFavorite(itemType, itemId){
    const userId = await getAuthenticatedUserId();
    if (!userId || !global.supabaseClient) {
      throw new Error('Usuário não autenticado');
    }

    const { data, error } = await global.supabaseClient
      .from('favorites')
      .insert({
        user_id: userId,
        item_type: itemType,
        item_id: String(itemId)
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async function removeRemoteFavorite(itemType, itemId){
    const userId = await getAuthenticatedUserId();
    if (!userId || !global.supabaseClient) {
      throw new Error('Usuário não autenticado');
    }

    const { error } = await global.supabaseClient
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('item_type', itemType)
      .eq('item_id', String(itemId));

    if (error) throw error;
    return true;
  }

  global.favoriteStore = {
    getAuthenticatedUserId,
    listRemoteFavorites,
    addRemoteFavorite,
    removeRemoteFavorite
  };
})(window);