import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function GameController() {

    const navigate = useNavigate();

    const startGame = () => {
        navigate('/game')
    }

    return (
        <div className="gameControllerContainer">
            <h2>GuessTheSpot</h2>
            <div className="gameOptionsContainer">
                <button className="gameOptionButton" onClick={startGame}>World (Moving)</button>
            </div>
        </div>
    )
}

export default GameController;