const mongoose = require('mongoose');
const schemas = require('./../db/schemas')
const validator = require('validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
//TEST PASSWORD = senhahasheada
const userModel = schemas.User

class User {
  create(req, res) {
    bcrypt.hash(req.body.password, saltRounds).then((hash) => {
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: hash
      })
      newUser.save().then(() => {
        res.send('New user added to db\n' + newUser)
      }).catch((error) => {
        res.status(400).send(error);
      });
    }).catch((e) => {
      console.log("Unable to hash password");
    })

  }
  findAll(req, res) {
    userModel.find({}).then((users) => {
      res.send(users)
    }).catch((error) => {
      res.status(500).send();
    });
  }
  async findOne(req, res) {
    const email = req.params.email
    if (!validator.isEmail(email)) return res.send('Invalid email')
    await userModel.findOne({
      email: email,
    }).then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send()
      }
      res.send(user)
    }).catch((error) => {
      res.status(500).send();
    });
  }

  updateByEmail(req, res) {
    const email = req.params.email
    if (!validator.isEmail(email)) return res.status(400).send("Invalid Email")
    bcrypt.hash(req.body.password, saltRounds).then((hash) => {
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: hash
      })
      userModel.updateOne({
          email: email
        }, newUser)
        .then((result) => {
          console.log(result);
          res.send("User Updated\n" + result)
        }).catch((e) => {
          res.send(e).status(500)
        })
    }).catch((e) => {
      res.send(e).status(500)
    })


  }
  deleteByEmail(req, res) {
    const email = req.params.email
    userModel.findOneAndDelete({
      email: email
    }).then((result) => {
      res.send('User deleted with success').status(200)
    }).catch((e) => {
      res.send(e).status(500)
    })
  }
  async pathPassword(req, res) {
    const email = req.params.email
    // const password = req.body.password
    // console.log(email, password);
    if (!validator.isEmail(email)) return res.send('Invalid email')
    await userModel.findOne({
      email: email,
    }).then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send("User not found")
      }
      //AQUI
      const hash = user.password
      bcrypt.compare(req.body.password).then((result) => {
        if (!result) {
          return res.send('Password is incorrect').status(400)
        }
        console.log("deu certo a senha");
        // res.send('Passwords match').status(200)
        userModel.findByIdAndUpdate(user._id, {
          password: req.body.newPassword
        }).then((updateResult) => {
          res.send(updateResult).status(200)
        }).catch((err) => {
          res.send(err).status(500)
        })
      }).catch((e) => {
        res.send(e).status(500)
      })
    }).catch((error) => {
      res.status(500).send();
    });
  }
}
module.exports = User;