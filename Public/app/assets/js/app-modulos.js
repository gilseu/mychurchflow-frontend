// ── DATA ──
const dinamicas = [
  {id:1,titulo:'O Escudo da Fé',categoria:'Fé',tempo:'20 min',materiais:'Escudo de papelão e papéis',objetivo:'Compreender que a fé nos protege espiritualmente',passos:['Prepare um escudo de papelão para o grupo','Cada mulher escreve um desafio que enfrenta num papel','Cola o papel no escudo simbolizando que a fé a protege','Compartilhe com o grupo como a fé tem sido seu escudo','Encerre com oração pedindo proteção de Deus'],aplicacao:'Deus é nosso escudo em tempos difíceis. A fé não elimina os desafios, mas nos protege deles. (Ef 6:16)'},
  {id:2,titulo:'A Teia da Comunhão',categoria:'Comunhão',tempo:'20 min',materiais:'Novelo de lã',objetivo:'Mostrar a conexão entre as participantes',passos:['Forme um círculo com todas as participantes','A primeira segura a ponta do novelo e fala algo sobre si','Passa o novelo para outra enquanto mantém o fio','Cada uma segura o fio e fala algo sobre si','Ao final todas seguram o fio formando uma teia'],aplicacao:'Assim como a teia, estamos conectadas em Cristo. Somos parte de um mesmo corpo. (1Co 12:12)'},
  {id:3,titulo:'Caixa de Gratidão',categoria:'Gratidão',tempo:'15 min',materiais:'Caixa e papéis',objetivo:'Estimular gratidão diária',passos:['Coloque uma caixa no centro do grupo','Distribua papéis e canetas para todas','Cada participante escreve algo pelo qual é grata','Dobra o papel e coloca na caixa','A líder lê alguns em voz alta para o grupo'],aplicacao:'A gratidão muda nossa perspectiva e nos aproxima de Deus. Em tudo dai graças. (1Ts 5:18)'},
  {id:4,titulo:'Versículo no Coração',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar versículos importantes',passos:['Peça que cada participante abra sua Bíblia','Cada uma escolhe um versículo marcante para ela','Compartilha com o grupo o versículo e o porquê','O grupo pode fazer perguntas','Encerrem com uma oração baseada nos versículos'],aplicacao:'A Palavra ilumina nossos caminhos e fortalece nossa fé. (Sl 119:105)'},
  {id:5,titulo:'Histórias de Fé',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar testemunhos de fé',passos:['Abra em oração pedindo coragem para compartilhar','Cada mulher conta um momento em que viu Deus agir','Pode ser uma resposta de oração ou superação','O grupo ouve com atenção e respeito','Encerre celebrando as histórias compartilhadas'],aplicacao:'Testemunhos fortalecem a fé de toda a comunidade. A fé é certeza do que não se vê. (Hb 11:1)'},
  {id:6,titulo:'Espelho da Identidade',categoria:'Identidade',tempo:'20 min',materiais:'Espelho',objetivo:'Refletir sobre a identidade em Cristo',passos:['Coloque um espelho no centro do grupo','Cada mulher olha no espelho e declara uma verdade bíblica sobre si','Ex: "Sou filha de Deus", "Sou amada", "Sou nova criatura"','O grupo confirma com um amém ou aplauso','Encerre orando pela identidade de cada uma'],aplicacao:'Nossa identidade está em Cristo, não nas circunstâncias. (2Co 5:17)'},
  {id:7,titulo:'Palavra da Semana',categoria:'Reflexão',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar sentimentos e experiências recentes',passos:['Peça que cada mulher pense em sua semana','Cada uma define a semana em uma única palavra','Compartilha a palavra e explica brevemente o porquê','O grupo pode responder com encorajamento','Encerre orando pelas situações compartilhadas'],aplicacao:'Deus está presente em todas as nossas semanas — nas fáceis e nas difíceis. (Sl 46:1)'},
  {id:8,titulo:'Promessas de Deus',categoria:'Fé',tempo:'20 min',materiais:'Bíblia',objetivo:'Relembrar e celebrar as promessas bíblicas',passos:['Peça que cada participante busque uma promessa de Deus na Bíblia','Cada uma compartilha a promessa escolhida','Conta como essa promessa tem impactado sua vida','O grupo pode complementar com experiências similares','Encerre declarando as promessas juntas em oração'],aplicacao:'Deus sempre cumpre Suas promessas. Ele não é homem para mentir. (Nm 23:19)'},
  {id:9,titulo:'Cartas de Encorajamento',categoria:'Amor',tempo:'25 min',materiais:'Papel e caneta',objetivo:'Fortalecer e encorajar umas às outras',passos:['Distribua papel e caneta para cada participante','Sorteie nomes para cada uma escrever','Cada uma escreve uma mensagem de encorajamento','Entregue as cartas para as destinatárias','Dê um tempo para ler e compartilhar reações'],aplicacao:'Palavras de encorajamento podem mudar o dia e a vida de alguém. (1Ts 5:11)'},
  {id:10,titulo:'Oração em Duplas',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Fortalecer a comunhão espiritual através da oração',passos:['Divida o grupo em duplas','Cada dupla compartilha um pedido de oração','Oram uma pela outra em voz baixa','Depois compartilham brevemente com o grupo','Encerre com oração coletiva'],aplicacao:'Orar juntas cria conexão espiritual profunda. Onde dois ou três estiverem reunidos... (Mt 18:20)'},
  {id:11,titulo:'Versículo da Vida',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar versículos que marcaram a caminhada',passos:['Peça que cada uma pense no versículo mais importante de sua vida','Cada mulher compartilha o versículo e a história por trás dele','O grupo ouve com atenção','Podem fazer perguntas sobre como Deus usou esse versículo','Encerre em oração baseada nos versículos compartilhados'],aplicacao:'A Palavra de Deus fortalece, guia e transforma vidas. (Js 1:9)'},
  {id:12,titulo:'Gratidão em Grupo',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Estimular e compartilhar gratidão',passos:['Sente o grupo em círculo','Cada mulher diz uma coisa pela qual agradece a Deus hoje','Pode ser simples ou profundo','O grupo responde com "amém" ou aplauso','Continue até todas terem participado'],aplicacao:'A gratidão coletiva fortalece o coração de toda a comunidade. (Sl 136:1)'},
  {id:13,titulo:'Meu Maior Desafio',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar desafios e encontrar apoio',passos:['Crie um ambiente de confiança e segurança','Cada participante compartilha seu maior desafio atual','O grupo ouve sem julgamento','Podem oferecer palavras de apoio e encorajamento','Encerre orando especificamente por cada desafio'],aplicacao:'Deus nos sustenta nos desafios. Lança o teu fardo sobre o Senhor. (Sl 55:22)'},
  {id:14,titulo:'Aprendizado Recente',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar crescimento espiritual recente',passos:['Peça que cada uma reflita sobre a semana ou mês','Cada mulher compartilha algo que Deus a ensinou','Pode ser um ensinamento bíblico ou lição de vida','O grupo pode se identificar ou complementar','Encerre agradecendo a Deus pelo crescimento'],aplicacao:'Deus nos ensina diariamente através de Sua Palavra e das experiências. (Pv 3:5)'},
  {id:15,titulo:'Quem Me Inspirou',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Valorizar pessoas que impactaram a fé',passos:['Peça que cada uma pense em alguém que inspirou sua fé','Cada mulher apresenta essa pessoa e conta a história','Como essa pessoa impactou sua caminhada com Deus','O grupo celebra essas histórias de influência','Encerre orando pelas pessoas mencionadas'],aplicacao:'Deus usa pessoas para nos inspirar e fortalecer. (Hb 10:24)'},
  {id:16,titulo:'Minha Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir e compartilhar esperança futura',passos:['Peça que cada uma pense em suas esperanças','Cada mulher compartilha uma esperança futura','Pode ser pessoal, familiar ou espiritual','O grupo celebra e ora pelas esperanças','Encerre declarando que Deus tem planos bons'],aplicacao:'Deus tem planos de prosperar e não de prejudicar, de dar esperança e um futuro. (Jr 29:11)'},
  {id:17,titulo:'Minha Maior Alegria',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar e celebrar alegrias',passos:['Crie um clima de celebração e alegria','Cada mulher compartilha algo que trouxe grande alegria','Pode ser recente ou um momento especial da vida','O grupo celebra junto com aplausos ou amém','Encerre em louvor e ação de graças'],aplicacao:'A alegria do Senhor nos fortalece e transborda para os que estão ao nosso redor. (Sl 16:11)'},
  {id:18,titulo:'Uma Oração Respondida',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar respostas de oração e fortalecer a fé',passos:['Peça que cada uma pense em uma oração respondida','Cada mulher compartilha a oração e como Deus respondeu','Pode ser diferente do que esperava mas ainda assim uma resposta','O grupo celebra e agradece a Deus','Encerre em oração coletiva de gratidão'],aplicacao:'Deus ouve e responde nossas orações — às vezes de formas surpreendentes. (Fp 4:6)'},
  {id:19,titulo:'Meu Lugar de Paz',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar momentos e lugares de paz espiritual',passos:['Peça que cada uma pense em seu lugar de paz','Cada mulher descreve onde ou quando sente paz','Pode ser um lugar físico ou um momento espiritual','O grupo compartilha como encontra paz em Deus','Encerre com um momento de silêncio e oração'],aplicacao:'Deus nos dá uma paz que excede todo entendimento. (Jo 14:27)'},
  {id:20,titulo:'Minha Música Favorita',categoria:'Adoração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar músicas que tocam a alma e unem o grupo',passos:['Peça que cada uma pense em sua música cristã favorita','Cada mulher fala o título e por que essa música é especial','Pode cantar um trecho se quiser','O grupo pode se identificar com as músicas','Encerre cantando juntas uma música conhecida por todas'],aplicacao:'A adoração une corações e nos aproxima de Deus e umas das outras. (Sl 100:1)'},
  {id:21,titulo:'Algo que Aprendi com Deus',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar sabedoria recebida de Deus',passos:['Peça que cada uma reflita sobre o que Deus tem ensinado','Cada mulher conta algo que Deus a ensinou recentemente','Pode ser através da Bíblia, oração ou circunstância','O grupo ouve e pode acrescentar experiências similares','Encerre agradecendo a Deus pela sabedoria'],aplicacao:'Deus nos dá sabedoria generosamente quando pedimos com fé. (Tg 1:5)'},
  {id:22,titulo:'Uma Lição de Vida',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar lições valiosas aprendidas',passos:['Peça que cada uma pense em uma lição importante da vida','Cada mulher compartilha a lição e como aprendeu','Pode ser através de dificuldade, alegria ou palavra de Deus','O grupo ouve e aprende com as experiências','Encerre em oração pedindo sabedoria para aplicar as lições'],aplicacao:'Aprendemos com as experiências e Deus as usa para nos moldar. (Pv 4:7)'},
  {id:23,titulo:'Uma Promessa para Hoje',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Fortalecer a fé com promessas bíblicas',passos:['Peça que cada uma busque uma promessa para o dia de hoje','Cada mulher compartilha a promessa e porque escolheu','Como essa promessa se aplica à sua situação atual','O grupo declara as promessas juntas','Encerre em oração baseada nas promessas'],aplicacao:'Deus está conosco. Não temas, porque eu sou o teu Deus. (Is 41:10)'},
  {id:24,titulo:'Algo que Me Motiva',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar motivações espirituais',passos:['Peça que cada uma pense no que a motiva a seguir em frente','Cada mulher compartilha sua motivação espiritual','Pode ser um versículo, uma pessoa ou um propósito','O grupo celebra as motivações compartilhadas','Encerre orando pelo propósito de cada uma'],aplicacao:'Tudo o que fizermos, façamos de todo o coração como para o Senhor. (Cl 3:23)'},
  {id:25,titulo:'Um Sonho no Coração',categoria:'Esperança',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar sonhos e confiar a Deus',passos:['Crie um ambiente de confiança e segurança','Cada mulher compartilha um sonho que carrega no coração','Pode ser pessoal, ministerial ou familiar','O grupo ouve com respeito e encorajamento','Encerre orando pelos sonhos de cada uma'],aplicacao:'Deus cuida dos nossos sonhos quando os entregamos a Ele. (Sl 37:4)'},
  {id:26,titulo:'Minha Jornada de Fé',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar a caminhada espiritual',passos:['Peça que cada uma pense em sua jornada de fé','Cada mulher resume sua caminhada espiritual','Os momentos altos e baixos que moldaram sua fé','O grupo ouve com atenção e gratidão','Encerre celebrando a fidelidade de Deus em cada jornada'],aplicacao:'Combati o bom combate, completei a corrida, guardei a fé. (2Tm 4:7)'},
  {id:27,titulo:'Algo que Me Aproxima de Deus',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre práticas que fortalecem a espiritualidade',passos:['Peça que cada uma pense no que a aproxima de Deus','Cada mulher compartilha uma prática ou hábito espiritual','Pode ser oração, jejum, louvor, natureza ou Bíblia','O grupo se inspira e pode adotar novas práticas','Encerre com um momento de oração e silêncio'],aplicacao:'Aproximai-vos de Deus e Ele se aproximará de vós. (Tg 4:8)'},
  {id:28,titulo:'Minha Palavra para Hoje',categoria:'Palavra',tempo:'10 min',materiais:'Bíblia',objetivo:'Conectar com a Palavra de Deus para o dia',passos:['Peça que cada uma abra a Bíblia ou pense em um versículo','Cada mulher compartilha uma palavra ou versículo para o dia','Explica brevemente o porquê dessa escolha','O grupo recebe a palavra com atenção','Encerre declarando a Palavra juntas'],aplicacao:'A Palavra de Deus nos guia, fortalece e ilumina cada dia. (Sl 119:11)'},
  {id:29,titulo:'Algo que Quero Melhorar',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre áreas de crescimento espiritual',passos:['Crie um ambiente de abertura e sem julgamento','Cada mulher compartilha uma área que quer crescer','Pode ser paciência, fé, oração, generosidade, etc','O grupo pode dar dicas e se comprometer a orar','Encerre orando pelo crescimento de cada uma'],aplicacao:'Deus que começou a boa obra em você irá completá-la. (Fp 1:6)'},
  {id:30,titulo:'Uma Virtude Importante',categoria:'Caráter',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre os frutos do Espírito',passos:['Apresente os frutos do Espírito de Gálatas 5:22-23','Cada mulher escolhe a virtude mais importante para ela agora','Explica por que escolheu e como quer desenvolvê-la','O grupo pode compartilhar como cultiva essa virtude','Encerre orando pelos frutos do Espírito em cada uma'],aplicacao:'Os frutos do Espírito mostram o quanto Cristo está vivo em nós. (Gl 5:22)'},
  {id:31,titulo:'Uma Memória Especial',categoria:'Gratidão',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar memórias especiais com gratidão',passos:['Peça que cada uma pense em uma memória especial','Cada mulher compartilha a memória e o que ela significa','Pode ser familiar, espiritual ou de amizade','O grupo celebra e agradece por essas memórias','Encerre em oração de gratidão pelas histórias de vida'],aplicacao:'Deus age em todas as estações da vida e cada memória é preciosa. (Ec 3:1)'},
  {id:32,titulo:'Algo que Me Desafia',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar desafios e buscar encorajamento',passos:['Crie ambiente seguro e de confiança','Cada mulher compartilha algo que a desafia hoje','O grupo ouve com empatia e sem julgamento','Podem oferecer palavras de encorajamento bíblico','Encerre orando especificamente por cada desafio'],aplicacao:'Seja forte e corajosa. Deus está contigo por onde quer que fores. (Js 1:9)'},
  {id:33,titulo:'Meu Versículo Favorito',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar versículos que trazem conforto e força',passos:['Peça que cada uma pense em seu versículo favorito','Cada mulher lê o versículo em voz alta','Conta por que esse versículo é especial para ela','O grupo pode fazer perguntas sobre a história','Encerre com todos os versículos formando uma oração'],aplicacao:'A Palavra de Deus traz conforto, esperança e força para o dia a dia. (Sl 23:1)'},
  {id:34,titulo:'Algo que Me Fortalece',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar fontes de força espiritual',passos:['Peça que cada uma reflita sobre o que a fortalece','Cada mulher compartilha o que renova suas forças','Pode ser oração, Palavra, adoração, comunhão','O grupo aprende e se inspira com as respostas','Encerre declarando que Deus renova as forças'],aplicacao:'Os que esperam no Senhor renovam as suas forças. (Is 40:31)'},
  {id:35,titulo:'Uma Experiência com Deus',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências espirituais marcantes',passos:['Crie clima de reverência e abertura','Cada mulher relata uma experiência espiritual marcante','Pode ser em oração, na Bíblia ou numa circunstância','O grupo ouve com respeito e gratidão','Encerre agradecendo a Deus pelas experiências'],aplicacao:'Provem e vejam que o Senhor é bom. Cada experiência com Deus é preciosa. (Sl 34:8)'},
  {id:36,titulo:'Algo que Quero Agradecer',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Praticar gratidão coletiva',passos:['Abra com um momento de silêncio e reflexão','Cada mulher compartilha um motivo de gratidão a Deus','Pode ser simples ou profundo, recente ou antigo','O grupo responde com "amém" ou "glória a Deus"','Encerre em oração de ação de graças coletiva'],aplicacao:'A gratidão honra a Deus e abre portas para mais bênçãos. (Sl 107:1)'},
  {id:37,titulo:'Uma Palavra de Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar esperança e encorajar umas às outras',passos:['Peça que cada uma pense em uma palavra de esperança','Cada mulher compartilha sua palavra e por quê','Como essa esperança a sustenta no dia a dia','O grupo recebe as palavras com gratidão','Encerre declarando que Deus é fiel e cumprirá o que prometeu'],aplicacao:'Mantenhamos firme a esperança que professamos, porque fiel é o que prometeu. (Hb 10:23)'},
  {id:38,titulo:'Uma História de Superação',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar histórias de superação e fortalecer a fé',passos:['Crie um clima de celebração e gratidão','Cada mulher compartilha uma história de superação','Como Deus a ajudou a superar uma dificuldade','O grupo celebra com aplausos e amém','Encerre em oração agradecendo pelas superações'],aplicacao:'Tudo posso naquele que me fortalece. Deus nos capacita para superar. (Fp 4:13)'},
  {id:39,titulo:'Algo que Aprendi com a Bíblia',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar ensinamentos bíblicos recentes',passos:['Peça que cada uma pense em algo que aprendeu na Bíblia','Cada mulher compartilha um ensinamento bíblico recente','Como esse ensinamento impactou sua vida','O grupo pode perguntar e aprofundar','Encerre em oração pedindo para aplicar os ensinamentos'],aplicacao:'A Palavra de Deus ilumina, ensina e transforma nossa vida diária. (Sl 119:105)'},
  {id:40,titulo:'Minha Motivação Espiritual',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar o que motiva a caminhada espiritual',passos:['Peça que cada uma reflita sobre sua motivação maior','Cada mulher compartilha o que a motiva espiritualmente','Por que continua seguindo a Deus mesmo nas dificuldades','O grupo celebra e fortalece as motivações','Encerre declarando o propósito de viver para Deus'],aplicacao:'E tudo o que fizerdes, fazei-o de todo o coração, como ao Senhor. (Cl 3:17)'},
  {id:41,titulo:'Compartilhando Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Reforçar esperança em Deus',passos:['Abra em oração pedindo que Deus encha o coração de esperança','Cada mulher compartilha algo que lhe traz esperança','Pode ser uma promessa, uma experiência ou uma certeza','O grupo celebra cada esperança compartilhada','Encerre declarando que Deus tem planos de paz para todas'],aplicacao:'Deus tem planos de paz para nós, de nos dar esperança e um futuro. (Jr 29:11)'},
  {id:42,titulo:'Testemunho da Semana',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências recentes com Deus',passos:['Peça que cada uma pense no que Deus fez esta semana','Cada participante conta algo que Deus fez recentemente','Pode ser pequeno ou grande, interno ou externo','O grupo celebra e agradece pelos testemunhos','Encerre em oração de gratidão coletiva'],aplicacao:'Testemunhos fortalecem a fé coletiva e glorificam a Deus. (Sl 66:16)'},
  {id:43,titulo:'Versículo que Me Sustenta',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Fortalecer a fé em momentos difíceis',passos:['Peça que cada uma pense no versículo que a sustenta nas dificuldades','Cada mulher compartilha esse versículo','Conta como ele a ajudou em algum momento difícil','O grupo ora esse versículo sobre cada uma','Encerre declarando que Deus fortalece e sustenta'],aplicacao:'Não temas, porque eu sou o teu Deus. Eu te fortaleço e te ajudo. (Is 41:10)'},
  {id:44,titulo:'Minha Maior Gratidão',categoria:'Gratidão',tempo:'15 min',materiais:'Nenhum',objetivo:'Estimular gratidão profunda',passos:['Peça que cada uma pense na maior gratidão de sua vida','Cada mulher compartilha pelo que é mais grata a Deus','Pode ser saúde, família, salvação, ou momento específico','O grupo recebe com "amém" e celebração','Encerre em oração de ação de graças profunda'],aplicacao:'A gratidão honra a Deus e transforma nosso coração. Dai graças ao Senhor. (Sl 107:1)'},
  {id:45,titulo:'Uma Palavra de Deus',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar direção espiritual recebida',passos:['Peça que cada uma pense em uma palavra que Deus falou ao seu coração','Cada mulher compartilha essa palavra bíblica','Como ela recebeu e o que significa para ela','O grupo ora essa palavra sobre cada uma','Encerre declarando que a Palavra guia os passos'],aplicacao:'A Palavra de Deus é lâmpada que ilumina nosso caminho. (Sl 119:105)'},
  {id:46,titulo:'Algo que Aprendi com um Desafio',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre crescimento em meio às dificuldades',passos:['Crie ambiente seguro e acolhedor','Cada mulher compartilha um desafio e o aprendizado dele','Como Deus a transformou através dessa dificuldade','O grupo ouve com empatia e celebra o crescimento','Encerre orando pelas provações que ainda estão em andamento'],aplicacao:'As provações produzem perseverança e nos tornam mais parecidas com Cristo. (Tg 1:3)'},
  {id:47,titulo:'Oração de Intercessão',categoria:'Oração',tempo:'25 min',materiais:'Nenhum',objetivo:'Fortalecer o ministério de intercessão',passos:['Divida o grupo em duplas ou trios','Cada mulher compartilha um pedido de oração pessoal','As outras oram especificamente por esse pedido','Trocam de papel para que todas sejam oradas','Encerre com oração coletiva pelos pedidos'],aplicacao:'A oração une o grupo e muda vidas. Interceder é o maior ato de amor. (1Tm 2:1)'},
  {id:48,titulo:'Minha Fonte de Paz',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre paz espiritual profunda',passos:['Abra com um momento de silêncio e respiração','Cada participante compartilha o que lhe traz paz','Pode ser oração, natureza, louvor, Palavra ou presença de Deus','O grupo aprende novas fontes de paz','Encerre com momento de silêncio e gratidão'],aplicacao:'A paz de Cristo guarda nossos corações e mentes. (Jo 14:27)'},
  {id:49,titulo:'Versículo para Hoje',categoria:'Palavra',tempo:'10 min',materiais:'Bíblia',objetivo:'Começar o encontro conectadas com a Palavra',passos:['Peça que cada uma leia um versículo que marcou seu dia','Cada participante lê o versículo em voz alta','Explica brevemente porque ele impactou o dia','O grupo recebe cada Palavra com atenção','Encerre declarando que a Palavra renova o espírito'],aplicacao:'Este é o dia que o Senhor fez. A Palavra renova nosso espírito cada manhã. (Sl 118:24)'},
  {id:50,titulo:'História de Superação',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar superações e fortalecer a fé',passos:['Crie clima de celebração e gratidão','Cada mulher conta um desafio que superou com ajuda de Deus','Como foi o processo e o que aprendeu','O grupo celebra com aplausos e amém','Encerre em oração agradecendo pelas superações'],aplicacao:'Tudo posso naquele que me fortalece. Deus nos capacita para superar qualquer coisa. (Fp 4:13)'},
  {id:51,titulo:'Minha Promessa Favorita',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas preciosas',passos:['Peça que cada uma busque sua promessa favorita na Bíblia','Cada mulher lê e explica por que essa promessa é especial','Como ela se apoia nessa promessa no dia a dia','O grupo pode compartilhar experiências com a mesma promessa','Encerre declarando as promessas juntas'],aplicacao:'As promessas de Deus são verdadeiras e preciosas, dadas por Sua graça. (2Pe 1:4)'},
  {id:52,titulo:'Algo que Me Aproxima de Deus (2)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre práticas espirituais transformadoras',passos:['Peça que cada uma pense no que mais a aproxima de Deus','Cada participante compartilha essa prática espiritual','Como ela a transforma e fortalece a cada dia','O grupo se inspira e pode adotar novas práticas','Encerre com momento de oração e adoração'],aplicacao:'Aproximai-vos de Deus e Ele se aproximará de vós. (Tg 4:8)'},
  {id:53,titulo:'Memória Espiritual',categoria:'Gratidão',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar memórias espirituais marcantes',passos:['Peça que cada uma pense em uma memória espiritual especial','Cada mulher compartilha esse momento marcante','Como aquele momento impactou sua fé','O grupo celebra e agradece por essas memórias','Encerre em oração de gratidão pelas estações da vida'],aplicacao:'Deus age em todas as estações da nossa vida. Cada memória é preciosa. (Ec 3:1)'},
  {id:54,titulo:'Uma Virtude que Quero Desenvolver',categoria:'Caráter',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre crescimento no caráter cristão',passos:['Apresente os frutos do Espírito de Gálatas 5','Cada mulher fala a virtude que mais deseja desenvolver','Por que escolheu essa e como pretende cultivá-la','O grupo ora especificamente pelo desenvolvimento dessa virtude','Encerre comprometendo-se a cultivar os frutos do Espírito'],aplicacao:'O Espírito Santo produz frutos em nós quando permanecemos em Cristo. (Gl 5:22)'},
  {id:55,titulo:'Meu Versículo de Força',categoria:'Força',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar versículos que renovam as forças',passos:['Peça que cada uma pense no versículo que a fortalece','Cada mulher compartilha esse versículo especial','Como ele a ajuda nos momentos de cansaço e fraqueza','O grupo declara os versículos uns sobre os outros','Encerre em oração pedindo renovação de forças'],aplicacao:'Os que esperam no Senhor renovam as suas forças, sobem com asas como águias. (Is 40:31)'},
  {id:56,titulo:'Minha Jornada com Deus',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar a caminhada pessoal com Deus',passos:['Peça que cada uma resuma sua jornada espiritual','Cada mulher fala sobre como começou a caminhar com Deus','Os momentos que marcaram essa jornada','O grupo ouve com atenção e gratidão','Encerre celebrando que o Senhor é nosso pastor em toda a jornada'],aplicacao:'O Senhor é o meu pastor e nada me faltará. Ele nos guia por toda a vida. (Sl 23:1)'},
  {id:57,titulo:'Uma Palavra de Encorajamento',categoria:'Amor',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer umas às outras com palavras de vida',passos:['Peça que cada uma pense em alguém que precisa de encorajamento','Ou que fale uma palavra de encorajamento para a pessoa ao lado','Use uma promessa bíblica como base','Olhe nos olhos ao entregar a palavra','O grupo celebra as palavras trocadas'],aplicacao:'O encorajamento fortalece o corpo de Cristo e reflete o amor de Deus. (1Ts 5:11)'},
  {id:58,titulo:'Algo que Deus Me Ensinou',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar aprendizados recebidos de Deus',passos:['Peça que cada uma reflita sobre o que Deus a ensinou recentemente','Cada mulher compartilha uma lição aprendida','Pode ser através da Palavra, oração, circunstância ou pessoa','O grupo aprende junto com as experiências compartilhadas','Encerre agradecendo a Deus que ensina Seus filhos'],aplicacao:'Confiar em Deus de todo o coração e não depender do próprio entendimento traz sabedoria. (Pv 3:5)'},
  {id:59,titulo:'Minha Motivação na Fé',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre propósito e motivação espiritual',passos:['Peça que cada uma pense no que a motiva na fé','Cada mulher fala o que a motiva a continuar seguindo a Deus','O que não a deixa desistir mesmo nas dificuldades','O grupo celebra as motivações e se inspira mutuamente','Encerre declarando que servimos a Deus em tudo que fazemos'],aplicacao:'Tudo o que fizerdes, fazei de todo o coração como ao Senhor. (Cl 3:23)'},
  {id:60,titulo:'Algo que Me Traz Alegria',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar e celebrar alegrias do cotidiano',passos:['Crie um clima leve e de celebração','Cada mulher compartilha algo simples que lhe traz alegria','Pode ser a natureza, família, ministério ou presença de Deus','O grupo celebra juntas cada alegria','Encerre em louvor e ação de graças pela alegria do Senhor'],aplicacao:'Na presença de Deus há plenitude de alegria. A alegria do Senhor é nossa força. (Sl 16:11)'},
  {id:61,titulo:'Um Sonho que Deus Colocou em Mim',categoria:'Propósito',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar sonhos e propósitos dados por Deus',passos:['Crie ambiente de confiança e abertura','Cada participante compartilha um sonho que acredita ser de Deus','Como recebeu esse sonho e o que está fazendo com ele','O grupo ora e encoraja cada sonho compartilhado','Encerre declarando que Deus conhece os desejos do coração'],aplicacao:'Deus conhece os desejos do coração e os realiza quando nos deleitamos nEle. (Sl 37:4)'},
  {id:62,titulo:'Uma Lição da Bíblia',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar aprendizados bíblicos recentes',passos:['Peça que cada uma pense em uma lição aprendida nas Escrituras','Cada mulher fala a lição e de onde veio na Bíblia','Como ela está aplicando essa lição no cotidiano','O grupo pode complementar com experiências similares','Encerre em oração pedindo para aplicar os ensinamentos'],aplicacao:'Toda a Escritura é inspirada e útil para ensinar, corrigir e instruir na justiça. (2Tm 3:16)'},
  {id:63,titulo:'Algo que Quero Agradecer Hoje',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Praticar gratidão no momento presente',passos:['Abra com um momento de reflexão silenciosa','Cada mulher fala algo específico pelo qual agradece hoje','Incentive gratidão por coisas simples e cotidianas','O grupo responde com amém ou celebração','Encerre em oração coletiva de ação de graças'],aplicacao:'A gratidão diária transforma o coração e nossa perspectiva de vida. (Sl 118:1)'},
  {id:64,titulo:'Uma Palavra de Fé',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a fé através de declarações',passos:['Peça que cada uma pense em uma declaração de fé','Cada participante compartilha sua declaração','Pode ser sobre a fidelidade de Deus ou promessa bíblica','O grupo confirma com amém cada declaração','Encerre todos declarando juntos a fidelidade de Deus'],aplicacao:'A fé é a certeza daquilo que esperamos e a prova de realidades que não vemos. (Hb 11:1)'},
  {id:65,titulo:'Minha Esperança em Deus',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir e compartilhar esperança em Deus',passos:['Peça que cada uma pense em sua maior esperança em Deus','Cada mulher compartilha essa esperança','Como ela se apoia em Deus enquanto aguarda','O grupo encoraja e ora pelas esperanças','Encerre declarando que devemos esperar no Senhor'],aplicacao:'Por que te abates, ó minha alma? Espera em Deus, pois ainda o louvarei. (Sl 42:11)'},
  {id:66,titulo:'Um Versículo que Me Guia',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar versículos que orientam a vida',passos:['Peça que cada uma pense no versículo que orienta suas decisões','Cada mulher compartilha esse versículo e o porquê','Como ele a guia no dia a dia e nas escolhas','O grupo recebe cada versículo como direção','Encerre declarando que Deus dirige nossos caminhos'],aplicacao:'Reconhece a Deus em todos os teus caminhos e Ele endireitará as tuas veredas. (Pv 3:6)'},
  {id:67,titulo:'Algo que Aprendi com Outra Pessoa',categoria:'Relacionamentos',tempo:'20 min',materiais:'Nenhum',objetivo:'Valorizar os relacionamentos como fonte de aprendizado',passos:['Peça que cada uma pense em alguém que a ensinou muito','Cada mulher compartilha essa pessoa e o aprendizado','Como esse relacionamento moldou sua fé ou caráter','O grupo celebra os relacionamentos que Deus coloca em nossa vida','Encerre orando pelos relacionamentos importantes'],aplicacao:'O ferro aguça o ferro. Os relacionamentos nos moldam e fazem crescer. (Pv 27:17)'},
  {id:68,titulo:'Minha Fonte de Coragem',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre coragem espiritual',passos:['Peça que cada uma pense no que lhe dá coragem','Cada participante compartilha sua fonte de coragem','Pode ser a Palavra, a presença de Deus, a oração ou comunidade','O grupo se inspira mutuamente com as respostas','Encerre declarando que Deus nos chama a ser fortes e corajosas'],aplicacao:'Deus nos chama a ser fortes e corajosas pois Ele está sempre conosco. (Js 1:9)'},
  {id:69,titulo:'Uma Palavra que Define Meu Momento',categoria:'Reflexão',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre a estação atual da vida',passos:['Peça que cada uma pense na estação de vida que está vivendo','Cada mulher define seu momento atual com uma palavra','Explica brevemente o porquê dessa palavra','O grupo acolhe cada palavra com empatia','Encerre declarando que Deus faz tudo belo no tempo certo'],aplicacao:'Deus faz tudo belo no seu tempo. Cada estação tem um propósito. (Ec 3:11)'},
  {id:70,titulo:'Algo que Quero Entregar a Deus',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar a entrega e confiança em Deus',passos:['Crie ambiente de abertura e confiança','Cada mulher compartilha algo que precisa entregar a Deus','Pode ser um medo, preocupação, sonho ou situação difícil','O grupo ora especificamente sobre cada entrega','Encerre declarando que Deus cuida de cada uma'],aplicacao:'Lançai sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. (1Pe 5:7)'},
  {id:71,titulo:'Uma Experiência com a Oração',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências que fortalecem a vida de oração',passos:['Peça que cada uma pense em uma experiência marcante com oração','Cada mulher conta essa experiência','Pode ser uma resposta, um momento de paz ou encontro com Deus','O grupo ouve com atenção e gratidão','Encerre em oração coletiva celebrando a vida de oração'],aplicacao:'A oração traz paz que excede todo entendimento. Não vos inquieteis com nada. (Fp 4:6)'},
  {id:72,titulo:'Algo que Me Aproxima das Pessoas',categoria:'Amor',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o amor ao próximo na prática',passos:['Peça que cada uma pense no que a aproxima das pessoas','Cada mulher compartilha uma atitude que pratica para amar','Pode ser ouvir, servir, encorajar ou simplesmente estar presente','O grupo se inspira com as atitudes compartilhadas','Encerre orando para amar as pessoas como Cristo amou'],aplicacao:'O amor ao próximo é a marca do cristão. Amai-vos uns aos outros como eu vos amei. (Jo 13:34)'},
  {id:73,titulo:'Uma Palavra de Sabedoria',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar sabedoria adquirida na caminhada',passos:['Peça que cada uma pense em um conselho sábio que recebeu','Cada participante compartilha esse conselho e de quem veio','Como essa palavra de sabedoria a ajudou','O grupo recebe cada conselho como presente','Encerre pedindo a Deus mais sabedoria'],aplicacao:'Se algum de vós tem falta de sabedoria, peça-a a Deus que a dá generosamente. (Tg 1:5)'},
  {id:74,titulo:'Minha Inspiração Espiritual',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pessoas que inspiram a fé',passos:['Peça que cada uma pense em quem mais inspira sua fé','Cada mulher fala sobre essa pessoa e o porquê','Como o exemplo dela impacta sua caminhada espiritual','O grupo celebra essas referências de fé','Encerre orando pelas pessoas mencionadas e pedindo para ser inspiração'],aplicacao:'Rodeados de tão grande nuvem de testemunhas, corramos a corrida com perseverança. (Hb 12:1)'},
  {id:75,titulo:'Algo que Me Dá Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir e compartilhar motivos de esperança',passos:['Peça que cada uma pense no que lhe dá esperança','Cada participante compartilha esse motivo de esperança','Pode ser uma promessa, pessoa, circunstância ou certeza em Deus','O grupo celebra e fortalece a esperança umas das outras','Encerre declarando que Deus é nossa esperança'],aplicacao:'Deus é nossa esperança desde a juventude. Nossa âncora é firme e segura. (Sl 71:5)'},
  {id:76,titulo:'Uma História de Fé',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar histórias que fortalecem a fé coletiva',passos:['Peça que cada uma pense em uma história de fé','Cada mulher conta uma história onde a fé fez diferença','Como entregar os caminhos ao Senhor trouxe paz','O grupo celebra cada história com gratidão','Encerre declarando que Deus age quando confiamos nEle'],aplicacao:'Entrega o teu caminho ao Senhor, confia nEle e Ele agirá. (Sl 37:5)'},
  {id:77,titulo:'Meu Maior Aprendizado Espiritual',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar o maior crescimento espiritual vivido',passos:['Peça que cada uma pense no maior aprendizado espiritual','Cada mulher compartilha esse aprendizado transformador','Como ele mudou sua vida ou caminhada com Deus','O grupo aprende e se inspira com os relatos','Encerre declarando que a sabedoria espiritual é preciosa'],aplicacao:'O princípio da sabedoria é: adquire a sabedoria; e com tudo adquire o entendimento. (Pv 4:7)'},
  {id:78,titulo:'Uma Palavra de Gratidão',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Expressar gratidão coletiva pela bondade de Deus',passos:['Abra com um momento de silêncio e reflexão','Cada mulher fala uma palavra de gratidão a Deus','Pode ser simples como "saúde", "família" ou "salvação"','O grupo responde com amém após cada palavra','Encerre em oração de ação de graças coletiva'],aplicacao:'A bondade de Deus dura para sempre. Dai graças ao Senhor pois Ele é bom. (Sl 136:1)'},
  {id:79,titulo:'Algo que Me Fortalece na Fé',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o que fortalece a fé no cotidiano',passos:['Peça que cada uma pense no que mais fortalece sua fé','Cada participante compartilha essa fonte de força espiritual','Como ela mantém essa prática no dia a dia','O grupo se inspira e pode adotar novas práticas','Encerre declarando que nos fortalecemos no Senhor'],aplicacao:'Fortalecei-vos no Senhor e na força do Seu poder. Vesti toda a armadura de Deus. (Ef 6:10)'},
  {id:80,titulo:'Minha Oração para o Futuro',categoria:'Esperança',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre o futuro com fé e oração',passos:['Peça que cada uma pense em sua oração para o futuro','Cada mulher compartilha o que ora em relação ao futuro','Seus sonhos, esperanças e pedidos a Deus','O grupo ora coletivamente por esses futuros','Encerre declarando que Deus responde quando clamamos a Ele'],aplicacao:'Clama a mim e eu te responderei e te anunciarei coisas grandes e ocultas. (Jr 33:3)'},
  {id:81,titulo:'Palavra de Gratidão',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Estimular gratidão coletiva',passos:['Abra com momento de silêncio e reflexão','Cada mulher compartilha algo pelo qual é grata a Deus','Pode ser simples ou profundo','O grupo responde com amém após cada partilha','Encerre em oração de ação de graças'],aplicacao:'A gratidão transforma o coração e nos aproxima de Deus. (Sl 107:1)'},
  {id:82,titulo:'Versículo da Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Bíblia',objetivo:'Fortalecer a esperança através da Palavra',passos:['Peça que cada uma busque um versículo de esperança','Cada participante compartilha o versículo escolhido','Explica porque esse versículo renova sua esperança','O grupo declara os versículos juntos','Encerre em oração baseada nas promessas de esperança'],aplicacao:'A esperança em Deus renova nossas forças e nos sustenta. (Sl 42:11)'},
  {id:83,titulo:'Algo que Deus Fez por Mim',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar testemunhos da fidelidade de Deus',passos:['Crie clima de gratidão e celebração','Cada mulher conta algo específico que Deus fez em sua vida','Pode ser recente ou um momento marcante do passado','O grupo celebra e agradece com cada testemunho','Encerre em oração de gratidão coletiva'],aplicacao:'Testemunhos fortalecem a fé do grupo e glorificam a Deus. (Sl 66:16)'},
  {id:84,titulo:'Minha Fonte de Alegria',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar e celebrar fontes de alegria',passos:['Crie ambiente leve e celebrativo','Cada participante fala algo que lhe traz alegria genuína','Pode ser a presença de Deus, família, natureza ou ministério','O grupo celebra juntas cada fonte de alegria','Encerre em louvor e ação de graças'],aplicacao:'Na presença de Deus há plenitude de alegria. A alegria do Senhor é nossa força. (Sl 16:11)'},
  {id:85,titulo:'Algo que Quero Entregar a Deus (2)',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar entrega e confiança em Deus',passos:['Crie ambiente seguro e de confiança','Cada mulher compartilha algo que precisa entregar a Deus','Pode ser um medo, preocupação, sonho ou situação','O grupo ora especificamente sobre cada entrega','Encerre declarando que Deus cuida de cada uma'],aplicacao:'Lançai sobre Ele toda a vossa ansiedade, porque Ele tem cuidado de vós. (1Pe 5:7)'},
  {id:86,titulo:'Minha Palavra para Hoje (2)',categoria:'Palavra',tempo:'10 min',materiais:'Bíblia',objetivo:'Conectar com a Palavra de Deus para o dia',passos:['Peça que cada uma pense no versículo que marcou seu dia','Cada participante compartilha esse versículo','Explica brevemente como ele guiou ou tocou seu coração','O grupo recebe cada Palavra com atenção','Encerre declarando que a Palavra guia nossos passos'],aplicacao:'A Palavra de Deus guia nossos passos e ilumina nosso caminho. (Sl 119:105)'},
  {id:87,titulo:'Minha Motivação na Fé (2)',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre propósito e motivação espiritual',passos:['Peça que cada uma pense no que a motiva na fé','Cada mulher compartilha sua motivação espiritual','Por que serve a Deus e continua na caminhada','O grupo celebra e fortalece as motivações','Encerre declarando que servimos ao Senhor em tudo'],aplicacao:'Tudo o que fizerdes, fazei de todo o coração como ao Senhor. (Cl 3:23)'},
  {id:88,titulo:'Algo que Me Dá Paz',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre fontes de paz espiritual',passos:['Abra com momento de silêncio e respiração','Cada mulher fala algo específico que lhe traz paz','Pode ser oração, Palavra, natureza, música ou presença de Deus','O grupo aprende novas fontes de paz','Encerre com momento de silêncio e oração contemplativa'],aplicacao:'A paz de Cristo guarda nossos corações e mentes. Não se turbe o vosso coração. (Jo 14:27)'},
  {id:89,titulo:'Uma Lição que Aprendi',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar sabedoria adquirida na caminhada',passos:['Peça que cada uma pense em uma lição importante da vida','Cada participante compartilha essa lição','Como ela aprendeu e como transformou sua vida','O grupo ouve e aprende com cada experiência','Encerre declarando que a sabedoria é essencial para a vida cristã'],aplicacao:'O princípio da sabedoria é: adquire a sabedoria. Com tudo, adquire o entendimento. (Pv 4:7)'},
  {id:90,titulo:'Minha Promessa Favorita (2)',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas que sustentam',passos:['Peça que cada uma pense em sua promessa bíblica favorita','Cada mulher compartilha essa promessa e a história por trás','Como ela se apoia nessa promessa no cotidiano','O grupo declara as promessas uns sobre os outros','Encerre declarando que Deus está sempre conosco'],aplicacao:'Não temas, porque eu sou o teu Deus. Eu te fortaleço e te ajudo. (Is 41:10)'},
  {id:91,titulo:'Algo que Me Aproxima de Deus (3)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre práticas que fortalecem a espiritualidade',passos:['Peça que cada uma pense no que mais a aproxima de Deus','Cada mulher compartilha essa prática espiritual','Como ela transforma e fortalece no dia a dia','O grupo se inspira e pode adotar novas práticas','Encerre com momento de adoração e oração'],aplicacao:'Aproximai-vos de Deus e Ele se aproximará de vós. (Tg 4:8)'},
  {id:92,titulo:'Minha Jornada Espiritual',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar a caminhada espiritual pessoal',passos:['Peça que cada uma pense em sua jornada com Deus','Cada mulher fala sobre como Deus a tem guiado','Os momentos altos, baixos e transformadores','O grupo ouve com atenção e gratidão','Encerre celebrando que o Senhor nos guia como bom pastor'],aplicacao:'O Senhor é o meu pastor e nada me faltará. Ele nos guia por toda a vida. (Sl 23:1)'},
  {id:93,titulo:'Algo que Quero Agradecer Hoje (2)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Praticar gratidão no momento presente',passos:['Abra com momento de reflexão silenciosa','Cada mulher compartilha um motivo específico de gratidão hoje','Incentive gratidão por coisas simples e cotidianas','O grupo responde com amém ou celebração','Encerre em oração coletiva de ação de graças'],aplicacao:'A gratidão honra a Deus e abre nosso coração para mais bênçãos. (Sl 118:1)'},
  {id:94,titulo:'Minha Inspiração Espiritual (2)',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pessoas que inspiram a fé',passos:['Peça que cada uma pense em quem mais inspira sua fé','Cada mulher fala sobre essa pessoa e o porquê','Como o exemplo dela impacta sua caminhada','O grupo celebra essas referências de fé','Encerre orando pelas pessoas mencionadas'],aplicacao:'Rodeados de tão grande nuvem de testemunhas, corramos com perseverança. (Hb 12:1)'},
  {id:95,titulo:'Algo que Deus Me Ensinou (2)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar aprendizados recebidos de Deus',passos:['Peça que cada uma reflita sobre o que Deus a ensinou','Cada mulher compartilha uma lição aprendida com Deus','Pode ser através da Palavra, oração ou circunstância','O grupo aprende junto com as experiências','Encerre agradecendo a Deus que ensina Seus filhos'],aplicacao:'Confiar em Deus de todo coração e não no próprio entendimento traz sabedoria. (Pv 3:5)'},
  {id:96,titulo:'Minha Fonte de Coragem (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre coragem espiritual',passos:['Peça que cada uma pense no que lhe dá coragem','Cada participante compartilha sua fonte de coragem','Pode ser a Palavra, presença de Deus, oração ou comunidade','O grupo se inspira mutuamente','Encerre declarando que Deus nos chama a ser fortes e corajosas'],aplicacao:'Deus nos chama a ser fortes e corajosas pois Ele está sempre conosco. (Js 1:9)'},
  {id:97,titulo:'Algo que Quero Melhorar (2)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre áreas de crescimento espiritual',passos:['Crie ambiente de abertura e sem julgamento','Cada mulher compartilha uma área que quer crescer','Pode ser paciência, fé, oração, generosidade ou outro','O grupo pode dar dicas e se comprometer a orar','Encerre orando pelo crescimento de cada uma'],aplicacao:'Deus que começou a boa obra em você irá completá-la até o dia de Cristo. (Fp 1:6)'},
  {id:98,titulo:'Uma Palavra de Esperança (2)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar esperança e encorajar umas às outras',passos:['Peça que cada uma pense em uma palavra de esperança','Cada mulher compartilha essa palavra e o porquê','Como essa esperança a sustenta no dia a dia','O grupo recebe as palavras com gratidão','Encerre declarando que Deus é fiel e cumprirá o que prometeu'],aplicacao:'Mantenhamos firme a esperança que professamos, porque fiel é o que prometeu. (Hb 10:23)'},
  {id:99,titulo:'Algo que Me Fortalece (2)',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar fontes de força espiritual',passos:['Peça que cada uma reflita sobre o que a fortalece','Cada mulher fala algo que renova suas forças','Pode ser oração, Palavra, adoração, jejum ou comunhão','O grupo aprende e se inspira com as respostas','Encerre declarando que Deus renova as forças'],aplicacao:'Os que esperam no Senhor renovam as suas forças, sobem com asas como águias. (Is 40:31)'},
  {id:100,titulo:'Uma Experiência com Deus (2)',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências espirituais marcantes',passos:['Crie clima de reverência e abertura','Cada mulher relata uma experiência espiritual marcante','Pode ser em oração, na Bíblia ou numa circunstância','O grupo ouve com respeito e gratidão','Encerre agradecendo a Deus pelas experiências'],aplicacao:'Provem e vejam que o Senhor é bom. Cada experiência com Deus é preciosa. (Sl 34:8)'},
  {id:101,titulo:'Algo que Quero Aprender',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre crescimento e aprendizado contínuo',passos:['Peça que cada uma pense em algo que deseja aprender','Cada participante fala sobre esse desejo de aprendizado','Pode ser bíblico, espiritual ou prático para o ministério','O grupo encoraja e pode ajudar a encontrar recursos','Encerre declarando que o sábio continua sempre aprendendo'],aplicacao:'O sábio ouvirá e aumentará o seu saber. O entendido adquirirá conselho. (Pv 1:5)'},
  {id:102,titulo:'Minha Palavra para o Futuro',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre esperança e expectativa futura',passos:['Peça que cada uma pense no futuro com olhos de fé','Cada mulher compartilha uma expectativa ou esperança futura','Como ela confia que Deus vai agir nessa área','O grupo ora pelas esperanças e planos','Encerre declarando que Deus tem planos bons para cada uma'],aplicacao:'Deus tem planos de prosperar e não de prejudicar, de dar esperança e um futuro. (Jr 29:11)'},
  {id:103,titulo:'Algo que Me Aproxima das Pessoas (2)',categoria:'Amor',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o amor ao próximo na prática',passos:['Peça que cada uma pense no que a aproxima das pessoas','Cada mulher fala uma atitude que pratica para amar','Pode ser ouvir, servir, encorajar ou estar presente','O grupo se inspira com as atitudes compartilhadas','Encerre orando para amar as pessoas como Cristo amou'],aplicacao:'O amor ao próximo é a marca do cristão. Amai-vos uns aos outros. (Jo 13:34)'},
  {id:104,titulo:'Minha Oração Hoje',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pedidos de oração e orar juntas',passos:['Peça que cada uma pense em seu principal pedido de oração hoje','Cada participante compartilha esse pedido','O grupo ouve com atenção e empatia','Orem umas pelas outras em voz alta','Encerre declarando que Deus ouve nossas orações'],aplicacao:'Não andeis ansiosas por coisa alguma. Deus ouve e responde nossas orações. (Fp 4:6)'},
  {id:105,titulo:'Algo que Me Inspira',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar fontes de inspiração espiritual',passos:['Peça que cada uma pense no que inspira sua fé','Cada mulher compartilha essa fonte de inspiração','Pode ser pessoa, texto, natureza, música ou experiência','O grupo se inspira mutuamente com as partilhas','Encerre declarando que a Palavra guardada no coração nos inspira'],aplicacao:'Guardei a tua Palavra no meu coração para não pecar contra ti. (Sl 119:11)'},
  {id:106,titulo:'Uma Palavra de Fé (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a fé através de declarações',passos:['Peça que cada uma pense em uma declaração de fé','Cada participante compartilha sua declaração','Pode ser sobre a fidelidade de Deus ou promessa bíblica','O grupo confirma com amém cada declaração','Encerre todos declarando juntos a fidelidade de Deus'],aplicacao:'A fé é a certeza daquilo que esperamos e prova de realidades que não vemos. (Hb 11:1)'},
  {id:107,titulo:'Algo que Me Motiva a Servir',categoria:'Serviço',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre motivação para o serviço cristão',passos:['Peça que cada uma pense no que a motiva a servir','Cada mulher compartilha essa motivação','Como o amor de Deus a impulsiona a servir os outros','O grupo celebra o espírito de serviço','Encerre declarando que servir é amar na prática'],aplicacao:'Vós, irmãos, fostes chamados à liberdade. Servi-vos uns aos outros pelo amor. (Gl 5:13)'},
  {id:108,titulo:'Minha História de Fé',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar momentos marcantes de fé',passos:['Peça que cada uma pense em um momento especial de fé','Cada mulher conta esse momento onde a fé fez diferença','Como confiar em Deus transformou a situação','O grupo celebra cada história com gratidão','Encerre declarando que entregar os caminhos ao Senhor traz paz'],aplicacao:'Entrega o teu caminho ao Senhor, confia nEle e Ele agirá. (Sl 37:5)'},
  {id:109,titulo:'Algo que Aprendi com um Desafio (2)',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre crescimento em meio às dificuldades',passos:['Crie ambiente seguro e acolhedor','Cada mulher compartilha um desafio e o aprendizado','Como Deus a transformou através da dificuldade','O grupo celebra o crescimento de cada uma','Encerre orando pelas provações ainda em andamento'],aplicacao:'As provações produzem perseverança e nos tornam mais parecidas com Cristo. (Tg 1:3)'},
  {id:110,titulo:'Minha Palavra de Gratidão',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Expressar gratidão pela bondade eterna de Deus',passos:['Abra com momento de reflexão sobre a bondade de Deus','Cada participante fala uma palavra de gratidão','Pode ser simples: "saúde", "família", "salvação", "paz"','O grupo responde com amém após cada partilha','Encerre em oração de ação de graças coletiva'],aplicacao:'A bondade de Deus dura para sempre. Dai graças ao Senhor pois Ele é bom. (Sl 136:1)'},
  {id:111,titulo:'Algo que Me Traz Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir e compartilhar motivos de esperança',passos:['Peça que cada uma pense no que lhe traz esperança','Cada mulher compartilha esse motivo','Pode ser promessa, pessoa, circunstância ou certeza em Deus','O grupo fortalece a esperança umas das outras','Encerre declarando que Deus é nossa esperança'],aplicacao:'Deus é nossa esperança desde sempre. Nossa âncora é firme e segura. (Sl 71:5)'},
  {id:112,titulo:'Minha Motivação Espiritual (2)',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre propósito e motivação para Deus',passos:['Peça que cada uma pense no que a motiva espiritualmente','Cada participante compartilha essa motivação','Por que faz tudo para a glória de Deus','O grupo celebra os propósitos compartilhados','Encerre declarando que tudo fazemos para a glória de Deus'],aplicacao:'E tudo o que fizerdes, em palavra ou em obra, fazei-o em nome do Senhor Jesus. (Cl 3:17)'},
  {id:113,titulo:'Algo que Quero Entregar a Deus (3)',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar entrega de preocupações a Deus',passos:['Crie ambiente de confiança e abertura','Cada mulher compartilha uma preocupação que quer entregar','O grupo ora especificamente por cada entrega','Declare juntas que Deus sustenta e cuida','Encerre em paz sabendo que Deus carrega nossas cargas'],aplicacao:'Lança o teu fardo sobre o Senhor e Ele te susterá. (Sl 55:22)'},
  {id:114,titulo:'Minha Promessa para Hoje',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Fortalecer a fé com promessas bíblicas diárias',passos:['Peça que cada uma busque uma promessa para aplicar hoje','Cada participante compartilha a promessa escolhida','Como ela vai viver essa promessa no dia a dia','O grupo declara as promessas juntas','Encerre declarando que Deus sempre cumpre Suas promessas'],aplicacao:'Deus não é homem para mentir. Tudo o que prometeu Ele cumprirá. (Nm 23:19)'},
  {id:115,titulo:'Algo que Me Dá Força',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre fontes de força espiritual',passos:['Peça que cada uma pense no que lhe dá força espiritual','Cada mulher fala essa fonte de força','Pode ser oração, Palavra, comunidade, louvor ou jejum','O grupo aprende e se fortalece mutuamente','Encerre declarando que nos fortalecemos no Senhor'],aplicacao:'Fortalecei-vos no Senhor e na força do Seu poder. Visti toda a armadura de Deus. (Ef 6:10)'},
  {id:116,titulo:'Minha Palavra de Paz',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre paz em meio às tribulações',passos:['Peça que cada uma pense em uma palavra de paz','Cada mulher compartilha essa palavra e de onde vem','Como encontra paz em Cristo mesmo nas dificuldades','O grupo recebe cada palavra com tranquilidade','Encerre em momento de silêncio e oração contemplativa'],aplicacao:'Em Cristo temos paz. No mundo tereis tribulações, mas tende ânimo. (Jo 16:33)'},
  {id:117,titulo:'Algo que Aprendi na Bíblia',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar ensinamentos bíblicos recentes',passos:['Peça que cada uma pense em algo aprendido na Bíblia','Cada mulher compartilha um ensinamento bíblico','Como está aplicando esse ensinamento na vida','O grupo pode complementar com experiências similares','Encerre pedindo para aplicar os ensinamentos'],aplicacao:'Toda Escritura é inspirada e útil para ensinar, corrigir e instruir na justiça. (2Tm 3:16)'},
  {id:118,titulo:'Minha Experiência com Oração',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências que fortalecem a vida de oração',passos:['Peça que cada uma pense em uma experiência marcante com oração','Cada mulher relata essa experiência','Pode ser resposta, momento de paz ou encontro com Deus','O grupo ouve com atenção e gratidão','Encerre em oração coletiva celebrando a vida de oração'],aplicacao:'Orem sem cessar. A oração contínua fortalece a fé e a comunhão com Deus. (1Ts 5:17)'},
  {id:119,titulo:'Algo que Me Dá Alegria',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar e celebrar alegrias do cotidiano',passos:['Crie clima leve e de celebração','Cada mulher compartilha algo que lhe traz alegria','Pode ser simples ou profundo, cotidiano ou especial','O grupo celebra juntas cada alegria','Encerre em louvor declarando que servimos ao Senhor com alegria'],aplicacao:'Servi ao Senhor com alegria, entrai diante dEle com cânticos. (Sl 100:2)'},
  {id:120,titulo:'Minha Esperança em Deus (2)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre esperança ancorada em Deus',passos:['Peça que cada uma pense em sua esperança em Deus','Cada mulher compartilha essa esperança','Como ela se sustenta em Deus enquanto espera','O grupo fortalece e ora pelas esperanças','Encerre declarando que nossa esperança está no Senhor'],aplicacao:'Agora, Senhor, o que espero? A minha esperança está em ti. (Sl 39:7)'},
  {id:121,titulo:'Compartilhando Esperança (2)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a confiança em Deus',passos:['Abra em oração pedindo que Deus encha de esperança','Cada participante compartilha algo que lhe dá esperança','Como ela confia em Deus mesmo sem ver o resultado','O grupo fortalece a esperança umas das outras','Encerre declarando que a esperança em Deus nunca falha'],aplicacao:'Bendito o homem que confia no Senhor. A esperança em Deus nunca falha. (Jr 17:7)'},
  {id:122,titulo:'Minha Palavra de Gratidão (2)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Estimular gratidão que nos aproxima de Deus',passos:['Abra com momento de reflexão sobre bênçãos recebidas','Cada mulher compartilha algo pelo qual é muito grata','O grupo recebe com amém e celebração','Continue até todas terem participado','Encerre em oração de ação de graças'],aplicacao:'A gratidão nos aproxima de Deus e abre nosso coração para mais bênçãos. (Sl 103:2)'},
  {id:123,titulo:'Versículo que Me Sustenta (2)',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas que sustentam',passos:['Peça que cada uma pense no versículo que a sustenta','Cada mulher compartilha esse versículo','Conta como Deus a segura através dessa promessa','O grupo ora esse versículo sobre cada uma','Encerre declarando que Deus segura nossa mão'],aplicacao:'Eu, o Senhor teu Deus, te seguro pela tua mão direita. Não temas. (Is 41:13)'},
  {id:124,titulo:'Algo que Aprendi com Deus (2)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre aprendizado espiritual recebido de Deus',passos:['Peça que cada uma reflita sobre o que Deus a ensinou','Cada participante compartilha esse aprendizado','Como ela está aplicando esse ensinamento','O grupo aprende junto com as experiências','Encerre pedindo que Deus continue a ensinar cada uma'],aplicacao:'Entrega ao Senhor tudo o que fazes e os teus planos serão estabelecidos. (Pv 16:3)'},
  {id:125,titulo:'Minha Fonte de Paz (2)',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre paz espiritual profunda',passos:['Abra com momento de silêncio e contemplação','Cada mulher compartilha algo que lhe traz paz genuína','Como a paz de Cristo transforma seu interior','O grupo aprende novas fontes de paz','Encerre com oração pedindo a paz de Cristo para cada uma'],aplicacao:'A paz de Cristo transforma nosso interior e guarda nossos corações. (Jo 14:27)'},
  {id:126,titulo:'Minha Motivação para Servir',categoria:'Serviço',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o serviço como expressão dos dons',passos:['Peça que cada uma pense como pode servir melhor','Cada mulher compartilha sua motivação para o serviço','Como usa seus dons para servir ao próximo','O grupo celebra os diferentes dons e serviços','Encerre orando para que cada uma use bem seus dons'],aplicacao:'Cada um administre aos outros o dom que recebeu, como bons despenseiros. (1Pe 4:10)'},
  {id:127,titulo:'Uma Palavra de Coragem',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a coragem espiritual no grupo',passos:['Peça que cada uma pense em um momento que precisou de coragem','Cada participante compartilha esse momento','Como Deus a fortaleceu nessa hora difícil','O grupo celebra a coragem demonstrada','Encerre declarando que Deus nos fortalece em cada desafio'],aplicacao:'Sede fortes e corajosos. Deus nos fortalece em todos os desafios. (Js 1:9)'},
  {id:128,titulo:'Minha História com Deus',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências espirituais marcantes',passos:['Crie clima de reverência e gratidão','Cada mulher compartilha uma experiência espiritual especial','Como Deus a levantou ou transformou numa situação difícil','O grupo ouve com atenção e celebra','Encerre agradecendo a Deus que nos levanta das dificuldades'],aplicacao:'Ele me tirou de um poço de perdição. Deus nos levanta das dificuldades. (Sl 40:2)'},
  {id:129,titulo:'Algo que Quero Entregar a Deus (4)',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar a entrega e confiança em Deus',passos:['Crie ambiente de confiança e abertura','Cada participante compartilha algo que quer entregar a Deus','Pode ser preocupação, sonho, situação ou pessoa','O grupo ora especificamente por cada entrega','Encerre declarando que Deus cuida de cada situação entregue'],aplicacao:'Entrega o teu caminho ao Senhor, confia nEle e Ele agirá. (Sl 37:5)'},
  {id:130,titulo:'Minha Esperança para o Futuro',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o futuro com esperança e fé',passos:['Peça que cada uma pense em sua esperança para o futuro','Cada mulher compartilha essa esperança','Como confia que Deus vai cuidar do futuro','O grupo ora pelas esperanças compartilhadas','Encerre declarando que Deus tem planos de paz para cada uma'],aplicacao:'Deus tem planos de prosperar e não de prejudicar, de dar esperança e um futuro. (Jr 29:11)'},
  {id:131,titulo:'Algo que Me Inspira (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar fontes de inspiração espiritual',passos:['Peça que cada uma pense no que mais inspira sua fé','Cada mulher fala sobre essa fonte de inspiração','Como ela mantém o olhar em Jesus no cotidiano','O grupo se inspira mutuamente','Encerre declarando que olhar para Jesus nos inspira e transforma'],aplicacao:'Olhando para Jesus, o autor e consumador da nossa fé. (Hb 12:2)'},
  {id:132,titulo:'Minha Oração Hoje (2)',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pedidos e orar juntas',passos:['Peça que cada uma pense em seu pedido de oração do dia','Cada participante compartilha esse pedido','O grupo ouve com atenção e empatia','Orem umas pelas outras de forma específica','Encerre declarando que a oração traz paz'],aplicacao:'Não andeis ansiosas por coisa alguma. A oração traz a paz de Deus. (Fp 4:6)'},
  {id:133,titulo:'Algo que Me Fortalece (3)',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar o que renova as forças espirituais',passos:['Peça que cada uma pense no que fortalece sua fé','Cada mulher fala sobre essa fonte de força','Como ela mantém essa prática no dia a dia','O grupo aprende e se inspira','Encerre declarando que esperar no Senhor renova as forças'],aplicacao:'Esperar no Senhor renova as forças. Subimos com asas como águias. (Is 40:31)'},
  {id:134,titulo:'Uma Palavra de Sabedoria (2)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar sabedoria adquirida na caminhada',passos:['Peça que cada uma pense em um conselho sábio que recebeu','Cada participante compartilha esse conselho','De quem veio e como a ajudou','O grupo recebe cada conselho como presente','Encerre pedindo a Deus mais sabedoria para todas'],aplicacao:'Se algum de vós tem falta de sabedoria, peça-a a Deus que a dá generosamente. (Tg 1:5)'},
  {id:135,titulo:'Minha Promessa Favorita (3)',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas preciosas',passos:['Peça que cada uma busque sua promessa favorita','Cada mulher compartilha a promessa e a história por trás','Como Deus cumpriu ou está cumprindo essa promessa','O grupo declara as promessas juntas','Encerre declarando que Deus é nosso socorro e ajuda'],aplicacao:'O meu socorro vem do Senhor que fez os céus e a terra. (Sl 121:1)'},
  {id:136,titulo:'Algo que Aprendi com um Desafio (3)',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre maturidade adquirida em desafios',passos:['Crie ambiente seguro e acolhedor','Cada mulher compartilha um desafio e o que aprendeu','Como a perseverança a fez crescer e amadurecer','O grupo celebra o crescimento','Encerre orando pelas provações ainda em curso'],aplicacao:'A perseverança deve levar seu trabalho até ao fim para que sejais maduros e íntegros. (Tg 1:4)'},
  {id:137,titulo:'Minha Fonte de Alegria (2)',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar fontes de alegria que vêm de Deus',passos:['Crie ambiente celebrativo e leve','Cada mulher compartilha algo que lhe traz alegria genuína','Como essa alegria vem da presença de Deus','O grupo celebra juntas','Encerre em louvor e ação de graças pela alegria do Senhor'],aplicacao:'Na presença de Deus há plenitude de alegria. A alegria vem de Sua presença. (Sl 16:11)'},
  {id:138,titulo:'Algo que Me Aproxima de Deus (4)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre práticas que aproximam de Deus',passos:['Peça que cada uma pense no que mais a aproxima de Deus','Cada mulher compartilha essa prática','Como ela guarda a Palavra no coração','O grupo aprende e se inspira com as práticas','Encerre com momento de oração e adoração'],aplicacao:'Guardei a tua Palavra no meu coração para não pecar contra ti. (Sl 119:11)'},
  {id:139,titulo:'Minha Palavra de Esperança',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar esperança e encorajar umas às outras',passos:['Peça que cada uma pense em uma palavra de esperança','Cada mulher compartilha essa palavra','Como a fidelidade de Deus a sustenta','O grupo recebe com gratidão','Encerre declarando que Deus é fiel e cumprirá o que prometeu'],aplicacao:'Mantenhamos firme a esperança que professamos, porque fiel é o que prometeu. (Hb 10:23)'},
  {id:140,titulo:'Algo que Quero Melhorar (3)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre áreas de crescimento espiritual',passos:['Crie ambiente de abertura e sem julgamento','Cada mulher compartilha uma área que quer melhorar','Pode ser na fé, nos relacionamentos, no serviço ou no caráter','O grupo ora especificamente pelo crescimento de cada uma','Encerre declarando que Deus continua trabalhando em nós'],aplicacao:'Deus que começou a boa obra em vós a completará até o dia de Cristo Jesus. (Fp 1:6)'},
  {id:141,titulo:'Minha Experiência com Oração (2)',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências que fortalecem a oração',passos:['Peça que cada uma pense numa experiência marcante com oração','Cada mulher conta essa experiência','Como a oração contínua fortaleceu sua fé','O grupo ouve e se inspira','Encerre em oração coletiva praticando o orar sem cessar'],aplicacao:'Orar sem cessar fortalece nossa fé e mantém nossa comunhão com Deus. (1Ts 5:17)'},
  {id:142,titulo:'Algo que Me Dá Coragem',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre coragem espiritual',passos:['Peça que cada uma pense no que lhe dá coragem','Cada mulher compartilha essa fonte de coragem','Como o Senhor sendo sua luz a fortalece','O grupo celebra e fortalece a coragem umas das outras','Encerre declarando que o Senhor é nossa luz e salvação'],aplicacao:'O Senhor é a minha luz e a minha salvação. A quem temerei? (Sl 27:1)'},
  {id:143,titulo:'Minha Palavra para Hoje (3)',categoria:'Palavra',tempo:'10 min',materiais:'Bíblia',objetivo:'Conectar com direção espiritual através da Palavra',passos:['Peça que cada uma pense num versículo importante para o dia','Cada participante compartilha esse versículo','Como ele ilumina o caminho e orienta as decisões','O grupo recebe cada Palavra com atenção','Encerre declarando que a Palavra ilumina nossos caminhos'],aplicacao:'A tua Palavra é lâmpada que ilumina o meu caminho. (Sl 119:105)'},
  {id:144,titulo:'Algo que Quero Agradecer (2)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Praticar gratidão pela bondade eterna de Deus',passos:['Abra com momento de reflexão sobre a bondade de Deus','Cada mulher compartilha um motivo de gratidão','Incentive gratidão por diferentes áreas da vida','O grupo responde com amém e celebração','Encerre em oração coletiva de ação de graças'],aplicacao:'A bondade de Deus é eterna. Dai graças ao Senhor pois Ele é bom. (Sl 136:1)'},
  {id:145,titulo:'Minha Inspiração Espiritual (3)',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pessoas que inspiram e edificam a fé',passos:['Peça que cada uma pense em quem inspira sua fé','Cada mulher fala sobre essa pessoa e o porquê','Como o exemplo dela a incentiva a crescer','O grupo celebra essas referências','Encerre orando para que cada uma também seja inspiração'],aplicacao:'Consideremos como nos estimular uns aos outros ao amor e às boas obras. (Hb 10:24)'},
  {id:146,titulo:'Algo que Aprendi na Bíblia (2)',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar ensinamentos bíblicos transformadores',passos:['Peça que cada uma pense num ensinamento bíblico recente','Cada mulher compartilha esse ensinamento','Como está aplicando na vida prática','O grupo pode complementar e discutir','Encerre agradecendo pela Palavra que ensina e transforma'],aplicacao:'Toda Escritura é inspirada por Deus e útil para o ensino, repreensão e correção. (2Tm 3:16)'},
  {id:147,titulo:'Minha Motivação na Fé (3)',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre propósito de viver para o Senhor',passos:['Peça que cada uma pense no que a motiva na fé','Cada mulher compartilha sua motivação espiritual','Como o propósito de viver para Deus a move','O grupo celebra os diferentes propósitos','Encerre declarando que tudo fazemos para o Senhor'],aplicacao:'Tudo o que fizerdes, fazei de todo o coração como ao Senhor. (Cl 3:23)'},
  {id:148,titulo:'Algo que Me Dá Paz (2)',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre a paz que excede o entendimento',passos:['Abra com momento de silêncio e respiração','Cada mulher compartilha algo que lhe traz paz','Como a paz de Deus guarda seu coração','O grupo aprende novas fontes de paz','Encerre com oração pedindo a paz de Deus para cada uma'],aplicacao:'A paz de Deus que excede todo entendimento guardará vossos corações. (Fp 4:7)'},
  {id:149,titulo:'Minha História de Superação',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar superações e fortalecer a fé',passos:['Crie clima de celebração e gratidão','Cada mulher conta um desafio que superou com Deus','Como Ele a capacitou para superar','O grupo celebra com aplausos e amém','Encerre em oração de gratidão pelas superações'],aplicacao:'Tudo posso naquele que me fortalece. Deus nos capacita para superar. (Fp 4:13)'},
  {id:150,titulo:'Algo que Me Aproxima das Pessoas (3)',categoria:'Amor',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o amor ao próximo como identidade cristã',passos:['Peça que cada uma pense no que a aproxima das pessoas','Cada mulher compartilha uma atitude de amor','Como pratica o amor que Cristo mandou','O grupo se inspira com as atitudes','Encerre orando para amar como Cristo amou'],aplicacao:'O amor ao próximo identifica os discípulos. Amai-vos uns aos outros. (Jo 13:34)'},
  {id:151,titulo:'Minha Esperança em Deus (3)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre esperança genuína em Deus',passos:['Peça que cada uma pense em sua esperança em Deus','Cada participante compartilha essa esperança','Como ela se apoia em Deus enquanto espera','O grupo fortalece e ora pelas esperanças','Encerre declarando que devemos esperar no Senhor'],aplicacao:'Por que te abates, ó minha alma? Espera em Deus, pois ainda o louvarei. (Sl 42:5)'},
  {id:152,titulo:'Algo que Aprendi com Outra Pessoa (2)',categoria:'Relacionamentos',tempo:'20 min',materiais:'Nenhum',objetivo:'Valorizar relacionamentos como fonte de aprendizado',passos:['Peça que cada uma pense em alguém que a ensinou muito','Cada mulher compartilha essa pessoa e o aprendizado','Como esse relacionamento a moldou e fez crescer','O grupo celebra os relacionamentos de Deus em nossas vidas','Encerre orando pelos relacionamentos importantes'],aplicacao:'O ferro aguça o ferro. Os relacionamentos nos moldam e fazem crescer. (Pv 27:17)'},
  {id:153,titulo:'Minha Fonte de Sabedoria',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre como buscar sabedoria divina',passos:['Peça que cada uma pense em como busca sabedoria','Cada mulher compartilha sua fonte de sabedoria','Como a Palavra, oração e comunidade a tornam mais sábia','O grupo aprende e se inspira','Encerre declarando que buscar sabedoria traz felicidade'],aplicacao:'Feliz o homem que acha sabedoria e obtém entendimento. (Pv 3:13)'},
  {id:154,titulo:'Algo que Me Motiva a Servir (2)',categoria:'Serviço',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre motivação para o serviço com amor',passos:['Peça que cada uma pense no que a motiva a servir','Cada mulher compartilha essa motivação','Como o amor de Cristo a impulsiona a servir','O grupo celebra o espírito de serviço','Encerre declarando que servir com amor é nossa vocação'],aplicacao:'Servi-vos uns aos outros pelo amor. Servir é amar na prática. (Gl 5:13)'},
  {id:155,titulo:'Minha Palavra de Fé',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a fé através de declarações bíblicas',passos:['Peça que cada uma pense em uma declaração de fé','Cada participante compartilha essa declaração','Como a fé agrada a Deus e transforma situações','O grupo confirma com amém cada declaração','Encerre todos declarando juntos que sem fé é impossível agradar a Deus'],aplicacao:'Sem fé é impossível agradar a Deus. A fé nos aproxima e transforma. (Hb 11:6)'},
  {id:156,titulo:'Algo que Me Fortalece na Fé (2)',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o que fortalece a fé no cotidiano',passos:['Peça que cada uma pense no que mais fortalece sua fé','Cada participante compartilha essa fonte de força','Como ela mantém essa prática regularmente','O grupo se inspira e pode adotar novas práticas','Encerre declarando que nos fortalecemos no Senhor'],aplicacao:'Fortalecei-vos no Senhor e na força do Seu poder. (Ef 6:10)'},
  {id:157,titulo:'Minha Oração para o Futuro (2)',categoria:'Esperança',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre o futuro com fé através da oração',passos:['Peça que cada uma pense em sua oração para o futuro','Cada mulher compartilha o que ora pelo futuro','Seus sonhos, esperanças e pedidos a Deus','O grupo ora coletivamente por esses futuros','Encerre declarando que Deus responde quando clamamos'],aplicacao:'Clama a mim e eu te responderei e te anunciarei coisas grandes e ocultas. (Jr 33:3)'},
  {id:158,titulo:'Algo que Quero Entregar Hoje',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar entrega diária de preocupações a Deus',passos:['Crie ambiente de confiança e abertura','Cada participante compartilha uma preocupação para entregar hoje','O grupo ora especificamente por cada entrega','Declare juntas que Deus sustenta e cuida','Encerre em paz sabendo que Deus carrega nossas cargas'],aplicacao:'Lança o teu fardo sobre o Senhor e Ele te susterá. (Sl 55:22)'},
  {id:159,titulo:'Minha Palavra de Gratidão (3)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Expressar gratidão e alegria pelo novo dia',passos:['Abra com celebração pelo dia que Deus deu','Cada mulher compartilha um motivo de gratidão','Incentive gratidão por diferentes bênçãos','O grupo responde com amém e celebração','Encerre declarando que nos alegramoos e regozijamos neste dia'],aplicacao:'Este é o dia que o Senhor fez. Alegremo-nos e nos regozijemos nele. (Sl 118:24)'},
  {id:160,titulo:'Algo que Me Aproxima de Deus (5)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre práticas espirituais transformadoras',passos:['Peça que cada uma pense no que mais a aproxima de Deus','Cada mulher compartilha essa prática','Como ela a transforma e fortalece','O grupo se inspira e pode adotar novas práticas','Encerre com momento de adoração e oração'],aplicacao:'Aproximai-vos de Deus e Ele se aproximará de vós. (Tg 4:8)'},
  {id:161,titulo:'Compartilhando Esperança (3)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer esperança em Deus',passos:['Abra em oração pedindo que Deus encha de esperança','Cada mulher compartilha algo que lhe dá esperança','Como a esperança em Deus a sustenta','O grupo fortalece a esperança umas das outras','Encerre declarando que Deus é nossa esperança segura'],aplicacao:'Deus é nossa esperança segura. Tu és a minha esperança, ó Senhor Deus. (Sl 71:5)'},
  {id:162,titulo:'Minha Palavra de Gratidão (4)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Estimular gratidão que aproxima o coração de Deus',passos:['Abra com momento de reflexão sobre bênçãos recebidas','Cada participante compartilha algo pelo qual agradece','O grupo recebe com amém e celebração','Continue até todas terem participado','Encerre em oração de ação de graças'],aplicacao:'A gratidão aproxima nosso coração de Deus. Bendize ao Senhor, ó minha alma. (Sl 103:1)'},
  {id:163,titulo:'Versículo que Me Sustenta (3)',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas que renovam as forças',passos:['Peça que cada uma pense no versículo que a sustenta','Cada mulher compartilha esse versículo','Como esperar no Senhor renova suas forças','O grupo ora esse versículo sobre cada uma','Encerre declarando que Deus renova nossas forças'],aplicacao:'Os que esperam no Senhor renovam as suas forças, sobem com asas como águias. (Is 40:31)'},
  {id:164,titulo:'Algo que Aprendi com Deus (3)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre aprendizado espiritual recebido de Deus',passos:['Peça que cada uma reflita sobre o que Deus a ensinou','Cada participante compartilha esse aprendizado','Como reconhecer Deus em todos os caminhos trouxe direção','O grupo aprende junto','Encerre pedindo que Deus continue a ensinar'],aplicacao:'Reconhece a Deus em todos os teus caminhos e Ele endireitará as tuas veredas. (Pv 3:6)'},
  {id:165,titulo:'Minha Fonte de Paz (3)',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre a paz de Cristo que acalma',passos:['Abra com momento de silêncio e contemplação','Cada mulher compartilha algo que lhe traz paz genuína','Como a paz de Cristo acalma seu coração','O grupo aprende novas fontes de paz','Encerre com oração pedindo a paz de Cristo para cada uma'],aplicacao:'A paz de Cristo acalma nossos corações. Não se turbe o vosso coração. (Jo 14:27)'},
  {id:166,titulo:'Minha Motivação para Servir (2)',categoria:'Serviço',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o serviço como expressão dos dons',passos:['Peça que cada uma pense como pode servir melhor','Cada mulher compartilha sua motivação para o serviço','Como usa seus dons para abençoar outros','O grupo celebra os diferentes dons e ministérios','Encerre orando para cada uma usar bem seus dons'],aplicacao:'Cada um administre aos outros o dom que recebeu, para abençoar. (1Pe 4:10)'},
  {id:167,titulo:'Uma Palavra de Coragem (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a coragem espiritual no grupo',passos:['Peça que cada uma pense num momento que precisou de coragem','Cada mulher compartilha esse momento','Como Deus esteve com ela nessa hora','O grupo celebra a coragem demonstrada','Encerre declarando que Deus está conosco onde formos'],aplicacao:'Sede fortes e corajosos. Deus está conosco onde quer que formos. (Js 1:9)'},
  {id:168,titulo:'Minha História com Deus (2)',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar como entregar os caminhos a Deus traz paz',passos:['Crie clima de gratidão e abertura','Cada participante relata uma experiência com Deus','Como confiar nEle transformou a situação','O grupo ouve com atenção e celebra','Encerre declarando que entregar os caminhos ao Senhor traz paz'],aplicacao:'Entrega o teu caminho ao Senhor, confia nEle e Ele agirá. (Sl 37:5)'},
  {id:169,titulo:'Algo que Quero Entregar a Deus (5)',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar entrega de cargas e preocupações a Deus',passos:['Crie ambiente de confiança e abertura','Cada mulher compartilha algo que precisa entregar','O grupo ora especificamente por cada entrega','Declare juntas que Deus cuida das nossas cargas','Encerre em paz sabendo que Deus nos sustenta'],aplicacao:'Lança o teu fardo sobre o Senhor e Ele te susterá. Deus cuida de nós. (Sl 55:22)'},
  {id:170,titulo:'Minha Esperança para o Futuro (2)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre esperança futura com fé',passos:['Peça que cada uma pense em sua esperança para o futuro','Cada mulher compartilha essa esperança','Como confia que Deus tem planos de paz','O grupo ora pelas esperanças','Encerre declarando que Deus tem planos bons para cada uma'],aplicacao:'Deus tem planos de paz e não de calamidade, para dar esperança e um futuro. (Jr 29:11)'},
  {id:171,titulo:'Algo que Me Inspira (3)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar exemplos de fé que motivam',passos:['Peça que cada uma pense em quem ou o que inspira sua fé','Cada mulher compartilha essa fonte de inspiração','Como exemplos de fé a motivam a perseverar','O grupo se inspira mutuamente','Encerre declarando que exemplos de fé nos motivam a correr a corrida'],aplicacao:'Rodeados de tão grande nuvem de testemunhas, corramos com perseverança. (Hb 12:1)'},
  {id:172,titulo:'Minha Oração Hoje (3)',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pedidos e orar juntas',passos:['Peça que cada uma pense em seu pedido de oração do dia','Cada participante compartilha esse pedido','O grupo ouve com atenção e empatia','Orem umas pelas outras de forma específica','Encerre declarando que a oração traz paz que excede todo entendimento'],aplicacao:'Não andeis ansiosas por coisa alguma. A oração traz a paz de Deus. (Fp 4:6)'},
  {id:173,titulo:'Algo que Me Fortalece (4)',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o que fortalece a fé',passos:['Peça que cada uma pense no que fortalece sua fé','Cada mulher fala sobre essa fonte de força','Como Deus a fortalece e ajuda no cotidiano','O grupo aprende e se inspira','Encerre declarando que Deus nos fortalece e ajuda'],aplicacao:'Não temas, porque eu sou o teu Deus. Eu te fortaleço e te ajudo. (Is 41:10)'},
  {id:174,titulo:'Uma Palavra de Sabedoria (3)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar sabedoria adquirida na caminhada',passos:['Peça que cada uma pense num conselho sábio','Cada participante compartilha esse conselho e de quem veio','Como a ajudou na vida ou na fé','O grupo recebe cada conselho como presente','Encerre pedindo a Deus mais sabedoria para todas'],aplicacao:'Se algum de vós tem falta de sabedoria, peça-a a Deus que a dá generosamente. (Tg 1:5)'},
  {id:175,titulo:'Minha Promessa Favorita (4)',categoria:'Fé',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar promessas bíblicas preciosas',passos:['Peça que cada uma busque sua promessa favorita','Cada mulher compartilha a promessa e a história','Como Deus é seu socorro através dessa promessa','O grupo declara as promessas juntas','Encerre declarando que o socorro vem do Senhor'],aplicacao:'O meu socorro vem do Senhor que fez os céus e a terra. (Sl 121:2)'},
  {id:176,titulo:'Algo que Aprendi com um Desafio (4)',categoria:'Crescimento',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre perseverança adquirida nas provações',passos:['Crie ambiente seguro e acolhedor','Cada mulher compartilha um desafio e o aprendizado','Como as provações produziram perseverança','O grupo celebra o crescimento de cada uma','Encerre orando pelas provações ainda em curso'],aplicacao:'As provações produzem perseverança e nos tornam mais parecidas com Cristo. (Tg 1:3)'},
  {id:177,titulo:'Minha Fonte de Alegria (3)',categoria:'Alegria',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar alegrias que vêm da presença de Deus',passos:['Crie ambiente leve e de celebração','Cada mulher compartilha algo que lhe traz alegria','Como a presença de Deus é sua maior fonte de alegria','O grupo celebra juntas','Encerre em louvor e ação de graças'],aplicacao:'Na presença de Deus há plenitude de alegria. A presença de Deus traz alegria. (Sl 16:11)'},
  {id:178,titulo:'Algo que Me Aproxima de Deus (6)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre a Palavra como caminho para Deus',passos:['Peça que cada uma pense no que mais a aproxima de Deus','Cada mulher compartilha essa prática espiritual','Como a Palavra ilumina seu caminho','O grupo aprende e adota novas práticas','Encerre com momento de adoração e oração'],aplicacao:'A tua Palavra é lâmpada que ilumina o meu caminho. (Sl 119:105)'},
  {id:179,titulo:'Minha Palavra de Esperança (2)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Compartilhar esperança e encorajar umas às outras',passos:['Peça que cada uma pense em uma palavra de esperança','Cada mulher compartilha essa palavra','Como a fidelidade de Deus a sustenta na espera','O grupo recebe com gratidão','Encerre declarando que Deus é fiel e cumprirá o prometido'],aplicacao:'Mantenhamos firme a esperança que professamos, porque fiel é o que prometeu. (Hb 10:23)'},
  {id:180,titulo:'Algo que Quero Melhorar (4)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre áreas de crescimento espiritual',passos:['Crie ambiente de abertura e sem julgamento','Cada mulher compartilha uma área que quer melhorar','Pode ser na fé, caráter, serviço ou relacionamentos','O grupo ora pelo crescimento de cada uma','Encerre declarando que Deus continua a obra em nós'],aplicacao:'Deus que começou a boa obra em vós a completará até o dia de Cristo Jesus. (Fp 1:6)'},
  {id:181,titulo:'Minha Experiência com Oração (3)',categoria:'Oração',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar experiências de oração contínua',passos:['Peça que cada uma pense numa experiência marcante com oração','Cada mulher conta essa experiência','Como orar continuamente fortaleceu sua fé','O grupo ouve e se inspira','Encerre em oração coletiva praticando orar sem cessar'],aplicacao:'Orem continuamente. A oração sem cessar fortalece a comunhão com Deus. (1Ts 5:17)'},
  {id:182,titulo:'Algo que Me Dá Coragem (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre coragem ancorada em Deus',passos:['Peça que cada uma pense no que lhe dá coragem','Cada participante compartilha essa fonte de coragem','Como o Senhor sendo sua luz a fortalece','O grupo celebra e fortalece a coragem mútua','Encerre declarando que o Senhor é nossa luz e salvação'],aplicacao:'O Senhor é a minha luz e a minha salvação. A quem temerei? (Sl 27:1)'},
  {id:183,titulo:'Minha Palavra para Hoje (4)',categoria:'Palavra',tempo:'10 min',materiais:'Bíblia',objetivo:'Guardar a Palavra no coração para direção diária',passos:['Peça que cada uma pense num versículo que marcou o dia','Cada mulher compartilha esse versículo','Como guardar a Palavra no coração orienta suas decisões','O grupo recebe cada Palavra com atenção','Encerre declarando que a Palavra guardada no coração nos guia'],aplicacao:'Guardei a tua Palavra no meu coração para não pecar contra ti. (Sl 119:11)'},
  {id:184,titulo:'Algo que Quero Agradecer (3)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Praticar gratidão celebrando o dia que Deus fez',passos:['Abra celebrando o dia que Deus fez','Cada participante compartilha um motivo de gratidão','Incentive gratidão por diferentes bênçãos do dia','O grupo responde com amém e celebração','Encerre declarando que nos alegramos neste dia'],aplicacao:'Este é o dia que o Senhor fez. Alegremo-nos e nos regozijemos nele. (Sl 118:24)'},
  {id:185,titulo:'Minha Inspiração Espiritual (4)',categoria:'Testemunho',tempo:'20 min',materiais:'Nenhum',objetivo:'Compartilhar pessoas que encorajam e edificam',passos:['Peça que cada uma pense em quem inspira sua fé','Cada mulher fala sobre essa pessoa','Como o exemplo dela a encorajou a crescer na fé','O grupo celebra essas referências','Encerre orando para que cada uma também seja inspiração e encorajamento'],aplicacao:'Consideremos como nos estimular uns aos outros ao amor e às boas obras. (Hb 10:24)'},
  {id:186,titulo:'Algo que Aprendi na Bíblia (3)',categoria:'Palavra',tempo:'15 min',materiais:'Bíblia',objetivo:'Compartilhar ensinamentos bíblicos que ensinam e orientam',passos:['Peça que cada uma pense num ensinamento bíblico recente','Cada mulher compartilha esse ensinamento','Como está aplicando na vida prática','O grupo complementa e discute','Encerre agradecendo pela Palavra que ensina e orienta'],aplicacao:'Toda Escritura é inspirada por Deus e útil para ensinar, repreender e orientar. (2Tm 3:16)'},
  {id:187,titulo:'Minha Motivação na Fé (4)',categoria:'Propósito',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre propósito de glorificar a Deus',passos:['Peça que cada uma pense no que a motiva na fé','Cada mulher compartilha sua motivação espiritual','Como o propósito de glorificar a Deus a move','O grupo celebra os propósitos diferentes','Encerre declarando que tudo fazemos para a glória de Deus'],aplicacao:'E tudo o que fizerdes, em palavra ou em obra, fazei-o em nome do Senhor Jesus. (Cl 3:17)'},
  {id:188,titulo:'Algo que Me Dá Paz (3)',categoria:'Paz',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre a paz de Deus que guarda o coração',passos:['Abra com momento de silêncio e respiração','Cada mulher compartilha algo que lhe traz paz','Como a paz de Deus guarda seu coração','O grupo aprende novas fontes de paz','Encerre com oração pedindo a paz de Deus para cada uma'],aplicacao:'A paz de Deus que excede todo entendimento guardará os vossos corações. (Fp 4:7)'},
  {id:189,titulo:'Minha História de Superação (2)',categoria:'Testemunho',tempo:'25 min',materiais:'Nenhum',objetivo:'Compartilhar como Deus nos fortalece para superar',passos:['Crie clima de celebração e gratidão','Cada participante relata um desafio superado com Deus','Como Ele a fortaleceu em cada etapa','O grupo celebra com aplausos e amém','Encerre em oração de gratidão pelas superações'],aplicacao:'Tudo posso naquele que me fortalece. Deus nos capacita para superar. (Fp 4:13)'},
  {id:190,titulo:'Algo que Me Aproxima das Pessoas (4)',categoria:'Amor',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o amor ao próximo como marca do discípulo',passos:['Peça que cada uma pense no que a aproxima das pessoas','Cada mulher compartilha uma atitude que pratica','Como o amor de Cristo a capacita a amar','O grupo se inspira com as atitudes','Encerre orando para amar como Cristo amou'],aplicacao:'O amor ao próximo identifica os discípulos de Cristo. Amai-vos uns aos outros. (Jo 13:34)'},
  {id:191,titulo:'Minha Esperança em Deus (4)',categoria:'Esperança',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre esperança que confía no Senhor',passos:['Peça que cada uma pense em sua esperança em Deus','Cada participante compartilha essa esperança','Como ela confia no Senhor enquanto espera','O grupo ora pelas esperanças de cada uma','Encerre declarando que devemos confiar e esperar no Senhor'],aplicacao:'Por que te abates, ó minha alma? Espera em Deus, pois ainda o louvarei. (Sl 42:5)'},
  {id:192,titulo:'Algo que Aprendi com Outra Pessoa (3)',categoria:'Relacionamentos',tempo:'20 min',materiais:'Nenhum',objetivo:'Valorizar relacionamentos como ferramenta de crescimento',passos:['Peça que cada uma pense em alguém que a ensinou','Cada mulher compartilha essa pessoa e o aprendizado','Como esse relacionamento a fez crescer','O grupo celebra os relacionamentos que Deus coloca','Encerre orando pelos relacionamentos importantes'],aplicacao:'O ferro aguça o ferro. Os relacionamentos nos moldam e fazem crescer. (Pv 27:17)'},
  {id:193,titulo:'Minha Fonte de Sabedoria (2)',categoria:'Crescimento',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre como buscar sabedoria que traz felicidade',passos:['Peça que cada uma pense em como busca sabedoria','Cada mulher compartilha sua fonte de sabedoria','Como a Palavra, oração e comunidade a tornam mais sábia','O grupo aprende e se inspira','Encerre declarando que buscar sabedoria traz felicidade'],aplicacao:'Feliz o homem que acha sabedoria e obtém entendimento. (Pv 3:13)'},
  {id:194,titulo:'Algo que Me Motiva a Servir (3)',categoria:'Serviço',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre serviço como expressão de amor',passos:['Peça que cada uma pense no que a motiva a servir','Cada mulher compartilha essa motivação','Como o amor de Cristo a impulsiona a servir','O grupo celebra o espírito de serviço','Encerre declarando que o serviço expressa amor na prática'],aplicacao:'Servi-vos uns aos outros pelo amor. O serviço expressa amor. (Gl 5:13)'},
  {id:195,titulo:'Minha Palavra de Fé (2)',categoria:'Fé',tempo:'15 min',materiais:'Nenhum',objetivo:'Fortalecer a fé através de declarações bíblicas',passos:['Peça que cada uma pense em uma declaração de fé','Cada participante compartilha essa declaração','Como a fé agrada a Deus e transforma situações','O grupo confirma com amém cada declaração','Encerre declarando juntas que sem fé é impossível agradar a Deus'],aplicacao:'Sem fé é impossível agradar a Deus. A fé nos aproxima e transforma tudo. (Hb 11:6)'},
  {id:196,titulo:'Algo que Me Fortalece na Fé (3)',categoria:'Força',tempo:'15 min',materiais:'Nenhum',objetivo:'Refletir sobre o que fortalece a fé no Senhor',passos:['Peça que cada uma pense no que mais fortalece sua fé','Cada participante compartilha essa fonte de força','Como ela se fortalece no Senhor no cotidiano','O grupo aprende e adota novas práticas','Encerre declarando que nos fortalecemos no Senhor'],aplicacao:'Fortalecei-vos no Senhor e na força do Seu poder. Visti a armadura de Deus. (Ef 6:10)'},
  {id:197,titulo:'Minha Oração para o Futuro (3)',categoria:'Esperança',tempo:'20 min',materiais:'Nenhum',objetivo:'Refletir sobre o futuro com fé através da oração',passos:['Peça que cada uma pense em sua oração para o futuro','Cada mulher compartilha o que ora pelo futuro','Seus sonhos, esperanças e pedidos a Deus','O grupo ora coletivamente por esses futuros','Encerre declarando que Deus responde ao clamor'],aplicacao:'Clama a mim e eu te responderei e te anunciarei coisas grandes e ocultas. (Jr 33:3)'},
  {id:198,titulo:'Algo que Quero Entregar Hoje (2)',categoria:'Fé',tempo:'20 min',materiais:'Nenhum',objetivo:'Praticar confiança e entrega diária a Deus',passos:['Crie ambiente de confiança e abertura','Cada participante compartilha algo que quer entregar hoje','O grupo ora especificamente por cada entrega','Declare juntas que Deus cuida de cada situação','Encerre em paz sabendo que Deus age quando confiamos'],aplicacao:'Entrega o teu caminho ao Senhor, confia nEle e Ele agirá. (Sl 37:5)'},
  {id:199,titulo:'Minha Palavra de Gratidão (5)',categoria:'Gratidão',tempo:'10 min',materiais:'Nenhum',objetivo:'Expressar gratidão pela bondade eterna de Deus',passos:['Abra com reflexão sobre a bondade de Deus','Cada mulher compartilha um motivo de gratidão','Incentive gratidão por diferentes bênçãos','O grupo responde com amém e celebração','Encerre em oração de ação de graças coletiva'],aplicacao:'A bondade de Deus dura para sempre. Dai graças ao Senhor pois Ele é bom. (Sl 136:1)'},
  {id:200,titulo:'Algo que Me Aproxima de Deus (7)',categoria:'Espiritualidade',tempo:'15 min',materiais:'Nenhum',objetivo:'Celebrar a jornada espiritual e renovar o compromisso com Deus',passos:['Abra celebrando a jornada de fé do grupo','Cada mulher compartilha a prática que mais a aproxima de Deus','Como ela renovará seu compromisso espiritual','O grupo celebra juntas a caminhada','Encerre com momento especial de adoração e entrega a Deus'],aplicacao:'Aproximai-vos de Deus e Ele se aproximará de vós. Esta é a essência da vida cristã. (Tg 4:8)'},
];

// ── 100 PERGUNTAS PODEROSAS ──
const perguntas100 = [
  {id:'p1',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como você descreveria sua jornada de fé nos últimos meses?'},
  {id:'p2',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Que versículo tem guiado seu coração recentemente?'},
  {id:'p3',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Quando foi a última vez que você sentiu claramente a presença de Deus?'},
  {id:'p4',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como você costuma ouvir Deus no meio da rotina?'},
  {id:'p5',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Qual área da sua vida você sente que precisa entregar mais a Deus?'},
  {id:'p6',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Se você pudesse fazer uma pergunta a Deus hoje, qual seria?'},
  {id:'p7',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Qual evidência da bondade de Deus você viu esta semana?'},
  {id:'p8',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Em qual momento difícil você percebeu Deus mais perto?'},
  {id:'p9',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como saber quem você é em Cristo mudou sua forma de se ver?'},
  {id:'p10',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Qual fruto do Espírito você deseja desenvolver mais?'},
  {id:'p11',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Pelo que você tem aprendido a agradecer a Deus recentemente?'},
  {id:'p12',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como você separa momentos para ouvir a voz de Deus?'},
  {id:'p13',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como você percebe Deus usando seus dons?'},
  {id:'p14',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Qual promessa bíblica sustenta você em momentos difíceis?'},
  {id:'p15',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Existe algo que Deus está tratando em seu coração atualmente?'},
  {id:'p16',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como você tem demonstrado o amor de Cristo às pessoas ao seu redor?'},
  {id:'p17',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como a Palavra de Deus tem transformado sua forma de pensar?'},
  {id:'p18',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Qual é o maior desafio da sua vida espiritual hoje?'},
  {id:'p19',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Como a eternidade influencia suas decisões diárias?'},
  {id:'p20',categoria:'vida_espiritual',categoriaLabel:'Vida Espiritual',pergunta:'Que marca espiritual você gostaria de deixar nas pessoas?'},
  {id:'p21',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Qual foi o maior aprendizado que você teve este ano?'},
  {id:'p22',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Que hábito você gostaria de desenvolver para crescer como pessoa?'},
  {id:'p23',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Qual momento recente trouxe alegria ao seu coração?'},
  {id:'p24',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Que desafio ajudou você a amadurecer?'},
  {id:'p25',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Como você reage quando enfrenta frustrações?'},
  {id:'p26',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Qual qualidade sua você acredita que Deus quer usar mais?'},
  {id:'p27',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'O que costuma renovar suas forças emocionalmente?'},
  {id:'p28',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Que conselho você daria para sua versão de cinco anos atrás?'},
  {id:'p29',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'O que mais te inspira nas pessoas ao seu redor?'},
  {id:'p30',categoria:'vida_pessoal',categoriaLabel:'Vida Pessoal',pergunta:'Como você lida com inseguranças?'},
  {id:'p31',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Quem foi uma pessoa que marcou sua vida de forma positiva?'},
  {id:'p32',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'O que você mais valoriza em uma amizade verdadeira?'},
  {id:'p33',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Como você demonstra amor pelas pessoas próximas?'},
  {id:'p34',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Existe algum relacionamento que Deus está restaurando na sua vida?'},
  {id:'p35',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Como podemos apoiar melhor umas às outras?'},
  {id:'p36',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Qual atitude fortalece a comunhão entre mulheres?'},
  {id:'p37',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'O que você aprendeu sobre perdão?'},
  {id:'p38',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Como você reage quando alguém discorda de você?'},
  {id:'p39',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Que tipo de amizade você deseja cultivar?'},
  {id:'p40',categoria:'relacionamentos',categoriaLabel:'Relacionamentos',pergunta:'Como podemos criar encontros mais acolhedores?'},
  {id:'p41',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Pelo que você é mais grata nesta fase da vida?'},
  {id:'p42',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Que pequena bênção você percebeu recentemente?'},
  {id:'p43',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Qual lembrança sempre traz alegria ao seu coração?'},
  {id:'p44',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Como a gratidão muda sua forma de ver os desafios?'},
  {id:'p45',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'O que Deus já fez em sua vida que você nunca quer esquecer?'},
  {id:'p46',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Qual promessa bíblica te traz esperança hoje?'},
  {id:'p47',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Como você encontra esperança em momentos difíceis?'},
  {id:'p48',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'O que significa confiar no tempo de Deus?'},
  {id:'p49',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Como podemos celebrar melhor as vitórias umas das outras?'},
  {id:'p50',categoria:'gratidao_esperanca',categoriaLabel:'Gratidão e Esperança',pergunta:'Qual motivo de gratidão você gostaria de compartilhar hoje?'},
  {id:'p51',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Em que área você sente que Deus tem chamado você para servir?'},
  {id:'p52',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Como você percebe seus dons sendo usados para abençoar outras pessoas?'},
  {id:'p53',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'O que traz mais sentido à sua vida atualmente?'},
  {id:'p54',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Como você gostaria de impactar a vida de outras mulheres?'},
  {id:'p55',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Que sonho você acredita que Deus colocou em seu coração?'},
  {id:'p56',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'O que tem impedido você de avançar em direção ao seu propósito?'},
  {id:'p57',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Que experiência marcou profundamente sua caminhada espiritual?'},
  {id:'p58',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Como podemos apoiar umas às outras em nossos chamados?'},
  {id:'p59',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Qual legado você gostaria de deixar?'},
  {id:'p60',categoria:'proposito_chamado',categoriaLabel:'Propósito e Chamado',pergunta:'Como você define uma vida com propósito?'},
  {id:'p61',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Como você inclui Deus nas decisões do dia a dia?'},
  {id:'p62',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'O que ajuda você a manter a fé em tempos difíceis?'},
  {id:'p63',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Que prática espiritual fortalece sua caminhada?'},
  {id:'p64',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Como você encontra paz em meio às preocupações?'},
  {id:'p65',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Qual experiência fortaleceu sua confiança em Deus?'},
  {id:'p66',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'O que você tem aprendido sobre paciência?'},
  {id:'p67',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Como você busca sabedoria ao tomar decisões importantes?'},
  {id:'p68',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Que testemunho de fé marcou sua vida recentemente?'},
  {id:'p69',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Como você reage quando algo não acontece como planejado?'},
  {id:'p70',categoria:'fe_no_cotidiano',categoriaLabel:'Fé no Cotidiano',pergunta:'Como a fé influencia suas escolhas diárias?'},
  {id:'p71',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Qual área da sua vida espiritual você mais deseja desenvolver neste momento?'},
  {id:'p72',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'O que te ajuda a manter disciplina na vida espiritual?'},
  {id:'p73',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Como você encontra motivação para buscar a Deus diariamente?'},
  {id:'p74',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Qual livro ou versículo mais impactou sua fé?'},
  {id:'p75',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Que hábito espiritual você gostaria de fortalecer?'},
  {id:'p76',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'O que você aprendeu recentemente sobre confiar em Deus?'},
  {id:'p77',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Como você percebe Deus trabalhando em sua vida hoje?'},
  {id:'p78',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'O que significa amadurecer espiritualmente para você?'},
  {id:'p79',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'Como você pode incentivar outras mulheres na fé?'},
  {id:'p80',categoria:'crescimento_espiritual',categoriaLabel:'Crescimento Espiritual',pergunta:'O que mais fortalece sua comunhão com Deus?'},
  {id:'p81',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Qual momento da sua vida mais fortaleceu sua fé?'},
  {id:'p82',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'O que Deus tem falado ao seu coração recentemente?'},
  {id:'p83',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Como você encontra sentido nas dificuldades da vida?'},
  {id:'p84',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'O que você sente que precisa entregar a Deus hoje?'},
  {id:'p85',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Que palavra resume sua caminhada espiritual atualmente?'},
  {id:'p86',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Como você percebe a fidelidade de Deus em sua história?'},
  {id:'p87',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'O que te ajuda a permanecer firme na fé?'},
  {id:'p88',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Qual promessa bíblica sustenta sua esperança?'},
  {id:'p89',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'Como podemos crescer juntas como grupo?'},
  {id:'p90',categoria:'reflexao_final',categoriaLabel:'Reflexão Final',pergunta:'O que você deseja para o futuro da sua caminhada espiritual?'},
  {id:'p91',categoria:'extras',categoriaLabel:'Extras',pergunta:'O que mais te aproxima de Deus no dia a dia?'},
  {id:'p92',categoria:'extras',categoriaLabel:'Extras',pergunta:'Que experiência recente fortaleceu sua fé?'},
  {id:'p93',categoria:'extras',categoriaLabel:'Extras',pergunta:'O que significa confiar em Deus em todas as coisas?'},
  {id:'p94',categoria:'extras',categoriaLabel:'Extras',pergunta:'Qual ensinamento bíblico mais impacta sua vida hoje?'},
  {id:'p95',categoria:'extras',categoriaLabel:'Extras',pergunta:'Como você cultiva gratidão diariamente?'},
  {id:'p96',categoria:'extras',categoriaLabel:'Extras',pergunta:'O que fortalece sua esperança nos momentos difíceis?'},
  {id:'p97',categoria:'extras',categoriaLabel:'Extras',pergunta:'Que testemunho de fé você gostaria de compartilhar?'},
  {id:'p98',categoria:'extras',categoriaLabel:'Extras',pergunta:'Como você percebe Deus guiando seus passos atualmente?'},
  {id:'p99',categoria:'extras',categoriaLabel:'Extras',pergunta:'O que Deus tem ensinado a você nesta fase da vida?'},
  {id:'p100',categoria:'extras',categoriaLabel:'Extras',pergunta:'Como podemos apoiar umas às outras em oração?'},
];

const CORES_CATEGORIA_P = {
  vida_espiritual:'#7B5EA7',
  vida_pessoal:'#2D6E9E',
  relacionamentos:'#2E7D52',
  gratidao_esperanca:'#B8860B',
  proposito_chamado:'#6B21A8',
  fe_no_cotidiano:'#C05621',
  crescimento_espiritual:'#1D6A6A',
  reflexao_final:'#7C3D3D',
  extras:'#555555',
};

const upsells = {
  1:{
    title:'50 Encontros Completos',icon:'🌸',
    sub:'Encontros prontos para conduzir',
    oldPrice:'De R$47',newPrice:'R$24,90',
    btnLabel:'🌸 Quero os 50 Encontros — R$24,90',
    features:[
      {icon:'✅',text:'50 encontros 100% estruturados'},
      {icon:'✅',text:'Tema, dinâmica, versículo e reflexão'},
      {icon:'✅',text:'Perguntas para discussão em grupo'},
      {icon:'✅',text:'Aplicação prática para o cotidiano'},
      {icon:'✅',text:'Gerador automático dentro do app'},
    ]
  },
  2:{
    title:'Devocional para Mulheres — 7 Dias',icon:'📖',
    sub:'Vida espiritual pessoal e em grupo',
    oldPrice:'De R$27',newPrice:'R$12,90',
    btnLabel:'📖 Quero o Devocional — R$12,90',
    features:[
      {icon:'✅',text:'7 devocionais com tema, versículo e reflexão'},
      {icon:'✅',text:'Aplicação prática diária'},
      {icon:'✅',text:'Oração guiada ao final de cada dia'},
      {icon:'✅',text:'Ideal para uso individual ou em grupo'},
      {icon:'✅',text:'Pode ser usado em encontros também'},
    ]
  },
  3:{
    title:'Planejador de Encontros',icon:'📝',
    sub:'Organize seus encontros com facilidade',
    oldPrice:'De R$27',newPrice:'R$14,90',
    btnLabel:'📝 Quero o Planejador — R$14,90',
    features:[
      {icon:'✅',text:'Planejamento completo de cada encontro'},
      {icon:'✅',text:'Campo para tema, dinâmica, estudo e oração'},
      {icon:'✅',text:'Versículo via busca integrada'},
      {icon:'✅',text:'Histórico de planejamentos salvos'},
      {icon:'✅',text:'Exportar e compartilhar o planejamento'},
    ]
  },
  4:{
    title:'50 Quebra-Gelos Cristãos',icon:'🧊',
    sub:'Inicie seus encontros com energia e leveza',
    oldPrice:'De R$19,90',newPrice:'R$9,90',
    btnLabel:'🧊 Quero os Quebra-Gelos — R$9,90',
    features:[
      {icon:'✅',text:'50 atividades para aquecer o grupo'},
      {icon:'✅',text:'Ideais para o início de qualquer encontro'},
      {icon:'✅',text:'Rápidos, divertidos e com propósito'},
      {icon:'✅',text:'Filtro por categoria e tempo'},
      {icon:'✅',text:'Favoritar e acessar offline'},
    ]
  },
  5:{
    title:'100 Perguntas Poderosas',icon:'💬',
    sub:'Gere conversas transformadoras no grupo',
    oldPrice:'De R$19,90',newPrice:'R$9,90',
    btnLabel:'💬 Quero as Perguntas — R$9,90',
    features:[
      {icon:'✅',text:'100 perguntas reflexivas e profundas'},
      {icon:'✅',text:'Organizadas por categoria temática'},
      {icon:'✅',text:'Ideais para pequenos grupos e células'},
      {icon:'✅',text:'Filtro por tema e favoritos'},
      {icon:'✅',text:'Estímulo à partilha e crescimento espiritual'},
    ]
  },
  6:{
    title:'30 Estudos Bíblicos',icon:'📖',
    sub:'Conteúdo sólido para aprofundar a Palavra',
    oldPrice:'De R$19,90',newPrice:'R$9,90',
    btnLabel:'📖 Quero os Estudos — R$9,90',
    features:[
      {icon:'✅',text:'30 estudos bíblicos completos'},
      {icon:'✅',text:'Reflexão, perguntas e aplicação prática'},
      {icon:'✅',text:'Ideal para grupos de mulheres e células'},
      {icon:'✅',text:'Organizado por temas relevantes'},
      {icon:'✅',text:'Favoritar e acompanhar seu progresso'},
    ]
  },
};

let favorites=[], currentDetail=null, planos=[];
let favTabAtiva = 'todos';
// Declarações antecipadas — evita TDZ (temporal dead zone) em funções como fazerLogout
let historico = [];
let historicoEnc = [];
let encontrosGeradosSessao = [];
let conjuntosEncontros = [];

function syncAppCollectionsState(){
  if(!window.appStore) return;
  window.appStore.syncMany({
    favorites,
    planos,
    historico,
    historicoEnc,
    conjuntosGerados,
    conjuntosEncontros,
    encontrosGeradosSessao,
    geradasSessao: typeof geradasSessao !== 'undefined' ? geradasSessao : [],
    currentGeradaId: typeof currentGeradaId !== 'undefined' ? currentGeradaId : null,
    currentConjunto: typeof currentConjunto !== 'undefined' ? currentConjunto : null,
    usuarioAtual
  });
}

// ── PERSISTÊNCIA LOCAL ──
const STORAGE_KEY_PLANOS    = ()=> `encontros_planos_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_FAVORITOS = ()=> `encontros_favoritos_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_HIST_GER  = ()=> `encontros_hist_gerador_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_USO_DIN   = ()=> `encontros_uso_din_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_HIST_ENC_GER = ()=> `encontros_hist_enc_ger_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;

function salvarStorage(){
  try{
    if(!usuarioAtual?.email && !usuarioAtual?.nome) return;

    const keyPlanos = STORAGE_KEY_PLANOS();
    const rawAtualPlanos = storage.get(keyPlanos);

    if(Array.isArray(planos) && planos.length === 0 && rawAtualPlanos && rawAtualPlanos !== '[]'){
      console.warn('Bloqueado: tentativa de sobrescrever planos salvos com array vazio.');
      console.trace('TRACE salvarStorage vazio');
      return;
    }

    storage.setJSON(keyPlanos, planos);
    storage.setJSON(STORAGE_KEY_FAVORITOS(), favorites);
    storage.setJSON(STORAGE_KEY_HIST_GER(), conjuntosGerados);
    storage.setJSON(STORAGE_KEY_HIST_ENC_GER(), conjuntosEncontros);
    syncAppCollectionsState();
  }catch(e){
    console.warn('Storage indisponível', e);
  }
}


function carregarStorage(){
  try{
    const p = storage.get(STORAGE_KEY_PLANOS());
    planos = p ? JSON.parse(p) : [];
    const f = storage.get(STORAGE_KEY_FAVORITOS());
    favorites = f ? JSON.parse(f) : [];
    const h = storage.get(STORAGE_KEY_HIST_GER());
    conjuntosGerados = h ? JSON.parse(h) : [];
    const he = storage.get(STORAGE_KEY_HIST_ENC_GER());
    conjuntosEncontros = he ? JSON.parse(he) : [];
  }catch(e){ planos=[]; favorites=[]; conjuntosGerados=[]; conjuntosEncontros=[]; }
  syncAppCollectionsState();
}


// ── THEME ──
function toggleTheme(){
  const h=document.documentElement;
  const next=h.getAttribute('data-theme')==='dark'?'light':'dark';
  h.setAttribute('data-theme',next);
  storage.set('tema', next); if(window.appStore) window.appStore.set('theme', next);
  toastMsg(next==='dark'?'🌙 Modo noturno ativado':'☀️ Modo claro ativado');
}
(function(){
  const s = storage.get('tema'); if(s){ document.documentElement.setAttribute('data-theme', s); if(window.appStore) window.appStore.set('theme', s); return; }
  if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.setAttribute('data-theme','dark');
})();

// ── NAVIGATION ──
function fabScrollCheck(){
  const wrap = document.getElementById('gerar-fab-wrap');
  const homeScreen = document.getElementById('screen-home');
  if(!wrap || !homeScreen) return;
  // Altura real da nav
  const navEl = document.getElementById('bottom-nav');
  const navH = navEl ? navEl.offsetHeight : 60;
  // Padding bottom = altura da nav + margem de 10px
  wrap.style.paddingBottom = (navH + 10) + 'px';
  // Sumir quando o usuário chegou perto do fim (dentro de 160px)
  const scrolled = homeScreen.scrollTop;
  const visible = homeScreen.clientHeight;
  const total = homeScreen.scrollHeight;
  const distanceFromBottom = total - scrolled - visible;
  const nearBottom = distanceFromBottom < 160;
  wrap.classList.toggle('fab-hidden', nearBottom);
}

function nav(screenId, navId){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  if(!screen) return;
  screen.classList.add('active');
  screen.scrollTop = 0;
  const app = document.getElementById('app');
  if(app) app.scrollTop = 0;
  window.scrollTo(0,0);
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const el=document.getElementById(navId);
  if(el) el.classList.add('active');
  // Gerar FAB — só na home
  const fab = document.getElementById('gerar-fab-wrap');
  if(fab) fab.classList.toggle('visivel', screenId === 'screen-home');
  // Scroll listener para sumir o FAB perto do fim da página
  if(screenId === 'screen-home'){
    const homeScreen = document.getElementById('screen-home');
    if(homeScreen){
      homeScreen.onscroll = () => fabScrollCheck();
    }
  }
  if(screenId==='screen-gerar'){
    renderCardsGerarDinamica();
    // Auto-gerar no primeiro acesso (quando ainda está no placeholder)
    const gdTitulo = document.getElementById('gd-titulo');
    //if(gdTitulo && (!gdTitulo.textContent || gdTitulo.textContent === '—')){
    //  gerarTudoJunto();}
    if(screenId==='screen-gerar'){
    renderCardsGerarDinamica();
    }
    
    if(conjuntosGerados.length){ const w=document.getElementById('gerar-historico-wrap'); if(w) w.style.display='block'; renderHistoricoConjuntos(); }
  }
  if(screenId==='screen-novidades') renderNovidadesList();
  if(screenId==='screen-favoritos'){ favTabAtiva='todos'; document.querySelectorAll('.fav-tab').forEach(b=>b.classList.remove('active')); const t0=document.getElementById('fav-tab-todos'); if(t0) t0.classList.add('active'); renderFavoritos(); }
}

// ── DINÂMICAS ──
function getUsoDin(id){ const u = storage.getJSON(STORAGE_KEY_USO_DIN(), {}); return u[id] || 0; }
function incrementarUsoDin(id){ const k = STORAGE_KEY_USO_DIN(); const u = storage.getJSON(k, {}); u[id] = (u[id] || 0) + 1; storage.setJSON(k, u); }

function renderDinamicas(list){
  const c=document.getElementById('dinamicas-list');
  if(!list.length){c.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t('din.vazia')}</h4><p>${t('din.vazia.sub')}</p></div>`;return;}
  c.innerHTML=list.map(raw=>{
    const d = getDinamica(raw);
    const uso = getUsoDin(d.id);
    const usoBadge = uso>0 ? `<span class="tag sage" style="font-size:10px;padding:2px 8px">✓ ${uso}×</span>` : '';
    return `
    <div class="content-card" onclick="openDetail(${d.id})">
      <div class="content-card-top">
        <h4>${d.titulo}</h4>
        <button class="fav-btn" onclick="event.stopPropagation();toggleFav(${d.id})" id="fav-${d.id}">${favorites.includes(d.id)?'❤️':'🤍'}</button>
      </div>
      <div class="content-card-meta">
        <span class="tag">${d.categoria}</span>
        <span class="tag sage">⏱ ${d.tempo}</span>
        ${usoBadge}
      </div>
    </div>`}).join('');
}
function popularFiltroCategoria(){
  const sel = document.getElementById('din-filter-cat');
  if(!sel) return;
  const cats = [...new Set(dinamicas.map(d=>d.categoria))].sort();
  sel.innerHTML = '<option value="">🏷 Categoria</option>' +
    cats.map(c=>`<option value="${c}">${c}</option>`).join('');
}

function aplicarFiltros(){
  const q = (document.getElementById('din-search-input')?.value||'').toLowerCase();
  const cat = document.getElementById('din-filter-cat')?.value||'';
  const tempo = document.getElementById('din-filter-tempo')?.value||'';
  const clear = document.getElementById('din-filter-clear');
  const badge = document.getElementById('din-count-badge');
  const hasFilter = q||cat||tempo;
  if(clear) clear.style.display = hasFilter ? 'block' : 'none';
  let list = dinamicas;
  if(q) list = list.filter(d=>
    d.titulo.toLowerCase().includes(q)||
    d.categoria.toLowerCase().includes(q)||
    d.objetivo.toLowerCase().includes(q)
  );
  if(cat) list = list.filter(d=>d.categoria===cat);
  if(tempo){
    const max = parseInt(tempo);
    list = list.filter(d=>{
      const min = parseInt(d.tempo);
      if(max===30) return min>=30;
      return min<=max;
    });
  }
  if(badge) badge.textContent = list.length;
  renderDinamicas(list);
}

function limparFiltros(){
  const si = document.getElementById('din-search-input');
  const cat = document.getElementById('din-filter-cat');
  const tempo = document.getElementById('din-filter-tempo');
  if(si) si.value='';
  if(cat) cat.value='';
  if(tempo) tempo.value='';
  aplicarFiltros();
}

function filterDinamicas(q){ aplicarFiltros(); }
function doSearch(q){if(q.length>1){nav('screen-dinamicas','nav-dinamicas');filterDinamicas(q);}}

// ── DETAIL ──
function openDetail(id){
  const raw=dinamicas.find(x=>x.id===id);if(!raw)return;
  const d=getDinamica(raw);
  currentDetail=raw;
  document.getElementById('detail-title').textContent=d.titulo;
  document.getElementById('detail-tags').innerHTML=`<span class="tag">${d.categoria}</span><span class="tag sage">⏱ ${d.tempo}</span>`;
  document.getElementById('detail-body').innerHTML=`
    <div class="detail-section"><h5>${t('din.objetivo')}</h5><p>${d.objetivo}</p></div>
    <div class="detail-section"><h5>${t('din.materiais')}</h5><p>${d.materiais}</p></div>
    <div class="detail-section"><h5>${t('din.passos')}</h5>
      <ul class="steps">${d.passos.map((p,i)=>`<li><span class="step-num">${i+1}</span>${p}</li>`).join('')}</ul>
    </div>
    <div class="detail-section" style="border-left:3px solid var(--gold)"><h5>${t('din.aplicacao')}</h5><p>${d.aplicacao}</p></div>`;
  updateDetailFavBtn();
  updateDoneBtn();
  nav('screen-detail','nav-dinamicas');
}
function updateDetailFavBtn(){
  if(!currentDetail)return;
  const isFav = favorites.includes(currentDetail.id);
  document.getElementById('detail-fav-btn').innerHTML = isFav
    ? `❤️ <span>${t('btn.salvo')}</span>`
    : `🤍 <span>${t('btn.salvar.label')}</span>`;
}
function toggleFavDetail(){
  if(!currentDetail)return;
  if(favorites.includes(currentDetail.id)){
    confirmarDesfavoritar(()=>{ toggleFav(currentDetail.id); });
  } else {
    toggleFav(currentDetail.id);
    updateDetailFavBtn();
  }
}

// ── FAVORITES ──
function toggleFav(id){
  if(favorites.includes(id)){
    // Pede confirmação antes de remover
    confirmarDesfavoritar(() => {
      favorites=favorites.filter(x=>x!==id);
      toastMsg(t('toast.fav.rm'));
      salvarStorage();
      renderDinamicas(dinamicas);renderFavoritos();
      updateDetailFavBtn();
      const _fcl=document.getElementById('fav-count-label'); if(_fcl) _fcl.textContent=`${favorites.length} salvos`;
    });
  } else {
    favorites.push(id);
    toastMsg(t('toast.fav.add'));
    salvarStorage();
    renderDinamicas(dinamicas);renderFavoritos();
    const _fcl=document.getElementById('fav-count-label'); if(_fcl) _fcl.textContent=`${favorites.length} salvos`;
  }
}
function confirmarDesfavoritar(callback){
  const overlay = document.getElementById('modal-desfav-overlay');
  overlay.classList.add('open');
  document.getElementById('modal-desfav-confirm').onclick = ()=>{
    overlay.classList.remove('open');
    callback();
  };
  document.getElementById('modal-desfav-cancel').onclick = ()=>{
    overlay.classList.remove('open');
  };
}
function setFavTab(tab){
  favTabAtiva = tab;
  document.querySelectorAll('.fav-tab').forEach(b=>b.classList.remove('active'));
  const el = document.getElementById('fav-tab-'+tab);
  if(el) el.classList.add('active');
  renderFavoritos();
}
function atualizarFavTabAtual(){
  if(document.getElementById('screen-favoritos')?.classList.contains('active')) renderFavoritos();
}

function renderFavoritos(){
  const c=document.getElementById('favoritos-list');
  if(!c) return;

  // Coletar itens de cada categoria
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const favDins = favorites.map(id=>dinamicas.find(d=>d.id===id)).filter(Boolean);
  const keyP = 'fav_perguntas_'+email;
  const keyE = 'fav_encontros_'+email;
  const keyQ = 'fav_qgelos_'+email;
  const keyConj = 'fav_conjuntos_'+email;
  const keyEncGer = 'fav_encontros_ger_'+email;
  let favPergs=[],favEncs=[],favQGs=[],favConjuntos=[],favEncontrosGerados=[];
  try{ favPergs=(storage.getJSON(keyP, [])).map(id=>perguntas100.find(p=>p.id===id)).filter(Boolean); }catch(e){}
  try{ favEncs=(storage.getJSON(keyE, [])).map(id=>encontros50.find(x=>x.id===id)).filter(Boolean); }catch(e){}
  try{ favQGs=(storage.getJSON(keyQ, [])).map(id=>quebraGelos50.find(x=>x.id===id)).filter(Boolean); }catch(e){}
  try{
  favConjuntos = (storage.getJSON(keyConj, []))
    .map(id => conjuntosGerados.find(c => String(c.id) === String(id)))
    .filter(Boolean);
  }catch(e){}

  try{
  favEncontrosGerados = (storage.getJSON(keyEncGer, []))
    .map(id => conjuntosEncontros.find(c => String(c.id) === String(id)))
    .filter(Boolean);
  }catch(e){}
  const total = favDins.length + favPergs.length + favEncs.length + favQGs.length + favConjuntos.length + favEncontrosGerados.length;

  if(!total){
    // Sugestões: 3 dinâmicas aleatórias
    const sugs = [...dinamicas].sort(()=>Math.random()-.5).slice(0,3);
    const sugsHtml = sugs.map(raw=>{
      const d=getDinamica(raw);
      return `<div class="content-card" style="margin-bottom:8px;cursor:pointer" onclick="openSugPreview(${d.id})">
        <div class="content-card-top"><h4 style="font-size:14px">${d.titulo}</h4></div>
        <div class="content-card-meta" style="margin-bottom:10px"><span class="tag">${d.categoria}</span><span class="tag sage">⏱ ${d.tempo}</span></div>
        <button onclick="event.stopPropagation();toggleFav(${d.id});renderFavoritos()" style="width:100%;padding:8px;background:var(--gold-pale);border:1.5px solid var(--gold-light);border-radius:50px;font-size:12px;font-weight:700;color:var(--text-mid);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">${t('fav.salvar.btn')}</button>
      </div>`;
    }).join('');
    c.innerHTML=`<div style="padding:32px 20px 20px;text-align:center">
      <div style="font-size:48px;margin-bottom:12px">🤍</div>
      <h4 style="font-family:'Cormorant Garamond',serif;font-size:18px;color:var(--purple2);margin-bottom:8px">${t('fav.vazio.titulo')}</h4>
      <p style="font-size:13px;color:var(--text-soft);line-height:1.7;margin-bottom:20px">${t('fav.vazio.sub')}</p>
      <p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px">💡 Sugestões para você</p>
      ${sugsHtml}
    </div>`;
    return;
  }

  let html = '<div class="content-list">';

  const showDins  = favTabAtiva==='todos' || favTabAtiva==='dinamicas';
  const showPergs = favTabAtiva==='todos' || favTabAtiva==='perguntas';
  const showEncs  = favTabAtiva==='todos' || favTabAtiva==='encontros';
  const showQGs   = favTabAtiva==='todos' || favTabAtiva==='qgelos';
  const showConj  = favTabAtiva==='todos' || favTabAtiva==='conjuntos'; // Conjuntos gerados na aba dinamicas
  const showEncGer = favTabAtiva==='todos' || favTabAtiva==='encontros'; // Encontros gerados na aba encontros

  if(showDins && favDins.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:4px 0 2px">🎭 Dinâmicas</p>`;
    html+=favDins.map(d=>`
      <div class="content-card" onclick="openDetail(${d.id})">
        <div class="content-card-top"><h4>${d.titulo}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();toggleFav(${d.id})">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${d.categoria}</span><span class="tag sage">⏱ ${d.tempo}</span></div>
      </div>`).join('');
  }

  if(showConj && favConjuntos.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:8px 0 2px">✨ Conjuntos</p>`;
    html+=favConjuntos.map(c=>`
      <div class="content-card" onclick="abrirConjuntoPreview(${c.id})">
        <div class="content-card-top"><h4>${c.nome || `Conjunto ${c.tema && c.tema !== 'Aleatório' ? 'sobre ' + c.tema : 'selecionado'}`}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();toggleFavConjunto(${c.id});renderFavoritos()">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${c.tema !== 'Aleatório' ? c.tema : 'Gerado'}</span><span class="tag sage">⏱ Conjunto</span></div>
      </div>`).join('');
  }

  if(showPergs && favPergs.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:8px 0 2px">💬 Perguntas</p>`;
    html+=favPergs.map(p=>`
      <div class="content-card" style="cursor:default">
        <div class="content-card-top"><h4>${p.pergunta}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();toggleFavPergunta('${p.id}');renderFavoritos()">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${p.categoriaLabel}</span></div>
      </div>`).join('');
  }

  if(showQGs && favQGs.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:8px 0 2px">🧊 Quebra-Gelos</p>`;
    html+=favQGs.map(q=>`
      <div class="content-card" onclick="openQGDetail(${q.id})">
        <div class="content-card-top"><h4>${q.titulo}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();(function(id){
            const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
            const k='fav_qgelos_'+email;
            confirmarDesfavoritar(()=>{let f=storage.getJSON(k, []);f=f.filter(x=>x!==String(id));storage.setJSON(k, f);toastMsg(t('toast.fav.rm'));renderFavoritos();});
          })(${q.id})">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${q.categoria}</span><span class="tag sage">⏱ ${q.duracao}</span></div>
      </div>`).join('');
  }

  if(showEncs && favEncs.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:8px 0 2px">🌸 Encontros</p>`;
    html+=favEncs.map(e=>`
      <div class="content-card" onclick="openEncontroDetail(${e.id})">
        <div class="content-card-top"><h4>${e.titulo}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();(function(id){
            const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
            const k='fav_encontros_'+email;
            confirmarDesfavoritar(()=>{let f=storage.getJSON(k, []);f=f.filter(x=>x!==String(id));storage.setJSON(k, f);toastMsg(t('toast.fav.rm'));renderFavoritos();});
          })(${e.id})">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${e.categoria}</span><span class="tag sage">📖 ${e.versiculo}</span></div>
      </div>`).join('');
  }

  if(showEncGer && favEncontrosGerados.length){
    if(favTabAtiva==='todos') html+=`<p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.8px;padding:8px 0 2px">🌸 Encontros Gerados</p>`;
    html+=favEncontrosGerados.map(e=>`
      <div class="content-card" onclick="abrirEncontroPreviewGerado(${e.id})">
        <div class="content-card-top"><h4>${e.nome || e.enc.titulo}</h4>
          <button class="fav-btn" onclick="event.stopPropagation();(function(id){
            const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
            const k='fav_encontros_ger_'+email;
            confirmarDesfavoritar(()=>{let f=storage.getJSON(k, []);f=f.filter(x=>x!==String(id));storage.setJSON(k, f);toastMsg(t('toast.fav.rm'));renderFavoritos();});
          })(${e.id})">❤️</button>
        </div>
        <div class="content-card-meta"><span class="tag">${e.enc.categoria}</span><span class="tag sage">📖 ${e.enc.versiculo}</span></div>
      </div>`).join('');
  }

  // Se a aba selecionada não tem itens
  if((favTabAtiva==='dinamicas' && !favDins.length && !favConjuntos.length) ||
     (favTabAtiva==='perguntas' && !favPergs.length) ||
     (favTabAtiva==='qgelos'   && !favQGs.length)   ||
     (favTabAtiva==='encontros'&& !favEncs.length && !favEncontrosGerados.length)){
    html+=`<div class="empty-state" style="padding:40px 20px"><div class="empty-icon">🤍</div><p style="font-size:13px;color:var(--text-soft)">${t('fav.categoria.vazia')}</p></div>`;
  }

  html+='</div>';
  c.innerHTML = html;
}

function openSugPreview(id){
  const raw = dinamicas.find(d=>d.id===id);
  if(!raw) return;
  const d = getDinamica(raw);
  window._sugPreviewId = id;

  document.getElementById('sug-preview-cat').textContent = d.categoria;
  document.getElementById('sug-preview-titulo').textContent = d.titulo;
  document.getElementById('sug-preview-tempo').textContent = '⏱ ' + d.tempo;
  document.getElementById('sug-preview-mat').textContent = '📦 ' + (d.materiais || 'Nenhum');

  const passos = (d.passos||[]).slice(0,3).map((p,i)=>`
    <div style="display:flex;gap:10px;align-items:flex-start">
      <span style="min-width:22px;height:22px;border-radius:50%;background:var(--rose-light);color:var(--rose);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px">${i+1}</span>
      <span style="font-size:13px;color:var(--text);line-height:1.5">${p}</span>
    </div>`).join('');
  const maisPassos = (d.passos||[]).length > 3
    ? `<p style="font-size:12px;color:var(--text-soft);margin-top:4px">+ ${d.passos.length-3} passos — clique em "Ver completo"</p>` : '';

  document.getElementById('sug-preview-body').innerHTML = `
    <div>
      <p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">🎯 Objetivo</p>
      <p style="font-size:14px;color:var(--text);line-height:1.6">${d.objetivo}</p>
    </div>
    <div>
      <p style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">📋 Passos</p>
      <div style="display:flex;flex-direction:column;gap:8px">${passos}</div>
      ${maisPassos}
    </div>
    ${d.aplicacao ? `<div style="background:var(--gold-pale);border-left:3px solid var(--gold);border-radius:0 10px 10px 0;padding:12px 14px">
      <p style="font-size:11px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:.6px;margin-bottom:4px">✦ Aplicação</p>
      <p style="font-size:13px;color:var(--text-mid);line-height:1.5">${d.aplicacao}</p>
    </div>` : ''}
  `;

  const isFav = favorites.includes(id);
  const favBtn = document.getElementById('sug-preview-fav-btn');
  favBtn.textContent = isFav ? '❤️ Salvo nos favoritos' : '🤍 Salvar nos favoritos';
  favBtn.onclick = () => {
    toggleFav(id);
    const nowFav = favorites.includes(id);
    favBtn.textContent = nowFav ? '❤️ Salvo nos favoritos' : '🤍 Salvar nos favoritos';
    renderFavoritos();
  };

  document.getElementById('modal-sug-preview').classList.add('open');
}

function closeSugPreview(e){
  if(e.target === document.getElementById('modal-sug-preview')) closeSugPreviewDirect();
}
function closeSugPreviewDirect(){
  document.getElementById('modal-sug-preview').classList.remove('open');
}

// ── GERAR ── // ids de dinâmicas já geradas nesta sessão
let geradasSessao = [];
let currentGeradaId = null;
let currentConjunto = null; // { din, estudo, pergunta, tema }
let conjuntosGerados = []; // histórico de conjuntos completos
let currentEncDetail = null;
let currentQGDetail = null;

function getTemaSelecionado(){
  return document.getElementById('gerar-tema-sel')?.value || '';
}

function getDinamicaPorTema(tema){
  const pool = tema
    ? dinamicas.filter(d => d.categoria && d.titulo && (
        d.categoria.toLowerCase().includes(tema.toLowerCase()) ||
        d.titulo.toLowerCase().includes(tema.toLowerCase())
      ))
    : dinamicas;
  const available = (pool.length ? pool : dinamicas).filter(d => !geradasSessao.includes(d.id));
  if(!available.length){ geradasSessao=[]; return dinamicas[Math.floor(Math.random()*dinamicas.length)]; }
  return available[Math.floor(Math.random()*available.length)];
}

function getEstudoPorTema(tema){
  if(!estudos30?.length) return null;
  const pool = tema
    ? estudos30.filter(e => e.titulo && e.titulo.toLowerCase().includes(tema.toLowerCase()))
    : estudos30;
  const src = pool.length ? pool : estudos30;
  return src[Math.floor(Math.random()*src.length)];
}

function getPerguntaPorTema(tema){
  if(!perguntas100?.length) return null;
  const pool = tema
    ? perguntas100.filter(p => p.categoriaLabel && p.categoriaLabel.toLowerCase().includes(tema.toLowerCase()))
    : perguntas100;
  const src = pool.length ? pool : perguntas100;
  return src[Math.floor(Math.random()*src.length)];
}

function renderCardsGerarDinamica() {
  const m = usuarioAtual?.modulos || {};

  // Card Estudo
  const estEl = document.getElementById('gerar-card-estudo');
  if(estEl) {
    if(m.estudos) {
      const est = currentConjunto?.estudo || null;
      estEl.innerHTML = `<div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--sage-light)">
          <span>📖</span><h4>${t('gerar.card.estudo')}</h4>
          <button class="gerar-card-regen" onclick="gerarSoEstudo()" title="Gerar outro estudo" style="background:rgba(74,124,89,.15);border-radius:50px;padding:4px 10px;font-size:12px;font-weight:600;color:var(--sage);border:1px solid rgba(74,124,89,.3)">↺ nova</button>
        </div>
        <div class="gerar-card-body">
          <h5 id="gd-estudo-titulo">${est?est.titulo:'—'}</h5>
          <p id="gd-estudo-ver" style="font-size:12px;color:var(--text-soft)">${est?est.versiculo:''}</p>
        </div></div>`;
    } else {
      estEl.innerHTML = `<div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--sage-light)"><span>📖</span><h4>${t('gerar.card.estudo')}</h4></div>
        <div class="gerar-card-body">
          <span style="font-size:12px;background:var(--sage-light);color:var(--sage);padding:2px 10px;border-radius:50px;font-weight:600;display:inline-block;margin-bottom:6px">🔒 ${t('gerar.bloqueado')}</span>
          <p style="color:var(--text-soft)">${t('gerar.estudo.bloqueado')}</p></div></div>`;
    }
  }

  // Card Pergunta
  const pgEl = document.getElementById('gerar-card-pergunta');
  if(pgEl) {
    if(m.perguntas) {
      const pg = currentConjunto?.pergunta || null;
      pgEl.innerHTML = `<div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--rose-light)">
          <span>💬</span><h4>${t('gerar.card.pergunta')}</h4>
          <button class="gerar-card-regen" onclick="gerarSoPergunta()" title="Gerar outra pergunta" style="background:rgba(180,80,150,.15);border-radius:50px;padding:4px 10px;font-size:12px;font-weight:600;color:var(--rose);border:1px solid rgba(180,80,150,.3)">↺ nova</button>
        </div>
        <div class="gerar-card-body"><p id="gd-pergunta-txt">${pg?pg.pergunta:'—'}</p></div></div>`;
    } else {
      pgEl.innerHTML = `<div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--rose-light)"><span>💬</span><h4>${t('gerar.card.pergunta')}</h4></div>
        <div class="gerar-card-body">
          <span style="font-size:12px;background:var(--rose-light);color:var(--rose);padding:2px 10px;border-radius:50px;font-weight:600;display:inline-block;margin-bottom:6px">🔒 ${t('gerar.bloqueado')}</span>
          <p style="color:var(--text-soft)">${t('gerar.pergunta.bloqueado')}</p></div></div>`;
    }
  }
}

function gerarTudoJunto(){
  const tema = getTemaSelecionado();
  const m = usuarioAtual?.modulos || {};
  const raw = getDinamicaPorTema(tema);
  const d = getDinamica(raw);
  geradasSessao.push(raw.id);
  currentGeradaId = raw.id;

  const estRaw = m.estudos ? getEstudoPorTema(tema) : null;
  const pgRaw  = m.perguntas ? getPerguntaPorTema(tema) : null;
  const est = estRaw ? getEstudo(estRaw) : null;
  const pg  = pgRaw ? getPerguntaTrad(pgRaw) : null;

  currentConjunto = { din: d, estudo: est, pergunta: pg, tema: tema || 'Aleatório' };

  // Update din card
  document.getElementById('gd-titulo').textContent = d.titulo;
  document.getElementById('gd-desc').textContent = d.objetivo;

  renderCardsGerarDinamica();
  adicionarConjuntoAoHistorico(currentConjunto);
  setTimeout(() => {
  const ultimo = conjuntosGerados[0];
  if (ultimo) renomearConjunto(ultimo.id);
}, 100);
  toastTop(t('toast.gerar.conj'));
}

// Alias para compatibilidade
function gerarDinamica(){ gerarTudoJunto(); }

function gerarPorTema(){
  // Ao trocar o tema, gera um novo conjunto
  gerarTudoJunto();
}

function gerarSoDinamica(){
  const tema = getTemaSelecionado();
  const raw = getDinamicaPorTema(tema);
  const d = getDinamica(raw);
  geradasSessao.push(raw.id);
  currentGeradaId = raw.id;
  if(currentConjunto) currentConjunto.din = d;
  // Atualizar entrada mais recente no histórico
  if(conjuntosGerados.length && currentConjunto) { conjuntosGerados[0].din = d; }
  document.getElementById('gd-titulo').textContent = d.titulo;
  document.getElementById('gd-desc').textContent = d.objetivo;
  salvarStorage();
  renderHistoricoConjuntos();
  toastMsg(t('toast.nova.dinamica'));
}

function gerarSoEstudo(){
  const tema = getTemaSelecionado();
  const raw = getEstudoPorTema(tema);
  const est = raw ? getEstudo(raw) : null;
  if(currentConjunto) currentConjunto.estudo = est;
  if(conjuntosGerados.length && currentConjunto) { conjuntosGerados[0].estudo = est; }
  const tEl = document.getElementById('gd-estudo-titulo');
  const vEl = document.getElementById('gd-estudo-ver');
  if(tEl) tEl.textContent = est?.titulo || '';
  if(vEl) vEl.textContent = est?.versiculo || '';
  salvarStorage();
  renderHistoricoConjuntos();
  toastMsg(t('toast.novo.estudo'));
}

function gerarSoPergunta(){
  const tema = getTemaSelecionado();
  const raw = getPerguntaPorTema(tema);
  const pg = raw ? getPerguntaTrad(raw) : null;
  if(currentConjunto) currentConjunto.pergunta = pg;
  if(conjuntosGerados.length && currentConjunto) { conjuntosGerados[0].pergunta = pg; }
  const pEl = document.getElementById('gd-pergunta-txt');
  if(pEl) pEl.textContent = pg?.pergunta || '';
  salvarStorage();
  renderHistoricoConjuntos();
  toastMsg(t('toast.nova.pergunta'));
}

function adicionarConjuntoAoHistorico(conjunto) {
  const wrap = document.getElementById('gerar-historico-wrap');
  const list = document.getElementById('gerar-historico-list');
  if(!wrap||!list) return;

  const id = Date.now();
  conjuntosGerados.unshift({id, ...conjunto});
  if(conjuntosGerados.length > 20) conjuntosGerados.pop();

  salvarStorage();
  renderHistoricoConjuntos();
  wrap.style.display = 'block';
}

function renderHistoricoConjuntos(){
  const list = document.getElementById('gerar-historico-list');
  if(!list) return;
  list.innerHTML = conjuntosGerados.map(c=>`
    <div class="gerar-conjunto-item" style="flex-direction:column;align-items:stretch;gap:10px;cursor:default">
      <!-- Linha principal -->
      <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="abrirConjuntoPreview(${c.id})">
        <span style="font-size:20px">🎭</span>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.nome || c.din.titulo}</div>
          <div style="font-size:11px;color:var(--text-soft)">
            ${c.tema !== 'Aleatório' ? '🏷 '+c.tema+' · ' : ''}
            ${c.estudo ? '📖 '+c.estudo.titulo.slice(0,18)+'… ' : ''}
            ${c.pergunta ? '💬' : ''}
          </div>
        </div>
        <span style="color:var(--text-soft);font-size:16px;flex-shrink:0">›</span>
      </div>
      <!-- Ações -->
      <div style="display:flex;gap:8px;border-top:1px solid var(--border);padding-top:8px">
        <button onclick="toggleFavConjunto(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:${isFavConjunto(c.id)?'var(--rose)':'var(--text-soft)'};cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">
          ${isFavConjunto(c.id) ? '❤️ Salvo' : '🤍 Favoritar'}
        </button>
        <button onclick="renomearConjunto(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:var(--text-soft);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">
          ${t('gerar.hist.rename')}
        </button>
        <button onclick="abrirConjuntoPreview(${c.id})" style="flex:1;background:var(--gold);border:none;border-radius:50px;padding:6px 10px;font-size:12px;font-weight:700;color:#fff;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">
          ${t('gerar.hist.view')}
        </button>
      </div>
    </div>`).join('');
}

function abrirConjuntoPreview(id){
  const c = conjuntosGerados.find(x=>x.id===id);
  if(!c) return;
  const d = c.din;

  document.getElementById('cprev-tema').textContent =
    c.nome ? '📋 '+c.nome : (c.tema !== 'Aleatório' ? t('gerar.tema.label')+' '+c.tema : t('gerar.conj.aleatorio'));

  let html = '';

  // Dinâmica completa
  html += `<div style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">🎭 Dinâmica do Encontro</div>
    <div class="gerar-card">
      <div class="gerar-card-header"><span>🎭</span><h4>${d.titulo}</h4></div>
      <div class="gerar-card-body">
        <div class="detail-section" style="margin-bottom:0">
          <h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">🎯 Objetivo</h5>
          <p>${d.objetivo}</p>
        </div>
        <div class="detail-section" style="margin-top:10px;margin-bottom:0">
          <h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">📦 Materiais</h5>
          <p>${d.materiais}</p>
        </div>
        <div class="detail-section" style="margin-top:10px;margin-bottom:0">
          <h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">📋 Passos</h5>
          <ol style="padding-left:16px;margin:0">${d.passos.map(p=>`<li style="font-size:13px;color:var(--text-soft);margin-bottom:4px">${p}</li>`).join('')}</ol>
        </div>
        <div style="margin-top:10px;padding:10px;background:var(--gold-pale);border-radius:8px;border-left:3px solid var(--gold)">
          <h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">✦ Aplicação Espiritual</h5>
          <p>${d.aplicacao}</p>
        </div>
      </div>
    </div>
  </div>`;

  // Estudo completo
  if(c.estudo){
    const e = c.estudo;
    html += `<div style="margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📖 Estudo Bíblico</div>
      <div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--sage-light)"><span>📖</span><h4>${e.titulo}</h4></div>
        <div class="gerar-card-body">
          <p style="font-weight:600;color:var(--sage);margin-bottom:6px">📖 ${e.versiculo}</p>
          ${e.versiculoTexto ? `<p style="font-style:italic;margin-bottom:10px">"${e.versiculoTexto}"</p>` : ''}
          ${e.reflexao ? `<p>${e.reflexao}</p>` : ''}
          ${e.perguntas?.length ? `<div style="margin-top:10px"><h5 style="font-size:12px;color:var(--sage);margin-bottom:6px">❓ Perguntas para discussão</h5>${e.perguntas.map(q=>`<p style="margin-bottom:4px">• ${q}</p>`).join('')}</div>` : ''}
        </div>
      </div>
    </div>`;
  }

  // Pergunta completa
  if(c.pergunta){
    const p = c.pergunta;
    html += `<div style="margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;color:var(--text-soft);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">💬 Pergunta para Discussão</div>
      <div class="gerar-card">
        <div class="gerar-card-header" style="background:var(--rose-light)"><span>💬</span><h4>${p.categoriaLabel||''}</h4></div>
        <div class="gerar-card-body">
          <p style="font-size:15px;font-weight:600;color:var(--text)">${p.pergunta}</p>
        </div>
      </div>
    </div>`;
  }

  html += `<button class="share-btn primary" style="width:100%;border-radius:50px;padding:14px;margin-top:4px" onclick="fecharConjuntoPreviewBtn()" data-i18n="novidades.fechar">Fechar</button>`;

  document.getElementById('cprev-body').innerHTML = html;
  document.getElementById('conjunto-preview-overlay').classList.add('open');
}

function fecharConjuntoPreviewBtn(){
  document.getElementById('conjunto-preview-overlay').classList.remove('open');
}
function fecharConjuntoPreview(e){
  if(e.target===document.getElementById('conjunto-preview-overlay')) fecharConjuntoPreviewBtn();
}
function isFavConjunto(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_conjuntos_'+email;
  const favs = storage.getJSON(key, []);
  return favs.includes(String(id));
}

function toggleFavConjunto(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_conjuntos_'+email;
  let favs = storage.getJSON(key, []);
  const sid = String(id);

  if(favs.includes(sid)){
    confirmarDesfavoritar(()=>{
      favs = favs.filter(x=>x!==sid);
      storage.setJSON(key, favs);
      salvarStorage();
      toastMsg(t('toast.fav.rm'));
      renderFavoritos();
      renderHistoricoConjuntos();
    });
    return;
  } else {
    favs.push(sid);
    storage.setJSON(key, favs);
    salvarStorage();
    toastMsg(t('toast.fav.add'));
  }

  renderFavoritos();
  renderHistoricoConjuntos();
}

let _renomearId = null;
function renomearConjunto(id){
  const c = conjuntosGerados.find(x=>x.id===id);
  if(!c) return;
  _renomearId = id;
  const input = document.getElementById('renomear-input');
  input.value = c.nome || (
  c.tema && c.tema !== 'Aleatório'
    ? `Conjunto sobre ${c.tema}`
    : 'Conjunto selecionado'
  );  
  document.getElementById('modal-renomear').classList.add('open');
  setTimeout(()=>{ input.focus(); input.select(); }, 150);
}
function confirmarRenomear(){
  const novoNome = document.getElementById('renomear-input').value.trim();
  const ctx = window._renomearContext || 'dinamica';
  if(novoNome){
    if(ctx === 'encontro' && _renomearEncId){
      const c = conjuntosEncontros.find(x=>x.id===_renomearEncId);
      if(c){ c.nome = novoNome; salvarStorage(); renderHistoricoEncontros(); toastMsg(t('toast.nome.atualizado')); }
    } else if(_renomearId){
      const c = conjuntosGerados.find(x=>x.id===_renomearId);
      if(c){ c.nome = novoNome; salvarStorage(); renderHistoricoConjuntos(); toastMsg(t('toast.nome.atualizado')); }
    }
  }
  document.getElementById('modal-renomear').classList.remove('open');
  _renomearId = null; _renomearEncId = null; window._renomearContext = 'dinamica';
}
function fecharRenomearModal(e){
  if(e.target===document.getElementById('modal-renomear')){
    document.getElementById('modal-renomear').classList.remove('open');
    _renomearId = null;
  }
}

function limparHistoricoGeradas() {
  geradasSessao = [];
  conjuntosGerados = [];
  salvarStorage();
  const list = document.getElementById('gerar-historico-list');
  const wrap = document.getElementById('gerar-historico-wrap');
  if(list) list.innerHTML = '';
  if(wrap) wrap.style.display = 'none';
}

function setGerarTab(tab){
  document.getElementById('tab-dinamica').classList.toggle('active',tab==='dinamica');
  document.getElementById('tab-encontro').classList.toggle('active',tab==='encontro');
  document.getElementById('painel-dinamica').style.display=tab==='dinamica'?'flex':'none';
  document.getElementById('painel-encontro').style.display=tab==='encontro'?'block':'none';
  if(tab==='dinamica'){ document.getElementById('painel-dinamica').style.flexDirection='column'; renderCardsGerarDinamica(); }
  if(tab==='encontro'){ document.getElementById('painel-encontro').style.flexDirection='column'; renderPainelEncontro(); }
}

// encontrosGeradosSessao e conjuntosEncontros — declarados no topo do script

function renderPainelEncontro(){
  const m = usuarioAtual?.modulos || {};
  const enc = document.getElementById('painel-encontro');
  if(!enc) return;
  if(!m.encontros){
    enc.innerHTML = `<div class="gerar-locked-notice">
      <p>${t('gerar.enc.bloqueado')}</p>
      <button onclick="openUpsell(1)">${t('gerar.enc.oferta')}</button>
    </div>`;
    enc.style.flexDirection = '';
    return;
  }
  // Restore card-based layout if it was replaced
  if(!document.getElementById('gerar-enc-card')){
    enc.innerHTML = `
      <div class="gerar-card" id="gerar-enc-card">
        <div class="gerar-card-header" style="background:linear-gradient(135deg,var(--rose-light),var(--gold-pale))">
          <span>🌸</span><h4>${t('gerar.card.encontro')}</h4>
          <button class="gerar-card-regen" onclick="gerarSoEncontro()" style="background:rgba(155,74,155,.15);border-radius:50px;padding:4px 10px;font-size:12px;font-weight:600;color:var(--rose);border:1px solid rgba(155,74,155,.3)">↺ novo</button>
        </div>
        <div class="gerar-card-body">
          <h5 id="ge-titulo" style="margin-bottom:2px">—</h5>
          <p id="ge-versiculo" style="font-size:12px;color:var(--text-soft)"></p>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;padding-top:4px">
        <button class="gerar-btn" onclick="gerarEncontroCompleto()">${t('gerar.btn.enc')}</button>
        <button class="share-btn primary" style="border-radius:50px;padding:15px;font-size:14px;font-weight:700" onclick="compartilharEncontroGeradoCompleto()">${t('btn.compartilhar.wp')}</button>
      </div>
      <div id="gerar-enc-historico-wrap" style="display:none;margin-top:16px">
          <button onclick="limparHistoricoEncontros()" style="font-size:11px;color:var(--rose);background:none;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600">${t('gerar.hist.limpar')}</button>
        </div>
        <div id="gerar-enc-historico-list" style="display:flex;flex-direction:column;gap:10px"></div>
      </div>`;
    enc.style.flexDirection = 'column';
  }
  // Não gerar automaticamente no carregamento.
  // Só gera quando a usuária clicar no botão.
  if(!document.getElementById('ge-titulo')?.textContent){
    const tituloEl = document.getElementById('ge-titulo');
    const versEl = document.getElementById('ge-versiculo');
    if(tituloEl) tituloEl.textContent = '—';
    if(versEl) versEl.textContent = '';
  }
}

function getEncontroPorTema(tema){
  const pool = tema
    ? encontros50.filter(e => e.categoria?.toLowerCase().includes(tema.toLowerCase()) || e.titulo?.toLowerCase().includes(tema.toLowerCase()))
    : encontros50;
  const available = (pool.length ? pool : encontros50).filter(e => !encontrosGeradosSessao.includes(e.id));
  if(!available.length){ encontrosGeradosSessao=[]; return encontros50[Math.floor(Math.random()*encontros50.length)]; }
  return available[Math.floor(Math.random()*available.length)];
}

function gerarEncontroCompleto(silent=false){
  const tema = getTemaSelecionado();
  const raw = getEncontroPorTema(tema);
  const enc = getEncontro(raw);
  encontrosGeradosSessao.push(raw.id);
  const tEl = document.getElementById('ge-titulo');
  const vEl = document.getElementById('ge-versiculo');
  if(tEl) tEl.textContent = enc.titulo;
  if(vEl) vEl.textContent = enc.versiculo || '';
  // Save to history
  const id = Date.now();
  conjuntosEncontros.unshift({id, enc, tema: tema||'Aleatório', nome: null, favorito: false});
  if(conjuntosEncontros.length > 5) conjuntosEncontros.pop();
  salvarStorage();
  renderHistoricoEncontros();
  if(!silent) toastMsg(t('toast.novo.enc.gerado'));
}

function gerarSoEncontro(){
  const tema = getTemaSelecionado();
  const enc = getEncontroPorTema(tema);
  encontrosGeradosSessao.push(enc.id);
  const tEl = document.getElementById('ge-titulo');
  const vEl = document.getElementById('ge-versiculo');
  if(tEl) tEl.textContent = enc.titulo;
  if(vEl) vEl.textContent = enc.versiculo || '';
  // Update top of history
  if(conjuntosEncontros.length) { conjuntosEncontros[0].enc = enc; }
  salvarStorage();
  renderHistoricoEncontros();
  toastMsg(t('toast.novo.enc'));
}

function renderHistoricoEncontros(){
  const list = document.getElementById('gerar-enc-historico-list');
  const wrap = document.getElementById('gerar-enc-historico-wrap');
  if(!list||!wrap) return;
  wrap.style.display = conjuntosEncontros.length ? 'block' : 'none';
  list.innerHTML = conjuntosEncontros.map(c=>`
    <div class="gerar-conjunto-item" style="flex-direction:column;align-items:stretch;gap:10px;cursor:default">
      <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="abrirEncontroPreviewGerado(${c.id})">
        <span style="font-size:20px">🌸</span>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.nome || c.enc.titulo}</div>
          <div style="font-size:11px;color:var(--text-soft)">${c.enc.versiculo||''}</div>
        </div>
        <span style="color:var(--text-soft);font-size:16px;flex-shrink:0">›</span>
      </div>
      <div style="display:flex;gap:8px;border-top:1px solid var(--border);padding-top:8px">
        <button onclick="toggleFavEncontro(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:${isFavEncontroGerado(c.id)?'var(--rose)':'var(--text-soft)'};cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">${isFavEncontroGerado(c.id)?t('gerar.hist.saved'):t('gerar.hist.favorite')}</button>
        <button onclick="renomearEncontro(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:var(--text-soft);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">${t('gerar.hist.rename')}</button>
        <button onclick="abrirEncontroPreviewGerado(${c.id})" style="flex:1;background:var(--gold);border:none;border-radius:50px;padding:6px 10px;font-size:12px;font-weight:700;color:#fff;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">${t('gerar.hist.view')}</button>
      </div>
    </div>`).join('');
}

function isFavEncontroGerado(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_encontros_ger_'+email;
  const favs = storage.getJSON(key, []);
  return favs.includes(String(id));
}

function toggleFavEncontro(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_encontros_ger_'+email;
  let favs = storage.getJSON(key, []);
  const sid = String(id);

  if(favs.includes(sid)){
    confirmarDesfavoritar(()=>{
      favs = favs.filter(x=>x!==sid);
      storage.setJSON(key, favs);
      salvarStorage();
      toastMsg(t('toast.fav.rm'));
      renderFavoritos();
      renderHistoricoEncontros();
    });
    return;
  } else {
    favs.push(sid);
    storage.setJSON(key, favs);
    salvarStorage();
    toastMsg(t('toast.fav.add'));
  }

  renderFavoritos();
  renderHistoricoEncontros();
}

let _renomearEncId = null;
function renomearEncontro(id){
  const c = conjuntosEncontros.find(x=>x.id===id);
  if(!c) return;
  _renomearEncId = id;
  const input = document.getElementById('renomear-input');
  input.value = c.nome || c.enc.titulo;
  // Reuse modal, override confirm to save encounter
  document.getElementById('modal-renomear').classList.add('open');
  setTimeout(()=>{ input.focus(); input.select(); }, 150);
  // Override confirmar for encounter context
  window._renomearContext = 'encontro';
}

function abrirEncontroPreviewGerado(id){
  const c = conjuntosEncontros.find(x=>x.id===id);
  if(!c) return;
  const e = c.enc;
  document.getElementById('cprev-tema').textContent = c.nome ? '📋 '+c.nome : '🌸 '+e.titulo;
  let html = `
    <div style="margin-bottom:16px">
      <div class="gerar-card">
        <div class="gerar-card-header" style="background:linear-gradient(135deg,var(--rose-light),var(--gold-pale))"><span>🌸</span><h4>${e.titulo}</h4></div>
        <div class="gerar-card-body">
          <p style="font-weight:600;color:var(--rose);margin-bottom:8px">📖 ${e.versiculo}</p>
          ${e.versiculoTexto?`<p style="font-style:italic;margin-bottom:10px">"${e.versiculoTexto}"</p>`:''}
          ${e.quebraGelo?`<div style="margin-bottom:10px"><h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">🧊 Quebra-gelo</h5><p>${e.quebraGelo}</p></div>`:''}
          ${e.reflexao?`<div style="margin-bottom:10px"><h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">${t('enc.detail.reflexao')}</h5><p>${e.reflexao}</p></div>`:''}
          ${e.perguntas?.length?`<div style="margin-bottom:10px"><h5 style="font-size:12px;color:var(--gold);margin-bottom:6px">❓ Perguntas</h5>${e.perguntas.map(q=>`<p style="margin-bottom:4px">• ${q}</p>`).join('')}</div>`:''}
          ${e.oracao?`<div style="padding:10px;background:var(--gold-pale);border-radius:8px;border-left:3px solid var(--gold)"><h5 style="font-size:12px;color:var(--gold);margin-bottom:4px">🙏 Oração</h5><p>${e.oracao}</p></div>`:''}
        </div>
      </div>
    </div>
    <button class="share-btn primary" style="width:100%;border-radius:50px;padding:14px" onclick="fecharConjuntoPreviewBtn()">Fechar</button>`;
  document.getElementById('cprev-body').innerHTML = html;
  document.getElementById('conjunto-preview-overlay').classList.add('open');
}

function limparHistoricoEncontros(){
  encontrosGeradosSessao = [];
  conjuntosEncontros = [];
  salvarStorage();
  renderHistoricoEncontros();
}

function compartilharEncontroGeradoCompleto(){
  const enc = conjuntosEncontros[0]?.enc;
  if(!enc){ toastMsg(t('toast.enc.primeiro')); return; }
  const texto = `🌸 *${enc.titulo}*\n\n📖 ${enc.versiculo}\n\n💭 ${enc.reflexao?.slice(0,200)}...\n\n_${t('share.via')}_`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}

function gerarEncontroAleatorio(){ gerarEncontroCompleto(); }


function abrirEncontros(){
  if(!usuarioAtual?.modulos?.encontros){ openUpsell(1); return; }
  popularCategoriasEncontros();
  renderEncontros(encontros50);
  nav('screen-encontros','nav-home');
}

function renderEncontros(list){
  const c = document.getElementById('encontros-list');
  if(!list.length){
    c.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t('enc.nenhum')}</h4></div>`;
    return;
  }
  c.innerHTML = list.map(raw=>{
    const e = getEncontro(raw);
    return `
    <div class="content-card" onclick="openEncontroDetail(${raw.id})">
      <div class="content-card-top">
        <h4>${e.titulo}</h4>
      </div>
      <div class="content-card-meta">
        <span class="tag">${e.categoria}</span>
        <span class="tag sage">📖 ${e.versiculo}</span>
      </div>
    </div>`}).join('');
}

function filterEncontros(){
  const q = document.getElementById('enc-search')?.value || '';
  const cat = document.getElementById('enc-filter-cat')?.value || '';
  const clearBtn = document.getElementById('enc-clear');
  if(clearBtn) clearBtn.style.display = (q||cat) ? 'inline-flex' : 'none';
  let r = encontros50;
  if(cat) r = r.filter(e => e.categoria === cat);
  if(q) r = r.filter(raw => {
    const e = getEncontro(raw);
    const ql = q.toLowerCase();
    return (e.titulo || '').toLowerCase().includes(ql) ||
      (e.categoria || '').toLowerCase().includes(ql) ||
      (raw.versiculo || '').toLowerCase().includes(ql);
  });
  renderEncontros(r);
}
function limparEncontros(){
  const s = document.getElementById('enc-search'); if(s) s.value='';
  const c = document.getElementById('enc-filter-cat'); if(c) c.value='';
  const b = document.getElementById('enc-clear'); if(b) b.style.display='none';
  renderEncontros(encontros50);
}
function popularCategoriasEncontros(){
  const sel = document.getElementById('enc-filter-cat');
  if(!sel) return;
  const cats = [...new Set(encontros50.map(e=>e.categoria))].sort();
  const tr = ENCONTROS_TRADUCOES[currentLang]?.cats || {};
  sel.innerHTML = `<option value="">${t('filtro.categoria')}</option>` +
    cats.map(c=>`<option value="${c}">${tr[c]||c}</option>`).join('');
}

function openEncontroDetail(id){
  const raw = encontros50.find(x=>x.id===id);
  if(!raw) return;
  currentEncDetail = raw;
  const e = getEncontro(raw);
  document.getElementById('enc-detail-titulo').textContent = e.titulo;
  document.getElementById('enc-detail-tags').innerHTML =
    `<span class="tag">${e.categoria}</span><span class="tag sage">📖 ${raw.versiculo}</span>`;
  document.getElementById('enc-detail-body').innerHTML = `
    <div class="detail-section" style="border-left:3px solid var(--gold)">
      <h5>${t('enc.detail.versiculo')}</h5>
      <p style="font-style:italic">"${raw.versiculoTexto}"</p>
      <p style="font-size:12px;color:var(--text-soft);margin-top:4px">— ${raw.versiculo}</p>
    </div>
    <div class="detail-section">
      <h5>${t('enc.detail.quebraGelo')}</h5>
      <p>${e.quebraGelo}</p>
    </div>
    <div class="detail-section">
      <h5>${t('enc.detail.reflexao')}</h5>
      <p>${e.reflexao}</p>
    </div>
    <div class="detail-section">
      <h5>${t('enc.detail.perguntas')}</h5>
      <ul class="steps">${e.perguntas.map((p,i)=>`<li><span class="step-num">${i+1}</span>${p}</li>`).join('')}</ul>
    </div>
    <div class="detail-section" style="background:var(--gold-pale);border:1.5px solid var(--gold-light)">
      <h5>${t('enc.detail.oracao')}</h5>
      <p style="font-style:italic">${e.oracao}</p>
    </div>`;
  // reset timer bar
  const tb = document.getElementById('enc-timer-bar');
  if(tb) tb.style.display = 'none';
  encTimerReset();
  nav('screen-encontro-detail','nav-home');
  setTimeout(()=>{ atualizarBtnFavEncontro(e.id); updateDoneBtnEnc(); }, 0);
}

// ── ENCONTRO DETAIL — MARCAR COMO REALIZADO ──
const STORAGE_KEY_HIST_ENC = ()=>`encontros_hist_enc_v1_${usuarioAtual?.email||'guest'}`;
// historicoEnc — declarado no topo do script
function carregarHistoricoEnc(){ historicoEnc = storage.getJSON(STORAGE_KEY_HIST_ENC(), []); syncAppCollectionsState(); }
function salvarHistoricoEnc(){ storage.setJSON(STORAGE_KEY_HIST_ENC(), historicoEnc); syncAppCollectionsState(); }

function updateDoneBtnEnc(){
  const btn = document.getElementById('enc-done-btn');
  if(!btn || !currentEncDetail) return;
  const feita = historicoEnc.some(h=>h.id===currentEncDetail.id);
  btn.textContent = feita ? t('din.realizada') : t('din.marcar');
  btn.classList.toggle('feita', feita);
}

function toggleDoneEnc() {
  if (!currentEncDetail) return;

  const idx = historicoEnc.findIndex(h => String(h.id) === String(currentEncDetail.id));

  if (idx >= 0) {
    historicoEnc.splice(idx, 1);
  } else {
    historicoEnc.unshift({
      id: currentEncDetail.id,
      titulo: currentEncDetail.titulo,
      categoria: currentEncDetail.categoria,
      tempo: currentEncDetail.tempo,
      data: new Date().toISOString(),
      avaliacao: null,
      tipo: 'encontro'
    });
  }

  if (typeof salvarHistoricoEnc === 'function') salvarHistoricoEnc();
  updateDoneBtn();
  renderHistorico();
  if (idx < 0) {
    setTimeout(() => abrirAvalEnc({ ...currentEncDetail, tipo: 'encontro' }), 800);
  }
}

function abrirAvalEnc(enc){
  // reutiliza o mesmo modal de avaliação mas adapta para encontro
  avalDinamica = { id: enc.id, titulo: enc.titulo, tempo: '60 min', tipo: 'encontro' };
  avalStar = 0; avalNum = '';
  document.getElementById('aval-din-nome').textContent = enc.titulo;
  document.getElementById('aval-obs').value = '';
  document.querySelectorAll('.aval-num-btn').forEach(b=>b.classList.remove('selected'));
  avalRenderStars();
  document.getElementById('aval-overlay').classList.add('open');
}

// ── ENCONTRO DETAIL — TIMER ──
let encTimerTotal=0, encTimerLeft=0, encTimerRunning=false, encTimerInterval=null;

function encTimerToggleOpen(){
  const bar = document.getElementById('enc-timer-bar');
  const btn = document.getElementById('enc-detail-timer-btn');
  if(bar.style.display === 'flex'){
    bar.style.display = 'none';
    if(btn) btn.classList.remove('timer-open');
    clearInterval(encTimerInterval); encTimerRunning = false;
  } else {
    encTimerOpen();
    if(btn) btn.classList.add('timer-open');
  }
}

function encTimerOpen(){
  if(!currentEncDetail) return;
  encTimerTotal = 60*60; // encontros = 60 min default
  encTimerLeft = encTimerTotal; encTimerRunning = false;
  clearInterval(encTimerInterval);
  const bar = document.getElementById('enc-timer-bar');
  bar.style.display = 'flex';
  document.getElementById('enc-timer-label').textContent = `⏱ 60 min — ${currentEncDetail.titulo}`;
  document.getElementById('enc-timer-play-btn').textContent = '▶';
  document.getElementById('enc-timer-play-btn').className = 'timer-btn play';
  encTimerUpdateDisplay();
  bar.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function encTimerToggle(){
  if(encTimerRunning){
    clearInterval(encTimerInterval); encTimerRunning=false;
    document.getElementById('enc-timer-play-btn').textContent='▶';
    document.getElementById('enc-timer-play-btn').className='timer-btn play';
  } else {
    encTimerRunning=true;
    document.getElementById('enc-timer-play-btn').textContent='⏸';
    document.getElementById('enc-timer-play-btn').className='timer-btn pause';
    encTimerInterval=setInterval(()=>{
      if(encTimerLeft<=0){ clearInterval(encTimerInterval); encTimerRunning=false; toastMsg(t('toast.tempo.esgotado')); return; }
      encTimerLeft--;
      encTimerUpdateDisplay();
      const pct = (encTimerLeft/encTimerTotal)*100;
      const fill = document.getElementById('enc-timer-fill');
      if(fill) fill.style.width=pct+'%';
      if(encTimerLeft<=0){ document.getElementById('enc-timer-fill').style.background='var(--rose)'; }
    },1000);
  }
}

function encTimerReset(){
  clearInterval(encTimerInterval); encTimerRunning=false; encTimerLeft=encTimerTotal;
  const btn=document.getElementById('enc-timer-play-btn');
  if(btn){ btn.textContent='▶'; btn.className='timer-btn play'; }
  const fill=document.getElementById('enc-timer-fill');
  if(fill){ fill.style.width='100%'; fill.style.background=''; }
  encTimerUpdateDisplay();
}

function encTimerUpdateDisplay(){
  const el=document.getElementById('enc-timer-display');
  if(!el) return;
  const m=Math.floor(encTimerLeft/60), s=encTimerLeft%60;
  el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.classList.toggle('urgente', encTimerLeft<=30 && encTimerLeft>0);
}

// ── ENCONTRO DETAIL — STORIES ──
function abrirStoriesEnc(){
  if(!currentEncDetail) return;
  // Temporarily set currentDetail to enc format for abrirStories reuse
  const orig = currentDetail;
  currentDetail = {
    id: currentEncDetail.id,
    titulo: currentEncDetail.titulo,
    objetivo: currentEncDetail.reflexao?.slice(0,120)+'…',
    categoria: currentEncDetail.categoria,
    tempo: '60 min',
    materiais: currentEncDetail.versiculo,
    passos: currentEncDetail.perguntas || [],
    aplicacao: currentEncDetail.oracao?.slice(0,100)+'…',
  };
  abrirStories();
  currentDetail = orig;
}

// ── ENCONTRO DETAIL — AO VIVO ──
function abrirAoVivoEnc(){
  if(!currentEncDetail) return;
  const e = currentEncDetail;
  aoVivoPassos = [
    { label: t('enc.detail.quebraGelo'),  conteudo: e.quebraGelo },
    { label: t('enc.detail.versiculo'),   conteudo: `<strong>${e.versiculo}</strong><br><br><em>"${e.versiculoTexto}"</em>` },
    { label: t('enc.detail.reflexao'),    conteudo: (e.reflexao||'').slice(0,300)+'…' },
    ...e.perguntas.map((p,i)=>({ label: `${t('enc.detail.perguntas').replace('❓','').trim()} ${i+1}`, conteudo: p })),
    { label: t('enc.detail.oracao'),      conteudo: `<em>${e.oracao}</em>` },
  ];
  aoVivoIdx = 0;
  document.getElementById('aovivo-overlay').classList.add('open');
  aoVivoRenderEnc(e.titulo);
}

function aoVivoRenderEnc(titulo){
  const total = aoVivoPassos.length;
  const passo = aoVivoPassos[aoVivoIdx];
  document.getElementById('aovivo-step-label').textContent = `${passo.label} · ${aoVivoIdx+1} / ${total}`;
  document.getElementById('aovivo-titulo').textContent = titulo || '';
  document.getElementById('aovivo-content').innerHTML = passo.conteudo;
  document.getElementById('aovivo-dots').innerHTML = aoVivoPassos.map((_,i)=>
    `<div class="aovivo-dot${i===aoVivoIdx?' active':''}"></div>`).join('');
  document.getElementById('aovivo-prev').style.display = aoVivoIdx===0 ? 'none' : 'block';
  const nextBtn = document.getElementById('aovivo-next');
  nextBtn.textContent = aoVivoIdx === total-1 ? t('aovivo.concluir') : t('aovivo.proximo');
  // Bind nav to enc-specific render
  document.getElementById('aovivo-prev').onclick = ()=>{ aoVivoIdx=Math.max(0,aoVivoIdx-1); aoVivoRenderEnc(titulo); };
  nextBtn.onclick = aoVivoIdx===total-1 ? fecharAoVivo : ()=>{ aoVivoIdx++; aoVivoRenderEnc(titulo); };
}

// ── DEVOCIONAL 7 DIAS ──
const devocional7 = [
  {id:1,titulo:'Dia 1: Deus Cuida de Você',emoji:'🌸',versiculo:'1 Pedro 5:7',versiculoTexto:'Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.',reflexao:'Quantas vezes você já se sentiu sobrecarregada, carregando nas costas preocupações que parecem impossíveis de aliviar? Deus nos convida a um movimento de rendição radical: lançar sobre Ele toda a nossa ansiedade, confiando que o Seu amor é maior do que qualquer circunstância.\n\nO Pai Celestial, que conhece cada fio de cabelo e cada suspiro silencioso do nosso coração, tem um cuidado pessoal e detalhado por nós. Ao escolhermos entregar os fardos que insistimos em segurar, estamos declarando que o controle da nossa história pertence a Ele. É nesse exercício diário de soltar o que não nos cabe que experimentamos a verdadeira paz.',pergunta:'Qual é aquela preocupação específica que você tem tentado controlar sozinha, e o que a impede de entregar esse fardo nas mãos do Pai hoje?',aplicacao:'Escreva em um papel todas as ansiedades que rondam a sua mente agora. Uma por uma, ore sobre cada item, entregando-o conscientemente a Deus. Ao finalizar, rasgue o papel como gesto simbólico de que esses pesos não pertencem mais ao seu caminho.',oracao:'Querido Pai Celestial, reconheço que muitas vezes tentei carregar sozinha fardos que nunca foram feitos para mim. Tu és o meu refúgio seguro e o porto onde descanso quando a vida parece intensa demais. Hoje, Te entrego cada medo e cada incerteza. Confio no Teu cuidado fiel e na Tua soberania perfeita. Em nome de Jesus, amém.'},
  {id:2,titulo:'Dia 2: Floresça Onde Deus Te Plantou',emoji:'🌺',versiculo:'Eclesiastes 3:1',versiculoTexto:'Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu.',reflexao:'Você já se perguntou por que Deus a colocou exatamente onde está agora? Muitas vezes, nossa primeira reação é resistir, questionar ou até tentar mudar o que Deus planejou. Mas há uma verdade libertadora: Deus planta cada um de nós com propósito e intenção.\n\nAssim como uma flor não escolhe onde nascer, mas floresce gloriosamente onde o jardineiro a planta, nós também podemos confiar que Deus conhece o solo perfeito para nossa vida. O segredo não está em mudar o lugar onde estamos plantadas, mas em florescer plenamente nele. Quando aceitamos o plantio de Deus e nos abrimos à Sua formação, descobrimos que podemos ser flores de beleza extraordinária exatamente onde Ele nos colocou.',pergunta:'Em que área da sua vida você está resistindo ao plantio de Deus? Como você poderia começar a florescer exatamente onde está agora?',aplicacao:'Faça uma lista de três coisas pelas quais você é grata no lugar onde Deus te plantou agora. Depois, ore pedindo que Ele te mostre como florescer ainda mais neste lugar.',oracao:'Senhor do meu coração, hoje Te agradeço por me plantar exatamente onde estou. Ajuda-me a ver a beleza do lugar que Tu escolheste para mim. Capacita-me a florescer plenamente, confiando em Teu propósito perfeito para minha vida. Em nome de Jesus, amém.'},
  {id:3,titulo:'Dia 3: Confie no Tempo de Deus',emoji:'⏳',versiculo:'Provérbios 3:5-6',versiculoTexto:'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.',reflexao:'Nossa sociedade moderna nos ensina a valorizar a velocidade, a eficiência e o controle. Queremos resultados imediatos, respostas instantâneas e certeza sobre o futuro. Mas Deus opera em um tempo diferente — Seu tempo perfeito.\n\nConfiar no tempo de Deus exige que abandonemos nosso próprio entendimento e nos apeguemos à verdade de que Ele é infinitamente mais sábio. Quando confiamos no tempo de Deus, não estamos sendo passivas — estamos sendo profundamente ativas na fé. Estamos escolhendo acreditar que Sua demora não é negação, mas preparação.',pergunta:'Em que situação você está lutando para confiar no tempo de Deus? Como você pode reconhecer Sua presença nesta espera?',aplicacao:'Identifique uma área da sua vida onde você está lutando com o tempo de Deus. Escreva uma carta para Ele expressando suas frustrações e, em seguida, reescreva-a como uma declaração de confiança em Seu tempo perfeito.',oracao:'Pai celestial, hoje escolho confiar em Ti de todo o meu coração. Reconheço que Teu tempo é perfeito e Teu caminho é melhor do que qualquer plano que eu possa imaginar. Ajuda-me a descansar em Tua fidelidade, mesmo quando não compreendo Teus métodos. Em nome de Jesus, amém.'},
  {id:4,titulo:'Dia 4: A Gratidão Transforma o Coração',emoji:'🙏',versiculo:'1 Tessalonicenses 5:18',versiculoTexto:'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.',reflexao:'A gratidão não é apenas um sentimento agradável ou uma etiqueta social — é uma força transformadora que reconfigura nosso coração e nossa perspectiva. Quando escolhemos dar graças em tudo, não estamos ignorando as dificuldades. Pelo contrário, reconhecemos que, mesmo no meio das tempestades, Deus está trabalhando.\n\nDar graças "em tudo" não significa que agradecemos pelas dificuldades em si, mas que agradecemos a Deus por Sua presença nelas, por Sua fidelidade através delas, por Seu propósito que as transcende. Praticar a gratidão diariamente cria uma nova herança emocional e espiritual.',pergunta:'Qual é a bênção mais pequena e fácil de ignorar que você pode reconhecer e agradecer hoje?',aplicacao:'Comece um diário de gratidão. Todas as noites, antes de dormir, escreva três coisas pelas quais você é grata naquele dia. Seja específica e detalhada.',oracao:'Obrigada, Senhor, por Tua presença constante em minha vida. Hoje Te agradeço pelas bênçãos grandes e pequenas, pelas evidentes e pelas ocultas. Ajuda-me a cultivar um coração grato que reconhece Tua bondade em cada detalhe. Em nome de Jesus, amém.'},
  {id:5,titulo:'Dia 5: Deus Renova Suas Forças',emoji:'🦅',versiculo:'Isaías 40:31',versiculoTexto:'Mas os que esperam no Senhor renovam as suas forças. Sobem com asas como águias; correm e não se cansam, andam e não se fatigam.',reflexao:'Você já se sentiu completamente esgotada? Quando as responsabilidades parecem infinitas, quando a força parece ter se esgotado, Deus nos oferece um convite poderoso: esperar Nele.\n\nEsperar no Senhor não significa ficar parada fazendo nada, mas sim descansar ativamente em Sua fidelidade. Há uma diferença entre recuperar e renovar. Recuperar é voltar ao estado anterior, mas renovar é receber algo novo, fresco, transformado. Esta renovação não é esgotável — é um rio que flui continuamente da presença de Deus em nossa vida.',pergunta:'Quando foi a última vez que você sentiu suas forças renovadas pela presença de Deus? Como você pode criar momentos regulares para experimentar essa renovação?',aplicacao:'Quando sentir cansaço, pare conscientemente e ore: "Senhor, eu espero em Ti". Depois, faça algo simples que a reconecte com Sua presença: ler um versículo, ouvir música de adoração ou caminhar ao ar livre.',oracao:'Senhor, hoje reconheço que minha força vem de Ti. Quando me sinto fraca, Tu és minha fortaleza. Quando me sinto cansada, Tu me renovas. Ajuda-me a esperar em Ti com confiança, sabendo que Tu me capacitarás para tudo que preciso enfrentar. Em nome de Jesus, amém.'},
  {id:6,titulo:'Dia 6: Descansando na Presença de Deus',emoji:'☁️',versiculo:'Mateus 11:28',versiculoTexto:'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.',reflexao:'Em um mundo que valoriza a produtividade acima de tudo, descansar pode parecer um luxo. Mas Jesus nos oferece algo radicalmente diferente: um convite pessoal para descansar em Sua presença. Ele não nos alivia com exigências de mérito — Ele nos recebe com braços abertos.\n\nJesus sabe o peso que carregamos. Ele vê cada lágrima, cada preocupação, cada fardo que ninguém mais percebe. Quando descansamos na presença de Deus, descobrimos que Ele é suficiente. É na quietude da presença de Deus que ouvimos Sua voz com clareza, que sentimos Seu amor com profundidade, que recebemos Sua paz com certeza.',pergunta:'O que a impede de descansar completamente na presença de Deus? Como você pode criar espaço sagrado para estar com Ele?',aplicacao:'Reserve 15 minutos hoje para estar apenas na presença de Deus. Silencie dispositivos, encontre um lugar tranquilo, e simplesmente converse com Ele. Não tenha agenda — apenas esteja com Ele.',oracao:'Jesus querido, hoje venho a Ti cansada e sobrecarregada. Aceito Teu convite para descansar em Tua presença. Ajuda-me a encontrar paz genuína em Teus braços, sabendo que sou completamente amada e aceita por Ti. Em nome de Jesus, amém.'},
  {id:7,titulo:'Dia 7: Vivendo com Propósito',emoji:'🧭',versiculo:'Jeremias 29:11',versiculoTexto:'Porque eu sei que os planos que tenho para vocês — diz o Senhor — planos de paz e não de mal, para lhes dar um futuro e uma esperança.',reflexao:'Você já se perguntou qual é o propósito de sua vida? Já se sentiu perdida, sem direção clara? A boa notícia é que Deus já escreveu um propósito único para você, profundamente conectado com Seu amor e Seus planos perfeitos.\n\nViver com propósito não significa ter todas as respostas. Significa confiar que o Criador, que te formou com cuidado e amor, tem um plano perfeito para você. Significa caminhar em fé, mesmo quando o caminho não está completamente iluminado. Quando abraçamos o propósito de Deus para nossas vidas, descobrimos uma satisfação que o mundo não pode oferecer.',pergunta:'Como você gostaria de viver diferentemente se confiasse completamente que Deus tem um propósito perfeito para sua vida?',aplicacao:'Escreva uma carta para Deus descrevendo seus sonhos, perguntas e inseguranças sobre propósito. Depois, reescreva-a como se fosse uma resposta Dele, baseada em Seu amor e fidelidade.',oracao:'Pai Celestial, hoje agradeço por ter um propósito único em Teus planos. Ajuda-me a confiar em Teus caminhos, mesmo quando não compreendo completamente. Capacita-me a viver cada dia com intenção, refletindo Teu amor e conhecendo profundamente Teu propósito para mim. Em nome de Jesus, amém.'},
];

function abrirPlanejador(){
  if(!usuarioAtual?.modulos?.planejador){ openUpsell(3); return; }
  nav('screen-planejador','nav-home');
}
function abrirDevocional(){
  if(!usuarioAtual?.modulos?.devocional){ openUpsell(2); return; }
  renderDevocional();
  nav('screen-devocional','nav-home');
}
function renderDevocional(){
  const c = document.getElementById('devocional-list');
  c.innerHTML = devocional7.map(raw=>{
    const d = getDevocionalTrad(raw);
    return `
    <div class="content-card" onclick="openDevocionalDetail(${raw.id})">
      <div class="content-card-top">
        <h4>${raw.emoji} ${d.titulo}</h4>
      </div>
      <div class="content-card-meta">
        <span class="tag sage">📖 ${raw.versiculo}</span>
      </div>
    </div>`}).join('');
}
function openDevocionalDetail(id){
  const raw = devocional7.find(x=>x.id===id);
  if(!raw) return;
  const d = getDevocionalTrad(raw);
  document.getElementById('dev-detail-titulo').textContent = d.titulo;
  const reflexaoHtml = d.reflexao.split('\n\n').map(p=>`<p>${p}</p>`).join('');
  document.getElementById('dev-detail-body').innerHTML = `
    <div class="detail-section" style="border-left:3px solid var(--gold)">
      <h5>📖 ${d.versiculo}</h5>
      <p style="font-style:italic">"${d.versiculoTexto}"</p>
    </div>
    <div class="detail-section"><h5>${t('enc.detail.reflexao')}</h5>${reflexaoHtml}</div>
    <div class="detail-section">
      <h5>${t('dev.detail.pergunta')}</h5>
      <p>${d.pergunta}</p>
    </div>
    <div class="detail-section" style="background:var(--surface2)">
      <h5>✏️ ${t('din.aplicacao').replace('✦ ','')}</h5>
      <p>${d.aplicacao}</p>
    </div>
    <div class="detail-section" style="background:var(--gold-pale);border:1.5px solid var(--gold-light)">
      <h5>${t('dev.detail.oracao')}</h5>
      <p style="font-style:italic">${d.oracao}</p>
    </div>`;
  nav('screen-devocional-detail','nav-home');
}

// ── 30 ESTUDOS BÍBLICOS ──
// ── 50 QUEBRA-GELOS ──
const quebraGelos50 = [
  // Conexão e Gratidão
  {id:1,titulo:'Minha Semana em Uma Palavra',categoria:'Conexão e Gratidão',duracao:'5 min',objetivo:'Compartilhar como foi a semana de forma concisa',como:'Cada mulher escolhe uma palavra que resume sua semana',dica:'Escreva as palavras em um quadro para criar conexões visuais'},
  {id:2,titulo:'Dois Fatos e Uma Mentira',categoria:'Conexão e Gratidão',duracao:'8-10 min',objetivo:'Conhecer curiosidades sobre cada participante',como:'Cada uma compartilha três afirmações sobre si, sendo uma falsa',dica:'Use fatos divertidos e bíblicos para engajar o grupo'},
  {id:3,titulo:'Versículo Favorito',categoria:'Conexão e Gratidão',duracao:'6-8 min',objetivo:'Compartilhar as Escrituras que tocam o coração',como:'Cada mulher lê seu versículo preferido e explica brevemente',dica:'Peça que tragam a Bíblia ou use um app para localizar rapidamente'},
  {id:4,titulo:'Motivo de Gratidão',categoria:'Conexão e Gratidão',duracao:'5-7 min',objetivo:'Cultivar gratidão e positividade no grupo',como:'Cada uma compartilha algo pelo qual está grata hoje',dica:'Inicie com seu próprio exemplo para criar vulnerabilidade'},
  {id:5,titulo:'Objeto que Me Representa',categoria:'Conexão e Gratidão',duracao:'8-10 min',objetivo:'Revelar aspectos pessoais através de objetos significativos',como:'Peça que tragam um objeto pessoal ou descrevam um mentalmente',dica:'Objetos como joias, livros ou fotos podem ter histórias profundas'},
  {id:6,titulo:'O que te faz grata hoje?',categoria:'Conexão e Gratidão',duracao:'5-7 min',objetivo:'Focar na gratidão diária e elevar o espírito',como:'Cada mulher compartilha uma coisa específica pela qual é grata naquele dia, explicando brevemente o porquê',dica:'Incentive a gratidão por coisas simples para encorajar a observação do dia a dia'},
  {id:7,titulo:'Uma história de fé em 1 minuto',categoria:'Conexão e Gratidão',duracao:'10-15 min',objetivo:'Compartilhar testemunhos rápidos e inspiradores de superação ou provisão divina',como:'Cada participante tem um minuto para contar uma experiência pessoal onde sentiu a presença de Deus de forma marcante',dica:'Utilize um cronômetro para garantir que todas tenham a chance de falar e mantenham o foco'},
  {id:8,titulo:'Qual versículo te inspira?',categoria:'Conexão e Gratidão',duracao:'7-10 min',objetivo:'Conectar as mulheres através da Palavra de Deus e suas aplicações pessoais',como:'Cada mulher compartilha um versículo bíblico que a inspira ou tem sido significativo em sua vida, e explica a razão',dica:'Tenha Bíblias à disposição ou incentive a anotação para quem quiser consultar depois'},
  {id:9,titulo:'Se você fosse um animal, qual seria e por quê?',categoria:'Conexão e Gratidão',duracao:'5-8 min',objetivo:'Promover o autoconhecimento e risadas leves, quebrando o gelo de forma descontraída',como:'Cada uma se compara a um animal que a representa de alguma forma e compartilha a característica que os une',dica:'Mantenha a leveza e o bom humor, aceitando respostas criativas e divertidas'},
  {id:10,titulo:'Um conselho para sua "eu" mais jovem',categoria:'Conexão e Gratidão',duracao:'8-12 min',objetivo:'Compartilhar sabedoria e experiências de vida sob uma perspectiva de fé',como:'Cada mulher pensa em um conselho importante que daria para si mesma quando era mais jovem, baseado em sua jornada de fé e vida',dica:'Pergunte como esse conselho reflete a fidelidade de Deus em suas vidas'},
  {id:11,titulo:'Quem te influenciou espiritualmente?',categoria:'Conexão e Gratidão',duracao:'7-10 min',objetivo:'Reconhecer figuras de fé e seus legados, e o impacto da comunidade na vida cristã',como:'Cada participante menciona alguém que foi uma influência espiritual significativa em sua vida e descreve brevemente como essa pessoa a impactou',dica:'Pode ser um líder religioso, um familiar, um amigo ou até mesmo um personagem bíblico'},
  // Crescimento Pessoal
  {id:12,titulo:'Meu Livro Preferido',categoria:'Crescimento Pessoal',duracao:'6 min',objetivo:'Trocar recomendações literárias inspiradoras',como:'Cada participante fala um livro que marcou sua vida ou fé',dica:'Inclua livros cristãos e seculares para diversidade'},
  {id:13,titulo:'Um Sonho que Tenho',categoria:'Crescimento Pessoal',duracao:'7-9 min',objetivo:'Compartilhar esperanças e aspirações futuras',como:'Cada mulher fala um sonho, grande ou pequeno, que Deus plantou',dica:'Crie um mural de sonhos para oração mútua'},
  {id:14,titulo:'Algo Novo que Aprendi',categoria:'Crescimento Pessoal',duracao:'6-8 min',objetivo:'Valorizar o crescimento contínuo',como:'Compartilhe uma lição recente de Deus ou da vida',dica:'Inclua aprendizados tanto espirituais quanto práticos'},
  // Diversão e Leveza
  {id:15,titulo:'Se sua vida fosse um filme...',categoria:'Diversão e Leveza',duracao:'5-7 min',objetivo:'Estimular a criatividade e o bom humor',como:'Cada uma compartilha o título do filme que melhor representaria sua vida no momento e o porquê',dica:'Incentive títulos engraçados ou inesperados que revelem um pouco sobre a personalidade'},
  {id:16,titulo:'Ilha Deserta: 3 itens',categoria:'Diversão e Leveza',duracao:'7-9 min',objetivo:'Estimular o pensamento rápido e a priorização, com um toque de humor',como:'Cada mulher diz quais 3 itens levaria para uma ilha deserta e explica as escolhas',dica:'Foque nos itens mais inusitados ou que revelem algo sobre a personalidade e valores'},
  {id:17,titulo:'Meu Superpoder Escolhido',categoria:'Diversão e Leveza',duracao:'6-8 min',objetivo:'Promover a auto-reflexão lúdica e a conexão através de aspirações',como:'Cada uma compartilha qual superpoder gostaria de ter e como o usaria para fazer a diferença',dica:'Pode ser um superpoder "realista" para o dia a dia ou totalmente fantasioso'},
  {id:18,titulo:'Qual o seu "guilty pleasure" musical?',categoria:'Diversão e Leveza',duracao:'6-8 min',objetivo:'Revelar um lado mais descontraído e pessoal, gerando identificação e risadas',como:'Cada mulher revela uma música ou artista que adora mas talvez tenha vergonha de admitir, e o porquê',dica:'Incentive a curiosidade e o respeito pelas escolhas musicais de cada uma'},
  {id:19,titulo:'Se você fosse um sabor de sorvete...',categoria:'Diversão e Leveza',duracao:'5-7 min',objetivo:'Estimular a criatividade e a descrição pessoal de forma divertida',como:'Cada participante escolhe um sabor de sorvete que a represente e descreve as características que as conectam',dica:'Peça para descreverem não só o sabor, mas a sensação que ele transmite'},
  {id:20,titulo:'Uma habilidade inútil, mas engraçada',categoria:'Diversão e Leveza',duracao:'5-7 min',objetivo:'Compartilhar peculiaridades e gerar risadas',como:'Cada mulher conta sobre uma habilidade que possui que é totalmente inútil no dia a dia, mas divertida ou peculiar',dica:'Incentive demonstrações rápidas, se apropriado e seguro'},
  // Memórias e Histórias Pessoais
  {id:21,titulo:'Qual foi sua primeira lembrança feliz?',categoria:'Memórias e Histórias',duracao:'5-7 min',objetivo:'Despertar sentimentos de nostalgia e compartilhar um momento alegre inicial',como:'Peça a cada participante para descrever sua primeira lembrança feliz e por que ela é tão marcante',dica:'Incentive a ser detalhada, mencionando o local, as pessoas e as sensações envolvidas'},
  {id:22,titulo:'Um momento em que você sentiu a presença de Deus claramente',categoria:'Memórias e Histórias',duracao:'7-10 min',objetivo:'Encorajar o testemunho pessoal e fortalecer a fé do grupo',como:'Cada uma compartilha uma ocasião em que sentiu a presença ou o agir de Deus de forma inconfundível',dica:'Foque na emoção e no impacto que esse momento teve em sua vida espiritual'},
  {id:23,titulo:'Qual é a sua tradição familiar favorita?',categoria:'Memórias e Histórias',duracao:'5-7 min',objetivo:'Celebrar a herança familiar e a conexão entre gerações',como:'Peça para cada uma descrever uma tradição familiar que ama e por que ela é tão especial',dica:'Pode ser algo de feriados, refeições, ou um hábito único da família'},
  {id:24,titulo:'Um desafio que você superou e o que aprendeu',categoria:'Memórias e Histórias',duracao:'8-10 min',objetivo:'Inspirar resiliência e compartilhar lições de vida valiosas',como:'Cada participante relata um desafio significativo que enfrentou e as principais lições aprendidas',dica:'Encoraje a focar na transformação pessoal e no crescimento espiritual'},
  {id:25,titulo:'Se você pudesse reviver um dia da sua vida, qual seria?',categoria:'Memórias e Histórias',duracao:'7-9 min',objetivo:'Explorar os momentos mais preciosos e o que os torna inesquecíveis',como:'Cada uma escolhe um dia para reviver, explicando os motivos e o que fez esse dia ser tão memorável',dica:'Não precisa ser um dia grandioso, pode ser um momento de paz ou alegria simples'},
  {id:26,titulo:'Uma pessoa do passado que você gostaria de reencontrar',categoria:'Memórias e Histórias',duracao:'6-8 min',objetivo:'Honrar a memória de pessoas importantes e refletir sobre o impacto que tiveram',como:'Cada mulher compartilha quem ela gostaria de reencontrar do passado e o que diria a essa pessoa',dica:'Explore a gratidão, o perdão ou a curiosidade sobre como a vida da pessoa seguiu'},
  // Comunhão Profunda
  {id:27,titulo:'Minha Primeira Lembrança na Igreja',categoria:'Comunhão Profunda',duracao:'8-10 min',objetivo:'Conectar-se através de memórias formativas',como:'Cada uma compartilha sua lembrança mais antiga de culto ou encontro',dica:'Músicas, cheiros e emoções podem trazer memórias vívidas'},
  {id:28,titulo:'Algo que Quero Agradecer a Deus',categoria:'Comunhão Profunda',duracao:'6-8 min',objetivo:'Cultivar uma cultura de gratidão específica',como:'Cada mulher nomeia algo específico pelo qual está grata a Deus',dica:'Prepare um papel para escreverem e guardarem como lembrança'},
  {id:29,titulo:'O Que Deus Tem Feito em Minha Vida',categoria:'Comunhão Profunda',duracao:'8-12 min',objetivo:'Testemunhar a fidelidade divina',como:'Compartilhe um testemunho breve de como Deus agiu recentemente',dica:'Peça que sejam específicas com datas, lugares e mudanças'},
  // Esperança e Futuro
  {id:30,titulo:'Uma semente de esperança',categoria:'Esperança e Futuro',duracao:'6-8 min',objetivo:'Compartilhar algo que traz otimismo e encorajamento',como:'Cada mulher compartilha uma "semente de esperança" que tem para sua vida e o que espera que floresça',dica:'Encoraje a focar em coisas pequenas e concretas que podem ser cultivadas diariamente'},
  {id:31,titulo:'Meu Sonho Revelado',categoria:'Esperança e Futuro',duracao:'7-9 min',objetivo:'Inspirar a visualização e a articulação de aspirações futuras',como:'Cada participante descreve um sonho ou objetivo que deseja alcançar nos próximos anos',dica:'Permita que a vulnerabilidade seja um fator, e foque na paixão por trás do sonho'},
  {id:32,titulo:'O que você deixaria no passado?',categoria:'Esperança e Futuro',duracao:'6-8 min',objetivo:'Promover o desapego de hábitos ou pensamentos negativos para um futuro mais leve',como:'Cada uma compartilha algo que deseja "deixar para trás" para abraçar o futuro com mais liberdade',dica:'Enfatize o poder do perdão e da renovação para seguir em frente'},
  {id:33,titulo:'Um Versículo para a Jornada',categoria:'Esperança e Futuro',duracao:'6-8 min',objetivo:'Fortalecer a fé e a confiança nas promessas divinas para o futuro',como:'Cada mulher compartilha um versículo bíblico que a inspira e a encoraja em sua jornada',dica:'Peça para que expliquem como esse versículo se aplica aos seus desafios ou esperanças atuais'},
  {id:34,titulo:'Minha Cápsula do Tempo',categoria:'Esperança e Futuro',duracao:'5-7 min',objetivo:'Estimular a reflexão sobre o presente e as expectativas para o futuro',como:'Cada uma imagina o que colocaria em uma cápsula do tempo para ser aberta daqui a 5 ou 10 anos',dica:'Incentive a inclusão de mensagens de encorajamento ou de lições aprendidas no presente'},
  {id:35,titulo:'Como Deus te surpreendeu?',categoria:'Esperança e Futuro',duracao:'7-9 min',objetivo:'Celebrar a fidelidade de Deus e inspirar confiança em Suas obras futuras',como:'Cada mulher compartilha uma ocasião em que Deus a surpreendeu de maneira positiva, indo além de suas expectativas',dica:'Foque na gratidão e em como essa experiência fortaleceu sua fé'},
  // Inspiração e Encorajamento
  {id:36,titulo:'Algo que Aprendi com Deus',categoria:'Inspiração e Encorajamento',duracao:'7 min',objetivo:'Reconhecer lições divinas em experiências',como:'Cada uma compartilha uma lição específica que aprendeu',dica:'Inclua tanto lições suaves quanto desafios superados'},
  {id:37,titulo:'Algo que Aprendi com Outra Pessoa',categoria:'Inspiração e Encorajamento',duracao:'8 min',objetivo:'Valorizar influências edificantes',como:'Compartilhe alguém que te ensinou algo importante',dica:'Incentive reconhecimento mútuo no grupo'},
  {id:38,titulo:'Uma Palavra de Encorajamento',categoria:'Inspiração e Encorajamento',duracao:'6-8 min',objetivo:'Oferecer fortalecimento mútuo',como:'Cada mulher diz uma palavra de encorajamento para outra participante',dica:'Peça que sejam específicas com nomes e contextos'},
  {id:39,titulo:'Uma Lição da Bíblia',categoria:'Inspiração e Encorajamento',duracao:'7-9 min',objetivo:'Aprofundar conhecimento bíblico de forma prática',como:'Compartilhe uma lição que está aplicando na vida',dica:'Relacione versículos com situações cotidianas'},
  // Valores e Identidade
  {id:40,titulo:'Qual é o seu valor mais importante?',categoria:'Valores e Identidade',duracao:'5-7 min',objetivo:'Identificar e compartilhar princípios fundamentais que guiam a vida',como:'Cada participante nomeia e explica seu valor mais importante, e como ele influencia suas decisões',dica:'Incentive a ser específica, dando um exemplo concreto de como esse valor se manifesta'},
  {id:41,titulo:'Seu animal favorito e por quê?',categoria:'Valores e Identidade',duracao:'4-6 min',objetivo:'Estimular a auto-percepção de qualidades pessoais através de analogias criativas',como:'Cada uma escolhe um animal que a represente e justifica a escolha, relacionando características marcantes com as suas próprias qualidades',dica:'Foque nas características positivas do animal e como elas refletem aspectos de sua personalidade'},
  {id:42,titulo:'Uma crença que você mudou ao longo da vida',categoria:'Valores e Identidade',duracao:'6-8 min',objetivo:'Refletir sobre crescimento pessoal e a evolução das perspectivas e convicções',como:'Compartilhe uma crença que você tinha e que foi transformada, e o que causou essa mudança',dica:'Encoraje a focar no aprendizado e na nova compreensão adquirida'},
  {id:43,titulo:'Qual é o seu "superpoder" único?',categoria:'Valores e Identidade',duracao:'5-7 min',objetivo:'Reconhecer talentos e forças individuais, promovendo a autoestima',como:'Cada uma identifica uma qualidade ou habilidade que considera sua força única e como a utiliza para impactar positivamente',dica:'Pode ser algo prático (organização), uma característica (empatia), ou um dom espiritual (discernimento)'},
  {id:44,titulo:'Quem é sua inspiração e por quê?',categoria:'Valores e Identidade',duracao:'6-8 min',objetivo:'Identificar modelos positivos e as qualidades que admiramos e buscamos incorporar',como:'Compartilhe sobre uma pessoa que a inspira profundamente e quais características dela você admira e busca desenvolver',dica:'Foque nas virtudes, no legado ou no impacto que essa pessoa teve em sua vida'},
  {id:45,titulo:'Uma frase ou mantra que te define',categoria:'Valores e Identidade',duracao:'4-6 min',objetivo:'Sintetizar a identidade e os princípios em uma declaração concisa e significativa',como:'Cada participante compartilha uma frase, versículo ou mantra que a guia, a motiva ou a define',dica:'Pode ser algo que você criou, que leu em um livro, ou que alguém importante lhe disse'},
  // Comunidade e Encerramento
  {id:46,titulo:'Uma Palavra para o Grupo',categoria:'Comunidade e Encerramento',duracao:'4-6 min',objetivo:'Resumir a experiência do grupo e os sentimentos compartilhados de forma concisa',como:'Cada participante escolhe uma única palavra que melhor descreve sua experiência ou o que o grupo significou para ela neste encontro',dica:'Encoraje a focar na emoção ou no principal aprendizado que leva consigo'},
  {id:47,titulo:'O que você leva daqui?',categoria:'Comunidade e Encerramento',duracao:'5-7 min',objetivo:'Incentivar a reflexão sobre os aprendizados e insights pessoais adquiridos durante o tempo juntas',como:'Cada mulher compartilha um aprendizado significativo ou uma inspiração que leva consigo deste encontro',dica:'Pode ser algo prático, uma citação, ou uma nova compreensão sobre si mesma ou sobre Deus'},
  {id:48,titulo:'Um Desejo para a Irmã ao Lado',categoria:'Comunidade e Encerramento',duracao:'6-8 min',objetivo:'Promover a interconexão e o apoio mútuo através de bênçãos e encorajamento personalizado',como:'Em duplas ou olhando para a pessoa ao lado, cada uma oferece um desejo sincero, uma oração ou uma palavra de encorajamento para o futuro da outra',dica:'Enfatize a sinceridade e a especificidade, considerando o que a pessoa compartilhou durante o encontro'},
  {id:49,titulo:'Como você se sente agora?',categoria:'Comunidade e Encerramento',duracao:'3-5 min',objetivo:'Proporcionar um check-in emocional final, permitindo que todas expressem seu estado atual',como:'Cada participante compartilha, em poucas palavras, qual é o seu sentimento predominante no momento do encerramento',dica:'A simplicidade e a honestidade são a chave para este quebra-gelo, validando as emoções de todas'},
  {id:50,titulo:'Um Elogio Sincero',categoria:'Comunidade e Encerramento',duracao:'7-9 min',objetivo:'Fomentar a apreciação e a afirmação das qualidades umas das outras, fortalecendo a auto-estima e os laços',como:'Cada mulher escolhe alguém no grupo e faz um elogio sincero sobre uma qualidade, ação ou característica que admira nela',dica:'Incentive elogios específicos e observáveis para torná-los mais significativos'},
];

const QG_CATS = ['Conexão e Gratidão','Crescimento Pessoal','Diversão e Leveza','Memórias e Histórias','Comunhão Profunda','Esperança e Futuro','Inspiração e Encorajamento','Valores e Identidade','Comunidade e Encerramento'];

function abrirQuebraGelos(){
  if(!usuarioAtual?.modulos?.quebraGelos){ openUpsell(4); return; }
  renderQuebraGelos(quebraGelos50);
  // Populate category filter
  const sel = document.getElementById('qg-filter-cat');
  if(sel){
    const tr = QUEBRAGELOS_TRADUCOES[currentLang]?.cats || {};
    sel.innerHTML = `<option value="">${t('filtro.categoria')}</option>` +
      QG_CATS.map(c=>`<option value="${c}">${tr[c]||c}</option>`).join('');
  }
  nav('screen-quebraGelos','nav-home');
}
function renderQuebraGelos(list){
  const c = document.getElementById('quebraGelos-list');
  if(!list.length){
    c.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t('qg.vazio')}</h4></div>`;
    return;
  }
  const badge = document.getElementById('qg-count-badge');
  if(badge) badge.textContent = list.length;
  c.innerHTML = list.map(raw=>{
    const q = getQuebraGelo(raw);
    return `
    <div class="content-card" onclick="openQGDetail(${raw.id})">
      <div class="content-card-top">
        <h4>${q.titulo}</h4>
      </div>
      <div class="content-card-meta">
        <span class="tag">${q.categoria}</span>
        <span class="tag sage">⏱ ${q.duracao}</span>
      </div>
    </div>`}).join('');
}
function filterQuebraGelos(q){
  const cat = document.getElementById('qg-filter-cat')?.value||'';
  const clear = document.getElementById('qg-clear');
  if(clear) clear.style.display = (q||cat) ? 'block' : 'none';
  let list = quebraGelos50;
  if(cat) list = list.filter(qg=>qg.categoria===cat);
  if(q) {
    const ql = q.toLowerCase();
    list = list.filter(raw => {
      const qg = getQuebraGelo(raw);
      return (qg.titulo || '').toLowerCase().includes(ql) ||
        (qg.objetivo || '').toLowerCase().includes(ql) ||
        (qg.categoria || '').toLowerCase().includes(ql);
    });
  }
  renderQuebraGelos(list);
}
function limparQuebraGelos(){
  document.getElementById('qg-search').value='';
  document.getElementById('qg-filter-cat').value='';
  document.getElementById('qg-clear').style.display='none';
  renderQuebraGelos(quebraGelos50);
}
function openQGDetail(id){
  const raw = quebraGelos50.find(x=>x.id===id);
  if(!raw) return;
  currentQGDetail = raw;
  const q = getQuebraGelo(raw);
  document.getElementById('qg-detail-titulo').textContent = q.titulo;
  document.getElementById('qg-detail-body').innerHTML = `
    <div class="detail-section">
      <h5>${t('din.objetivo')}</h5>
      <p>${q.objetivo}</p>
    </div>
    <div class="detail-section">
      <h5>${t('qg.como.aplicar')}</h5>
      <p>${q.como}</p>
    </div>
    <div class="detail-section">
      <h5>${t('qg.duracao')}</h5>
      <p>${q.duracao}</p>
    </div>
    <div class="detail-section" style="border-left:3px solid var(--gold)">
      <h5>${t('qg.dica')}</h5>
      <p>${q.dica}</p>
    </div>`;
  nav('screen-qg-detail','nav-home');
  setTimeout(()=>atualizarBtnFavQG(raw.id), 0);
}

const estudos30 = [
  {id:1,titulo:'A Bondade de Deus',versiculo:'Salmos 145:9',versiculoTexto:'O Senhor é bom para com todos, e a sua bondade se estende sobre todas as suas obras.',reflexao:'A bondade de Deus não é condicional. Ela flui constantemente, tocando a vida de todos, independentemente de merecimento. Reconhecer essa verdade transforma nossa perspectiva sobre as bênçãos diárias.',perguntas:['Como você tem experimentado a bondade de Deus esta semana?','Que dificuldades tornam difícil enxergar Sua bondade?','Como podemos refletir essa bondade para outras mulheres?'],aplicacao:'Esta semana, pratique reconhecer pelo menos uma manifestação da bondade de Deus por dia e anote no diário.'},
  {id:2,titulo:'Confiança em Tempos Difíceis',versiculo:'Provérbios 3:5',versiculoTexto:'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.',reflexao:'Confiar em Deus exige que deixemos de lado nossa necessidade de controle. Quando entregamos nossas preocupações a Ele, descobrimos que Sua fidelidade é maior do que qualquer desafio.',perguntas:['Como você lida quando as circunstâncias parecem contrariar a vontade de Deus?','Em que área você mais luta para confiar no Senhor?'],aplicacao:'Escreva uma preocupação que você está carregando. Ore pedindo confiança e entrega. Durante a semana, anote como Deus demonstra Sua fidelidade.'},
  {id:3,titulo:'A Força da Oração',versiculo:'Filipenses 4:6',versiculoTexto:'Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças.',reflexao:'A oração não é apenas uma lista de pedidos, mas uma conversa íntima com nosso Pai Celestial. Ela transforma nossa ansiedade em paz e nos lembra de que não precisamos carregar os fardos sozinhas.',perguntas:['Como a oração tem mudado sua perspectiva sobre problemas?','Que barreiras impedem orações mais consistentes?','Como podemos encorajar umas às outras na vida de oração?'],aplicacao:'Pai Celestial, ensina-nos a trazer tudo a Ti em oração. Que nossa conversa contigo seja constante e honesta. Em Jesus, amém.'},
  {id:4,titulo:'Perseverança na Fé',versiculo:'1 Coríntios 9:26',versiculoTexto:'Corro, porém, não como a coisa incerta; luto, não como desferindo golpes no ar.',reflexao:'A fé exige propósito e disciplina. Correr a corrida cristã significa ter clareza sobre o alvo: conhecer a Cristo e crescer em Sua imagem.',perguntas:['Em que área da sua fé você sente mais necessidade de perseverar?','Como a comunidade nos ajuda a não desistir?'],aplicacao:'Defina uma área específica onde deseja crescer espiritualmente. Crie pequenas ações diárias para perseguir esse objetivo com consistência.'},
  {id:5,titulo:'Gratidão Transformadora',versiculo:'1 Crônicas 16:34',versiculoTexto:'Demos graças ao Senhor porque Ele é bom; a sua bondade dura para sempre.',reflexao:'A gratidão não depende das circunstâncias. Mesmo nas dificuldades, podemos agradecer pela presença de Deus, pela Sua fidelidade e pelas pequenas bênçãos que muitas vezes passam despercebidas.',perguntas:['Que três coisas você agradece hoje?','Como a gratidão mudou sua perspectiva sobre uma situação difícil?','Como podemos cultivar gratidão diária?'],aplicacao:'Pratique listar três bênçãos por dia durante uma semana inteira, focando em detalhes pequenos que normalmente passam despercebidos.'},
  {id:6,titulo:'Alegria no Senhor',versiculo:'Filipenses 4:4',versiculoTexto:'Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos.',reflexao:'A alegria em Deus transcende circunstâncias. É uma escolha consciente de confiar na Sua soberania e no Seu amor perfeito.',perguntas:['O que rouba sua alegria com mais frequência?','Como você encontra alegria mesmo em momentos difíceis?'],aplicacao:'Pratique começar e terminar cada dia com gratidão. Escreva uma bênção que recebeu nas últimas 24 horas.'},
  {id:7,titulo:'Perdão e Libertação',versiculo:'1 João 1:9',versiculoTexto:'Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.',reflexao:'O perdão de Deus é um presente que nos liberta do peso esmagador da culpa e da vergonha. Ao aceitarmos essa graça, somos capazes de começar de novo, com um coração leve e renovado.',perguntas:['Quais são as maiores barreiras que você enfrenta ao perdoar a si mesma?','Como a compreensão do perdão de Deus pode te ajudar a perdoar outras pessoas?','Compartilhe um momento em que você sentiu a libertação do perdão.'],aplicacao:'Identifique alguém que você precisa perdoar. Leve isso a Deus em oração esta semana.'},
  {id:8,titulo:'Identidade em Cristo',versiculo:'2 Coríntios 5:17',versiculoTexto:'Portanto, se alguém está em Cristo, é nova criatura; as coisas antigas já passaram; eis que se fizeram novas.',reflexao:'Nossa verdadeira identidade não está em nossas conquistas, falhas ou no que o mundo diz. Ela é encontrada em Cristo, onde somos filhas amadas de Deus, com um novo propósito e valor inabalável.',perguntas:['Como sua identidade em Cristo afeta sua autoestima?','De que forma reconhecer essa nova identidade transforma seus relacionamentos?','Quais "coisas antigas" você sente que passaram e quais "novas" se fizeram em sua vida?'],aplicacao:'Escreva 5 afirmações de quem você é em Cristo e leia-as em voz alta pela manhã durante uma semana.'},
  {id:9,titulo:'Amor Sacrificial',versiculo:'1 João 3:16',versiculoTexto:'Nisto conhecemos o amor: em que Cristo deu a vida por nós; e devemos dar a vida pelos irmãos.',reflexao:'O amor de Cristo é o nosso maior exemplo. Ele não apenas falou de amor, mas o demonstrou sacrificialmente. Esse amor nos chama a ir além das palavras, a agir em favor uns dos outros.',perguntas:['Quais são os desafios de praticar o amor sacrificial no dia a dia?','Pense em alguém que demonstrou amor sacrificial a você. Como isso a impactou?','De que forma podemos amar sacrificialmente as mulheres em nosso grupo?'],aplicacao:'Escolha uma pessoa e pratique um gesto de amor genuíno e sacrificial esta semana.'},
  {id:10,titulo:'Esperança Eterna',versiculo:'Salmos 146:5',versiculoTexto:'Bem-aventurado aquele cuja esperança está no Senhor, seu Deus.',reflexao:'A esperança que temos em Deus é um porto seguro em meio às incertezas da vida. Diferente da esperança humana, que pode falhar, a esperança em Cristo é firme e nos sustenta, prometendo um futuro seguro e eterno.',perguntas:['Em que área sua esperança precisa ser renovada?','Como você compartilha esperança com outras pessoas?'],aplicacao:'Pense em uma área da sua vida onde a esperança parece estar enfraquecida. Peça a Deus para renovar sua fé e compartilhe um testemunho de esperança com alguém.'},
  {id:11,titulo:'Humildade e Serviço',versiculo:'Colossenses 3:12',versiculoTexto:'Portanto, como eleitos de Deus, santos e amados, revistam-se de compaixão, bondade, humildade, mansidão e paciência.',reflexao:'A verdadeira humildade nos liberta do peso do orgulho e da necessidade de autoafirmação. Ela nos capacita a servir ao próximo de forma genuína, reconhecendo que toda boa dádiva vem de Deus.',perguntas:['Quais são as maiores barreiras para cultivar a humildade?','De que maneiras a humildade transforma seu serviço?','Compartilhe um momento em que você experimentou a liberdade de agir com humildade.'],aplicacao:'Esta semana, faça um ato de serviço anônimo — sem que ninguém saiba que foi você.'},
  {id:12,titulo:'Paz que Transcende',versiculo:'Filipenses 4:7',versiculoTexto:'A paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus.',reflexao:'A paz divina não é a ausência de problemas, mas uma tranquilidade interior que nos sustenta apesar dos problemas. Diferente da paz que o mundo oferece, a paz de Deus brota de um relacionamento seguro com Ele.',perguntas:['Como você diferencia a paz de Deus da paz que o mundo oferece?','Em que situações turbulentas você conseguiu experimentar essa paz?','Como podemos buscar e cultivar essa paz no dia a dia?'],aplicacao:'Dedique alguns minutos por dia à meditação e à oração, focando na presença de Deus.'},
  {id:13,titulo:'Fé Ativa',versiculo:'Tiago 2:26',versiculoTexto:'Assim também a fé, se não tiver obras, é morta em si mesma.',reflexao:'A fé verdadeira não é passiva; ela se manifesta em ações concretas que refletem nosso amor e obediência a Deus. Crer de fato significa agir de acordo com o que cremos, demonstrando que nossa fé é viva e transformadora.',perguntas:['Como sua fé tem se manifestado em ações concretas recentemente?','Qual área da sua vida precisa de uma fé mais ativa?'],aplicacao:'Identifique uma área onde você pode expressar sua fé de forma mais ativa esta semana.'},
  {id:14,titulo:'Comunhão Genuína',versiculo:'Tiago 5:16',versiculoTexto:'Portanto, confessai os vossos pecados uns aos outros, e orai uns pelos outros, para que sareis; a oração do justo tem muito poder.',reflexao:'A comunhão genuína exige vulnerabilidade e transparência. Ao nos abrirmos uns com os outros e compartilharmos nossas lutas, construímos laços de confiança que permitem que o poder de Deus opere em nossa cura e crescimento.',perguntas:['Como podemos criar um ambiente seguro onde as mulheres se sintam à vontade para compartilhar suas fraquezas?','Você já experimentou a cura através da oração de outra mulher?'],aplicacao:'Escolha uma amiga do grupo e compartilhe algo pelo qual você precisa de oração, permitindo que ela ore por você.'},
  {id:15,titulo:'Renovação Espiritual',versiculo:'2 Coríntios 4:16',versiculoTexto:'Portanto, não desistimos; mas ainda que o nosso homem exterior se corrompa, contudo o nosso homem interior se renova de dia em dia.',reflexao:'A vida cristã é uma jornada de constante renovação. Mesmo diante dos desafios e do desgaste do corpo, nossa essência espiritual pode ser fortalecida diariamente pela graça de Deus.',perguntas:['Que práticas espirituais você considera mais eficazes para a sua renovação diária?','Como podemos encorajar umas às outras nessa busca por renovação?'],aplicacao:'Pense em uma nova rotina que você pode incorporar para fomentar sua renovação espiritual.'},
  {id:16,titulo:'Sabedoria Divina',versiculo:'Tiago 1:5',versiculoTexto:'Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e sem censura; e ser-lhe-á dada.',reflexao:'A sabedoria divina é um dom que nos eleva acima da compreensão mundana, permitindo-nos discernir os caminhos de Deus em todas as situações. Ela nos guia para fazer escolhas que honram a Ele.',perguntas:['Em que áreas você sente mais necessidade de sabedoria divina?','Como a sabedoria de Deus se diferencia da sabedoria que o mundo oferece?','Compartilhe uma experiência onde a busca por sabedoria divina fez diferença.'],aplicacao:'Identifique uma decisão difícil em sua vida e leve-a a Deus em oração, pedindo especificamente por Sua sabedoria.'},
  {id:17,titulo:'Força na Fraqueza',versiculo:'2 Coríntios 12:10',versiculoTexto:'Porque quando sou fraco, então é que sou forte.',reflexao:'A fraqueza não é um obstáculo para Deus, mas um palco para Sua glória. É quando reconhecemos nossas limitações que abrimos espaço para o poder de Cristo agir em nós, transformando nossa vulnerabilidade em força.',perguntas:['Em que área você se sente mais fraca ou incapaz?','Como Deus pode usar essa fraqueza para Sua glória?'],aplicacao:'Identifique uma área onde você se sente fraca ou incapaz. Entregue essa fraqueza a Deus em oração.'},
  {id:18,titulo:'Generosidade do Coração',versiculo:'Atos 20:35',versiculoTexto:'Mais bem-aventurado é dar do que receber.',reflexao:'A generosidade é um reflexo direto do caráter divino. Quando damos, não apenas abençoamos os outros, mas também espelhamos o amor e a abundância de Deus em nossas vidas.',perguntas:['Quais são as principais barreiras que nos impedem de ser mais generosas?','Como a generosidade de Deus se manifesta em sua vida hoje?'],aplicacao:'Pense em uma pessoa ou causa que você pode abençoar. Comprometa-se a praticar um ato de generosidade desinteressada esta semana.'},
  {id:19,titulo:'Paciência e Perseverança',versiculo:'1 Coríntios 15:58',versiculoTexto:'Portanto, meus amados irmãos, sede firmes, inabaláveis, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.',reflexao:'A jornada da fé exige paciência e uma visão de longo prazo. Muitas vezes, o desânimo tenta nos roubar a força, mas é na perseverança que experimentamos a fidelidade de Deus.',perguntas:['Como você tem lidado com o desânimo na sua caminhada de fé?','Que estratégias você usa para cultivar a perseverança?'],aplicacao:'Identifique uma área específica da sua vida onde você precisa exercitar mais paciência. Peça a Deus por sabedoria e força para perseverar.'},
  {id:20,titulo:'Propósito e Chamado',versiculo:'Romanos 8:28',versiculoTexto:'Porque sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.',reflexao:'Deus, em Sua infinita sabedoria, tem um propósito único e pessoal para cada mulher. Descobrir e alinhar-se a esse chamado nos preenche de significado e nos capacita a viver uma vida que glorifica a Ele.',perguntas:['Como você vê o propósito de Deus se manifestando em sua vida?','Como nossos dons e talentos se conectam com nosso chamado?'],aplicacao:'Reflita sobre as paixões e talentos que Deus lhe deu. Como você pode usá-los para cumprir o propósito que Ele tem para sua vida hoje?'},
  {id:21,titulo:'Cura Emocional',versiculo:'Salmos 147:3',versiculoTexto:'Ele cura os de coração quebrantado e liga as suas feridas.',reflexao:'Deus, em Sua infinita compaixão, é o único capaz de trazer cura profunda às nossas emoções feridas. Reconhecer nossa vulnerabilidade e expressá-la a Ele é o primeiro passo para experimentar a Sua restauração.',perguntas:['Como você tem permitido que Deus cure suas feridas emocionais?','Qual é o papel da comunidade no processo de cura?'],aplicacao:'Escolha uma ferida emocional que você tem carregado e traga-a a Deus em oração. Peça a Ele para iniciar o processo de cura.'},
  {id:22,titulo:'Integridade e Honestidade',versiculo:'Provérbios 20:7',versiculoTexto:'O justo anda em sua integridade; bem-aventurados são seus filhos depois dele.',reflexao:'A integridade é a base da confiança, e a honestidade é a sua expressão. Viver com integridade em todas as áreas reflete o caráter de Cristo em nós, construindo um legado de retidão para as próximas gerações.',perguntas:['Quais são os maiores desafios para viver com honestidade e integridade hoje?','Como sua integridade pode impactar as pessoas ao seu redor?','De que forma podemos nos fortalecer para manter a integridade sob pressão?'],aplicacao:'Avalie uma área da sua vida onde você pode viver com maior integridade. Comprometa-se a agir com total honestidade nesta semana.'},
  {id:23,titulo:'Amor ao Próximo',versiculo:'Mateus 22:39',versiculoTexto:'Ama o teu próximo como a ti mesmo.',reflexao:'O amor ao próximo é a manifestação mais visível do amor a Deus. Ao estendermos bondade e compaixão aos outros, especialmente aos necessitados ou diferentes de nós, estamos honrando a Deus.',perguntas:['Quem é seu "próximo" nesta semana?','Como podemos amar aqueles que são difíceis de amar?'],aplicacao:'Identifique alguém em sua vida ou comunidade que esteja em necessidade. Demonstre amor de forma prática e genuína esta semana.'},
  {id:24,titulo:'Contentamento em Cristo',versiculo:'Filipenses 4:11',versiculoTexto:'Tenho aprendido a contentar-me com o que tenho.',reflexao:'O verdadeiro contentamento não brota das circunstâncias, mas de uma profunda confiança em Deus. Reconhecer Sua soberania e provisão liberta-nos da busca incessante por mais.',perguntas:['De que formas o consumismo nos afasta do contentamento?','Como a cultura atual influencia nossa percepção de "ter o suficiente"?','Compartilhe uma experiência em que você encontrou contentamento sem ter "tudo" o que desejava.'],aplicacao:'Identifique uma área onde você sente falta de contentamento. Pratique a gratidão pelo que você já tem.'},
  {id:25,titulo:'Transformação Contínua',versiculo:'2 Coríntios 3:18',versiculoTexto:'E todos nós, com o rosto descoberto, contemplando, como por espelho, a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.',reflexao:'A transformação espiritual não é um evento único, mas um processo contínuo de nos tornarmos mais semelhantes a Cristo. Mesmo diante da resistência à mudança, o Espírito Santo nos molda progressivamente.',perguntas:['Como você percebe a transformação em sua vida ao longo do tempo?','Qual área você deseja ver maior transformação?'],aplicacao:'Identifique uma área da sua vida onde você deseja uma transformação mais profunda. Ore especificamente por essa mudança.'},
  {id:26,titulo:'Fidelidade de Deus',versiculo:'Salmos 100:5',versiculoTexto:'Porque o Senhor é bom, e a sua misericórdia dura para sempre, e a sua fidelidade de geração em geração.',reflexao:'A fidelidade de Deus é um fundamento inabalável, constante e confiável através das gerações. É um refúgio seguro em todas as circunstâncias da vida, convidando-nos a descansar em Suas promessas.',perguntas:['Como você tem experimentado a fidelidade de Deus na sua história?','Como compartilhar esses testemunhos encoraja outras mulheres?'],aplicacao:'Reconheça a fidelidade de Deus em sua própria história e compartilhe um testemunho para encorajar outras pessoas.'},
  {id:27,titulo:'Coragem em Cristo',versiculo:'2 Timóteo 1:7',versiculoTexto:'Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de disciplina.',reflexao:'A coragem que vem de Deus não é a ausência de medo, mas a presença da fé e da confiança em Seu poder. Ele nos capacita com força interior para enfrentar desafios, sabendo que não estamos sozinhas.',perguntas:['Identifique um medo específico que você enfrenta atualmente.','Como você pode buscar coragem em Cristo para enfrentá-lo?','Compartilhe uma experiência em que a fé em Deus a ajudou a ser corajosa.'],aplicacao:'Comprometa-se a dar um pequeno passo esta semana para enfrentar um medo, apoiada na promessa de que Deus está com você.'},
  {id:28,titulo:'Vida Abundante',versiculo:'João 10:10',versiculoTexto:'Eu vim para que tenham vida, e a tenham em abundância.',reflexao:'A vida abundante em Cristo não é sobre bens materiais, mas uma plenitude de paz, propósito e alegria que transcende as circunstâncias. É um relacionamento profundo com Deus que nos preenche e sustenta.',perguntas:['Como você define "vida abundante" em termos espirituais?','Em que área você deseja experimentar mais plenitude em Cristo?'],aplicacao:'Explore uma área da sua vida onde você deseja mais plenitude em Cristo. Ore para que Ele a guie nessa área.'},
  {id:29,titulo:'Legado de Fé',versiculo:'Deuteronômio 32:7',versiculoTexto:'Lembra-te dos dias antigos, considera os anos de muitas gerações; pergunta a teu pai, e ele te informará; aos teus anciãos, e eles te dirão.',reflexao:'Nossa fé não é apenas para o presente; ela constrói um alicerce para aqueles que vêm depois de nós. Ao observar o testemunho de fé das gerações passadas, somos inspiradas e chamadas a deixar um legado duradouro.',perguntas:['Que legado de fé você deseja deixar?','Como você está transmitindo sua fé intencionalmente?'],aplicacao:'Identifique uma pessoa a quem você deseja intencionalmente transmitir sua fé. Pense em uma ação prática para fazer isso esta semana.'},
  {id:30,titulo:'Celebração da Jornada',versiculo:'Filipenses 3:1',versiculoTexto:'Portanto, irmãos, alegrai-vos no Senhor. Escrever-vos as mesmas coisas não me é penoso, e para vós é seguro.',reflexao:'Nossa jornada de fé é repleta de momentos de crescimento e superação. É essencial celebrarmos o caminho percorrido, as vitórias alcançadas e a fidelidade de Deus em cada passo, cultivando um coração grato e louvando ao Senhor.',perguntas:['Qual foi a maior transformação espiritual que você experimentou?','Como podemos celebrar as vitórias umas das outras?','Como continuaremos crescendo juntas?'],aplicacao:'Dedique um tempo para reconhecer e celebrar seu crescimento espiritual. Compartilhe um testemunho de transformação com o grupo.'},
];

function abrirEstudos(){
  if(!usuarioAtual?.modulos?.estudos){ openUpsell(6); return; }
  renderEstudos(estudos30);
  nav('screen-estudos','nav-home');
}
function renderEstudos(list){
  const c = document.getElementById('estudos-list');
  if(!list.length){
    c.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t('est.nenhum')}</h4></div>`;
    return;
  }
  c.innerHTML = list.map(raw=>{
    const e = getEstudo(raw);
    return `
    <div class="content-card" onclick="openEstudoDetail(${raw.id})">
      <div class="content-card-top">
        <h4>${t('estudos.titulo').replace('📖 ','').replace('30 ','').trim()} ${raw.id}: ${e.titulo}</h4>
      </div>
      <div class="content-card-meta">
        <span class="tag sage">📖 ${e.versiculo}</span>
      </div>
    </div>`}).join('');
}
function filterEstudos(q){
  const r = q ? estudos30.filter(raw=>{
    const e = getEstudo(raw);
    const ql = q.toLowerCase();
    return (e.titulo || '').toLowerCase().includes(ql) ||
      (raw.versiculo || '').toLowerCase().includes(ql) ||
      (e.reflexao || '').toLowerCase().includes(ql);
  }) : estudos30;
  renderEstudos(r);
}
function openEstudoDetail(id){
  const raw = estudos30.find(x=>x.id===id);
  if(!raw) return;
  const e = getEstudo(raw);
  document.getElementById('est-detail-titulo').textContent = `${t('estudos.titulo').replace('📖 ','').replace('30 ','').trim()} ${raw.id}: ${e.titulo}`;
  const perguntasHtml = e.perguntas.map((p,i)=>`<li><span class="step-num">${i+1}</span>${p}</li>`).join('');
  document.getElementById('est-detail-body').innerHTML = `
    <div class="detail-section" style="border-left:3px solid var(--gold)">
      <h5>📖 ${raw.versiculo}</h5>
      <p style="font-style:italic">"${raw.versiculoTexto}"</p>
    </div>
    <div class="detail-section"><h5>${t('enc.detail.reflexao')}</h5><p>${e.reflexao}</p></div>
    <div class="detail-section">
      <h5>${t('enc.detail.perguntas')}</h5>
      <ul class="steps">${perguntasHtml}</ul>
    </div>
    <div class="detail-section" style="background:var(--gold-pale);border:1.5px solid var(--gold-light)">
      <h5>${t('din.aplicacao')}</h5>
      <p>${e.aplicacao}</p>
    </div>`;
  nav('screen-estudo-detail','nav-home');
}

function abrirPerguntas(){
  if(!usuarioAtual?.modulos?.perguntas){ openUpsell(5); return; }
  atualizarFiltrosTraduzidos();
  renderPerguntas(perguntas100);
  nav('screen-perguntas','nav-home');
}

function renderPerguntas(list){
  const c = document.getElementById('perguntas-list');
  const badge = document.getElementById('perg-count-badge');
  if(badge) badge.textContent = list.length;
  if(!list.length){
    c.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t('perg.vazia')}</h4></div>`;
    return;
  }
  c.innerHTML = list.map(raw=>{
    const p = getPerguntaTrad(raw);
    const cor = CORES_CATEGORIA_P[raw.categoria]||'#7B5EA7';
    return `<div class="content-card perg-card" onclick="copiarPergunta('${raw.id}')">
      <div class="perg-cat-pill" style="background:${cor}15;color:${cor};border:1px solid ${cor}30">${p.categoriaLabel}</div>
      <p class="perg-texto">${p.pergunta}</p>
      <div class="perg-footer">
        <span class="perg-copy-hint">${t('perg.copiar')}</span>
        <button class="perg-fav-btn" onclick="event.stopPropagation();toggleFavPergunta('${raw.id}')" id="pfav-${raw.id}">${isFavPergunta(raw.id)?'❤️':'🤍'}</button>
      </div>
    </div>`;
  }).join('');
}

function filtrarPerguntas(){
  const q = (document.getElementById('perg-search')?.value||'').toLowerCase();
  const cat = document.getElementById('perg-filter-cat')?.value||'';
  const clear = document.getElementById('perg-clear');
  if(clear) clear.style.display = (q||cat)?'block':'none';
  let list = perguntas100;
  if(q) list = list.filter(raw=>{
    const p = getPerguntaTrad(raw);
    return (p.pergunta || '').toLowerCase().includes(q) || (p.categoriaLabel || '').toLowerCase().includes(q);
  });
  if(cat) list = list.filter(p=>p.categoria===cat);
  renderPerguntas(list);
}

function limparPerguntas(){
  const s = document.getElementById('perg-search');
  const c = document.getElementById('perg-filter-cat');
  if(s) s.value='';
  if(c) c.value='';
  filtrarPerguntas();
}

function copiarPergunta(id){
  const p = perguntas100.find(x=>x.id===id);
  if(!p) return;
  navigator.clipboard?.writeText(p.pergunta).then(()=>toastMsg(t('perg.copiada'))).catch(()=>{});
}

// Favoritos de perguntas
function isFavPergunta(id){ const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon'; const f = storage.getJSON('fav_perguntas_' + email, []); return f.includes(String(id)); }
function toggleFavPergunta(id){
  try{
    const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
    const key='fav_perguntas_'+email;
    let f = storage.getJSON(key, []);
    const sid = String(id);
    if(f.includes(sid)){
      confirmarDesfavoritar(()=>{
        f=f.filter(x=>x!==sid);
        storage.setJSON(key, f);
        toastMsg(t('toast.fav.rm'));
        const btn=document.getElementById('pfav-'+id);
        if(btn) btn.textContent='🤍';
      });
    } else {
      f.push(sid);
      storage.setJSON(key, f);
      toastMsg(t('toast.fav.add'));
      const btn=document.getElementById('pfav-'+id);
      if(btn) btn.textContent='❤️';
    }
  }catch(e){}
}

// Favoritos de Encontros Completos
function isFavEncontro(id){ return storage.getJSON('fav_encontros_' + (usuarioAtual?.email || ''), []).includes(id); }
function toggleFavEncontroDetalhe(){
  if(!currentEncDetail) return;
  const id = currentEncDetail.id;
  const key = 'fav_encontros_'+(usuarioAtual?.email||'');
  try{
    let f = storage.getJSON(key, []);
    if(f.includes(id)){
      confirmarDesfavoritar(()=>{
        f = f.filter(x=>x!==id);
        storage.setJSON(key, f);
        toastMsg(t('toast.fav.rm'));
        atualizarBtnFavEncontro(id);
        renderFavoritos();
      });
    } else {
      f.push(id);
      storage.setJSON(key, f);
      toastMsg(t('toast.fav.add'));
      atualizarBtnFavEncontro(id);
      renderFavoritos();
    }
  }catch(e){}
}
function atualizarBtnFavEncontro(id){
  const btn = document.getElementById('enc-detail-fav-btn');
  if(!btn) return;
  btn.innerHTML = isFavEncontro(id)
    ? `❤️ <span>${t('btn.salvo')}</span>`
    : `🤍 <span>${t('btn.salvar.label')}</span>`;
}

// Favoritos de Quebra-Gelos
function isFavQG(id){ return storage.getJSON('fav_qgelos_' + (usuarioAtual?.email || ''), []).includes(id); }
function toggleFavQGDetalhe(){
  if(!currentQGDetail) return;
  const id = currentQGDetail.id;
  const key = 'fav_qgelos_'+(usuarioAtual?.email||'');
  try{
    let f = storage.getJSON(key, []);
    if(f.includes(id)){
      confirmarDesfavoritar(()=>{
        f = f.filter(x=>x!==id);
        storage.setJSON(key, f);
        toastMsg(t('toast.fav.rm'));
        atualizarBtnFavQG(id);
        renderFavoritos();
      });
    } else {
      f.push(id);
      storage.setJSON(key, f);
      toastMsg(t('toast.fav.add'));
      atualizarBtnFavQG(id);
      renderFavoritos();
    }
  }catch(e){}
}
function atualizarBtnFavQG(id){
  const btn = document.getElementById('qg-detail-fav-btn');
  if(!btn) return;
  btn.textContent = isFavQG(id) ? ('❤️ '+t('btn.salvo')) : ('🤍 '+t('btn.salvar.label'));
}

// ── PATCH NOTES ──
const STORAGE_PATCH_VISTA = 'patch_notes_last_seen';
const STORAGE_PATCH_ADMIN = 'patch_notes_admin_v1';
const PATCH_NOTES_PADRAO = [
  {
    versao: '1.4.3',
    data: '2026-03-16',
    novidade: true,
    titulo: 'Melhorias de experiência',
    itens: [
      {icon:'✏️', texto:'Renomear conjunto agora usa popup estilizado no lugar do prompt nativo do navegador'},
    ]
  },
  {
    versao: '1.4.2',
    data: '2026-03-16',
    novidade: true,
    itens: [
      {icon:'👤', texto:'Clicar no avatar abre direto o perfil — mini dropdown removido'},
      {icon:'📋', texto:'Perfil abre com todos os menus minimizados — escolha o que quer ver'},
      {icon:'↩️', texto:'Botão Sair da conta movido para o final do perfil — sempre visível'},
    ]
  },
  {
    versao: '1.4.1',
    data: '2026-03-16',
    novidade: true,
    itens: [
      {icon:'📌', texto:'Barra de navegação agora fixa — sempre visível ao rolar qualquer tela'},
      {icon:'🔧', texto:'Atalhos admin no perfil corrigidos — botões Patch Notes e Admin aparecem corretamente'},
      {icon:'↺', texto:'Botões de regenerar com visual por cor: dourado (dinâmica), verde (estudo), rosa (pergunta)'},
      {icon:'❤️', texto:'Favoritar conjuntos gerados no histórico do gerador'},
      {icon:'✏️', texto:'Renomear conjuntos gerados — nome aparece no histórico e no preview'},
    ]
  },
  {
    versao: '1.4.0',
    data: '2026-03-16',
    novidade: true,
    itens: [
      {icon:'🏷', texto:'Gerador com seletor de tema — gere dinâmica, estudo e pergunta relacionados ao mesmo tema'},
      {icon:'🔀', texto:'Botões individuais de regenerar em cada card do gerador'},
      {icon:'📦', texto:'Histórico do gerador salva o conjunto completo (dinâmica + estudo + pergunta)'},
      {icon:'👁', texto:'Preview completo do conjunto gerado com todos os detalhes'},
      {icon:'🆕', texto:'Patch Notes adicionado ao menu do perfil como item separado'},
      {icon:'👤', texto:'Mini menu do topbar simplificado — apenas Perfil e Sair'},
      {icon:'📌', texto:'Header do perfil agora fixo ao expandir o accordion'},
      {icon:'📝', texto:'Planejador de Encontros movido para Produtos Premium — R$14,90'},
      {icon:'💰', texto:'Preços dos produtos corrigidos nos modais de bloqueio'},
      {icon:'🌐', texto:'Tradução completa de todos os estados bloqueados e desbloqueados'},
    ]
  },
  {
    versao: '1.3.0',
    data: '2026-03-16',
    novidade: true,
    itens: [
      {icon:'⏱', texto:'Timer integrado nas dinâmicas — cronômetro automático baseado no tempo sugerido'},
      {icon:'🌸', texto:'Avaliação pós-encontro — registre estrelas, participantes e observações'},
      {icon:'📸', texto:'Gerador de imagem para Stories do Instagram — compartilhe dinâmicas com estilo'},
      {icon:'📋', texto:'Histórico mostra avaliações salvas com estrelas e número de participantes'},
      {icon:'🧊', texto:'50 Quebra-Gelos Cristãos — novo módulo disponível'},
      {icon:'📝', texto:'Planejador de Encontros agora é um produto premium com R$14,90'},
    ]
  },
  {
    versao: '1.2.0',
    data: '2026-03-10',
    novidade: false,
    itens: [
      {icon:'🌸', texto:'Perfil em formato bottom-sheet — abre como painel sem trocar de tela'},
      {icon:'🎲', texto:'Gerador de dinâmicas sem repetição — percorre todas as 200 antes de repetir'},
      {icon:'🗂', texto:'Histórico de dinâmicas geradas na sessão atual'},
      {icon:'🔒', texto:'Confirmação ao desfavoritar — evita remoção acidental'},
      {icon:'📅', texto:'Datepicker customizado no Planejador — campo de texto com formatação automática'},
      {icon:'🌐', texto:'Correções de tradução PT/EN/ES em toda a aplicação'},
    ]
  },
  {
    versao: '1.1.0',
    data: '2026-03-05',
    novidade: false,
    itens: [
      {icon:'🌙', texto:'Tema claro e escuro disponíveis'},
      {icon:'🌐', texto:'Suporte a 3 idiomas: Português, English e Español'},
      {icon:'💬', texto:'100 Perguntas Poderosas com filtro por categoria'},
      {icon:'📖', texto:'30 Estudos Bíblicos completos'},
      {icon:'📿', texto:'Devocional de 7 Dias com versículo, reflexão e oração'},
      {icon:'🤍', texto:'Sistema de favoritos com persistência por conta'},
    ]
  },
  {
    versao: '1.0.0',
    data: '2026-02-28',
    novidade: false,
    itens: [
      {icon:'🎉', texto:'Lançamento do app Encontros de Mulheres'},
      {icon:'🎭', texto:'200 Dinâmicas completas com objetivo, materiais, passos e aplicação'},
      {icon:'🌸', texto:'50 Encontros Completos prontos para conduzir'},
      {icon:'📝', texto:'Planejador de Encontros com versículo via API'},
      {icon:'✨', texto:'Gerador de encontros aleatório'},
      {icon:'⚙️', texto:'Painel admin para gerenciar módulos por usuária'},
    ]
  },
];

let PATCH_NOTES = [];

function normalizarPatchNote(patch) {
  return {
    id: patch.id || `v${String(patch.versao || '0.0.0').replaceAll('.', '_')}`,
    versao: patch.versao || '0.0.0',
    data: patch.data || '2026-01-01',
    novidade: patch.novidade ?? true,
    titulo: patch.titulo || '',
    itens: Array.isArray(patch.itens) ? patch.itens.map(item => ({
      icon: item.icon || '🆕',
      texto: item.texto || ''
    })) : []
  };
}

function compareVersionsSemver(aVersao, bVersao) {
  const a = String(aVersao || '0.0.0').split('.').map(n => Number(n) || 0);
  const b = String(bVersao || '0.0.0').split('.').map(n => Number(n) || 0);

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const av = a[i] || 0;
    const bv = b[i] || 0;
    if (bv !== av) return bv - av;
  }

  return 0;
}

function sortPatchNotes(lista) {
  return [...lista].sort((a, b) => {
    const diffData = new Date(b.data) - new Date(a.data);
    if (diffData !== 0) return diffData;
    return compareVersionsSemver(a.versao, b.versao);
  });
}

function carregarPatchNotes() {
  try {
    const salvas = storage.getJSON(STORAGE_PATCH_ADMIN, []);

    const padrao = PATCH_NOTES_PADRAO.map(normalizarPatchNote);
    const admin = Array.isArray(salvas) ? salvas.map(normalizarPatchNote) : [];

    // 🔥 juntar os dois
    const combinadas = [...padrao, ...admin];

    // 🔥 remover duplicadas por ID
    const unicas = [];
    const ids = new Set();

    combinadas.forEach(p => {
      if (!ids.has(p.id)) {
        ids.add(p.id);
        unicas.push(p);
      }
    });

    PATCH_NOTES = sortPatchNotes(unicas);

    return PATCH_NOTES;

  } catch (e) {
    console.warn('Erro ao carregar patch notes:', e);

    PATCH_NOTES = sortPatchNotes(PATCH_NOTES_PADRAO.map(normalizarPatchNote));
    return PATCH_NOTES;
  }
}

function salvarPatchNotesNoStorage() {
  try {
    storage.setJSON(STORAGE_PATCH_ADMIN, PATCH_NOTES);
  } catch (e) {
    console.warn('Erro ao salvar patch notes:', e);
  }
}

function addPatchNote({ versao, data, titulo, itens, novidade = true }) {
  const novoPatch = normalizarPatchNote({
    versao,
    data,
    titulo,
    itens,
    novidade
  });

  PATCH_NOTES = PATCH_NOTES.filter(p => p.id !== novoPatch.id);
  PATCH_NOTES.push(novoPatch);
  PATCH_NOTES = sortPatchNotes(PATCH_NOTES);
  salvarPatchNotesNoStorage();

  return novoPatch;
}
function renderNovidadesList(){
  const c = document.getElementById('novidades-list');
  if(!c) return;

  let adminNotes = [];
  try {
    adminNotes = storage.getJSON('patch_notes_admin_v1', []);
  } catch(e) {
    adminNotes = [];
  }

  const todas = [...PATCH_NOTES, ...adminNotes];

  const mapa = new Map();
  todas.forEach(p => {
    const id = p.id || `v${String(p.versao).replaceAll('.', '_')}`;
    mapa.set(id, p);
  });

  const listaFinal = sortPatchNotes([...mapa.values()]);

  c.innerHTML = listaFinal.map((pn, i) => {
    const itens = Array.isArray(pn.itens) ? pn.itens : [];
    const principal = itens[0] || null;
    const restantes = itens.slice(1);

    return `
      <div class="pn-version-card ${i===0?'pn-latest':''}">
        <div class="pn-version-header">
          <span class="pn-version-num">v${pn.versao}</span>
          <span class="pn-version-date">${new Date(pn.data).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})}</span>
          ${i===0 ? `<span class="pn-new-badge">ATUAL</span>` : ''}
        </div>

        ${pn.titulo ? `<div class="pn-version-title">${pn.titulo}</div>` : ''}

        ${principal ? `
          <div class="pn-history-highlight">
            <span class="pn-history-highlight-icon">${principal.icon || '🆕'}</span>
            <span class="pn-history-highlight-text">${principal.texto || ''}</span>
          </div>
        ` : ''}

        ${restantes.length ? `
          <div class="pn-history-rest">
            ${restantes.map(item => `
              <div class="pn-history-item">
                <span class="pn-history-item-icon">${item.icon || '🆕'}</span>
                <span class="pn-history-item-text">${item.texto || ''}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>`;
  }).join('');
}

function checkNovidadesModal(){
  try {
    const latest = getLatestPatchNote();
    if (!latest) return;

    const ultimaVista = storage.get('patch_notes_last_seen');

    if (ultimaVista !== latest.versao) {
      setTimeout(() => {
        abrirNovidadesModal();
      }, 600);
    }
  } catch(e) {
    console.warn('Erro ao verificar novidades:', e);
  }
}

function getLatestPatchNote() {
  if (!Array.isArray(PATCH_NOTES) || PATCH_NOTES.length === 0) {
    carregarPatchNotes();
  }

  return sortPatchNotes(PATCH_NOTES)[0] || null;
}

function abrirNovidadesModal(){
  const latest = getLatestPatchNote();
  if (!latest) return;

  document.getElementById('novidades-modal-versao').textContent =
    `v${latest.versao} · ${new Date(latest.data).toLocaleDateString('pt-BR',{day:'2-digit',month:'long'})}`;

  const tituloEl = document.getElementById('novidades-modal-titulo');
  if (tituloEl) {
    tituloEl.textContent = latest.titulo || 'Novidades desta versão';
  }

  const listaEl = document.getElementById('novidades-modal-lista');
  if (!listaEl) return;

  const itens = Array.isArray(latest.itens) ? latest.itens : [];
  const principal = itens[0] || null;
  const restantes = itens.slice(1);

  listaEl.innerHTML = `
    ${principal ? `
      <div class="pn-highlight">
        <div class="pn-highlight-label">✨ Destaque da atualização</div>
        <div class="pn-highlight-main">
          <span class="pn-highlight-icon">${principal.icon || '🆕'}</span>
          <span class="pn-highlight-text">${principal.texto || ''}</span>
        </div>
      </div>
    ` : ''}

    ${restantes.length ? `
      <div class="pn-section-label">Outras melhorias</div>
      <div class="pn-list-rest">
        ${restantes.map(it => `
          <div class="pn-item">
            <span class="pn-item-icon">${it.icon || '🆕'}</span>
            <span style="font-size:13px;color:var(--text);line-height:1.5">${it.texto || ''}</span>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  document.getElementById('novidades-overlay').classList.add('open');
}

function fecharNovidades(){
  const latest = getLatestPatchNote();

  document.getElementById('novidades-overlay').classList.remove('open');

  try {
    if (latest?.versao) {
      storage.set('patch_notes_last_seen', latest.versao);
    }
  } catch(e) {}

  if(window._onbAfterNov){
    window._onbAfterNov();
    window._onbAfterNov = null;
  }
}

function fecharNovidadesOverlay(e){
  if(e.target===document.getElementById('novidades-overlay')) fecharNovidades();
}

// ── INIT ──
carregarPatchNotes();

// 1. Carregar módulos admin PRIMEIRO (atualiza USUARIOS antes de qualquer cópia)
carregarModulosAdmin();

setTimeout(() => {
  checkNovidadesModal();
}, 300);


// 2. Tentar restaurar sessão real do Supabase
(async function(){
  let restaurou = false;

  try{
    if (typeof restaurarSessaoSupabase === 'function') {
      restaurou = await restaurarSessaoSupabase();
    }
  }catch(e){
    console.error('Erro ao restaurar sessão inicial:', e);
  }

  if (restaurou) return;

  // 3. Sem sessão — mostra login, esconde nav e FABs
  const appEl = document.getElementById('app');
  if (appEl) appEl.style.opacity = '0';

  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'none';

  const wfab = document.getElementById('whatsapp-fab');
  if (wfab) wfab.style.display = 'none';

  // Render inicial para quando fizer login manual
  carregarStorage();
  renderDinamicas(dinamicas);
  renderFavoritos();
  renderPlanos();

  const favCount = document.getElementById('fav-count-label');
  if (favCount) favCount.textContent = `${favorites.length} salvos`;

  const painelDinamica = document.getElementById('painel-dinamica');
  if (painelDinamica) painelDinamica.style.flexDirection = 'column';
})();

aplicarIdioma();

/* ===== MyChurchFlow UX Pack — melhorias fáceis ===== */
function mcGetSafeJSON(key, fallback){
  try{
    const raw = storage.get(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){
    return fallback;
  }
}
function mcPatchBtnStyles(scope){
  if(!scope) return;
  scope.querySelectorAll('.btn-ui-primary,.btn-ui-secondary,.btn-ui-soft').forEach(btn=>{
    btn.setAttribute('type','button');
  });
}
function mcCreateEmptyState(icon, title, text, actionsHtml){
  return `
    <div class="enhanced-empty-state">
      <div class="empty-state">
        <div class="empty-icon">${icon}</div>
        <h4>${title}</h4>
        <p>${text}</p>
        <div class="empty-actions">${actionsHtml || ''}</div>
      </div>
    </div>
  `;
}
function mcInjectHomeQuickActions(){
  const banner = document.querySelector('#screen-home .home-banner');
  if(!banner || document.getElementById('home-quick-actions')) return;
  banner.insertAdjacentHTML('afterend', `
    <div class="home-quick-actions" id="home-quick-actions">
      <button class="quick-action-btn" onclick="nav('screen-planejador','nav-home')">
        <span class="quick-action-icon">📝</span>
        <span class="quick-action-title">Planejar encontro</span>
        <span class="quick-action-sub">Monte o próximo encontro com calma</span>
      </button>
      <button class="quick-action-btn" onclick="nav('screen-favoritos','nav-favoritos')">
        <span class="quick-action-icon">🤍</span>
        <span class="quick-action-title">Ver favoritos</span>
        <span class="quick-action-sub">Acesse o que você salvou mais rápido</span>
      </button>
      <button class="quick-action-btn" id="home-quick-novidades" onclick="nav('screen-novidades','nav-home')">
        <span class="quick-action-icon">🆕</span>
        <span class="quick-action-title">Novidades do app</span>
        <span class="quick-action-sub">Veja o que mudou e o que entrou</span>
      </button>
    </div>
  `);
}
function mcInjectGerarHelperActions(){
  const target = document.querySelector('#painel-dinamica > div[style*="padding-top:4px"]');
  if(target && !document.getElementById('gerar-helper-actions')){
    target.insertAdjacentHTML('beforeend', `
      <div class="gerar-helper-actions" id="gerar-helper-actions">
        <button class="btn-ui-secondary" onclick="nav('screen-planejador','nav-home')">📝 Salvar no planejador</button>
        <button class="btn-ui-soft" onclick="nav('screen-favoritos','nav-favoritos')">🤍 Ver favoritos</button>
      </div>
    `);
  }
  const targetEnc = document.querySelector('#painel-encontro > div[style*="padding-top:4px"]');
  if(targetEnc && !document.getElementById('gerar-helper-actions-enc')){
    targetEnc.insertAdjacentHTML('beforeend', `
      <div class="gerar-helper-actions" id="gerar-helper-actions-enc">
        <button class="btn-ui-secondary" onclick="nav('screen-planejador','nav-home')">📝 Levar para o planejador</button>
        <button class="btn-ui-soft" onclick="nav('screen-historico','nav-home')">📅 Ver histórico</button>
      </div>
    `);
  }
}
function mcInjectPerfilProgressCard(){
  const body = document.querySelector('#perfil-overlay .perfil-sheet-body');
  if(!body || document.getElementById('perfil-progress-card')) return;
  body.insertAdjacentHTML('afterbegin', `
    <div class="perfil-progress-card" id="perfil-progress-card">
      <div class="perfil-progress-top">
        <div>
          <div class="perfil-progress-eyebrow">Seu progresso</div>
          <div class="perfil-progress-title">Seu ministério em movimento</div>
          <div class="perfil-progress-sub">Acompanhe o que você já salvou, planejou e colocou em prática.</div>
        </div>
        <div class="perfil-progress-badge" id="perfil-progress-badge">Começando</div>
      </div>
      <div class="perfil-progress-grid">
        <div class="perfil-progress-stat"><strong id="perfil-stat-favoritos">0</strong><span>${t('perfil.progress.favorites')}</span></div>
        <div class="perfil-progress-stat"><strong id="perfil-stat-planos">0</strong><span>${t('perfil.progress.plans')}</span></div>
        <div class="perfil-progress-stat"><strong id="perfil-stat-historico">0</strong><span>${t('perfil.progress.history')}</span></div>
        <div class="perfil-progress-stat"><strong id="perfil-stat-gerador">0</strong><span>${t('perfil.progress.generated')}</span></div>
      </div>
      <div class="perfil-progress-actions">
        <button class="btn-ui-secondary" onclick="closePerfil();nav('screen-planejador','nav-home')">${t('perfil.progress.plan_now')}</button>
        <button class="btn-ui-soft" onclick="closePerfil();nav('screen-novidades','nav-home')">${t('perfil.progress.see_updates')}</button>
      </div>
    </div>
  `);
}
function mcInjectNovidadesBadge(){
  const patchBtn = document.getElementById('pmenu-patchnotes');
  if(patchBtn && !document.getElementById('novidades-menu-badge')){
    const arrow = patchBtn.querySelector('.pmi-arrow');
    if(arrow){
      arrow.insertAdjacentHTML('beforebegin', '<span class="novidades-menu-badge" id="novidades-menu-badge" style="display:none">1</span>');
    }
  }
}
function mcUpdateNovidadesBadge(){
  const badge = document.getElementById('novidades-menu-badge');
  const quick = document.getElementById('home-quick-novidades');
  if(!badge) return;
  let hasNew = false;
  try{
    const latest = typeof getLatestPatchNote === 'function' ? getLatestPatchNote() : null;
    const seen = storage.get('patch_notes_last_seen');
    hasNew = !!(latest && latest.versao && latest.versao !== seen);
  }catch(e){}
  badge.style.display = hasNew ? 'inline-flex' : 'none';
  if(quick) quick.classList.toggle('is-new', hasNew);
}
function mcEnhanceNovidadesHistory(){
  const list = document.getElementById('novidades-list');
  if(!list) return;
  const seen = storage.get('patch_notes_last_seen');
  list.querySelectorAll('.pn-version-card').forEach(card => card.classList.remove('pn-unseen'));
  const versionEls = list.querySelectorAll('.pn-version-num');
  versionEls.forEach((el, index)=>{
    const version = el.textContent.replace(/^v/i,'').trim();
    const card = el.closest('.pn-version-card');
    if(card && seen && compareVersionsSemver(version, seen) < 0){
      return;
    }
    if(card && version !== seen){
      const header = card.querySelector('.pn-version-header');
      if(header && !header.querySelector('.inline-badge-new')){
        header.insertAdjacentHTML('beforeend', '<span class="inline-badge-new">NOVO</span>');
      }
      card.classList.add('pn-unseen');
    }
  });
}
function mcUpdatePerfilProgress(){
  if(!usuarioAtual) return;
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const favoritosTotal =
    (Array.isArray(favorites) ? favorites.length : 0) +
    (mcGetSafeJSON('fav_perguntas_'+email, []).length) +
    (mcGetSafeJSON('fav_encontros_'+email, []).length) +
    (mcGetSafeJSON('fav_qgelos_'+email, []).length) +
    (mcGetSafeJSON('fav_conjuntos_'+email, []).length) +
    (mcGetSafeJSON('fav_encontros_ger_'+email, []).length);

  const histTotal = (Array.isArray(historico) ? historico.length : 0) + (Array.isArray(historicoEnc) ? historicoEnc.length : 0);
  const planosTotal = Array.isArray(planos) ? planos.length : 0;
  const geradorTotal = mcGetSafeJSON('encontros_hist_gerador_v1_'+email, []).length;

  const setText = (id, value)=>{
    const el = document.getElementById(id);
    if(el) el.textContent = String(value);
  };
  setText('perfil-stat-favoritos', favoritosTotal);
  setText('perfil-stat-planos', planosTotal);
  setText('perfil-stat-historico', histTotal);
  setText('perfil-stat-gerador', geradorTotal);

  const badge = document.getElementById('perfil-progress-badge');
  if(badge){
    const total = favoritosTotal + planosTotal + histTotal + geradorTotal;
    badge.textContent =
      total >= 20 ? 'Em ritmo forte' :
      total >= 8 ? 'Avançando bem' :
      total >= 1 ? 'Progresso real' :
      'Começando';
  }
}
function mcEnhanceEmptyStates(){
  const favList = document.getElementById('favoritos-list');
  if(favList && favList.textContent.includes('favorit')){
    favList.innerHTML = mcCreateEmptyState(
      '🤍',
      t('mc.empty.favorites.title'),
      t('mc.empty.favorites.sub'),
      `
        <button class="btn-ui-primary" onclick="nav('screen-dinamicas','nav-dinamicas')">🎭 Explorar dinâmicas</button>
        <button class="btn-ui-secondary" onclick="nav('screen-gerar','nav-gerar')">✨ Gerar agora</button>
      `
    );
  }

  const histList = document.getElementById('historico-list');
  if(histList && histList.querySelector('.empty-state')){
    histList.innerHTML = mcCreateEmptyState(
      '📅',
      t('mc.empty.history.title'),
      t('mc.empty.history.sub'),
      `
        <button class="btn-ui-primary" onclick="nav('screen-dinamicas','nav-dinamicas')">🎭 Ver dinâmicas</button>
        <button class="btn-ui-secondary" onclick="nav('screen-gerar','nav-gerar')">✨ Gerar encontro</button>
      `
    );
  }

  const planosList = document.getElementById('planos-lista');
  if(planosList && planosList.querySelector('.empty-state')){
    planosList.innerHTML = mcCreateEmptyState(
      '📝',
      t('mc.empty.plans.title'),
      t('mc.empty.plans.sub'),
      `
        <button class="btn-ui-primary" onclick="document.getElementById('plan-tema-select')?.focus()">🌸 Começar planejamento</button>
        <button class="btn-ui-secondary" onclick="nav('screen-gerar','nav-gerar')">✨ Buscar ideias</button>
      `
    );
  }

  mcPatchBtnStyles(document);
}
function mcRunUiPack(){
  mcInjectHomeQuickActions();
  mcInjectGerarHelperActions();
  mcInjectPerfilProgressCard();
  mcInjectNovidadesBadge();
  mcUpdateNovidadesBadge();
  mcUpdatePerfilProgress();
  mcEnhanceEmptyStates();
  mcEnhanceNovidadesHistory();
}
(function(){
  const _renderFavoritos = typeof renderFavoritos === 'function' ? renderFavoritos : null;
  if(_renderFavoritos){
    renderFavoritos = function(){
      const result = _renderFavoritos.apply(this, arguments);
      mcRunUiPack();
      return result;
    };
  }

  const _renderHistorico = typeof renderHistorico === 'function' ? renderHistorico : null;
  if(_renderHistorico){
    renderHistorico = function(){
      const result = _renderHistorico.apply(this, arguments);
      mcRunUiPack();
      return result;
    };
  }

  const _renderPlanos = typeof renderPlanos === 'function' ? renderPlanos : null;
  if(_renderPlanos){
    renderPlanos = function(){
      const result = _renderPlanos.apply(this, arguments);
      mcRunUiPack();
      return result;
    };
  }

  const _renderNovidadesList = typeof renderNovidadesList === 'function' ? renderNovidadesList : null;
  if(_renderNovidadesList){
    renderNovidadesList = function(){
      const result = _renderNovidadesList.apply(this, arguments);
      mcRunUiPack();
      return result;
    };
  }

  const _abrirPerfilTela = typeof abrirPerfilTela === 'function' ? abrirPerfilTela : null;
  if(_abrirPerfilTela){
    abrirPerfilTela = function(){
      const result = _abrirPerfilTela.apply(this, arguments);
      setTimeout(mcRunUiPack, 0);
      return result;
    };
  }

  const _fecharNovidades = typeof fecharNovidades === 'function' ? fecharNovidades : null;
  if(_fecharNovidades){
    fecharNovidades = function(){
      const result = _fecharNovidades.apply(this, arguments);
      setTimeout(mcRunUiPack, 30);
      return result;
    };
  }

  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(mcRunUiPack, 120);
  });
})();
