import { useContext, useState } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GuessFrame from "./GuessFrame";
import RoundContext from "./RoundContext";
import ScoreContext from "./ScoreContext";
import ModeContext from "./ModeContext";

function Game() {

    const {round, setRound} = useContext(RoundContext);
    const {score, setScore} = useContext(ScoreContext)
    const {gameMode, setGameMode} = useContext(ModeContext);

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

    const clearGame = () => {
        navigate('/')
        navigate(0)
    }

    return (
        <div className="gameView">
        {round <= 5 ? (
            <GuessFrame key={round} nextRound={nextRound} gameMode={gameMode}/>
        ) : (
            <div>
            <h1>You scored {score}</h1>
            <button className="gameOptionButton" onClick={clearGame}>Play Again</button>
            </div>
        )}
        </div>
    )
}

export default Game;