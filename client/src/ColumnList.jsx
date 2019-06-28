import React from 'react'
import Hole from './Hole.jsx'

const ColumnList = (props) => {
  return (
    <div>
      <button onClick={props.addPiece()}>+</button>
    {props.column.map((hole)=> <Hole />)}
    </div>
  )
}

export default ColumnList