import React, {Component} from 'react'
import ColumnList from './ColumnList.jsx'

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
        playerOne: true,
        playerTwo: false
      }
    this.addPiece = this.addPiece.bind(this)
    this.switchUser= this.switchUser.bind(this)
  }
  //methods
  //AddPiece
  //when column button is clicked
  addPiece(column) {
    //ascertain which player is set to true
    if (playerOne) {
    //drop that players number down the clicked column
      this.setState({
        //set the piece at its location
        [column]: []
      })
      //invoke checkForConnectFour
      //invoke switchUser
      this.switchUser()
    }
    if (playerTwo) {
      this.setState({

      })
      this.switchUser()
    }
  }
  
  switchUser() {
    if (playerOne){
      this.setState({
        playerOne: false,
        playerTwo: true
      })
    }
    else {
      this.setState({
        playerOne: true,
        playerTwo: false
      })
    }
  }

  //check for winner

  render() {
    return (
      <div>
        <ColumnList board= {this.state.board} addPiece = {this.addPiece}/>
      </div>
    )
  }
}

export default App