import React, { useContext } from 'react'
import { UserContext } from './Parent'


const ChildC = () => {
    // const user = useContext(UserContext);

    const {person} = useContext(UserContext);

  return (
    <div>
        
        {/* I am, {user.name} from {user.city}, blood group is: {user.blood} {user.id} */}

        <table align='center'>
            <caption>Donor Information</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Blood</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {person.map((item, id)=>(
                    <tr key={id}>
                        <td>{ item.name }</td>
                        <td>{ item.email }</td>
                        <td>{ item.blood }</td>
                        <td>{ item.city }</td>
                    </tr>
                ))}
            </tbody>
        </table> 

    </div>
  )
}

export default ChildC
