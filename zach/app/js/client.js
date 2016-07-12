const angular = require('angular');

var PerformanceApp = angular.module('PerformanceApp', []);
require('./RESOURCE/')(PerformanceApp);

// PerformanceApp.controller('PerformanceController', ['$http', PerformanceController]);
