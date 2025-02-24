import React, { useEffect, useState } from 'react'
import './Example.css'
const Example2 = () => {

    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(0);

    const handelClick = () =>{
        setCount(count+1);
    }
    
    useEffect(()=>{
        setMulti(count*2);
    },[count])

  return (
    <div className='example2'>
      <h2>You have clicked { count } times</h2>
      <button onClick={ handelClick }>Click +</button>
      <h3>Multiplication value: { multi }</h3>
    </div>
  )
}

export default Example2
