import React from 'react';
import styles from './Modal.module.scss';
import clsx from 'clsx';

export const Modal = ({ isHidden, toggle, children }) => {
  
  if (isHidden === false) {
    return (
      <div className={styles.modal} onClick={() => toggle()}>
        <div className={styles.content}>
          <span 
            className={clsx('material-icons', styles.close)}
            onClick={() => toggle()}  
          >close</span>
          {children}
        </div>
      </div>
    )
  } else {
    return ( <></> )
  }
}