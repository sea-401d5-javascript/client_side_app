const angular = require('angular');

var PerformanceApp = angular.module('PerformanceApp', []);
require('./RESOURCE/RESOURCE.js')(PerformanceApp);

// PerformanceApp.controller('PerformanceController', ['$http', PerformanceController]);
