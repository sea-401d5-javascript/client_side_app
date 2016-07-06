'use strict';

const angular = require('angular');

const app = angular.module('sportsApp', []);
require('./nba/nba')(app);
require('./nfl/nfl')(app);
require('./controller')(app);
require('./services')(app);
require('./directives')(app);
