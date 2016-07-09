module.exports = function(app){
  require('./nba-directive.js')(app);
  require('./nfl-directive.js')(app);
};
