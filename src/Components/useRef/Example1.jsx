import React, { useEffect, useRef, useState } from 'react'
import './Example2.css'

const Example1 = () => {

    const [count, setCount] = useState(0);

    // let value = 1;
    let val = useRef(0);

    const handelClick = ()=>{
        // value = value+1
        // console.log(value);
        // setCount(count+1)


        setCount(count+1)
        val.current = val.current+1
        console.log("Value of val is: ", val.current);
    }

    ////Its run on evrey render
    useEffect(()=>{
        console.log("Component is re-rendered");
    })

  return (
    <div className='content'>
      <button onClick={handelClick} className='btnE1'>Click +</button>
      <br />

      <div className='display'>
        Count is: {count}
      </div>
    </div>
  )
}

export default Example1
