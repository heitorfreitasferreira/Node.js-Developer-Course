const mongoose = require('mongoose');
const schemas = require('./../db/schemas')

class Task {
  create(req, res) {
    const newTask = new schemas.Task({
      description: req.body.description,
      completed: req.body.completed
    })
    newTask.save().then(() => {
      res.send('New user added to db\n' + newTask)
    }).catch((error) => {
      res.send(error);
    });
  }
}

module.exports = Task