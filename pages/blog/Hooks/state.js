import React from 'react'
import { useState } from 'react'
const state = () => {
  const [count, setCount] = useState(0);
  const setC = () =>{
    setCount(count + 1);
  }
  return (
    <>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={setC}>
        Click me
      </button>
    </div>
    </>
  )
}

export default state