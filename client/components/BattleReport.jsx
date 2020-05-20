import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UnitDisplay from './UnitDisplay'

//Unit array drilled to object
// DYNAMIC TEXT
var resultsFlavour = ''

// FLAVOUR TEXT COMPILERS
const titleText = 'Silence descends upon the blood soaked field, the gods have spoken.'

class BattleReport extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: this.props.winner,
      teamOne: this.props.team1,
      teamTwo: this.props.team2,
      unitsVictorious: this.props.actors[0].units,
      unitsDefeated: this.props.actors[1].units
    }

    this.winnerAssignment = this.winnerAssignment.bind(this)
  }

  winnerAssignment (teamName) {
    console.log('win assignment vars:', teamName, this.state.winner)
    resultsFlavour = (teamName === this.state.winner) ? ' emerged victorious.' : ' tastes bitter defeat.'
    return resultsFlavour
  }

  render () {
    console.log(this.state.unitsVictorious)
    console.log(this.state.unitsDefeated)

    let resultCallout = {
      playerOne: this.state.teamOne + this.winnerAssignment(this.state.teamOne),
      playerTwo: this.state.teamTwo + this.winnerAssignment(this.state.teamTwo)
    }

    return (
      <div className='home brMainContainer alagard-text'>
        <div className='brPanel alagard-text'>
          <div className='brPanelStroke alagard-text'>
            <div className='brTitle alagard-text'>
              {titleText}
            </div>
            <div className='brContentContainer alagard-text'>
              <div className='brPlayerBlock alagard-text'>
                <div className='brBlockPlayerName alagard-text'>
                  {resultCallout.playerOne}
                </div>
                <div className='brUnitContainer alagard-text'>
                  {this.state.unitsVictorious.map((unit, index) => {
                    return (
                      <div key={index}>
                        <UnitDisplay portrait = {unit.portrait} type={unit.class} name={unit.name} survived={unit.dead} hits={unit.woundsGiven} kills={unit.kills}/>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='brPlayerBlock alagard-text'>
                <div className='brBlockPlayerName alagard-text'>
                  {resultCallout.playerTwo}
                </div>
                <div className='brUnitContainer alagard-text'>
                  {this.state.unitsDefeated.map((unit, index) => {
                    return (
                      <div key={index}>
                        <UnitDisplay portrait = {unit.portrait} type={unit.class} name={unit.name} survived={unit.dead} hits={unit.woundsGiven} kills={unit.kills}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='brButtonBlock alagard-text'>
              <Link to='/' >
                <button className='brButton alagard-text'>New Game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default BattleReport
