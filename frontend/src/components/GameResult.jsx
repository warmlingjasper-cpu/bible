function GameResult({ result }) {

  if (!result) {
    return <p>Clique em 🙏 para receber sua mensagem!</p>
  }


  return (
    <div className="game-result">
      <p>"{result.text}"</p>
      <small>{result.reference}</small>
    </div>
  )
}

export default GameResult