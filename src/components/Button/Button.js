import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';


export const Button = ({ text, handleClick }) => (
  <div className={styles.wrapper} onClick={() => handleClick(text)}>
    <motion.span
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ y: 1, scale: 1 }}
    >{text}</motion.span>
  </div>
)