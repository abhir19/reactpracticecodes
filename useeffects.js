
import './App.css';
import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"


function App() {

 const [count,setCount]=useState(0);
 useEffect(()=>
{
  alert("I AM CLICKED");
},[count]);
 return (
    
     <button onClick={() => {
       setCount(count+1);
     }}
     >
       click me {count}
     </button>
   
  
 );
};

export default App;
