import { StartingScreen } from './components/StartingScreen';
import { GamePage } from './components/GamePage/GamePage';

import { useState } from 'react';

import './App.css';

function App() {

  const [begin, setBegin] = useState(false);

  return (
    <div>
       {begin ? <GamePage /> : <StartingScreen setBegin={setBegin}/>}
    </div>
  );
}

export default App;
