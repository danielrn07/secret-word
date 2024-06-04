import { Subtitle, Title } from './styles'
import '../../styles/index.css'

function Home({ startGame }) {
  return (
    <div className='container'>
      <Title>Palavra Secreta</Title>
      <Subtitle>Clique no botão para iniciar um novo jogo</Subtitle>
      <button onClick={startGame}>Iniciar</button>
    </div>
  )
}

export default Home
