import { StartingScreen } from './components/StartingScreen';
import { GamePage } from './components/GamePage/GamePage';

import { useState } from 'react';

import './App.css';

function App() {

  const [begin, setBegin] = useState(false);

/*   const boxDimensions = {height: 800, width: 700, xCorner: 0, yCorner: 0};
  let circleData = { x: 90, y: 60, xSpeed: 5, ySpeed: 2, radius: 20 };
  let circleDataTwo = { x: 310, y: 110, xSpeed: 1, ySpeed: 3, radius: 20 };

  let circleDataArray = [circleData, circleDataTwo];
  //<Canvas boxDimensions={boxDimensions} circleDataArray={circleDataArray}/>   */
  //<GamePage />
  return (
    <div>
       {begin ? <GamePage /> : <StartingScreen setBegin={setBegin}/>}
    </div>
  );
}

export default App;
