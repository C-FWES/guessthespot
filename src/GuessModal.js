import React from "react";
import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Link, useNavigate } from 'react-router-dom'

const containerStyle = {
    width: '360px',
    height: '260px',
    borderRadius: '16px',
}

const center = {
    lat: 43.613159,
    lng: -79.665037
};

function GuessModal({setCoordinates, mapCoordinates}) {

    const navigate = useNavigate();

    const [markerPos, setMarkerPos] = useState(null) // store the position of a clicked marker

    const handleMapClick = (e) => { // get coordinates of a clicked point on the map
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();
        setMarkerPos({lat: clickedLat, lng: clickedLng})
        setCoordinates(prevState => ({ ...prevState, guessModal: {lat: clickedLat, lng: clickedLng}}))
    }

    const handleGuess = () => {
        console.log(markerPos)
        navigate('/result', { state: { markerPos, mapCoordinates } })
    }

    return (
        <div className="guessModalContainer">
            <div className="guessModalMapContainer">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={0} onClick={handleMapClick} clickableIcons={false} options={{draggableCursor: 'default'}}>
                {markerPos && (
                    <Marker position={markerPos} />
                )}
                </GoogleMap>
            </div>
            <div className="guessModalActionContainer">
                <button 
                className="guessModalAction"
                onClick={handleGuess}>
                    Guess!
                </button>
            </div>
        </div>
    )
}

export default GuessModal;