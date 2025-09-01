import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [charAllowed,setcharAllowed] = useState(false)
  const [numAllowed,setnumAllowed] = useState(false)
  const [pass,setPass] = useState("")
  
  // useref hook
  const passRef=useRef(null)

  const passGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)
      str=str+"0123456789"
    if(charAllowed)
      str=str+"!@#$%^&*()_+-=[]{}|;:,.<>/?`~"
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPass(pass)
  },[length,charAllowed,numAllowed,setPass])

  const copyPassonClipBoard=useCallback(()=>{
    passRef.current?.select()
    // copy this range 
    passRef.current?.setSelectionRange(0,16)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{
    passGenerator();
  },[length,charAllowed,numAllowed,passGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-300 bg-gray-500'>
        <h1 className='text-4xl text-middle text-white my-3'> Password Generator </h1>
        <div className='flex shadow rounded-lg gap-x-2 overflow-hidden mb-4'>
          <input type="text" 
          value={pass}
          className='outline-none w-full rounded-lg py-1 px-3'
          readOnly
          placeholder='pasaword'
          ref={passRef}
          />
          <button onClick={copyPassonClipBoard} className='outline-none rounded-lg bg-blue-900 text-orange px-3 py-2 '>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
            min={7}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setnumAllowed((prev)=>!prev)}}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev)}}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
