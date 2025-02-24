import React, { createContext, useState } from 'react'
import Child3 from './Child3';
import './Style.css'
//// Creating Context
const counting = createContext();

const Example2 = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <counting.Provider value={{count, setCount}}>
        <Child3/>
      </counting.Provider>
    </div>
  )
}

export default Example2
export {counting}
