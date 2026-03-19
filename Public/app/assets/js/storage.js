// ── STORAGE LAYER ──
// Camada centralizada para acesso seguro ao localStorage.
// Mantém as mesmas chaves já existentes no projeto.
(function(global){
  'use strict';

  const noopStorage = {
    getItem(){ return null; },
    setItem(){ return false; },
    removeItem(){ return false; },
    clear(){ return false; },
    key(){ return null; },
    get length(){ return 0; }
  };

  function resolveEngine(){
    try{
      if(typeof global.localStorage === 'undefined') return noopStorage;
      const testKey = '__mcf_storage_test__';
      global.localStorage.setItem(testKey, '1');
      global.localStorage.removeItem(testKey);
      return global.localStorage;
    }catch(e){
      return noopStorage;
    }
  }

  const engine = resolveEngine();

  function parseJSON(value, fallback){
    if(value == null || value === '') return fallback;
    try{ return JSON.parse(value); }
    catch(e){ return fallback; }
  }

  const storage = {
    isAvailable(){
      return engine !== noopStorage;
    },

    get(key, fallback = null){
      try{
        const value = engine.getItem(key);
        return value == null ? fallback : value;
      }catch(e){
        return fallback;
      }
    },

    set(key, value){
      try{
        engine.setItem(key, String(value));
        return true;
      }catch(e){
        return false;
      }
    },

    remove(key){
      try{
        engine.removeItem(key);
        return true;
      }catch(e){
        return false;
      }
    },

    clear(){
      try{
        engine.clear();
        return true;
      }catch(e){
        return false;
      }
    },

    key(index){
      try{ return engine.key(index); }
      catch(e){ return null; }
    },

    keys(){
      try{
        const keys = [];
        for(let i = 0; i < engine.length; i++){
          keys.push(engine.key(i));
        }
        return keys.filter(Boolean);
      }catch(e){
        return [];
      }
    },

    getJSON(key, fallback = null){
      return parseJSON(this.get(key), fallback);
    },

    setJSON(key, value){
      try{
        engine.setItem(key, JSON.stringify(value));
        return true;
      }catch(e){
        return false;
      }
    },

    updateJSON(key, updater, fallback = null){
      const current = this.getJSON(key, fallback);
      const next = typeof updater === 'function' ? updater(current) : updater;
      this.setJSON(key, next);
      return next;
    }
  };

  global.storage = storage;
})(window);
