import './App.css';
import Drawoncanvas from './Canvas1';
import Canvas2 from './Canvas2';
import { useState } from 'react';

function App() {
  const [p,setP]=useState(45);
  const [valuex,setValuex]=useState("");

  const handleChange=(e)=>{
    setValuex(e.target.value);
  }

  const handle=()=>{
    setP(valuex);
  }

  return (
    <div className="App">
      {/* <Drawoncanvas width={500} height={500} /> */}
      <Canvas2 width={500} height={500} p={p} />
      <input type="text" value={valuex} onChange={handleChange}></input>
      <button onClick={handle}>Stisni</button>
    </div>
  );
}

export default App;
