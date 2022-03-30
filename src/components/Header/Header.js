import React, { useState } from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import { Modal } from '../Modal/Modal';

export const Header = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const toggleModal = () => {
    setModalHidden(!modalHidden);
  }

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
        onClick={() => toggleModal()}
      >info</span>
    </div>
    <Modal isHidden={modalHidden} toggle={toggleModal}>
      <h4>Instructions</h4>
      The aim of the game is to correctly identify which of the four Hogwarts Houses the witch or wizard on screen belongs to.

      <h4>Credits</h4>
      Thank you to <a href="https://twitter.com/edinbeth?s=20&t=2HMDRj5ssdbaiozcy-WcMg" rel="noreferrer" target="_blank">Beth Fraser</a> who created and hosts the <a href="https://hp-api.herokuapp.com/" rel="noreferrer" target="_blank">Harry Potter API</a> from which I gather the data for this game.
    </Modal>
  </header>
  )
}