import { useContext } from 'react';
import { GameData } from '../../../App.js';

export const DataInfo = () => {
    const {gameData} = useContext(GameData);

    if (gameData.lives == 0) {
        
    }
    
    return (
        <div id="datainfo">
            <div>
                
            </div>
            <div>
                <div>
                    Level
                </div>
                <div>
                    {gameData.level}
                </div>
            </div>
            <div>
                <div>
                    Lives
                </div>
                <div>
                    {gameData.lives}
                </div>
            </div>
            <div>
                <div>
                    Highest Level Achieved
                </div>
                <div>
                    {gameData.highScore}
                </div>
            </div>
        </div>
    )
};