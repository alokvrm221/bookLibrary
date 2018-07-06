var express=require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport= require('passport');
var mongoose = require('mongoose');
var database = require('./config/database');

const route = require('./routes/route');
 var app = express();
 var port = 7000;

  mongoose.connect('mongodb://localhost:27017/library');
  // mongoose.connect(database);


  mongoose.connection.on('connected',() => {
    console.log('connected to database @27017');
  });
  mongoose.connection.on('error',(err) => {
    if(err)
    {
      console.log('error to  connect to database @27017');
    }
  });

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

  app.use(express.static(path.join(__dirname,'public')));

  app.use(passport.initialize());
  app.use(passport.session());
  require('./config/passport')(passport);

  app.use('/api',route);
  app.listen(port,function(){
    console.log('server started at port '+port);
  });
