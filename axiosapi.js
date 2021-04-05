import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";


function App() {
// let state= new Date().toLocaleTimeString();
 const [count,setCount]=useState();
 const [name,setName]=useState();
 const [moves,setMove]=useState();
 useEffect(()=>
{

async function getData()
{
 const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`)
 console.log(res.data.name)
 setName(res.data.name);
 setMove(res.data.moves.length)
}
getData();
});
// },[count]);//here count is given in array because we want only effect of useeffect when button count button is clicked
 
 return (
     <>
     <h1>you choose <span style={{ color : "red"}}>{count}value</span> </h1>
     <h1>my name is<span style={{ color : "red"}}>{name} </span> </h1>
     <h1>i have  <span style={{ color : "red"}}>{moves}moves</span> </h1>
    
    <select
    value={count}
    onChange={(event)=>{
      setCount(event.target.value);
    }}
    >
     
    <option value="1">1</option>
    <option value="25">25</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>

    </select>
   
   </>
 );
};

export default App;
