const mongoose = require('mongoose');
const schemas = require('./../db/schemas')
const taskModel = schemas.Task
class Task {
  create(req, res) {
    const newTask = new schemas.Task({
      description: req.body.description,
      completed: req.body.completed
    })
    newTask.save().then(() => {
      res.send('New tasks added to db\n' + newTask)
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
  findAll(req, res) {
    taskModel.find({}).then((tasks) => {
      res.send(tasks)
    }).catch((error) => {
      res.status(500).send();
    });
  }
  async findOne(req, res) {
    const _id = req.params.id
    await taskModel.findById(_id).then((task) => {
      console.log(task);
      if (!task) {
        return res.status(404).send()
      }
      res.send(task)
    }).catch((error) => {
      res.status(500).send();
    });
  }
}

module.exports = Task