import request from 'superagent'

export function addPlayer(name, unitNum){
  // console.log('One: ' + names.championOne + ' Two: ' + names.championTwo);
  
  return request.post('/')
    .send({ playerName: name, playerNumber: unitNum})
    .set('Accept', 'application/json')
    .then(res => res.body)
  }