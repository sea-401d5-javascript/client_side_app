'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('SvW-App', [ngRoute]);

require('./app/app')(app);
require('./services')(app);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './templates/views/home.html'
    })
    .when('/signin', {
      templateUrl: './templates/views/signin.html',
      controller: 'SigninController',
      controllerAs: 'signinctrl'
    })
    .when('/signup', {
      templateUrl: './templates/views/signup.html',
      controller: 'SigninController',
      controllerAs: 'signinctrl'
    })
    .when('/snakes', {
      templateUrl: './templates/views/snakes.html',
      controller: 'SnakesController',
      controllerAs: 'sctrl'
    })
    .when('/weasels', {
      templateUrl: './templates/views/weasels.html',
      controller: 'WeaselsController',
      controllerAs: 'wctrl'
    });
});
