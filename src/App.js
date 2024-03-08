import logo from './logo.svg';
import './App.css';
import PanoramaRender from './PanoramaRenderer';
import GuessModal from './GuessModal';
import ScoreModal from './ScoreModal';
import { LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

function App() {

  const [coordinates, setCoordinates] = useState({
    guessModal: null,
    mapRender: null
  })

  console.log(coordinates)

  return (
    <div className="App">
      <div className='panoramaContainer'>
        <PanoramaRender setCoordinates={setCoordinates} />
      </div>
      <ScoreModal></ScoreModal>
      <GuessModal setCoordinates={setCoordinates}></GuessModal>
    </div>
  );
}

export default App;
