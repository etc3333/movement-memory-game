import { DataInfo } from './DataInfo';  
import { motion, useAnimationControls } from 'framer-motion';
import { useContext, useEffect } from 'react';

import { GameData } from "../../../App";


export const LeftPanel = () => {
    const controls = useAnimationControls();
    const { gameData, setGameData } = useContext(GameData);

    useEffect(() => {
        controls.start({
            scale: [1, 1.5, 1.5, 1],
            rotate: [0, 20, -20, 0],
        }
        )
    },[gameData.level]);

    return (
        <motion.div id="leftPanel-centerBox" animate={controls}>
            <DataInfo />
        </motion.div>  
    )
};