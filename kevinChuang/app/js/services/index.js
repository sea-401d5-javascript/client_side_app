module.exports = function(app) {
  require('./errorService')(app);
  require('./treatService')(app);
  require('./authService')(app);
};
