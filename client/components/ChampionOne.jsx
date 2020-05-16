import React from 'react'
import request from 'superagent'
import { NONE } from 'phaser'

export default class ChampionOne extends React.Component {
  state = {
    championName: 'champName',
    championUnit: 'Active Unit',
    championAttack: '1',
    championHealth: '2',
    championActions: '2',
    info: ''
  }

champName = React.createRef()
champUnit = React.createRef()
champAttack = React.createRef()
champHealth = React.createRef()
champAction = React.createRef()
info = React.createRef()

// style = {{ display: 'none' }}
render () {
  return (
    <div className="gamePanel">
      <div id = 'stupid-info-box1' style = {{ display: 'none' }}>{this.props.team1}</div>
      <div id = 'stupid-info-box2' style = {{ display: 'none' }}>{this.props.team2}</div>
      <div id = 'battleInfo' style = {{ display: 'none' }}></div>
      <h1 className="championName" id="champName" ref={this.champName}>{this.champName.current}</h1>
      <div className="panelHorizontal"></div>
      <h1 className="championUnit" id="champUnit" >None Selected</h1>
      <div className="panelHorizontal"></div>
      <h1 className="championAction" id="champAttack" ref={this.champAttack}>Attack: ...{this.champAttack.current}</h1>
      <h1 className="championAction" id="champHealth" ref={this.champHealth}>Health: ...{this.champHealth.current}</h1>
      <h1 className="championAction" id="champAction" ref={this.champAction}>Actions: ... {this.champAction.current}</h1>
      <img src="" alt="" id = 'battlePortrait'/>
      <div className="panelHorizontal"></div>
      {/* <h1 className="championAction">Ammo</h1> */}
      <div className="infoBox" id = "infoWindow" ref = {this.info}>{this.info.current}</div>
      {/* <h1 className="endTurn">End Turn</h1> */}
    </div>
  )
}
}
