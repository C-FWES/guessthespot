import React from "react";
import PanoramaRender from './PanoramaRenderer';
import GuessModal from './GuessModal';
import ScoreModal from './ScoreModal';
import { useState } from 'react';

function GuessFrame() {

    const [coordinates, setCoordinates] = useState({
        guessModal: null,
        mapRender: null
    })

    return (
        <div>
            <div className='panoramaContainer'>
                <PanoramaRender setCoordinates={setCoordinates} />
            </div>
            <ScoreModal></ScoreModal>
            <GuessModal setCoordinates={setCoordinates} mapCoordinates={coordinates.mapRender}></GuessModal>
        </div>
    )
}  

export default GuessFrame