import { useContext } from 'react';
import { GameData } from '../GamePage';

export const DataInfo = () => {

    const {gameData} = useContext(GameData);
    
    return (
        <div>
            <div>
                
            </div>
            <div>
                {gameData.level}
            </div>
            <div>
                Lives
            </div>
        </div>
    )
};