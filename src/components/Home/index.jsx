import { Container, Subtitle, Title } from './styles'

function Home({ startGame }) {
  return (
    <Container>
      <Title>Palavra Secreta</Title>
      <Subtitle>Clique no botão para iniciar um novo jogo</Subtitle>
      <button onClick={startGame}>Iniciar</button>
    </Container>
  )
}

export default Home
