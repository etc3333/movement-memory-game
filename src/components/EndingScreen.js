import { useContext, useEffect } from 'react';

import './EndingScreen.css';

import { GameData } from '../App.js';

export const EndingScreen = () => {

    const { gameData } = useContext(GameData);

    let newHighScore = false;
    let storedHighScore = "N/A";

    if (localStorage.getItem("highScore") === null) {
        localStorage.setItem("highScore", JSON.stringify(gameData.level));
    } else {
        storedHighScore = JSON.parse(localStorage.getItem("highScore"));
        if (gameData.level > storedHighScore) {
            newHighScore = true;
            localStorage.setItem("highScore", JSON.stringify(gameData.level));
        }
    }

    useEffect(() => {
        function tryAgain() {
            
        }

        document.getElementById("tryAgain-circle").addEventListener("click", tryAgain);

        return () => document.getElementById("tryAgain-circle").removeEventListener("click", tryAgain);
    },[]);

    return (
        <div id="endingScreen-container">
            <div id='endingScreen-outerRing'>
                <div id="endingScreen-centerBox-container">
                    <div id="endingScreen-centerBox">
                        <div>
                            <div>
                                Score: {gameData.level}
                            </div>
                            <div>
                                {newHighScore ?  `New High Score: ${gameData.level}` : `High Score: ${storedHighScore}`}
                            </div>
                            <div id="tryAgain-circle">
                                Try Again
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};