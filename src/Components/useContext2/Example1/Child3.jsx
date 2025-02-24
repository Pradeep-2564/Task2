import React, { useContext } from 'react'
import { useCount } from './Example1'

const Child3 = () => {
    const {count, setCount} = useContext(useCount);

    const handleCount = ()=>{
        setCount(count + 1)
    }
  return (
    <div className='container'>
      <div className="content">
        <h3>Counter app</h3>
        <button onClick={handleCount}>Click +</button><br /><br />
        <span>{count}</span>
      </div>
    </div>
  )
}

export default Child3
