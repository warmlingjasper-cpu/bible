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
  },

    {
    text: "O Senhor é compassivo e misericordioso, paciente e cheio de amor. Assim como um pai se compadece dos seus filhos, Deus conhece nossas limitações e se lembra de que somos frágeis.",
    reference: "Salmos 103:8-14"
  },

  {
    text: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios. A gratidão também envolve lembrar conscientemente das coisas boas que já recebemos, em vez de enxergar apenas aquilo que ainda nos falta.",
    reference: "Salmos 103:2"
  },

  {
    text: "Dá-me a conhecer os teus caminhos, Senhor; ensina-me as tuas veredas. Guia-me na tua verdade e ensina-me, pois tu és o Deus da minha salvação, e em ti espero todos os dias.",
    reference: "Salmos 25:4-5"
  },

  {
    text: "O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei? A confiança em Deus pode permanecer mesmo quando as circunstâncias provocam insegurança.",
    reference: "Salmos 27:1"
  },

  {
    text: "Uma coisa pedi ao Senhor, e é o que procuro: que eu possa habitar na presença do Senhor todos os dias da minha vida, contemplando sua beleza e buscando sua orientação.",
    reference: "Salmos 27:4"
  },

  {
    text: "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito firme. A transformação verdadeira não acontece apenas nas circunstâncias externas, mas também naquilo que acontece dentro de nós.",
    reference: "Salmos 51:10"
  },

  {
    text: "Os sacrifícios de Deus são um espírito quebrantado; um coração quebrantado e contrito não será desprezado. Reconhecer os próprios erros pode ser o começo de uma mudança sincera.",
    reference: "Salmos 51:17"
  },

  {
    text: "Entrega o teu fardo ao Senhor, e ele te sustentará. A passagem não promete uma vida sem dificuldades, mas apresenta a confiança em Deus como uma maneira de não carregar sozinho aquilo que pesa sobre nós.",
    reference: "Salmos 55:22"
  },

  {
    text: "Em Deus ponho a minha confiança e não terei medo. O que pode fazer-me o simples ser humano? A confiança não significa ausência de medo, mas a decisão de não permitir que o medo determine todas as nossas ações.",
    reference: "Salmos 56:3-4"
  },

  {
    text: "A minha alma espera somente em Deus; dele vem a minha salvação. Somente ele é a minha rocha e a minha salvação, a minha fortaleza; não serei abalado facilmente.",
    reference: "Salmos 62:1-2"
  },

  {
    text: "Confia nele em todos os momentos, ó povo; derrama diante dele o coração, pois Deus é o nosso refúgio. A oração também pode ser um espaço de honestidade, onde apresentamos aquilo que realmente sentimos.",
    reference: "Salmos 62:8"
  },

  {
    text: "Ensina-me a fazer a tua vontade, pois tu és o meu Deus. Que o teu bom Espírito me conduza por terreno seguro. Buscar direção também significa estar disposto a aprender e corrigir o próprio caminho.",
    reference: "Salmos 143:10"
  },

  {
    text: "Grande é o Senhor e digno de ser louvado; sua grandeza é insondável. Uma geração contará à outra os feitos de Deus e falará sobre suas obras.",
    reference: "Salmos 145:3-4"
  },

  {
    text: "O Senhor sustenta todos os que caem e levanta todos os que estão abatidos. Deus não é apresentado apenas como alguém que observa a fragilidade humana, mas como aquele que oferece sustentação aos que precisam.",
    reference: "Salmos 145:14"
  },

  {
    text: "Abre a tua mão e satisfazes os desejos de todos os seres vivos. O salmista apresenta a criação como dependente da provisão de Deus e convida à confiança em vez da preocupação constante.",
    reference: "Salmos 145:16"
  },

  {
    text: "Melhor é buscar refúgio no Senhor do que confiar excessivamente em pessoas poderosas. A passagem lembra que nenhuma segurança humana deve ocupar o lugar absoluto que pertence a Deus.",
    reference: "Salmos 118:8-9"
  },

  {
    text: "Este é o dia que o Senhor fez; alegremo-nos e celebremo-lo. Mesmo que a vida contenha dificuldades, cada dia pode ser recebido como uma oportunidade concreta para viver, agradecer e agir.",
    reference: "Salmos 118:24"
  },

  {
    text: "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho. A imagem sugere que a orientação de Deus nem sempre mostra todo o percurso de uma vez, mas pode iluminar o próximo passo.",
    reference: "Salmos 119:105"
  },

  {
    text: "Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra. A formação do caráter envolve escolhas repetidas e atenção consciente àquilo que orienta nossas ações.",
    reference: "Salmos 119:9"
  },

  {
    text: "Ensina-me, Senhor, o caminho dos teus decretos, e eu o seguirei até o fim. Conhecer um caminho é diferente de percorrê-lo; a sabedoria bíblica associa aprendizado com prática perseverante.",
    reference: "Salmos 119:33"
  },

  {
    text: "Se o Senhor não edificar a casa, será inútil trabalhar na construção. Se o Senhor não guardar a cidade, será inútil a vigilância do sentinela. A passagem destaca os limites do esforço humano quando ele se separa da confiança em Deus.",
    reference: "Salmos 127:1"
  },

  {
    text: "O temor do Senhor conduz à vida, e quem o possui pode descansar sem viver dominado pelo medo. A sabedoria bíblica apresenta reverência a Deus como fundamento para uma vida mais orientada e prudente.",
    reference: "Provérbios 19:23"
  },

  {
    text: "O que guarda a sua boca e a sua língua preserva a própria vida; quem fala de maneira precipitada pode criar muitos problemas. Autocontrole também aparece na capacidade de pensar antes de falar.",
    reference: "Provérbios 13:3"
  },

  {
    text: "A pessoa prudente vê o perigo e se esconde, mas os inexperientes seguem adiante e sofrem as consequências. Sabedoria não é apenas coragem para enfrentar problemas, mas também capacidade de reconhecê-los antecipadamente.",
    reference: "Provérbios 22:3"
  },

  {
    text: "Ensina a criança no caminho em que deve andar, e mesmo quando envelhecer não se desviará dele. A formação recebida nos primeiros anos pode influenciar profundamente hábitos, valores e decisões futuras.",
    reference: "Provérbios 22:6"
  },

  {
    text: "Quem anda com os sábios se torna sábio, mas o companheiro dos insensatos sofrerá as consequências. As pessoas com quem convivemos podem influenciar gradualmente nossa maneira de pensar e agir.",
    reference: "Provérbios 13:20"
  },

  {
    text: "A pessoa generosa prosperará; quem ajuda os outros também será ajudado. A generosidade apresentada em Provérbios não é apenas uma questão financeira, mas uma disposição de contribuir para o bem de outras pessoas.",
    reference: "Provérbios 11:25"
  },

  {
    text: "Quem encobre seus erros não prospera, mas quem os confessa e abandona encontra misericórdia. Reconhecer um erro é importante, mas a passagem também destaca a necessidade de abandoná-lo e mudar de direção.",
    reference: "Provérbios 28:13"
  },

  {
    text: "Não confies apenas na tua própria sabedoria; reconhece o Senhor em todos os teus caminhos e afasta-te do mal. A prudência bíblica combina reflexão pessoal com humildade diante de Deus.",
    reference: "Provérbios 3:7"
  },

  {
    text: "O caminho dos justos é como a luz da aurora, que brilha cada vez mais até ser dia perfeito. A imagem apresenta crescimento e amadurecimento como um processo gradual, e não como uma transformação instantânea.",
    reference: "Provérbios 4:18"
  },

  {
    text: "Aquele que ama a disciplina ama o conhecimento, mas quem rejeita a correção permanece distante da sabedoria. Aprender também exige disposição para receber críticas e reconhecer aquilo que precisa ser melhorado.",
    reference: "Provérbios 12:1"
  },

  {
    text: "Há palavras que ferem como espada, mas a língua dos sábios traz cura. A mesma capacidade de comunicação que pode destruir relacionamentos também pode restaurá-los quando usada com cuidado.",
    reference: "Provérbios 12:18"
  },

  {
    text: "O coração alegre embeleza o rosto, mas a tristeza do coração abate o espírito. O provérbio reconhece que nossa vida interior frequentemente se manifesta também na maneira como enfrentamos o cotidiano.",
    reference: "Provérbios 15:13"
  },

  {
    text: "Os planos fracassam quando não há conselho, mas com muitos conselheiros há segurança. Procurar perspectivas diferentes pode ajudar a identificar problemas que não conseguimos perceber sozinhos.",
    reference: "Provérbios 15:22"
  },

  {
    text: "Quem responde antes de ouvir comete insensatez e passa vergonha. Escutar completamente uma situação antes de formar uma conclusão é apresentado como uma atitude de prudência.",
    reference: "Provérbios 18:13"
  },

  {
    text: "O nome pode ser mais precioso do que grandes riquezas, e uma boa reputação vale mais do que prata e ouro. O provérbio destaca que caráter e confiança podem possuir um valor que não pode ser reduzido ao dinheiro.",
    reference: "Provérbios 22:1"
  },

  {
    text: "Não diga: 'Farei com ele aquilo que ele fez comigo'. A vingança pode parecer justa no momento, mas a sabedoria bíblica orienta a não reproduzir o comportamento que nos prejudicou.",
    reference: "Provérbios 24:29"
  },

  {
    text: "Como cidade com seus muros derrubados, assim é quem não sabe dominar-se. Sem autocontrole, a pessoa fica vulnerável aos próprios impulsos e pode destruir aquilo que levou muito tempo para construir.",
    reference: "Provérbios 25:28"
  },

  {
    text: "Não te canses de fazer o bem, porque há valor em agir corretamente mesmo quando ninguém reconhece imediatamente o esforço. A perseverança é necessária justamente porque bons resultados nem sempre aparecem rapidamente.",
    reference: "Gálatas 6:9"
  },

  {
    text: "Cada pessoa deve examinar suas próprias ações, sem precisar comparar constantemente seu caminho com o de outras pessoas. Avaliar a própria conduta pode produzir responsabilidade e maturidade.",
    reference: "Gálatas 6:4-5"
  },

  {
    text: "Levai as cargas uns dos outros e assim cumprireis a lei de Cristo. A vida cristã não é apresentada como uma caminhada completamente individual, mas como uma comunidade em que as pessoas ajudam umas às outras.",
    reference: "Gálatas 6:2"
  },

  {
    text: "Não usem a liberdade como oportunidade para satisfazer apenas os desejos pessoais, mas sirvam uns aos outros mediante o amor. Liberdade, nessa perspectiva, vem acompanhada de responsabilidade.",
    reference: "Gálatas 5:13"
  },

  {
    text: "Tudo me é permitido, mas nem tudo é proveitoso. Nem tudo que podemos fazer necessariamente contribui para o nosso bem, e maturidade envolve aprender a distinguir liberdade de impulsividade.",
    reference: "1 Coríntios 6:12"
  },

  {
    text: "Façam tudo para a glória de Deus, evitando colocar desnecessariamente obstáculos no caminho de outras pessoas. As próprias escolhas podem ter consequências que ultrapassam nossos interesses individuais.",
    reference: "1 Coríntios 10:31-32"
  },

  {
    text: "Deus pode fazer abundar em vocês toda graça, para que tenham sempre o suficiente e possam transbordar em boas obras. A prosperidade apresentada aqui está ligada também à capacidade de compartilhar e fazer o bem.",
    reference: "2 Coríntios 9:8"
  },

  {
    text: "Deus ama quem dá com alegria. A generosidade perde parte de seu significado quando é praticada apenas por obrigação ou ressentimento; a disposição interior também importa.",
    reference: "2 Coríntios 9:7"
  },

  {
    text: "Embora o nosso exterior se desgaste, o interior pode ser renovado dia após dia. As dificuldades presentes são apresentadas como temporárias diante de uma esperança que ultrapassa aquilo que podemos perceber imediatamente.",
    reference: "2 Coríntios 4:16-18"
  },

  {
    text: "Vivemos pela fé, e não apenas pelo que podemos ver. Isso significa agir de acordo com aquilo em que confiamos mesmo quando ainda não possuímos todas as respostas ou resultados diante dos olhos.",
    reference: "2 Coríntios 5:7"
  },

  {
    text: "Se alguém está em Cristo, é nova criação; as coisas antigas passaram, e novas coisas surgiram. A mensagem cristã apresenta a transformação pessoal como uma possibilidade real, não como uma condenação permanente ao passado.",
    reference: "2 Coríntios 5:17"
  },

  {
    text: "Não deixem que nenhuma palavra destrutiva saia da boca de vocês, mas somente aquilo que for útil para edificar os outros conforme a necessidade. A comunicação deve procurar produzir benefício, não apenas descarregar emoções.",
    reference: "Efésios 4:29"
  },

  {
    text: "Sejam bondosos e compassivos uns com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo. O perdão é apresentado como uma prática que rompe ciclos de ressentimento e hostilidade.",
    reference: "Efésios 4:32"
  },

  {
    text: "Livrem-se da amargura, da indignação, da ira, da gritaria e da maldade. Em seu lugar, cultivem bondade, compaixão e disposição para perdoar. O texto apresenta uma mudança de comportamento que começa pela maneira como lidamos com conflitos.",
    reference: "Efésios 4:31-32"
  },

  {
    text: "Vivam com sabedoria, aproveitando bem o tempo, porque os dias são difíceis. Em vez de viver de maneira automática, procurem compreender aquilo que realmente importa e utilizem conscientemente o tempo que receberam.",
    reference: "Efésios 5:15-17"
  },

  {
    text: "Não sejam embriagados pelo vinho, mas sejam cheios do Espírito. A passagem contrasta formas diferentes de influência sobre a vida e incentiva uma existência orientada por Deus, gratidão e comunhão.",
    reference: "Efésios 5:18-20"
  },

  {
    text: "Sejam humildes, pacientes e suportem uns aos outros em amor, procurando preservar a unidade. Relacionamentos duradouros exigem mais do que afinidade; exigem paciência, tolerância e disposição para dialogar.",
    reference: "Efésios 4:2-3"
  },

  {
    text: "Não façam nada por egoísmo ou vaidade, mas considerem humildemente os outros superiores a vocês mesmos. Cada um deve olhar não somente para os próprios interesses, mas também para os interesses dos outros.",
    reference: "Filipenses 2:3-4"
  },

  {
    text: "Tenham entre vocês a mesma atitude que houve em Cristo Jesus, que não se apegou ao privilégio, mas assumiu a condição de servo. O texto apresenta humildade e serviço como características centrais da vida cristã.",
    reference: "Filipenses 2:5-7"
  },

  {
    text: "Não façam tudo reclamando ou discutindo, para que possam viver de maneira íntegra em meio a uma sociedade difícil. A maneira como enfrentamos pequenas frustrações também faz parte do nosso caráter.",
    reference: "Filipenses 2:14-15"
  },

  {
    text: "Esquecendo-me das coisas que ficaram para trás e avançando para as que estão diante de mim, prossigo para o alvo. O passado pode ensinar, mas não precisa determinar permanentemente a direção do futuro.",
    reference: "Filipenses 3:13-14"
  },

  {
    text: "Tudo o que é verdadeiro, respeitável, justo, puro, amável e digno de louvor, nisso pensem. A passagem chama atenção para a influência que aquilo em que concentramos a mente exerce sobre nossa maneira de viver.",
    reference: "Filipenses 4:8"
  },

  {
    text: "A paz de Cristo deve governar o coração, e a palavra de Cristo deve habitar em vocês com riqueza. O texto relaciona paz interior, aprendizado e uma vida comunitária marcada por gratidão.",
    reference: "Colossenses 3:15-16"
  },

  {
    text: "Acima de tudo, revistam-se do amor, que une todas as coisas em perfeita harmonia. O amor aparece aqui não apenas como emoção, mas como aquilo que ajuda a integrar outras virtudes.",
    reference: "Colossenses 3:14"
  },

  {
    text: "Sejam pacientes uns com os outros e perdoem qualquer queixa que tenham contra alguém. Assim como o Senhor perdoou vocês, procurem também perdoar.",
    reference: "Colossenses 3:12-13"
  },

  {
    text: "Tudo quanto fizerem, façam com dedicação, como para o Senhor e não simplesmente para agradar pessoas. O trabalho cotidiano pode adquirir significado quando é realizado com responsabilidade e propósito.",
    reference: "Colossenses 3:23-24"
  },

  {
    text: "Não desprezem as profecias, mas examinem todas as coisas e conservem aquilo que é bom. A passagem combina abertura para aprender com a responsabilidade de avaliar criticamente aquilo que se ouve.",
    reference: "1 Tessalonicenses 5:20-21"
  },

  {
    text: "Estejam sempre alegres, orem continuamente e deem graças em todas as circunstâncias. O texto não afirma que todas as circunstâncias são boas, mas convida a manter uma postura de oração e gratidão em qualquer situação.",
    reference: "1 Tessalonicenses 5:16-18"
  },

  {
    text: "Não se cansem de fazer o bem. A perseverança pode ser especialmente importante quando uma atitude correta não produz reconhecimento ou recompensa imediata.",
    reference: "2 Tessalonicenses 3:13"
  },

  {
    text: "O amor ao dinheiro é apresentado como uma fonte de muitos males quando transforma o desejo de possuir em algo que domina a vida. A passagem incentiva o contentamento com aquilo que realmente precisamos.",
    reference: "1 Timóteo 6:6-10"
  },

  {
    text: "Tendo alimento e roupa, devemos estar contentes com isso. O texto questiona a ideia de que acumular continuamente mais coisas necessariamente produz uma vida melhor.",
    reference: "1 Timóteo 6:8"
  },

  {
    text: "A piedade acompanhada de contentamento é apresentada como grande fonte de ganho. A mensagem não condena possuir recursos, mas questiona quando a busca por riqueza passa a dominar as prioridades.",
    reference: "1 Timóteo 6:6"
  },

  {
    text: "Não negligencies o dom que há em ti; dedica-te a ele e pratica-o. O desenvolvimento de capacidades exige atenção, exercício e perseverança, e não apenas talento natural.",
    reference: "1 Timóteo 4:14-15"
  },

  {
    text: "Fuja das paixões que podem dominar a juventude e busque justiça, fé, amor e paz, junto daqueles que invocam o Senhor com coração sincero. Crescimento também envolve escolher aquilo de que devemos nos afastar.",
    reference: "2 Timóteo 2:22"
  },

  {
    text: "Toda Escritura é inspirada por Deus e útil para ensinar, corrigir, repreender e educar na justiça, para que a pessoa de Deus seja preparada para toda boa obra.",
    reference: "2 Timóteo 3:16-17"
  },

  {
    text: "Não devemos apenas ouvir a palavra, mas praticá-la. Quem ouve e não pratica é comparado a alguém que olha para o próprio rosto no espelho e logo esquece aquilo que viu.",
    reference: "Tiago 1:22-24"
  },

  {
    text: "Se alguém precisa de sabedoria, peça-a a Deus, que dá generosamente a todos sem censurar. A passagem incentiva reconhecer a própria necessidade de orientação em vez de fingir possuir todas as respostas.",
    reference: "Tiago 1:5"
  },

  {
    text: "Sejam rápidos para ouvir, lentos para falar e lentos para se irar, porque a ira humana não produz a justiça de Deus. Saber ouvir antes de reagir pode impedir conflitos desnecessários.",
    reference: "Tiago 1:19-20"
  },

  {
    text: "A língua é pequena, mas pode produzir grandes consequências. Assim como uma pequena faísca pode incendiar uma floresta, palavras mal utilizadas podem causar danos muito maiores do que imaginamos.",
    reference: "Tiago 3:5-6"
  },

  {
    text: "Quem entre vocês é sábio? Mostre isso por meio de uma boa conduta, com obras realizadas na mansidão que acompanha a sabedoria. A verdadeira sabedoria deve aparecer também no comportamento.",
    reference: "Tiago 3:13"
  },

  {
    text: "A sabedoria que vem do alto é primeiro pura, depois pacífica, gentil, aberta ao diálogo, cheia de misericórdia e de bons frutos. Ela não é apresentada como simples acúmulo de informação, mas como uma maneira de viver.",
    reference: "Tiago 3:17"
  },

  {
    text: "Aproximem-se de Deus, e ele se aproximará de vocês. Humilhem-se diante do Senhor, e ele os exaltará. A passagem relaciona proximidade com Deus e humildade diante dele.",
    reference: "Tiago 4:8-10"
  },

  {
    text: "Não falem mal uns dos outros. Quem constantemente condena o próximo assume uma posição de julgamento que pode revelar mais sobre seu próprio coração do que sobre a pessoa que está sendo criticada.",
    reference: "Tiago 4:11-12"
  },

  {
    text: "Vocês não sabem o que acontecerá amanhã. Em vez de falar como se controlássemos completamente o futuro, devemos reconhecer seus limites e submeter nossos planos à vontade de Deus.",
    reference: "Tiago 4:13-15"
  },

  {
    text: "Sejam pacientes até a vinda do Senhor, como o agricultor espera pela colheita preciosa da terra. Algumas coisas importantes exigem tempo, e a espera pode fazer parte do processo.",
    reference: "Tiago 5:7-8"
  },

  {
    text: "A oração de uma pessoa justa é poderosa em seus efeitos. Tiago apresenta a oração como uma prática ativa de confiança em Deus, especialmente em momentos de necessidade.",
    reference: "Tiago 5:16"
  },

  {
    text: "Lançando sobre Deus toda a ansiedade, porque ele cuida de vocês. A passagem convida a transformar a preocupação em confiança, reconhecendo que não precisamos controlar absolutamente tudo.",
    reference: "1 Pedro 5:7"
  },

  {
    text: "Sejam sóbrios e vigilantes, porque o adversário procura oportunidades para afastar as pessoas da fé. A mensagem incentiva atenção e autocontrole diante das influências que podem enfraquecer a vida espiritual.",
    reference: "1 Pedro 5:8-9"
  },

  {
    text: "Depois de sofrerem por algum tempo, o Deus de toda graça os aperfeiçoará, fortalecerá e firmará. A esperança cristã reconhece que períodos difíceis podem ser atravessados sem perder a confiança.",
    reference: "1 Pedro 5:10"
  },

  {
    text: "Acrescentem à fé virtude, conhecimento, domínio próprio, perseverança, piedade, fraternidade e amor. O crescimento espiritual é apresentado como um processo de desenvolvimento de várias qualidades.",
    reference: "2 Pedro 1:5-7"
  },

  {
    text: "Se praticarem essas qualidades, elas impedirão que vocês sejam inativos ou improdutivos no conhecimento de Cristo. Conhecimento e transformação pessoal aparecem novamente ligados à prática.",
    reference: "2 Pedro 1:8"
  },

  {
    text: "Deus não é injusto para esquecer o trabalho e o amor que vocês demonstraram. A passagem encoraja a perseverar no bem mesmo quando o esforço parece passar despercebido.",
    reference: "Hebreus 6:10"
  },

  {
    text: "Corramos com perseverança a corrida que nos está proposta, deixando de lado aquilo que nos impede. A imagem sugere que perseverança também exige identificar e abandonar pesos desnecessários.",
    reference: "Hebreus 12:1"
  },

  {
    text: "Fixemos os olhos em Jesus, autor e consumador da fé, que suportou a cruz por causa da alegria que estava diante dele. A passagem apresenta perseverança diante do sofrimento orientada por um propósito maior.",
    reference: "Hebreus 12:2"
  },

  {
    text: "Não desprezem a disciplina do Senhor, porque ele disciplina aqueles a quem ama. A passagem interpreta a correção como parte de um processo de formação, semelhante à educação de um filho.",
    reference: "Hebreus 12:5-6"
  },

  {
    text: "Que ninguém deixe de alcançar a graça de Deus e que nenhuma raiz de amargura cresça causando perturbação. Ressentimentos não tratados podem crescer silenciosamente e afetar muito mais pessoas do que aquela que inicialmente foi ferida.",
    reference: "Hebreus 12:15"
  },

  {
    text: "Não se esqueçam de fazer o bem e de repartir com os outros, pois esses são sacrifícios que agradam a Deus. A fé é relacionada a ações concretas de generosidade e cuidado.",
    reference: "Hebreus 13:16"
  },

  {
    text: "Sejam hospitaleiros uns com os outros sem reclamar. A hospitalidade aparece como uma forma prática de demonstrar amor e acolhimento.",
    reference: "1 Pedro 4:9"
  },

  {
    text: "Cada um exerça o dom que recebeu para servir aos outros, administrando fielmente a graça de Deus em suas diferentes formas. Talentos e capacidades são apresentados também como recursos que podem beneficiar outras pessoas.",
    reference: "1 Pedro 4:10"
  },

  {
    text: "Não amemos apenas de palavra, mas com ações e em verdade. O amor genuíno precisa ultrapassar declarações e aparecer na maneira como tratamos e ajudamos as pessoas.",
    reference: "1 João 3:18"
  },

  {
    text: "Deus é amor, e quem permanece no amor permanece em Deus. O texto apresenta o amor não apenas como uma característica humana, mas como algo central à compreensão cristã sobre quem Deus é.",
    reference: "1 João 4:16"
  },

  {
    text: "No amor não há medo; o amor perfeito lança fora o medo, porque o medo está relacionado à expectativa de punição. A passagem relaciona amadurecimento no amor com uma diminuição do medo.",
    reference: "1 João 4:18"
  },

  {
    text: "Se alguém possui recursos e vê seu irmão passando necessidade, mas fecha o coração, como pode permanecer nele o amor de Deus? A fé é confrontada com a responsabilidade concreta diante da necessidade do próximo.",
    reference: "1 João 3:17"
  },

  {
    text: "Não amem apenas de palavras aquilo que pertence ao mundo; amem a Deus e orientem a vida por aquilo que realmente permanece. O texto questiona a ideia de que desejos e posses temporárias devam ocupar o centro da existência.",
    reference: "1 João 2:15-17"
  },

  {
    text: "Não há maior alegria do que saber que meus filhos estão andando na verdade. A passagem destaca a satisfação encontrada ao perceber que aqueles que amamos estão desenvolvendo um caminho de integridade.",
    reference: "3 João 1:4"
  },

  {
    text: "Jesus disse: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.' A declaração resume uma das afirmações centrais do Evangelho de João sobre a identidade e missão de Jesus.",
    reference: "João 14:6"
  },

  {
    text: "Eu sou a videira, vocês são os ramos. Quem permanece em mim produz muito fruto, porque sem mim vocês não podem fazer nada. A imagem apresenta uma relação contínua de dependência e crescimento.",
    reference: "João 15:5"
  },

  {
    text: "Permaneçam em meu amor. Se obedecerem aos meus mandamentos, permanecerão no meu amor, assim como eu tenho obedecido ao Pai. O amor é apresentado junto com fidelidade e prática.",
    reference: "João 15:9-10"
  },

  {
    text: "Ninguém tem maior amor do que aquele que dá a própria vida pelos seus amigos. Jesus apresenta o amor sacrificial como uma das expressões mais profundas de amizade e compromisso.",
    reference: "João 15:13"
  },

  {
    text: "No mundo vocês terão aflições, mas tenham coragem: eu venci o mundo. A frase não promete ausência de sofrimento; reconhece a realidade das dificuldades e aponta para uma esperança maior.",
    reference: "João 16:33"
  },

  {
    text: "Eu vim para que tenham vida e a tenham em abundância. A declaração aparece no contexto da imagem do pastor que conhece suas ovelhas e cuida delas.",
    reference: "João 10:10"
  },

  {
    text: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que morra, viverá. A declaração de Jesus diante de Marta apresenta a esperança da ressurreição como elemento central da fé cristã.",
    reference: "João 11:25"
  },

  {
    text: "Zaqueu, chefe dos cobradores de impostos, decidiu devolver aquilo que havia tomado injustamente e repartir seus bens com os pobres. Seu encontro com Jesus é apresentado como exemplo de uma mudança que produz consequências práticas.",
    reference: "Lucas 19:1-10"
  },

  {
    text: "O bom samaritano encontrou um homem ferido na estrada, aproximou-se dele, cuidou de suas feridas e pagou para que continuassem cuidando dele. Jesus utilizou essa história para mostrar que o próximo é aquele a quem escolhemos demonstrar misericórdia.",
    reference: "Lucas 10:30-37"
  },

  {
    text: "Marta estava ocupada com muitos afazeres, enquanto Maria permanecia sentada ouvindo Jesus. A narrativa mostra que serviço e atividade são importantes, mas também existe valor em parar, ouvir e estar presente.",
    reference: "Lucas 10:38-42"
  },

  {
    text: "Um homem rico construiu celeiros maiores para armazenar suas riquezas, mas naquela mesma noite sua vida terminou. Jesus utilizou a parábola para questionar a segurança depositada exclusivamente na acumulação de bens.",
    reference: "Lucas 12:16-21"
  },

  {
    text: "O filho mais novo desperdiçou sua herança, arrependeu-se e voltou para casa; o pai correu ao seu encontro e o recebeu. A parábola enfatiza arrependimento, reconciliação e a disposição de oferecer uma nova oportunidade.",
    reference: "Lucas 15:11-24"
  },

  {
    text: "O pastor deixou as noventa e nove ovelhas para procurar aquela que havia se perdido e, quando a encontrou, alegrou-se. A parábola destaca o valor atribuído a uma única pessoa que estava afastada.",
    reference: "Lucas 15:3-7"
  },

  {
    text: "Uma mulher perdeu uma moeda e procurou cuidadosamente até encontrá-la; depois chamou suas amigas para celebrar. Jesus utiliza a história para ilustrar a alegria provocada pela recuperação daquilo que estava perdido.",
    reference: "Lucas 15:8-10"
  },

  {
    text: "Jesus ensinou que quem quiser segui-lo deve tomar sua cruz diariamente. A imagem indica que seguir seus ensinamentos envolve uma decisão contínua, e não apenas uma escolha feita uma única vez.",
    reference: "Lucas 9:23"
  },

  {
    text: "Jesus chamou os discípulos para amar não apenas aqueles que os amavam, mas também os inimigos, fazer o bem e emprestar sem esperar receber de volta. O ensinamento amplia o conceito de amor para além da reciprocidade.",
    reference: "Lucas 6:27-35"
  },

  {
    text: "Não condenem, e vocês não serão condenados; não julguem de maneira hipócrita, mas pratiquem misericórdia. Jesus também ensina que a medida usada para tratar os outros será usada como referência para nós.",
    reference: "Lucas 6:36-38"
  },

  {
    text: "Jesus perguntou aos discípulos quem eles diziam que ele era, e Pedro respondeu que ele era o Cristo de Deus. A declaração marcou um momento importante na compreensão dos discípulos sobre a identidade de Jesus.",
    reference: "Lucas 9:18-20"
  },

  {
    text: "Jesus lavou os pés dos discípulos e depois explicou que havia dado um exemplo para que eles também servissem uns aos outros. Um gesto normalmente associado à posição de servo tornou-se uma lição sobre humildade.",
    reference: "João 13:3-15"
  },

  {
    text: "Jesus orou para que seus seguidores fossem um, assim como ele e o Pai são um. A oração destaca a importância da unidade entre aqueles que professam seguir seus ensinamentos.",
    reference: "João 17:20-23"
  },

  {
    text: "Depois de ressuscitar, Jesus encontrou dois discípulos no caminho de Emaús e conversou com eles enquanto caminhavam. Eles só o reconheceram mais tarde, e a experiência transformou sua tristeza em esperança.",
    reference: "Lucas 24:13-32"
  },

  {
    text: "Quando Tomé afirmou que precisava ver para acreditar, Jesus apareceu aos discípulos e o convidou a verificar as marcas da crucificação. A narrativa termina destacando a fé daqueles que creem mesmo sem ter visto.",
    reference: "João 20:24-29"
  },

  {
    text: "Depois da ressurreição, Jesus perguntou três vezes a Pedro se ele o amava e, em seguida, confiou a ele o cuidado de suas ovelhas. A cena representa uma restauração de Pedro depois de suas três negações.",
    reference: "João 21:15-17"
  },

  {
    text: "No Pentecostes, os discípulos receberam o Espírito Santo e começaram a anunciar a mensagem em diferentes línguas. Pessoas de várias regiões ouviram a mensagem em suas próprias línguas, marcando o início de uma nova etapa da comunidade cristã.",
    reference: "Atos 2:1-11"
  },

  {
    text: "A comunidade cristã primitiva compartilhava seus bens, reunia-se para aprender, partir o pão e orar. O relato apresenta uma comunidade marcada por convivência, generosidade e cuidado mútuo.",
    reference: "Atos 2:42-47"
  },

  {
    text: "Pedro e João encontraram um homem que não podia andar desde o nascimento. Em nome de Jesus, Pedro o ajudou a se levantar, e o acontecimento levou muitas pessoas a prestarem atenção à mensagem dos apóstolos.",
    reference: "Atos 3:1-10"
  },

  {
    text: "Quando as autoridades proibiram Pedro e João de falar em nome de Jesus, eles responderam que não poderiam deixar de falar sobre aquilo que tinham visto e ouvido. O episódio mostra o conflito entre a nova comunidade cristã e algumas autoridades religiosas de Jerusalém.",
    reference: "Atos 4:18-20"
  },

  {
    text: "Estevão foi acusado diante do conselho judaico e apresentou uma longa defesa baseada na história de Israel. Depois de ser condenado, tornou-se o primeiro mártir cristão narrado no livro de Atos.",
    reference: "Atos 6:8-15; 7:54-60"
  },

  {
    text: "Filipe encontrou um oficial etíope lendo o profeta Isaías em sua carruagem. Depois de explicar a passagem e anunciar Jesus, Filipe o batizou, mostrando a expansão da mensagem cristã para além de Jerusalém.",
    reference: "Atos 8:26-39"
  },

  {
    text: "Saulo, que perseguia os seguidores de Jesus, encontrou Cristo no caminho para Damasco e ficou temporariamente cego. Depois de receber a visita de Ananias, recuperou a visão e começou uma nova fase de sua vida como anunciador do evangelho.",
    reference: "Atos 9:1-19"
  },

  {
    text: "Pedro teve uma visão na qual animais considerados impuros pela tradição judaica apareciam diante dele. O episódio preparou Pedro para visitar Cornélio, um gentio, e marcou uma mudança importante na expansão da comunidade cristã.",
    reference: "Atos 10:9-23"
  },

  {
    text: "Cornélio era um oficial romano que buscava a Deus. Pedro foi até sua casa e anunciou a mensagem de Jesus, e o episódio é apresentado como um momento decisivo na inclusão de não judeus na comunidade cristã.",
    reference: "Atos 10:1-48"
  },

  {
    text: "A comunidade cristã de Antioquia tornou-se um importante centro da expansão do evangelho e foi ali que os discípulos foram chamados de cristãos pela primeira vez. A cidade passou a desempenhar papel importante nas viagens missionárias de Paulo.",
    reference: "Atos 11:19-26"
  },

  {
    text: "Paulo e Barnabé foram enviados pela comunidade de Antioquia para anunciar o evangelho em outras regiões. Essa missão marcou o início de uma série de viagens que levariam o cristianismo a diferentes cidades do Mediterrâneo.",
    reference: "Atos 13:1-4"
  },

  {
    text: "Em Filipos, Paulo e Silas foram presos depois que uma jovem foi libertada de um espírito de adivinhação. Durante a noite, eles oravam e cantavam hinos quando um terremoto abriu as portas da prisão.",
    reference: "Atos 16:16-26"
  },

  {
    text: "Em Atenas, Paulo apresentou sua mensagem no Areópago e procurou estabelecer uma ponte entre o conhecimento religioso dos atenienses e sua pregação sobre Deus. O episódio mostra uma tentativa de comunicação com uma cultura e tradição filosófica diferentes.",
    reference: "Atos 17:16-34"
  },

  {
    text: "Paulo permaneceu em Corinto por um período significativo, trabalhando e ensinando enquanto anunciava o evangelho. A cidade tornou-se uma das comunidades mais importantes para sua missão no mundo grego.",
    reference: "Atos 18:1-11"
  },

  {
    text: "Em Éfeso, a mensagem cristã provocou mudanças econômicas porque pessoas abandonaram práticas relacionadas à magia e ao culto de ídolos. O conflito demonstra como novas crenças podiam afetar costumes e interesses econômicos de uma cidade.",
    reference: "Atos 19:11-20; 23-27"
  },

  {
    text: "Paulo reuniu os líderes da igreja de Éfeso e falou sobre seu trabalho, suas dificuldades e sua disposição de continuar sua missão apesar dos riscos. Ele também os incentivou a cuidar da comunidade que havia sido confiada a eles.",
    reference: "Atos 20:17-35"
  },

  {
    text: "Paulo foi preso em Jerusalém depois que surgiu um tumulto no templo. Nos anos seguintes, ele apresentou sua defesa diante de diferentes autoridades, continuando a anunciar sua fé mesmo enquanto estava sob custódia.",
    reference: "Atos 21:27-36; 24:10-21"
  },

  {
    text: "Diante do rei Agripa, Paulo contou sua história e explicou como sua experiência no caminho para Damasco mudou completamente sua missão. Mesmo sendo prisioneiro, ele continuou utilizando as oportunidades disponíveis para explicar sua fé.",
    reference: "Atos 26:1-23"
  },

  {
    text: "Paulo chegou a Roma e, embora estivesse sob custódia, recebeu permissão para permanecer em uma casa e receber visitantes. O livro de Atos termina mostrando-o anunciando o Reino de Deus e ensinando sobre Jesus.",
    reference: "Atos 28:16-31"
  },

  {
    text: "A Bíblia descreve a esperança de um novo céu e uma nova terra, onde Deus habitará com a humanidade e a morte, o luto e a dor não existirão mais. A visão encerra a narrativa bíblica com uma imagem de restauração.",
    reference: "Apocalipse 21:1-4"
  },

  {
    text: "No final da visão de Apocalipse, aparece a imagem de um rio de água da vida e da árvore da vida, associada à presença de Deus e à restauração da criação. A narrativa retoma imagens presentes desde o início de Gênesis.",
    reference: "Apocalipse 22:1-5"
  },

];

export default bibleTexts