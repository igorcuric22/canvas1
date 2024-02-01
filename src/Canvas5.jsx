import { useEffect,useRef, useState } from "react";
import './Canvas2.css'

function Canvas5(props) {
    const canvas = useRef();
    const [i,setI]=useState(0);
    let ctx = null;

    let p=Math.PI/360;
    let ii=0;

    function draw(ii,ctx,canvasEle){
        const x=100*Math.sin(i)
        const y=100*Math.cos(i)
        console.log(x);
        ctx.beginPath();
        ctx.moveTo(canvasEle.width/2,canvasEle.height/2);
        ctx.lineTo(canvasEle.width/2+x,canvasEle.height/2+y);
        ctx.stroke();
        
        setI(ii);
    }



    useEffect(() => {
      const canvasEle = canvas.current;
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
   
      // get context of the canvas
      ctx = canvasEle.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(canvasEle.width/2,0);
      ctx.lineTo(canvasEle.width/2,canvasEle.height);
      ctx.moveTo(0,canvasEle.height/2);
      ctx.lineTo(canvasEle.width,canvasEle.height/2);
      ctx.stroke();

      
      
       setTimeout(()=>{
        ii+=p;
        draw(ii,ctx,canvasEle)
       },100);

        ctx.beginPath();
        ctx.font = "48px serif";
        ctx.fillStyle = "red";
        ctx.fillText(props.p, 10, 50);
        ctx.stroke();
   
    },[props.p,draw,i]);
   
    return (
      <div className="App">
        <h3>Draw a rectangle on Canvas {i}</h3>
        <canvas ref={canvas} width={props.width} height={props.height}></canvas>
      </div>
    );
  }
   
  export default Canvas5;