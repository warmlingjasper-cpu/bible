import './App.css'
import { useState } from 'react'
import GameResult from './components/GameResult'
import bibleTexts from './data/bibleTexts'
import taoismo from './data/taoismo'
import budismo from './data/budismo'
import estoicismo from './data/filosofia/estoicismo'
import filosofiaGrega from './data/filosofia/filosofia-grega'
import filosofiaRomana from './data/filosofia/filosofia-romana'
import alcorao from './data/alcorao'
import tora from './data/tora'
import salmos from './data/salmos'


  const themes = {
    Bíblia: bibleTexts,
    Taoismo: taoismo,
    Budismo: budismo,
    Estoicismo: estoicismo,
    "Filosofia Grega": filosofiaGrega,
    "Filosofia Romana": filosofiaRomana,
    Alcorão: alcorao,
    Torá: tora,
    Salmos: salmos
  }


function App() {

  const [result, setResult] = useState(null)
  const [selectedTheme, setSelectedTheme] = useState("Bíblia")


  function handlePlayerChoice() {

    const currentTexts = themes[selectedTheme]

    const randomIndex = Math.floor(Math.random() * currentTexts.length)

    setResult(currentTexts[randomIndex])
  }

  return (

    <div className="bible">
      <h1>Mensagem Diária</h1>

      <select
        className="theme-select"
        value={selectedTheme}
        onChange={(event) => setSelectedTheme(event.target.value)}
      >
        <optgroup label="Religiões e Escrituras">
          <option value="Bíblia">Bíblia</option>
          <option value="Alcorão">Alcorão</option>
          <option value="Torá">Torá</option>
          <option value="Salmos">Salmos</option>
        </optgroup>

        <optgroup label="Tradições Orientais">
          <option value="Budismo">Budismo</option>
          <option value="Taoismo">Taoismo</option>
        </optgroup>

        <optgroup label="Filosofia">
          <option value="Estoicismo">Estoicismo</option>
          <option value="Filosofia Grega">Filosofia Grega</option>
          <option value="Filosofia Romana">Filosofia Romana</option>
        </optgroup>
      </select>

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

