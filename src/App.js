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
import ScoreContext from './ScoreContext';

function App() {

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  // console.log(coordinates)

  return (
    <div className="App">
      <ScoreContext.Provider value={{score, setScore}}>
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
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
