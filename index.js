'use strict'

//para importar express (la lee directamente del folder modules)
const express = require('express')
//importar la librería body-parser (desde modules)
const bodyParser = require('body-parser')

//para crear el servidor
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json() )

app.get('/hola/:name', (req, res) => {
  res.send({ message: `Hola ${req.params.name}!`})
})

app.listen(port, () => {
  console.log(`API REST funcionando en http://localhost:${port}`)
})
