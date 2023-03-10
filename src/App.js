import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import axios from "axios";
import { WhichHouse } from './components/WhichHouse/WhichHouse';
import { Header } from './components/Header/Header';

const filterCharactersWithHouses = characterArray => characterArray ? characterArray.filter(character => character.house) : null;

const App = () => {
  const [apiDown, setApiDown] = useState(false);
  const [charactersWithHouses, setCharactersWithHouses] = useState([]);

  useEffect(() => {
		// https://hp-api.onrender.com/api/characters
    axios.get('https://hp-api.onrender.com/api/characters')
      .then(res => {
        setCharactersWithHouses(filterCharactersWithHouses(res.data));
      })
      .catch(error => {
        setApiDown(true);
      })
  }, []);
  
  return (
    <>
      <Header />
      <section className={styles.padding}>

        { apiDown ?
        (
          <div className={styles.wrapper}>
            <p>Unfortunately the third party API which provides our Harry Potter data seems to be down. Sorry for the inconvenience.</p>
             
            <p>Refresh the page to try again.</p>
          </div>
        ) :
        (
          <div className={styles.wrapper}>
            <WhichHouse charactersWithHouses={charactersWithHouses} />
          </div>
        )
        }


      </section>
    </>
  );
}

export default App;
