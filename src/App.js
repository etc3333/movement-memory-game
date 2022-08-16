import { RenderComponent } from './components/RenderComponent';

import { useState, createContext } from 'react';


import { EndingScreen } from './components/EndingScreen.js';


import './App.css';

function App() {
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);


          /*         console.log(document.getElementById('box-container').offsetTop);
        console.log(document.getElementById('box-container').offsetLeft); */
        
        
  return (
    <div>
      <RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd}/>
    </div>
  );
}

export default App;
