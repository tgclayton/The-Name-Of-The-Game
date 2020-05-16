import request from 'superagent'

export function getPlayers() {
  return request.get('/api/v1/players')
}


export function addPlayers (player) {
  console.log(player)
  return request.post('/api/v1/players')
    .send(player)
    .then(res => console.log('res:', res))
    .catch(err => console.log(err))
  }
