import styled from 'styled-components'

export const Points = styled.p`
  font-size: 1.6rem;
`

export const Title = styled.h1`
  font-size: 3.2rem;
`

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-grow: 1;

  h2 {
    font-size: 2.4rem;
  }

  span {
    font-size: 1.6rem;
  }

  div {
    display: flex;

    div + div {
      margin-left: -3px;
    }
  }
`

export const Letter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  line-height: 0;
  font-size: 7rem;
  text-transform: uppercase;
  background-color: ${(props) => props.$backgroundColor || 'rgb(255, 255, 255)'};
  border: 3px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-weight: bold;
  transition: background-color 0.5s ease-in;
`

export const BlankSquare = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  line-height: 0;
  font-size: 7rem;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  border: 3px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-weight: bold;
`

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  p {
    font-size: 1.6rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form input {
    width: 5rem;
    height: 5rem;
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    outline: none;
    border-radius: 0.4rem 0 0 0.4rem;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    text-transform: capitalize;
  }

  form button {
    height: 5rem;
    border-radius: 0 0.4rem 0.4rem 0;
  }
`

export const WrongLettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;

  p {
    font-size: 1.6rem;
  }

  div {
    display: flex;
    height: 2rem;
  }

  span {
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  span::after {
    content: ' - ';
    white-space: pre-wrap;
  }

  span:last-child::after {
    content: '';
  }
`
