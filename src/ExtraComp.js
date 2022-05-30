import React from 'react'
import { useSelector } from 'react-redux'

const ExtraComp = () => {

    const mystate = useSelector((e) => e.changeTheNumber)
  return (
    <div><hr></hr>
        <h1>{mystate}</h1>
    </div>
  )
}

export default ExtraComp