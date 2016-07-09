module.exports = function(app) {
  require('./formDirective')(app);
  require('./teamDirective')(app);
};
