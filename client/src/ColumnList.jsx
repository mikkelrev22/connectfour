import React from 'react'
import Column from './Column.jsx'

const ColumnList = (props) => {
  return (
    props.board.map((column)=><Column addPiece = {props.addPiece} value={column.value}/>)
  )
}

export default ColumnList