const config =  require('./../config/database');
const express = require('express');
const router = express.Router();
const passport= require('passport');
const jwt = require('jsonwebtoken');
const Login = require('../models/logins');
const addLogin = require('../models/logins');
// const config = require('../config/database');
// config = require('../config/config');
// router.get('/logins',(req,res,next) =>{
//   Login.find(function(err,login){
//     res.json(login);
//   });
// });

router.post('/authenticate',(req,res,next) =>{
   // res.send('AUTHENTICATE');
    const userName=req.body.userName;
    const password=req.body.password;
 Login.getUserByUsername(userName,(err,login)=>{
  if(err) throw err;
  if(!login){
    return res.json({success:false,msg:'user not found'});
  }

  Login.comparePassword(password,login.password, (err, isMatch) =>{
    if(err) throw err;
    if(isMatch){
      const token = jwt.sign(login.toJSON(),config.secret,{
        expiresIn: 604800
      });
      res.json({
        success:true,
        token:'JWT'+token,
        login:{
          id:login._id,
          fullName:login.fullName,
          email:login.email
        }
      });
    }else {
      return res.json({success:false,msg:'Wrong password'});
    }

  });
});
});

router.post('/register',(req,res,next) => {
  let newLogin = new Login ({
    fullName:req.body.fullName,
    userName:req.body.userName,
    password:req.body.password,
    email:req.body.email,
    phoneNo:req.body.phoneNo,
    address:req.body.address,
    postalCode:req.body.postalCode,
  });

  Login.addLogin(newLogin,(err,login) => {
    if(err)
    {
      res.json({ success:false,msg:'failed to register'});
    }
    else {
      res.json({ success:true,msg:' user registed succesfully'});
    }
  });
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next) =>{
  res.json({login: req.login});
});

module.exports = router;
