import request from 'superagent'

export function addPlayers (names){
  console.log('One: ' + names.championOne + ' Two: ' + names.championTwo);
  
  return request.post('/players')
    .send(names)
  }