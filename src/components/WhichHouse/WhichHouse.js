import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { GameUI } from '../GameUI/GameUI';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

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

const animationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2, 
      when: "beforeChildren"
    }
  }, 
  exit: {
    opacity: 0,
  }
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

  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <motion.div layout key={gameOver ? 0 : currentCharacter ? 1 : 2}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {gameOver ? (
            <div>
              <h1><i>You survived {currentCharacterIndex} {currentCharacterIndex === 1 ? 'round' : 'rounds'}.</i></h1>
              <Button text="Play again?" handleClick={handlePlayAgain} />
            </div>
          ) : currentCharacter ? (
            <div>
              <h3>Can you correctly identify the character's Hogwarts house?</h3>
              <GameUI currentCharacter={currentCharacter} handleGuess={handleGuess} currentCharacterIndex={currentCharacterIndex} />
            </div>
          ) : (
            <div>
              <Loader />
            </div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    </AnimatePresence>
  )

}