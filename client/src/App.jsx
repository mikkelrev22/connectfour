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
        }
      }
  }
  
  render() {
    return (
      <div>
        <ColumnList />
      </div>
    )
  }
}

export default App