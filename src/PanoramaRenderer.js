import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';
import './App.css'

const containerStyle = {
    width: '100%',
    height: '100%'
  };

  function MapRender() {
    
    const [center, setCenter] = useState(null)

    function generateRandomPoint() {
      var sv = new window.google.maps.StreetViewService();
      sv.getPanoramaByLocation(
        new window.google.maps.LatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), 500, processSVData
      );
    }
  
    function processSVData(data, status) {
      if (status == window.google.maps.StreetViewStatus.OK) {
        console.log("EE " + data.location.latLng.toUrlValue(6));
        console.log(data);
        setCenter(data.location.latLng);
      } else generateRandomPoint();
    }

    useEffect(() => {
      generateRandomPoint()
    }, [])

    return center ? (
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
    ) : null
  }

export default MapRender;