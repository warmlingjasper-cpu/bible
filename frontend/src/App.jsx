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
      <h2>Bible</h2>

      <main className="box">
        <p>
          <GameResult
            result={result}
          />
        </p>
          <button
            className="play"
            onClick={handlePlayerChoice}
          >
            🙏
          </button>
      </main>
    </div>

  )
}

export default App

