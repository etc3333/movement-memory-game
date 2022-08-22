import { useEffect, useRef } from 'react';
import { updateCircleLocation } from '../../../functions/circleFunctions';
import React from 'react';

import './Game.css';

export const Game = React.memo(({boxDimensions, circleDataArray, stateCallbacks, levelInfo}) => {
    const requestFrameRef = useRef(null);   
    const activeUpdateCircle = useRef(false);
    const allCircleRefs = useRef(null);
    const {setNextLevel, setNextLives } = stateCallbacks;
    const {numberOfCorrectCircles, numberOfTotalCircles} = levelInfo;
    let correctCounter = 0;
    

    const boxStyle = {
        width: boxDimensions.width + "px",
        height: boxDimensions.height + "px",
        border: "1px solid black"
    };

    const renderCircle = circleDataArray.map((data, index)=> createCircle(data, index));

    const renderFrame = () => {
        circleDataArray.forEach((data, index) => {
            updateCircleLocation(allCircleRefs.current[index], data, boxDimensions);
        })
    };

    const tick = () => {
        renderFrame();
        if (activeUpdateCircle.current) {
            requestFrameRef.current = requestAnimationFrame(tick);
        }
    };

    function hideCircle(index) {
        allCircleRefs.current[index].style.backgroundColor = "orange";
    }

    function createCircle(data, index) {
        const color = data.correct ? "green" : "orange";
    
        const circleStyle = {
            width: data.radius + "px",
            height: data.radius + "px",
            borderRadius: "50%",
            backgroundColor: color,
            border: "1px solid black",
            position: "absolute",
            top: data.y + "px",
            left: data.x + "px"
        }
        return (
        <div key={index} className="circle" data-correct={data.correct} id={index} style={circleStyle}>
    
        </div>
        )
    };

    useEffect(() => {
        allCircleRefs.current = document.getElementsByClassName("circle");
        const circleElements = allCircleRefs.current;
        const circleElementsCopy = [...allCircleRefs.current];  //used for removeventlistener

        function clickCircle(e) {
            //dataset.correct is a string
            if (e.target.dataset.correct === "true") {
                if (e.target.style.backgroundColor === "orange") {
                    e.target.style.backgroundColor = "green";
                    correctCounter++;
                }
                if (numberOfCorrectCircles === correctCounter) {
                    setNextLevel(prev => (prev + 1));
                }
            } else {
                if (e.target.style.backgroundColor === "orange") {
                    e.target.style.backgroundColor = "red";
                    setNextLives(prev => (prev - 1));
                } 
            }
        }

        setTimeout(() => {
            
            for (let i = 0; i < numberOfCorrectCircles; i++) {
                hideCircle(i);
            }

            activeUpdateCircle.current = true;

            console.log("Timeout 1 finished");

            setTimeout(() => {
                for (let i = 0; i < numberOfTotalCircles; i++) {
                    circleElements[i].addEventListener("click", clickCircle);
                }
                activeUpdateCircle.current = false;
                console.log("Timeout 2 finished");
            }, 2000);
            requestFrameRef.current = requestAnimationFrame(tick);
            
        }, 2000);  

        return () => {
            cancelAnimationFrame(requestFrameRef.current);
            for (let i = 0; i < numberOfTotalCircles; i++) {
                circleElementsCopy[i].removeEventListener("click", clickCircle);
            } 
        };

    }, []);


    return (
        <div id="box-container" style={boxStyle}>
            <div id="box-inner-container">
                {renderCircle}
            </div>
        </div>
    )
});