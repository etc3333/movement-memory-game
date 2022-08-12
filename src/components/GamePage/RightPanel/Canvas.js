import { useEffect, useRef, useContext } from 'react';
import { updateCircleLocation, hideCircle, clickCircle, createCircle } from '../../functions/circleFunctions';

import './Canvas.css';

import { GameData } from '../GamePage';

export const Canvas = ({boxDimensions, circleDataArray})  => {
    const requestIdRef = useRef(null);   
    const activeUpdateCircle = useRef(true);
    const {gameData, setGameData} = useContext(GameData);


    const boxStyle = {
        width: boxDimensions.width + "px",
        height: boxDimensions.height + "px",
        backgroundColor: "black"
    };

    const renderCircle = circleDataArray.map((data, index)=> createCircle(data, index))
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
    useEffect(() => {
        
/*         console.log(document.getElementById('box-container').offsetTop);
        console.log(document.getElementById('box-container').offsetLeft); */

/*         setTimeout(() => {
            for (let i = 0; i < 2; i++) {
                document.getElementById(i).addEventListener("click", e => clickCircle(e));
            }
            
            activeUpdateCircle.current = false;

            for (let i = 0; i < 2; i++) {
                hideCircle(i);
            }
            
            console.log("Timeout finished");
        }, 5000);   */

        //requestIdRef.current = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(requestIdRef.current);
            for (let i = 0; i < 2; i++) {
                document.getElementById(i).addEventListener("click", e => clickCircle(e));
            }
        };
    }, []);

    return (
        <div id="box-container" style={boxStyle}>
            {renderCircle}
        </div>
    )
};