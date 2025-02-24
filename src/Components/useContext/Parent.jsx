import React, { createContext, useState } from 'react'
import './Style.css'
import ChildC from './ChildC';
import ChildB from './ChildB';

////Step1: Create context
////Step2: wrap all the child inside a provider
////Step3: Pass value
////Step4: consume under consumer

const UserContext = createContext();

const Parent = () => {

  // const [user, setUser] = useState(
  //   {name: "Pradeep", blood: "A+", city: "Hyderabad",id: 1}
  // );

  const persons = [
    {name: "Pradeep", email: "pradeep@gmail.com", blood: "A+", city: "Hyderabad",id: 1},
    {name: "Vinesh", email: "vinesh@gmail.com", blood: "AB+", city: "Ameerpet",id: 2},
    {name: "Abhi", email: "abhi@gmail.com", blood: "O+", city: "Warangal",id: 3}
  ];
  
  return (
    <div>

      {/* <UserContext.Provider value={user}>
        <ChildC/>
        <ChildB/>
      </UserContext.Provider> */}

      <UserContext.Provider value={{person: persons}}>
        <ChildC/>
      </UserContext.Provider>

    </div>
  )
}

export default Parent
export {UserContext}
