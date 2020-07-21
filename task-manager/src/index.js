const express = require('express')
const app = express();
const routes = require('./routes')
const mongoose = require('mongoose');

const port = process.env.PORT || 3000
mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})