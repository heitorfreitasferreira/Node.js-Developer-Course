const express = require('express')
const User = require('./controller/user')
const Task = require('./controller/task')

const routes = express.Router() //desacoplar as rotas para um arquivo separado
const user = new User
const task = new Task
//Posts
routes.post('/users', user.create)
routes.post('/tasks', task.create)

//Gets
//User Gets
routes.get('/users', user.findAll)
routes.get('/users/:id', user.findOne)
//Task Gets
routes.get('/tasks', task.findAll)
routes.get('/tasks/:id', task.findOne)

module.exports = routes