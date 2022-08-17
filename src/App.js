import { RenderComponent } from './components/RenderComponent';

import { useState, createContext, useMemo, useEffect } from 'react';

import { EndingScreen } from './components/EndingScreen.js';

import './App.css';
export const GameData = createContext();


function App() {
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);

  const [gameData, setGameData] = useState({
      level: 1,
      lives: 3,
      highScore: 5
  });


  let value = useMemo(
      () => ({gameData,setGameData}),[gameData]
  );

  useEffect(() => {
      if (gameData.lives == 0) {
          setEnd(true);
      }
  },[gameData.lives]);

          /*         console.log(document.getElementById('box-container').offsetTop);
        console.log(document.getElementById('box-container').offsetLeft); */
        
        //<RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd}/>
  return (
    <GameData.Provider value={value}>
      <RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd}/>
    </GameData.Provider>
  );
}

export default App;