import { useEffect, useState } from 'react'

import { capitalize } from '../../data/utils'
import wordList from '../../data/words.json'

import '../../styles/index.css'
import {
  BlankSquare,
  Letter,
  LetterContainer,
  Points,
  Title,
  WordContainer,
  WrongLettersContainer,
} from './styles'

const Game = ({ endGame }) => {
  const [words] = useState(wordList)
  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedWord, setPickedWord] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  useEffect(() => {
    const { word, category } = pickWordAndCategory()
    let wordLetters = capitalize(word).split('')

    setPickedCategory(capitalize(category).replaceAll('_', ' '))
    setPickedWord(word)
    setLetters(wordLetters)
  }, [])

  return (
    <div className='container'>
      <Points>Pontuação: {score}</Points>
      <Title>Adivinhe a palavra</Title>
      <WordContainer>
        <h2>Dica: {pickedCategory}</h2>
        <span>Você ainda tem {guesses} tentativas</span>
        <div>
          {letters.map((letter, index) =>
            guessedLetters.includes(letter) ? (
              <Letter key={index}>{letter}</Letter>
            ) : (
              <BlankSquare key={index} />
            )
          )}
        </div>
        <LetterContainer>
          <p>Tente adivinhar uma letra da palavra:</p>
          <form>
            <input type='text' />
            <button>Jogar</button>
          </form>
        </LetterContainer>
      </WordContainer>
      <WrongLettersContainer>
        <p>Letras já utilizadas</p>
        <div>
          {wrongLetters.map((letter, index) => (
            <span key={index}>
              {letter}
            </span>
          ))}
        </div>
      </WrongLettersContainer>
    </div>
  )
}

export default Game
