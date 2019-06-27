import React from 'react'
import Hole from './Hole.jsx'

const Column = (props) => {
  <div>
    <button onClick={props.addPiece(props.value)}>+</button>
  <Hole/>
  </div>
}

export default Column