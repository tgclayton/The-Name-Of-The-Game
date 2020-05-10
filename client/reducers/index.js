import { combineReducers } from 'redux'
import { GET_PLAYERS, ADD_PLAYER } from '../actions'

function players(state=[], action) {
  switch(action.type) {
    case GET_PLAYERS:
      return action.players
    default:
      return state
  }
}

function addPlayer(state=[], action) {
  switch(action.type) {
    case ADD_PLAYER:
      return [...state, action.player] 
      // {
      //   // playerName: action.playerName
        
      // }]
    default:
      return state
  }
}

const reducers = combineReducers({ players, addPlayer })
export default reducers