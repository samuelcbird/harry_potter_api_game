import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './App.module.scss';
import axios from "axios";
import { WhichHouse } from './components/WhichHouse/WhichHouse';
import { Header } from './components/Header/Header';

const filterCharactersWithHouses = characterArray => characterArray ? characterArray.filter(character => character.house) : null;

const App = () => {
  const [charactersWithHouses, setCharactersWithHouses] = useState([]);

  useEffect(() => {
    axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(res => {
        setCharactersWithHouses(filterCharactersWithHouses(res.data));
      })
  }, []);
  
  return (
    <>
    <Header />
      <div className={styles.padding}>
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
            <WhichHouse charactersWithHouses={charactersWithHouses} />
        </motion.div>
      </div>
    </>
  );
}

export default App;
