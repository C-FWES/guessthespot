import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import './App.css'

const containerStyle = {
    width: '100%',
    height: '100%',
}

function DistanceRender() {

    const { state } = useLocation();
    const [markers, setMarkers] = useState([]);
    const [path, setPath] = useState([])

    useEffect(() => {
        if (state) {
            const { markerPos, mapCoordinates } = state;
            setMarkers([markerPos, mapCoordinates]);
            setPath([markerPos, mapCoordinates]);
        }
    }, [state]);

    return (
        <div className="distanceRender">
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
        </div>
    )
}

export default DistanceRender