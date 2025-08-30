import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0)

  // let counter=5
  const addValue=()=>{
    counter=counter+1;
    if(counter>10)
    {
      counter=10
      setCounter(10)
    }
    else  
      setCounter(counter)
    console.log("Clicked",counter)
  }
  const removeBy1=()=>{
    counter=counter-1;
    if(counter<0)
    {
      counter=0
      setCounter(counter)
    }
    else
      setCounter(counter);
    console.log("Clicked",counter)
  }
  return (
    <>
      <h1>React hooks</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button><br />
      <button onClick={removeBy1}>Remove value {counter}</button>
    </>
  )
}

export default App
