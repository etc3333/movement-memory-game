import { Canvas } from "./Canvas";
import { rdmNumber } from "../../functions/rdmNumber";
import React from "react";

export const RightPanel = React.memo(() => {
    const allCircleRadius = 20;

    //needs to be changed to fit all types of screen HARD CODED MUST FIX THIS --------------------------------
    const boxDimensions = {height: 800, width: 700, xCorner: 523, yCorner: 85};
    let circleData = { 
        x: rdmNumber(boxDimensions.xCorner, boxDimensions.xCorner + boxDimensions.width - allCircleRadius), 
        y: rdmNumber(boxDimensions.yCorner, boxDimensions.yCorner + boxDimensions.height - allCircleRadius), 
        xSpeed: rdmNumber(-5,5), 
        ySpeed: rdmNumber(-5,5), 
        radius: allCircleRadius,
        correct: true
    };

    let circleDataTwo = { 
        x: rdmNumber(boxDimensions.xCorner, boxDimensions.xCorner + boxDimensions.width - allCircleRadius), 
        y: rdmNumber(boxDimensions.yCorner, boxDimensions.yCorner + boxDimensions.height - allCircleRadius), 
        xSpeed: rdmNumber(-5,5), 
        ySpeed: rdmNumber(-5,5), 
        radius: allCircleRadius,
        correct: false
    };

    let circleDataArray = [circleData, circleDataTwo];

    return (
        <div id="right-panel">
            <Canvas boxDimensions={boxDimensions} circleDataArray={circleDataArray}/>  
        </div>
    )
});