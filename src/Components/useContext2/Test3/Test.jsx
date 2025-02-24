import React, { createContext } from 'react'
import Chlid2 from './Chlid2';

const information = createContext();
const Test = () => {

    const fullInfo = "Pradeep";
    // const fullInfo = [
    //     {name: "Pradeep", age: '25', email: "pradeep@gmail.com" , department: "Developer", status: "active", id: 1},
    //     {name: "Vinesh", age: '28', email: "vinesh@gmail.com" , department: "Manager", status: "active", id: 2},
    //     {name: "Abhi", age: '26', email: "abhi@gmail.com" , department: "Deployement", status: "active", id: 3},
    //     {name: "Vijay", age: '24', email: "vijay@gmail.com" , department: "Testing", status: "active", id: 4},
    //     {name: "Tarun", age: '22', email: "tarun@gmail.com" , department: "Team lead", status: "active", id: 5},
    // ];

  return (
    <div>
      <information.Provider value={fullInfo}>
        <Chlid2/>
      </information.Provider>
    </div>
  )
}

export default Test
export {information}