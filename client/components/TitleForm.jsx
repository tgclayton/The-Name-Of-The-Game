import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne: '',
      playerTwo: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

  championOneHandler = event => {
    this.setState({
      playerOne: event.target.value
    })
  }

  championTwoHandler = event => {
    this.setState({
      playerTwo: event.target.value
    })
  }

  submitHandler = event => {
    let team1 = this.state.playerOne
    let team2 = this.state.playerTwo
    event.preventDefault()
    let setTeams = this.props.setTeams
    setTeams(team1, team2)
  }

  render () {
    return (
      <div className="formContainerDiv">
        <div className="formBodyBorder">
          <div className="formBody">
            <Form>
              <h3 className="formTitleText">What should the heralds call you?</h3>
              <div className="formFlex">
                <h2 className="formlabel">Champion One</h2>

                <Form.Group className="formGroup">
                  <Form.Input
                    placeholder='Champion One'
                    name='championOne'
                    onChange={this.championOneHandler}
                  />
                </Form.Group>
              </div>
              <div className="formFlex">
                <h2 className="formlabel">Champion Two</h2>
                <Form.Group>
                  <Form.Input
                    placeholder='Champion Two'
                    name='championTwo'
                    onChange={this.championTwoHandler}
                  />
                </Form.Group>
              </div>
              <div onClick={this.submitHandler}>
                <Link to='/game'>
                  <button className='brButton'>Fight!</button>
                </ Link>
              </div>
              {/* <Link to='/game'>Temporary Link to Report</Link> */}
            </Form>
          </div>

        </div>
      </div>
    )
  }
}

export default TitleForm
