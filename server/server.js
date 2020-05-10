const path = require('path')
const express = require('express')
const server = express()

const players = require('./routes/players')

server.use(express.json())
server.use(express.static('public'))
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1', players)

module.exports = server




