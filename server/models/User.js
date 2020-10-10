const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchemer = new Schema(
  {
    username: {
      type: String,
      minlength: 2,
      maxlength: 25,
      required: true,
<<<<<<< HEAD
      trim: true,
    },
    email: {
      type: String,
=======
    },
    email: {
      type: String,
      unique: true,
>>>>>>> develop
      required: true,
      trim: true,
    },
    age: {
      type: String,
<<<<<<< HEAD
      trim: true,
=======
      
>>>>>>> develop
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
<<<<<<< HEAD
      trim: true,
=======
      
>>>>>>> develop
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchemer)
module.exports = User;