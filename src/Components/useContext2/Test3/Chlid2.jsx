import React, { useContext } from 'react'
import { information } from './Test'

const Chlid2 = () => {
    const info = useContext(information);

  return (
    <div>
      <p>This is a test { info }</p>
    </div>
  )
}

export default Chlid2
