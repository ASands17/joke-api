
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const jokeRoute = require('./routes/jokes')

express()
  .use('/joke',jokeRoute)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

