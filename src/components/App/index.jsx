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
  return (
    <>
      {stage === 'start' && <Home />}
      {stage === 'game' && <Game />}
      {stage === 'end' && <GameOver />}
    </>
  )
}

export default App
