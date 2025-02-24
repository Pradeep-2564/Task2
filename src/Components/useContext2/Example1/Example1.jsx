import React, { createContext, useState } from 'react'
import Child3 from './Child3';
import './Style.css'

////Creating Context
const useCount = createContext();

const Example1 = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <useCount.Provider value={{count,setCount}}>
        <Child3/>
      </useCount.Provider>
    </div>
  )
}

export default Example1
export {useCount}
