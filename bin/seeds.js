/*
steps:
1.- require mongoose
2.- require the db configs
3.- require the necessary models

const mongoose = require('mongoose');
require('../configs/db.config');
const User = require('../models/user.model');

In case we have a db not neccesary, but here you can create the users directly

const user = [
  {
  }
];

User.create(user)
  .then(() => {
    console.info("Seeds success:", users);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Seeds error:", users);
    mongoose.connection.close();
  });*/
