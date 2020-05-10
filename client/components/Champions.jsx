import React from 'react'

class Champions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      champions: [], 
      // championOne: '',
      // championTwo: ''
    }

  }

  componentDidMount() {
    fetch('/players')
      .then(response => response.json())
      .then(data => 
        this.setState({
          champions: data})
        // console.log(data[0].playerName) //get playerName from db data
      )
  }
render() {
  return(
    <div className='champions'>
      <div className='unitOne'>
        <h3>Unit One:</h3>
        {
          this.state.champions.map((player, index) => {
            return(
              player.playerNumber === 1 
              ?
              <li key={index}>{player.playerName}</li>
              : ''
            )
          })
        }
      </div>
      <br/>
      <div className='unitTwo'>
        <h3>Unit Two:</h3>
        {
          this.state.champions.map((player, index) => {
            return(
              player.playerNumber === 2
              ?
              <li key={index}>{player.playerName}</li>
              : ''
            )
          })
        }
      </div>
    </div>
  )}
}

export default Champions