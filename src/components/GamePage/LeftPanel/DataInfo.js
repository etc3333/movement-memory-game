import { useContext } from 'react';
import { GameData } from '../GamePage';

export const DataInfo = () => {

    const {gameData} = useContext(GameData);
    
    return (
        <div>
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
                    1
                </div>
            </div>
            <div>
                <div>
                    Balls Present
                </div>
                <div>
                    2
                </div>
            </div>
            <div>
                <div>
                    Highest Level Achieved
                </div>
                <div>
                    3
                </div>
            </div>
        </div>
    )
};