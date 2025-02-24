import React from 'react'
import GrandChild2 from './GrandChild2'
import './Parent.css'
const GrandChild = ({ count, message })=>{
    return(
        <div>
            <p>Message: { message }</p>
            <GrandChild2 count={count}/>
        </div>
    )
}
export default GrandChild