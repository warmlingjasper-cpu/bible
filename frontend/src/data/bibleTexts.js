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

  {
    text: "Senhor, até quantas vezes pecará meu irmão contra mim, e eu lhe perdoarei? Até sete? Jesus lhe disse: Não te digo que até sete; mas, até setenta vezes sete.",
    reference: "Mateus 18:21-22"
  },

    {
    text: "Entrega o teu caminho ao Senhor; confia nele, e ele agirá. Aquieta o coração e espera nele com confiança.",
    reference: "Salmos 37:5-7"
  },

  {
    text: "Aquele que habita no esconderijo do Altíssimo e descansa à sombra do Todo-Poderoso pode encontrar segurança mesmo quando as circunstâncias ao redor parecem ameaçadoras.",
    reference: "Salmos 91:1-2"
  },

  {
    text: "Lança sobre o Senhor aquilo que te preocupa, e ele te sustentará. Não carregues sozinho aquilo que pode ser entregue a Deus.",
    reference: "Salmos 55:22"
  },

  {
    text: "Espera no Senhor; sê forte, anima o teu coração e continua esperando nele. Nem sempre a resposta chega no momento que desejamos.",
    reference: "Salmos 27:14"
  },

  {
    text: "O Senhor está perto dos que têm o coração quebrantado e salva aqueles que perderam suas forças. Mesmo nos momentos de maior fragilidade, você não está abandonado.",
    reference: "Salmos 34:18"
  },

  {
    text: "Prova-me, ó Deus, e conhece o meu coração; vê se há em mim algum caminho que precisa ser corrigido e guia-me pelo caminho eterno.",
    reference: "Salmos 139:23-24"
  },

  {
    text: "Ensina-nos a contar os nossos dias para que alcancemos corações sábios. A consciência de que o tempo é limitado pode nos ensinar a viver com mais propósito.",
    reference: "Salmos 90:12"
  },

  {
    text: "Aquele que confia no Senhor é como uma árvore plantada junto às águas, que permanece firme mesmo quando chegam os períodos de seca.",
    reference: "Jeremias 17:7-8"
  },

  {
    text: "Porque eu bem sei os planos que tenho para vocês, planos de paz e não de mal, para lhes dar esperança e um futuro.",
    reference: "Jeremias 29:11"
  },

  {
    text: "Quando passares pelas águas, eu estarei contigo; quando atravessares os rios, eles não te dominarão. Quando passares pelo fogo, não serás consumido.",
    reference: "Isaías 43:2"
  },

  {
    text: "Os que esperam no Senhor renovam as suas forças; sobem com asas como águias, correm e não se cansam, caminham e não desfalecem.",
    reference: "Isaías 40:31"
  },

  {
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus. Eu te fortaleço, te ajudo e te sustento.",
    reference: "Isaías 41:10"
  },

  {
    text: "Aqueles que semeiam com lágrimas colherão com alegria. Nem todo esforço produz resultados imediatamente, mas isso não significa que tenha sido inútil.",
    reference: "Salmos 126:5-6"
  },

  {
    text: "O coração do homem pode fazer planos, mas a resposta final e a direção pertencem ao Senhor. Planeje com sabedoria, mas permaneça aberto para ajustar o caminho.",
    reference: "Provérbios 16:9"
  },

  {
    text: "Melhor é o pouco com justiça do que grandes riquezas acompanhadas de injustiça. O valor de uma conquista também depende da maneira como ela foi alcançada.",
    reference: "Provérbios 16:8"
  },

  {
    text: "O orgulho vem antes da destruição, e a arrogância precede a queda. Quanto mais aprendemos, mais devemos reconhecer que ainda temos muito a aprender.",
    reference: "Provérbios 16:18"
  },

  {
    text: "A resposta branda desvia o furor, mas a palavra dura aumenta a ira. Nem toda situação precisa ser vencida pela força; às vezes, a calma possui mais poder.",
    reference: "Provérbios 15:1"
  },

  {
    text: "Quem controla suas palavras demonstra conhecimento, e quem mantém a calma revela entendimento. Saber quando falar e quando permanecer em silêncio também é sabedoria.",
    reference: "Provérbios 17:27-28"
  },

  {
    text: "O amigo ama em todos os momentos, e o irmão nasce para os tempos de adversidade. A verdadeira amizade se revela especialmente quando a vida deixa de ser conveniente.",
    reference: "Provérbios 17:17"
  },

  {
    text: "Assim como o ferro afia o ferro, uma pessoa pode ajudar outra a crescer. Cerque-se de pessoas que tenham coragem de contribuir para o seu desenvolvimento.",
    reference: "Provérbios 27:17"
  },

  {
    text: "Não te glories do dia de amanhã, porque não sabes o que ele trará. Faça o que pode ser feito hoje sem transformar o futuro em uma fonte constante de ansiedade.",
    reference: "Provérbios 27:1"
  },

  {
    text: "Melhor é o fim de uma coisa do que o seu começo, e melhor é o paciente do que o orgulhoso. Algumas coisas precisam de tempo para revelar seu verdadeiro valor.",
    reference: "Eclesiastes 7:8"
  },

  {
    text: "A sabedoria é uma proteção, assim como o dinheiro pode ser uma proteção, mas a vantagem do conhecimento é que ele preserva a vida de quem o possui.",
    reference: "Eclesiastes 7:12"
  },

  {
    text: "Tudo tem o seu tempo determinado. Há momentos de começar e momentos de terminar, momentos de guardar e momentos de deixar ir. Sabedoria também é reconhecer a estação em que você está.",
    reference: "Eclesiastes 3:1-6"
  },

  {
    text: "Melhor serem dois do que um, porque juntos podem obter melhor resultado pelo seu trabalho. Quando um cai, o outro pode ajudá-lo a levantar.",
    reference: "Eclesiastes 4:9-10"
  },

  {
    text: "O coração alegre favorece a saúde, mas o espírito abatido enfraquece a pessoa. Cuidar daquilo que acontece dentro de nós também faz parte de uma vida equilibrada.",
    reference: "Provérbios 17:22"
  },

  {
    text: "Acima de tudo, adquira sabedoria. Mesmo que isso tenha um custo, procure entendimento, porque aquilo que você aprende pode transformar a maneira como vive.",
    reference: "Provérbios 4:7"
  },

  {
    text: "Não abandones a sabedoria, e ela te guardará; ama-a, e ela cuidará de ti. O conhecimento só se torna verdadeiramente valioso quando passa a orientar nossas escolhas.",
    reference: "Provérbios 4:6"
  },

  {
    text: "O temor do Senhor é o princípio da sabedoria, e conhecer o Santo é ter entendimento. A verdadeira sabedoria começa quando reconhecemos que não sabemos tudo.",
    reference: "Provérbios 9:10"
  },

  {
    text: "Quem é lento para irar-se é grande em entendimento, mas aquele que facilmente perde o controle demonstra sua própria fraqueza.",
    reference: "Provérbios 14:29"
  },

  {
    text: "Melhor é ser humilde de espírito com os humildes do que repartir riquezas com os orgulhosos. Nem toda grandeza está relacionada àquilo que possuímos.",
    reference: "Provérbios 16:19"
  },

  {
    text: "Não se alegre quando o seu inimigo cair, nem deixe o coração celebrar sua desgraça. A justiça não precisa ser acompanhada pelo desejo de vingança.",
    reference: "Provérbios 24:17-18"
  },

  {
    text: "Se o teu inimigo tiver fome, dá-lhe de comer; se tiver sede, dá-lhe de beber. Vencer o mal não significa necessariamente responder ao mal com outro mal.",
    reference: "Romanos 12:20-21"
  },

  {
    text: "Não paguem a ninguém mal por mal. Procurem fazer aquilo que é correto diante de todos e, quando depender de vocês, vivam em paz com todas as pessoas.",
    reference: "Romanos 12:17-18"
  },

  {
    text: "Não sejam vencidos pelo mal, mas vençam o mal com o bem. A maneira como você responde a uma atitude negativa também revela quem você escolhe ser.",
    reference: "Romanos 12:21"
  },

  {
    text: "Sejam alegres na esperança, pacientes nas dificuldades e perseverantes na oração. A esperança não elimina os problemas, mas pode mudar a maneira como atravessamos cada um deles.",
    reference: "Romanos 12:12"
  },

  {
    text: "Se possível, e quanto depender de vocês, vivam em paz com todas as pessoas. Nem sempre podemos controlar a atitude dos outros, mas podemos controlar nossa própria contribuição para o conflito.",
    reference: "Romanos 12:18"
  },

  {
    text: "Não julguem apenas pela aparência, mas procurem julgar com justiça. Aquilo que vemos de uma pessoa representa apenas uma pequena parte de sua história.",
    reference: "João 7:24"
  },

  {
    text: "Quem quiser ser o primeiro entre vocês deverá ser servo dos outros. Grandeza, na perspectiva de Jesus, não é apenas posição, mas disposição para servir.",
    reference: "Marcos 10:43-45"
  },

  {
    text: "Não acumulem tesouros apenas na terra, onde podem ser destruídos ou perdidos. Aquilo que realmente possui valor não deve depender apenas das coisas que você consegue possuir.",
    reference: "Mateus 6:19-21"
  },

  {
    text: "Onde estiver o seu tesouro, aí também estará o seu coração. Aquilo a que você dedica constantemente seu tempo, energia e atenção revela muito sobre aquilo que realmente valoriza.",
    reference: "Mateus 6:21"
  },

  {
    text: "Que aproveita ao homem ganhar o mundo inteiro e perder a sua própria alma? Nem toda conquista exterior compensa aquilo que precisamos sacrificar interiormente para alcançá-la.",
    reference: "Marcos 8:36"
  },

  {
    text: "Se alguém quer seguir-me, negue-se a si mesmo, tome a sua cruz e siga-me. Uma vida com propósito também exige disciplina, renúncia e disposição para enfrentar dificuldades.",
    reference: "Marcos 8:34"
  },

  {
    text: "Quem é fiel no pouco também é fiel no muito. A maneira como lidamos com pequenas responsabilidades revela os hábitos que levaremos para responsabilidades maiores.",
    reference: "Lucas 16:10"
  },

  {
    text: "Não façam o bem apenas para serem vistos pelos outros. Algumas das atitudes mais importantes são aquelas que permanecem desconhecidas para todos, exceto para Deus.",
    reference: "Mateus 6:1-4"
  },

  {
    text: "Quando orares, entra no teu quarto, fecha a porta e ora ao teu Pai em secreto. A fé também pode ser uma experiência íntima, longe da necessidade de reconhecimento público.",
    reference: "Mateus 6:6"
  },

  {
    text: "Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. Quem deseja receber misericórdia também é chamado a aprender a oferecê-la.",
    reference: "Mateus 6:12"
  },

  {
    text: "Não ajuntem preocupações sobre o amanhã. Cada dia possui suas próprias dificuldades; enfrente o que está diante de você sem carregar antecipadamente todos os problemas que ainda não chegaram.",
    reference: "Mateus 6:34"
  },

  {
    text: "Aquele que ouve minhas palavras e as pratica é como um homem prudente que construiu sua casa sobre a rocha. Conhecimento se torna sabedoria quando transforma nossas ações.",
    reference: "Mateus 7:24-25"
  },

  {
    text: "Peçam e receberão; busquem e encontrarão; batam, e a porta será aberta. Continue buscando aquilo que considera correto, mesmo quando a resposta não aparece imediatamente.",
    reference: "Mateus 7:7-8"
  },

  {
    text: "Venham a mim todos vocês que estão cansados e sobrecarregados, e eu lhes darei descanso. Nem toda força consiste em continuar carregando tudo sozinho.",
    reference: "Mateus 11:28"
  },

  {
    text: "Aprendam de mim, porque sou manso e humilde de coração, e encontrarão descanso para suas almas. A humildade não diminui uma pessoa; pode torná-la mais aberta para aprender e crescer.",
    reference: "Mateus 11:29"
  },

  {
    text: "Tudo é possível àquele que crê. A fé não significa que todas as dificuldades desaparecerão, mas pode dar coragem para continuar quando as circunstâncias parecem contrárias.",
    reference: "Marcos 9:23"
  },

  {
    text: "Amai-vos uns aos outros como eu vos amei. O amor cristão não deve permanecer apenas como sentimento, mas manifestar-se em atitudes concretas de cuidado, respeito e generosidade.",
    reference: "João 13:34"
  },

  {
    text: "Nisto conhecerão todos que sois meus discípulos: se tiverdes amor uns pelos outros. A maneira como tratamos as pessoas também faz parte do testemunho da nossa fé.",
    reference: "João 13:35"
  }


]

export default bibleTexts