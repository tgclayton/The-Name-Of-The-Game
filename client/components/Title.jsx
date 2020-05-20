import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'

class Title extends React.Component {
  render() {
    return(
      <div>
        <div className="TitleDiv alagard-text">
          <div>
            <Description />
          </div>
          <div class="TitleFormDiv alagard-text">
           <TitleForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Title