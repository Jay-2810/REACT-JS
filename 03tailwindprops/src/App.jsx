import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: "Jay",
    age: 21
  }
  let myArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="JAY" btnText="click me"/>
      <Card name="PATEL" />
    </>
  )
}

export default App
