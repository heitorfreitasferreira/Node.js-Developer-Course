const mongoose = require('mongoose');
const schemas = require('./../db/schemas')

const userModel = schemas.User

class User {
  create(req, res) {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password: req.body.password
    })
    newUser.save().then(() => {
      res.send('New user added to db\n' + newUser)
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
  findAll(req, res) {
    userModel.find({}).then((users) => {
      res.send(users)
    }).catch((error) => {
      res.status(500).send();
    });
  }
  async findOne(req, res) {
    const _id = req.params.id
    await userModel.findById(_id).then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send()
      }
      res.send(user)
    }).catch((error) => {
      res.status(500).send();
    });
  }
}
module.exports = User;