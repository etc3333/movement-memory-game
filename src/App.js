import { RenderComponent } from './components/RenderComponent';

import { useState } from 'react';

import './App.css';

function App() {
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);

  return (
    <div>
      <RenderComponent begin={begin} setBegin={setBegin} end={end} setEnd={setEnd}/>
    </div>
  );
}

export default App;
