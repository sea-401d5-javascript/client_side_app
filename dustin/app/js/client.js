const angular = require('angular');


var sharkTankApp = angular.module('SharkTankApp', []);
require('./shark/shark')(sharkTankApp);
require('./company/company')(sharkTankApp);
