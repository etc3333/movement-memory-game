import { useContext } from 'react';

import './EndingScreen.css';

import { GameData } from '../App.js';

export const EndingScreen = () => {

    const { gameData } = useContext(GameData);

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
                                High Score: {gameData.highScore}
                            </div>
                            <div>
                                Try Again
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};