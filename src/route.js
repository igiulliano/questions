const express = require('express')
const route = express.Router()
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
//criando rotas
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
// formato que o formulário deve passar a informação
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

//exportando rota
module.exports = route
