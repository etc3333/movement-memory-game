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

    const beginning = {
        hidden: {x: "-100vw"},
        visible: {x: "0px", transition: {duration: 1.5, delayChildren: 1.7}}
    }

    const ending = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    return (
        <div id="startingScreen-container">
            <motion.div 
                ref={startingScreenRef} 
                id="startingScreen-centerBox-container"
                variants={beginning}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    id="startingScreen-words-container"
                    variants={ending}
                >
                    <div>
                        <div>
                            Movement Memory Test
                        </div>
                        <div id="starting-screen-text-description">
                            Remember the Designated Circles
                        </div>
                    </div>
                    <div>
                        <AiTwotoneCheckCircle className='startingScreen-icons'/>
                        <FiWind className='startingScreen-icons' />
                    </div>
                    <div id='start-game-text'>
                        Click to Start Game
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );

};