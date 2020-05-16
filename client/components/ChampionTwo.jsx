import React from 'react'
class ChampionTwo extends React.Component {
  render () {
    return (
      <div className="gamePanel2">
        <h1 className="championUnit">How to play:</h1>
        <h2 className="championAction"> Use the WASD keys to move your player and attack your opponent. The first player to kill all of the oposition wins. Remember to press T when you've finished your turn.</h2>
        <div className="panelHorizontal"></div>
        <ul className="instructionsList">
          <li>W - move up</li>
          <li>A - move left</li>
          <li>S - move down</li>
          <li>D - move right</li>
          <li>E - select</li>
          <li>T - end turn</li>
          <li>Q - attack mode</li>
          <li>R - attack this tile in attack mode</li>
          <li>Z - view unit info</li>
        </ul>
      </div>
    )
  }
}

export default ChampionTwo
