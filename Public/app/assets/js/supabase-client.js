(function () {
  if (!window.SUPABASE_CONFIG) {
    console.error('SUPABASE_CONFIG não encontrado');
    return;
  }

  if (!window.supabase || !window.supabase.createClient) {
    console.error('SDK do Supabase não encontrado');
    return;
  }

  const { url, anonKey } = window.SUPABASE_CONFIG;

  window.supabaseClient = window.supabase.createClient(url, anonKey);
  })();