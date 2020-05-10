import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      championOne: '',
      championTwo: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler = event => {
    event.preventDefault()
    addPlayers(this.state)
    // addPlayers(this.state.championOne)
    // addPlayers(this.state.championTwo)
  }

  render() {
    return(
      <div className="formContainerDiv">
      <div className="formBodyBorder">
      <div className="formBody">
        <Form>
            <h3 className="formTitleText">What should the heralds call you?</h3>
            <div className="formFlex">
              <h2 className="formlabel">Champion one</h2>
          <Form.Group className="formGroup">
            <Form.Input
              placeholder='championOne'
              name='championOne'
              onChange={event => this.setState({championOne: event.target.value })}
             />
          </Form.Group>
          </div>
            <div className="formFlex">
                <h2 className="formlabel">Champion Two</h2>
          <Form.Group>
            <Form.Input
              placeholder='championTwo'
              name='championTwo'
              onChange={event => this.setState({championTwo: event.target.value })}
                />
          </Form.Group>
            </div>
          <Form.Button onClick={this.submitHandler}>Fight</Form.Button>
          <Link to='/game'>Temporary Link to PhaserGame</Link>
          <div>
            <Link to='/report'>Temporary Link to Report</Link>
          </div>
        </Form>
      </div>
      </div>
      </div>
    )
  }
}

export default TitleForm


{/* <Link to='/Session' >
<button className='mainButton' >PROCEED</button>
</Link> */}