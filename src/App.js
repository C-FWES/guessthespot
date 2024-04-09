import logo from './logo.svg';
import './App.css';
import GameController from './GameController';
import Game from './Game';
import GuessFrame from './GuessFrame';
import DistanceRender from './DistanceRender';
import PlayWorld from './PlayWorld';
import PlayCities from './PlayCities';
import { LoadScript } from '@react-google-maps/api';
import RoundContext from './RoundContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import ScoreContext from './ScoreContext';
import ModeContext from './ModeContext';

function App() {

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(null)

  // console.log(coordinates)

  return (
    <div className="App">
      <ModeContext.Provider value={{gameMode, setGameMode}}>
      <ScoreContext.Provider value={{score, setScore}}>
        <RoundContext.Provider value={{round, setRound}}>
          <Router>
            <Routes>
              <Route path='/' element={<GameController />} />
              <Route path='/world' element={<PlayWorld />} />
              <Route path='/cities' element={<PlayCities />} />
              <Route path='/game' element={<Game />}/>
              <Route path='/guess' element={<GuessFrame />} />
              <Route path='/result' element={<DistanceRender />}/>
            </Routes>
          </Router>
        </RoundContext.Provider>
      </ScoreContext.Provider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
