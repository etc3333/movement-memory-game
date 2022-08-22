import { DataInfo } from './DataInfo';  
import { motion, useAnimationControls } from 'framer-motion';
import { useContext, useEffect } from 'react';

import { GameData } from "../../../../App";


export const InGameData = () => {
    const controls = useAnimationControls();
    const { gameData, setGameData } = useContext(GameData);

    useEffect(() => {
        controls.start({
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 10, -10, 0],
        }
        )
    },[gameData.level]);

    return (
        <motion.div id="inGameData-centerBox" animate={controls}>
            <DataInfo />
        </motion.div>  
    )
};