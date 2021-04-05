import React, { useState } from "react"
import ReactDom from "react-dom"


function App() {
 const state= useState();
 const [count,setCount]=useState(0);
 const IncNum = () => {
   setCount(count + 1);

 }
 const DecNum = () => {
   setCount(count - 1);

 }
 return (
   < >
   <h1>{count}</h1>
     <botton onMouseOver={IncNum}>incriment </botton>
     <botton onClick={DecNum}>decrement </botton>
   </>
 );
}

export default App;