import React, { useContext } from 'react'
import { counting } from './Example2'

const Child3 = () => {
    const {count, setCount} = useContext(counting);

    const increment = ()=>{
        setCount(count + 2)
    }
    const decrement = ()=>{
        setCount(count - 2)
    }
    const handleReset = ()=>{
        setCount(0);
    }
  return (
    <div className='container'>
        <div className="content">
            <p>Count is: <span>{ count }</span></p>
            <button onClick={increment} disabled={ count >=20} id='increment'>Click +</button>
            <button onClick={decrement} disabled={ count === 0} id='decrement'>Click -</button>
            <button onClick={handleReset} disabled={ count === 0} id='reset'>Reset</button>
        </div>
    </div>
  )
}

export default Child3
