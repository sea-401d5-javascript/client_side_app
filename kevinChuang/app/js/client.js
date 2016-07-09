const angular = require('angular');
const ngRoute = require('angular-route');
var treatApp = angular.module('treatApp',[ngRoute]);
require('./controller')(treatApp);
require('./directives')(treatApp);
require('./services')(treatApp);
