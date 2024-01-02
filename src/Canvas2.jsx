import { useEffect,useRef } from "react";
import './Canvas2.css'
function Canvas2(props) {
    const canvas = useRef();
    let ctx = null;
   
    const drawRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { borderColor = 'black', borderWidth = 1 } = style;
       
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
        ctx.font = "48px serif";
        ctx.fillStyle = "red";
        ctx.fillText(props.p, 10, 50);
        ctx.stroke();
      }

      // draw rectangle with background
      const drawFillRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { backgroundColor = 'black' } = style;
       
        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(x, y, w, h);
      }
    // initialize the canvas context
    useEffect(() => {
      // dynamically assign the width and height to canvas
      const canvasEle = canvas.current;
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
   
      // get context of the canvas
      ctx = canvasEle.getContext("2d");

      const r1Info = { x: 20, y: 30, w: 100, h: 50 };
      const r1Style = { borderColor: 'red', borderWidth: 10 };
      drawRect(r1Info, r1Style);

      const r2Info = { x: 100, y: 100, w: 80, h: 150 };
  drawRect(r2Info);
 
  const r3Info = { x: 250, y: 80, w: 80, h: 120 };
  drawFillRect(r3Info, { backgroundColor: 'green' });
 
  const r4Info = { x: 200, y: 220, w: 100, h: 50 };
  drawFillRect(r4Info);

    }, [props.p]);

    
    useEffect(() => {
        for(let i=0;i<=2*Math.PI;i=i+0.01)
        {
            console.log(i);
            const r=(1-Math.cos(i));
            const x=200+100*r*Math.cos(i);
            const y=200+100*r*Math.sin(i);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+1,y+1)
            ctx.stroke();
        }
    },[props.p]);
   
    return (
      <div className="App">
        <h3>Draw a rectangle on Canvas - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
        <canvas ref={canvas} width={props.width} height={props.height}></canvas>
      </div>
    );
  }
   
  export default Canvas2;