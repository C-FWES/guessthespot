import { useState } from 'react'
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';
import './App.css'

const containerStyle = {
    width: '800px',
    height: '800px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const key = process.env.REACT_APP_MAP_API_KEY
  
  function MapRender() {
    return (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <StreetViewPanorama 
          position={center} 
          visible={true}
          options={{
            pov: {
              heading: 0,  // direction of camera (0 - 360)
              pitch: 0       // angle of camera (-90 [down] to 90 [up])
            }
          }}/>
        </GoogleMap>
    )
  }

export default MapRender;