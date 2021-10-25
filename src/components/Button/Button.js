import React from 'react';
import styles from './GuessButton.module.scss';

export const GuessButton = ({ text, handleGuess }) => (
  <div className={styles.wrapper}>
    {text}
  </div>
)