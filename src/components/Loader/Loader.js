import { motion } from "framer-motion";
import styles from './Loader.module.scss';
import logo from './favicon.png';

const variants = {
  animationOne: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1,
      ease: [0.22, 0.5, 0.3, 0.75]
    }
  }
};

export const Loader = () => {
  return (
    <motion.div
      variants={variants}
      animate="animationOne"
      className={styles.loader}
    >
      <img alt="loading" src={logo}></img>
    </motion.div>
  );
};
