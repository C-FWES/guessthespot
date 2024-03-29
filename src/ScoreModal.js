import React, { useEffect } from "react";
import RoundContext from "./RoundContext";
import ScoreContext from "./ScoreContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function ScoreModal({mapCoordinates}) {

    const navigate = useNavigate();

    const [timer, setTimer] = useState(60) // 1 minute timer

    const {round, setRound} = useContext(RoundContext);
    const { score, setScore } = useContext(ScoreContext)

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1) // take 1 second increments
        }, 1000);

        return () => clearInterval(countdown);
    }, [])

    useEffect(() => {
        if (timer == 0) {
            navigate('/result', { state: { mapCoordinates } })
        }
    }, [timer])

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