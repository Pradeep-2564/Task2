import React, { createContext, useState } from 'react'
import ChildC from './ChildC';
import './Style.css'

////Step1: Create context
////Step2: wrap all the child inside a provider
////Step3: Pass value
////Step4: consume under consumer
const ThemeContext = createContext();
const Parent = () => {

    const [theme, setTheme] = useState('light');


  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?'white':'black'}}>
            <ChildC/>
        </div>            
        </ThemeContext.Provider>
    </div>
  )
}

export default Parent
export {ThemeContext}