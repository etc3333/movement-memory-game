import { GameRendering } from './GameRendering/GameRendering';

import './GamePage.css';


export const GamePage = () => {

    return (
        <div>
            <div id="gamePage-container">
                <div>
                    <div id="title">
                        Movement Memory Test
                    </div>
                    <div id="gamePage-game-container">
                        <GameRendering />
                    </div>
                </div>
            </div>
        </div>
    )
};