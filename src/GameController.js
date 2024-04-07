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
    const startCitiesMovingGame = () => {
        navigate('/game')
        setGameMode('citiesMoving')
    }

    // play world no moving
    const startWorldNoMovingGame = () => {
        navigate('/game')
        setGameMode('worldNoMoving')
    }

    // play cities no moving
    const startCitiesNoMovingGame = () => {
        navigate('/game')
        setGameMode('citiesNoMoving')
    }

    return (
        <div className="bg-slate-700 h-full w-100 text-center">
            <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">GuessTheSpot</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-slate-800 border-slate-800 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
                    </button>
                </div>
                <div className="w-full block lg:flex lg:w-auto lg:justify-end">
                    <div className="text-sm lg:flex-grow">
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-gray-500 border-gray-500 hover:border-transparent hover:text-slate-800 hover:bg-white mt-4 lg:mt-0">Log In</button>
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-slate-600 border-slate-600 hover:border-transparent hover:text-slate-800 hover:bg-white mt-4 lg:mt-0 ml-2">Sign Up</button>
                    </div>
                </div>
            </nav>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 bg-slate-700 p-6">
                    <button className="w-72 h-72 bg-slate-600 text-white rounded-2xl" onClick={startWorldMovingGame}>World (Moving)</button>
                    <button className="w-72 h-72 bg-slate-600 text-white rounded-2xl" onClick={startWorldNoMovingGame}>World (No moving)</button>
                    <button className="w-72 h-72 bg-slate-600 text-white rounded-2xl" onClick={startCitiesMovingGame}>Cities (Moving)</button>
                    <button className="w-72 h-72 bg-slate-600 text-white rounded-2xl" onClick={startCitiesNoMovingGame}>Cities (No moving)</button>
                </div>
            </div>
        </div>
    )
}

export default GameController;