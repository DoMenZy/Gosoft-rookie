const express = require('express')
const app = express()
const port = 3000;

app.post('input', (req, res) => {
    res.send('hello world')
  })
  app.listen(8080, 'localhost')
