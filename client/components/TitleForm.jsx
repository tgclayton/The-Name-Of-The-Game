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
      <div className="formBody">
        <Form>
            <h3 className="formTitleText">What should the heralds call you?</h3>
          <Form.Group className="formGroup">
            <div>
            <Form.Input
              label='Champion One'
              placeholder='championOne'
              name='championOne'
              onChange={event => this.setState({championOne: event.target.value })}
             /></div>
          </Form.Group>
          <Form.Group>
            <Form.Input
              label='Champion Two'
              placeholder='championTwo'
              name='championTwo'
              onChange={event => this.setState({championTwo: event.target.value })}
             />
          </Form.Group>
          <Form.Button onClick={this.submitHandler}>
            <Link to='/game'>Fight</Link>
          </Form.Button>
        </Form>
      </div>
      </div>
    )
  }
}

export default TitleForm
