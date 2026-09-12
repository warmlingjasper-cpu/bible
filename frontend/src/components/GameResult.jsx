function GameResult({ result }) {

  if (!result) {
    return <p>Play!</p>
  }


  return (
    <div className="game-result">
      <p>"{result.text}"</p>
      <small>{result.reference}</small>
    </div>
  )
}

export default GameResult