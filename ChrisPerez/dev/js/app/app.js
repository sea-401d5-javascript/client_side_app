module.exports = function(app){
  require('./controllers/snakes-controller')(app);
  require('./controllers/weasels-controller')(app);
};
