import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import GuessFrame from "./GuessFrame";
import RoundContext from "./RoundContext";

function Game() {

    const {round, setRound} = useContext(RoundContext);

    const navigate = useNavigate();

    const nextRound = () => {
        console.log("called")
        if (round < 5) {
            setRound(round + 1);
        } else if (round > 5) {
            navigate('/')
        }
    };

    return (
        <div className="gameView">
        {round < 5 ? (
            <GuessFrame key={round} nextRound={nextRound} />
        ) : (
            <button className="gameOptionButton">World (Moving)</button>
        )}
        </div>
    )
}

export default Game;