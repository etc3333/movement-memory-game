import { Canvas } from "./Canvas";
import { rdmNumber } from "../../functions/rdmNumber";
import { useState, useContext, useEffect, useMemo, useRef } from "react";
import { LeftPanel } from "../LeftPanel/LeftPanel";
import React from "react";

import { GameData } from "../../../App";

export const RightPanel = React.memo(() => {

    const { gameData, setGameData } = useContext(GameData);
    const [nextLevel, setNextLevel] = useState(gameData.level);
    const [nextLives, setNextLives] = useState(gameData.lives);

    const numberOfCorrectCircles = useRef(0);
    const numberOfTotalCircles = useRef(4);

    const allCircleRadius = 20;

    useMemo(() => {
        if (numberOfCorrectCircles.current >= numberOfTotalCircles.current / 2) {
            numberOfTotalCircles.current += 4;
        } else {
            numberOfCorrectCircles.current += 1;
        }
    },[nextLevel]);


    const boxDimensions = {height: 600, width: 500};
    const circleDataTemplate = { 
        x: null,
        y: null,
        xSpeed: null,
        ySpeed: null,
        radius: allCircleRadius,
        correct: false
    };

    const stateCallbacks = useMemo(() => ({setNextLevel, setNextLives}),[nextLevel, nextLives]);

    const circleDataArray = useMemo(() => setCircleDataArray(),[nextLevel]);
    function setCircleDataArray() {
        return new Array(numberOfTotalCircles.current).fill(circleDataTemplate).map(value => {
            return {...value,
                x: rdmNumber(0, boxDimensions.width - allCircleRadius + 1), 
                y: rdmNumber(0, boxDimensions.height - allCircleRadius + 1), 
                xSpeed: rdmNumber(-2,2), 
                ySpeed: rdmNumber(-2,2)
            }
        });
    }

    for (let i = 0; i < numberOfCorrectCircles.current; i++) {
        circleDataArray[i].correct = true;
    }

    const levelInfo = useMemo(() => ({
        numberOfCorrectCircles: numberOfCorrectCircles.current,
        numberOfTotalCircles: numberOfTotalCircles.current
    }),[nextLevel]);

    useEffect(() => {
        setGameData(prev => ({...prev, level: nextLevel}));
    },[nextLevel]);

    useEffect(() => {
        setGameData(prev => ({...prev, lives: nextLives}));
    },[nextLives]);

    return (
        <div id="rightPanel-centerBox">
            <Canvas key={nextLevel} boxDimensions={boxDimensions} circleDataArray={circleDataArray} levelInfo={levelInfo} stateCallbacks={stateCallbacks} />
            <div id="left-panel-container">
                <LeftPanel />
            </div>
        </div>
    )
});