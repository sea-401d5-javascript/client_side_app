'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('sportsApp', [ngRoute]);
require('./nba/nba')(app);
require('./nfl/nfl')(app);
require('./services')(app);
require('./directives')(app);

app.factory('AuthService', function($http) {
  let token;
  const service = {};

  service.signUp = function(user) {
    return $http.post('http://localhost:3001/signup', user)
      .then((res) => {
        token = res.data.token;
        return res;
      });
  };

  service.signIn = function(user) {
    let base64Auth = btoa(user.username + ':' + user.password);
    let authString = 'Basic ' + base64Auth;

    return $http({
      url: 'http://localhost:3001/signin',
      method: 'POST',
      headers: {
        authorization: authString
      }
    }).then((res) => {
      token = res.data.token;
      return res;
    }
    ,(err) => {
      console.log('fail in signing service', err);
      throw err;
    }
  );
  };

  service.getToken = function() {
    return token;
  };

  return service;
});

app.controller('NbaController', function($http, AuthService, $location) {
  const url = 'http://localhost:3001/nbaPlayers';
  this.players = [];

  this.getPlayers = function() {
    $http.get(url)
      .then((res) => {
        this.players = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  this.addPlayer = function(player) {
    $http({
      method: 'POST',
      data: player,
      headers: {
        token: AuthService.getToken()
      },
      url
    })
      .then((res) => {
        this.players.push(res.data);
        this.player = null;
      }, (err) => {
        $location.url('/signin');
        console.log(err);
      });
  };
});

app.controller('NflController', function($http, AuthService, $location) {
  const url = 'http://localhost:3001/nflPlayers';
  this.players = [];

  this.getPlayers = function() {
    $http.get(url)
      .then((res) => {
        this.players = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  this.addPlayer = function(player) {
    $http({
      method: 'POST',
      data: player,
      headers: {
        token: AuthService.getToken()
      },
      url
    })
      .then((res) => {
        this.players.push(res.data);
        this.player = null;
      }, (err) => {
        $location.url('/signin');
        console.log(err);
      });
  };
});

app.controller('SigninController', function($location, AuthService) {
  this.goHome = function() {
    $location.url('http://localhost:3001/');
  };

  this.signUp = function(user) {
    AuthService.signUp(user)
      .then((res) => {
        console.log(res, 'back in controller');
      })
      .then((err) => {
        console.log(err);
      });
  };

  this.signIn = function(user) {
    AuthService.signIn(user)
      .then((res) => {
        console.log(res, 'sign in res');
      }, (err) => {
        console.log(err, 'failed sign in');
        $location.path('/signup');
      });
  };
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './views/players.html'
  })
  .when('/signin', {
    templateUrl:'./views/signin.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  })
  .when('/signup', {
    templateUrl: './views/signup.html'
  });
});
