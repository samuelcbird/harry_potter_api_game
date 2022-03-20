import React, { useRef } from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Header = () => {

  const dialogRef = useRef();

  return (
    <header className={styles.wrapper}>
    <div className={styles.title}>
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >Sam's Harry Potter Quiz</motion.h2>
      <span
        className='material-icons-outlined'
        onClick={() => dialogRef.current.showModal()}
      >info</span>
    </div>

    <dialog ref={dialogRef}>  
      <span 
        className={clsx('material-icons', styles.close)}
        onClick={() => dialogRef.current.close()}  
      >close</span>
      <h4>Instructions</h4>
      The aim of the game is simply to choose the correct Hogwarts House for the character that is currently displayed on screen, and to survive for as long as possible.

      <h4>Credits</h4>
      Thank you to <a href="https://twitter.com/edinbeth?s=20&t=2HMDRj5ssdbaiozcy-WcMg" rel="noreferrer" target="_blank">Beth Fraser</a> who created and hosts the <a href="https://hp-api.herokuapp.com/" rel="noreferrer" target="_blank">Harry Potter API</a> from which I gather the data for this game.
    </dialog>
  </header>
  )
}