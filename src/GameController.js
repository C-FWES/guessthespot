import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import { useContext } from "react";
import ModeContext from "./ModeContext";

function GameController() {

    const navigate = useNavigate();
    const {gameMode, setGameMode} = useContext(ModeContext);

    // play world moving
    const startWorldMovingGame = () => {
        navigate('/game')
        setGameMode('worldMoving')
    }

    // play cities moving
    const startCitiesWorldMovingGame = () => {
        navigate('/game')
        setGameMode('citiesMoving')
    }

    return (
        <div className="gameControllerContainer">
            <h2>GuessTheSpot</h2>
            <div className="gameOptionsContainer">
                <button className="gameOptionButton" onClick={startWorldMovingGame}>World (Moving)</button>
            </div>
            <div className="gameOptionsContainer">
                <button className="gameOptionButton" onClick={startCitiesWorldMovingGame}>Cities (Moving)</button>
            </div>
        </div>
    )
}

export default GameController;