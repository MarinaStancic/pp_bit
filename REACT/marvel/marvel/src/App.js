import { useEffect, useState } from 'react';
import Header from './Header';
import HeroTeam from './HeroTeam';
// import AddHero from './AddHero';
import HeroPage from './HeroPage';
import getData from './fetch';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setPeople(data)
    })
  }, [])


  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <HeroTeam data={people}>
          </HeroTeam>
        </Route>
        <Route path='/hero/:id' component={HeroPage} />
      </Switch>

    </div>
  );
}

export default App;