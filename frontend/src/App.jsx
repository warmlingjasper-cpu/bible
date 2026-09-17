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
import poesia from './data/poesia'
import civilizacoes from './data/historia/civilizacoes'
import idadecontemporanea from './data/historia/idadecontemporanea'
import idademedia from './data/historia/idademedia'
import idademoderna from './data/historia/idademoderna'



  const themes = {
    Bíblia: bibleTexts,
    Taoismo: taoismo,
    Budismo: budismo,
    Estoicismo: estoicismo,
    "Filosofia Grega": filosofiaGrega,
    "Filosofia Romana": filosofiaRomana,
    Alcorão: alcorao,
    Torá: tora,
    Salmos: salmos,
    Poesia: poesia,
    "Idade Média": idademedia,
    "Idade Moderna": idademoderna,
    "História Contemporânea": idadecontemporanea,
    Civilizações: civilizacoes,
  }


function App() {

  const [result, setResult] = useState(null)
  const [selectedTheme, setSelectedTheme] = useState("Bíblia")
  const religiousThemes = [
    "Bíblia",
    "Alcorão",
    "Torá",
    "Salmos",
    "Budismo",
    "Taoismo",
    "Poesia",
  ]

  const buttonEmoji = religiousThemes.includes(selectedTheme) ? "🙏" : "🔎"

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

        <optgroup label="Poesia">
          <option value="Poesia">Poesia</option>
        </optgroup>

        <optgroup label="História">
          <option value="Civilizações">Civilizações</option>
          <option value="Idade Média">Idade Média</option>
          <option value="Idade Moderna">Idade Moderna</option>
          <option value="História Contemporânea">História Contemporânea</option>
        </optgroup>
      </select>

      <main className="box">
       
        <GameResult
          result={result}
          selectedTheme={selectedTheme}
        />

        <div className="decoration"></div>

        <button
          className="prayer-button"
          onClick={handlePlayerChoice}
        >
          {buttonEmoji}
        </button>
      </main>
    </div>

  )
}

export default App

