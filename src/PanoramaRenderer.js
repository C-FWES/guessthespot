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
    'Winnipeg': { lat: [49.8954 - 0.1, 49.8954 + 0.1], lng: [-97.1385 - 0.1, -97.1385 + 0.1]},
    'Vancouver': { lat: [49.2827 - 0.1, 49.2827 + 0.1], lng: [-123.1207 - 0.1, -123.1207 + 0.1]},
    'Salt Lake City': { lat: [40.7608 - 0.1, 40.7608 + 0.1], lng: [-111.8910 - 0.1, -111.8910 + 0.1]},
    'Berlin': { lat: [52.5200 - 0.1, 52.5200 + 0.1], lng: [13.4050 - 0.1, 13.4050 + 0.1] },
    'Tokyo': { lat: [35.6895 - 0.1, 35.6895 + 0.1], lng: [139.6917 - 0.1, 139.6917 + 0.1] },
    'Moscow': { lat: [55.7558 - 0.1, 55.7558 + 0.1], lng: [37.6176 - 0.1, 37.6176 + 0.1] },
    'Rio de Janeiro': { lat: [-22.9068 - 0.1, -22.9068 + 0.1], lng: [-43.1729 - 0.1, -43.1729 + 0.1] },
    'Cairo': { lat: [30.0444 - 0.1, 30.0444 + 0.1], lng: [31.2357 - 0.1, 31.2357 + 0.1] },
    'Buenos Aires': { lat: [-34.6037 - 0.1, -34.6037 + 0.1], lng: [-58.3816 - 0.1, -58.3816 + 0.1] },
    'Bangkok': { lat: [13.7563 - 0.1, 13.7563 + 0.1], lng: [100.5018 - 0.1, 100.5018 + 0.1] },
    'Istanbul': { lat: [41.0082 - 0.1, 41.0082 + 0.1], lng: [28.9784 - 0.1, 28.9784 + 0.1] },
    'Mexico City': { lat: [19.4326 - 0.1, 19.4326 + 0.1], lng: [-99.1332 - 0.1, -99.1332 + 0.1] },
    'Jakarta': { lat: [-6.2088 - 0.1, -6.2088 + 0.1], lng: [106.8456 - 0.1, 106.8456 + 0.1] },
    'Lima': { lat: [-12.0464 - 0.1, -12.0464 + 0.1], lng: [-77.0428 - 0.1, -77.0428 + 0.1] },
    'Seoul': { lat: [37.5665 - 0.1, 37.5665 + 0.1], lng: [126.9780 - 0.1, 126.9780 + 0.1] },
    'Kinshasa': { lat: [-4.4419 - 0.1, -4.4419 + 0.1], lng: [15.2663 - 0.1, 15.2663 + 0.1] },
    'Dhaka': { lat: [23.8103 - 0.1, 23.8103 + 0.1], lng: [90.4125 - 0.1, 90.4125 + 0.1] },
    'Bogota': { lat: [4.7100 - 0.1, 4.7100 + 0.1], lng: [-74.0721 - 0.1, -74.0721 + 0.1] },
    'Lagos': { lat: [6.5244 - 0.1, 6.5244 + 0.1], lng: [3.3792 - 0.1, 3.3792 + 0.1] },
    'Riyadh': { lat: [24.7136 - 0.1, 24.7136 + 0.1], lng: [46.6753 - 0.1, 46.6753 + 0.1] },
    'Santiago': { lat: [-33.4489 - 0.1, -33.4489 + 0.1], lng: [-70.6693 - 0.1, -70.6693 + 0.1] },
    'Melbourne': { lat: [-37.8136 - 0.1, -37.8136 + 0.1], lng: [144.9631 - 0.1, 144.9631 + 0.1] },
    'Calgary': { lat: [51.05011000 - 0.1, 51.05011000 + 0.1], lng: [-114.08529000 - 0.1, -114.08529000 + 0.1] },
    'Seattle': { lat: [47.60621 - 0.1, 47.60621 + 0.1], lng: [-122.33207 - 0.1, -122.33207 + 0.1] },
    'Orlando': { lat: [28.538336 - 0.1, 28.538336 + 0.1], lng: [-81.379234 - 0.1, -81.379234 + 0.1] },
    'Charlotte': { lat: [35.227085 - 0.1, 35.227085 + 0.1], lng: [-80.843124 - 0.1, -80.843124 + 0.1] },
    'Phoenix': { lat: [33.44838 - 0.1, 33.44838 + 0.1], lng: [-112.07404 - 0.1, -112.07404 + 0.1] },
    'Las Vegas': { lat: [36.17497000 - 0.1, 36.17497000 + 0.1], lng: [-115.13722000 - 0.1, -115.13722000 + 0.1] },
    'Medellin': { lat: [6.244203 - 0.1, 6.244203 + 0.1], lng: [-75.581212 - 0.1, -75.581212 + 0.1] },
    'Recife': { lat: [-8.05389 - 0.1, -8.05389 + 0.1], lng: [-34.88111 - 0.1, -34.88111 + 0.1] },
    'Cordoba': { lat: [37.89155000 - 0.1, 37.89155000 + 0.1], lng: [-4.77275000 - 0.1, -4.77275000 + 0.1] },
    'Copenhagen': { lat: [55.6761 - 0.1, 55.6761 + 0.1], lng: [12.5683 - 0.1, 12.5683 + 0.1] },
    'Alicante': { lat: [38.3460 - 0.1, 38.3460 + 0.1], lng: [-0.4907 - 0.1, -0.4907 + 0.1] },
    'Zaragoza': { lat: [41.6488 - 0.1, 41.6488 + 0.1], lng: [-0.8891 - 0.1, -0.8891 + 0.1] },
    'Odense': { lat: [55.4038 - 0.1, 55.4038 + 0.1], lng: [10.4024 - 0.1, 10.4024 + 0.1] },
    'Brno': { lat: [49.1951 - 0.1, 49.1951 + 0.1], lng: [16.6068 - 0.1, 16.6068 + 0.1] },
  };

  function PanoramaRender({setCoordinates, gameMode}) {
    
    const [center, setCenter] = useState(null)
    const [loading, setLoading] = useState(false)
    let panoramaFound = false;

    function generateRandomPoint() {
      if (loading || panoramaFound) return;
      setLoading(true);
      var sv = new window.google.maps.StreetViewService();
      if (gameMode === 'worldMoving'  || gameMode === 'worldNoMoving') {
        sv.getPanoramaByLocation(
          new window.google.maps.LatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), 500, processSVData
        );
      } else if (gameMode === 'citiesMoving' || gameMode === 'citiesNoMoving') {
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
          options={{ streetViewControl: false }}
        >
          <StreetViewPanorama 
          position={center} 
          visible={true}
          options={{
            pov: {
              heading: 0,  // direction of camera (0 - 360)
              pitch: 0       // angle of camera (-90 [down] to 90 [up])
            },
            showRoadLabels: false,
            clickToGo: gameMode === 'worldNoMoving' || gameMode === 'citiesNoMoving' ? false : true,
            disableDefaultUI: gameMode === 'worldNoMoving' || gameMode === 'citiesNoMoving' ? true : false,
          }}/>
        </GoogleMap>
      )
  }

export default React.memo(PanoramaRender);