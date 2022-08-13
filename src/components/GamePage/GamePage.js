import { useState, createContext, useMemo, useEffect } from 'react';

import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';

import './GamePage.css';
export const GameData = createContext();


export const GamePage = ({setEnd}) => {
    const [gameData, setGameData] = useState({
        level: 1,
        ball: 2,
        lives: 1,
        highScore: 5,
        ballsCorrectCounter: 0
    });


    let value = useMemo(
        () => ({gameData,setGameData}),[gameData]
    );

    useEffect(() => {
        if (gameData.lives == 0) {
            setEnd(true);
        }
    },[gameData.lives]);
    

    return (
        <GameData.Provider value={value}>
            <div id="title-page-format">
                <LeftPanel />
                <RightPanel />
            </div>
        </GameData.Provider>
    )
};