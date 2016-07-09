module.exports = function(IceCreameryApp) {
  require('./controllers/icecream-controller')(IceCreameryApp);
  require('./directives')(IceCreameryApp);
};
