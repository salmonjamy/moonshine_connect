const  mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
  },
  surname: {
    type: String, 
    
  },
  othernames: {
    type: String,
    
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
    

  },
  bio: {
    type: String,
    
  },
  occupation: {
    type: String,
    
  },
  address: {
    typr: String,
  
  },
  ward: {
    type: String,
    
  }
  
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;