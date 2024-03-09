import React from "react";
import GuessFrame from "./GuessFrame";
import './App.css';

function GameController() {
    return (
        <div className="gameControllerContainer">
            <h2>GuessTheSpot by Wesley Ou</h2>
            <div className="gameOptionsContainer">
                <button className="gameOptionButton">World (Moving)</button>
            </div>
        </div>
    )
}

export default GameController;