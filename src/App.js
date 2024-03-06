import logo from './logo.svg';
import './App.css';
import PanoramaRender from './PanoramaRenderer';
import GuessModal from './GuessModal';
import { LoadScript } from '@react-google-maps/api';

function App() {

  const key = process.env.REACT_APP_MAP_API_KEY

  return (
    <div className="App">
      <div className='panoramaContainer'>
        <PanoramaRender />
      </div>
      <GuessModal></GuessModal>
    </div>
  );
}

export default App;
