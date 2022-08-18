import { Canvas } from "./Canvas";
import { rdmNumber } from "../../functions/rdmNumber";
import { useState, useContext, useEffect, useMemo } from "react";
import React from "react";

import { GameData } from "../../../App";

export const RightPanel = React.memo(() => {

    const { gameData, setGameData } = useContext(GameData);
    const [nextLevel, setNextLevel] = useState(gameData.level);
    const [nextLives, setNextLives] = useState(gameData.lives);
    


    const allCircleRadius = 20;
    const numberOfCorrectCircles = 1;

    const boxDimensions = {height: 600, width: 500};
    const circleDataTemplate = { 
        x: null,
        y: null,
        xSpeed: null,
        ySpeed: null,
        radius: allCircleRadius,
        correct: false
    };


    const circleDataArray = useMemo(() => setCircleDataArray(),[nextLevel]);

    function setCircleDataArray() {
        return new Array(2).fill(circleDataTemplate).map(value => {
            return {...value,
                x: rdmNumber(0, boxDimensions.width - allCircleRadius), 
                y: rdmNumber(0, boxDimensions.height - allCircleRadius), 
                xSpeed: rdmNumber(-5,5), 
                ySpeed: rdmNumber(-5,5)
            }
        });
    }

    for (let i = 0; i < numberOfCorrectCircles; i++) {
        circleDataArray[i].correct = true;
    }


    useEffect(() => {
        setGameData(prev => ({...prev, level: nextLevel}));
    },[nextLevel]);

    useEffect(() => {
        setGameData(prev => ({...prev, lives: nextLives}));
    },[nextLives]);




    return (
        <div>
            <Canvas key={nextLevel} boxDimensions={boxDimensions} circleDataArray={circleDataArray} setNextLevel={setNextLevel} setNextLives={setNextLives} numberOfCorrectCircles={numberOfCorrectCircles} />  
        </div>
    )
});