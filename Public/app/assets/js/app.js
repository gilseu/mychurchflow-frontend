console.log('JS OK')
// ── FORWARD DECLARATIONS (previne TDZ — variáveis usadas antes da definição completa) ──
var TRANSLATIONS = null;
var currentLang = 'pt';
function t(key, fallback){
  try{ return TRANSLATIONS?.[currentLang]?.[key] || TRANSLATIONS?.['pt']?.[key] || fallback || key; }
  catch(e){ return fallback || key; }
}
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

// ── PERSISTÊNCIA LOCAL ──
const STORAGE_KEY_PLANOS    = ()=> `encontros_planos_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_FAVORITOS = ()=> `encontros_favoritos_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_HIST_GER  = ()=> `encontros_hist_gerador_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_USO_DIN   = ()=> `encontros_uso_din_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;
const STORAGE_KEY_HIST_ENC_GER = ()=> `encontros_hist_enc_ger_v1_${usuarioAtual?.email || usuarioAtual?.nome || 'anon'}`;

function salvarStorage(){
  try{
    localStorage.setItem(STORAGE_KEY_PLANOS(), JSON.stringify(planos));
    localStorage.setItem(STORAGE_KEY_FAVORITOS(), JSON.stringify(favorites));
    localStorage.setItem(STORAGE_KEY_HIST_GER(), JSON.stringify(conjuntosGerados));
    localStorage.setItem(STORAGE_KEY_HIST_ENC_GER(), JSON.stringify(conjuntosEncontros));
  }catch(e){ console.warn('Storage indisponível', e); }
}

function carregarStorage(){
  try{
    const p = localStorage.getItem(STORAGE_KEY_PLANOS());
    planos = p ? JSON.parse(p) : [];
    const f = localStorage.getItem(STORAGE_KEY_FAVORITOS());
    favorites = f ? JSON.parse(f) : [];
    const h = localStorage.getItem(STORAGE_KEY_HIST_GER());
    conjuntosGerados = h ? JSON.parse(h) : [];
    const he = localStorage.getItem(STORAGE_KEY_HIST_ENC_GER());
    conjuntosEncontros = he ? JSON.parse(he) : [];
  }catch(e){ planos=[]; favorites=[]; conjuntosGerados=[]; conjuntosEncontros=[]; }
}

