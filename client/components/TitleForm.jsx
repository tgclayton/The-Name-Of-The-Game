import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {

  submitHandler = data => {
    console.log('form data:', data)
    // event.preventDefault()
    // // addPlayers(this.state)
    // addPlayers(this.state.championOne)
    // // addPlayers(this.state.championTwo)
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
              onChange={event => this.setState({championOne: event.target.value })}
            />
          </label>
          <label>Champion Two:
            <input
              label='Champion Two'
              placeholder='championTwo'
              name='championTwo'
              onChange={event => this.setState({championTwo: event.target.value })}
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
