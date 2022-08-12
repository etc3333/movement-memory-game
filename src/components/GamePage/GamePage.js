import { useState, createContext, useMemo } from 'react';

import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';

import './GamePage.css';
export const GameData = createContext();


export const GamePage = () => {
    const [gameData, setGameData] = useState({
        level: 1,
        ball: 2
    });


    let value = useMemo(
        () => ({gameData,setGameData}),[gameData]
    );

    return (
        <GameData.Provider value={value}>
            <div id="title-page-format">
                <LeftPanel />
                <RightPanel />
            </div>
        </GameData.Provider>
    )
};