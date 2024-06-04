import { useState } from 'react'

import Game from '../Game'
import GameOver from '../GameOver'
import Home from '../Home'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const App = () => {
  const [stage, setStage] = useState(stages[0].name)
  const [score, setScore] = useState(0)
  
  const startGame = () => {
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
      {stage === 'game' && <Game endGame={endGame} score={score} setScore={setScore} />}
      {stage === 'end' && <GameOver retry={retry} />}
    </>
  )
}

export default App
