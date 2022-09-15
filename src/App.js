import { RenderComponent } from './components/RenderComponent';

import { useState, createContext, useMemo, useEffect } from 'react';

import './App.css';
export const GameData = createContext();


function App() {
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);

  let highScore;

  if (localStorage.getItem("highScore") === null) {
    highScore = "N/A";
  } else {
    let storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    highScore = storedHighScore;
  }

  const [gameData, setGameData] = useState({
      level: 1,
      lives: 3,
      highScore: highScore
  });

  let value = useMemo(
      () => ({gameData,setGameData}),[gameData]
  );

  useEffect(() => {
      if (gameData.lives === 0) {
          setEnd(true);
      }
  },[gameData.lives]);


        
        //<RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd}/>
  return (
    <GameData.Provider value={value}>
      <RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd} />
    </GameData.Provider>
  );
}

export default App;