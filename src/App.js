import { useEffect, useState } from 'react';
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
      <section className={styles.padding}>
        <div className={styles.wrapper}>
          <WhichHouse charactersWithHouses={charactersWithHouses} />
        </div>
      </section>
    </>
  );
}

export default App;
