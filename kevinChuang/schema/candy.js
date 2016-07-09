/*jshint esversion:6*/
/*eslint-env es6*/

const mongoose = require('mongoose');

const Candy = mongoose.Schema({
  name: String,
  stock: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('candy',Candy);
