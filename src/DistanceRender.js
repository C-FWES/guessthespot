import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import { GoogleMap, Marker } from "@react-google-maps/api";
import './App.css'

const containerStyle = {
    width: '500px',
    height: '500px',
}

function DistanceRender() {

    const { state } = useLocation();
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (state) {
            const { markerPos, mapCoordinates } = state;
            setMarkers([markerPos, mapCoordinates]);
        }
    }, [state]);

    return (
        <div>
            {
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center={markers[0]}
            zoom={0}>
                {markers.map((marker, index) => <Marker key={index} position={marker}/>)}
            </GoogleMap>
            }
        </div>
    )
}

export default DistanceRender