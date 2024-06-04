import { useEffect, useRef, useState } from 'react'

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

const INITIAL_GUESSES = 5

const Game = ({ endGame, score, setScore }) => {
  const [words] = useState(wordList)
  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedWord, setPickedWord] = useState('')
  const [letters, setLetters] = useState([])
  const [letter, setLetter] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(INITIAL_GUESSES)
  const [newGame, setNewGame] = useState(false)

  const letterInputRef = useRef(null)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  useEffect(() => {
    const { word, category } = pickWordAndCategory()
    let wordLetters = word.split('')

    setPickedCategory(capitalize(category).replaceAll('_', ' '))
    setPickedWord(word)
    setLetters(wordLetters)
  }, [newGame])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, normalizedLetter])
    } else {
      setWrongLetters((prevWrongLetters) => [...prevWrongLetters, normalizedLetter])
      setGuesses((prevState) => prevState - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) endGame()
    clearLetterStates
  }, [guesses])

  useEffect(() => {
    if (letters.length === 0) return

    const uniqueLetters = [...new Set(letters)]

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((prevState) => prevState + 50)
      clearLetterStates()
      setGuesses(INITIAL_GUESSES)
      setNewGame((prevState) => !prevState)
    }
  }, [guessedLetters, letters])

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter('')
    letterInputRef.current.focus()
  }

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
          <form onSubmit={handleSubmit}>
            <input
              ref={letterInputRef}
              type='text'
              pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'
              maxLength={1}
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
            />
            <button type='submit'>Jogar</button>
          </form>
        </LetterContainer>
      </WordContainer>
      <WrongLettersContainer>
        <p>Letras já utilizadas</p>
        <div>
          {wrongLetters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </WrongLettersContainer>
    </div>
  )
}

export default Game
