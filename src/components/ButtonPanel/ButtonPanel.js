import React from 'react';
import { Button } from '../Button/Button';
import styles from './ButtonPanel.module.scss';

export const ButtonPanel = ({ handleGuess }) => (
    <div className={styles.wrapper}>
      <Button text="Gryffindor" handleGuess={handleGuess} />
      <Button text="Hufflepuff" handleGuess={handleGuess} />
      <Button text="Ravenclaw" handleGuess={handleGuess} />
      <Button text="Slytherin" handleGuess={handleGuess} />
    </div>
)
