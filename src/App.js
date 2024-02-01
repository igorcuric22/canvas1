import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Countdown = () => {
  const [countdown, setCountdown] = useState(0);
  let [i, setI] = useState(0);
  const canvas= useRef(null);

  let p=Math.PI/720;
  let ii=0;
  useEffect(() => {
    
  const countdownInterval = setTimeout(() => {
      
      setCountdown((prevCountdown) => prevCountdown + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [countdown]); // Empty dependency array ensures the effect runs only once
  
                                                                                                                                                                               

  useEffect(() => {
    
      // get context of the canvas
      const canvasEle = canvas.current;
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
      let ctx = canvasEle.getContext("2d");  
     

      ctx.beginPath();
      ctx.moveTo(canvasEle.width/2,0);
      ctx.lineTo(canvasEle.width/2,canvasEle.height);
      ctx.moveTo(0,canvasEle.height/2);
      ctx.lineTo(canvasEle.width,canvasEle.height/2);
      ctx.stroke();

      const x0=100;
      const y0=0;
      const xx0=100;
      const yy0=0;
      // const x1=r*Math.cos(i);
      // const y1=r*Math.sin(i);

      const x1=x0*Math.cos(i)+y0*Math.sin(i);
      const y1=-x0*Math.sin(i)+y0*Math.cos(i);

      const xxx1=(x0+100)*Math.cos(i)+(y0+0)*Math.sin(i);
      const yyy1=-(x0+100)*Math.sin(i)+(y0+0)*Math.cos(i);

      const x2=x1*Math.cos(i)+y1*Math.sin(i);
      const y2=-x1*Math.sin(i)+y1*Math.cos(i);

      ctx.beginPath();
      ctx.arc(canvasEle.width/2, canvasEle.height/2,100, 0, 2 * Math.PI);
      ctx.stroke(); 

      ctx.beginPath();
      ctx.arc(canvasEle.width/2+xxx1,canvasEle.height/2+yyy1 ,100, 0, 2 * Math.PI);
      ctx.stroke();
      
      console.log(i,x1,y1);

      ctx.beginPath();
      ctx.moveTo(canvasEle.width/2,canvasEle.height/2);
      ctx.lineTo(canvasEle.width/2+xxx1,canvasEle.height/2+yyy1)
      ctx.lineTo(canvasEle.width/2+x2+xxx1,canvasEle.height/2+y2+yyy1)
      ctx.stroke();
      
      for(let t=0;t<=i;t+=p)
      {
        const x1=x0*Math.cos(t)+y0*Math.sin(t);
        const y1=-x0*Math.sin(t)+y0*Math.cos(t);
  
        const xxx1=(x0+100)*Math.cos(t)+(y0+0)*Math.sin(t);
        const yyy1=-(x0+100)*Math.sin(t)+(y0+0)*Math.cos(t);
  
        const x2=x1*Math.cos(t)+y1*Math.sin(t);
        const y2=-x1*Math.sin(t)+y1*Math.cos(t);
        ctx.lineTo(canvasEle.width/2+x2+xxx1,canvasEle.height/2+y2+yyy1)
        ctx.beginPath();
        ctx.moveTo(canvasEle.width/2+x2+xxx1,canvasEle.height/2+y2+yyy1);
        ctx.lineTo(canvasEle.width/2+x2+xxx1+1,canvasEle.height/2+y2+yyy1+1);
        ctx.stroke();
      
      }
      
      
     

      setTimeout(() => {
        // Decrease the countdown value every second
        setI(ii=>ii+p);
       
        
      }, 50);

},[i])

  return (
    <div>
      <h2>Countdown: {countdown}</h2>
      <h3>Angle: {i.toFixed(6)}</h3>
      <canvas ref={canvas} width={600} height={600}></canvas>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Countdown />
    </div>
  );
}

export default App;
