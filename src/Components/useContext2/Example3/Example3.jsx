import React, { createContext } from 'react'
// import Child1 from './Child1';
import Child3 from './Child3';


const userContext = createContext();

const Example3 = () => {

    const employees = [
        {name: "Pradeep", age: '25', email: "pradeep@gmail.com" , department: "Developer", status: "active", id: 1},
        {name: "Vinesh", age: '28', email: "vinesh@gmail.com" , department: "Manager", status: "active", id: 2},
        {name: "Abhi", age: '26', email: "abhi@gmail.com" , department: "Deployement", status: "active", id: 3},
        {name: "Vijay", age: '24', email: "vijay@gmail.com" , department: "Testing", status: "active", id: 4},
        {name: "Tarun", age: '22', email: "tarun@gmail.com" , department: "Team lead", status: "active", id: 5},
    ];

    return (
    <div>
      <userContext.Provider value={{employee:employees}}>
        {/* <Child1/> */}
        <Child3/>
      </userContext.Provider>
    </div>
  )
}

export default Example3
export {userContext}
