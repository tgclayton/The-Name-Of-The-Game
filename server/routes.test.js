const request = require('supertest')
const server = require('./server')

test('Everything is fine', () => {
  expect(true).toBeTruthy()
})

jest.mock('./db/players', () => {
  return {
    getPlayers: () =>
      Promise.resolve({
       playerOne: 'Tom',
       playerTwo: 'Stan'
      }),
    addPlayer: () =>
      Promise.resolve({
        playerOne: 'Matthew',
        playerTwo: 'Karel'
      })
    }
})

test('GET players route', done => {
  request(server)
    .get('/api/v1/players')
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      done()
    })
})


test('POST route posts playerOne and playerTwo name into db', done => {
  request(server)
    .post('/api/v1/players')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(201)
      done()
    })
})
