import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-modal'
import ScoreModal from "./ScoreModal";
import { useLocation } from 'react-router-dom'
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import { getDistance } from "./calculate";
import './App.css'

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 93px)',
}

function DistanceRender() {

    const { state } = useLocation();
    const [markers, setMarkers] = useState([]);
    const [path, setPath] = useState([]);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        if (state) {
            const { markerPos, mapCoordinates } = state;
            setMarkers([markerPos, mapCoordinates]);
            setPath([markerPos, mapCoordinates]);
            let lat1 = markerPos.lat;
            let lng1 = markerPos.lng;
            let lat2 = mapCoordinates.lat;
            let lng2 = mapCoordinates.lng;
            var result = Math.floor(getDistance(lat1, lng1, lat2, lng2));
            console.log(result)
            if (result >= 10000) {
                setDistance((Math.floor(result / 1000)) + " km")
            } else {
                setDistance(result + " m")   
            }
        }
    }, [state]);

    return (
        <div className="distanceRender">
            <ScoreModal></ScoreModal>
            {
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center={markers[0]}
            zoom={3}>
                {path.length > 0 &&
                <Polyline path={markers} options={{
                    strokeColor: "#000000",
                    strokeOpacity: 1,
                    strokeWeight: 2
                }}/> 
                }
                {markers.map((marker, index) => <Marker key={index} position={marker}/>)}
            </GoogleMap>
            }
            <div className="distanceInfoContainer">
                <span className="roundText">You were {distance} away from the location</span>
                <button className="roundAction">Next Round</button>
            </div>
        </div>
    )
}

export default DistanceRender