import React from 'react';
import { GuessButton } from '../GuessButton/GuessButton';

export const GameUI = ({ currentCharacter, nextCharacter, currentCharacterIndex }) => {
  return (
    <>
      <h1>{currentCharacter.name}</h1>
      <p>round: {currentCharacterIndex}</p>
      <button onClick={() => nextCharacter()}>next character</button>
      <GuessButton text="hufflepuffy" />
    </>
  )
}