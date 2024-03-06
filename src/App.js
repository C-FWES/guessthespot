import logo from './logo.svg';
import './App.css';
import MapRender from './MapRenderer';
import { LoadScript } from '@react-google-maps/api';

function App() {

  const key = process.env.REACT_APP_MAP_API_KEY

  return (
    <div className="App">
      {/* <LoadScript googleMapsApiKey={key}> */}
      <MapRender />
      {/* </LoadScript> */}
    </div>
  );
}

export default App;
