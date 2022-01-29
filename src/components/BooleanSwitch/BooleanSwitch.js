import styles from './BooleanSwitch.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const BooleanSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={clsx(styles.wrapper, toggle ? styles.flex_start : styles.flex_end )}>
      <motion.div 
        transition={{ duration: 0.1 }}
        layout 
        onClick={() => setToggle(!toggle)}
        ></motion.div>
    </div>
  )
}