// ── THEME ──
function toggleTheme(){
  const h=document.documentElement;
  const next=h.getAttribute('data-theme')==='dark'?'light':'dark';
  h.setAttribute('data-theme',next);
  try{localStorage.setItem('tema',next);}catch(e){}
  toastMsg(next==='dark'?'🌙 Modo noturno ativado':'☀️ Modo claro ativado');
}
(function(){
  try{const s=localStorage.getItem('tema');if(s){document.documentElement.setAttribute('data-theme',s);return;}}catch(e){}
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
function getUsoDin(id){ try{ const u=JSON.parse(localStorage.getItem(STORAGE_KEY_USO_DIN())||'{}'); return u[id]||0; }catch(e){return 0;} }
function incrementarUsoDin(id){ try{ const k=STORAGE_KEY_USO_DIN(); const u=JSON.parse(localStorage.getItem(k)||'{}'); u[id]=(u[id]||0)+1; localStorage.setItem(k,JSON.stringify(u)); }catch(e){} }

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
  try{ favPergs=(JSON.parse(localStorage.getItem(keyP)||'[]')).map(id=>perguntas100.find(p=>p.id===id)).filter(Boolean); }catch(e){}
  try{ favEncs=(JSON.parse(localStorage.getItem(keyE)||'[]')).map(id=>encontros50.find(x=>x.id===id)).filter(Boolean); }catch(e){}
  try{ favQGs=(JSON.parse(localStorage.getItem(keyQ)||'[]')).map(id=>quebraGelos50.find(x=>x.id===id)).filter(Boolean); }catch(e){}
  try{
  favConjuntos = (JSON.parse(localStorage.getItem(keyConj) || '[]'))
    .map(id => conjuntosGerados.find(c => String(c.id) === String(id)))
    .filter(Boolean);
  }catch(e){}

  try{
  favEncontrosGerados = (JSON.parse(localStorage.getItem(keyEncGer) || '[]'))
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
            confirmarDesfavoritar(()=>{let f=JSON.parse(localStorage.getItem(k)||'[]');f=f.filter(x=>x!==String(id));localStorage.setItem(k,JSON.stringify(f));toastMsg(t('toast.fav.rm'));renderFavoritos();});
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
            confirmarDesfavoritar(()=>{let f=JSON.parse(localStorage.getItem(k)||'[]');f=f.filter(x=>x!==String(id));localStorage.setItem(k,JSON.stringify(f));toastMsg(t('toast.fav.rm'));renderFavoritos();});
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
            confirmarDesfavoritar(()=>{let f=JSON.parse(localStorage.getItem(k)||'[]');f=f.filter(x=>x!==String(id));localStorage.setItem(k,JSON.stringify(f));toastMsg(t('toast.fav.rm'));renderFavoritos();});
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

  const est = m.estudos ? getEstudoPorTema(tema) : null;
  const pg  = m.perguntas ? getPerguntaPorTema(tema) : null;

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
  const est = getEstudoPorTema(tema);
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
  const pg = getPerguntaPorTema(tema);
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
          ✏️ Renomear
        </button>
        <button onclick="abrirConjuntoPreview(${c.id})" style="flex:1;background:var(--gold);border:none;border-radius:50px;padding:6px 10px;font-size:12px;font-weight:700;color:#fff;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">
          👁 Ver
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
  const favs = JSON.parse(localStorage.getItem(key)||'[]');
  return favs.includes(String(id));
}

function toggleFavConjunto(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_conjuntos_'+email;
  let favs = JSON.parse(localStorage.getItem(key)||'[]');
  const sid = String(id);

  if(favs.includes(sid)){
    confirmarDesfavoritar(()=>{
      favs = favs.filter(x=>x!==sid);
      localStorage.setItem(key, JSON.stringify(favs));
      salvarStorage();
      toastMsg(t('toast.fav.rm'));
      renderFavoritos();
      renderHistoricoConjuntos();
    });
    return;
  } else {
    favs.push(sid);
    localStorage.setItem(key, JSON.stringify(favs));
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
  // Generate first one if none yet
  if(!document.getElementById('ge-titulo')?.textContent || document.getElementById('ge-titulo')?.textContent === '—'){
    gerarEncontroCompleto(true);
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
  const enc = getEncontroPorTema(tema);
  encontrosGeradosSessao.push(enc.id);
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
        <button onclick="toggleFavEncontro(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:${isFavEncontroGerado(c.id)?'var(--rose)':'var(--text-soft)'};cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">${isFavEncontroGerado(c.id)?'❤️ Salvo':'🤍 Favoritar'}</button>
        <button onclick="renomearEncontro(${c.id})" style="flex:1;background:none;border:1px solid var(--border);border-radius:50px;padding:6px 10px;font-size:12px;font-weight:600;color:var(--text-soft);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">✏️ Renomear</button>
        <button onclick="abrirEncontroPreviewGerado(${c.id})" style="flex:1;background:var(--gold);border:none;border-radius:50px;padding:6px 10px;font-size:12px;font-weight:700;color:#fff;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif">👁 Ver</button>
      </div>
    </div>`).join('');
}

function isFavEncontroGerado(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_encontros_ger_'+email;
  const favs = JSON.parse(localStorage.getItem(key)||'[]');
  return favs.includes(String(id));
}

function toggleFavEncontro(id){
  const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
  const key = 'fav_encontros_ger_'+email;
  let favs = JSON.parse(localStorage.getItem(key)||'[]');
  const sid = String(id);

  if(favs.includes(sid)){
    confirmarDesfavoritar(()=>{
      favs = favs.filter(x=>x!==sid);
      localStorage.setItem(key, JSON.stringify(favs));
      salvarStorage();
      toastMsg(t('toast.fav.rm'));
      renderFavoritos();
      renderHistoricoEncontros();
    });
    return;
  } else {
    favs.push(sid);
    localStorage.setItem(key, JSON.stringify(favs));
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
  const texto = `🌸 *${enc.titulo}*\n\n📖 ${enc.versiculo}\n\n💭 ${enc.reflexao?.slice(0,200)}...\n\n_Via app Encontros de Mulheres_`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}

function gerarEncontroAleatorio(){ gerarEncontroCompleto(); }

function renderPlanejadorCampos(){
  const m = usuarioAtual?.modulos || {};

  const qbWrap = document.getElementById('plan-quebraGelo-wrap');
  if(qbWrap){
    if(m.quebraGelos){
      qbWrap.innerHTML = `
        <div id="plan-qg-sug" style="display:none;margin-bottom:8px"></div>
        <textarea class="plan-textarea" id="plan-quebraGelo" rows="2" placeholder="${t('plan.quebraGelo.placeholder')}"></textarea>`;
    } else {
      qbWrap.innerHTML = `<div class="plan-locked-field" onclick="openLocked('${t('plan.quebraGelo.locked.titulo')}','')">
        <span class="plan-locked-icon">🧊</span>
        <div><div class="plan-locked-title">${t('plan.quebraGelo.locked.titulo')}</div><div class="plan-locked-sub">${t('plan.quebraGelo.locked.sub')}</div></div>
        <span class="plan-locked-arrow">›</span></div>`;
    }
  }

  const pgWrap = document.getElementById('plan-perguntas-wrap');
  if(pgWrap){
    if(m.perguntas){
      pgWrap.innerHTML = `
        <div id="plan-perg-sug" style="display:none;margin-bottom:8px"></div>
        <textarea class="plan-textarea" id="plan-pergunta" rows="2" placeholder="${t('plan.pergunta.placeholder')}"></textarea>`;
    } else {
      pgWrap.innerHTML = `<div class="plan-locked-field" onclick="openLocked('${t('plan.pergunta.locked.titulo')}','')">
        <span class="plan-locked-icon">💬</span>
        <div><div class="plan-locked-title">${t('plan.pergunta.locked.titulo')}</div><div class="plan-locked-sub">${t('plan.pergunta.locked.sub')}</div></div>
        <span class="plan-locked-arrow">›</span></div>`;
    }
  }
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

function onTemaSelect(val){
  const input = document.getElementById('plan-tema');
  const sugestao = document.getElementById('plan-sugestao');
  clearError('field-tema','plan-tema-select');
  clearError('field-tema','plan-tema');
  // reset dynamic selection
  resetDinSelecao();

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
  // Perguntas
  const pergEl = document.getElementById('plan-perg-sug');
  if(pergEl && data?.pids?.length){
    const pergs = data.pids.map(id=>perguntas100.find(p=>p.id===id)).filter(Boolean);
    if(pergs.length){
      pergEl.style.display = 'block';
      pergEl.innerHTML = `
        <div class="plan-sug-header" style="border-radius:14px 14px 0 0">
          <span>💬</span><span>${t('plan.sug.perguntas')}</span>
        </div>
        <div style="border:1.5px solid var(--gold-light);border-top:none;border-radius:0 0 14px 14px;overflow:hidden">
          ${pergs.map(p=>`
            <div class="plan-sug-item">
              <div class="plan-sug-item-info" style="flex:1">
                <div class="plan-sug-item-title" style="font-size:13px;font-weight:500">${p.pergunta}</div>
                <div class="plan-sug-item-meta">${p.categoriaLabel}</div>
              </div>
              <div class="plan-sug-item-btns">
                <button class="btn-usar-sug" onclick="usarSugestaoPerguntas(${JSON.stringify(p.pergunta).replace(/"/g,'&quot;')})">${t('plan.sug.usar')}</button>
              </div>
            </div>`).join('')}
        </div>`;
    }
  } else if(pergEl){ pergEl.style.display='none'; }

  // Quebra-gelos
  const qgEl = document.getElementById('plan-qg-sug');
  if(qgEl && data?.qids?.length){
    const qgs = data.qids.map(id=>quebraGelos50.find(q=>q.id===id)).filter(Boolean);
    if(qgs.length){
      qgEl.style.display = 'block';
      qgEl.innerHTML = `
        <div class="plan-sug-header" style="border-radius:14px 14px 0 0">
          <span>🧊</span><span>${t('plan.sug.qgelos')}</span>
        </div>
        <div style="border:1.5px solid var(--gold-light);border-top:none;border-radius:0 0 14px 14px;overflow:hidden">
          ${qgs.map(q=>`
            <div class="plan-sug-item">
              <div class="plan-sug-item-info" style="flex:1">
                <div class="plan-sug-item-title" style="font-size:13px">${q.titulo}</div>
                <div class="plan-sug-item-meta">⏱ ${q.duracao}</div>
              </div>
              <div class="plan-sug-item-btns">
                <button class="btn-usar-sug" onclick="usarSugestaoQG(${JSON.stringify(q.titulo).replace(/"/g,'&quot;')}, ${q.id})">${t('plan.sug.usar')}</button>
              </div>
            </div>`).join('')}
        </div>`;
    }
  } else if(qgEl){ qgEl.style.display='none'; }
}

function usarSugestaoPerguntas(texto){
  const el = document.getElementById('plan-pergunta');
  if(el){ el.value = texto; el.focus(); toastMsg('💬 ' + t('plan.sug.escolhida')); }
}
function usarSugestaoQG(titulo, id){
  const el = document.getElementById('plan-quebraGelo');
  if(el){ el.value = titulo; el.focus(); planoQGId = id || null; toastMsg('🧊 ' + t('plan.sug.escolhida')); }
}

function resetDinSelecao(){
  planoDinId = null;
  document.getElementById('plan-din-chosen').style.display = 'none';
  document.getElementById('plan-dinamica').value = '';
  document.getElementById('plan-dinamica-free').value = '';
}

function selecionarDinamica(id){
  const d = dinamicas.find(x=>x.id===id);
  if(!d) return;
  planoDinId = id;
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
    <div class="detail-section"><h5>🎯 Objetivo</h5><p>${d.objetivo}</p></div>
    <div class="detail-section"><h5>📦 Materiais</h5><p>${d.materiais}</p></div>
    <div class="detail-section"><h5>${t('din.passos.label')}</h5>
      <ul class="steps">${d.passos.map((p,i)=>`<li><span class="step-num">${i+1}</span>${p}</li>`).join('')}</ul>
    </div>
    <div class="detail-section" style="border-left:3px solid var(--gold)"><h5>✦ Aplicação Espiritual</h5><p>${d.aplicacao}</p></div>`;
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
        <button class="btn-usar-sug" onclick="selecionarDinamica(${d.id})">Usar</button>
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
  planoDinId = null;
  planoQGId  = null;
  renderPlanos();
  toastMsg(t('toast.enc.planejado'));
}

function renderPlanos(){
  const c=document.getElementById('planos-lista');
  if(!planos.length){c.innerHTML=`<div class="empty-state" style="padding:30px 0"><div class="empty-icon">📝</div><h4 style="font-family:'Cormorant Garamond',serif;font-size:17px;color:var(--purple2)">${t('plan.vazio')}</h4><p style="font-size:13px;color:var(--text-soft);line-height:1.6;margin-top:4px">${t('plan.vazio.sub')}</p></div>`;return;}
  c.innerHTML='<div class="plan-saved-list">'+planos.map(p=>`
    <div class="plan-saved-card" onclick="openPlano(${p.id})" style="cursor:pointer">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
        <h5 style="flex:1;font-family:'Cormorant Garamond',serif;font-size:16px;color:var(--purple2)">✦ ${p.tema}</h5>
        <span style="font-size:11px;color:var(--text-soft);flex-shrink:0;margin-top:3px">${p.data?new Date(p.data+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}):''} ${p.hora ? '· '+p.hora : ''}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px">
        ${p.dinamica    ? `<span style="font-size:12px;color:var(--text)">🎭 ${p.dinamica}</span>` : ''}
        ${p.quebraGelo  ? `<span style="font-size:12px;color:var(--text)">🧊 ${p.quebraGelo}</span>` : ''}
        ${p.versiculoRef? `<span style="font-size:12px;color:var(--text)">📖 ${p.versiculoRef}</span>` : ''}
        ${p.pergunta    ? `<span style="font-size:12px;color:var(--text-soft);font-style:italic">💬 ${p.pergunta.slice(0,60)}${p.pergunta.length>60?'…':''}</span>` : ''}
        ${p.oracao      ? `<span style="font-size:12px;color:var(--text-soft)">🙏 ${p.oracao.slice(0,50)}${p.oracao.length>50?'…':''}</span>` : ''}
        ${p.notas       ? `<span style="font-size:12px;color:var(--text-soft)">📋 ${p.notas.slice(0,50)}${p.notas.length>50?'…':''}</span>` : ''}
      </div>
      <div style="margin-top:8px;display:flex;align-items:center;gap:4px">
        <span style="font-size:11px;color:var(--gold);font-weight:600">${t('plan.modal.ver.detalhes')}</span>
      </div>
    </div>`).join('')+'</div>';
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

// ── SISTEMA DE IDIOMAS (i18n) ──
const STORAGE_KEY_LANG = 'encontros_lang_v1';
// currentLang — declarado no topo do script

TRANSLATIONS = {
  pt: {
    'app.name': 'Encontros',
    'app.title': 'Encontros de Mulheres',
    'app.subtitle': 'Sua biblioteca de dinâmicas cristãs',
    'login.email': 'E-mail',
    'login.senha': 'Senha',
    'login.email.placeholder': 'seu@email.com',
    'login.senha.placeholder': '••••••••',
    'login.lembrar': 'Manter conectada',
    'login.btn': 'Entrar ✦',
    'login.erro': 'E-mail ou senha incorretos.',
    'login.footer': 'Problemas de acesso? Fale com o suporte.',
    'login.acesso.rapido': 'Acesso rápido',
    'home.welcome': 'Bem-vinda, irmã! 🌿',
    'home.welcome.back': 'Bem-vinda de volta! 🌿',
    'home.search': 'Buscar por tema: amizade, gratidão...',
    'home.banner.title': 'Gerar encontro\npara hoje',
    'home.banner.sub': 'Dinâmica + encontro completo em segundos',
    'home.banner.btn': '🎲 Gerar agora',
    'home.bibliotecas': '📚 Suas Bibliotecas',
    'home.premium': '✨ Produtos Premium',
    'home.bonus': '🎁 Bônus incluídos',
    'nav.inicio': 'Início',
    'nav.dinamicas': 'Dinâmicas',
    'nav.gerar': 'Gerar',
    'nav.historico': 'Histórico',
    'nav.perfil': 'Perfil',
    'nav.gerar.fab': 'Gerar encontro',
    'nav.admin': 'Admin',
    'din.titulo': '🎭 200 Dinâmicas',
    'din.sub': 'Atividades para seus encontros',
    'din.busca': 'Buscar dinâmica...',
    'din.objetivo': '🎯 Objetivo',
    'din.materiais': '📦 Materiais',
    'din.passos': '📋 Passo a Passo',
    'din.aplicacao': '✦ Aplicação Espiritual',
    'din.marcar': '✓ Marcar como realizada',
    'din.feita': '✓ Realizada',
    'din.compartilhar': '📲 Compartilhar',
    'din.salvar': '🤍 Salvar',
    'din.salvo': '❤️ Salvo',
    'din.vazia': 'Nenhuma dinâmica encontrada',
    'din.vazia.sub': 'Tente outro termo ou limpe os filtros.',
    'gerar.titulo': '✨ Gerar Encontro',
    'gerar.sub': 'Escolha o tipo e gere em segundos',
    'gerar.btn': '🎲 Gerar nova dinâmica',
    'gerar.share': '📲 Compartilhar no WhatsApp',
    'gerar.tab.din': '🎭 Dinâmica',
    'gerar.tab.enc': '🌸 Encontro Completo',
    'hist.titulo': '📅 Histórico',
    'hist.sub': 'Encontros que você já realizou',
    'hist.vazio.titulo': 'Nenhum encontro registrado',
    'hist.vazio.sub': 'Abra qualquer dinâmica e toque em ✓ Marcar como realizada — ela aparece aqui com sua avaliação.',
    'hist.remover': '🗑️ Remover',
    'plan.titulo': '📝 Planejador de Encontros',
    'plan.sub': 'Organize seu próximo encontro',
    'plan.tema': 'Tema do Encontro',
    'plan.data': 'Data',
    'plan.dinamica': 'Dinâmica escolhida',
    'plan.versiculo': 'Versículo',
    'plan.oracao': 'Momento de Oração / Reflexão',
    'plan.notas': 'Anotações',
    'plan.salvar': '✅ Salvar planejamento',
    'plan.salvos': 'Encontros salvos',
    'plan.vazio': 'Nenhum planejamento ainda',
    'plan.vazio.sub': 'Escolha um tema acima e preencha os campos para criar seu primeiro planejamento.',
    'plan.buscar.versiculo': 'Ex: Filipenses 4:6',
    'plan.verse.loading': 'Buscando versículo...',
    'plan.err.tema': 'Por favor, informe o tema do encontro.',
    'plan.err.data': 'Por favor, informe a data do encontro.',
    'plan.err.din': 'Por favor, informe a dinâmica escolhida.',
    'plan.err.ver': 'Por favor, informe o versículo.',
    'guia.titulo': '🎤 Guia do Líder',
    'guia.sub': 'Como conduzir encontros de mulheres',
    'fav.titulo': '🤍 Meus Favoritos',
    'fav.sub': 'Conteúdos que você salvou',
    'fav.nav': 'Favoritos',
    'fav.tab.todos': 'Todos',
    'fav.tab.dinamicas': '🎭 Dinâmicas',
    'fav.tab.perguntas': '💬 Perguntas',
    'fav.tab.qgelos': '🧊 Quebra-Gelos',
    'fav.tab.encontros': '🌸 Encontros',
    'fav.tab.conjuntos': '✨ Conjuntos',
    'fav.vazio.titulo': 'Nenhum favorito ainda',
    'fav.vazio.sub': 'Salve dinâmicas tocando no coração ❤️ para acessá-las rapidamente aqui.',
    'admin.titulo': '⚙️ Painel Admin',
    'admin.sub': 'Gerenciar usuários e módulos',
    'admin.usuarios': '👥 Usuários',
    'tip.label': 'Dica do dia',
    'locked.titulo': 'Conteúdo bloqueado',
    'locked.code': 'Código de acesso...',
    'locked.usar': 'Usar',
    'locked.ou': '— ou —',
    'locked.comprar': '🛒 Comprar agora · R$19,90',
    'locked.fechar': 'Fechar',
    'logout': 'Sair da conta',
    'voltar': '← Voltar',
    'verse.translation': 'almeida',
    'toast.fav.add': '❤️ Salvo nos favoritos!',
    'toast.fav.rm': '🤍 Removido dos favoritos',
    'toast.done': '✅ Marcada como realizada!',
    'toast.done.rm': '↩️ Removida do histórico',
    'toast.plan.ok': '✅ Encontro planejado com sucesso!',
    'toast.plano.rm': '🗑️ Encontro removido',
    'toast.unlock': '✅ Conteúdo desbloqueado com sucesso!',
    'toast.invalid.code': '❌ Código inválido.',
    'toast.verse.ok': '📖 Versículo encontrado!',
    'toast.din.sel': '🎭 Dinâmica selecionada!',
    'toast.gerar': '✨ Nova dinâmica gerada!',
    'toast.gerar.conj': '✨ Novo conjunto gerado!',
    'toast.aval.salva': '⭐ Avaliação salva com sucesso!',
    'whatsapp.msg': 'Olá! Preciso de ajuda com o app Encontros de Mulheres. 🌸',
    'lib.dinamicas': '200 Dinâmicas',
    'lib.dinamicas.count': '200 atividades',
    'lib.perguntas': '100 Perguntas Poderosas',
    'lib.perguntas.count': '100 perguntas',
    'lib.quebraGelos': '50 Quebra-Gelos',
    'lib.quebraGelos.count': '50 atividades',
    'lib.estudos': '30 Estudos Bíblicos',
    'lib.estudos.count': '30 estudos',
    'prod.encontros.titulo': '50 Encontros Completos',
    'prod.encontros.desc': 'Encontros prontos para conduzir — tema, dinâmica, versículo, reflexão e aplicação.',
    'prod.encontros.feat1': '✦ 50 encontros estruturados',
    'prod.encontros.feat2': '✦ Pronto para usar hoje',
    'prod.encontros.feat3': '✦ Gerador automático',
    'prod.devocional.titulo': 'Devocional para Mulheres',
    'prod.devocional.desc': '7 dias de devocionais com versículo, reflexão e oração guiada.',
    'enc.titulo': '🌸 50 Encontros Completos',
    'enc.sub': 'Encontros prontos para conduzir',
    'enc.busca': 'Buscar encontro...',
    'enc.versiculo': 'Versículo',
    'enc.quebraGelo': '🧊 Quebra-Gelo',
    'enc.reflexao': '💭 Reflexão',
    'enc.perguntas': '❓ Perguntas de Discussão',
    'enc.oracao': '🙏 Oração de Encerramento',
    'enc.vazio': 'Nenhum encontro encontrado',
    'gerar.enc.desc': 'Escolha um encontro pronto ou gere um aleatório',
    'gerar.enc.ver.todos': '📚 Ver todos os encontros',
    'gerar.enc.aleatorio': '🎲 Gerar encontro aleatório',
    'gerar.enc.bloqueado': 'O Gerador de Encontros Completos faz parte do pacote <strong>50 Encontros Completos</strong>. Desbloqueie para gerar encontros prontos com tema, dinâmica, versículo, reflexão e aplicação.',
    'gerar.enc.oferta': '🌸 Ver oferta — R$24,90',
    'plan.quebraGelo': 'Quebra-Gelo',
    'plan.pergunta': 'Pergunta para Discussão',
    'plan.quebraGelo.locked.titulo': '50 Quebra-Gelos Cristãos',
    'plan.quebraGelo.locked.sub': 'Desbloqueie para escolher um quebra-gelo',
    'plan.pergunta.locked.titulo': '100 Perguntas Poderosas',
    'plan.pergunta.locked.sub': 'Desbloqueie para adicionar uma pergunta',
    'plan.quebraGelo.placeholder': 'Descreva ou escolha um quebra-gelo...',
    'plan.pergunta.placeholder': 'Digite ou escolha uma pergunta de discussão...',
    'perfil.tab': '👤 Perfil',
    'modulos.tab': '📦 Módulos',
    'perfil.info': 'Informações pessoais',
    'perfil.nome': 'Nome completo',
    'perfil.telefone': 'Telefone / WhatsApp',
    'perfil.igreja': 'Igreja / Ministério',
    'perfil.cidade': 'Cidade',
    'perfil.cargo': 'Cargo / Função',
    'perfil.bio': 'Sobre mim',
    'perfil.nome.ph': 'Seu nome completo',
    'perfil.telefone.ph': '(48) 99999-9999',
    'perfil.igreja.ph': 'Nome da sua igreja',
    'perfil.cidade.ph': 'Sua cidade',
    'perfil.cargo.ph': 'Ex: Líder de mulheres, Pastora...',
    'perfil.bio.ph': 'Conte um pouco sobre seu ministério...',
    'perfil.salvar': '💾 Salvar informações',
    'perfil.salvo': '✅ Perfil salvo com sucesso!',
    'perfil.foto': '📷 Foto atualizada!',
    'modulos.label': 'Seus módulos',
    'bonus.desbloqueado': 'DESBLOQUEADO',
    'btn.remover': '✕ Remover',
    'plan.dinamica.escolhida': '🎭 Dinâmica escolhida',
    'plan.sug.header': 'Dinâmicas para este tema',
    'plan.sug.ver.todas': 'Ver todas →',
    'plan.sug.usar': 'Usar',
    'plan.sug.perguntas': 'Perguntas sugeridas para este tema',
    'plan.sug.qgelos': 'Quebra-gelos sugeridos para este tema',
    'plan.sug.escolhida': 'Sugestão aplicada!',
    'plan.hora': 'Horário',
    'plan.notif.ativar': 'Lembrete',
    'plan.notif.ativo': '🔔 Lembrete ativado!',
    'plan.notif.ativo.semhora': '🔔 Lembrete ativado (informe o horário para receber na hora certa)',
    'admin.stat.usuarios': 'Usuários',
    'admin.stat.ativos': 'Ativos',
    'bonus.guia.titulo': 'Guia da Líder',
    'bonus.guia.sub': 'Dicas para conduzir seus encontros',
    'btn.voltar.din': '← Dinâmicas',
    'btn.voltar.enc': '← Encontros',
    'btn.voltar.dev': '← Devocional',
    'btn.ver.oferta': 'Ver oferta →',
    'btn.ver.oferta.enc': '🌸 Ver oferta — R$24,90',
    'btn.compartilhar.wp': '📲 Compartilhar no WhatsApp',
    'btn.compartilhar': '📲 Compartilhar',
    'btn.gerar.aleatorio': '🎲 Gerar encontro aleatório',
    'btn.ver.todos.enc': '📚 Ver todos os encontros',
    'filtro.categoria': '🏷 Categoria',
    'filtro.tempo': '⏱ Tempo',
    'filtro.limpar': '✕ Limpar',
    'filtro.tempo.10': 'Até 10 min',
    'filtro.tempo.15': 'Até 15 min',
    'filtro.tempo.20': 'Até 20 min',
    'filtro.tempo.25': 'Até 25 min',
    'filtro.tempo.30': '30+ min',
    'bonus.planejador.titulo': 'Planejador de Encontros',
    'bonus.planejador.sub': 'Organize tema, dinâmica, estudo e oração',
    'bonus.floresca.titulo': 'Dinâmica Especial: Floresça',
    'bonus.floresca.sub': 'Atividade simbólica com reflexão espiritual',
    'bonus.gratis': 'GRÁTIS',
    'bonus.exclusivo': 'EXCLUSIVO',
    'perg.titulo': '💬 100 Perguntas Poderosas',
    'perg.sub': 'Perguntas para gerar conversas transformadoras',
    'perg.busca': 'Buscar pergunta...',
    'perg.copiar': '👆 Toque para copiar',
    'perg.copiada': '📋 Pergunta copiada!',
    'perg.vazia': 'Nenhuma pergunta encontrada',
    'estudos.titulo': '📚 30 Estudos Bíblicos',
    'estudos.sub': 'Estudos completos para grupos de mulheres',
    'estudos.busca': 'Buscar estudo...',
    'perfil.secao.seguranca': '🔒 Segurança',
    'perfil.conta': 'Conta',
    'perfil.email.label': 'E-mail',
    'perfil.plano.label': 'Plano',
    'gerar.enc.sub.des': 'Escolha um encontro pronto ou gere um aleatório',
    'plan.opt': 'opcional',
    'prod.mais.vendido': '⭐ Mais vendido',
    'prod.oferta.especial': '💛 Oferta especial',
    'btn.voltar': '← Voltar',
    'gerar.btn.enc': '🌸 Gerar novo encontro',
    'gerar.card.encontro': 'Encontro Completo',
    'lib.perguntas.desc': 'Um banco com 100 perguntas para gerar conversas transformadoras no seu grupo.',
    'novidades.btn.menu': 'Novidades do App',
    'gerar.btn.tudo': '🎲 Gerar novo conjunto',
    'novidades.titulo': '🆕 Novidades do App',
    'novidades.sub': 'Histórico completo de atualizações',
    'novidades.modal.titulo': 'Novidades desta versão',
    'novidades.fechar': 'Fechar',
    'novidades.ver.todas': 'Ver todas →',
    'novidades.btn': '🆕 Ver novidades do app',
    'prod.novo': '✨ Novo',
    'prod.planejador.preco.old': 'De R$27',
    'prod.planejador.preco.new': 'R$14,90',
    'perfil.seguranca': 'Segurança',
    'qg.como.aplicar': '📋 Como Aplicar',
    'qg.duracao': '⏱ Duração',
    'qg.dica': '💡 Dica da Líder',
    'aval.titulo': '🌸 Como foi o encontro?',
    'aval.nota': 'Avaliação geral',
    'aval.participantes': 'Quantas participaram?',
    'aval.obs': 'Observações (opcional)',
    'aval.obs.ph': 'O que funcionou bem? O que você faria diferente?',
    'aval.salvar': '✅ Salvar avaliação',
    'gerar.aviso': 'Esta função sorteia aleatoriamente entre os conteúdos que você já adquiriu — não gera conteúdo novo.',
    'dp.limpar': 'Limpar',
    'dp.hoje': 'Hoje',
    'plan.data.erro': 'Por favor, informe a data do encontro.',
    'lib.quebraGelos.sub': 'Dinâmicas rápidas para integrar e conectar o grupo',
    'qg.busca': 'Buscar quebra-gelo...',
    'qg.vazio': 'Nenhum quebra-gelo encontrado',
    'btn.cancelar': 'Cancelar',
    'fav.remover.titulo': 'Remover dos favoritos?',
    'fav.remover.desc': 'Esta dinâmica será removida da sua lista. Se foi gerada aleatoriamente, você perderá o acesso rápido a ela.',
    'fav.remover.confirmar': 'Sim, remover',
    'toast.gerar.nova': '✨ Nova dinâmica gerada!',
    'gerar.card.dinamica': 'Dinâmica do Encontro',
    'gerar.card.estudo': 'Estudo Bíblico',
    'gerar.card.pergunta': 'Pergunta para Discussão',
    'gerar.bloqueado': 'Bloqueado',
    'gerar.estudo.bloqueado': 'Desbloqueie os 30 Estudos Bíblicos para usar aqui.',
    'gerar.pergunta.bloqueado': 'Desbloqueie as 100 Perguntas Poderosas para usar aqui.',
    'gerar.hist.titulo': '📋 Geradas nesta sessão',
    'gerar.hist.limpar': '✕ Limpar',
    'btn.salvar': '🤍 Salvar',
    'btn.salvar.label': 'Salvar',
    'btn.salvo': 'Salvo',
    'btn.timer.label': 'Timer',
    'btn.stories.label': 'Stories',
    'btn.aovivo.label': 'Ao vivo',
    'toast.enc.compartilhado': '📲 Encontro compartilhado!',
    'toast.compartilhado': '📲 Dinâmica compartilhada!',
    'floresca.titulo': '🌸 Dinâmica Especial',
    'floresca.exclusiva': 'Exclusiva para você',
    'floresca.hero.titulo': 'Floresça Onde\nDeus te Plantou',
    'floresca.hero.sub': 'Uma dinâmica de transformação e fé',
    'floresca.objetivo.label': '🎯 Objetivo',
    'floresca.objetivo.texto': 'Ajudar cada mulher a reconhecer que o lugar onde está hoje — mesmo que difícil — é solo fértil para crescimento espiritual. Ela não precisa mudar de lugar para florescer; precisa florescer onde está.',
    'floresca.materiais.label': '📦 Materiais',
    'floresca.materiais.texto': 'Uma semente pequena (ou desenho de semente) para cada participante · Papel e caneta · Música suave de fundo (opcional)',
    'floresca.passos.label': '📋 Atividade Simbólica — Passo a Passo',
    'floresca.passo1': 'Distribua uma semente (ou o papel com o desenho) para cada participante',
    'floresca.passo2': 'Peça que cada uma segure a semente e feche os olhos',
    'floresca.passo3': 'A líder faz a pergunta em voz suave: "Onde Deus te plantou que você ainda não floresceu?"',
    'floresca.passo4': 'Em silêncio (3 min), cada uma escreve uma palavra no papel: o lugar ou situação',
    'floresca.passo5': 'Quem quiser partilha com o grupo — sem julgamento, apenas acolhida',
    'floresca.reflexao.label': '🌿 Momento de Reflexão Espiritual',
    'floresca.reflexao.texto': 'Leia Jeremias 17:7-8: "Bendito o homem que confia no Senhor... Será como árvore plantada junto às águas..."',
    'floresca.reflexao.pergunta': 'Pergunte: "Se você é a árvore e Deus é a água — o que precisa mudar para você se aproximar mais da fonte?"',
    'floresca.aplicacao.label': '✦ Aplicação Prática',
    'floresca.aplicacao.texto': 'Cada participante escreve no verso do papel uma ação concreta para a semana — um pequeno passo para florescer onde está. A semente fica com ela como símbolo desse compromisso.',
    'plan.tema.placeholder': 'Escolha um tema predefinido...',
    'plan.tema.gratidao': '🌿 Gratidão',
    'plan.tema.amizade': '🤝 Amizade',
    'plan.tema.fe': '🕊️ Fé em tempos difíceis',
    'plan.tema.identidade': '✦ Identidade em Cristo',
    'plan.tema.esperanca': '🌅 Esperança',
    'plan.tema.oracao.opt': '🙏 Oração',
    'plan.tema.proposito': '🌸 Propósito',
    'plan.tema.perdao': '💛 Perdão',
    'plan.tema.comunhao': '👐 Comunhão',
    'plan.tema.familia': '🏡 Família',
    'plan.tema.paz': '🕊 Paz',
    'plan.tema.forca': '💪 Força e Resiliência',
    'plan.tema.amor': '❤️ Amor',
    'plan.tema.alegria': '✨ Alegria',
    'plan.tema.crescimento': '🌱 Crescimento Espiritual',
    'plan.tema.testemunho': '🌟 Testemunho',
    'plan.tema.servico': '🤲 Serviço',
    'plan.tema.sabedoria': '📖 Sabedoria',
    'plan.tema.adoracao': '🎶 Adoração',
    'plan.tema.cura': '🌺 Cura Interior',
    'plan.tema.outro': '✏️ Outro (digitar)',
    'plan.tema.custom': 'Digite o tema personalizado...',
    'plan.oracao.placeholder': 'Descreva o momento de oração ou reflexão...',
    'plan.notas.placeholder': 'Materiais necessários, participantes esperadas...',
  
    'enc.detail.versiculo': '📖 Versículo',
    'enc.detail.quebraGelo': '🧊 Quebra-Gelo',
    'enc.detail.reflexao': '💭 Reflexão',
    'enc.detail.perguntas': '❓ Perguntas de Discussão',
    'enc.detail.oracao': '🙏 Oração de Encerramento',
    'plan.modal.tema': '✦ Tema do Encontro',
    'plan.modal.dinamica': '🎭 Dinâmica escolhida',
    'plan.modal.ver.din': '👁 Ver dinâmica completa',
    'plan.modal.qg': '🧊 Quebra-Gelo',
    'plan.modal.ver.qg': '👁 Ver quebra-gelo completo',
    'plan.modal.versiculo': '📖 Versículo',
    'plan.modal.pergunta': '💬 Pergunta para Discussão',
    'plan.modal.oracao': '🙏 Momento de Oração / Reflexão',
    'plan.modal.notas': '📋 Anotações',
    'plan.modal.ver.detalhes': '👁 Ver detalhes completos',
    'fav.sec.dinamicas': '🎭 Dinâmicas',
    'fav.sec.perguntas': '💬 Perguntas',
    'fav.sec.qgelos': '🧊 Quebra-Gelos',
    'fav.sec.encontros': '🌸 Encontros',
    'fav.categoria.vazia': 'Nenhum favorito nesta categoria ainda.',
    'fav.salvar.btn': '+ Salvar nos favoritos',
    'aovivo.anterior': '← Anterior',
    'aovivo.proximo': 'Próximo →',
    'aovivo.concluir': '✓ Concluir',
    'aovivo.passo.label': 'Passo',
    'onb.proximo': 'Próximo →',
    'onb.comecar': '🌸 Começar!',
    'onb.pular': 'Pular tour',
    'toast.din.escolhida': '🎭 Dinâmica escolhida!',
    'toast.enc.primeiro': 'Gere um encontro primeiro!',
    'toast.conj.primeiro': 'Gere um conjunto primeiro!',
    'toast.imagem.salva': '📸 Imagem salva!',
    'toast.hist.rm': '🗑️ Remover',
    'gerar.conj.aleatorio': 'Conjunto Aleatório',
    'gerar.tema.label': '🏷 Tema:',
    'din.passos.label': '📋 Passo a Passo',
    'dev.detail.reflexao': '💭 Reflexão',
    'dev.detail.pergunta': '🤔 Pergunta de Reflexão',
    'dev.detail.oracao': '🙏 Oração do Dia',
    'hist.remover.btn': '🗑️ Remover',
    'toast.nova.dinamica': '🎭 Nova dinâmica!',
    'toast.novo.estudo': '📖 Novo estudo!',
    'toast.nova.pergunta': '💬 Nova pergunta!',
    'toast.nome.atualizado': '✏️ Nome atualizado!',
    'toast.novo.enc.gerado': '🌸 Novo encontro gerado!',
    'toast.novo.enc': '🌸 Novo encontro!',
    'toast.ref.invalida': '❗ Digite uma referência como "João 3:16"',
    'toast.versiculo.encontrado': '📖 Versículo encontrado!',
    'toast.campos.obrigatorios': '❗ Preencha os campos obrigatórios',
    'toast.enc.planejado': '✅ Encontro planejado com sucesso!',
    'toast.enc.removido': '🗑️ Encontro removido',
    'toast.desbloqueado': '✅ Conteúdo desbloqueado com sucesso!',
    'toast.codigo.invalido': '❌ Código inválido.',
    'toast.hist.removido': 'Removido do histórico',
    'toast.tempo.esgotado': '⏰ Tempo esgotado!',
    'toast.hist.removida': '↩️ Removida do histórico',
    'toast.marcada.realizada': '✅ Marcada como realizada!',
    'toast.avaliacao.salva': '🌸 Avaliação salva!',
    'toast.modulo.indisponivel': '📖 Módulo não disponível',
    'din.realizada': '✓ Realizada',
    'din.marcar.realizada': '✓ Marcar como realizada',
    'enc.nenhum': 'Nenhum encontro encontrado',
    'est.nenhum': 'Nenhum estudo encontrado',
    'modal.insira.codigo': 'Insira seu código de acesso ou adquira agora.',
    'modal.renomear.titulo': 'Renomear conjunto',
    'modal.renomear.desc': 'Dê um nome para identificar este conjunto depois',
    'plan.err.tema': 'Por favor, informe o tema do encontro.',
    'plan.err.dinamica': 'Por favor, informe a dinâmica escolhida.',
    'plan.err.versiculo': 'Por favor, informe o versículo.',
    'plan.verse.nao.encontrado': '❗ Versículo não encontrado. Tente: "Filipenses 4:6" ou "João 3:16"',
    'guia.dica': 'Dica:',
    'guia.s1.titulo': 'Como iniciar o encontro',
    'guia.s1.texto': 'Comece com uma acolhida calorosa. Diga o nome das participantes, sorria e crie um ambiente seguro. Uma música suave de fundo ajuda a preparar o coração.',
    'guia.s1.dica': 'Reserve 5 minutos iniciais apenas para conversas livres. Quem chegou com pressa precisa desacelerar antes de entrar no tema.',
    'guia.s2.titulo': 'Como conduzir a dinâmica',
    'guia.s2.texto': 'Explique a dinâmica de forma simples e faça você mesma primeiro quando possível. Isso quebra o gelo e dá coragem para as outras participarem.',
    'guia.s2.dica': 'Nunca force a participação. Diga sempre: "Quem quiser partilhar, fique à vontade." Respeitar o silêncio também é liderança.',
    'guia.s3.titulo': 'Como estimular a participação',
    'guia.s3.texto': 'Faça perguntas abertas: "Como isso se aplica na sua vida?" ou "Alguém já viveu algo parecido?". Evite perguntas de sim ou não — elas fecham a conversa.',
    'guia.s3.dica': 'Se alguém falar demais, agradeça e redirecione: "Que rico! E você, irmã, o que acha?" Gentileza também é liderança.',
    'guia.s4.titulo': 'Como aplicar a reflexão espiritual',
    'guia.s4.texto': 'Conecte a dinâmica ao versículo ou tema espiritual. Use frases como: "Isso que vivemos hoje na prática é exatamente o que a Palavra nos diz em..."',
    'guia.s4.dica': 'Encerre sempre com uma oração curta que resuma o que o grupo viveu. Isso sela o momento e fica na memória.',
    'guia.s5.titulo': 'Como encerrar bem',
    'guia.s5.texto': 'Agradeça cada participante pela presença. Compartilhe brevemente o próximo encontro e convide para trazerem uma amiga. O encerramento planta a semente do próximo encontro.',
    'guia.s5.dica': 'Uma pequena lembrança simbólica (um versículo impresso, uma pedrinha, um papel dobrado) faz o encontro durar na vida delas além do dia.',
},
  en: {
    'app.name': 'Meetings',
    'app.title': 'Women\'s Meetings',
    'app.subtitle': 'Your Christian dynamics library',
    'login.email': 'Email',
    'login.senha': 'Password',
    'login.email.placeholder': 'your@email.com',
    'login.senha.placeholder': '••••••••',
    'login.lembrar': 'Keep me logged in',
    'login.btn': 'Sign In ✦',
    'login.erro': 'Incorrect email or password.',
    'login.footer': 'Access issues? Contact support.',
    'login.acesso.rapido': 'Quick access',
    'home.welcome': 'Welcome, sister! 🌿',
    'home.welcome.back': 'Welcome back! 🌿',
    'home.search': 'Search by theme: friendship, gratitude...',
    'home.banner.title': 'Generate a meeting\nfor today',
    'home.banner.sub': 'Dynamic + complete meeting in seconds',
    'home.banner.btn': '🎲 Generate now',
    'home.bibliotecas': '📚 Your Libraries',
    'home.premium': '✨ Premium Products',
    'home.bonus': '🎁 Included Bonuses',
    'nav.inicio': 'Home',
    'nav.dinamicas': 'Dynamics',
    'nav.gerar': 'Generate',
    'nav.historico': 'History',
    'nav.perfil': 'Profile',
    'nav.gerar.fab': 'Generate meeting',
    'nav.admin': 'Admin',
    'din.titulo': '🎭 200 Dynamics',
    'din.sub': 'Activities for your meetings',
    'din.busca': 'Search dynamic...',
    'din.objetivo': '🎯 Objective',
    'din.materiais': '📦 Materials',
    'din.passos': '📋 Step by Step',
    'din.aplicacao': '✦ Spiritual Application',
    'din.marcar': '✓ Mark as completed',
    'din.feita': '✓ Completed',
    'din.compartilhar': '📲 Share',
    'din.salvar': '🤍 Save',
    'din.salvo': '❤️ Saved',
    'din.vazia': 'No dynamics found',
    'din.vazia.sub': 'Try another term or clear the filters.',
    'gerar.titulo': '✨ Generate Meeting',
    'gerar.sub': 'Choose the type and generate in seconds',
    'gerar.btn': '🎲 Generate new dynamic',
    'gerar.share': '📲 Share on WhatsApp',
    'gerar.tab.din': '🎭 Dynamic',
    'gerar.tab.enc': '🌸 Complete Meeting',
    'hist.titulo': '📅 History',
    'hist.sub': 'Meetings you have held',
    'hist.vazio.titulo': 'No meetings recorded',
    'hist.vazio.sub': 'Open any dynamic and tap ✓ Mark as completed — it will appear here with your review.',
    'hist.remover': '🗑️ Remove',
    'plan.titulo': '📝 Meeting Planner',
    'plan.sub': 'Organize your next meeting',
    'plan.tema': 'Meeting Theme',
    'plan.data': 'Date',
    'plan.dinamica': 'Chosen Dynamic',
    'plan.versiculo': 'Bible Verse',
    'plan.oracao': 'Prayer / Reflection Moment',
    'plan.notas': 'Notes',
    'plan.salvar': '✅ Save plan',
    'plan.salvos': 'Saved meetings',
    'plan.vazio': 'No plans yet',
    'plan.vazio.sub': 'Choose a theme above and fill in the fields to create your first plan.',
    'plan.buscar.versiculo': 'Ex: Philippians 4:6',
    'plan.verse.loading': 'Looking up verse...',
    'plan.err.tema': 'Please enter the meeting theme.',
    'plan.err.data': 'Please enter the meeting date.',
    'plan.err.din': 'Please enter the chosen dynamic.',
    'plan.err.ver': 'Please enter a Bible verse.',
    'guia.titulo': '🎤 Leader Guide',
    'guia.sub': 'How to lead women\'s meetings',
    'fav.titulo': '🤍 My Favorites',
    'fav.sub': 'Content you saved',
    'fav.nav': 'Favorites',
    'fav.tab.todos': 'All',
    'fav.tab.dinamicas': '🎭 Dynamics',
    'fav.tab.perguntas': '💬 Questions',
    'fav.tab.qgelos': '🧊 Icebreakers',
    'fav.tab.encontros': '🌸 Meetings',
    'fav.vazio.titulo': 'No favorites yet',
    'fav.vazio.sub': 'Save dynamics by tapping the heart ❤️ to access them quickly here.',
    'admin.titulo': '⚙️ Admin Panel',
    'admin.sub': 'Manage users and modules',
    'admin.usuarios': '👥 Users',
    'tip.label': 'Tip of the day',
    'locked.titulo': 'Locked content',
    'locked.code': 'Access code...',
    'locked.usar': 'Use',
    'locked.ou': '— or —',
    'locked.comprar': '🛒 Buy now',
    'locked.fechar': 'Close',
    'logout': 'Sign out',
    'voltar': '← Back',
    'verse.translation': 'kjv',
    'toast.fav.add': '❤️ Saved to favorites!',
    'toast.fav.rm': 'Removed from favorites',
    'toast.done': '✅ Marked as completed!',
    'toast.done.rm': '↩️ Removed from history',
    'toast.plan.ok': '✅ Meeting planned successfully!',
    'toast.plano.rm': '🗑️ Meeting removed',
    'toast.unlock': '✅ Content unlocked!',
    'toast.invalid.code': '❌ Invalid code.',
    'toast.verse.ok': '📖 Verse found!',
    'toast.din.sel': '🎭 Dynamic selected!',
    'toast.gerar': '✨ New dynamic generated!',
    'whatsapp.msg': 'Hello! I need help with the Women\'s Meetings app. 🌸',
    'lib.dinamicas': '200 Dynamics',
    'lib.dinamicas.count': '200 activities',
    'lib.perguntas': '100 Powerful Questions',
    'lib.perguntas.count': '100 questions',
    'lib.quebraGelos': '50 Icebreakers',
    'lib.quebraGelos.count': '50 activities',
    'lib.estudos': '30 Bible Studies',
    'lib.estudos.count': '30 studies',
    'prod.encontros.titulo': '50 Complete Meetings',
    'prod.encontros.desc': 'Ready-to-lead meetings — theme, dynamic, verse, reflection and application.',
    'prod.encontros.feat1': '✦ 50 structured meetings',
    'prod.encontros.feat2': '✦ Ready to use today',
    'prod.encontros.feat3': '✦ Automatic generator',
    'prod.devocional.titulo': 'Women\'s Devotional',
    'prod.devocional.desc': '7 days of devotionals with verse, reflection and guided prayer.',
    'enc.titulo': '🌸 50 Complete Meetings',
    'enc.sub': 'Ready-to-lead meetings',
    'enc.busca': 'Search meeting...',
    'enc.versiculo': 'Bible Verse',
    'enc.quebraGelo': '🧊 Icebreaker',
    'enc.reflexao': '💭 Reflection',
    'enc.perguntas': '❓ Discussion Questions',
    'enc.oracao': '🙏 Closing Prayer',
    'enc.vazio': 'No meetings found',
    'gerar.enc.desc': 'Choose a ready meeting or generate a random one',
    'gerar.enc.ver.todos': '📚 See all meetings',
    'gerar.enc.aleatorio': '🎲 Random meeting',
    'gerar.enc.bloqueado': 'The Complete Meeting Generator is part of the <strong>50 Complete Meetings</strong> package.',
    'gerar.enc.oferta': '🌸 See offer',
    'plan.quebraGelo': 'Icebreaker',
    'plan.pergunta': 'Discussion Question',
    'plan.quebraGelo.locked.titulo': '50 Christian Icebreakers',
    'plan.quebraGelo.locked.sub': 'Unlock to choose an icebreaker',
    'plan.pergunta.locked.titulo': '100 Powerful Questions',
    'plan.pergunta.locked.sub': 'Unlock to add a question',
    'plan.quebraGelo.placeholder': 'Describe or choose an icebreaker...',
    'plan.pergunta.placeholder': 'Type or choose a discussion question...',
    'perfil.tab': '👤 Profile',
    'modulos.tab': '📦 Modules',
    'perfil.info': 'Personal information',
    'perfil.nome': 'Full name',
    'perfil.telefone': 'Phone / WhatsApp',
    'perfil.igreja': 'Church / Ministry',
    'perfil.cidade': 'City',
    'perfil.cargo': 'Role / Position',
    'perfil.bio': 'About me',
    'perfil.nome.ph': 'Your full name',
    'perfil.telefone.ph': '+1 (555) 000-0000',
    'perfil.igreja.ph': 'Your church name',
    'perfil.cidade.ph': 'Your city',
    'perfil.cargo.ph': 'E.g: Women\'s leader, Pastor...',
    'perfil.bio.ph': 'Tell us about your ministry...',
    'perfil.salvar': '💾 Save information',
    'perfil.salvo': '✅ Profile saved!',
    'perfil.foto': '📷 Photo updated!',
    'modulos.label': 'Your modules',
    'perfil.secao.seguranca': '🔒 Security',
    'perfil.conta': 'Account',
    'perfil.email.label': 'Email',
    'perfil.plano.label': 'Plan',
    'bonus.desbloqueado': 'UNLOCKED',
    'btn.voltar': '← Back',
    'btn.voltar.din': '← Dynamics',
    'btn.voltar.enc': '← Meetings',
    'btn.voltar.dev': '← Devotional',
    'btn.ver.oferta': 'See offer →',
    'btn.compartilhar.wp': '📲 Share on WhatsApp',
    'btn.gerar.aleatorio': '🎲 Random meeting',
    'btn.ver.todos.enc': '📚 See all meetings',
    'filtro.categoria': '🏷 Category',
    'filtro.tempo': '⏱ Time',
    'filtro.limpar': '✕ Clear',
    'filtro.tempo.10': 'Up to 10 min',
    'filtro.tempo.15': 'Up to 15 min',
    'filtro.tempo.20': 'Up to 20 min',
    'filtro.tempo.25': 'Up to 25 min',
    'filtro.tempo.30': '30+ min',
    'bonus.planejador.titulo': 'Meeting Planner',
    'bonus.planejador.sub': 'Organize theme, dynamic, study and prayer',
    'bonus.guia.titulo': 'Leader\'s Guide',
    'bonus.guia.sub': 'Tips for leading your meetings',
    'bonus.floresca.titulo': 'Special Dynamic: Flourish',
    'bonus.floresca.sub': 'Symbolic activity with spiritual reflection',
    'bonus.gratis': 'FREE',
    'bonus.exclusivo': 'EXCLUSIVE',
    'perg.titulo': '💬 100 Powerful Questions',
    'perg.sub': 'Questions to generate transforming conversations',
    'perg.busca': 'Search question...',
    'perg.copiar': '👆 Tap to copy',
    'perg.copiada': '📋 Question copied!',
    'perg.vazia': 'No questions found',
    'estudos.titulo': '📚 30 Bible Studies',
    'estudos.sub': 'Complete studies for women\'s groups',
    'estudos.busca': 'Search study...',
    'gerar.enc.sub.des': 'Choose a ready meeting or generate a random one',
    'plan.opt': 'optional',
    'prod.mais.vendido': '⭐ Best seller',
    'prod.oferta.especial': '💛 Special offer',
    'home.section.premium': '✨ Premium Products',
    'gerar.btn.enc': '🌸 Generate new meeting',
    'gerar.card.encontro': 'Complete Meeting',
    'lib.perguntas.desc': 'A bank with 100 questions to spark transformative conversations.',
    'novidades.btn.menu': 'App Updates',
    'gerar.btn.tudo': '🎲 Generate new set',
    'novidades.titulo': '🆕 App Updates',
    'novidades.sub': 'Full update history',
    'novidades.modal.titulo': "What's new in this version",
    'novidades.fechar': 'Close',
    'novidades.ver.todas': 'See all →',
    'novidades.btn': '🆕 See app updates',
    'prod.novo': '✨ New',
    'prod.planejador.preco.old': 'From R$27',
    'prod.planejador.preco.new': 'R$14.90',
    'perfil.seguranca': 'Security',
    'qg.como.aplicar': '📋 How to Apply',
    'qg.duracao': '⏱ Duration',
    'qg.dica': '💡 Leader Tip',
    'aval.titulo': '🌸 How was the meeting?',
    'aval.nota': 'Overall rating',
    'aval.participantes': 'How many participated?',
    'aval.obs': 'Notes (optional)',
    'aval.obs.ph': 'What worked well? What would you do differently?',
    'aval.salvar': '✅ Save review',
    'gerar.aviso': 'This feature randomly picks from content you already own — it does not generate new content.',
    'dp.limpar': 'Clear',
    'dp.hoje': 'Today',
    'plan.data.erro': 'Please enter the meeting date.',
    'lib.quebraGelos.sub': 'Quick activities to integrate and connect the group',
    'qg.busca': 'Search icebreaker...',
    'qg.vazio': 'No icebreakers found',
    'btn.cancelar': 'Cancel',
    'fav.remover.titulo': 'Remove from favorites?',
    'fav.remover.desc': 'This dynamic will be removed from your list. If it was randomly generated, you will lose quick access to it.',
    'fav.remover.confirmar': 'Yes, remove',
    'toast.gerar.nova': '✨ New dynamic generated!',
    'gerar.card.dinamica': 'Meeting Dynamic',
    'gerar.card.estudo': 'Bible Study',
    'gerar.card.pergunta': 'Discussion Question',
    'gerar.bloqueado': 'Locked',
    'gerar.estudo.bloqueado': 'Unlock the 30 Bible Studies to use here.',
    'gerar.pergunta.bloqueado': 'Unlock the 100 Powerful Questions to use here.',
    'gerar.hist.titulo': '📋 Generated this session',
    'gerar.hist.limpar': '✕ Clear',
    'btn.salvar': '🤍 Save',
    'btn.salvar.label': 'Save',
    'btn.salvo': 'Saved',
    'btn.timer.label': 'Timer',
    'btn.stories.label': 'Stories',
    'btn.aovivo.label': 'Live',
    'toast.enc.compartilhado': '📲 Meeting shared!',
    'btn.compartilhar': '📲 Share',
    'toast.compartilhado': '📲 Dynamic shared!',
    'floresca.titulo': '🌸 Special Dynamic',
    'floresca.exclusiva': 'Exclusive for you',
    'floresca.hero.titulo': 'Flourish Where\nGod Planted You',
    'floresca.hero.sub': 'A transformation and faith dynamic',
    'floresca.objetivo.label': '🎯 Objective',
    'floresca.objetivo.texto': 'Help each woman recognize that the place where she is today — even if difficult — is fertile ground for spiritual growth. She does not need to change places to flourish; she needs to flourish where she is.',
    'floresca.materiais.label': '📦 Materials',
    'floresca.materiais.texto': 'A small seed (or seed drawing) for each participant · Paper and pen · Soft background music (optional)',
    'floresca.passos.label': '📋 Symbolic Activity — Step by Step',
    'floresca.passo1': 'Distribute a seed (or paper with the drawing) to each participant',
    'floresca.passo2': 'Ask each one to hold the seed and close their eyes',
    'floresca.passo3': 'The leader gently asks: "Where did God plant you that you have not yet flourished?"',
    'floresca.passo4': 'In silence (3 min), each one writes one word on the paper: the place or situation',
    'floresca.passo5': 'Whoever wishes shares with the group — no judgment, only welcome',
    'floresca.reflexao.label': '🌿 Spiritual Reflection Moment',
    'floresca.reflexao.texto': 'Read Jeremiah 17:7-8: "Blessed is the man who trusts in the Lord... He will be like a tree planted by the waters..."',
    'floresca.reflexao.pergunta': 'Ask: "If you are the tree and God is the water — what needs to change for you to draw closer to the source?"',
    'floresca.aplicacao.label': '✦ Practical Application',
    'floresca.aplicacao.texto': 'Each participant writes on the back of the paper a concrete action for the week — a small step to flourish where she is. The seed stays with her as a symbol of that commitment.',
    'plan.tema.placeholder': 'Choose a predefined theme...',
    'plan.tema.gratidao': '🌿 Gratitude',
    'plan.tema.amizade': '🤝 Friendship',
    'plan.tema.fe': '🕊️ Faith in difficult times',
    'plan.tema.identidade': '✦ Identity in Christ',
    'plan.tema.esperanca': '🌅 Hope',
    'plan.tema.oracao.opt': '🙏 Prayer',
    'plan.tema.proposito': '🌸 Purpose',
    'plan.tema.perdao': '💛 Forgiveness',
    'plan.tema.comunhao': '👐 Communion',
    'plan.tema.familia': '🏡 Family',
    'plan.tema.paz': '🕊 Peace',
    'plan.tema.forca': '💪 Strength & Resilience',
    'plan.tema.amor': '❤️ Love',
    'plan.tema.alegria': '✨ Joy',
    'plan.tema.crescimento': '🌱 Spiritual Growth',
    'plan.tema.testemunho': '🌟 Testimony',
    'plan.tema.servico': '🤲 Service',
    'plan.tema.sabedoria': '📖 Wisdom',
    'plan.tema.adoracao': '🎶 Worship',
    'plan.tema.cura': '🌺 Inner Healing',
    'plan.tema.outro': '✏️ Other (type)',
    'plan.tema.custom': 'Type the custom theme...',
    'plan.oracao.placeholder': 'Describe the prayer or reflection moment...',
    'plan.notas.placeholder': 'Materials needed, expected participants...',
    'plan.sug.usar': 'Use',
    'plan.sug.header': 'Dynamics for this theme',
    'plan.sug.ver.todas': 'See all →',
    'plan.sug.perguntas': 'Suggested questions for this theme',
    'plan.sug.qgelos': 'Suggested icebreakers for this theme',
    'plan.sug.escolhida': 'Suggestion applied!',
    'plan.hora': 'Time',
    'plan.notif.ativar': 'Reminder',
    'plan.notif.ativo': '🔔 Reminder set!',
    'plan.notif.ativo.semhora': '🔔 Reminder set (add a time to get notified at the right moment)',
    'plan.dinamica.escolhida': '🎭 Chosen Dynamic',
    'btn.remover': '✕ Remove',
    'btn.ver.oferta.enc': '🌸 See offer — R$24,90',
    'admin.stat.usuarios': 'Users',
    'admin.stat.ativos': 'Active',
  
    'enc.detail.versiculo': '📖 Bible Verse',
    'enc.detail.quebraGelo': '🧊 Icebreaker',
    'enc.detail.reflexao': '💭 Reflection',
    'enc.detail.perguntas': '❓ Discussion Questions',
    'enc.detail.oracao': '🙏 Closing Prayer',
    'plan.modal.tema': '✦ Meeting Theme',
    'plan.modal.dinamica': '🎭 Chosen Dynamic',
    'plan.modal.ver.din': '👁 See full dynamic',
    'plan.modal.qg': '🧊 Icebreaker',
    'plan.modal.ver.qg': '👁 See full icebreaker',
    'plan.modal.versiculo': '📖 Bible Verse',
    'plan.modal.pergunta': '💬 Discussion Question',
    'plan.modal.oracao': '🙏 Prayer / Reflection',
    'plan.modal.notas': '📋 Notes',
    'plan.modal.ver.detalhes': '👁 See full details',
    'fav.sec.dinamicas': '🎭 Dynamics',
    'fav.sec.perguntas': '💬 Questions',
    'fav.sec.qgelos': '🧊 Icebreakers',
    'fav.sec.encontros': '🌸 Meetings',
    'fav.categoria.vazia': 'No favorites in this category yet.',
    'fav.salvar.btn': '+ Save to favorites',
    'aovivo.anterior': '← Previous',
    'aovivo.proximo': 'Next →',
    'aovivo.concluir': '✓ Finish',
    'aovivo.passo.label': 'Step',
    'onb.proximo': 'Next →',
    'onb.comecar': '🌸 Lets start!',
    'onb.pular': 'Skip tour',
    'toast.din.escolhida': '🎭 Dynamic chosen!',
    'toast.enc.primeiro': 'Generate a meeting first!',
    'toast.conj.primeiro': 'Generate a set first!',
    'toast.imagem.salva': '📸 Image saved!',
    'toast.hist.rm': '🗑️ Remove',
    'gerar.conj.aleatorio': 'Random Set',
    'gerar.tema.label': '🏷 Theme:',
    'din.passos.label': '📋 Step by Step',
    'dev.detail.reflexao': '💭 Reflection',
    'dev.detail.pergunta': '🤔 Reflection Question',
    'dev.detail.oracao': '🙏 Prayer of the Day',
    'hist.remover.btn': '🗑️ Remove',
    'toast.nova.dinamica': '🎭 New dynamic!',
    'toast.novo.estudo': '📖 New study!',
    'toast.nova.pergunta': '💬 New question!',
    'toast.nome.atualizado': '✏️ Name updated!',
    'toast.novo.enc.gerado': '🌸 New meeting generated!',
    'toast.novo.enc': '🌸 New meeting!',
    'toast.ref.invalida': '❗ Enter a reference like "John 3:16"',
    'toast.versiculo.encontrado': '📖 Verse found!',
    'toast.campos.obrigatorios': '❗ Please fill in the required fields',
    'toast.enc.planejado': '✅ Meeting planned successfully!',
    'toast.enc.removido': '🗑️ Meeting removed',
    'toast.desbloqueado': '✅ Content unlocked successfully!',
    'toast.codigo.invalido': '❌ Invalid code.',
    'toast.hist.removido': 'Removed from history',
    'toast.tempo.esgotado': '⏰ Time is up!',
    'toast.hist.removida': '↩️ Removed from history',
    'toast.marcada.realizada': '✅ Marked as completed!',
    'toast.avaliacao.salva': '🌸 Rating saved!',
    'toast.modulo.indisponivel': '📖 Module not available',
    'din.realizada': '✓ Completed',
    'din.marcar.realizada': '✓ Mark as completed',
    'enc.nenhum': 'No meetings found',
    'est.nenhum': 'No studies found',
    'modal.insira.codigo': 'Enter your access code or purchase now.',
    'modal.renomear.titulo': 'Rename set',
    'modal.renomear.desc': 'Give a name to identify this set later',
    'plan.err.tema': 'Please enter the meeting theme.',
    'plan.err.dinamica': 'Please enter the chosen dynamic.',
    'plan.err.versiculo': 'Please enter the verse.',
    'plan.verse.nao.encontrado': '❗ Verse not found. Try: "Philippians 4:6" or "John 3:16"',
    'guia.dica': 'Tip:',
    'guia.s1.titulo': 'How to start the meeting',
    'guia.s1.texto': 'Begin with a warm welcome. Say participants\' names, smile and create a safe environment. Soft background music helps prepare hearts.',
    'guia.s1.dica': 'Reserve the first 5 minutes just for free conversation. Those who arrived rushed need to slow down before entering the topic.',
    'guia.s2.titulo': 'How to lead the dynamic',
    'guia.s2.texto': 'Explain the dynamic simply and do it yourself first when possible. This breaks the ice and gives others courage to participate.',
    'guia.s2.dica': 'Never force participation. Always say: "Whoever wants to share, feel free." Respecting silence is also leadership.',
    'guia.s3.titulo': 'How to encourage participation',
    'guia.s3.texto': 'Ask open questions: "How does this apply to your life?" or "Has anyone experienced something similar?". Avoid yes or no questions — they close the conversation.',
    'guia.s3.dica': 'If someone talks too much, thank them and redirect: "How rich! And you, sister, what do you think?" Kindness is also leadership.',
    'guia.s4.titulo': 'How to apply the spiritual reflection',
    'guia.s4.texto': 'Connect the dynamic to the verse or spiritual theme. Use phrases like: "What we experienced today in practice is exactly what the Word tells us in..."',
    'guia.s4.dica': 'Always close with a short prayer that summarizes what the group experienced. It seals the moment and stays in their memory.',
    'guia.s5.titulo': 'How to close well',
    'guia.s5.texto': 'Thank each participant for being there. Briefly share about the next meeting and invite them to bring a friend. The closing plants the seed for the next meeting.',
    'guia.s5.dica': 'A small symbolic keepsake (a printed verse, a pebble, a folded paper) makes the meeting last in their lives beyond the day.',
},
  es: {
    'app.name': 'Encuentros',
    'app.title': 'Encuentros de Mujeres',
    'app.subtitle': 'Tu biblioteca de dinámicas cristianas',
    'login.email': 'Correo electrónico',
    'login.senha': 'Contraseña',
    'login.email.placeholder': 'tu@correo.com',
    'login.senha.placeholder': '••••••••',
    'login.lembrar': 'Mantenerme conectada',
    'login.btn': 'Entrar ✦',
    'login.erro': 'Correo o contraseña incorrectos.',
    'login.footer': '¿Problemas de acceso? Contacta el soporte.',
    'login.acesso.rapido': 'Acceso rápido',
    'home.welcome': '¡Bienvenida, hermana! 🌿',
    'home.welcome.back': '¡Bienvenida de nuevo! 🌿',
    'home.search': 'Buscar por tema: amistad, gratitud...',
    'home.banner.title': 'Generar encuentro\npara hoy',
    'home.banner.sub': 'Dinámica + encuentro completo en segundos',
    'home.banner.btn': '🎲 Generar ahora',
    'home.bibliotecas': '📚 Tus Bibliotecas',
    'home.premium': '✨ Productos Premium',
    'home.bonus': '🎁 Bonos incluidos',
    'nav.inicio': 'Inicio',
    'nav.dinamicas': 'Dinámicas',
    'nav.gerar': 'Generar',
    'nav.historico': 'Historial',
    'nav.perfil': 'Perfil',
    'nav.gerar.fab': 'Generar encuentro',
    'nav.admin': 'Admin',
    'din.titulo': '🎭 200 Dinámicas',
    'din.sub': 'Actividades para tus encuentros',
    'din.busca': 'Buscar dinámica...',
    'din.objetivo': '🎯 Objetivo',
    'din.materiais': '📦 Materiales',
    'din.passos': '📋 Paso a Paso',
    'din.aplicacao': '✦ Aplicación Espiritual',
    'din.marcar': '✓ Marcar como realizada',
    'din.feita': '✓ Realizada',
    'din.compartilhar': '📲 Compartir',
    'din.salvar': '🤍 Guardar',
    'din.salvo': '❤️ Guardado',
    'din.vazia': 'No se encontraron dinámicas',
    'din.vazia.sub': 'Prueba otro término o limpia los filtros.',
    'gerar.titulo': '✨ Generar Encuentro',
    'gerar.sub': 'Elige el tipo y genera en segundos',
    'gerar.btn': '🎲 Generar nueva dinámica',
    'gerar.share': '📲 Compartir en WhatsApp',
    'gerar.tab.din': '🎭 Dinámica',
    'gerar.tab.enc': '🌸 Encuentro Completo',
    'hist.titulo': '📅 Historial',
    'hist.sub': 'Encuentros que ya realizaste',
    'hist.vazio.titulo': 'Ningún encuentro registrado',
    'hist.vazio.sub': 'Abre cualquier dinámica y toca ✓ Marcar como realizada — aparecerá aquí con tu evaluación.',
    'hist.remover': '🗑️ Eliminar',
    'plan.titulo': '📝 Planificador de Encuentros',
    'plan.sub': 'Organiza tu próximo encuentro',
    'plan.tema': 'Tema del Encuentro',
    'plan.data': 'Fecha',
    'plan.dinamica': 'Dinámica elegida',
    'plan.versiculo': 'Versículo',
    'plan.oracao': 'Momento de Oración / Reflexión',
    'plan.notas': 'Notas',
    'plan.salvar': '✅ Guardar planificación',
    'plan.salvos': 'Encuentros guardados',
    'plan.vazio': 'Ninguna planificación aún',
    'plan.vazio.sub': 'Elige un tema arriba y completa los campos para crear tu primer plan.',
    'plan.buscar.versiculo': 'Ej: Filipenses 4:6',
    'plan.verse.loading': 'Buscando versículo...',
    'plan.err.tema': 'Por favor ingresa el tema.',
    'plan.err.data': 'Por favor ingresa la fecha.',
    'plan.err.din': 'Por favor ingresa la dinámica.',
    'plan.err.ver': 'Por favor ingresa el versículo.',
    'guia.titulo': '🎤 Guía del Líder',
    'guia.sub': 'Cómo conducir encuentros de mujeres',
    'fav.titulo': '🤍 Mis Favoritos',
    'fav.sub': 'Contenido que guardaste',
    'fav.nav': 'Favoritos',
    'fav.tab.todos': 'Todos',
    'fav.tab.dinamicas': '🎭 Dinámicas',
    'fav.tab.perguntas': '💬 Preguntas',
    'fav.tab.qgelos': '🧊 Rompehielos',
    'fav.tab.encontros': '🌸 Encuentros',
    'fav.vazio.titulo': 'Ningún favorito aún',
    'fav.vazio.sub': 'Guarda dinámicas tocando el corazón ❤️ para acceder rápidamente aquí.',
    'admin.titulo': '⚙️ Panel Admin',
    'admin.sub': 'Gestionar usuarios y módulos',
    'admin.usuarios': '👥 Usuarios',
    'tip.label': 'Consejo del día',
    'locked.titulo': 'Contenido bloqueado',
    'locked.code': 'Código de acceso...',
    'locked.usar': 'Usar',
    'locked.ou': '— o —',
    'locked.comprar': '🛒 Comprar ahora',
    'locked.fechar': 'Cerrar',
    'logout': 'Cerrar sesión',
    'voltar': '← Volver',
    'verse.translation': 'rvr1960',
    'toast.fav.add': '❤️ ¡Guardado en favoritos!',
    'toast.fav.rm': 'Eliminado de favoritos',
    'toast.done': '✅ ¡Marcada como realizada!',
    'toast.done.rm': '↩️ Eliminada del historial',
    'toast.plan.ok': '✅ ¡Encuentro planificado!',
    'toast.plano.rm': '🗑️ Encuentro eliminado',
    'toast.unlock': '✅ ¡Contenido desbloqueado!',
    'toast.invalid.code': '❌ Código inválido.',
    'toast.verse.ok': '📖 ¡Versículo encontrado!',
    'toast.din.sel': '🎭 ¡Dinámica seleccionada!',
    'toast.gerar': '✨ ¡Nueva dinámica generada!',
    'whatsapp.msg': '¡Hola! Necesito ayuda con la app Encuentros de Mujeres. 🌸',
    'lib.dinamicas': '200 Dinámicas',
    'lib.dinamicas.count': '200 actividades',
    'lib.perguntas': '100 Preguntas Poderosas',
    'lib.perguntas.count': '100 preguntas',
    'lib.quebraGelos': '50 Rompehielos',
    'lib.quebraGelos.count': '50 actividades',
    'lib.estudos': '30 Estudios Bíblicos',
    'lib.estudos.count': '30 estudios',
    'prod.encontros.titulo': '50 Encuentros Completos',
    'prod.encontros.desc': 'Encuentros listos para conducir — tema, dinámica, versículo, reflexión y aplicación.',
    'prod.encontros.feat1': '✦ 50 encuentros estructurados',
    'prod.encontros.feat2': '✦ Listo para usar hoy',
    'prod.encontros.feat3': '✦ Generador automático',
    'prod.devocional.titulo': 'Devocional para Mujeres',
    'prod.devocional.desc': '7 días de devocionales con versículo, reflexión y oración guiada.',
    'enc.titulo': '🌸 50 Encuentros Completos',
    'enc.sub': 'Encuentros listos para conducir',
    'enc.busca': 'Buscar encuentro...',
    'enc.versiculo': 'Versículo',
    'enc.quebraGelo': '🧊 Rompehielos',
    'enc.reflexao': '💭 Reflexión',
    'enc.perguntas': '❓ Preguntas de Discusión',
    'enc.oracao': '🙏 Oración de Cierre',
    'enc.vazio': 'No se encontraron encuentros',
    'gerar.enc.desc': 'Elige un encuentro listo o genera uno aleatorio',
    'gerar.enc.ver.todos': '📚 Ver todos los encuentros',
    'gerar.enc.aleatorio': '🎲 Encuentro aleatorio',
    'gerar.enc.bloqueado': 'El Generador de Encuentros forma parte del paquete <strong>50 Encuentros Completos</strong>.',
    'gerar.enc.oferta': '🌸 Ver oferta',
    'plan.quebraGelo': 'Rompehielos',
    'plan.pergunta': 'Pregunta para Discusión',
    'plan.quebraGelo.locked.titulo': '50 Rompehielos Cristianos',
    'plan.quebraGelo.locked.sub': 'Desbloquea para elegir un rompehielos',
    'plan.pergunta.locked.titulo': '100 Preguntas Poderosas',
    'plan.pergunta.locked.sub': 'Desbloquea para agregar una pregunta',
    'plan.quebraGelo.placeholder': 'Describe o elige un rompehielos...',
    'plan.pergunta.placeholder': 'Escribe o elige una pregunta de discusión...',
    'perfil.tab': '👤 Perfil',
    'modulos.tab': '📦 Módulos',
    'perfil.info': 'Información personal',
    'perfil.nome': 'Nombre completo',
    'perfil.telefone': 'Teléfono / WhatsApp',
    'perfil.igreja': 'Iglesia / Ministerio',
    'perfil.cidade': 'Ciudad',
    'perfil.cargo': 'Cargo / Función',
    'perfil.bio': 'Sobre mí',
    'perfil.nome.ph': 'Tu nombre completo',
    'perfil.telefone.ph': '+34 600 000 000',
    'perfil.igreja.ph': 'Nombre de tu iglesia',
    'perfil.cidade.ph': 'Tu ciudad',
    'perfil.cargo.ph': 'Ej: Líder de mujeres, Pastora...',
    'perfil.bio.ph': 'Cuéntanos sobre tu ministerio...',
    'perfil.salvar': '💾 Guardar información',
    'perfil.salvo': '✅ ¡Perfil guardado!',
    'perfil.foto': '📷 ¡Foto actualizada!',
    'modulos.label': 'Tus módulos',
    'perfil.secao.seguranca': '🔒 Seguridad',
    'perfil.conta': 'Cuenta',
    'perfil.email.label': 'Correo',
    'perfil.plano.label': 'Plan',
    'bonus.desbloqueado': 'DESBLOQUEADO',
    'btn.voltar': '← Volver',
    'btn.voltar.din': '← Dinámicas',
    'btn.voltar.enc': '← Encuentros',
    'btn.voltar.dev': '← Devocional',
    'btn.ver.oferta': 'Ver oferta →',
    'btn.compartilhar.wp': '📲 Compartir en WhatsApp',
    'btn.gerar.aleatorio': '🎲 Encuentro aleatorio',
    'btn.ver.todos.enc': '📚 Ver todos los encuentros',
    'filtro.categoria': '🏷 Categoría',
    'filtro.tempo': '⏱ Tiempo',
    'filtro.limpar': '✕ Limpiar',
    'filtro.tempo.10': 'Hasta 10 min',
    'filtro.tempo.15': 'Hasta 15 min',
    'filtro.tempo.20': 'Hasta 20 min',
    'filtro.tempo.25': 'Hasta 25 min',
    'filtro.tempo.30': '30+ min',
    'bonus.planejador.titulo': 'Planificador de Encuentros',
    'bonus.planejador.sub': 'Organiza tema, dinámica, estudio y oración',
    'bonus.guia.titulo': 'Guía de la Líder',
    'bonus.guia.sub': 'Consejos para conducir tus encuentros',
    'bonus.floresca.titulo': 'Dinámica Especial: Florece',
    'bonus.floresca.sub': 'Actividad simbólica con reflexión espiritual',
    'bonus.gratis': 'GRATIS',
    'bonus.exclusivo': 'EXCLUSIVO',
    'perg.titulo': '💬 100 Preguntas Poderosas',
    'perg.sub': 'Preguntas para conversaciones transformadoras',
    'perg.busca': 'Buscar pregunta...',
    'perg.copiar': '👆 Toca para copiar',
    'perg.copiada': '📋 ¡Pregunta copiada!',
    'perg.vazia': 'No se encontraron preguntas',
    'estudos.titulo': '📚 30 Estudios Bíblicos',
    'estudos.sub': 'Estudios completos para grupos de mujeres',
    'estudos.busca': 'Buscar estudio...',
    'gerar.enc.sub.des': 'Elige un encuentro listo o genera uno aleatorio',
    'plan.opt': 'opcional',
    'prod.mais.vendido': '⭐ Más vendido',
    'prod.oferta.especial': '💛 Oferta especial',
    'btn.remover': '✕ Eliminar',
    'plan.dinamica.escolhida': '🎭 Dinámica elegida',
    'plan.sug.header': 'Dinámicas para este tema',
    'plan.sug.ver.todas': 'Ver todas →',
    'plan.sug.usar': 'Usar',
    'plan.sug.perguntas': 'Preguntas sugeridas para este tema',
    'plan.sug.qgelos': 'Rompehielos sugeridos para este tema',
    'plan.sug.escolhida': '¡Sugerencia aplicada!',
    'plan.hora': 'Horario',
    'plan.notif.ativar': 'Recordatorio',
    'plan.notif.ativo': '🔔 ¡Recordatorio activado!',
    'plan.notif.ativo.semhora': '🔔 Recordatorio activado (agrega un horario para recibir la notificación a tiempo)',
    'admin.stat.ativos': 'Activas',
    'admin.stat.usuarios': 'Usuarias',
    'btn.ver.oferta.enc': '🌸 Ver oferta — R$24,90',
    'gerar.card.encontro': 'Encuentro Completo',
    'lib.perguntas.desc': 'Un banco con 100 preguntas para generar conversaciones transformadoras.',
    'novidades.btn.menu': 'Novedades',
    'gerar.btn.tudo': '🎲 Generar nuevo conjunto',
    'novidades.titulo': '🆕 Novedades',
    'novidades.sub': 'Historial completo de actualizaciones',
    'novidades.modal.titulo': 'Novedades de esta versión',
    'novidades.fechar': 'Cerrar',
    'novidades.ver.todas': 'Ver todas →',
    'novidades.btn': '🆕 Ver novedades',
    'prod.novo': '✨ Nuevo',
    'prod.planejador.preco.old': 'De R$27',
    'prod.planejador.preco.new': 'R$14,90',
    'perfil.seguranca': 'Seguridad',
    'qg.como.aplicar': '📋 Cómo Aplicar',
    'qg.duracao': '⏱ Duración',
    'qg.dica': '💡 Consejo de la Líder',
    'aval.titulo': '🌸 ¿Cómo fue el encuentro?',
    'aval.nota': 'Evaluación general',
    'aval.participantes': '¿Cuántas participaron?',
    'aval.obs': 'Observaciones (opcional)',
    'aval.obs.ph': '¿Qué funcionó bien? ¿Qué harías diferente?',
    'aval.salvar': '✅ Guardar evaluación',
    'gerar.aviso': 'Esta función sortea aleatoriamente entre los contenidos que ya adquiriste — no genera contenido nuevo.',
    'dp.limpar': 'Limpiar',
    'dp.hoje': 'Hoy',
    'plan.data.erro': 'Por favor, ingresa la fecha del encuentro.',
    'lib.quebraGelos.sub': 'Dinámicas rápidas para integrar y conectar al grupo',
    'qg.busca': 'Buscar rompehielos...',
    'qg.vazio': 'No se encontraron rompehielos',
    'btn.cancelar': 'Cancelar',
    'fav.remover.titulo': '¿Quitar de favoritos?',
    'fav.remover.desc': 'Esta dinámica será eliminada de tu lista. Si fue generada aleatoriamente, perderás el acceso rápido a ella.',
    'fav.remover.confirmar': 'Sí, quitar',
    'toast.gerar.nova': '✨ ¡Nueva dinámica generada!',
    'gerar.card.dinamica': 'Dinámica del Encuentro',
    'gerar.card.estudo': 'Estudio Bíblico',
    'gerar.card.pergunta': 'Pregunta para Discusión',
    'gerar.bloqueado': 'Bloqueado',
    'gerar.estudo.bloqueado': 'Desbloquea los 30 Estudios Bíblicos para usar aquí.',
    'gerar.pergunta.bloqueado': 'Desbloquea las 100 Preguntas Poderosas para usar aquí.',
    'gerar.hist.titulo': '📋 Generadas en esta sesión',
    'gerar.hist.limpar': '✕ Limpiar',
    'btn.salvar': '🤍 Guardar',
    'btn.salvar.label': 'Guardar',
    'btn.salvo': 'Guardado',
    'btn.timer.label': 'Temporizador',
    'btn.stories.label': 'Stories',
    'btn.aovivo.label': 'En vivo',
    'toast.enc.compartilhado': '📲 ¡Encuentro compartido!',
    'btn.compartilhar': '📲 Compartir',
    'toast.compartilhado': '📲 ¡Dinámica compartida!',
    'floresca.titulo': '🌸 Dinámica Especial',
    'floresca.exclusiva': 'Exclusiva para ti',
    'floresca.hero.titulo': 'Florece Donde\nDios te Plantó',
    'floresca.hero.sub': 'Una dinámica de transformación y fe',
    'floresca.objetivo.label': '🎯 Objetivo',
    'floresca.objetivo.texto': 'Ayudar a cada mujer a reconocer que el lugar donde está hoy — aunque difícil — es suelo fértil para el crecimiento espiritual. No necesita cambiar de lugar para florecer; necesita florecer donde está.',
    'floresca.materiais.label': '📦 Materiales',
    'floresca.materiais.texto': 'Una semilla pequeña (o dibujo de semilla) para cada participante · Papel y bolígrafo · Música suave de fondo (opcional)',
    'floresca.passos.label': '📋 Actividad Simbólica — Paso a Paso',
    'floresca.passo1': 'Distribuye una semilla (o el papel con el dibujo) a cada participante',
    'floresca.passo2': 'Pide que cada una sostenga la semilla y cierre los ojos',
    'floresca.passo3': 'La líder hace la pregunta en voz suave: "¿Dónde te plantó Dios donde aún no has florecido?"',
    'floresca.passo4': 'En silencio (3 min), cada una escribe una palabra en el papel: el lugar o situación',
    'floresca.passo5': 'Quien quiera comparte con el grupo — sin juicio, solo acogida',
    'floresca.reflexao.label': '🌿 Momento de Reflexión Espiritual',
    'floresca.reflexao.texto': 'Lee Jeremías 17:7-8: "Bendito el hombre que confía en el Señor... Será como árbol plantado junto a las aguas..."',
    'floresca.reflexao.pergunta': 'Pregunta: "Si tú eres el árbol y Dios es el agua — ¿qué necesita cambiar para que te acerques más a la fuente?"',
    'floresca.aplicacao.label': '✦ Aplicación Práctica',
    'floresca.aplicacao.texto': 'Cada participante escribe en el reverso del papel una acción concreta para la semana — un pequeño paso para florecer donde está. La semilla se queda con ella como símbolo de ese compromiso.',
    'plan.tema.placeholder': 'Elige un tema predefinido...',
    'plan.tema.gratidao': '🌿 Gratitud',
    'plan.tema.amizade': '🤝 Amistad',
    'plan.tema.fe': '🕊️ Fe en tiempos difíciles',
    'plan.tema.identidade': '✦ Identidad en Cristo',
    'plan.tema.esperanca': '🌅 Esperanza',
    'plan.tema.oracao.opt': '🙏 Oración',
    'plan.tema.proposito': '🌸 Propósito',
    'plan.tema.perdao': '💛 Perdón',
    'plan.tema.comunhao': '👐 Comunión',
    'plan.tema.familia': '🏡 Familia',
    'plan.tema.paz': '🕊 Paz',
    'plan.tema.forca': '💪 Fuerza y Resiliencia',
    'plan.tema.amor': '❤️ Amor',
    'plan.tema.alegria': '✨ Alegría',
    'plan.tema.crescimento': '🌱 Crecimiento Espiritual',
    'plan.tema.testemunho': '🌟 Testimonio',
    'plan.tema.servico': '🤲 Servicio',
    'plan.tema.sabedoria': '📖 Sabiduría',
    'plan.tema.adoracao': '🎶 Adoración',
    'plan.tema.cura': '🌺 Sanidad Interior',
    'plan.tema.outro': '✏️ Otro (escribir)',
    'plan.tema.custom': 'Escribe el tema personalizado...',
    'plan.oracao.placeholder': 'Describe el momento de oración o reflexión...',
    'plan.notas.placeholder': 'Materiales necesarios, participantes esperadas...',
  
    'enc.detail.versiculo': '📖 Versículo',
    'enc.detail.quebraGelo': '🧊 Rompehielos',
    'enc.detail.reflexao': '💭 Reflexión',
    'enc.detail.perguntas': '❓ Preguntas de Discusión',
    'enc.detail.oracao': '🙏 Oración de Cierre',
    'plan.modal.tema': '✦ Tema del Encuentro',
    'plan.modal.dinamica': '🎭 Dinámica elegida',
    'plan.modal.ver.din': '👁 Ver dinámica completa',
    'plan.modal.qg': '🧊 Rompehielos',
    'plan.modal.ver.qg': '👁 Ver rompehielos completo',
    'plan.modal.versiculo': '📖 Versículo',
    'plan.modal.pergunta': '💬 Pregunta de Discusión',
    'plan.modal.oracao': '🙏 Momento de Oración / Reflexión',
    'plan.modal.notas': '📋 Anotaciones',
    'plan.modal.ver.detalhes': '👁 Ver detalles completos',
    'fav.sec.dinamicas': '🎭 Dinámicas',
    'fav.sec.perguntas': '💬 Preguntas',
    'fav.sec.qgelos': '🧊 Rompehielos',
    'fav.sec.encontros': '🌸 Encuentros',
    'fav.categoria.vazia': 'Ningún favorito en esta categoría aún.',
    'fav.salvar.btn': '+ Guardar en favoritos',
    'aovivo.anterior': '← Anterior',
    'aovivo.proximo': 'Siguiente →',
    'aovivo.concluir': '✓ Finalizar',
    'aovivo.passo.label': 'Paso',
    'onb.proximo': 'Siguiente →',
    'onb.comecar': '🌸 ¡Empezar!',
    'onb.pular': 'Saltar tour',
    'toast.din.escolhida': '🎭 ¡Dinámica elegida!',
    'toast.enc.primeiro': '¡Genera un encuentro primero!',
    'toast.conj.primeiro': '¡Genera un conjunto primero!',
    'toast.imagem.salva': '📸 ¡Imagen guardada!',
    'toast.hist.rm': '🗑️ Eliminar',
    'gerar.conj.aleatorio': 'Conjunto Aleatorio',
    'gerar.tema.label': '🏷 Tema:',
    'din.passos.label': '📋 Paso a Paso',
    'dev.detail.reflexao': '💭 Reflexión',
    'dev.detail.pergunta': '🤔 Pregunta de Reflexión',
    'dev.detail.oracao': '🙏 Oración del Día',
    'hist.remover.btn': '🗑️ Eliminar',
    'toast.nova.dinamica': '🎭 ¡Nueva dinámica!',
    'toast.novo.estudo': '📖 ¡Nuevo estudio!',
    'toast.nova.pergunta': '💬 ¡Nueva pregunta!',
    'toast.nome.atualizado': '✏️ ¡Nombre actualizado!',
    'toast.novo.enc.gerado': '🌸 ¡Nuevo encuentro generado!',
    'toast.novo.enc': '🌸 ¡Nuevo encuentro!',
    'toast.ref.invalida': '❗ Ingrese una referencia como "Juan 3:16"',
    'toast.versiculo.encontrado': '📖 ¡Versículo encontrado!',
    'toast.campos.obrigatorios': '❗ Complete los campos obligatorios',
    'toast.enc.planejado': '✅ ¡Encuentro planificado con éxito!',
    'toast.enc.removido': '🗑️ Encuentro eliminado',
    'toast.desbloqueado': '✅ ¡Contenido desbloqueado con éxito!',
    'toast.codigo.invalido': '❌ Código inválido.',
    'toast.hist.removido': 'Eliminado del historial',
    'toast.tempo.esgotado': '⏰ ¡Se acabó el tiempo!',
    'toast.hist.removida': '↩️ Eliminada del historial',
    'toast.marcada.realizada': '✅ ¡Marcada como realizada!',
    'toast.avaliacao.salva': '🌸 ¡Evaluación guardada!',
    'toast.modulo.indisponivel': '📖 Módulo no disponible',
    'din.realizada': '✓ Realizada',
    'din.marcar.realizada': '✓ Marcar como realizada',
    'enc.nenhum': 'Ningún encuentro encontrado',
    'est.nenhum': 'Ningún estudio encontrado',
    'modal.insira.codigo': 'Ingrese su código de acceso o adquiera ahora.',
    'modal.renomear.titulo': 'Renombrar conjunto',
    'modal.renomear.desc': 'Dé un nombre para identificar este conjunto después',
    'plan.err.tema': 'Por favor, informe el tema del encuentro.',
    'plan.err.dinamica': 'Por favor, informe la dinámica elegida.',
    'plan.err.versiculo': 'Por favor, informe el versículo.',
    'plan.verse.nao.encontrado': '❗ Versículo no encontrado. Intente: "Filipenses 4:6" o "Juan 3:16"',
    'guia.dica': 'Consejo:',
    'guia.s1.titulo': 'Cómo iniciar el encuentro',
    'guia.s1.texto': 'Comienza con una acogida cálida. Di el nombre de las participantes, sonríe y crea un ambiente seguro. Una música suave de fondo ayuda a preparar el corazón.',
    'guia.s1.dica': 'Reserva los primeros 5 minutos solo para conversaciones libres. Quien llegó con prisa necesita desacelerar antes de entrar en el tema.',
    'guia.s2.titulo': 'Cómo conducir la dinámica',
    'guia.s2.texto': 'Explica la dinámica de forma simple y hazla tú primero cuando sea posible. Esto rompe el hielo y da valor a las demás para participar.',
    'guia.s2.dica': 'Nunca fuerces la participación. Di siempre: "Quien quiera compartir, siéntase libre." Respetar el silencio también es liderazgo.',
    'guia.s3.titulo': 'Cómo estimular la participación',
    'guia.s3.texto': 'Haz preguntas abiertas: "¿Cómo se aplica esto a tu vida?" o "¿Alguien vivió algo parecido?". Evita preguntas de sí o no — cierran la conversación.',
    'guia.s3.dica': 'Si alguien habla demasiado, agradece y redirige: "¡Qué rico! Y tú, hermana, ¿qué opinas?" La amabilidad también es liderazgo.',
    'guia.s4.titulo': 'Cómo aplicar la reflexión espiritual',
    'guia.s4.texto': 'Conecta la dinámica al versículo o tema espiritual. Usa frases como: "Lo que vivimos hoy en la práctica es exactamente lo que la Palabra nos dice en..."',
    'guia.s4.dica': 'Cierra siempre con una oración corta que resuma lo que el grupo vivió. Eso sella el momento y queda en la memoria.',
    'guia.s5.titulo': 'Cómo cerrar bien',
    'guia.s5.texto': 'Agradece a cada participante por su presencia. Comparte brevemente el próximo encuentro e invita a traer una amiga. El cierre planta la semilla del próximo encuentro.',
    'guia.s5.dica': 'Un pequeño recuerdo simbólico (un versículo impreso, una piedrita, un papel doblado) hace que el encuentro dure en sus vidas más allá del día.',
}
};
// ── TRADUÇÕES DE CONTEÚDO (encontros, quebraGelos, estudos, perguntas, devocional) ──

const ENCONTROS_TRADUCOES = {
  en: {
    cats: {'Fé e Confiança':'Faith & Trust','Fé e Esperança':'Faith & Hope','Virtudes Cristãs':'Christian Virtues','Identidade e Propósito':'Identity & Purpose','Vida e Relacionamentos':'Life & Relationships','Amor e Comunidade':'Love & Community','Crescimento Espiritual':'Spiritual Growth','Sabedoria e Discernimento':'Wisdom & Discernment','Gratidão e Alegria':'Gratitude & Joy','Perdão e Cura':'Forgiveness & Healing','Serviço e Missão':'Service & Mission','Força e Resiliência':'Strength & Resilience','Relacionamentos e Conflitos':'Relationships & Conflicts','Saúde e Bem-estar':'Health & Wellness','Fé Prática':'Practical Faith','Transformação e Celebração':'Transformation & Celebration'},
    titles: {1:'Trust in God',2:'Inner Peace',3:'Life of Prayer',4:'Renewed Hope',5:'Persevering Faith',6:'Overcoming Fear',7:'Humble Heart',8:'Generosity',9:'Perseverance',10:'Holiness',11:'Kindness',12:'Patience',13:'Identity in Christ',14:'God\'s Calling',15:'Life Purpose',16:'Abundant Life',17:'Healthy Friendships',18:'Family',19:'Love Your Neighbor',20:'Transforming Love',21:'Authentic Fellowship',22:'Spiritual Renewal',23:'Spiritual Growth',24:'Spiritual Discipline',25:'Path of Wisdom',26:'Spiritual Discernment',27:'Making Wise Decisions',28:'Gratitude',29:'Daily Gratitude',30:'Joy',31:'Forgiveness',32:'Emotional Healing',33:'Freedom from the Past',34:'Loving Service',35:'Mission & Purpose',36:'Transforming Impact',37:'Strength in God',38:'Spiritual Resilience',39:'Overcoming Obstacles',40:'Honest Communication',41:'Resolving Conflicts',42:'Healthy Boundaries',43:'Caring for the Body',44:'Emotional Health',45:'Balance & Rest',46:'Faith in Daily Life',47:'Integrity',48:'Contentment',49:'Continuous Transformation',50:'Celebration & Final Gratitude'}
  },
  es: {
    cats: {'Fé e Confiança':'Fe y Confianza','Fé e Esperança':'Fe y Esperanza','Virtudes Cristãs':'Virtudes Cristianas','Identidade e Propósito':'Identidad y Propósito','Vida e Relacionamentos':'Vida y Relaciones','Amor e Comunidade':'Amor y Comunidad','Crescimento Espiritual':'Crecimiento Espiritual','Sabedoria e Discernimento':'Sabiduría y Discernimiento','Gratidão e Alegria':'Gratitud y Alegría','Perdão e Cura':'Perdón y Sanación','Serviço e Missão':'Servicio y Misión','Força e Resiliência':'Fuerza y Resiliencia','Relacionamentos e Conflitos':'Relaciones y Conflictos','Saúde e Bem-estar':'Salud y Bienestar','Fé Prática':'Fe Práctica','Transformação e Celebração':'Transformación y Celebración'},
    titles: {1:'Confianza en Dios',2:'Paz Interior',3:'Vida de Oración',4:'Esperanza Renovada',5:'Fe que Persevera',6:'Venciendo el Miedo',7:'Humildad de Corazón',8:'Generosidad',9:'Perseverancia',10:'Santidad',11:'Bondad',12:'Paciencia',13:'Identidad en Cristo',14:'Llamado de Dios',15:'Propósito de Vida',16:'Vida Abundante',17:'Amistades Saludables',18:'Familia',19:'Amor al Prójimo',20:'Amor que Transforma',21:'Comunión Auténtica',22:'Renovación Espiritual',23:'Crecimiento Espiritual',24:'Disciplina Espiritual',25:'Camino de Sabiduría',26:'Discernimiento Espiritual',27:'Tomando Decisiones Sabias',28:'Gratitud',29:'Gratitud Diaria',30:'Alegría',31:'Perdón',32:'Sanación Emocional',33:'Libertad del Pasado',34:'Servicio Amoroso',35:'Misión y Propósito',36:'Impacto Transformador',37:'Fuerza en Dios',38:'Resiliencia Espiritual',39:'Superando Obstáculos',40:'Comunicación Honesta',41:'Resolviendo Conflictos',42:'Límites Saludables',43:'Cuidando el Cuerpo',44:'Salud Emocional',45:'Equilibrio y Descanso',46:'Fe en el Día a Día',47:'Integridad',48:'Contentamiento',49:'Transformación Continua',50:'Celebración y Gratitud Final'}
  }
};

const QUEBRAGELOS_TRADUCOES = {
  en: {
    cats: {'Conexão e Gratidão':'Connection & Gratitude','Crescimento Pessoal':'Personal Growth','Diversão e Leveza':'Fun & Lighthearted','Memórias e Histórias':'Memories & Stories','Comunhão Profunda':'Deep Fellowship','Esperança e Futuro':'Hope & Future','Inspiração e Encorajamento':'Inspiration & Encouragement','Valores e Identidade':'Values & Identity','Comunidade e Encerramento':'Community & Closing'},
    titles: {1:'My Week in One Word',2:'Two Truths and a Lie',3:'Favorite Verse',4:'Reason to Be Grateful',5:'Object That Represents Me',6:'What makes you grateful today?',7:'A faith story in 1 minute',8:'Which verse inspires you?',9:'If you were an animal, which one?',10:'Advice to your younger self',11:'Who influenced you spiritually?',12:'My Favorite Book',13:'A Dream I Have',14:'Something New I Learned',15:'If your life were a movie...',16:'Desert Island: 3 items',17:'My Chosen Superpower',18:'What\'s your musical guilty pleasure?',19:'If you were an ice cream flavor...',20:'A useless but funny skill',21:'Your first happy memory?',22:'A moment you felt God\'s presence clearly',23:'Your favorite family tradition?',24:'A challenge you overcame and what you learned',25:'A day you would relive?',26:'Someone you\'d like to meet again',27:'My First Church Memory',28:'Something I Want to Thank God For',29:'What God Has Done in My Life',30:'A seed of hope',31:'My Revealed Dream',32:'What would you leave behind?',33:'A Verse for the Journey',34:'My Time Capsule',35:'How did God surprise you?',36:'Something I Learned from God',37:'Something I Learned from Someone Else',38:'A Word of Encouragement',39:'A Bible Lesson',40:'What\'s your most important value?',41:'Your favorite animal and why?',42:'A belief you changed over time',43:'What\'s your unique superpower?',44:'Who inspires you and why?',45:'A phrase that defines you',46:'A Word for the Group',47:'What do you take from here?',48:'A Wish for the Sister Next to You',49:'How do you feel right now?',50:'A Sincere Compliment'}
  },
  es: {
    cats: {'Conexão e Gratidão':'Conexión y Gratitud','Crescimento Pessoal':'Crecimiento Personal','Diversão e Leveza':'Diversión y Ligereza','Memórias e Histórias':'Memorias e Historias','Comunhão Profunda':'Comunión Profunda','Esperança e Futuro':'Esperanza y Futuro','Inspiração e Encorajamento':'Inspiración y Ánimo','Valores e Identidade':'Valores e Identidad','Comunidade e Encerramento':'Comunidad y Cierre'},
    titles: {1:'Mi Semana en Una Palabra',2:'Dos Verdades y Una Mentira',3:'Versículo Favorito',4:'Motivo de Gratitud',5:'Objeto que Me Representa',6:'¿Qué te hace agradecida hoy?',7:'Una historia de fe en 1 minuto',8:'¿Qué versículo te inspira?',9:'Si fueras un animal, ¿cuál serías?',10:'Un consejo para tu yo más joven',11:'¿Quién te influyó espiritualmente?',12:'Mi Libro Preferido',13:'Un Sueño que Tengo',14:'Algo Nuevo que Aprendí',15:'Si tu vida fuera una película...',16:'Isla Desierta: 3 objetos',17:'Mi Superpoder Elegido',18:'¿Cuál es tu placer culpable musical?',19:'Si fueras un sabor de helado...',20:'Una habilidad inútil pero divertida',21:'¿Tu primer recuerdo feliz?',22:'Un momento en que sentiste la presencia de Dios',23:'¿Tu tradición familiar favorita?',24:'Un desafío que superaste y lo que aprendiste',25:'¿Un día que revivirías?',26:'Una persona que te gustaría reencontrar',27:'Mi Primer Recuerdo en la Iglesia',28:'Algo que Quiero Agradecer a Dios',29:'Lo que Dios Ha Hecho en Mi Vida',30:'Una semilla de esperanza',31:'Mi Sueño Revelado',32:'¿Qué dejarías en el pasado?',33:'Un Versículo para el Camino',34:'Mi Cápsula del Tiempo',35:'¿Cómo te sorprendió Dios?',36:'Algo que Aprendí de Dios',37:'Algo que Aprendí de Otra Persona',38:'Una Palabra de Ánimo',39:'Una Lección de la Biblia',40:'¿Cuál es tu valor más importante?',41:'¿Tu animal favorito y por qué?',42:'Una creencia que cambiaste',43:'¿Cuál es tu superpoder único?',44:'¿Quién te inspira y por qué?',45:'Una frase que te define',46:'Una Palabra para el Grupo',47:'¿Qué te llevas de aquí?',48:'Un Deseo para la Hermana al Lado',49:'¿Cómo te sientes ahora?',50:'Un Elogio Sincero'}
  }
};

const ESTUDOS_TRADUCOES = {
  en: { titles: {1:'The Goodness of God',2:'Trust in Difficult Times',3:'The Power of Prayer',4:'Perseverance in Faith',5:'Transforming Gratitude',6:'Joy in the Lord',7:'Forgiveness & Freedom',8:'Identity in Christ',9:'Sacrificial Love',10:'Eternal Hope',11:'Humility & Service',12:'Transcending Peace',13:'Active Faith',14:'Genuine Fellowship',15:'Spiritual Renewal',16:'Divine Wisdom',17:'Strength in Weakness',18:'Generosity of Heart',19:'Patience & Perseverance',20:'Purpose & Calling',21:'Emotional Healing',22:'Integrity & Honesty',23:'Love Your Neighbor',24:'Contentment in Christ',25:'Continuous Transformation',26:'God\'s Faithfulness',27:'Courage in Christ',28:'Abundant Life',29:'Legacy of Faith',30:'Celebrating the Journey'} },
  es: { titles: {1:'La Bondad de Dios',2:'Confianza en Tiempos Difíciles',3:'La Fuerza de la Oración',4:'Perseverancia en la Fe',5:'Gratitud Transformadora',6:'Alegría en el Señor',7:'Perdón y Libertad',8:'Identidad en Cristo',9:'Amor Sacrificial',10:'Esperanza Eterna',11:'Humildad y Servicio',12:'Paz que Trasciende',13:'Fe Activa',14:'Comunión Genuina',15:'Renovación Espiritual',16:'Sabiduría Divina',17:'Fuerza en la Debilidad',18:'Generosidad del Corazón',19:'Paciencia y Perseverancia',20:'Propósito y Llamado',21:'Sanación Emocional',22:'Integridad y Honestidad',23:'Amor al Prójimo',24:'Contentamiento en Cristo',25:'Transformación Continua',26:'Fidelidad de Dios',27:'Coraje en Cristo',28:'Vida Abundante',29:'Legado de Fe',30:'Celebración del Camino'} }
};

const PERGUNTAS_TRADUCOES = {
  en: { cats: {'Vida Espiritual':'Spiritual Life','Vida Pessoal':'Personal Life','Relacionamentos':'Relationships','Gratidão e Esperança':'Gratitude & Hope','Propósito e Chamado':'Purpose & Calling','Fé no Cotidiano':'Everyday Faith','Crescimento Espiritual':'Spiritual Growth','Reflexão Final':'Final Reflection','Extras':'Extras'} },
  es: { cats: {'Vida Espiritual':'Vida Espiritual','Vida Pessoal':'Vida Personal','Relacionamentos':'Relaciones','Gratidão e Esperança':'Gratitud y Esperanza','Propósito e Chamado':'Propósito y Llamado','Fé no Cotidiano':'Fe en lo Cotidiano','Crescimento Espiritual':'Crecimiento Espiritual','Reflexão Final':'Reflexión Final','Extras':'Extras'} }
};

const DEVOCIONAL_TRADUCOES = {
  en: { titles: {1:'Day 1: God Takes Care of You',2:'Day 2: Bloom Where God Planted You',3:'Day 3: Trust in God\'s Timing',4:'Day 4: Gratitude Transforms the Heart',5:'Day 5: God Renews Your Strength',6:'Day 6: Resting in God\'s Presence',7:'Day 7: Living with Purpose'} },
  es: { titles: {1:'Día 1: Dios Cuida de Ti',2:'Día 2: Florece Donde Dios Te Plantó',3:'Día 3: Confía en el Tiempo de Dios',4:'Día 4: La Gratitud Transforma el Corazón',5:'Día 5: Dios Renueva Tus Fuerzas',6:'Día 6: Descansando en la Presencia de Dios',7:'Día 7: Viviendo con Propósito'} }
};


// ── TRADUÇÕES DE CORPO (body content) ──
const ENC_BODY_EN = {
1:{qg:'Share a moment when you trusted God and saw Him act.',ref:'Trust is not the absence of fear, but the certainty that God is in control. When we surrender our worries to Him, we find genuine peace.',prg:['What is the difference between trusting God and trusting our own strength?','How can we strengthen our trust when circumstances seem impossible?','Which promises of God help us trust more deeply?'],ora:'Lord, help us to completely surrender our lives and worries to You. Strengthen our trust in Your faithful character and Your promises. Amen.'},
2:{qg:'Share a place or moment where you feel deep peace. Why?',ref:'Inner peace does not come from perfect circumstances, but from the presence of God in our hearts. It is a gift that transcends human logic.',prg:['How do we distinguish between true peace and the mere absence of problems?','Which spiritual practices help us cultivate inner peace?','How can we maintain peace when facing life\'s storms?'],ora:'Heavenly Father, pour Your peace over us. May it guard our hearts and minds in Christ, even when the world around us is in chaos. Amen.'},
3:{qg:'What is your favorite way to pray?',ref:'Prayer is intimate conversation with God. It is not about perfect words, but about an open heart. Every prayer, no matter how simple, is heard by the Father.',prg:['How can we develop a consistent prayer life amid our routine?','What is the difference between petition prayer and worship prayer?','How do we know that God hears our prayers?'],ora:'Lord, teach us to pray. Open our hearts for constant conversation with You. May our prayers reflect faith, gratitude and trust in Your love. Amen.'},
4:{qg:'Share a moment when your hope was renewed when everything seemed lost.',ref:'Christian hope is not naive optimism, but trust grounded in God\'s promises. It sustains us when everything around us crumbles.',prg:['How do we differentiate hope in God from hope in circumstances?','Which biblical promises renew your hope?','How can we help other women regain hope?'],ora:'Lord, renew our hope. When we feel hopeless, remind us of Your promises. May our hope in You be contagious and inspire other women. Amen.'},
5:{qg:'What challenge are you facing now? How does your faith help you persevere?',ref:'Faith is not a fleeting feeling, but a daily decision to trust God. Perseverance means continuing when it\'s hard.',prg:['What does it mean to run the race with perseverance?','How do we keep our focus on Jesus when difficulties surround us?','What is the role of community in our perseverance?'],ora:'Father, strengthen our faith to persevere. When we grow weary, renew our strength. May we never lose sight of Jesus, our supreme example of faith. Amen.'},
6:{qg:'What fear did you overcome with God\'s help?',ref:'Fear is natural, but it should not dominate us. God offers us power, love and discernment to overcome any fear.',prg:['What is the difference between healthy fear and paralyzing fear?','How does God\'s love free us from fear?','What practices help us trust when we are afraid?'],ora:'Lord, free us from fear. Fill us with Your power, Your love and Your discernment. May we trust You even when we are afraid. Amen.'},
7:{qg:'Share a moment when humility helped in a relationship.',ref:'Humility is not low self-esteem, but recognition that we depend on God. It is strength under control, not weakness.',prg:['How do we differentiate true humility from false modesty?','In what ways does pride hurt us spiritually?','How do we cultivate humility in a culture that values self-promotion?'],ora:'Lord, cultivate humble hearts in us. Help us recognize our dependence on You and value others. May our humility reflect Your character. Amen.'},
8:{qg:'Share an experience of giving generously and how you felt.',ref:'Generosity is an expression of faith. When we give freely, we recognize that everything comes from God and that He supplies our needs.',prg:['How can we be generous even when we have little?','What is the difference between giving out of obligation and giving with joy?','How does generosity transform us spiritually?'],ora:'Father, open our hearts to generosity. May we give with joy, knowing Your provision is sufficient. May our generosity reflect Your infinite love. Amen.'},
9:{qg:'What goal did you pursue for a long time before achieving it?',ref:'Perseverance is not just resistance, but growth through difficulties. Each challenge shapes us and brings us closer to spiritual maturity.',prg:['How do we see trials as opportunities for growth?','What is the difference between perseverance and stubbornness?','How do we encourage each other in perseverance?'],ora:'Lord, strengthen our perseverance. May we see difficulties as growth opportunities. May we never give up following You. Amen.'},
10:{qg:'What does holiness mean to you? How do you live it daily?',ref:'Holiness means being set apart for God, living with integrity and purity. It is not perfection, but a constant pursuit of pleasing God.',prg:['How do we understand holiness in a world that values the opposite?','Which areas of our lives need to be consecrated to God?','How does holiness free us rather than bind us?'],ora:'Lord, consecrate us for You. May we live with integrity and purity, reflecting Your holy character. May our holiness be attractive and inspiring. Amen.'},
11:{qg:'Share an act of kindness you received and how it impacted you.',ref:'Kindness is compassion in action. When we are kind, we reflect the heart of Jesus who had compassion on the suffering.',prg:['How does kindness set us apart in an often harsh world?','What is the relationship between kindness and forgiveness?','How can we be kind even to those who have hurt us?'],ora:'Father, fill our hearts with genuine kindness. May we see others\' needs and respond with compassion. May our kindness reflect Your love. Amen.'},
12:{qg:'In which situation do you most need to exercise patience?',ref:'Patience is not passivity, but controlled strength. It means waiting in God\'s timing without anxiety, trusting His wisdom.',prg:['How do we differentiate patience from resignation?','What helps us be patient when we want immediate results?','How does patience draw us closer to God?'],ora:'Lord, cultivate patience in our hearts. Help us wait in Your timing, trusting Your wisdom. May our patience inspire other women. Amen.'},
13:{qg:'How has your life changed since you accepted Jesus?',ref:'Our identity is not defined by our past, appearance or achievements, but by who we are in Christ. We are beloved daughters of God.',prg:['How do we leave the old identity and embrace the new in Christ?','What are the characteristics of our identity in Christ?','How does this identity free us from comparisons and insecurities?'],ora:'Lord, help us understand deeply who we are in Christ. May our identity be rooted in Your love, not in external circumstances. Amen.'},
14:{qg:'What do you believe is your main calling or purpose?',ref:'Every woman has a unique calling from God. It\'s not about being like others, but discovering and fulfilling the specific purpose God has for you.',prg:['How do we discover our calling?','How do our gifts relate to our calling?','How can we encourage each other in our callings?'],ora:'Father, reveal our calling. May we use our gifts for Your glory. May each of us fulfill the specific purpose You planned. Amen.'},
15:{qg:'What goal would you like to achieve in the coming years?',ref:'God has a purpose for our lives that goes beyond our expectations. When we align our lives with His purpose, we find true satisfaction.',prg:['How do we differentiate our desires from God\'s purpose?','How does God\'s purpose bring us hope?','How can we help other women discover their purpose?'],ora:'Lord, align our desires with Your purpose. May we live with clear purpose and deep meaning. Amen.'},
16:{qg:'What does abundant life mean to you?',ref:'Abundant life is not material wealth, but spiritual fullness. It is living with purpose, joy, peace and meaningful relationships in Christ.',prg:['How do we differentiate abundant life from worldly success?','What are the elements of a truly abundant life?','How can we experience abundance even in difficult circumstances?'],ora:'Lord, fill our lives with abundance in You. May we experience spiritual fullness, deep joy and lasting peace. Amen.'},
17:{qg:'What do you value most in a friendship?',ref:'Healthy friendships are gifts from God. They enrich our lives, support us in difficulties and celebrate our victories.',prg:['What are the characteristics of a healthy friendship?','How do we maintain friendships amid busy routines?','How can our friendships reflect God\'s love?'],ora:'Lord, bless our friendships. Help us be loyal, patient and loving friends. May our friendships glorify You. Amen.'},
18:{qg:'Share a precious family memory.',ref:'Family is a divine institution. Despite imperfections, God uses family to shape our character and teach us about unconditional love.',prg:['How can we strengthen our family bonds?','How do we deal with family conflicts in a godly way?','How does our family impact our spiritual growth?'],ora:'Father, bless our families. Heal wounds, restore relationships and strengthen bonds of love. May our homes be places of peace and grace. Amen.'},
19:{qg:'How do you demonstrate love to your neighbors daily?',ref:'Loving our neighbor is the most visible manifestation of loving God. When we extend kindness and compassion to others, we honor God.',prg:['Who is your neighbor this week?','How can we love those who are hard to love?','What are practical ways to show love to those around us?'],ora:'Lord, expand our capacity to love. May we see Your image in every person. May our love be practical, genuine and transforming. Amen.'},
20:{qg:'Share an experience where love transformed a situation.',ref:'God\'s love is transforming. It changes hearts, restores relationships and brings hope where there was none.',prg:['How has God\'s love transformed your life?','How can we be agents of God\'s transforming love?','What areas need to be touched by God\'s love?'],ora:'Father, transform us with Your love. May we be channels of Your love to the world. May our love make a difference. Amen.'},
21:{qg:'What does authentic fellowship mean to you?',ref:'Authentic fellowship goes beyond meeting together. It involves transparency, vulnerability, mutual support and genuine love.',prg:['How do we create an environment of authentic fellowship?','What are the barriers to genuine fellowship?','How does fellowship strengthen our faith?'],ora:'Lord, deepen our fellowship. May we be transparent and vulnerable with each other. May our fellowship reflect the love of the early church. Amen.'},
22:{qg:'In what area do you most feel the need for spiritual renewal?',ref:'Spiritual renewal is a continuous process. God invites us daily to be transformed and renewed in His presence.',prg:['What does spiritual renewal look like practically?','What habits help us stay spiritually renewed?','How do we recognize when we need renewal?'],ora:'Lord, renew us spiritually. Revive our passion for You. May we experience daily freshness in Your presence. Amen.'},
23:{qg:'How have you grown spiritually in the last year?',ref:'Spiritual growth is not optional — it is God\'s desire for every believer. It requires intention, discipline and community.',prg:['What has been your greatest area of spiritual growth?','What challenges have contributed to your growth?','How can we encourage each other\'s spiritual growth?'],ora:'Father, help us grow daily in You. May we never settle for spiritual stagnation. May our growth bear fruit for Your kingdom. Amen.'},
24:{qg:'What spiritual discipline has impacted your life the most?',ref:'Spiritual disciplines are practices that open us to God\'s transforming work. They are not legalism, but pathways to intimacy with God.',prg:['Which spiritual disciplines do you practice regularly?','How do disciplines help us in difficult times?','How can we develop new spiritual disciplines?'],ora:'Lord, help us cultivate spiritual disciplines. May they not be burdens, but joyful pathways to deeper intimacy with You. Amen.'},
25:{qg:'Share a moment when you made a wise decision guided by God.',ref:'Wisdom is more than knowledge — it is the ability to apply God\'s truth to our daily decisions.',prg:['How do we seek wisdom in important decisions?','What is the difference between worldly wisdom and divine wisdom?','How does wisdom protect us from mistakes?'],ora:'Lord, give us Your wisdom. May we seek You before every decision. May our choices honor You and bless others. Amen.'},
26:{qg:'How do you discern God\'s voice amid so many voices?',ref:'Spiritual discernment is a precious gift. It helps us distinguish truth from falsehood, God\'s will from our desires.',prg:['How do we develop spiritual discernment?','What are signs that we are hearing God\'s voice?','How does discernment protect us from deception?'],ora:'Lord, sharpen our spiritual discernment. May we recognize Your voice clearly. May we not be deceived but guided by Your truth. Amen.'},
27:{qg:'Share a difficult decision you faced. How did you make it?',ref:'Making wise decisions requires seeking God, listening to wise counsel and trusting the Holy Spirit\'s guidance.',prg:['How do we balance reason and faith in our decisions?','What is the role of prayer in decision-making?','How do we handle the consequences of our decisions?'],ora:'Father, guide our decisions. May we seek You in every choice, big or small. May our decisions honor You and bless those around us. Amen.'},
28:{qg:'What are you most grateful for today?',ref:'Gratitude transforms our perspective. When we focus on blessings instead of problems, our heart fills with joy and peace.',prg:['How does gratitude change our daily perspective?','What practical ways can we cultivate gratitude?','How does gratitude affect our relationships?'],ora:'Lord, fill our hearts with gratitude. May we always see Your blessings, even in difficult times. May our gratitude overflow to others. Amen.'},
29:{qg:'What is a small blessing you noticed recently?',ref:'Daily gratitude for small things transforms our spiritual vision. God is present in ordinary details of life.',prg:['How can we practice daily gratitude?','What small blessings have you noticed this week?','How does noticing small blessings change our perspective?'],ora:'Father, open our eyes to see Your daily blessings. May we cultivate a grateful heart in every circumstance. Amen.'},
30:{qg:'What brings you the most joy?',ref:'True joy does not depend on circumstances. It springs from our relationship with God and the certainty of His love.',prg:['How do we differentiate true joy from temporary happiness?','What steals our joy and how do we protect it?','How can we be joyful even in trials?'],ora:'Lord, fill us with Your joy. May we not depend on circumstances but on Your faithful presence. May our joy be a testimony to the world. Amen.'},
31:{qg:'Is there someone you need to forgive? How does that affect you?',ref:'Forgiveness is not approving what happened, but freeing ourselves from the weight of resentment. It is an act of faith and obedience.',prg:['What is the difference between forgiving and forgetting?','How does unforgiveness affect our spiritual life?','How do we forgive when the pain is too deep?'],ora:'Lord, help us forgive as You forgave us. Free us from resentment and bitterness. May forgiveness bring healing and freedom. Amen.'},
32:{qg:'Is there an emotional wound that still affects you?',ref:'God is the healer of broken hearts. When we bring our wounds to Him, He begins a process of restoration and renewal.',prg:['How do we allow God to heal our emotional wounds?','What is the role of community in the healing process?','How do we know we are moving toward healing?'],ora:'Father, heal our emotional wounds. Touch the deepest areas of our hearts. May Your healing be complete and transforming. Amen.'},
33:{qg:'What from the past do you need to release to move forward?',ref:'Freedom from the past is a gift from God. He invites us to leave behind what binds us and walk toward the new.',prg:['How do we release the past without ignoring it?','What promises help us move forward?','How does freedom from the past affect our present?'],ora:'Lord, free us from the chains of the past. May we walk in the freedom Christ conquered for us. May the past not define our future. Amen.'},
34:{qg:'How do you express love through service?',ref:'Serving is loving in practice. When we serve without expecting anything in return, we reflect the heart of Jesus who came to serve.',prg:['How can we serve with love in our daily lives?','What is the difference between serving by obligation and serving by love?','How does service transform us?'],ora:'Lord, give us a servant\'s heart. May we serve with joy and love, following Jesus\' example. May our service bless and transform lives. Amen.'},
35:{qg:'In what area do you feel called to make a difference?',ref:'Every woman has a mission. God placed you where you are for a purpose — to be light and salt in your sphere of influence.',prg:['How do we discover our mission?','How do we align our mission with God\'s purpose?','How can we support each other in our missions?'],ora:'Father, reveal our mission. May we be courageous to fulfill Your calling. May our lives make an eternal difference. Amen.'},
36:{qg:'Share someone who was transformed by your influence.',ref:'Our impact goes beyond what we can see. Small gestures of love and faith can transform lives and communities.',prg:['How can we have a positive impact on those around us?','What type of impact do you want to leave?','How does our impact reflect God\'s kingdom?'],ora:'Lord, use us as instruments of transformation. May our influence reflect Your love and build Your kingdom. May our impact be eternal. Amen.'},
37:{qg:'In what moment did you feel God\'s strength most clearly?',ref:'God\'s strength is made perfect in our weakness. When we recognize our limitations, His power works most effectively in us.',prg:['How do we access God\'s strength in difficult moments?','What is the difference between human and divine strength?','How does recognizing weakness open space for God?'],ora:'Lord, strengthen us with Your power. When we are weak, be our strength. May we always depend on You. Amen.'},
38:{qg:'How do you deal with adversity in your faith?',ref:'Spiritual resilience is the ability to remain firm in faith despite adversity. It is built through experience, prayer and community.',prg:['What helps you stay firm in faith during storms?','How does community help us build resilience?','What biblical examples of resilience inspire you?'],ora:'Father, build in us a resilient faith. May adversity strengthen rather than weaken us. May we emerge stronger from every trial. Amen.'},
39:{qg:'What obstacle seemed impossible but you overcame it?',ref:'With God, no obstacle is insurmountable. He gives us wisdom, strength and courage to overcome any challenge.',prg:['How do we face obstacles with faith?','What role does prayer play in overcoming challenges?','How can we help each other overcome obstacles?'],ora:'Lord, help us overcome every obstacle. May we not fear challenges but face them with faith in Your power. Amen.'},
40:{qg:'How do you handle difficult conversations?',ref:'Honest communication is the foundation of healthy relationships. Speaking truth with love builds trust and deepens bonds.',prg:['How do we communicate honestly without hurting?','What is the role of listening in honest communication?','How does honest communication strengthen relationships?'],ora:'Lord, help us communicate with honesty and love. May our words build up and not tear down. May our conversations reflect Your grace. Amen.'},
41:{qg:'How do you deal with conflicts in your relationships?',ref:'Conflicts are inevitable, but how we handle them defines our character. God calls us to be peacemakers.',prg:['What does it mean to be a peacemaker?','How do we resolve conflicts without compromising truth?','What role does forgiveness play in conflict resolution?'],ora:'Father, make us peacemakers. Help us resolve conflicts with grace and truth. May our relationships be marked by reconciliation. Amen.'},
42:{qg:'Is there an area where you need to set healthier boundaries?',ref:'Healthy boundaries are not selfishness — they are wisdom. They protect our well-being and our ability to serve God effectively.',prg:['How do we set boundaries without feeling guilty?','Why are boundaries important for our spiritual health?','How do boundaries protect our relationships?'],ora:'Lord, give us wisdom to set healthy boundaries. May we protect what You have given us. May our boundaries reflect wisdom and love. Amen.'},
43:{qg:'How do you care for your physical health as an act of worship?',ref:'Our body is the temple of the Holy Spirit. Caring for it is an act of worship and responsibility before God.',prg:['How does physical health affect our spiritual life?','What practical habits can we adopt to care for our bodies?','How do we balance caring for the body without making it an idol?'],ora:'Lord, help us care for our bodies as Your temple. May we be disciplined and grateful. May our health enable us to serve You better. Amen.'},
44:{qg:'How do you care for your emotional health?',ref:'Emotional health is fundamental for a full spiritual life. God cares about our emotions and invites us to bring them to Him.',prg:['How do we recognize when we need emotional help?','What is the role of faith in emotional health?','How can we support each other emotionally?'],ora:'Father, heal our emotions. May we be honest about our feelings and bring them to You. May our emotional health reflect Your peace. Amen.'},
45:{qg:'How do you find balance between activity and rest?',ref:'Rest is not laziness — it is a divine command. God Himself rested on the seventh day, teaching us the importance of balance.',prg:['Why is rest so difficult in our culture?','How does rest renew us spiritually?','What are practical ways to find balance?'],ora:'Lord, teach us to rest in You. May we find balance between activity and rest. May our rest be time of renewal in Your presence. Amen.'},
46:{qg:'How do you apply your faith in everyday decisions?',ref:'Faith is not only for Sundays. It should permeate every decision, every interaction, every moment of our daily lives.',prg:['How does faith influence your daily choices?','What are the challenges of living faith in daily life?','How can we be more intentional about living faith daily?'],ora:'Lord, may our faith be practical and present. May we live for You in every moment. May our daily life be an act of worship. Amen.'},
47:{qg:'What does living with integrity mean to you?',ref:'Integrity is being the same person in public and private. It is consistency between what we believe, say and do.',prg:['What are the greatest challenges to living with integrity?','How does integrity affect our witness?','How do we maintain integrity under pressure?'],ora:'Lord, build integrity in us. May we be consistent in word and action. May our integrity be a testimony of Your character. Amen.'},
48:{qg:'What are you learning about contentment?',ref:'True contentment is not having everything, but finding sufficiency in God. It is a spiritual posture of trust.',prg:['How does the culture of consumerism affect our contentment?','What does it mean to be content in all circumstances?','How can we cultivate contentment?'],ora:'Lord, teach us contentment. May we find sufficiency in You. May our contentment be testimony that You are enough. Amen.'},
49:{qg:'In what area of your life are you seeing transformation?',ref:'God\'s transforming work in us is continuous. Every day is an opportunity to be more like Christ.',prg:['How do we cooperate with God in our transformation?','What areas still need to be transformed?','How does transformation impact those around us?'],ora:'Lord, continue to transform us. May we be moldable in Your hands. May our transformation inspire others to seek You. Amen.'},
50:{qg:'What are you most grateful for about this journey together?',ref:'Celebrating together is recognizing God\'s faithfulness. Every step of our journey has been guided by His loving hand.',prg:['What was the greatest learning from this journey?','How has this group impacted your life?','What do you take from here for the future?'],ora:'Father, thank You for this journey together. May the seeds planted bear eternal fruit. May Your love continue to unite and strengthen us. Amen.'}
};

const ENC_BODY_ES = {
1:{qg:'Comparte un momento en que confiaste en Dios y lo viste actuar.',ref:'La confianza no es la ausencia de miedo, sino la certeza de que Dios tiene el control. Cuando le entregamos nuestras preocupaciones, encontramos paz genuina.',prg:['¿Cuál es la diferencia entre confiar en Dios y confiar en nuestras propias fuerzas?','¿Cómo podemos fortalecer nuestra confianza cuando las circunstancias parecen imposibles?','¿Qué promesas de Dios nos ayudan a confiar más profundamente?'],ora:'Señor, ayúdanos a entregar completamente nuestras vidas y preocupaciones a Ti. Fortalece nuestra confianza en Tu carácter fiel y en Tus promesas. Amén.'},
2:{qg:'Comparte un lugar o momento donde sientes paz profunda. ¿Por qué?',ref:'La paz interior no viene de circunstancias perfectas, sino de la presencia de Dios en nuestro corazón. Es un regalo que trasciende la lógica humana.',prg:['¿Cómo distinguir entre paz verdadera y simple ausencia de problemas?','¿Qué prácticas espirituales nos ayudan a cultivar paz interior?','¿Cómo podemos mantener la paz cuando enfrentamos tormentas de la vida?'],ora:'Padre celestial, derrama Tu paz sobre nosotras. Que guarde nuestros corazones y mentes en Cristo, aun cuando el mundo esté en caos. Amén.'},
3:{qg:'¿Cuál es tu forma favorita de orar?',ref:'La oración es conversación íntima con Dios. No se trata de palabras perfectas, sino de un corazón abierto.',prg:['¿Cómo podemos desarrollar una vida de oración consistente en medio de la rutina?','¿Cuál es la diferencia entre oración de petición y oración de adoración?','¿Cómo sabemos que Dios escucha nuestras oraciones?'],ora:'Señor, enséñanos a orar. Abre nuestros corazones para conversar constantemente contigo. Que nuestras oraciones reflejen fe, gratitud y confianza en Tu amor. Amén.'},
4:{qg:'Comparte un momento en que tu esperanza fue renovada cuando todo parecía perdido.',ref:'La esperanza cristiana no es optimismo ingenuo, sino confianza fundamentada en las promesas de Dios.',prg:['¿Cómo diferenciamos esperanza en Dios de esperanza en circunstancias?','¿Qué promesas bíblicas renuevan tu esperanza?','¿Cómo podemos ayudar a otras mujeres a recuperar la esperanza?'],ora:'Señor, renueva nuestra esperanza. Cuando nos sintamos desesperadas, recuérdanos Tus promesas. Que nuestra esperanza en Ti sea contagiosa. Amén.'},
5:{qg:'¿Qué desafío enfrentas ahora? ¿Cómo tu fe te ayuda a perseverar?',ref:'La fe no es un sentimiento pasajero, sino una decisión diaria de confiar en Dios. Perseverar significa continuar cuando es difícil.',prg:['¿Qué significa correr la carrera con perseverancia?','¿Cómo mantenemos el enfoque en Jesús cuando las dificultades nos rodean?','¿Cuál es el papel de la comunidad en nuestra perseverancia?'],ora:'Padre, fortalece nuestra fe para perseverar. Cuando nos cansemos, renueva nuestras fuerzas. Que nunca perdamos de vista a Jesús. Amén.'},
6:{qg:'¿Qué miedo superaste con la ayuda de Dios?',ref:'El miedo es natural, pero no debe dominarnos. Dios nos ofrece poder, amor y discernimiento para vencer cualquier miedo.',prg:['¿Cuál es la diferencia entre miedo sano y miedo paralizante?','¿Cómo el amor de Dios nos libera del miedo?','¿Qué prácticas nos ayudan a confiar cuando tenemos miedo?'],ora:'Señor, líbranos del miedo. Llénanos con Tu poder, Tu amor y Tu discernimiento. Que confiemos en Ti aun cuando tengamos miedo. Amén.'},
7:{qg:'Comparte un momento en que la humildad te ayudó en una relación.',ref:'La humildad no es baja autoestima, sino reconocer que dependemos de Dios. Es fuerza bajo control, no debilidad.',prg:['¿Cómo diferenciamos humildad verdadera de falsa modestia?','¿De qué formas el orgullo nos perjudica espiritualmente?','¿Cómo cultivamos humildad en una cultura que valora la autopromoción?'],ora:'Señor, cultiva en nosotras corazones humildes. Ayúdanos a reconocer nuestra dependencia de Ti y a valorar a los demás. Amén.'},
8:{qg:'Comparte una experiencia de dar generosamente y cómo te sentiste.',ref:'La generosidad es expresión de fe. Cuando damos libremente, reconocemos que todo viene de Dios.',prg:['¿Cómo podemos ser generosas aun cuando tenemos poco?','¿Cuál es la diferencia entre dar por obligación y dar con alegría?','¿Cómo la generosidad nos transforma espiritualmente?'],ora:'Padre, abre nuestros corazones a la generosidad. Que demos con alegría, sabiendo que Tu provisión es suficiente. Amén.'},
9:{qg:'¿Qué meta perseguiste por mucho tiempo antes de alcanzarla?',ref:'La perseverancia no es solo resistencia, sino crecimiento a través de las dificultades.',prg:['¿Cómo vemos las pruebas como oportunidades de crecimiento?','¿Cuál es la diferencia entre perseverancia y terquedad?','¿Cómo nos animamos mutuamente en la perseverancia?'],ora:'Señor, fortalece nuestra perseverancia. Que veamos las dificultades como oportunidades de crecimiento. Que nunca dejemos de seguirte. Amén.'},
10:{qg:'¿Qué significa la santidad para ti? ¿Cómo la vives diariamente?',ref:'Santidad significa estar separada para Dios, viviendo con integridad y pureza. No es perfección, sino búsqueda constante de agradar a Dios.',prg:['¿Cómo entendemos la santidad en un mundo que valora lo opuesto?','¿Qué áreas de nuestras vidas necesitan ser consagradas a Dios?','¿Cómo la santidad nos libera en vez de atarnos?'],ora:'Señor, conságranos para Ti. Que vivamos con integridad y pureza, reflejando Tu carácter santo. Amén.'},
11:{qg:'Comparte un acto de bondad que recibiste y cómo te impactó.',ref:'La bondad es compasión en acción. Cuando somos bondadosas, reflejamos el corazón de Jesús.',prg:['¿Cómo la bondad nos diferencia en un mundo a menudo duro?','¿Cuál es la relación entre bondad y perdón?','¿Cómo podemos ser bondadosas aun con quien nos lastimó?'],ora:'Padre, llena nuestros corazones de bondad genuina. Que veamos las necesidades de los demás y respondamos con compasión. Amén.'},
12:{qg:'¿En qué situación más necesitas ejercer paciencia?',ref:'La paciencia no es pasividad, sino fuerza controlada. Es esperar en el tiempo de Dios sin ansiedad.',prg:['¿Cómo diferenciamos paciencia de resignación?','¿Qué nos ayuda a ser pacientes cuando queremos resultados inmediatos?','¿Cómo la paciencia nos acerca a Dios?'],ora:'Señor, cultiva paciencia en nuestros corazones. Ayúdanos a esperar en Tu tiempo, confiando en Tu sabiduría. Amén.'},
13:{qg:'¿Cómo cambió tu vida desde que aceptaste a Jesús?',ref:'Nuestra identidad no es definida por nuestro pasado, apariencia o logros, sino por quiénes somos en Cristo.',prg:['¿Cómo dejamos atrás la identidad antigua y abrazamos la nueva en Cristo?','¿Cuáles son las características de nuestra identidad en Cristo?','¿Cómo esta identidad nos libera de comparaciones e inseguridades?'],ora:'Señor, ayúdanos a entender profundamente quiénes somos en Cristo. Que nuestra identidad esté enraizada en Tu amor. Amén.'},
14:{qg:'¿Cuál crees que es tu llamado o propósito principal?',ref:'Cada mujer tiene un llamado único de Dios. No se trata de ser como otras, sino de descubrir y cumplir el propósito que Dios tiene para ti.',prg:['¿Cómo descubrimos nuestro llamado?','¿Cómo nuestros dones se relacionan con nuestro llamado?','¿Cómo podemos animarnos mutuamente en nuestros llamados?'],ora:'Padre, revela nuestro llamado. Que usemos nuestros dones para Tu gloria. Que cada una cumpla el propósito que Tú planeaste. Amén.'},
15:{qg:'¿Qué meta te gustaría alcanzar en los próximos años?',ref:'Dios tiene un propósito para nuestras vidas que va más allá de nuestras expectativas.',prg:['¿Cómo diferenciamos nuestros deseos del propósito de Dios?','¿Cómo el propósito de Dios nos trae esperanza?','¿Cómo podemos ayudar a otras mujeres a descubrir su propósito?'],ora:'Señor, alinea nuestros deseos con Tu propósito. Que vivamos con propósito claro y significado profundo. Amén.'},
16:{qg:'¿Qué significa vida abundante para ti?',ref:'Vida abundante no es riqueza material, sino plenitud espiritual. Es vivir con propósito, alegría, paz y relaciones significativas en Cristo.',prg:['¿Cómo diferenciamos vida abundante de éxito mundano?','¿Cuáles son los elementos de una vida verdaderamente abundante?','¿Cómo podemos experimentar abundancia aun en circunstancias difíciles?'],ora:'Señor, llena nuestras vidas de abundancia en Ti. Que experimentemos plenitud espiritual, alegría profunda y paz duradera. Amén.'},
17:{qg:'¿Qué valoras más en una amistad?',ref:'Las amistades saludables son regalos de Dios. Enriquecen nuestras vidas, nos apoyan en dificultades y celebran nuestras victorias.',prg:['¿Cuáles son las características de una amistad saludable?','¿Cómo mantenemos amistades en medio de rutinas ocupadas?','¿Cómo nuestras amistades pueden reflejar el amor de Dios?'],ora:'Señor, bendice nuestras amistades. Ayúdanos a ser amigas leales, pacientes y amorosas. Que nuestras amistades Te glorifiquen. Amén.'},
18:{qg:'Comparte un recuerdo familiar precioso.',ref:'La familia es una institución divina. A pesar de las imperfecciones, Dios usa la familia para moldear nuestro carácter.',prg:['¿Cómo podemos fortalecer nuestros lazos familiares?','¿Cómo lidiamos con conflictos familiares de manera piadosa?','¿Cómo nuestra familia impacta nuestro crecimiento espiritual?'],ora:'Padre, bendice nuestras familias. Sana heridas, restaura relaciones y fortalece lazos de amor. Que nuestros hogares sean lugares de paz y gracia. Amén.'},
19:{qg:'¿Cómo demuestras amor a tu prójimo en el día a día?',ref:'Amar al prójimo es la manifestación más visible del amor a Dios.',prg:['¿Quién es tu prójimo esta semana?','¿Cómo podemos amar a quienes son difíciles de amar?','¿Cuáles son formas prácticas de mostrar amor a quienes nos rodean?'],ora:'Señor, expande nuestra capacidad de amar. Que veamos Tu imagen en cada persona. Que nuestro amor sea práctico, genuino y transformador. Amén.'},
20:{qg:'Comparte una experiencia donde el amor transformó una situación.',ref:'El amor de Dios es transformador. Cambia corazones, restaura relaciones y trae esperanza donde no había ninguna.',prg:['¿Cómo el amor de Dios ha transformado tu vida?','¿Cómo podemos ser agentes del amor transformador de Dios?','¿Qué áreas necesitan ser tocadas por el amor de Dios?'],ora:'Padre, transfórmanos con Tu amor. Que seamos canales de Tu amor para el mundo. Que nuestro amor haga una diferencia. Amén.'},
21:{qg:'¿Qué significa comunión auténtica para ti?',ref:'La comunión auténtica va más allá de reunirse. Involucra transparencia, vulnerabilidad, apoyo mutuo y amor genuino.',prg:['¿Cómo creamos un ambiente de comunión auténtica?','¿Cuáles son las barreras para una comunión genuina?','¿Cómo la comunión fortalece nuestra fe?'],ora:'Señor, profundiza nuestra comunión. Que seamos transparentes y vulnerables unas con otras. Que nuestra comunión refleje el amor de la iglesia primitiva. Amén.'},
22:{qg:'¿En qué área sientes más necesidad de renovación espiritual?',ref:'La renovación espiritual es un proceso continuo. Dios nos invita diariamente a ser transformadas y renovadas en Su presencia.',prg:['¿Cómo se ve la renovación espiritual en la práctica?','¿Qué hábitos nos ayudan a mantenernos renovadas espiritualmente?','¿Cómo reconocemos cuando necesitamos renovación?'],ora:'Señor, renuévanos espiritualmente. Revive nuestra pasión por Ti. Que experimentemos frescura diaria en Tu presencia. Amén.'},
23:{qg:'¿Cómo has crecido espiritualmente en el último año?',ref:'El crecimiento espiritual no es opcional — es el deseo de Dios para cada creyente.',prg:['¿Cuál ha sido tu mayor área de crecimiento espiritual?','¿Qué desafíos han contribuido a tu crecimiento?','¿Cómo podemos animar el crecimiento espiritual de las demás?'],ora:'Padre, ayúdanos a crecer diariamente en Ti. Que nunca nos conformemos con el estancamiento espiritual. Amén.'},
24:{qg:'¿Qué disciplina espiritual ha impactado más tu vida?',ref:'Las disciplinas espirituales son prácticas que nos abren a la obra transformadora de Dios.',prg:['¿Qué disciplinas espirituales practicas regularmente?','¿Cómo las disciplinas nos ayudan en tiempos difíciles?','¿Cómo podemos desarrollar nuevas disciplinas espirituales?'],ora:'Señor, ayúdanos a cultivar disciplinas espirituales. Que no sean cargas, sino caminos gozosos hacia mayor intimidad contigo. Amén.'},
25:{qg:'Comparte un momento en que tomaste una decisión sabia guiada por Dios.',ref:'La sabiduría es más que conocimiento — es la capacidad de aplicar la verdad de Dios a nuestras decisiones diarias.',prg:['¿Cómo buscamos sabiduría en decisiones importantes?','¿Cuál es la diferencia entre sabiduría mundana y sabiduría divina?','¿Cómo la sabiduría nos protege de errores?'],ora:'Señor, danos Tu sabiduría. Que Te busquemos antes de cada decisión. Que nuestras elecciones Te honren y bendigan a otros. Amén.'},
26:{qg:'¿Cómo disciernes la voz de Dios en medio de tantas voces?',ref:'El discernimiento espiritual es un don precioso. Nos ayuda a distinguir verdad de mentira, la voluntad de Dios de nuestros deseos.',prg:['¿Cómo desarrollamos el discernimiento espiritual?','¿Cuáles son señales de que estamos oyendo la voz de Dios?','¿Cómo el discernimiento nos protege del engaño?'],ora:'Señor, agudiza nuestro discernimiento espiritual. Que reconozcamos Tu voz claramente. Que no seamos engañadas sino guiadas por Tu verdad. Amén.'},
27:{qg:'Comparte una decisión difícil que enfrentaste. ¿Cómo la tomaste?',ref:'Tomar decisiones sabias requiere buscar a Dios, escuchar consejo sabio y confiar en la guía del Espíritu Santo.',prg:['¿Cómo equilibramos razón y fe en nuestras decisiones?','¿Cuál es el papel de la oración en la toma de decisiones?','¿Cómo manejamos las consecuencias de nuestras decisiones?'],ora:'Padre, guía nuestras decisiones. Que Te busquemos en cada elección, grande o pequeña. Que nuestras decisiones Te honren. Amén.'},
28:{qg:'¿Por qué estás más agradecida hoy?',ref:'La gratitud transforma nuestra perspectiva. Cuando nos enfocamos en bendiciones en vez de problemas, nuestro corazón se llena de alegría y paz.',prg:['¿Cómo la gratitud cambia nuestra perspectiva diaria?','¿Qué formas prácticas podemos cultivar la gratitud?','¿Cómo la gratitud afecta nuestras relaciones?'],ora:'Señor, llena nuestros corazones de gratitud. Que siempre veamos Tus bendiciones, aun en tiempos difíciles. Amén.'},
29:{qg:'¿Cuál es una pequeña bendición que notaste recientemente?',ref:'La gratitud diaria por las pequeñas cosas transforma nuestra visión espiritual.',prg:['¿Cómo podemos practicar gratitud diariamente?','¿Qué pequeñas bendiciones has notado esta semana?','¿Cómo notar pequeñas bendiciones cambia nuestra perspectiva?'],ora:'Padre, abre nuestros ojos para ver Tus bendiciones diarias. Que cultivemos un corazón agradecido en cada circunstancia. Amén.'},
30:{qg:'¿Qué te trae más alegría?',ref:'La verdadera alegría no depende de las circunstancias. Brota de nuestra relación con Dios y la certeza de Su amor.',prg:['¿Cómo diferenciamos alegría verdadera de felicidad temporal?','¿Qué roba nuestra alegría y cómo la protegemos?','¿Cómo podemos estar alegres aun en las pruebas?'],ora:'Señor, llénanos de Tu alegría. Que no dependamos de circunstancias sino de Tu presencia fiel. Que nuestra alegría sea testimonio al mundo. Amén.'},
31:{qg:'¿Hay alguien a quien necesitas perdonar? ¿Cómo te afecta eso?',ref:'El perdón no es aprobar lo que pasó, sino liberarnos del peso del resentimiento. Es un acto de fe y obediencia.',prg:['¿Cuál es la diferencia entre perdonar y olvidar?','¿Cómo la falta de perdón afecta nuestra vida espiritual?','¿Cómo perdonamos cuando el dolor es demasiado profundo?'],ora:'Señor, ayúdanos a perdonar como Tú nos perdonaste. Líbranos del resentimiento y la amargura. Que el perdón traiga sanación y libertad. Amén.'},
32:{qg:'¿Hay una herida emocional que aún te afecta?',ref:'Dios es el sanador de corazones quebrantados. Cuando le traemos nuestras heridas, Él inicia un proceso de restauración.',prg:['¿Cómo permitimos que Dios sane nuestras heridas emocionales?','¿Cuál es el papel de la comunidad en el proceso de sanación?','¿Cómo sabemos que estamos avanzando hacia la sanación?'],ora:'Padre, sana nuestras heridas emocionales. Toca las áreas más profundas de nuestros corazones. Que Tu sanación sea completa y transformadora. Amén.'},
33:{qg:'¿Qué del pasado necesitas soltar para avanzar?',ref:'La libertad del pasado es un regalo de Dios. Él nos invita a dejar atrás lo que nos ata y caminar hacia lo nuevo.',prg:['¿Cómo soltamos el pasado sin ignorarlo?','¿Qué promesas nos ayudan a avanzar?','¿Cómo la libertad del pasado afecta nuestro presente?'],ora:'Señor, líbranos de las cadenas del pasado. Que caminemos en la libertad que Cristo conquistó. Que el pasado no defina nuestro futuro. Amén.'},
34:{qg:'¿Cómo expresas amor a través del servicio?',ref:'Servir es amar en práctica. Cuando servimos sin esperar nada a cambio, reflejamos el corazón de Jesús.',prg:['¿Cómo podemos servir con amor en nuestra vida diaria?','¿Cuál es la diferencia entre servir por obligación y servir por amor?','¿Cómo el servicio nos transforma?'],ora:'Señor, danos un corazón de siervas. Que sirvamos con alegría y amor, siguiendo el ejemplo de Jesús. Amén.'},
35:{qg:'¿En qué área sientes que fuiste llamada a hacer una diferencia?',ref:'Cada mujer tiene una misión. Dios te colocó donde estás con un propósito — ser luz y sal en tu esfera de influencia.',prg:['¿Cómo descubrimos nuestra misión?','¿Cómo alineamos nuestra misión con el propósito de Dios?','¿Cómo podemos apoyarnos mutuamente en nuestras misiones?'],ora:'Padre, revela nuestra misión. Que seamos valientes para cumplir Tu llamado. Que nuestras vidas hagan una diferencia eterna. Amén.'},
36:{qg:'Comparte alguien que fue transformado por tu influencia.',ref:'Nuestro impacto va más allá de lo que podemos ver. Pequeños gestos de amor y fe pueden transformar vidas.',prg:['¿Cómo podemos tener un impacto positivo en quienes nos rodean?','¿Qué tipo de impacto quieres dejar?','¿Cómo nuestro impacto refleja el reino de Dios?'],ora:'Señor, úsanos como instrumentos de transformación. Que nuestra influencia refleje Tu amor y edifique Tu reino. Amén.'},
37:{qg:'¿En qué momento sentiste la fuerza de Dios más claramente?',ref:'La fuerza de Dios se perfecciona en nuestra debilidad. Cuando reconocemos nuestras limitaciones, Su poder actúa con más eficacia.',prg:['¿Cómo accedemos a la fuerza de Dios en momentos difíciles?','¿Cuál es la diferencia entre fuerza humana y divina?','¿Cómo reconocer la debilidad abre espacio para Dios?'],ora:'Señor, fortalécenos con Tu poder. Cuando seamos débiles, sé nuestra fuerza. Que siempre dependamos de Ti. Amén.'},
38:{qg:'¿Cómo lidias con la adversidad en tu fe?',ref:'La resiliencia espiritual es la capacidad de permanecer firmes en la fe a pesar de la adversidad.',prg:['¿Qué te ayuda a mantenerte firme en la fe durante las tormentas?','¿Cómo la comunidad nos ayuda a construir resiliencia?','¿Qué ejemplos bíblicos de resiliencia te inspiran?'],ora:'Padre, construye en nosotras una fe resiliente. Que la adversidad nos fortalezca en vez de debilitarnos. Amén.'},
39:{qg:'¿Qué obstáculo parecía imposible pero lo superaste?',ref:'Con Dios, ningún obstáculo es insuperable. Él nos da sabiduría, fuerza y coraje para superar cualquier desafío.',prg:['¿Cómo enfrentamos obstáculos con fe?','¿Qué papel juega la oración al superar desafíos?','¿Cómo podemos ayudarnos mutuamente a superar obstáculos?'],ora:'Señor, ayúdanos a superar cada obstáculo. Que no temamos los desafíos sino que los enfrentemos con fe en Tu poder. Amén.'},
40:{qg:'¿Cómo manejas conversaciones difíciles?',ref:'La comunicación honesta es el fundamento de relaciones saludables. Hablar la verdad con amor construye confianza.',prg:['¿Cómo comunicamos honestamente sin herir?','¿Cuál es el papel de escuchar en la comunicación honesta?','¿Cómo la comunicación honesta fortalece las relaciones?'],ora:'Señor, ayúdanos a comunicarnos con honestidad y amor. Que nuestras palabras edifiquen y no destruyan. Amén.'},
41:{qg:'¿Cómo manejas los conflictos en tus relaciones?',ref:'Los conflictos son inevitables, pero cómo los manejamos define nuestro carácter. Dios nos llama a ser pacificadoras.',prg:['¿Qué significa ser pacificadora?','¿Cómo resolvemos conflictos sin comprometer la verdad?','¿Qué papel juega el perdón en la resolución de conflictos?'],ora:'Padre, haznos pacificadoras. Ayúdanos a resolver conflictos con gracia y verdad. Que nuestras relaciones estén marcadas por la reconciliación. Amén.'},
42:{qg:'¿Hay algún área donde necesitas establecer límites más saludables?',ref:'Los límites saludables no son egoísmo — son sabiduría. Protegen nuestro bienestar y nuestra capacidad de servir a Dios.',prg:['¿Cómo establecemos límites sin sentirnos culpables?','¿Por qué los límites son importantes para nuestra salud espiritual?','¿Cómo los límites protegen nuestras relaciones?'],ora:'Señor, danos sabiduría para establecer límites saludables. Que protejamos lo que Tú nos has dado. Amén.'},
43:{qg:'¿Cómo cuidas tu salud física como acto de adoración?',ref:'Nuestro cuerpo es templo del Espíritu Santo. Cuidarlo es un acto de adoración y responsabilidad ante Dios.',prg:['¿Cómo la salud física afecta nuestra vida espiritual?','¿Qué hábitos prácticos podemos adoptar para cuidar nuestro cuerpo?','¿Cómo equilibramos el cuidado del cuerpo sin hacerlo un ídolo?'],ora:'Señor, ayúdanos a cuidar nuestros cuerpos como Tu templo. Que seamos disciplinadas y agradecidas. Amén.'},
44:{qg:'¿Cómo cuidas tu salud emocional?',ref:'La salud emocional es fundamental para una vida espiritual plena. Dios se preocupa por nuestras emociones.',prg:['¿Cómo reconocemos cuando necesitamos ayuda emocional?','¿Cuál es el papel de la fe en la salud emocional?','¿Cómo podemos apoyarnos emocionalmente unas a otras?'],ora:'Padre, sana nuestras emociones. Que seamos honestas sobre nuestros sentimientos y los llevemos a Ti. Amén.'},
45:{qg:'¿Cómo encuentras equilibrio entre actividad y descanso?',ref:'El descanso no es pereza — es un mandato divino. Dios mismo descansó el séptimo día.',prg:['¿Por qué es tan difícil descansar en nuestra cultura?','¿Cómo el descanso nos renueva espiritualmente?','¿Cuáles son formas prácticas de encontrar equilibrio?'],ora:'Señor, enséñanos a descansar en Ti. Que encontremos equilibrio entre actividad y descanso. Amén.'},
46:{qg:'¿Cómo aplicas tu fe en las decisiones cotidianas?',ref:'La fe no es solo para los domingos. Debe permear cada decisión, cada interacción, cada momento de nuestra vida diaria.',prg:['¿Cómo la fe influencia tus elecciones diarias?','¿Cuáles son los desafíos de vivir la fe en lo cotidiano?','¿Cómo podemos ser más intencionales al vivir la fe diariamente?'],ora:'Señor, que nuestra fe sea práctica y presente. Que vivamos para Ti en cada momento. Que nuestra vida diaria sea un acto de adoración. Amén.'},
47:{qg:'¿Qué significa vivir con integridad para ti?',ref:'La integridad es ser la misma persona en público y en privado. Es coherencia entre lo que creemos, decimos y hacemos.',prg:['¿Cuáles son los mayores desafíos para vivir con integridad?','¿Cómo la integridad afecta nuestro testimonio?','¿Cómo mantenemos la integridad bajo presión?'],ora:'Señor, edifica integridad en nosotras. Que seamos consistentes en palabra y acción. Que nuestra integridad sea testimonio de Tu carácter. Amén.'},
48:{qg:'¿Qué estás aprendiendo sobre el contentamiento?',ref:'El verdadero contentamiento no es tenerlo todo, sino encontrar suficiencia en Dios.',prg:['¿Cómo la cultura del consumismo afecta nuestro contentamiento?','¿Qué significa estar contenta en todas las circunstancias?','¿Cómo podemos cultivar el contentamiento?'],ora:'Señor, enséñanos el contentamiento. Que encontremos suficiencia en Ti. Que nuestro contentamiento sea testimonio de que Tú eres suficiente. Amén.'},
49:{qg:'¿En qué área de tu vida estás viendo transformación?',ref:'La obra transformadora de Dios en nosotras es continua. Cada día es una oportunidad de ser más como Cristo.',prg:['¿Cómo cooperamos con Dios en nuestra transformación?','¿Qué áreas aún necesitan ser transformadas?','¿Cómo la transformación impacta a quienes nos rodean?'],ora:'Señor, continúa transformándonos. Que seamos moldeables en Tus manos. Que nuestra transformación inspire a otros a buscarte. Amén.'},
50:{qg:'¿Por qué estás más agradecida de este camino juntas?',ref:'Celebrar juntas es reconocer la fidelidad de Dios. Cada paso de nuestro camino ha sido guiado por Su mano amorosa.',prg:['¿Cuál fue el mayor aprendizaje de este camino?','¿Cómo este grupo ha impactado tu vida?','¿Qué te llevas de aquí para el futuro?'],ora:'Padre, gracias por este camino juntas. Que las semillas plantadas den fruto eterno. Que Tu amor siga uniéndonos y fortaleciéndonos. Amén.'}
};

const QG_BODY_EN = {
1:{obj:'Share how the week was concisely',como:'Each woman chooses one word that sums up her week',dica:'Write the words on a board to create visual connections'},
2:{obj:'Get to know each other in a fun way',como:'Each one says two true facts and one lie about herself. The group guesses which is the lie',dica:'Encourage creative and surprising facts'},
3:{obj:'Share faith through Scripture',como:'Each one shares her favorite verse and why it\'s special',dica:'Have Bibles available for those who want to look up'},
4:{obj:'Practice gratitude collectively',como:'Each woman shares one reason she\'s grateful to God today',dica:'Start with something simple to break the ice'},
5:{obj:'Reveal personality creatively',como:'Each one brings or describes an object that represents who she is',dica:'Can be a photo on the phone if they don\'t have the object'},
6:{obj:'Stimulate daily gratitude',como:'Go around the circle with each sharing what makes her grateful today',dica:'Accept any answer — even "my coffee this morning" is valid'},
7:{obj:'Strengthen faith through personal stories',como:'Each one tells a faith story in up to 1 minute',dica:'Use a timer to keep it fair and dynamic'},
8:{obj:'Share spiritual inspiration',como:'Each one shares a verse that inspires her and explains why',dica:'Write the verses on a board for later reference'},
9:{obj:'Bring fun and self-knowledge',como:'Each one says which animal she would be and explains why',dica:'Encourage creative and humorous answers'},
10:{obj:'Share wisdom and life experience',como:'Each one gives advice to her younger self',dica:'Encourage vulnerability and honesty'},
11:{obj:'Recognize spiritual influences',como:'Each one talks about someone who marked her spiritual journey',dica:'Can be a family member, pastor, friend or mentor'},
12:{obj:'Share culture and personal interests',como:'Each one talks about her favorite book and why',dica:'Include Christian and secular books — both are valid'},
13:{obj:'Share dreams and hopes',como:'Each one shares a dream she has for the future',dica:'Create a safe environment for sharing without judgment'},
14:{obj:'Celebrate continuous learning',como:'Each one shares something new she learned recently',dica:'Can be spiritual, practical or even a fun curiosity'},
15:{obj:'Stimulate creativity and fun',como:'Each one describes what their life movie would be like',dica:'Encourage mention of genre, title and lead actress'},
16:{obj:'Promote fun and self-knowledge',como:'Each one chooses 3 items to take to a desert island',dica:'Stimulate creative and revealing justifications'},
17:{obj:'Promote fun and imagination',como:'Each one chooses a superpower and explains why',dica:'Relate the power to real situations in their life'},
18:{obj:'Break the ice with humor',como:'Each one shares a song she loves but is "embarrassed" about',dica:'Play a few seconds of each if possible'},
19:{obj:'Promote fun and self-knowledge',como:'Each one says which ice cream flavor she would be and why',dica:'Encourage creative and personality-related answers'},
20:{obj:'Bring fun and lighten the mood',como:'Each one shares a useless but funny skill she has',dica:'Demonstrate if possible — laughter is guaranteed'},
21:{obj:'Share meaningful memories',como:'Each one shares her first happy memory',dica:'Be sensitive — not everyone has easy childhood memories'},
22:{obj:'Deepen spiritual sharing',como:'Each one tells a moment when she clearly felt God\'s presence',dica:'Create an atmosphere of respect and reverence'},
23:{obj:'Value family and traditions',como:'Each one shares her favorite family tradition',dica:'Encourage diversity — there are no wrong traditions'},
24:{obj:'Celebrate overcoming and growth',como:'Each one shares a challenge she overcame and what she learned',dica:'Focus on the learning, not just the difficulty'},
25:{obj:'Encourage reflection and nostalgia',como:'Each one shares which day of her life she would relive',dica:'Can be a happy day or a day that changed everything'},
26:{obj:'Value people and relationships',como:'Each one talks about someone she\'d like to meet again',dica:'Can be a friend, family member or acquaintance'},
27:{obj:'Share faith roots',como:'Each one tells about her first memory in church',dica:'Accept various types — funny, moving, simple'},
28:{obj:'Stimulate gratitude to God',como:'Each one shares something specific she wants to thank God for',dica:'Encourage specific rather than generic gratitude'},
29:{obj:'Celebrate God\'s faithfulness',como:'Each one shares something God has done in her life',dica:'It can be recent or a milestone moment from the past'},
30:{obj:'Cultivate hope and vision for the future',como:'Each one shares a seed of hope she carries in her heart',dica:'It can be a dream, promise or expectation'},
31:{obj:'Share dreams and purposes',como:'Each one shares a dream God revealed to her heart',dica:'Create a safe environment — dreams are personal'},
32:{obj:'Release the past and embrace the new',como:'Each one shares what she would leave behind if she could',dica:'Be sensitive — some answers can be deep'},
33:{obj:'Strengthen faith through Scripture',como:'Each one shares a verse for this season of her life',dica:'Can read directly from the Bible or share from memory'},
34:{obj:'Encourage reflection and intentional living',como:'Each one shares what she would put in a time capsule to open in 5 years',dica:'Encourage both material and symbolic items'},
35:{obj:'Celebrate God\'s surprises',como:'Each one shares how God surprised her in an unexpected way',dica:'God\'s surprises are not always what we expect'},
36:{obj:'Share spiritual learning',como:'Each one shares something she learned directly from God',dica:'It can be through the Bible, prayer or circumstances'},
37:{obj:'Value interpersonal learning',como:'Each one shares something she learned from someone else',dica:'Encourage recognizing the influence of others'},
38:{obj:'Encourage and edify',como:'Each one shares a word of encouragement for the group',dica:'Can be a verse, phrase or personal testimony'},
39:{obj:'Deepen biblical knowledge',como:'Each one shares a lesson she learned from the Bible recently',dica:'Focus on practical application, not just theory'},
40:{obj:'Reflect on core values',como:'Each one shares her most important value and why',dica:'Encourage reflecting on why that value is essential'},
41:{obj:'Bring fun and personality',como:'Each one shares her favorite animal and explains why',dica:'Relate the animal to personality traits'},
42:{obj:'Stimulate growth and flexibility',como:'Each one shares a belief she changed over time',dica:'Be respectful — changing beliefs is a sign of maturity'},
43:{obj:'Celebrate individuality',como:'Each one shares what she considers her unique superpower',dica:'Help the shy ones recognize their qualities'},
44:{obj:'Inspire and motivate',como:'Each one talks about who inspires her and why',dica:'It can be someone famous, biblical or from daily life'},
45:{obj:'Self-knowledge and identity',como:'Each one shares a phrase or mantra that defines her',dica:'Can be a verse, saying or personal creation'},
46:{obj:'Build community and belonging',como:'Each one offers a word for the group to carry',dica:'End with a round of prayer with the shared words'},
47:{obj:'Encourage reflection on learning',como:'Each one shares what she takes from the meeting today',dica:'Encourage specific answers instead of generic ones'},
48:{obj:'Encourage love and care',como:'Each one says a wish for the sister next to her',dica:'Go around the circle in order for everyone to participate'},
49:{obj:'Check emotional state of the group',como:'Each one shares in one word how she feels right now',dica:'Create a safe space — all emotions are valid'},
50:{obj:'Practice edification and love',como:'Each one offers a sincere compliment to someone in the group',dica:'Make sure everyone receives at least one compliment'}
};

const QG_BODY_ES = {
1:{obj:'Compartir cómo fue la semana de forma concisa',como:'Cada mujer elige una palabra que resuma su semana',dica:'Escribe las palabras en un cuadro para crear conexiones visuales'},
2:{obj:'Conocerse de forma divertida',como:'Cada una dice dos hechos verdaderos y una mentira sobre sí misma. El grupo adivina cuál es la mentira',dica:'Anima hechos creativos y sorprendentes'},
3:{obj:'Compartir la fe a través de la Escritura',como:'Cada una comparte su versículo favorito y por qué es especial',dica:'Ten Biblias disponibles para quienes quieran buscar'},
4:{obj:'Practicar gratitud colectivamente',como:'Cada mujer comparte un motivo de gratitud a Dios hoy',dica:'Comienza con algo simple para romper el hielo'},
5:{obj:'Revelar personalidad creativamente',como:'Cada una trae o describe un objeto que la represente',dica:'Puede ser una foto en el celular si no tiene el objeto'},
6:{obj:'Estimular gratitud diaria',como:'En ronda, cada una comparte qué la hace agradecida hoy',dica:'Acepta cualquier respuesta — incluso "mi café de esta mañana" es válido'},
7:{obj:'Fortalecer la fe a través de historias personales',como:'Cada una cuenta una historia de fe en hasta 1 minuto',dica:'Usa un temporizador para mantenerlo justo y dinámico'},
8:{obj:'Compartir inspiración espiritual',como:'Cada una comparte un versículo que la inspira y explica por qué',dica:'Escribe los versículos en un pizarrón para referencia posterior'},
9:{obj:'Traer diversión y autoconocimiento',como:'Cada una dice qué animal sería y explica por qué',dica:'Anima respuestas creativas y humorísticas'},
10:{obj:'Compartir sabiduría y experiencia de vida',como:'Cada una da un consejo a su yo más joven',dica:'Anima la vulnerabilidad y honestidad'},
11:{obj:'Reconocer influencias espirituales',como:'Cada una habla de alguien que marcó su camino espiritual',dica:'Puede ser un familiar, pastor, amiga o mentora'},
12:{obj:'Compartir cultura e intereses personales',como:'Cada una habla de su libro favorito y por qué',dica:'Incluye libros cristianos y seculares — ambos son válidos'},
13:{obj:'Compartir sueños y esperanzas',como:'Cada una comparte un sueño que tiene para el futuro',dica:'Crea un ambiente seguro para compartir sin juicio'},
14:{obj:'Celebrar el aprendizaje continuo',como:'Cada una comparte algo nuevo que aprendió recientemente',dica:'Puede ser espiritual, práctico o una curiosidad divertida'},
15:{obj:'Estimular creatividad y diversión',como:'Cada una describe cómo sería la película de su vida',dica:'Anima a mencionar género, título y actriz principal'},
16:{obj:'Promover diversión y autoconocimiento',como:'Cada una elige 3 objetos para llevar a una isla desierta',dica:'Estimula justificaciones creativas y reveladoras'},
17:{obj:'Promover diversión e imaginación',como:'Cada una elige un superpoder y explica por qué',dica:'Relaciona el poder con situaciones reales de su vida'},
18:{obj:'Romper el hielo con humor',como:'Cada una comparte una canción que ama pero le da "vergüenza"',dica:'Pon unos segundos de cada una si es posible'},
19:{obj:'Promover diversión y autoconocimiento',como:'Cada una dice qué sabor de helado sería y por qué',dica:'Anima respuestas creativas y relacionadas con la personalidad'},
20:{obj:'Traer diversión y aligerar el ambiente',como:'Cada una comparte una habilidad inútil pero divertida que tiene',dica:'¡Demuéstrala si es posible — la risa está garantizada!'},
21:{obj:'Compartir memorias significativas',como:'Cada una comparte su primer recuerdo feliz',dica:'Sé sensible — no todos tienen recuerdos fáciles de la infancia'},
22:{obj:'Profundizar el compartir espiritual',como:'Cada una cuenta un momento en que sintió claramente la presencia de Dios',dica:'Crea un ambiente de respeto y reverencia'},
23:{obj:'Valorar la familia y las tradiciones',como:'Cada una comparte su tradición familiar favorita',dica:'Anima la diversidad — no hay tradiciones equivocadas'},
24:{obj:'Celebrar la superación y el crecimiento',como:'Cada una comparte un desafío que superó y lo que aprendió',dica:'Enfócate en el aprendizaje, no solo en la dificultad'},
25:{obj:'Fomentar reflexión y nostalgia',como:'Cada una comparte qué día de su vida reviviría',dica:'Puede ser un día feliz o un día que cambió todo'},
26:{obj:'Valorar personas y relaciones',como:'Cada una habla de alguien que le gustaría reencontrar',dica:'Puede ser una amiga, familiar o conocida'},
27:{obj:'Compartir raíces de fe',como:'Cada una cuenta su primer recuerdo en la iglesia',dica:'Acepta varios tipos — divertidos, conmovedores, simples'},
28:{obj:'Estimular gratitud a Dios',como:'Cada una comparte algo específico que quiere agradecer a Dios',dica:'Anima gratitud específica en vez de genérica'},
29:{obj:'Celebrar la fidelidad de Dios',como:'Cada una comparte algo que Dios ha hecho en su vida',dica:'Puede ser reciente o un momento marcante del pasado'},
30:{obj:'Cultivar esperanza y visión de futuro',como:'Cada una comparte una semilla de esperanza que lleva en su corazón',dica:'Puede ser un sueño, promesa o expectativa'},
31:{obj:'Compartir sueños y propósitos',como:'Cada una comparte un sueño que Dios reveló a su corazón',dica:'Crea un ambiente seguro — los sueños son personales'},
32:{obj:'Soltar el pasado y abrazar lo nuevo',como:'Cada una comparte qué dejaría en el pasado si pudiera',dica:'Sé sensible — algunas respuestas pueden ser profundas'},
33:{obj:'Fortalecer la fe a través de la Escritura',como:'Cada una comparte un versículo para esta estación de su vida',dica:'Puede leer directamente de la Biblia o compartir de memoria'},
34:{obj:'Fomentar reflexión y vida intencional',como:'Cada una comparte qué pondría en una cápsula del tiempo para abrir en 5 años',dica:'Anima elementos tanto materiales como simbólicos'},
35:{obj:'Celebrar las sorpresas de Dios',como:'Cada una comparte cómo Dios la sorprendió de forma inesperada',dica:'Las sorpresas de Dios no siempre son lo que esperamos'},
36:{obj:'Compartir aprendizaje espiritual',como:'Cada una comparte algo que aprendió directamente de Dios',dica:'Puede ser a través de la Biblia, oración o circunstancias'},
37:{obj:'Valorar el aprendizaje interpersonal',como:'Cada una comparte algo que aprendió de otra persona',dica:'Anima a reconocer la influencia de los demás'},
38:{obj:'Animar y edificar',como:'Cada una comparte una palabra de ánimo para el grupo',dica:'Puede ser un versículo, frase o testimonio personal'},
39:{obj:'Profundizar conocimiento bíblico',como:'Cada una comparte una lección que aprendió de la Biblia recientemente',dica:'Enfócate en la aplicación práctica, no solo en la teoría'},
40:{obj:'Reflexionar sobre valores esenciales',como:'Cada una comparte su valor más importante y por qué',dica:'Anima a reflexionar sobre por qué ese valor es esencial'},
41:{obj:'Traer diversión y personalidad',como:'Cada una comparte su animal favorito y explica por qué',dica:'Relaciona el animal con rasgos de personalidad'},
42:{obj:'Estimular crecimiento y flexibilidad',como:'Cada una comparte una creencia que cambió con el tiempo',dica:'Sé respetuosa — cambiar creencias es señal de madurez'},
43:{obj:'Celebrar la individualidad',como:'Cada una comparte lo que considera su superpoder único',dica:'Ayuda a las tímidas a reconocer sus cualidades'},
44:{obj:'Inspirar y motivar',como:'Cada una habla de quién la inspira y por qué',dica:'Puede ser alguien famoso, bíblico o del día a día'},
45:{obj:'Autoconocimiento e identidad',como:'Cada una comparte una frase o mantra que la define',dica:'Puede ser un versículo, dicho o creación personal'},
46:{obj:'Construir comunidad y pertenencia',como:'Cada una ofrece una palabra para que el grupo lleve consigo',dica:'Termina con una ronda de oración con las palabras compartidas'},
47:{obj:'Fomentar reflexión sobre aprendizaje',como:'Cada una comparte qué se lleva del encuentro de hoy',dica:'Anima respuestas específicas en vez de genéricas'},
48:{obj:'Fomentar amor y cuidado',como:'Cada una dice un deseo para la hermana de al lado',dica:'Haz una ronda en orden para que todas participen'},
49:{obj:'Verificar estado emocional del grupo',como:'Cada una comparte en una palabra cómo se siente ahora',dica:'Crea un espacio seguro — todas las emociones son válidas'},
50:{obj:'Practicar edificación y amor',como:'Cada una ofrece un elogio sincero a alguien del grupo',dica:'Asegúrate de que todas reciban al menos un elogio'}
};

const PERG_EN = {
'p1':'How would you describe your faith journey in recent months?','p2':'What verse has been guiding your heart recently?','p3':'How do you find time to be alone with God?','p4':'What has God been teaching you about trust?','p5':'What area of your life do you feel you need to surrender more to God?','p6':'If you could ask God one question today, what would it be?','p7':'What evidence of God\'s goodness did you see this week?','p8':'In what difficult moment did you feel God closest?','p9':'How does knowing who you are in Christ change your self-image?','p10':'Which fruit of the Spirit do you most want to develop?',
'p11':'What have you been learning to thank God for recently?','p12':'How do you set aside moments to hear God\'s voice?','p13':'How do you see God using your gifts?','p14':'Which biblical promise sustains you in hard times?','p15':'Is there something God is working on in your heart right now?','p16':'How have you been showing Christ\'s love to those around you?','p17':'How has God\'s Word been transforming your way of thinking?','p18':'What is the greatest challenge of your spiritual life today?','p19':'How does eternity influence your daily decisions?','p20':'What spiritual mark would you like to leave on people?',
'p21':'What was the greatest lesson you learned this year?','p22':'What habit would you like to develop to grow as a person?','p23':'What recent moment brought joy to your heart?','p24':'What challenge helped you mature?','p25':'How do you react when you face frustrations?','p26':'What quality of yours do you believe God wants to use more?','p27':'What usually renews your emotional strength?','p28':'What advice would you give your self from five years ago?','p29':'What inspires you most about the people around you?','p30':'How do you deal with insecurities?',
'p31':'Who was a person who marked your life in a positive way?','p32':'What do you value most in a true friendship?','p33':'How do you demonstrate love to those close to you?','p34':'Is there a relationship that God is restoring in your life?','p35':'How can we better support each other?','p36':'What attitude strengthens fellowship among women?','p37':'What have you learned about forgiveness?','p38':'How do you react when someone disagrees with you?','p39':'What kind of friendship do you want to cultivate?','p40':'How can we create more welcoming meetings?',
'p41':'What are you most grateful for in this phase of life?','p42':'What small blessing did you notice recently?','p43':'What memory always brings joy to your heart?','p44':'How does gratitude change your way of seeing challenges?','p45':'What has God already done in your life that you never want to forget?','p46':'Which biblical promise brings you hope today?','p47':'How do you find hope in difficult moments?','p48':'What does it mean to trust in God\'s timing?','p49':'How can we better celebrate each other\'s victories?','p50':'What reason for gratitude would you like to share today?',
'p51':'In what area do you feel God has been calling you to serve?','p52':'How do you see your gifts being used to bless others?','p53':'What brings the most meaning to your life right now?','p54':'How would you like to impact other women\'s lives?','p55':'What dream do you believe God placed in your heart?','p56':'What has been holding you back from moving toward your purpose?','p57':'What experience deeply marked your spiritual walk?','p58':'How can we support each other in our callings?','p59':'What legacy would you like to leave?','p60':'How do you define a life with purpose?',
'p61':'How do you include God in everyday decisions?','p62':'What helps you keep faith in difficult times?','p63':'What spiritual practice strengthens your walk?','p64':'How do you find peace amid worries?','p65':'What experience strengthened your trust in God?','p66':'What have you been learning about patience?','p67':'How do you seek wisdom when making important decisions?','p68':'What testimony of faith recently marked your life?','p69':'How do you react when something doesn\'t go as planned?','p70':'How does faith influence your daily choices?',
'p71':'What area of your spiritual life do you most want to develop right now?','p72':'What helps you maintain discipline in your spiritual life?','p73':'How do you find motivation to seek God daily?','p74':'What book or verse most impacted your faith?','p75':'What spiritual habit would you like to strengthen?','p76':'What have you recently learned about trusting God?','p77':'How do you see God working in your life today?','p78':'What does spiritual maturity mean to you?','p79':'How can you encourage other women in faith?','p80':'What most strengthens your communion with God?',
'p81':'What moment of your life most strengthened your faith?','p82':'What has God been speaking to your heart recently?','p83':'How do you find meaning in life\'s difficulties?','p84':'What do you feel you need to surrender to God today?','p85':'What word summarizes your spiritual walk right now?','p86':'How do you see God\'s faithfulness in your story?','p87':'What helps you stand firm in faith?','p88':'Which biblical promise sustains your hope?','p89':'How can we grow together as a group?','p90':'What do you wish for the future of your spiritual walk?',
'p91':'What are you learning about God\'s love?','p92':'What recent experience strengthened your faith?','p93':'What does it mean to trust God in all things?','p94':'What biblical teaching most impacts your life today?','p95':'How do you cultivate gratitude daily?','p96':'What strengthens your hope in difficult moments?','p97':'What testimony of faith would you like to share?','p98':'How do you see God guiding your steps right now?','p99':'What has God been teaching you in this phase of life?','p100':'How can we support each other in prayer?'
};

const PERG_ES = {
'p1':'¿Cómo describirías tu jornada de fe en los últimos meses?','p2':'¿Qué versículo ha estado guiando tu corazón recientemente?','p3':'¿Cómo encuentras tiempo para estar a solas con Dios?','p4':'¿Qué te ha estado enseñando Dios sobre la confianza?','p5':'¿Qué área de tu vida sientes que necesitas entregar más a Dios?','p6':'Si pudieras hacerle una pregunta a Dios hoy, ¿cuál sería?','p7':'¿Qué evidencia de la bondad de Dios viste esta semana?','p8':'¿En qué momento difícil sentiste a Dios más cerca?','p9':'¿Cómo saber quién eres en Cristo cambia tu forma de verte?','p10':'¿Qué fruto del Espíritu deseas desarrollar más?',
'p11':'¿Por qué has aprendido a agradecer a Dios recientemente?','p12':'¿Cómo separas momentos para escuchar la voz de Dios?','p13':'¿Cómo percibes que Dios usa tus dones?','p14':'¿Qué promesa bíblica te sostiene en momentos difíciles?','p15':'¿Hay algo que Dios está tratando en tu corazón actualmente?','p16':'¿Cómo has demostrado el amor de Cristo a las personas a tu alrededor?','p17':'¿Cómo la Palabra de Dios ha transformado tu forma de pensar?','p18':'¿Cuál es el mayor desafío de tu vida espiritual hoy?','p19':'¿Cómo la eternidad influencia tus decisiones diarias?','p20':'¿Qué marca espiritual te gustaría dejar en las personas?',
'p21':'¿Cuál fue el mayor aprendizaje que tuviste este año?','p22':'¿Qué hábito te gustaría desarrollar para crecer como persona?','p23':'¿Qué momento reciente trajo alegría a tu corazón?','p24':'¿Qué desafío te ayudó a madurar?','p25':'¿Cómo reaccionas cuando enfrentas frustraciones?','p26':'¿Qué cualidad tuya crees que Dios quiere usar más?','p27':'¿Qué suele renovar tus fuerzas emocionales?','p28':'¿Qué consejo le darías a tu versión de hace cinco años?','p29':'¿Qué te inspira más de las personas a tu alrededor?','p30':'¿Cómo lidias con las inseguridades?',
'p31':'¿Quién fue una persona que marcó tu vida de forma positiva?','p32':'¿Qué valoras más en una amistad verdadera?','p33':'¿Cómo demuestras amor a las personas cercanas?','p34':'¿Existe alguna relación que Dios está restaurando en tu vida?','p35':'¿Cómo podemos apoyarnos mejor unas a otras?','p36':'¿Qué actitud fortalece la comunión entre mujeres?','p37':'¿Qué has aprendido sobre el perdón?','p38':'¿Cómo reaccionas cuando alguien no está de acuerdo contigo?','p39':'¿Qué tipo de amistad deseas cultivar?','p40':'¿Cómo podemos crear encuentros más acogedores?',
'p41':'¿Por qué estás más agradecida en esta fase de la vida?','p42':'¿Qué pequeña bendición notaste recientemente?','p43':'¿Qué recuerdo siempre trae alegría a tu corazón?','p44':'¿Cómo la gratitud cambia tu forma de ver los desafíos?','p45':'¿Qué ha hecho Dios en tu vida que nunca quieres olvidar?','p46':'¿Qué promesa bíblica te trae esperanza hoy?','p47':'¿Cómo encuentras esperanza en momentos difíciles?','p48':'¿Qué significa confiar en el tiempo de Dios?','p49':'¿Cómo podemos celebrar mejor las victorias de unas y otras?','p50':'¿Qué motivo de gratitud te gustaría compartir hoy?',
'p51':'¿En qué área sientes que Dios te ha llamado a servir?','p52':'¿Cómo percibes que tus dones son usados para bendecir a otros?','p53':'¿Qué trae más sentido a tu vida actualmente?','p54':'¿Cómo te gustaría impactar la vida de otras mujeres?','p55':'¿Qué sueño crees que Dios puso en tu corazón?','p56':'¿Qué te ha impedido avanzar hacia tu propósito?','p57':'¿Qué experiencia marcó profundamente tu camino espiritual?','p58':'¿Cómo podemos apoyarnos unas a otras en nuestros llamados?','p59':'¿Qué legado te gustaría dejar?','p60':'¿Cómo defines una vida con propósito?',
'p61':'¿Cómo incluyes a Dios en las decisiones del día a día?','p62':'¿Qué te ayuda a mantener la fe en tiempos difíciles?','p63':'¿Qué práctica espiritual fortalece tu caminar?','p64':'¿Cómo encuentras paz en medio de las preocupaciones?','p65':'¿Qué experiencia fortaleció tu confianza en Dios?','p66':'¿Qué has estado aprendiendo sobre la paciencia?','p67':'¿Cómo buscas sabiduría al tomar decisiones importantes?','p68':'¿Qué testimonio de fe marcó tu vida recientemente?','p69':'¿Cómo reaccionas cuando algo no sale como planeado?','p70':'¿Cómo la fe influencia tus elecciones diarias?',
'p71':'¿Qué área de tu vida espiritual más deseas desarrollar en este momento?','p72':'¿Qué te ayuda a mantener disciplina en la vida espiritual?','p73':'¿Cómo encuentras motivación para buscar a Dios diariamente?','p74':'¿Qué libro o versículo más impactó tu fe?','p75':'¿Qué hábito espiritual te gustaría fortalecer?','p76':'¿Qué has aprendido recientemente sobre confiar en Dios?','p77':'¿Cómo percibes a Dios trabajando en tu vida hoy?','p78':'¿Qué significa madurar espiritualmente para ti?','p79':'¿Cómo puedes animar a otras mujeres en la fe?','p80':'¿Qué más fortalece tu comunión con Dios?',
'p81':'¿Qué momento de tu vida más fortaleció tu fe?','p82':'¿Qué ha estado hablando Dios a tu corazón recientemente?','p83':'¿Cómo encuentras sentido en las dificultades de la vida?','p84':'¿Qué sientes que necesitas entregar a Dios hoy?','p85':'¿Qué palabra resume tu caminar espiritual actualmente?','p86':'¿Cómo percibes la fidelidad de Dios en tu historia?','p87':'¿Qué te ayuda a permanecer firme en la fe?','p88':'¿Qué promesa bíblica sostiene tu esperanza?','p89':'¿Cómo podemos crecer juntas como grupo?','p90':'¿Qué deseas para el futuro de tu caminar espiritual?',
'p91':'¿Qué estás aprendiendo sobre el amor de Dios?','p92':'¿Qué experiencia reciente fortaleció tu fe?','p93':'¿Qué significa confiar en Dios en todas las cosas?','p94':'¿Qué enseñanza bíblica más impacta tu vida hoy?','p95':'¿Cómo cultivas gratitud diariamente?','p96':'¿Qué fortalece tu esperanza en momentos difíciles?','p97':'¿Qué testimonio de fe te gustaría compartir?','p98':'¿Cómo percibes a Dios guiando tus pasos actualmente?','p99':'¿Qué te ha estado enseñando Dios en esta fase de la vida?','p100':'¿Cómo podemos apoyarnos unas a otras en oración?'
};

const DEV_BODY_EN = {
1:{ref:'God takes care of every detail of your life. He knows your worries, your needs, and your deepest pains. Today, choose to trust that He holds everything.\n\nWhen we release our anxieties to God, we make room for His peace to fill our hearts.',perg:'What worry do you need to release to God today?',apl:'Write on paper a concern and symbolically place it in God\'s hands through prayer.',ora:'Lord, I know You care for me. I release my worries today and trust Your provision. Guard my heart with Your peace. Amen.'},
2:{ref:'Just as a plant blooms where it\'s planted, God wants you to flourish where you are. Your current season has a divine purpose.\n\nEven when the soil seems difficult, God provides everything you need to grow and bear fruit.',perg:'How can you bloom in the place where God placed you today?',apl:'Identify one area of your current life where you can invest more and bear fruit.',ora:'Lord, help me bloom where You planted me. May I be grateful for this season and grow in Your love. Amen.'},
3:{ref:'God\'s timing is perfect, even when it doesn\'t match ours. Waiting is not wasted time — it\'s preparation time.\n\nEvery season of waiting has a purpose. God is working even when we can\'t see it.',perg:'In what area do you need to trust more in God\'s timing?',apl:'Choose a situation where you\'re anxious about timing and daily surrender it to God in prayer.',ora:'Father, help me trust Your timing. I know You are working even in my waiting. Give me patience and faith to rest in Your plan. Amen.'},
4:{ref:'Gratitude is more than a feeling — it\'s a spiritual discipline that transforms our vision. When we choose to be grateful, we see the world through God\'s lens.\n\nEven small blessings, when noticed, reveal the greatness of God.',perg:'What are you most grateful for today? How does this gratitude transform your day?',apl:'Start a gratitude journal. Write 3 things you\'re grateful for each day this week.',ora:'Lord, open my eyes to see Your blessings. Transform my heart with gratitude. May my life be a constant act of thanksgiving. Amen.'},
5:{ref:'When our strength runs out, God\'s begins. He doesn\'t just restore what we lost — He gives new strength that surpasses the old.\n\nGod\'s renewal is not just repair — it\'s transformation. He makes us stronger than before.',perg:'In what area do you need God to renew your strength?',apl:'Identify an area of exhaustion in your life. Spend 10 minutes in silence, asking God for renewal.',ora:'Lord, renew my strength. When I am weak, be my power. Transform my exhaustion into strength to serve You. Amen.'},
6:{ref:'In God\'s presence, there is fullness of joy and perfect rest. Sometimes the best thing we can do is simply be still before Him.\n\nRest is not laziness — it\'s trust. It\'s knowing that God works even when we stop.',perg:'How have you rested in God\'s presence recently?',apl:'Separate 15 minutes today to be in silence before God, without asking for anything — just being in His presence.',ora:'Father, teach me to rest in You. May I find peace in Your presence. May my rest be an act of trust in Your sovereignty. Amen.'},
7:{ref:'God created you with a unique purpose. Your life has meaning beyond what you can see. Living with purpose means aligning every choice with God\'s will.\n\nPurpose is not found in great achievements, but in daily faithfulness to what God has called you to do.',perg:'How can you live with more purpose starting today?',apl:'Write your personal purpose statement based on what God has placed in your heart. Review it daily.',ora:'Lord, reveal my purpose. May I live intentionally, aligned with Your will. May every day be lived with eternal meaning. Amen.'}
};

const DEV_BODY_ES = {
1:{ref:'Dios cuida de cada detalle de tu vida. Él conoce tus preocupaciones, tus necesidades y tus dolores más profundos. Hoy, elige confiar en que Él sostiene todo.\n\nCuando soltamos nuestras ansiedades a Dios, hacemos espacio para que Su paz llene nuestros corazones.',perg:'¿Qué preocupación necesitas soltar a Dios hoy?',apl:'Escribe en un papel una preocupación y simbólicamente ponla en las manos de Dios a través de la oración.',ora:'Señor, sé que cuidas de mí. Suelto mis preocupaciones hoy y confío en Tu provisión. Guarda mi corazón con Tu paz. Amén.'},
2:{ref:'Así como una planta florece donde está plantada, Dios quiere que florezcas donde estás. Tu temporada actual tiene un propósito divino.\n\nAun cuando el suelo parezca difícil, Dios provee todo lo que necesitas para crecer y dar fruto.',perg:'¿Cómo puedes florecer en el lugar donde Dios te plantó hoy?',apl:'Identifica un área de tu vida actual donde puedes invertir más y dar fruto.',ora:'Señor, ayúdame a florecer donde me plantaste. Que sea agradecida por esta temporada y crezca en Tu amor. Amén.'},
3:{ref:'El tiempo de Dios es perfecto, aun cuando no coincide con el nuestro. Esperar no es tiempo perdido — es tiempo de preparación.\n\nCada temporada de espera tiene un propósito. Dios está trabajando aun cuando no podemos verlo.',perg:'¿En qué área necesitas confiar más en el tiempo de Dios?',apl:'Elige una situación donde estás ansiosa por el tiempo y entrégala diariamente a Dios en oración.',ora:'Padre, ayúdame a confiar en Tu tiempo. Sé que estás trabajando aun en mi espera. Dame paciencia y fe para descansar en Tu plan. Amén.'},
4:{ref:'La gratitud es más que un sentimiento — es una disciplina espiritual que transforma nuestra visión. Cuando elegimos ser agradecidas, vemos el mundo a través del lente de Dios.\n\nIncluso las pequeñas bendiciones, cuando se notan, revelan la grandeza de Dios.',perg:'¿Por qué estás más agradecida hoy? ¿Cómo esta gratitud transforma tu día?',apl:'Comienza un diario de gratitud. Escribe 3 cosas por las que estás agradecida cada día esta semana.',ora:'Señor, abre mis ojos para ver Tus bendiciones. Transforma mi corazón con gratitud. Que mi vida sea un acto constante de acción de gracias. Amén.'},
5:{ref:'Cuando nuestra fuerza se acaba, la de Dios comienza. Él no solo restaura lo que perdimos — da nueva fuerza que supera la anterior.\n\nLa renovación de Dios no es solo reparación — es transformación. Nos hace más fuertes que antes.',perg:'¿En qué área necesitas que Dios renueve tus fuerzas?',apl:'Identifica un área de agotamiento en tu vida. Dedica 10 minutos en silencio, pidiendo a Dios renovación.',ora:'Señor, renueva mis fuerzas. Cuando sea débil, sé mi poder. Transforma mi agotamiento en fuerza para servirte. Amén.'},
6:{ref:'En la presencia de Dios hay plenitud de gozo y descanso perfecto. A veces lo mejor que podemos hacer es simplemente estar quietas ante Él.\n\nEl descanso no es pereza — es confianza. Es saber que Dios trabaja aun cuando paramos.',perg:'¿Cómo has descansado en la presencia de Dios recientemente?',apl:'Separa 15 minutos hoy para estar en silencio ante Dios, sin pedir nada — solo estar en Su presencia.',ora:'Padre, enséñame a descansar en Ti. Que encuentre paz en Tu presencia. Que mi descanso sea un acto de confianza en Tu soberanía. Amén.'},
7:{ref:'Dios te creó con un propósito único. Tu vida tiene significado más allá de lo que puedes ver. Vivir con propósito significa alinear cada elección con la voluntad de Dios.\n\nEl propósito no se encuentra en grandes logros, sino en la fidelidad diaria a lo que Dios te llamó a hacer.',perg:'¿Cómo puedes vivir con más propósito a partir de hoy?',apl:'Escribe tu declaración de propósito personal basada en lo que Dios puso en tu corazón. Revísala diariamente.',ora:'Señor, revela mi propósito. Que viva intencionalmente, alineada con Tu voluntad. Que cada día sea vivido con significado eterno. Amén.'}
};



const EST_BODY_EN = {
1:{ref:'God\'s goodness is unconditional. It flows constantly, touching everyone\'s life regardless of merit. Recognizing this truth transforms our perspective on daily blessings.',prg:['How have you experienced God\'s goodness this week?','What difficulties make it hard to see His goodness?','How can we reflect this goodness to other women?'],apl:'This week, practice recognizing at least one manifestation of God\'s goodness per day and write it in your journal.'},
2:{ref:'Trusting God in difficult times requires faith that goes beyond understanding. It means surrendering control and believing that He is working even when we cannot see it.',prg:['What is the biggest challenge to trusting God when things go wrong?','How can we strengthen our trust during trials?','Share a time when trusting God made a difference in a difficult situation.'],apl:'Identify a current difficulty. Write Proverbs 3:5 and place it somewhere visible. Read it daily as a declaration of trust.'},
3:{ref:'Prayer is not just asking — it is connecting with the Creator. When we bring everything to God with thanksgiving, His peace guards our hearts in ways we cannot explain.',prg:['How has prayer changed a situation in your life?','What makes it difficult to maintain a consistent prayer life?','How can we encourage each other in prayer?'],apl:'Set aside 10 minutes daily this week for focused prayer. Write down what you prayed for and observe God\'s answers.'},
4:{ref:'Perseverance in faith is not running aimlessly. It requires focus, discipline, and keeping our eyes on the eternal prize that God has prepared for us.',prg:['What helps you persevere when faith feels difficult?','How do you stay focused on God\'s purposes?','Share an experience where perseverance bore fruit.'],apl:'Identify an area where you\'ve been tempted to give up. Commit to persevering this week with renewed focus.'},
5:{ref:'Gratitude is not just a feeling — it is a spiritual discipline. When we choose to give thanks in all circumstances, our hearts are transformed and we see God\'s hand everywhere.',prg:['How has gratitude changed your perspective on a difficult situation?','What blessings do we often take for granted?','How can cultivating gratitude change our community?'],apl:'Write 5 things you are grateful for today. Share at least one with someone to spread the culture of gratitude.'},
6:{ref:'The joy of the Lord is different from happiness based on circumstances. It is a deep, abiding sense of well-being that comes from knowing God is in control.',prg:['How do you find joy even in difficult seasons?','What is the difference between joy and happiness?','How can we be sources of joy for others?'],apl:'Choose a worship song that fills you with joy. Listen to it daily this week and let it transform your atmosphere.'},
7:{ref:'Forgiveness frees us from the chains of resentment. When we confess and forgive, we open the door for God\'s restoration in our lives and relationships.',prg:['Is there someone you need to forgive today?','How has God\'s forgiveness changed your life?','What makes forgiveness so challenging?'],apl:'Pray about a situation that requires forgiveness. Take a concrete step toward reconciliation or release this week.'},
8:{ref:'Our true identity is not found in achievements, failures, or what the world says. It is found in Christ, where we are beloved daughters of God with unshakable value.',prg:['How does your identity in Christ affect your self-esteem?','How does recognizing this new identity transform your relationships?','What "old things" have passed away and what "new things" have come in your life?'],apl:'Write 5 affirmations of who you are in Christ and read them aloud every morning for a week.'},
9:{ref:'Christ\'s love is our greatest example. He didn\'t just talk about love — He demonstrated it sacrificially. This love calls us to go beyond words and act on behalf of others.',prg:['What are the challenges of practicing sacrificial love daily?','Think of someone who showed you sacrificial love. How did it impact you?','How can we love the women in our group sacrificially?'],apl:'Choose one person and practice a genuine, sacrificial act of love this week.'},
10:{ref:'The hope we have in God is a safe harbor amid life\'s uncertainties. Unlike human hope that can fail, hope in Christ is firm and sustains us, promising a secure and eternal future.',prg:['In what area does your hope need to be renewed?','How do you share hope with others?'],apl:'Think of an area where hope seems weakened. Ask God to renew your faith and share a testimony of hope with someone.'},
11:{ref:'True humility frees us from the weight of pride. It enables us to serve others genuinely, recognizing that every good gift comes from God.',prg:['What are the biggest barriers to cultivating humility?','How does humility transform your service?','Share a moment when acting with humility brought freedom.'],apl:'This week, do an anonymous act of service — without anyone knowing it was you.'},
12:{ref:'Divine peace is not the absence of problems, but an inner tranquility that sustains us despite them. Unlike worldly peace, God\'s peace springs from a secure relationship with Him.',prg:['How do you differentiate God\'s peace from the peace the world offers?','In what turbulent situations were you able to experience this peace?','How can we seek and cultivate this peace daily?'],apl:'Dedicate a few minutes each day to meditation and prayer, focusing on God\'s presence.'},
13:{ref:'True faith is not passive; it manifests in concrete actions that reflect our love and obedience to God. To truly believe means to act according to what we believe.',prg:['How has your faith manifested in concrete actions recently?','What area of your life needs more active faith?'],apl:'Identify one area where you can express your faith more actively this week.'},
14:{ref:'Genuine fellowship requires vulnerability and transparency. When we open up and share our struggles, we build bonds of trust that allow God\'s power to work in our healing.',prg:['How can we create a safe environment for women to share their weaknesses?','Have you experienced healing through another woman\'s prayer?'],apl:'Choose a friend from the group and share something you need prayer for, allowing her to pray for you.'},
15:{ref:'The Christian life is a journey of constant renewal. Even amid challenges, our spiritual essence can be strengthened daily by God\'s grace.',prg:['What spiritual practices do you find most effective for daily renewal?','How can we encourage each other in this pursuit of renewal?'],apl:'Think of a new routine you can incorporate to foster your spiritual renewal.'},
16:{ref:'Divine wisdom elevates us above worldly understanding, enabling us to discern God\'s ways in all situations. It guides us to make choices that honor Him.',prg:['In what areas do you feel the greatest need for divine wisdom?','How does God\'s wisdom differ from what the world offers?','Share an experience where seeking divine wisdom made a difference.'],apl:'Identify a difficult decision and bring it to God in prayer, specifically asking for His wisdom.'},
17:{ref:'Weakness is not an obstacle for God, but a stage for His glory. When we acknowledge our limitations, we make room for Christ\'s power to work in us.',prg:['In what area do you feel weakest or most incapable?','How can God use that weakness for His glory?'],apl:'Identify an area where you feel weak. Surrender that weakness to God in prayer.'},
18:{ref:'Generosity directly reflects God\'s character. When we give, we not only bless others but also mirror God\'s love and abundance in our lives.',prg:['What are the main barriers that keep us from being more generous?','How does God\'s generosity manifest in your life today?'],apl:'Think of a person or cause you can bless. Commit to a selfless act of generosity this week.'},
19:{ref:'The faith journey requires patience and a long-term vision. Often discouragement tries to steal our strength, but in perseverance we experience God\'s faithfulness.',prg:['How have you dealt with discouragement in your faith walk?','What strategies do you use to cultivate perseverance?'],apl:'Identify a specific area where you need more patience. Ask God for wisdom and strength to persevere.'},
20:{ref:'God, in His infinite wisdom, has a unique and personal purpose for every woman. Discovering and aligning with this calling fills us with meaning.',prg:['How do you see God\'s purpose manifesting in your life?','How do our gifts and talents connect with our calling?'],apl:'Reflect on the passions and talents God gave you. How can you use them to fulfill His purpose today?'},
21:{ref:'God, in His infinite compassion, is the only one capable of bringing deep healing to our wounded emotions. Recognizing our vulnerability is the first step.',prg:['How have you allowed God to heal your emotional wounds?','What role does community play in the healing process?'],apl:'Choose an emotional wound you\'ve been carrying and bring it to God in prayer. Ask Him to begin the healing process.'},
22:{ref:'Integrity is the foundation of trust, and honesty is its expression. Living with integrity in all areas reflects Christ\'s character in us.',prg:['What are the biggest challenges to living with honesty and integrity today?','How can your integrity impact those around you?','How can we strengthen ourselves to maintain integrity under pressure?'],apl:'Evaluate an area of your life where you can live with greater integrity. Commit to total honesty this week.'},
23:{ref:'Love for neighbor is the most visible manifestation of love for God. When we extend kindness and compassion, we are honoring God.',prg:['Who is your "neighbor" this week?','How can we love those who are difficult to love?'],apl:'Identify someone in need. Demonstrate practical and genuine love this week.'},
24:{ref:'True contentment doesn\'t come from circumstances, but from deep trust in God. Recognizing His sovereignty frees us from the endless pursuit of more.',prg:['How does consumerism pull us away from contentment?','How does current culture influence our perception of "having enough"?','Share an experience where you found contentment without having "everything."'],apl:'Identify an area of discontentment. Practice gratitude for what you already have.'},
25:{ref:'Spiritual transformation is not a single event, but a continuous process of becoming more like Christ. The Holy Spirit progressively molds us.',prg:['How do you perceive transformation in your life over time?','What area do you want to see greater transformation in?'],apl:'Identify an area where you desire deeper transformation. Pray specifically for this change.'},
26:{ref:'God\'s faithfulness is an unshakable foundation, constant and reliable through generations. It is a safe refuge in all life\'s circumstances.',prg:['How have you experienced God\'s faithfulness in your story?','How does sharing testimonies encourage other women?'],apl:'Recognize God\'s faithfulness in your own story and share a testimony to encourage others.'},
27:{ref:'The courage that comes from God is not the absence of fear, but the presence of faith and trust in His power. He equips us with inner strength.',prg:['Identify a specific fear you currently face.','How can you seek courage in Christ to face it?','Share an experience where faith helped you be courageous.'],apl:'Commit to taking a small step this week to face a fear, supported by the promise that God is with you.'},
28:{ref:'Abundant life in Christ is not about material goods, but fullness of peace, purpose, and joy that transcends circumstances.',prg:['How do you define "abundant life" in spiritual terms?','In what area do you desire more fullness in Christ?'],apl:'Explore an area where you desire more fullness in Christ. Pray for Him to guide you in that area.'},
29:{ref:'Our faith is not just for the present; it builds a foundation for those who come after us. We are called to leave a lasting legacy.',prg:['What legacy of faith do you want to leave?','How are you intentionally transmitting your faith?'],apl:'Identify a person to whom you want to intentionally transmit your faith. Think of a practical action to do this week.'},
30:{ref:'The spiritual journey deserves celebration. Every step of faith, every obstacle overcome, every prayer answered is reason to rejoice and give thanks.',prg:['What are the greatest victories of your spiritual journey?','How can we celebrate together as a group?','What do you want to thank God for at this moment?'],apl:'Write a letter of gratitude to God celebrating your spiritual journey. Share one point with the group.'}
};

const EST_BODY_ES = {
1:{ref:'La bondad de Dios no es condicional. Fluye constantemente, tocando la vida de todos, independientemente del mérito. Reconocer esta verdad transforma nuestra perspectiva.',prg:['¿Cómo has experimentado la bondad de Dios esta semana?','¿Qué dificultades dificultan ver Su bondad?','¿Cómo podemos reflejar esa bondad a otras mujeres?'],apl:'Esta semana, practica reconocer al menos una manifestación de la bondad de Dios por día y anótala.'},
2:{ref:'Confiar en Dios en tiempos difíciles requiere una fe que va más allá del entendimiento. Significa entregar el control y creer que Él está obrando.',prg:['¿Cuál es el mayor desafío para confiar en Dios cuando las cosas van mal?','¿Cómo podemos fortalecer nuestra confianza durante las pruebas?','Comparte un momento en que confiar en Dios hizo la diferencia.'],apl:'Identifica una dificultad actual. Escribe Proverbios 3:5 y colócalo donde lo veas. Léelo diariamente como declaración de confianza.'},
3:{ref:'La oración no es solo pedir — es conectarse con el Creador. Cuando traemos todo a Dios con acción de gracias, Su paz guarda nuestros corazones.',prg:['¿Cómo la oración cambió una situación en tu vida?','¿Qué dificulta mantener una vida de oración consistente?','¿Cómo podemos animarnos mutuamente en la oración?'],apl:'Separa 10 minutos diarios esta semana para oración enfocada. Anota por qué oraste y observa las respuestas de Dios.'},
4:{ref:'La perseverancia en la fe no es correr sin rumbo. Requiere enfoque, disciplina y mantener los ojos en el premio eterno que Dios preparó.',prg:['¿Qué te ayuda a perseverar cuando la fe se siente difícil?','¿Cómo te mantienes enfocada en los propósitos de Dios?','Comparte una experiencia donde la perseverancia dio fruto.'],apl:'Identifica un área donde has sido tentada a rendirte. Comprométete a perseverar esta semana con enfoque renovado.'},
5:{ref:'La gratitud no es solo un sentimiento — es una disciplina espiritual. Cuando elegimos dar gracias en toda circunstancia, nuestros corazones son transformados.',prg:['¿Cómo la gratitud cambió tu perspectiva sobre una situación difícil?','¿Qué bendiciones solemos dar por sentadas?','¿Cómo cultivar gratitud puede cambiar nuestra comunidad?'],apl:'Escribe 5 cosas por las que estás agradecida hoy. Comparte al menos una con alguien.'},
6:{ref:'El gozo del Señor es diferente de la felicidad basada en circunstancias. Es un sentido profundo de bienestar que viene de saber que Dios tiene el control.',prg:['¿Cómo encuentras gozo incluso en temporadas difíciles?','¿Cuál es la diferencia entre gozo y felicidad?','¿Cómo podemos ser fuentes de gozo para otros?'],apl:'Elige una canción de adoración que te llene de gozo. Escúchala diariamente esta semana.'},
7:{ref:'El perdón nos libera de las cadenas del resentimiento. Cuando confesamos y perdonamos, abrimos la puerta para la restauración de Dios.',prg:['¿Hay alguien a quien necesitas perdonar hoy?','¿Cómo el perdón de Dios cambió tu vida?','¿Qué hace el perdón tan desafiante?'],apl:'Ora sobre una situación que requiere perdón. Da un paso concreto hacia la reconciliación esta semana.'},
8:{ref:'Nuestra verdadera identidad no se encuentra en logros o fracasos. Se encuentra en Cristo, donde somos hijas amadas de Dios con valor inquebrantable.',prg:['¿Cómo tu identidad en Cristo afecta tu autoestima?','¿Cómo reconocer esta nueva identidad transforma tus relaciones?','¿Qué "cosas viejas" han pasado y cuáles "nuevas" se hicieron en tu vida?'],apl:'Escribe 5 afirmaciones de quién eres en Cristo y léelas en voz alta cada mañana durante una semana.'},
9:{ref:'El amor de Cristo es nuestro mayor ejemplo. No solo habló de amor, sino que lo demostró sacrificialmente. Este amor nos llama a ir más allá de las palabras.',prg:['¿Cuáles son los desafíos de practicar el amor sacrificial diariamente?','Piensa en alguien que te mostró amor sacrificial. ¿Cómo te impactó?','¿Cómo podemos amar sacrificialmente a las mujeres de nuestro grupo?'],apl:'Elige una persona y practica un gesto de amor genuino y sacrificial esta semana.'},
10:{ref:'La esperanza en Dios es un puerto seguro en medio de las incertidumbres. A diferencia de la esperanza humana, la esperanza en Cristo es firme y nos sostiene.',prg:['¿En qué área tu esperanza necesita ser renovada?','¿Cómo compartes esperanza con otros?'],apl:'Piensa en un área donde la esperanza parece debilitada. Pide a Dios que renueve tu fe y comparte un testimonio de esperanza.'},
11:{ref:'La verdadera humildad nos libera del peso del orgullo. Nos capacita para servir genuinamente, reconociendo que todo buen don viene de Dios.',prg:['¿Cuáles son las mayores barreras para cultivar la humildad?','¿Cómo la humildad transforma tu servicio?','Comparte un momento en que actuar con humildad trajo libertad.'],apl:'Esta semana, haz un acto de servicio anónimo — sin que nadie sepa que fuiste tú.'},
12:{ref:'La paz divina no es la ausencia de problemas, sino una tranquilidad interior que nos sostiene a pesar de ellos.',prg:['¿Cómo diferencias la paz de Dios de la paz que el mundo ofrece?','¿En qué situaciones turbulentas pudiste experimentar esta paz?','¿Cómo podemos buscar y cultivar esta paz diariamente?'],apl:'Dedica unos minutos cada día a la meditación y oración, enfocándote en la presencia de Dios.'},
13:{ref:'La fe verdadera no es pasiva; se manifiesta en acciones concretas que reflejan nuestro amor y obediencia a Dios.',prg:['¿Cómo tu fe se ha manifestado en acciones concretas recientemente?','¿Qué área de tu vida necesita una fe más activa?'],apl:'Identifica un área donde puedes expresar tu fe de forma más activa esta semana.'},
14:{ref:'La comunión genuina requiere vulnerabilidad y transparencia. Al abrirnos, construimos lazos de confianza que permiten que el poder de Dios obre en nuestra sanación.',prg:['¿Cómo podemos crear un ambiente seguro para que las mujeres compartan sus debilidades?','¿Has experimentado sanación a través de la oración de otra mujer?'],apl:'Elige una amiga del grupo y comparte algo por lo que necesitas oración, permitiendo que ore por ti.'},
15:{ref:'La vida cristiana es un viaje de renovación constante. Incluso ante los desafíos, nuestra esencia espiritual puede ser fortalecida diariamente por la gracia de Dios.',prg:['¿Qué prácticas espirituales consideras más efectivas para tu renovación diaria?','¿Cómo podemos animarnos mutuamente en esta búsqueda de renovación?'],apl:'Piensa en una nueva rutina que puedas incorporar para fomentar tu renovación espiritual.'},
16:{ref:'La sabiduría divina nos eleva por encima de la comprensión mundana, permitiéndonos discernir los caminos de Dios en todas las situaciones.',prg:['¿En qué áreas sientes mayor necesidad de sabiduría divina?','¿Cómo la sabiduría de Dios se diferencia de la que el mundo ofrece?','Comparte una experiencia donde buscar sabiduría divina hizo la diferencia.'],apl:'Identifica una decisión difícil y llévala a Dios en oración, pidiendo específicamente Su sabiduría.'},
17:{ref:'La debilidad no es un obstáculo para Dios, sino un escenario para Su gloria. Cuando reconocemos nuestras limitaciones, hacemos espacio para el poder de Cristo.',prg:['¿En qué área te sientes más débil o incapaz?','¿Cómo puede Dios usar esa debilidad para Su gloria?'],apl:'Identifica un área de debilidad. Entrega esa debilidad a Dios en oración.'},
18:{ref:'La generosidad refleja directamente el carácter divino. Cuando damos, no solo bendecimos a otros sino que reflejamos el amor de Dios.',prg:['¿Cuáles son las principales barreras que nos impiden ser más generosas?','¿Cómo la generosidad de Dios se manifiesta en tu vida hoy?'],apl:'Piensa en una persona o causa que puedas bendecir. Comprométete con un acto de generosidad desinteresada esta semana.'},
19:{ref:'El camino de la fe exige paciencia y visión a largo plazo. El desánimo intenta robarnos la fuerza, pero en la perseverancia experimentamos la fidelidad de Dios.',prg:['¿Cómo has lidiado con el desánimo en tu caminar de fe?','¿Qué estrategias usas para cultivar la perseverancia?'],apl:'Identifica un área específica donde necesitas ejercitar más paciencia. Pide a Dios sabiduría y fuerza para perseverar.'},
20:{ref:'Dios tiene un propósito único y personal para cada mujer. Descubrir y alinearse con ese llamado nos llena de significado.',prg:['¿Cómo ves el propósito de Dios manifestándose en tu vida?','¿Cómo nuestros dones y talentos se conectan con nuestro llamado?'],apl:'Reflexiona sobre las pasiones y talentos que Dios te dio. ¿Cómo puedes usarlos para cumplir Su propósito hoy?'},
21:{ref:'Dios, en Su infinita compasión, es el único capaz de traer sanación profunda a nuestras emociones heridas.',prg:['¿Cómo has permitido que Dios sane tus heridas emocionales?','¿Cuál es el papel de la comunidad en el proceso de sanación?'],apl:'Elige una herida emocional que has cargado y llévala a Dios en oración. Pídele que inicie el proceso de sanación.'},
22:{ref:'La integridad es la base de la confianza y la honestidad es su expresión. Vivir con integridad refleja el carácter de Cristo en nosotras.',prg:['¿Cuáles son los mayores desafíos para vivir con honestidad e integridad hoy?','¿Cómo tu integridad puede impactar a las personas a tu alrededor?','¿Cómo podemos fortalecernos para mantener la integridad bajo presión?'],apl:'Evalúa un área donde puedas vivir con mayor integridad. Comprométete a actuar con total honestidad esta semana.'},
23:{ref:'El amor al prójimo es la manifestación más visible del amor a Dios. Al extender bondad y compasión, estamos honrando a Dios.',prg:['¿Quién es tu "prójimo" esta semana?','¿Cómo podemos amar a quienes son difíciles de amar?'],apl:'Identifica a alguien en necesidad. Demuestra amor de forma práctica y genuina esta semana.'},
24:{ref:'El verdadero contentamiento no brota de las circunstancias, sino de una profunda confianza en Dios. Reconocer Su soberanía nos libera de la búsqueda incesante.',prg:['¿Cómo el consumismo nos aleja del contentamiento?','¿Cómo la cultura actual influencia nuestra percepción de "tener suficiente"?','Comparte una experiencia donde encontraste contentamiento sin tener "todo".'],apl:'Identifica un área de descontento. Practica la gratitud por lo que ya tienes.'},
25:{ref:'La transformación espiritual no es un evento único, sino un proceso continuo de volvernos más semejantes a Cristo.',prg:['¿Cómo percibes la transformación en tu vida a lo largo del tiempo?','¿En qué área deseas ver mayor transformación?'],apl:'Identifica un área donde deseas una transformación más profunda. Ora específicamente por ese cambio.'},
26:{ref:'La fidelidad de Dios es un fundamento inquebrantable, constante y confiable a través de las generaciones.',prg:['¿Cómo has experimentado la fidelidad de Dios en tu historia?','¿Cómo compartir testimonios anima a otras mujeres?'],apl:'Reconoce la fidelidad de Dios en tu propia historia y comparte un testimonio para animar a otros.'},
27:{ref:'La valentía que viene de Dios no es la ausencia de miedo, sino la presencia de fe y confianza en Su poder.',prg:['Identifica un miedo específico que enfrentas actualmente.','¿Cómo puedes buscar valentía en Cristo para enfrentarlo?','Comparte una experiencia donde la fe te ayudó a ser valiente.'],apl:'Comprométete a dar un pequeño paso esta semana para enfrentar un miedo, apoyada en la promesa de que Dios está contigo.'},
28:{ref:'La vida abundante en Cristo no se trata de bienes materiales, sino de plenitud de paz, propósito y gozo que trasciende las circunstancias.',prg:['¿Cómo defines "vida abundante" en términos espirituales?','¿En qué área deseas experimentar más plenitud en Cristo?'],apl:'Explora un área donde deseas más plenitud en Cristo. Ora para que Él te guíe en esa área.'},
29:{ref:'Nuestra fe no es solo para el presente; construye un fundamento para quienes vienen después. Somos llamadas a dejar un legado duradero.',prg:['¿Qué legado de fe deseas dejar?','¿Cómo estás transmitiendo tu fe intencionalmente?'],apl:'Identifica una persona a quien deseas transmitir tu fe intencionalmente. Piensa en una acción práctica para esta semana.'},
30:{ref:'El camino espiritual merece celebración. Cada paso de fe, cada obstáculo superado, cada oración respondida es motivo de gozo y gratitud.',prg:['¿Cuáles son las mayores victorias de tu caminar espiritual?','¿Cómo podemos celebrar juntas como grupo?','¿Qué quieres agradecer a Dios en este momento?'],apl:'Escribe una carta de gratitud a Dios celebrando tu caminar espiritual. Comparte un punto con el grupo.'}
};

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
  if(q) r = r.filter(e =>
    e.titulo.toLowerCase().includes(q.toLowerCase()) ||
    e.categoria.toLowerCase().includes(q.toLowerCase())
  );
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
function carregarHistoricoEnc(){ try{ const h=localStorage.getItem(STORAGE_KEY_HIST_ENC()); historicoEnc=h?JSON.parse(h):[]; }catch(e){ historicoEnc=[]; } }
function salvarHistoricoEnc(){ try{ localStorage.setItem(STORAGE_KEY_HIST_ENC(), JSON.stringify(historicoEnc)); }catch(e){} }

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
  if(q) list = list.filter(qg=>qg.titulo.toLowerCase().includes(q.toLowerCase())||qg.objetivo.toLowerCase().includes(q.toLowerCase()));
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
  const r = q ? estudos30.filter(e=>
    e.titulo.toLowerCase().includes(q.toLowerCase()) ||
    e.versiculo.toLowerCase().includes(q.toLowerCase())
  ) : estudos30;
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
  if(q) list = list.filter(p=>p.pergunta.toLowerCase().includes(q)||p.categoriaLabel.toLowerCase().includes(q));
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
function isFavPergunta(id){ try{ const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon'; const f=JSON.parse(localStorage.getItem('fav_perguntas_'+email)||'[]'); return f.includes(String(id)); }catch(e){return false;} }
function toggleFavPergunta(id){
  try{
    const email = usuarioAtual?.email || usuarioAtual?.nome || 'anon';
    const key='fav_perguntas_'+email;
    let f=JSON.parse(localStorage.getItem(key)||'[]');
    const sid = String(id);
    if(f.includes(sid)){
      confirmarDesfavoritar(()=>{
        f=f.filter(x=>x!==sid);
        localStorage.setItem(key,JSON.stringify(f));
        toastMsg(t('toast.fav.rm'));
        const btn=document.getElementById('pfav-'+id);
        if(btn) btn.textContent='🤍';
      });
    } else {
      f.push(sid);
      localStorage.setItem(key,JSON.stringify(f));
      toastMsg(t('toast.fav.add'));
      const btn=document.getElementById('pfav-'+id);
      if(btn) btn.textContent='❤️';
    }
  }catch(e){}
}

// Favoritos de Encontros Completos
function isFavEncontro(id){ try{ return JSON.parse(localStorage.getItem('fav_encontros_'+(usuarioAtual?.email||''))||'[]').includes(id); }catch(e){return false;} }
function toggleFavEncontroDetalhe(){
  if(!currentEncDetail) return;
  const id = currentEncDetail.id;
  const key = 'fav_encontros_'+(usuarioAtual?.email||'');
  try{
    let f = JSON.parse(localStorage.getItem(key)||'[]');
    if(f.includes(id)){
      confirmarDesfavoritar(()=>{
        f = f.filter(x=>x!==id);
        localStorage.setItem(key, JSON.stringify(f));
        toastMsg(t('toast.fav.rm'));
        atualizarBtnFavEncontro(id);
        renderFavoritos();
      });
    } else {
      f.push(id);
      localStorage.setItem(key, JSON.stringify(f));
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
function isFavQG(id){ try{ return JSON.parse(localStorage.getItem('fav_qgelos_'+(usuarioAtual?.email||''))||'[]').includes(id); }catch(e){return false;} }
function toggleFavQGDetalhe(){
  if(!currentQGDetail) return;
  const id = currentQGDetail.id;
  const key = 'fav_qgelos_'+(usuarioAtual?.email||'');
  try{
    let f = JSON.parse(localStorage.getItem(key)||'[]');
    if(f.includes(id)){
      confirmarDesfavoritar(()=>{
        f = f.filter(x=>x!==id);
        localStorage.setItem(key, JSON.stringify(f));
        toastMsg(t('toast.fav.rm'));
        atualizarBtnFavQG(id);
        renderFavoritos();
      });
    } else {
      f.push(id);
      localStorage.setItem(key, JSON.stringify(f));
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

function sortPatchNotes(lista) {
  return [...lista].sort((a, b) => new Date(b.data) - new Date(a.data));
}

function carregarPatchNotes() {
  try {
    const salvas = JSON.parse(localStorage.getItem(STORAGE_PATCH_ADMIN) || '[]');

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
    localStorage.setItem(STORAGE_PATCH_ADMIN, JSON.stringify(PATCH_NOTES));
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
    adminNotes = JSON.parse(localStorage.getItem('patch_notes_admin_v1') || '[]');
  } catch(e) {
    adminNotes = [];
  }

  const todas = [...PATCH_NOTES, ...adminNotes];

  const mapa = new Map();
  todas.forEach(p => {
    const id = p.id || `v${String(p.versao).replaceAll('.', '_')}`;
    mapa.set(id, p);
  });

  const listaFinal = [...mapa.values()].sort((a, b) => new Date(b.data) - new Date(a.data));

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

    const ultimaVista = localStorage.getItem('patch_notes_last_seen');

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
      localStorage.setItem('patch_notes_last_seen', latest.versao);
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


// 2. Tentar restaurar sessão
(function(){
  try{
    const savedEmail = localStorage.getItem(STORAGE_KEY_AUTH);
    if(savedEmail && USUARIOS[savedEmail]){
      usuarioAtual = {...USUARIOS[savedEmail], email: savedEmail};
      entrarNoApp();
      return; // entrarNoApp() já faz carregarStorage, render, etc.
    }
  }catch(e){}
  // 3. Sem sessão — mostra login, esconde nav e FABs
  document.getElementById('app').style.opacity = '0';
  const nav = document.getElementById('bottom-nav');
  if(nav) nav.style.display = 'none';
  const wfab = document.getElementById('whatsapp-fab');
  if(wfab) wfab.style.display = 'none';
  // Render inicial para quando fizer login manual
  carregarStorage();
  renderDinamicas(dinamicas);renderFavoritos();renderPlanos();
  const _fcl=document.getElementById('fav-count-label'); if(_fcl) _fcl.textContent=`${favorites.length} salvos`;
  document.getElementById('painel-dinamica').style.flexDirection='column';
})();
aplicarIdioma();