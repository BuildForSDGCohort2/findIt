"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchemer = new Schema({
  username: {
    type: String,
    minlength: 2,
    maxlength: 25,
<<<<<<< HEAD
    required: true,
    trim: true
  },
  email: {
    type: String,
=======
    required: true
  },
  email: {
    type: String,
    unique: true,
>>>>>>> develop
    required: true,
    trim: true
  },
  age: {
<<<<<<< HEAD
    type: String,
    trim: true
=======
    type: String
>>>>>>> develop
  },
  password: {
    type: String,
    minlength: 8,
<<<<<<< HEAD
    required: true,
    trim: true
=======
    required: true
>>>>>>> develop
  }
}, {
  timestamps: true
});
var User = mongoose.model('User', userSchemer);
module.exports = User;