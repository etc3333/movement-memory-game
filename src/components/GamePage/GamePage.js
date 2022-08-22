import { RightPanel } from './RightPanel/RightPanel';

import './GamePage.css';


export const GamePage = () => {

    return (
        <div>
            <div id="right-panel-container">
                <div>
                    <div id="title">
                        Movement Memory Test
                    </div>
                    <RightPanel />
                </div>
            </div>
        </div>
    )
};