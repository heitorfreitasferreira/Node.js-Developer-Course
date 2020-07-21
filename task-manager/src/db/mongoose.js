const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: [true, 'You need to insert a name field'],
    validate(value) {
      if (value[0] !== value[0].toUpperCase()) {
        throw new Error('Names need to have the first letter upper case')
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

const Tasks = mongoose.model('Tasks', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
})

const me = new User({
  name: '    Test   ',
  age: 18,
  email: 'test@1.com',
  password: 'senhanovamongoose'
})

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log(error);
// });

const task = new Tasks({
  description: '           this must be trimed               ',
})
task.save().then(() => {
  console.log(task);
}).catch((error) => {
  console.log(error);
});