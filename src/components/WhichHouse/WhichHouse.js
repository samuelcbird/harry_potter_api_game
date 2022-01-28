import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './WhichHouse.module.scss';
import { GameUI } from '../GameUI/GameUI';
import { Button } from '../Button/Button';

const shuffleArray = array => {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
    // swap
    let t = array[i]; 
    array[i] = array[r]; 
    array[r] = t
  }
  return array;
}

const useShuffledObjectArray = array => {
  const [fullArray, setFullArray] = useState([]);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [currentElement, setCurrentElement] = useState({});
  const [usedElements, setUsedElements] = useState([]);

  const setArray = useCallback(array => {
    const shuffled = shuffleArray(array);
    setFullArray(shuffled);
    setCurrentElement(shuffled[currentElementIndex]);
  }, [currentElementIndex]);

  useEffect(() => {
    if (array) {
      setArray(array); 
    }
  }, [array, setArray])

  const nextElement = () => {
    setUsedElements([
      ...usedElements,
      currentElement
    ])
    setCurrentElementIndex(i => i + 1);
    setCurrentElement(fullArray[currentElementIndex]);
  }

  const reset = newArray => {
    setCurrentElementIndex(0)
    setCurrentElement({})
    setUsedElements([])
    setArray(newArray);
  }

  return [currentElement, nextElement, currentElementIndex, reset];
}

export const WhichHouse = ({ charactersWithHouses }) => {
  const [currentCharacter, nextCharacter, currentCharacterIndex, resetCharacters] = useShuffledObjectArray(charactersWithHouses);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = guess => {
    if (guess === currentCharacter.house) {
      nextCharacter();
    } else {
      setGameOver(true);
    }
  }

  const handlePlayAgain = () => {
    resetCharacters(charactersWithHouses);
    setGameOver(false);
  }

  if (gameOver) {
    return (
      <div className={styles.wrapper}>
        <h1><i>You survived {currentCharacterIndex} {currentCharacterIndex === 1 ? 'round' : 'rounds'}.</i></h1>
        <Button text="Play again?" handleClick={handlePlayAgain} />
      </div>
    )
  }
  else if (currentCharacter) {
    return (
      
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // className={styles.wrapper}
        >
          <h3>Can you correctly identify the character's Hogwarts house?</h3>
        <GameUI currentCharacter={currentCharacter} handleGuess={handleGuess} currentCharacterIndex={currentCharacterIndex} />
        </motion.div>
    )
  } else {
    return (
      <div className={styles.wrapper}>
        Loading...
      </div>
    )
  }
}