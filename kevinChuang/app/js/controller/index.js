module.exports = function(app) {
  require('./treatsController')(app);
  require('./errorController')(app);
};
