import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { addPlayers } from '../api'

import PhaserGame from './PhaserGame'

let TitleForm = props => {
  const { championOne, handleSubmit } = props

  return (
  <div className="formBodyBorder">
    <form onSubmit={handleSubmit(values=>console.log(values))} className='formBody'>
      <div>
        <label className='form-label'>Champion One</label>
        <Field 
          name='championOne' 
          component='input' 
          type='text'/>
      </div>
      <br/>
      <div>
        <label className='form-label'>Champion Two</label>
        <Field 
          name='championTwo' 
          component='input' 
          type='text'/>
      </div>
      <br/>
      <button type="submit">Submit</button><br/>
      <button className='fight-btn'><Link to='/game' className='fight-link'>Fight</Link></button>
    </form>
  </div>
)}

TitleForm = reduxForm({
  // a unique name for the form
  form: 'players'
})(TitleForm)

// connect to read form values
const selector = formValueSelector('players')
TitleForm = connect(state => {
  const championOne = selector(state, 'championOne')
  const championTwo = selector(state, 'championTwo')
  return {
    championOne,
    championTwo
  }
})(TitleForm)

// class TitleForm extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       championOne: '',
//       championTwo: ''
//     }
//     this.submitHandler = this.submitHandler.bind(this)
//   }

//   handleChampionOneName = event => {
//     this.setState({
//       championOne: event.target.value
//     })
//   }

//   handleChampionTwoName = event => {
//     this.setState({
//       championTwo: event.target.value
//     })
//   }

//   submitHandler = event => {
//     event.preventDefault()
//     // // addPlayers(this.state)
//     // addPlayers(this.state.championOne)
//     // // addPlayers(this.state.championTwo)
//     // fetch('/')
//     // .then(res => res.json())
//     // .then(data => this.setState({championOne: data}))
//   }

//   render() {
//     return(
//       <div className="formBodyBorder">
//         <div className="formBody">
//           <Form >
//               <h3 className="formTitleText">What should the heralds call you?</h3>
//             <Form.Group className="formGroup">
//               <div>
//               <Form.Input
//                 label='Champion One'
//                 placeholder='championOne'
//                 name='championOne'
//                 onChange={this.handleChampionOneName}
//               /></div> 
//             </Form.Group>
//             <Form.Group>
//               <Form.Input
//                 label='Champion Two'
//                 placeholder='championTwo'
//                 name='championTwo'
//                 onChange={this.handleChampionTwoName}
//               />
//             </Form.Group> 
//             <Form.Button onClick={this.submitHandler}>
//               <Link to='/game'>Fight</Link>
//             </Form.Button>
//           </Form>
//         </div>
//       </div>
//     )
//   }
// }

export default TitleForm
