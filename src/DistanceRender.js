import React from "react";
import { useState, useEffect, useContext } from "react";
import RoundContext from "./RoundContext";
import Modal from 'react-modal'
import ScoreModal from "./ScoreModal";
import { useLocation, useNavigate } from 'react-router-dom'
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
    const [markerPosState, setMarkerPos] = useState(null)
    const [distance, setDistance] = useState(null);
    const labels = ["Guess", "Actual"]

    const { round, setRound } = useContext(RoundContext);

    const navigate = useNavigate();

    const updateRound = () => {
        setRound(round + 1);
        navigate('/game');
    }

    console.log("round: " + round)

    useEffect(() => {
        const { markerPos, mapCoordinates } = state;
        console.log(markerPos)
        setMarkerPos(markerPos)
        setMarkers([markerPos, mapCoordinates]);
        setPath([markerPos, mapCoordinates]);
        if (markerPosState) {
            console.log(markerPosState)
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
    }, [state, markerPosState]);

    return (
        <div className="distanceRender">
            {
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center={markers[1]}
            zoom={3}>
                {path.length > 0 &&
                <Polyline path={markers} options={{
                    strokeColor: "#000000",
                    strokeOpacity: 1,
                    strokeWeight: 2
                }}/> 
                }
                {markerPosState && markers.map((marker, index) => <Marker key={index} position={marker} label={labels[index]}/>)}
                {markerPosState === undefined && <Marker key={1} position={markers[1]} label={labels[1]}/>}
            </GoogleMap>
            }
            <div className="distanceInfoContainer">
                <span className="roundText">{distance ? `You were ${distance} away from the location` : `You did not guess`}</span>
                <button className="roundAction" onClick={updateRound}>Next Round</button>
            </div>
        </div>
    )
}

export default DistanceRender