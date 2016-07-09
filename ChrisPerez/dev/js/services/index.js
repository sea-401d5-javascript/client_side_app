module.exports = function(app){
  require('./errorHandlingService')(app);
  require('./authService')(app);
};
