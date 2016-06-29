module.exports = function(app){
  require('./DogwDirective.js')(app);
  require('./FrenchieDirective.js')(app);
};
