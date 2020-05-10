import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  
import Home from './Home'
import { Link } from 'react-router-dom'

class PhaserGame extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div className="home">
        <div className="gameBody">

          <div className="gamePanel">
            <h1 className="championName">Champion One</h1>
            <div className="panelHorizontal"></div>
            <h1 className="championUnit">Unit Name</h1>
            <div className="panelHorizontal"></div>
            <h1 className="championAction">Attack:</h1>
            <h1 className="championAction">Health:</h1>
            <h1 className="championAction">Actions:</h1>
            <div className="panelHorizontal"></div>
            {/* <h1 className="championAction">Ammo</h1> */}
            <h1 className="endTurn">End Turn</h1>
          </div>
 

      <div className="gameDiv">
        <IonPhaser game={gameFile} initialize={true} />
            <div className="endGameDiv">
              <Link to='/report'><div className="endGameButton"><h1 className="endGameText">End Game</h1></div></Link>
            </div>
      </div>

          <div className="gamePanel">
            <h1 className="championName">Champion Two</h1>
            <div className="panelHorizontal"></div>
            <h1 className="championUnit">Unit Name</h1>
            <div className="panelHorizontal"></div>
            <h1 className="championAction">Attack:</h1>
            <h1 className="championAction">Health:</h1>
            <h1 className="championAction">Actions:</h1>
            <div className="panelHorizontal"></div>
            {/* <h1 className="championAction">Ammo</h1> */}
            <h1 className="endTurn">End Turn</h1>
          </div>

        </div>
        </div>


    )
  }
}

export default PhaserGame