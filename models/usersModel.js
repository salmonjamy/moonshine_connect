const  mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
  },
  surname: {
    type: String, 
    min:3
  },
  othernames: {
    type: String,
    min:3
  }, 
  email: {
    type: String,
    unique: [true, 'Email already exists'],
  } ,
  passwordHash: {
    type: String
  },
  passwordSalt: {
    type: String
  },
  username: {
    type: String,
    unique: [true, 'Username already exists'],
    min: 6,

  },
  bio: {
    type: String,
    max: 200,
  },
  occupation: {
    type: String,
    min:5
  },
  address: {
    typr: String,
  max: 100,
  },
  ward: {
    type: String,
    max: 10,
  }
  
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;