import '../App.css'

function GameResult({ result }) {

  if (!result) {
    return (
    <div className='game-result'>
      <p>Clique em 🙏 para receber sua mensagem</p>
    </div>
    )
  }


  return (
    <div className="game-result">
      <p>"{result.text}"</p>
      <small>{result.reference}</small>
    </div>
  )
}

export default GameResult