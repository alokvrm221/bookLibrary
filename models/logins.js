const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const LoginSchema = mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phoneNo:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:false
  },
postalCode:{
    type:Number,
    required:true
  }

});
const Login= module.exports = mongoose.model('Login',LoginSchema);

module.exports.getUserByUsername = function(userName,callback){
  const query = {userName:userName}
  Login.findOne(query,callback);
}

module.exports.getUserById = function(id,callback){
  Login.findById(id,callback);
}

module.exports.addLogin = function(newLogin, callback){
  bcrypt.genSalt(10,(err,salt) => {
    bcrypt.hash(newLogin.password,salt,(err, hash) => {
      if(err) throw err;
      newLogin.password=hash;
      newLogin.save(callback);
    });
  });
}
module.exports.comparePassword = function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,(err,isMatch) => {
    if(err) throw err;
    callback(null,isMatch);
  });
}
