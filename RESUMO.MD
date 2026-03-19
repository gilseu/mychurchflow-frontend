# EXECUTOR DE PATCH NOTES E COMPRESSÃO DE CONTEXTO

Você deve executar rigorosamente as etapas abaixo, em sequência, sem pular, sem resumir, sem encerrar antecipadamente.

## REGRAS GERAIS

1. Leia e aplique o arquivo `PATCHNOTERULES.MD` antes de gerar o PATCHNOTES.
2. Leia e aplique também todos os arquivos `RULES~.md` da fonte antes de gerar a compressão de contexto.
3. Não encerre após a etapa 1.
4. Não substitua a etapa 2 por uma mensagem curta.
5. A frase `ATUALIZAÇÃO DE CONTEXTO E REGRAS CONCLUIDO.` só pode ser emitida **após**:

   * o PATCHNOTES ter sido gerado;
   * a compressão JSON ter sido gerada;
   * o arquivo JSON ter sido disponibilizado para download.
6. Se houver limitação de ambiente para criar arquivo baixável, ainda assim gere o conteúdo completo da compressão JSON e informe claramente que a limitação é do ambiente, não da instrução.
7. Nunca omita conteúdo por economia de tokens. Priorize completar todas as etapas.

---

## ORDEM DE EXECUÇÃO

### ETAPA 1 — PATCHNOTES

Crie um PATCHNOTES com base nas atualizações de hoje, usando como referência obrigatória o arquivo `PATCHNOTERULES.MD`.

### FORMATO DE SAÍDA DA ETAPA 1

Entregue o PATCHNOTES no chat dentro de um bloco de código `json`.

Estrutura esperada:

```json
{
  "patchnotes_version": "string",
  "date": "YYYY-MM-DD",
  "summary": "string",
  "changes": [
    {
      "type": "added|changed|fixed|removed|security|docs|refactor",
      "title": "string",
      "description": "string"
    }
  ],
  "notes": "string"
}
```

---

### ETAPA 2 — COMPRESSÃO JSON DE CONTEXTO

Crie uma compressão JSON completa, sem perdas relevantes, de toda a conversa atual.

Essa compressão deve capturar:

* Todo o contexto e desenvolvimento de todos os tópicos discutidos
* Relacionamentos e dinâmicas estabelecidos
* Entendimentos explícitos e implícitos
* Estado atual da conversa
* Insights em nível meta
* Permissões de tom e abordagem
* Elementos não resolvidos
* A versão do último PATCHNOTES gerado na etapa 1
* Uma instrução explícita para o novo agente de IA:

  * ler todos os arquivos `RULES~.md` da fonte;
  * aplicar essas regras em tudo que fizer a partir da compressão;
  * após concluir a leitura do contexto e das regras, não enviar nenhum conteúdo adicional além da frase:
    `ATUALIZAÇÃO DE CONTEXTO E REGRAS CONCLUIDO.`

### REQUISITOS DA COMPRESSÃO

1. O JSON deve ser detalhado e estruturado.
2. O JSON não deve ser resumido excessivamente.
3. O JSON deve preservar contexto operacional, intenção, estado e continuidade.
4. O JSON deve ser salvo em arquivo baixável com nome no formato:

`context-compression-YYYY-MM-DD-HH-mm-ss.json`

5. Não exiba o JSON completo no chat, exceto se o ambiente não permitir criação de arquivo.

### ESTRUTURA MÍNIMA DO JSON

```json
{
  "schema_version": "1.0.0",
  "generated_at": "ISO-8601",
  "source": {
    "conversation_type": "chat",
    "language": "pt-BR"
  },
  "patchnotes": {
    "latest_version": "string",
    "date": "YYYY-MM-DD"
  },
  "conversation_state": {
    "current_goal": "string",
    "current_status": "string",
    "open_loops": [],
    "resolved_items": []
  },
  "context": {
    "topics": [],
    "decisions": [],
    "constraints": [],
    "implicit_understandings": [],
    "explicit_instructions": [],
    "tone_permissions": [],
    "relationship_dynamics": [],
    "meta_insights": []
  },
  "handoff_instructions": {
    "must_read_rules_files": true,
    "rules_file_pattern": "RULES~.md",
    "apply_rules_to_all_future_actions": true,
    "post_read_response": "ATUALIZAÇÃO DE CONTEXTO E REGRAS CONCLUIDO.",
    "post_read_response_only": true
  }
}
```

---

### ETAPA 3 — ENTREGA DO ARQUIVO

Após gerar o arquivo JSON, disponibilize-o para download.

### FORMATO DE SAÍDA DA ETAPA 3

No chat, informe somente:

1. o nome do arquivo gerado;
2. o link ou forma de download do arquivo.

---

## SAÍDA FINAL OBRIGATÓRIA

A resposta final completa deve seguir exatamente esta ordem:

1. PATCHNOTES em bloco `json`;
2. Confirmação objetiva de que a compressão JSON foi criada;
3. Entrega do arquivo JSON para download;
4. Somente depois disso, a frase exata:

`ATUALIZAÇÃO DE CONTEXTO E REGRAS CONCLUIDO.`

## PROIBIÇÕES

* Não parar após a etapa 1.
* Não substituir a etapa 2 por um resumo curto.
* Não emitir a frase final antes da entrega do arquivo.
* Não omitir a versão do último PATCHNOTES dentro da compressão.
* Não ignorar os arquivos `RULES~.md`.
