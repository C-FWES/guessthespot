import React from "react";
import { useState } from "react";
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import { GoogleMap, Marker } from "@react-google-maps/api";
import './App.css'

const containerStyle = {
    width: '500px',
    height: '500px',
}

function DistanceRender() {
    //
    const { state } = useLocation();
    const { markerPos, mapCoordinates } = state;

    return (
        <div>
            {markerPos &&
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center={markerPos}
            zoom={0}>
                <Marker position={markerPos}/>
                <Marker position={mapCoordinates}/>
            </GoogleMap>
            }
        </div>
    )
}

export default DistanceRender