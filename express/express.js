const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Kevin')
})

const port = 5000;

app.listen(port, ()=>{
    console.log('Servidor ', port )
})