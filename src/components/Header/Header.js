import React from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
    <div className={styles.title}>
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >Sam's Harry Potter Quiz</motion.h2>
    </div>
  </header>
  )
}