module.exports = function(app) {
  require('./controllers/milkshake-controller')(app);
  require('./directives')(app);
};
