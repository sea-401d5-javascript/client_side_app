const angular = require('angular');
var treatApp = angular.module('treatApp',[]);
require('./controller')(treatApp);
require('./directives')(treatApp);
require('./services')(treatApp);
