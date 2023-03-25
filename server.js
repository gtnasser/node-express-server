// simple 8080 port express server
// usage: node server [PORT]

const PORT = process.argv[2] || process.env.PORT || 8080
const express = require('express')
const app = express()

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1))
}

app.get('/', function (req, res) {
  res.send(`Hello World! #${getRandomInt(250)}`)
  console.log(`Request from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)
})

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
})
