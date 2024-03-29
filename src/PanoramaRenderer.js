import React from 'react';
import { useEffect, useState, useMemo } from 'react'
import GuessModal from './GuessModal';
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';
import './App.css'

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const cities = {
    'Paris': { lat: [48.8566 - 0.1, 48.8566 + 0.1], lng: [2.3522 - 0.1, 2.3522 + 0.1] },
    'New York': { lat: [40.7128 - 0.1, 40.7128 + 0.1], lng: [-74.0060 - 0.1, -74.0060 + 0.1] },
    'Mississauga': { lat: [43.5890 - 0.1, 43.5890 + 0.1], lng: [-79.6441 - 0.1, -79.6441 + 0.1]},
    'Toronto': { lat: [43.6532 - 0.1, 43.6532 + 0.1], lng: [-79.3832 - 0.1, -79.3832 + 0.1]},
    'San Francisco': { lat: [37.7749 - 0.1, 37.7749 + 0.1], lng: [-122.4194 - 0.1, -122.4194 + 0.1]},
    'Amsterdam': { lat: [52.3676 - 0.1, 52.3676 + 0.1], lng: [-4.9041 - 0.1, -4.9041 + 0.1]},
    'London': { lat: [51.5072 - 0.1, 51.5072 + 0.1], lng: [-0.1276 - 0.1, -0.1276 + 0.1]},
    'Madrid': { lat: [40.4168 - 0.1, 40.4168 + 0.1], lng: [-3.7038 - 0.1, -3.7038 + 0.1]},
    'Dublin': { lat: [53.3498 - 0.1, 53.3498 + 0.1], lng: [-6.2603 - 0.1, -6.2603 + 0.1]},
    'Singapore': { lat: [1.3521 - 0.1, 1.3521 + 0.1], lng: [103.8198 - 0.1, 103.8198 + 0.1]},
    'Sydney': { lat: [-33.8688 - 0.1, -33.8688 + 0.1], lng: [151.2093 - 0.1, 151.2093 + 0.1]},
    'Lille': { lat: [50.6292 - 0.1, 50.6292 + 0.1], lng: [3.0573 - 0.1, 3.0573 + 0.1]},
    'Lisbon': { lat: [38.7223 - 0.1, 38.7223 + 0.1], lng: [-9.1393 - 0.1, -9.1393 + 0.1]},
    'Montreal': { lat: [45.5019 - 0.1, 45.5019 + 0.1], lng: [-73.5674 - 0.1, -73.5674 + 0.1]},
    'Miami': { lat: [25.7617 - 0.1, 25.7617 + 0.1], lng: [-80.1918 - 0.1, -80.1918 + 0.1]},
    'Denver': { lat: [39.7392 - 0.1, 39.7392 + 0.1], lng: [-104.9903 - 0.1, -104.9903 + 0.1]},
    'Monterrey': { lat: [25.6866 - 0.1, 25.6866 + 0.1], lng: [-100.3161 - 0.1, -100.3161 + 0.1]},
    'Cape Town': { lat: [-33.9221 - 0.1, -33.9221 + 0.1], lng: [18.4231 - 0.1, 18.4231 + 0.1]},
    'Rome': { lat: [41.8967 - 0.1, 41.8967 + 0.1], lng: [12.4822 - 0.1, 12.4822 + 0.1]},
  };

  function PanoramaRender({setCoordinates, gameMode}) {
    
    const [center, setCenter] = useState(null)
    const [loading, setLoading] = useState(false)
    let panoramaFound = false;

    function generateRandomPoint() {
      if (loading || panoramaFound) return;
      setLoading(true);
      var sv = new window.google.maps.StreetViewService();
      if (gameMode === 'worldMoving') {
        sv.getPanoramaByLocation(
          new window.google.maps.LatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), 500, processSVData
        );
      } else if (gameMode === 'citiesMoving') {
        // get a random city
        const city = cities[Object.keys(cities)[Math.floor(Math.random() * Object.keys(cities).length)]];
        const lat = Math.random() * (city.lat[1] - city.lat[0]) + city.lat[0];
        const lng = Math.random() * (city.lng[1] - city.lng[0]) + city.lng[0];
        sv.getPanoramaByLocation(
          new window.google.maps.LatLng(lat, lng), 500, processSVData
        );
      }
    }
  
    function processSVData(data, status) {
      setLoading(false);
      if (status == window.google.maps.StreetViewStatus.OK) {
        panoramaFound = true;
        console.log("EE " + data.location.latLng.toUrlValue(6));
        console.log(data);
        setCenter(data.location.latLng);
        setCoordinates(prevState => ({ ...prevState, mapRender: {lat: data.location.latLng.lat(), lng: data.location.latLng.lng()}}))
        return;
      } else generateRandomPoint();
    }

    useEffect(() => {
      generateRandomPoint()
    }, [])

    return center && (
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
            },
            showRoadLabels: false
          }}/>
        </GoogleMap>
      )
  }

export default React.memo(PanoramaRender);