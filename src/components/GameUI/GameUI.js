import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';

export const GameUI = ({ currentCharacter, handleGuess, currentCharacterIndex }) => {

  const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.h1
          key={currentCharacter.name}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit">
          {currentCharacter.name}
        </motion.h1>
      </AnimatePresence>
      <ButtonPanel handleGuess={handleGuess} />
      <h3><i>You've survived {currentCharacterIndex} {currentCharacterIndex === 1 ? 'round' : 'rounds'}...</i></h3>
    </div>
  )
}