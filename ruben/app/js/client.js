const angular = require('angular');

var sportsApp = angular.module('sportsApp', []);
require('./nba/nba')(sportsApp);
require('./nfl/nfl')(sportsApp);
