function GameResult({ computerChoice, result }) {

  if (!result) {
    return <p>Play!</p>
  }


  return (
    <div className="game-result">
      <p>{result}</p>
    </div>
  )
}

export default GameResult