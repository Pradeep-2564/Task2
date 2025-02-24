import React, { useRef } from 'react'
import './Example2.css'
const Example2 = () => {

    const btnRef = useRef()

    const changeColor = ()=>{
        btnRef.current.style.backgroundColor='red';
        btnRef.current.style.padding='10px'
        btnRef.current.style.color='white'
        btnRef.current.style.border='none'
        btnRef.current.style.cursor='pointer'
    }

  return (
    <div className='container'>
      <button ref={btnRef}>Submit</button>
      <br /><br />
      <button onClick={changeColor} className='btn2'>Color Change of submit btn</button>
    </div>
  )
}

export default Example2
