export const GET_PLAYERS = "GET_QUOTES"
export const ADD_PLAYER = "ADD_PLAYER"

function getPlayers(json) { //export: first without thunk - ie. export the fetch thunk function instead
  return {
    type: GET_PLAYERS,
    json
  }
}

function fetchPlayersFromJson() {
  return fetch ('/players')
    .then(response => response.json()) 
}

export function fetchPlayers() {
  return function(dispatch) { //i.e. long-way(function inside func)
    return fetchPlayersFromJson()
      .then(players => dispatch(getPlayers(players))) 
  }
}

// add player - notice no 's' at end
function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player
  }
}

function fetchPlayerFromJson() {
  return fetch ('/players', {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams 
  })
  .then(response => response.json())  
}

export function fetchPlayer() {
  return function(dispatch) { 
    return fetchPlayerFromJson()
      .then(player => dispatch(addPlayer(player))) 
  }
}
