import { useEffect, useRef, useContext } from 'react';
import { updateCircleLocation, hideCircle, createCircle } from '../../functions/circleFunctions';

import './Canvas.css';

import { GameData } from '../GamePage';

export const Canvas = ({boxDimensions, circleDataArray})  => {
    const requestIdRef = useRef(null);   
    const activeUpdateCircle = useRef(false);
    const { setGameData } = useContext(GameData);
    const amountOfCorrectCircles = 1;
    const amountOfCircles = 2;

    const boxStyle = {
        width: boxDimensions.width + "px",
        height: boxDimensions.height + "px",
        backgroundColor: "black"
    };

    const renderCircle = circleDataArray.map((data, index)=> createCircle(data, index));

    const renderFrame = () => {
        circleDataArray.forEach((data, index) => {
            let divCircleRef = document.getElementById(index);
            updateCircleLocation(divCircleRef, data, boxDimensions);
        })
    };

    const tick = () => {
        renderFrame();
        if (activeUpdateCircle.current) {
            requestIdRef.current = requestAnimationFrame(tick);
        }
    };

    function clickCircle(e) {
        //dataset.correct is a string
        if (e.target.dataset.correct === "true") {
            e.target.style.backgroundColor = "green";
            setGameData(prev => ({...prev, level: 2}));
        } else {
            e.target.style.backgroundColor = "red";
        }
    }

    useEffect(() => {

/*         console.log(document.getElementById('box-container').offsetTop);
        console.log(document.getElementById('box-container').offsetLeft); */

        setTimeout(() => {
            for (let i = 0; i < amountOfCircles; i++) {
                document.getElementById(i).addEventListener("click", e => clickCircle(e));
            }
            
            for (let i = 0; i < amountOfCorrectCircles; i++) {
                hideCircle(i);
            }

            activeUpdateCircle.current = true;

            console.log("Timeout 1 finished");

            setTimeout(() => {
                activeUpdateCircle.current = false;
                
                console.log("Timeout 2 finished");
            }, 5000);

            requestIdRef.current = requestAnimationFrame(tick);

        }, 5000);  

        return (() => {
            cancelAnimationFrame(requestIdRef.current);
            for (let i = 0; i < amountOfCircles; i++) {
                document.getElementById(i).addEventListener("click", e => clickCircle(e));
            }
        });

    }, []);
//this is a testing branch
    return (
        <div id="box-container" style={boxStyle}>
            {renderCircle}
        </div>
    )
};