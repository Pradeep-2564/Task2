import { useState } from "react"
import Child from "./Child";
import './Parent.css'
const Parent = ()=>{

    const [count, setCount] = useState(0);
    const message = 'Welcome to the counter message form grandchild2';

    const increment = () =>{
        setCount(count + 2);
    };

    const decrement = () =>{
        setCount(count - 2);
    };

    const reset = () =>{
        setCount(0);
    };

    return(
        <div className="container">
            <h1>Counter Application</h1>
            <Child
                count = {count}            
                message = {message}            
                increment = {increment}            
                decrement = {decrement}
                reset = {reset}
            />
        </div>
    );
};


export default Parent