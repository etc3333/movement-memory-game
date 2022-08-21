import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div 
            id="startingScreen-container"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}
        >
            <div ref={startingScreenRef} id="startingScreen-centerBox-container">
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
        </motion.div>
    );

};