import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';

import './GamePage.css';


export const GamePage = ({setEnd}) => {

    return (
        <div id="title-page-format">
            <div id="left-panel">
                <LeftPanel />
            </div>
            <div id="right-panel">
                <RightPanel />
            </div>
        </div>
    )
};