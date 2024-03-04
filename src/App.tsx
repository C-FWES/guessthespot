import { useState } from 'react'
import MapRender from './MapRenderer'
import './App.css'
import { LoadScript } from '@react-google-maps/api';

function App() {

  const mapKey = import.meta.env.VITE_MAP_API_KEY;
  const lib = ["places"];

  return (
    <>
      <div>
        <LoadScript googleMapsApiKey={mapKey} libraries={lib}>
        <MapRender />
        </LoadScript>
      </div>
    </>
  )
}

export default App
