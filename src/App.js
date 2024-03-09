import logo from './logo.svg';
import './App.css';
import GameController from './GameController';
import GuessFrame from './GuessFrame';
import DistanceRender from './DistanceRender';
import { LoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';

function App() {

  const [coordinates, setCoordinates] = useState({
    guessModal: null,
    mapRender: null
  })

  // console.log(coordinates)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<GameController />} />
          <Route path='/result' element={<DistanceRender />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
