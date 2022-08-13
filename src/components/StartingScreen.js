import { useEffect, useRef } from 'react';

import { AiTwotoneCheckCircle } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';

import './StartingScreen.css';

export const StartingScreen = ({setBegin}) => {
    const startingScreenRef = useRef(null);


    useEffect(() => {
        const startScreenElement = startingScreenRef.current;
        startScreenElement.addEventListener('click', setBegin);

        return () => {
            startScreenElement.removeEventListener('click', setBegin);
        } 
    },[]);

    const iconStyle = {
        color: "white",
    }

    return (
        <div ref={startingScreenRef} id="startingScreen-container">
            <div>
                <div>
                    <div>
                        Movement Memory Test
                    </div>
                    <div id="starting-screen-text-description">
                        Remember the Designated Circles
                    </div>
                </div>
                <div>
                    <AiTwotoneCheckCircle style={iconStyle}/>
                    <FiWind style={iconStyle}/>
                </div>
                <div id='start-game-text'>
                    Click to Start Game
                </div>
            </div>
        </div>
    );

};