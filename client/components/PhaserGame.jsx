import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'
import Home from './Home'
import ChampionOne from './ChampionOne'
import ChampionTwo from './ChampionTwo'
import EndGame from './EndGame'

class PhaserGame extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      gameFile: gameFile
    }
  }
  info2 = React.createRef()

  setWinner () {
    this.setState({
      winner: true
    })
  }

  render () {
    // const { initialize, game } = this.state
    // let endGame
    // if (this.state.winner) {
    //   console.log('set endgame to be component')
    //   endGame = <EndGame/>
    // }
    return (
      <div className="home">

        {/* <div id = 'stupid-info-box3' style = {{ display: 'none' }} ref = {this.info2}>{this.info2.current}</div> */}
        <div className="gameWhole">
          <div className="gameBody">
            <ChampionOne team1 = {this.props.team1} team2 = {this.props.team2}/>
            <div>
              <EndGame getBattleInfo = {this.props.getBattleInfo} />
              <div className="gameDiv" id = "gameDiv">
                <IonPhaser game={this.state.gameFile} initialize={true}/>
                {/* <div id = 'win' className='hide-show' style = {{ display: 'none', position: 'absolute' }} ref = {this.winner} >{this.winner.current}</div> */}
                <div className='endgame-display' ref ={this.winner}>
                  {
                    this.state.winner
                      ? <EndGame winner={this.props.winner}/>
                      : ''
                  }
                </div>
              </div>
            </div>
            <ChampionTwo />
          </div>
        </div>
      </div>
    )
  }
}

export default PhaserGame
