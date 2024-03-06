import React from "react";
import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '360px',
    height: '260px'
}

const center = {
    lat: 43.613159,
    lng: -79.665037
  };

function GuessModal() {

    const [markerPos, setMarkerPos] = useState(null) // store the position of a clicked marker

    const handleMapClick = (e) => { // get coordinates of a clicked point on the map
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();
        setMarkerPos({lat: clickedLat, lng: clickedLng})
    }

    return (
        <div className="guessModalContainer">
            <div className="guessModalMapContainer">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onClick={handleMapClick}>
                {markerPos && (
                    <Marker position={markerPos} />
                )}
                </GoogleMap>
            </div>
            <div className="guessModalActionContainer">
                <button className="guessModalAction">
                    Guess!
                </button>
            </div>
        </div>
    )
}

export default GuessModal;