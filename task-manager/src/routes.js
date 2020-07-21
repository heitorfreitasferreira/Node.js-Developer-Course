const express = require('express')
const User = require('./controller/user')
const Task = require('./controller/task')

const routes = express.Router() //desacoplar as rotas para um arquivo separado
const user = new User
const task = new Task
routes.post('/users', user.create)
routes.post('/tasks', task.create)
module.exports = routes