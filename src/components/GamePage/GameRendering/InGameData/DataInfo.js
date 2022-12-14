import { useContext, } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';

import { GameData } from '../../../../App.js';

export const DataInfo = () => {
    const {gameData} = useContext(GameData);

    const RiHeart2FillStyle = {
        color: "red"
    }
    let threeLives = [];
    for (let i = 0; i < gameData.lives; i++) {
        threeLives.push(<RiHeart2Fill key={i} style={RiHeart2FillStyle} />)
    }
  
    return (
        <div id="dataInfo">
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
                    Tries
                </div>
                <div>
                    {threeLives}
                </div>
            </div>
            <div>
                <div>
                    High Score
                </div>
                <div>
                    {gameData.highScore}
                </div>
            </div>
        </div>
    )
};