const salmos = [
  {
    text: "O Senhor é meu pastor; nada me faltará. Posso descansar sabendo que não estou sozinho no caminho.",
    reference: "Salmos — 23:1"
  },
  {
    text: "Mesmo quando atravesso um vale escuro, não preciso viver dominado pelo medo, porque Deus está comigo.",
    reference: "Salmos — 23:4"
  },
  {
    text: "Deus restaura a alma cansada e conduz aqueles que confiam nele por caminhos de justiça.",
    reference: "Salmos — 23:3"
  },
  {
    text: "Coloque seus planos nas mãos de Deus e confie nele. Nem tudo precisa ser resolvido de uma vez.",
    reference: "Salmos — 37:5"
  },
  {
    text: "Acalme-se diante de Deus e espere com paciência. Nem toda resposta precisa chegar imediatamente.",
    reference: "Salmos — 37:7"
  },
  {
    text: "Não se preocupe excessivamente com o sucesso dos outros. Continue fazendo o bem e siga seu próprio caminho.",
    reference: "Salmos — 37:1-3"
  },
  {
    text: "Confie no Senhor e faça o bem. Procure viver com fidelidade mesmo quando as circunstâncias forem difíceis.",
    reference: "Salmos — 37:3"
  },
  {
    text: "Entregue sua ansiedade a Deus, porque ele pode sustentar você quando o peso parecer grande demais.",
    reference: "Salmos — 55:22"
  },
  {
    text: "Quando estiver com medo, escolha confiar. A confiança pode ser maior do que aquilo que está causando o medo.",
    reference: "Salmos — 56:3"
  },
  {
    text: "Deus é refúgio e força, uma presença constante nos momentos de dificuldade.",
    reference: "Salmos — 46:1"
  },
  {
    text: "Não tenha medo quando tudo ao redor parecer instável. Existe um lugar de segurança mesmo em meio à tempestade.",
    reference: "Salmos — 46:2-3"
  },
  {
    text: "Pare por um momento e reconheça que Deus é Deus. Nem sempre agir mais é a resposta.",
    reference: "Salmos — 46:10"
  },
  {
    text: "Espere no Senhor. Tenha coragem e fortaleça o coração enquanto aguarda.",
    reference: "Salmos — 27:14"
  },
  {
    text: "O Senhor é minha luz e minha salvação; por que eu deveria viver dominado pelo medo?",
    reference: "Salmos — 27:1"
  },
  {
    text: "Mesmo quando pessoas se levantarem contra você, mantenha seu coração firme naquilo em que confia.",
    reference: "Salmos — 27:3"
  },
  {
    text: "Uma coisa é essencial: buscar a presença de Deus e permanecer próximo dele ao longo da vida.",
    reference: "Salmos — 27:4"
  },
  {
    text: "Deus está perto daqueles que estão com o coração quebrantado e sustenta quem atravessa momentos de sofrimento.",
    reference: "Salmos — 34:18"
  },
  {
    text: "Experimente e perceba a bondade de Deus. A fé também pode ser vivida como experiência, não apenas como ideia.",
    reference: "Salmos — 34:8"
  },
  {
    text: "Busque a paz e procure praticá-la. Não basta desejar paz; é preciso também persegui-la.",
    reference: "Salmos — 34:14"
  },
  {
    text: "Afaste-se do mal e pratique o bem. Procure construir aquilo que gostaria de encontrar no mundo.",
    reference: "Salmos — 34:14"
  },
  {
    text: "Aqueles que esperam no Senhor podem encontrar novas forças quando sentem que as próprias forças acabaram.",
    reference: "Salmos — 40:31"
  },
  {
    text: "Quando você não souber qual caminho seguir, espere em Deus sem abandonar a esperança.",
    reference: "Salmos — 40:1"
  },
  {
    text: "Deus conhece aquilo que existe dentro de você. Permita que sua oração também seja um momento de honestidade consigo mesmo.",
    reference: "Salmos — 139:23"
  },
  {
    text: "Peça a Deus que examine seu coração e mostre aquilo que precisa ser transformado.",
    reference: "Salmos — 139:23-24"
  },
  {
    text: "Não existe lugar onde você possa fugir da presença de Deus. Mesmo nos lugares mais distantes, ele continua presente.",
    reference: "Salmos — 139:7-10"
  },
  {
    text: "Antes de falar, lembre-se de que Deus conhece até aquilo que ainda não saiu da sua boca.",
    reference: "Salmos — 139:4"
  },
  {
    text: "Ensina-nos a contar nossos dias para que possamos adquirir um coração sábio.",
    reference: "Salmos — 90:12"
  },
  {
    text: "O tempo passa rapidamente. Use seus dias de maneira que, no futuro, você reconheça valor na vida que viveu.",
    reference: "Salmos — 90:10-12"
  },
  {
    text: "Que a bondade de Deus esteja sobre nós e confirme o trabalho das nossas mãos.",
    reference: "Salmos — 90:17"
  },
  {
    text: "Aquele que encontra abrigo em Deus pode descansar sob sua proteção.",
    reference: "Salmos — 91:1"
  },
  {
    text: "Você pode dizer: Deus é meu refúgio e minha fortaleza; nele colocarei minha confiança.",
    reference: "Salmos — 91:2"
  },
  {
    text: "Mesmo quando o perigo estiver próximo, não permita que o medo governe completamente seu coração.",
    reference: "Salmos — 91:5-6"
  },
  {
    text: "Comece o dia reconhecendo a bondade de Deus e termine-o lembrando da sua fidelidade.",
    reference: "Salmos — 92:1-2"
  },
  {
    text: "Os justos podem continuar produzindo frutos mesmo na velhice. Crescimento não precisa terminar com a idade.",
    reference: "Salmos — 92:12-14"
  },
  {
    text: "Cantarei ao Senhor porque ele tem sido bom comigo. A gratidão transforma a maneira como enxergamos nossa própria história.",
    reference: "Salmos — 13:5-6"
  },
  {
    text: "Mesmo quando não consigo enxergar uma saída, escolho confiar na bondade de Deus.",
    reference: "Salmos — 13:5"
  },
  {
    text: "O Senhor é minha força e meu escudo. Quando confio nele, meu coração encontra motivo para continuar.",
    reference: "Salmos — 28:7"
  },
  {
    text: "Transforme sua angústia em oração. Falar com Deus também pode ser uma maneira de atravessar momentos difíceis.",
    reference: "Salmos — 30:2"
  },
  {
    text: "O choro pode durar uma noite, mas a alegria pode chegar pela manhã. Nenhum momento difícil precisa definir toda a sua história.",
    reference: "Salmos — 30:5"
  },
  {
    text: "Confie em Deus e seja forte. Fortaleça o coração enquanto espera por aquilo que ainda não chegou.",
    reference: "Salmos — 31:24"
  },
  {
    text: "Feliz aquele que encontra sua segurança em Deus em vez de colocar toda a sua confiança nas próprias forças.",
    reference: "Salmos — 40:4"
  },
  {
    text: "Crie em mim um coração puro e renova dentro de mim um espírito firme.",
    reference: "Salmos — 51:10"
  },
  {
    text: "Reconhecer seus erros não precisa ser o fim. Pode ser o começo de uma transformação verdadeira.",
    reference: "Salmos — 51:1-3"
  },
  {
    text: "Deus não despreza um coração quebrantado e verdadeiramente arrependido.",
    reference: "Salmos — 51:17"
  },
  {
    text: "Minha alma encontra descanso em Deus; dele vem minha esperança.",
    reference: "Salmos — 62:5"
  },
  {
    text: "Somente Deus é minha rocha e minha salvação. Nele encontro estabilidade quando tudo parece incerto.",
    reference: "Salmos — 62:6"
  },
  {
    text: "Lembre-se das coisas boas que Deus já fez. A memória daquilo que você superou pode fortalecer sua esperança.",
    reference: "Salmos — 77:11-12"
  },
  {
    text: "Dê graças ao Senhor porque ele é bom e sua misericórdia permanece.",
    reference: "Salmos — 107:1"
  },
  {
    text: "Agradeça não apenas pelo que recebeu, mas também pela presença de Deus ao longo da caminhada.",
    reference: "Salmos — 107:8-9"
  },
  {
    text: "A palavra de Deus pode servir como lâmpada para seus passos e luz para o caminho que está diante de você.",
    reference: "Salmos — 119:105"
  },
  {
    text: "Quando você não souber qual será o próximo passo, concentre-se na luz suficiente para enxergar o caminho de hoje.",
    reference: "Salmos — 119:105"
  },
  {
    text: "Aqueles que semeiam com lágrimas podem colher com alegria. O sofrimento de hoje não precisa ser o resultado final.",
    reference: "Salmos — 126:5"
  }
]

export default salmos