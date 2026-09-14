const bibleTexts = [
  {
    text: "Não viva ansioso pelo amanhã; concentre-se no dia de hoje.",
    reference: "Mateus 6:34"
  },
  {
    text: "Trate as outras pessoas da maneira como você gostaria de ser tratado.",
    reference: "Mateus 7:12"
  },
  {
    text: "Ame seus inimigos e ore por aqueles que fazem mal a você.",
    reference: "Mateus 5:44"
  },
  {
    text: "Não sejam dominados pela ansiedade; apresentem suas preocupações a Deus em oração e gratidão.",
    reference: "Filipenses 4:6e7"
  },

  {
    text: "Não se conforme simplesmente com os padrões deste mundo; transforme sua maneira de pensar.",
    reference: "Romanos 12:2"
  },

  {
    text: "Não desista de fazer o bem, porque no momento certo haverá uma colheita.",
    reference: "Gálatas 6:9"
  },

  {
    text: "Tudo o que fizer, faça de coração, como se estivesse fazendo para o Senhor.",
    reference: "Colossenses 3:23"
  },

    {
    text: "Deus não nos deu um espírito de medo, mas de poder, amor e equilíbrio.",
    reference: "2 Timóteo 1:7"
  },

  {
    text: "O justo cai sete vezes e se levanta.",
    reference: "Provérbios 24:16"
  },

  {
    text: "Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida.",
    reference: "Provérbios 4:23"
  },

  {
    text: "Perdoem, e vocês serão perdoados.",
    reference: "Lucas 6:37"
  },

  {
    text: "Há um tempo certo para tudo, e há uma ocasião para cada propósito debaixo do céu: tempo de nascer e tempo de morrer, tempo de plantar e tempo de arrancar o que se plantou, tempo de chorar e tempo de rir, tempo de prantear e tempo de dançar.",
    reference: "Eclesiastes 3:1-4"
  },

  {
    text: "Seja forte e corajoso. Não tenha medo, nem desanime.",
    reference: "Josué 1:9"
  },

  {
    text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    reference: "Provérbios 3:5"
  },

  {
    text: "Bem-aventurados os pobres de espírito, pois deles é o Reino dos céus. Bem-aventurados os que choram, pois serão consolados. Bem-aventurados os mansos, pois herdarão a terra. Bem-aventurados os que têm fome e sede de justiça, pois serão satisfeitos.",
    reference: "Mateus 5:3-6"
  },

  {
    text: "Vós sois a luz do mundo. Não se pode esconder uma cidade construída sobre um monte. Assim brilhe a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus.",
    reference: "Mateus 5:14-16"
  },

  {
    text: "Por isso vos digo: não andeis ansiosos pela vossa vida, quanto ao que haveis de comer ou beber, nem pelo vosso corpo, quanto ao que haveis de vestir. Não é a vida mais importante que o alimento, e o corpo mais importante que as roupas",
    reference: "Mateus 6:25-27"
  },

  {
    text: "Não andeis, pois, inquietos, dizendo: Que comeremos? Que beberemos? Ou: Com que nos vestiremos? Buscai primeiro o Reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas. Portanto, não vos preocupeis com o amanhã, pois o amanhã trará as suas próprias preocupações.",
    reference: "Mateus 6:31-34"
  },

  {
    text: "Pedi, e vos será dado; buscai, e encontrareis; batei, e a porta vos será aberta. Pois todo aquele que pede recebe, quem busca encontra, e a quem bate, a porta será aberta. Se vós, sendo maus, sabeis dar boas coisas aos vossos filhos, quanto mais o vosso Pai dará boas coisas aos que lhe pedirem",
    reference: "Mateus 7:7-11"
  },

  {
    text: "Pois estou convencido de que nem a morte nem a vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação poderá nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
    reference: "Romanos 8:38-39"
  },

  {
    text: "Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplica, com ação de graças, apresentai os vossos pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:6-7"
  },

  {
    text: "O amor deve ser sincero. Detestai o mal; apegai-vos ao bem. Dedicai-vos uns aos outros com amor fraternal. Nunca vos falte o zelo, sede fervorosos no espírito, servi ao Senhor. Alegrai-vos na esperança, sede pacientes na tribulação e perseverai na oração.",
    reference: "Romanos 12:9-12"
  },

  {
    text: "Mas o fruto do Espírito é amor, alegria, paz, paciência, benignidade, bondade, fidelidade, mansidão e domínio próprio. Contra essas coisas não há lei.",
    reference: "Gálatas 5:22-23"
  },

  {
    text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura os seus próprios interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
    reference: "1 Coríntios 13:4-7"
  },

  {
    text: "Aprendi a adaptar-me a toda e qualquer circunstância. Sei o que é passar necessidade e sei o que é ter fartura. Aprendi o segredo de viver contente em toda e qualquer situação, seja bem alimentado, seja com fome. Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:11-13"
  },

  {
    text: "O Senhor é o meu pastor; nada me faltará. Em verdes pastagens me faz repousar e me conduz a águas tranquilas. Refrigera a minha alma e guia-me pelas veredas da justiça por amor do seu nome. Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.",
    reference: "Salmos 23:1-4"
  },

  {
    text: "Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reference: "Provérbios 3:5-6"
  },

  {
    text: "Deixo-vos a paz; a minha paz vos dou. Eu não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem tenha medo.",
    reference: "João 14:27"
  },

  {
    text: "Não andeis, pois, inquietos, dizendo: Que comeremos? Que beberemos? Ou: Com que nos vestiremos? Buscai primeiro o Reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas. Portanto, não vos preocupeis com o amanhã, pois o amanhã trará as suas próprias preocupações.",
    reference: "Mateus 6:31-34"
  },

  {
    text: "Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplica, com ação de graças, apresentai os vossos pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:6-7"
  },

  {
    text: "Pois estou convencido de que nem a morte nem a vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação poderá nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
    reference: "Romanos 8:38-39"
  },

  {
    text: "O Senhor é o meu pastor; nada me faltará. Em verdes pastagens me faz repousar e me conduz a águas tranquilas. Refrigera a minha alma e guia-me pelas veredas da justiça por amor do seu nome. Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.",
    reference: "Salmos 23:1-4"
  },

]

export default bibleTexts