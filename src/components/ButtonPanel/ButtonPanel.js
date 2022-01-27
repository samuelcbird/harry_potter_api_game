import React from 'react';
import { Button } from '../Button/Button';
import styles from './ButtonPanel.module.scss';

export const ButtonPanel = ({ handleGuess }) => (
    <div className={styles.wrapper}>
      <Button text="Gryffindor" handleClick={handleGuess} />
      <Button text="Hufflepuff" handleClick={handleGuess} />
      <Button text="Ravenclaw" handleClick={handleGuess} />
      <Button text="Slytherin" handleClick={handleGuess} />
    </div>
)
