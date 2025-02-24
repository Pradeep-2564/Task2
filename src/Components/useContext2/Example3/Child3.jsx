import React, { useContext } from 'react'
import { userContext } from './Example3'

const Child3 = () => {
    const {employee} = useContext(userContext)

  return (
    <div>
      <p>{ employee.name }</p>
    </div>
  )
}

export default Child3
