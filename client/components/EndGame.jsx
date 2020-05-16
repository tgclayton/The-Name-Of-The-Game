import React from 'react'
import { Link } from 'react-router-dom'

class EndGame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: this.props.winner
    }
  }
  render () {
    return (
      <div id = 'winBox'className='endgame-container hidden'>
        <h1 id = 'endRes'>{this.state.winner} wins</h1>
        <div className="endGameDiv">
          <Link to='/report'><div className="endGameButton"><h1 className="endGameText" onClick = {this.props.getBattleInfo}>Show Results</h1></div></Link>
        </div>
      </div>
    )
  }
}

export default EndGame
