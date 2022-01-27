import React from 'react';
// import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({ text, handleClick }) => (
  <div className={styles.wrapper} onClick={() => handleClick(text)}>
    <span>{text}</span>
  </div>
)