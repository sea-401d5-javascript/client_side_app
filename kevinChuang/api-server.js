'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieRouter = require('./routes/cookieRouter.js');
const candyRouter = require('./routes/candyRouter.js');
const authRoute = require('./routes/auth_route.js');
const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';

mongoose.connect(dbPort);

app.use('/cookies', cors(), cookieRouter);
app.use('/candy', cors(), candyRouter);
app.use('/', cors(), authRoute);


app.use((err,req,res,next)=> {
  res.status(500).json({message: err.message});
});

app.listen(3000,()=> console.log('Treats up on port 3000'));
