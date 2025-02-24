import React from 'react'
import GrandChild from './GrandChild'
import './Parent.css'

const Child = ({count, message, increment, decrement, reset})=>{
    return(
        <div>
            <button onClick={ increment } disabled={ count >= 20 } >Click + 2</button>            
            <button onClick={ decrement } disabled={ count <= 0 } >Click - 2</button>
            <button onClick={ reset } disabled={ count === 0 }>Reset</button>

            <div>
                <GrandChild count={ count } message={ message }/>
            </div>
        </div>
    )
}

export default Child