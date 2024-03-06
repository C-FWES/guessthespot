import React from "react";
import { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
    width: '360px',
    height: '260px'
}

const center = {
    lat: 43.613159,
    lng: -79.665037
  };

function GuessModal() {
    return (
        <div className="guessModalContainer">
            <div className="guessModalMapContainer">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}/>
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