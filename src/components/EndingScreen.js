import { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import './EndingScreen.css';

import { GameData } from '../App.js';

export const EndingScreen = ({setBegin, setEnd}) => {

    const { gameData, setGameData } = useContext(GameData);
    const endingCircleRef = useRef();

    let newHighScore = false;
    let storedHighScore = "N/A";
    let score = gameData.level;

    if (localStorage.getItem("highScore") === null) {
        localStorage.setItem("highScore", JSON.stringify(gameData.level));
    } else {
        storedHighScore = JSON.parse(localStorage.getItem("highScore"));
        if (gameData.level > storedHighScore) {
            newHighScore = true;
            localStorage.setItem("highScore", JSON.stringify(gameData.level));
        } else {
            score = storedHighScore;
        }
    }

    useEffect(() => {
        function tryAgain() {
            setEnd(false);
            setGameData(({level: 1, lives: 6, highScore: score}))
        }

        const endCircleRef = endingCircleRef.current;
        endCircleRef.addEventListener("click", tryAgain);

        return () => endCircleRef.removeEventListener("click", tryAgain);
    },[]);

    return (
        <div id="endingScreen-container">
            <div id='endingScreen-outerRing'>
                <motion.div 
                ref={endingCircleRef} 
                id="endingScreen-centerBox-container"
                whileHover={{scale: 1.5}}
                transition={{duration: .7}}
                >
                    <div id="endingScreen-centerBox">
                        <div>
                            <div>
                                Score: {gameData.level}
                            </div>
                            <div>
                                {newHighScore ?  `New High Score: ${gameData.level}` : `High Score: ${storedHighScore}`}
                            </div>
                            <div id="tryAgain-circle">
                                Try Again?
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};