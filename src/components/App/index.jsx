import { useState } from 'react'

import Game from '../Game'
import GameOver from '../GameOver'
import Home from '../Home'

import wordList from '../../data/words.json'
import { capitalize } from '../../data/utils'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const App = () => {
  const [stage, setStage] = useState(stages[0].name)
  const [words] = useState(wordList)

  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedWord, setPickedWord] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory()
    let wordLetters = capitalize(word).split('')
    
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setStage(stages[1].name)
  }

  const endGame = () => {
    setStage(stages[2].name)
  }

  const retry = () => {
    setStage(stages[0].name)
  }

  return (
    <>
      {stage === 'start' && <Home startGame={startGame} />}
      {stage === 'game' && <Game endGame={endGame} />}
      {stage === 'end' && <GameOver retry={retry} />}
    </>
  )
}

export default App
