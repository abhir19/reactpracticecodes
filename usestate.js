import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import ReactDom from "react-dom"


function App() {
 let state= new Date().toLocaleTimeString();
 const [count,setCount]=useState(state);
 const IncNum = () => {
    state=new Date().toLocaleTimeString();
   setCount(state);

 }
 setInterval(IncNum,1000);
  return (
   < >
   <h1>{count}</h1>
    
   
   </>
 );
}

export default App;
