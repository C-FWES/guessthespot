import { useState } from 'react'
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';
import './App.css'

function MapRender() {

    const containerStyle = {
        height: "800px",
        width: "800px",
    }

    const center = {
        lat: 54.364442,
        lng: 18.643173
    }

    return (
        <div>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <StreetViewPanorama mapContainerStyle={containerStyle} position={center} visible={true}/>
            </GoogleMap>
        </div>
    )
}

export default MapRender;