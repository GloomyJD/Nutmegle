'use strict';

const express = require('express');
const faker = require('faker');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const moment = require('moment');
const port = process.env.PORT || 3000;
require('./socketserver.js')(io, app);
require('./globals.js');

var firstnameitem = defaultfirstname[Math.floor(Math.random() * defaultfirstname.length)];
var secondnameitem = defaultsecondname[Math.floor(Math.random() * defaultsecondname.length)];
var generatedfullname = firstnameitem + " " + secondnameitem;


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', (req, res) => {
  let noOfUsers = onlineUsers.length;
  if (noOfUsers > 1) {
    noOfUsers = noOfUsers + " users";
  }
  else {
    noOfUsers = "No users";
  }
  res.render('index', { noOfUsers: noOfUsers });
});

app.get('/chat', (req, res) => {
  //let randomName = faker.name.findName();
  //res.render('chat', { userName: randomName });
  let randomName = generatedfullname;
  res.render('chat', { userName: randomName});
});

server.listen(port, () => {
  console.log('Welcome to Nutmegle Server')
  let ServerStartTime = moment.utc().format();
  console.log(`Running on port ${port}`);
  console.log('Server started at ' + ServerStartTime + " (UTC)")
});
