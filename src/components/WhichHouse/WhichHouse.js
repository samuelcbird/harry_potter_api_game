import React, { useState, useEffect, useCallback } from 'react';
import { GameUI } from '../GameUI/GameUI';

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

  return [currentElement, nextElement, currentElementIndex];
}

export const WhichHouse = ({ charactersWithHouses }) => {
  const [currentCharacter, nextCharacter, currentCharacterIndex] = useShuffledObjectArray(charactersWithHouses);

  if (currentCharacter) {
    return <GameUI currentCharacter={currentCharacter} nextCharacter={nextCharacter} currentCharacterIndex={currentCharacterIndex} />
  } else {
    return (
      <>
        Loading...
      </>
    )
  }
}