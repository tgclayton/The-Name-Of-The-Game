import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  
import Home from './Home'

import GameHeader from './GameHeader'

class PhaserGame extends Component {

    render() {
    return (
      <div>
        <GameHeader />
        <IonPhaser game={gameFile} initialize={true} />
      </div>
    )
  }
}



export default PhaserGame