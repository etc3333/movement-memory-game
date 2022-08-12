import { useEffect } from 'react';

import { AiTwotoneCheckCircle } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';

import './StartingScreen.css';

export const StartingScreen = ({setBegin}) => {
   
    useEffect(() => {
        let screenElement = document.getElementById('startingScreen-container');
        screenElement.addEventListener('click', () => setBegin(true));

        return screenElement.removeEventListener('click', () => setBegin(true)); 
    },[]);

    const iconStyle = {
        color: "white",
    }

    return (
        <div id="startingScreen-container">
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