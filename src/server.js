const express = require('express')
const route = require('./route')
const server = express()
const path = require('path')
const { dirname } = require('path')
//Define ejs como  motor de visualização
server.set('view engine', 'ejs')
//acesso a pasta public
server.use(express.static('public'))
//define o caminho da pasta views
server.set('views', path.join(__dirname, 'views'))

//midware
server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log('Rodando'))
