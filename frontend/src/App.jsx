import './App.css'
import { useState } from 'react'
import GameResult from './components/GameResult'


function App() {

  const [result, setResult] = useState(null)


  function handlePlayerChoice() {

    const gameResult = ["text1", "text2", "text3"]
    const randomIndex = Math.floor(Math.random() * gameResult.length)


    setResult(gameResult[randomIndex])

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
            Play
          </button>
      </main>
    </div>

  )
}

export default App

