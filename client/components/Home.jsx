import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'

class Home extends React.Component {

  render () {
    return (
      <div className='home'>
        <Description />
        <TitleForm setTeams = {this.props.setTeams}/>
      </div>
    )
  }
}

export default Home
