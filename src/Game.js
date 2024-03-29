import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import GuessFrame from "./GuessFrame";
import RoundContext from "./RoundContext";
import ScoreContext from "./ScoreContext";

function Game() {

    const {round, setRound} = useContext(RoundContext);
    const {score, setScore} = useContext(ScoreContext)

    const navigate = useNavigate();

    const nextRound = () => {
        console.log("called")
        if (round < 5) {
            setRound(round + 1);
        } else if (round > 5) {
            navigate('/');
            setRound(1);
        }
    };

    return (
        <div className="gameView">
        {round < 5 ? (
            <GuessFrame key={round} nextRound={nextRound} />
        ) : (
            <div>
            <h1>You scored {score}</h1>
            <h2>Play Again</h2>
            <button className="gameOptionButton" onClick={() => navigate(0)}>World (Moving)</button>
            </div>
        )}
        </div>
    )
}

export default Game;