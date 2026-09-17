import '../App.css'

function GameResult({ result, selectedTheme }) {

  if (!result) {
    return (
    <div className="game-result">
      <p>
        Clique em{" "}
        {[
          "Bíblia",
          "Alcorão",
          "Torá",
          "Salmos",
          "Budismo",
          "Taoismo",
          "Poesia",
        ].includes(selectedTheme)
          ? "🙏"
          : "🔎"}{" "}
        para receber sua mensagem
      </p>
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