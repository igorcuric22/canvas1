import { useEffect,useRef } from "react";
import './Canvas2.css'

function Canvas4(props) {
    const canvas = useRef();
    let ctx = null;
    
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

        for(let i=0;i<=2*Math.PI;i=i+0.01)
        {
            console.log(i);
            const r=(1-Math.cos(i));
            const x=canvasEle.width/2+100*r*Math.cos(i);
            const y=canvasEle.height/2+100*r*Math.sin(i);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+1,y+1)
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.font = "48px serif";
        ctx.fillStyle = "red";
        ctx.fillText(props.p, 10, 50);
        ctx.stroke();
   
    },[props.p]);
   
    return (
      <div className="App">
        <h3>Draw a rectangle on Canvas</h3>
        <canvas ref={canvas} width={props.width} height={props.height}></canvas>
      </div>
    );
  }
   
  export default Canvas4;