import './App.css'
import { useState } from 'react'
import GameResult from './components/GameResult'
import bibleTexts from './data/bibleTexts'


function App() {

  const [result, setResult] = useState(null)


  function handlePlayerChoice() {

    const randomIndex = Math.floor(Math.random() * bibleTexts.length)


    setResult(bibleTexts[randomIndex])

  }

  return (

    <div className="bible">
      <h1>Palavra Diária</h1>

      <main className="box">
       
        <GameResult result={result} />

        <div className="decoration"></div>

        <button
          className="prayer-button"
          onClick={handlePlayerChoice}
        >
          🙏
        </button>
      </main>
    </div>

  )
}

export default App

