const angular = require('angular');

var PerformanceApp = angular.module('PerformanceApp', []);
require('./RESOURCE/')(PerformanceApp);
require('./services/')(PerformanceApp);

// PerformanceApp.controller('PerformanceController', ['$http', PerformanceController]);
