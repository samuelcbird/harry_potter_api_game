import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({ text, handleGuess }) => (
  <div className={clsx(styles.wrapper, styles[text.toLowerCase()])} onClick={() => handleGuess(text)}>
    {text}
  </div>
)