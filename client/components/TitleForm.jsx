import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayer } from '../api'


class TitleForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      championOne: '',
      championTwo: '',
      unitNum: 1 //trial
    }

    this.submitHandler = this.submitHandler.bind(this)
    // this.handleChampionOne = this.handleChampionOne(this)
    // this.handleChampionTwo = this.handleChampionTwo(this)
  }

  // submitHandler = data => {
  //   console.log('form data:', data)
  //   // event.preventDefault()
  //   // // addPlayers(this.state)
  //   // addPlayers(this.state.championOne)
  //   // // addPlayers(this.state.championTwo)
  //   addPlayer('orange')
  //     .then(data => console.log(data))
  //     .then(champion => conosle.log('champions: ', champion))

  // }

  submitHandler = event => {
    event.preventDefault()
    // console.log(this.state.championOne)
    // addPlayer('hey', 9)
      // .then(data => console.log('added to db?: ', data))
  }

  handleChampionOne = event => {
    this.setState({
      championOne: event.target.value,
      // championOneUnitNum: 1 //work around db seeds...for now...
    })
  }

  handleChampionTwo = event => {
    this.setState({
      championTwo: event.target.value,
      // championTwoUnitNum: 2
    })
  }

  
  render() {
    return(
      <div className="formBodyBorder">
        <form className="formBody">
          <h3 className="formTitleText">What should the heralds call you?</h3>
          <div className="formGroup">
          <label>Champion One:
            <input
              label='Champion One'
              placeholder='championOne'
              name='championOne'
              onChange={this.handleChampionOne}
            />
          </label>
          <label>Champion Two:
            <input
              label='Champion Two'
              placeholder='championTwo'
              name='championTwo'
              onChange={this.handleChampionTwo}
            />
          </label>
          </div>
          <button className='fight-btn' onClick={this.submitHandler}>
            <Link to='/game' className='fight-link'>Fight</Link>
          </button>
        </form>
      </div>
    )
  }
}

export default TitleForm
