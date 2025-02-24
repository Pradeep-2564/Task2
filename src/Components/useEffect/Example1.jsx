import React, { useEffect, useState } from 'react'
import './Example.css'

const Example1 = () => {
    const [count, setCount] = useState(1);

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount((count+1))
    //     },500);
    // });

    useEffect(()=>{
        setTimeout(() => {
            setCount((count+1))
        },500);
    },[]);

  return (
    <div className='example1'>
      <h1>Render statement executed: { count }</h1>
    </div>
  )
}

export default Example1
