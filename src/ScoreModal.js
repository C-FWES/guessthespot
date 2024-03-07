import React from "react";
import { useState } from "react";

function ScoreModal() {

    const [score, setScore] = useState(19999)
    const [round, setRound] = useState(1)

    return(
        <div className="scoreModalContainer">
            <div className="hero">GuessTheSpot by Wesley Ou</div>
            <div className="score">Score: {score}</div>
            <div className="round">Round: {round}/5</div>
        </div>
    )
}

export default ScoreModal;