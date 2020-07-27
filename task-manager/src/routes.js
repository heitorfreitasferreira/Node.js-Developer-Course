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
routes.get('/users/:email', user.findOne)
//Task Gets
routes.get('/tasks', task.findAll)
routes.get('/tasks/:id', task.findOne)

//Put
//User Put
routes.put('/users/:email', user.updateByEmail)

//Delete
//Delete User
routes.delete('/users/:email', user.deleteByEmail)

//Patch
//Patch User password
routes.patch('/users/:email', user.pathPassword)
module.exports = routes