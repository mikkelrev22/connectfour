import React, {Component} from 'react'
import ColumnList from './ColumnList.jsx'
import Styles from '../dist/styles.css'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        board: {col1: [0,0,0,0,0,0],
                col2: [0,0,0,0,0,0],
                col3: [0,0,0,0,0,0],
                col4: [0,0,0,0,0,0],
                col5: [0,0,0,0,0,0],
                col6: [0,0,0,0,0,0],
                col7: [0,0,0,0,0,0]
        },
        player: 1
      }
    this.addPiece = this.addPiece.bind(this)
    this.switchUser= this.switchUser.bind(this)
  }
  //methods
  //AddPiece
  //when column button is clicked
  addPiece(column) {
    //ascertain which player 
    let player = this.state.player
    //store the current state of board
    let tempBoard = this.state.board
    //find the hole where the piece will go
    let idx = tempBoard[column].lastIndexOf(0)
    //make that whole the currant player's piece
    tempBoard[column][idx] = player
      this.setState({
        //update board with new piece in place
        board: tempBoard
      })
      //invoke checkForConnectFour
      //invoke switchUser
      this.switchUser()
    }
  
  switchUser() {
    if (player === 1){
      this.setState({
        player: 2
      })
    }
    else {
      this.setState({
        player: 1
      })
    }
  }

  //check for winner

  render() {
    return (
      <div>
        <ColumnList column={this.state.board.col1} addPiece={() => this.addPiece('col1')}
        column={this.state.board.col2} addPiece={() => this.addPiece('col2')}
        column={this.state.board.col3} addPiece={() => this.addPiece('col3')}
        column={this.state.board.col4} addPiece={() => this.addPiece('col4')}
        column={this.state.board.col5} addPiece={() => this.addPiece('col5')}
        column={this.state.board.col6} addPiece={() => this.addPiece('col6')}
        column={this.state.board.col7} addPiece={() => this.addPiece('col7')}
        />
      </div>
    )
  }
}

export default App