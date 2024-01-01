import react ,{ useRef,useEffect,useState } from "react";

const Drawoncanvas = (props)=>{
  const myref = useRef(null);
const [i,setI]=useState(0)

let canvas,ctx;
let p=0;

  const _handleclick=()=>{
    canvas = myref.current;
    ctx = canvas.getContext('2d');
    ctx.fillStyle="blue";
    ctx.fillRect(100,100,32,32);
    p++;
    setI(p);
    
  }

  useEffect(() => {
    console.log("igor")
    canvas = myref.current;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, props.width, props.height);

   
  },[]);

  return <canvas width={500} height={350} onClick={_handleclick} ref={myref}></canvas>
}

export default Drawoncanvas;

// export default function app() {
//   return (
//     <div classname="app">
//       <drawoncanvas />
//       <h1>hello codesandbox</h1>
//       <h2>start editing to see some magic happen!</h2>
//     </div>
//   );
// }