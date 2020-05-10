import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'

import { connect } from 'react-redux'

class Title extends React.Component {
  render() {
    return(
      <div>
        <div className="TitleDiv">
          <div>
            <Description />
          </div>
          <div class="TitleFormDiv">
           <TitleForm />
          </div>
        </div>
        <h1>{this.props.players.values.championOne}</h1>
      </div>
    )
  }
}

export default Title