import { useEffect, useState } from 'react';
import Header from './Header';
import HeroTeam from './HeroTeam';
import Hero from './Hero';
import getData from './fetch';
import './App.css';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setPeople(data)
    })
  }, [])


  return (
    <div className='app'>
      <Header />
      <HeroTeam data={people} />
      <Hero/>
    </div>
  );
}

export default App;