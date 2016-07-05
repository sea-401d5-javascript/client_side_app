module.exports = function(app){
  require('./snakes-controller')(app);
  require('./weasels-controller')(app);
};
