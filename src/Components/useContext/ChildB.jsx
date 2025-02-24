import React, { useContext } from 'react'
// import ChildC from './ChildC'
import { UserContext } from './Parent'

const ChildB = () => {
  const user = useContext(UserContext)
  return (
    <div>
      {/* <ChildC/> */}
      {user.name}
    </div>
  )
}

export default ChildB
