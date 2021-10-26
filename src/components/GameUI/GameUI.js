import React from 'react';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';

export const GameUI = ({ currentCharacter, handleGuess, currentCharacterIndex }) => {

  return (
    <div>
      <h1>{currentCharacter.name}</h1>
      <ButtonPanel handleGuess={handleGuess} />
      <h3><i>You've survived {currentCharacterIndex} {currentCharacterIndex === 1 ? 'round' : 'rounds'}...</i></h3>
    </div>
  )
}