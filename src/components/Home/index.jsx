import { Container, Subtitle, Title } from './styles'

function Home() {
  return (
    <Container>
      <Title>Palavra Secreta</Title>
      <Subtitle>Clique no botão para iniciar um novo jogo</Subtitle>
      <button>Iniciar</button>
    </Container>
  )
}

export default Home
