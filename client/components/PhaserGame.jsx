import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  

import Champions from './Champions'
import GameHeader from './GameHeader'

class PhaserGame extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div className='game-container'>
          <GameHeader />
        <div className='game'>
          <IonPhaser game={gameFile} initialize={true} />
          <Champions />
        </div>
      </div>
    )
  }
}

export default PhaserGame