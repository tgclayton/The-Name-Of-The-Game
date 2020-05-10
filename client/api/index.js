import request from 'superagent'

export function addPlayer(name){
  // console.log('One: ' + names.championOne + ' Two: ' + names.championTwo);
  
  return request.post('/')
    .send(name)
    .then(res => {
      return res.body
    })
  }