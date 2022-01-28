import React from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >Sam's Gee Whiz Happy Harry Potter Quiz</motion.h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 120" stroke-linejoin="round"><path d="M0 120L75 103.3C150 86.9 300 53.1 450 46.7 600 40 750 60 900 73.3 1050 86.9 1200 93.1 1350 93.3 1500 93.1 1650 86.9 1725 83.3L1800 80 1800 0 1725 0C1650 0 1500 0 1350 0 1200 0 1050 0 900 0 750 0 600 0 450 0 300 0 150 0 75 0L0 0 0 120Z" fill="#efefef"/></svg>
    </div>
  )
}