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
      <div className='home brMainContainer'>
        <div className='brPanel'>
          <div className='brPanelStroke'>
            <div className='brTitle'>
              {titleText}
            </div>
            <div className='brContentContainer'>
              <div className='brPlayerBlock'>
                <div className='brBlockPlayerName'>
                  {resultCallout.playerOne}
                </div>
                <div className='brUnitContainer'>
                  {this.state.unitsVictorious.map((unit, index) => {
                    return (
                      <div key={index}>
                        <UnitDisplay portrait = {unit.portrait} type={unit.class} name={unit.name} survived={unit.dead} hits={unit.woundsGiven} kills={unit.kills}/>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='brPlayerBlock'>
                <div className='brBlockPlayerName'>
                  {resultCallout.playerTwo}
                </div>
                <div className='brUnitContainer'>
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
            <div className='brButtonBlock'>
              <Link to='/' >
                <button className='brButton'>New Game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default BattleReport
