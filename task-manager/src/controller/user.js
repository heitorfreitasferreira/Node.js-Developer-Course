const mongoose = require('mongoose');
const schemas = require('./../db/schemas')


class User {
  create(req, res) {
    const newUser = new schemas.User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password: req.body.password
    })
    newUser.save().then(() => {
      res.send('New user added to db\n' + newUser)
    }).catch((error) => {
      res.send(error);
    });
  }
}
module.exports = User;