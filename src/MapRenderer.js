import { useState } from 'react'
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';
import './App.css'

function MapRender() {

    const key = process.env.REACT_APP_MAP_API_KEY

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
            {/* <LoadScript googleMapsApiKey={key}> */}
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <StreetViewPanorama mapContainerStyle={containerStyle} position={center} visible={true}/>
            </GoogleMap>
            {/* </LoadScript> */}
        </div>
    )
}

export default MapRender;