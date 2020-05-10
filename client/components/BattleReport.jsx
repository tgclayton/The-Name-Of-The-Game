import React, { Component } from 'react';
import UnitDisplay from './UnitDisplay';

//RECEIVED DATA
//Winner
const winner = 1

//Player names (ex database)
const playerOneName = 'playerOne'
const playerTwoName = 'playerTwo'

//Unit array drilled to object
const unit = {
      class: 'warrior',
      name: 'Ulfrick',
      survived: true,
      woundsTaken: 2,
      woundsGiven: 6,
      kills: 2
}


//DYNAMIC TEXT
var resultsFlavour = ''

function winnerAssignment(playerNumber){
  resultsFlavour = (playerNumber === winner) ? ' emerged victorious.' : ' tastes bitter defeat.'
  return resultsFlavour
}



//FLAVOUR TEXT COMPILERS
const titleText = 'Silence descends upon the blood soaked field, the gods have spoken.'
const resultCallout = {
  playerOne: playerOneName + winnerAssignment(1),
  playerTwo: playerTwoName + winnerAssignment(2),
}


class BattleReport extends Component {


  render() {
    return (
      <div className='brMainContainer'>
        <div className='brPanel'>
          <div className='brPanelStroke'>
            <div className='brTitle'>
              {titleText}
            </div>
            <div className='brPlayerOneBlock'>
              <div className='brBlockPlayerName'>
                {resultCallout.playerOne}
              </div>
              <div className='brUnitContainer'>
                <UnitDisplay />
              </div>
            </div>
            <div className='brPlayerTwoBlock'>
              <div className='brBlockPlayerName'>
                {resultCallout.playerTwo}
              </div>
              <div className='brUnitContainer'>
                <UnitDisplay name={'jon'} survived={'true'} hits={5} kills={2} />
              </div>
            </div>
            <div className='brButtonBlock'>
              'Buttons'
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BattleReport;