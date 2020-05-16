import React, { Component } from 'react'

class UnitDisplay extends Component {
  render () {
    const unitType = this.props.type
    const name = this.props.name
    const survived = this.props.survived
    const kills = (this.props.kills).length
    const portrait = this.props.portrait
    var style = ''
    var killTotal = ''

    const currentState = [
      ' He lives to fight again.',
      ' He will see another sunrise.',
      ' He lives to tell the tale.',
      ' He is also still drunk.',
      ' He will have nightmares for years.',
      ' Sadly he took a wound and bled out soon after.',
      ' He was struck and has stepped through the black gate.',
      ' He was mortally wounded and left the world alone and screaming.',
      ' He took a cruel cut and healers have no hope left for him.',
      ' He cracked under the strain and is now a broken man.'
    ]

    function randomPortrait () {
      let randomFloat = Math.random() * (3 - 1) + 1
      let randomInt = Math.round(randomFloat)

      let portraitSrc = 'images/portraits/' + unitType + randomInt + '.png'
      return portraitSrc
    }

    function skullySummon () {
      let skullyState = (survived) ? 'visible' : 'hidden'
      return skullyState
    }

    function battleStyle () {
      switch (true) {
        case kills === 5:
          style = ' became the God of Death and slew ' + kills + ' foes.'
          return style
        case kills === 4:
          style = ' bathed in blood and slew ' + kills + ' foes.'
          return style
        case kills === 3:
          style = " earned his Warrior's name by killing " + kills + ' foes.'
          return style
        case kills === 2:
          style = ' fought valliantly and put ' + kills + ' foes into the mud.'
          return style
        case kills === 1:
          style = ' held his own and killed ' + kills + ' enemy warrior.'
          return style
        case kills === 0:
          style = ' also tried to contribute but failed to slay anyone.'
          return style
      }
    }

    function currentStateGenerator () {
      // assign random array key based on result
      let min = (!survived) ? 0 : 4
      let max = (!survived) ? 5 : 9

      let stateIndexFloat = Math.random() * (max - min) + min
      var stateIndexInt = Math.round(stateIndexFloat)
      let currentStateText = currentState[stateIndexInt]
      return currentStateText
    }

    return (
      <div className='udUnitContainer'>
        <div className='udImageContainer'>
          <div className='udImageRondel'>
            <div className='skullyBox'>
              <img className='skully' style={{ visibility: skullySummon() }} src='images/portraits/deadFace.png' />
            </div>
            <img className = 'udPortrait'src={portrait} />
          </div>
        </div>
        <div className='udTextHolder'>
          <p className='udText'>
            {name}
            {battleStyle()}
            {currentStateGenerator()}
          </p>
        </div>
      </div>
    )
  }
}

export default UnitDisplay
