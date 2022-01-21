// server.js
const http = require('http')
const PORT = process.env.PORT || 80
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Everyone, Welcome to Google Cloud.................suchita and vanatan well come to MediaAgility')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
