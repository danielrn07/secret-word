const GameOver = ({ retry }) => {
  return (
    <>
      <p>Game Over</p>
      <button onClick={retry}>Tentar novamente</button>
    </>
  )
}

export default GameOver
