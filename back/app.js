const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoconnection = require('./config/mongoconnection.json')
const taskRouter = require('./routes/taskRoute');
mongoose.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/tasks' , taskRouter);


const server = http.createServer(app);
server.listen(3000,()=>console.log("server is run"));
module.exports = app;