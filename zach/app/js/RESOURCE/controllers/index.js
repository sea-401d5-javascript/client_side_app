module.exports = function(app) {
  require('./performance-controller')(app);
  require('./venue-controller')(app);
};
