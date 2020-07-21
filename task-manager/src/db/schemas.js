const mongoose = require('mongoose');
const validator = require('validator')

const Schema = mongoose.Schema
const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You need to insert a name field'],
    validate(value) {
      if (value[0] !== value[0].toUpperCase()) {
        // throw new Error('Names need to have the first letter upper case')
        value[0].toUpperCase()
      }
    },
    trim: true
  },
  age: {
    type: Number,
    min: [18, 'Too young'],
    max: [60, 'Too old'],
    default: 18,
  },
  email: {
    type: String,
    required: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error('Email is invalid')
      }
    },
    trim: true
  },
  password: {
    type: String,
    required: [true, 'insert a password'],
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password field cannot contain "password" in it')
      }
    }
  }
})
const Task = mongoose.model('Task', taskSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  userSchema: userSchema,
  taskSchema: taskSchema,
  Task: Task,
  User: User,
}