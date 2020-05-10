import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home'
import PhaserGame from './PhaserGame'
import BattleReport from './BattleReport'

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      championOne: '',
      championTwo: ''
    }
    this.updateChampionName = this.updateChampionName.bind(this);
  }

  updateChampionName() {
    this.setState({
      championOne: this.state.championOne,
      championTwo: this.state.championTwo})
  }

    render() {
    // const { initialize, game } = this.state
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={PhaserGame} />
        <Route exact path='/report' component={BattleReport} />
      </Router>
      )
    }
  }
  