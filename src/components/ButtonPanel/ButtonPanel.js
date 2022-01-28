import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import styles from './ButtonPanel.module.scss';

const wrapperVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      // delay: 0.2,
      // when: "beforeChildren",
      staggerChildren: 4,
      // delayChildren: 0.3
    }
  }
}

export const ButtonPanel = ({ handleGuess }) => (
    <motion.div className={styles.wrapper}
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
      >
      <Button text="Gryffindor" handleClick={handleGuess} />
      <Button text="Hufflepuff" handleClick={handleGuess} />
      <Button text="Ravenclaw" handleClick={handleGuess} />
      <Button text="Slytherin" handleClick={handleGuess} />
    </motion.div>
)
