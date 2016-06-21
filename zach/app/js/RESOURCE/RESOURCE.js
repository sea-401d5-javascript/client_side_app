module.exports = function(app) {
  require('./controllers/performance-controller.js')(app);
  require('./controllers/venue-controller.js')(app);
};
