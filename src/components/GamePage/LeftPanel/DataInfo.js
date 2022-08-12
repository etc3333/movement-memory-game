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
                    {gameData.lives}
                </div>
            </div>
            <div>
                <div>
                    Balls Present
                </div>
                <div>
                    {gameData.ball}
                </div>
            </div>
            <div>
                <div>
                    Highest Level Achieved
                </div>
                <div>
                    {gameData.highScore}
                </div>
                <div>
                    ballcorrect: {gameData.ballsCorrectCounter}
                </div>
            </div>
        </div>
    )
};