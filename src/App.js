import logo from './logo.svg';
import './App.css';
import GameController from './GameController';
import Game from './Game';
import GuessFrame from './GuessFrame';
import DistanceRender from './DistanceRender';
import { LoadScript } from '@react-google-maps/api';
import RoundContext from './RoundContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';

function App() {

  const [round, setRound] = useState(1);

  // console.log(coordinates)

  return (
    <div className="App">
      <RoundContext.Provider value={{round, setRound}}>
        <Router>
          <Routes>
            <Route path='/' element={<GameController />} />
            <Route path='/game' element={<Game />}/>
            <Route path='/guess' element={<GuessFrame />} />
            <Route path='/result' element={<DistanceRender />}/>
          </Routes>
        </Router>
      </RoundContext.Provider>
    </div>
  );
}

export default App;
