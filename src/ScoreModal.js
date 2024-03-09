import React, { useEffect } from "react";
import { useState } from "react";

function ScoreModal() {

    const [score, setScore] = useState(19999)
    const [round, setRound] = useState(1)
    const [timer, setTimer] = useState(60) // 1 minute timer

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1) // take 1 second increments
        }, 1000);

        return () => clearInterval(countdown);
    }, [])

    return(
        <div className="scoreModalContainer">
            <div className="hero">GuessTheSpot by Wesley Ou</div>
            <div className="score">Score: {score}</div>
            <div className="round">Round: {round}/5</div>
            <div className="timer">Time left: {timer} seconds</div>
        </div>
    )
}

export default ScoreModal;