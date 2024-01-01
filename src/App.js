import './App.css';
import Drawoncanvas from './Canvas1';
import Canvas2 from './Canvas2';
import { useState } from 'react';

function App() {
  const [p,setP]=useState(45);

  const handle=()=>{
    setP(70);
  }

  return (
    <div className="App">
      {/* <Drawoncanvas width={500} height={500} /> */}
      <Canvas2 width={500} height={500} p={p} />
      <button onClick={handle}>Stisni</button>
    </div>
  );
}

export default App;
