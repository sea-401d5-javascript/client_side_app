'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('NFL Controller Test', () => {
  let nflctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SportsApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      nflctrl = new $controller('NflController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get a list of players', () => {
    $httpBackend.expectGET('http://localhost:3000/')
      .respond(200, {data: [{body: 'test player'}]});

    nflctrl.getPlayers();
    $httpBackend.flush();

    expect(nflctrl.notes[0].body).toBe('test player');
  });

  it('should create a player', () => {
    $httpBackend.expectPOST('http://localhost:3000/')
      .respond(200, {data: {body: 'test player'}});

    nflctrl.newPlayer = {body: 'test player'};
    nflctrl.addPlayer();
    $httpBackend.flush();

    expect(nflctrl.newPlayer).toBe(null);
  });

  it('should delete a player', () => {
    let testPlayer = {body: 'test player', _id:1};
    $httpBackend.expectDELETE('http://localhost:3000/1')
      .respond(200, {message: 'deleted'});

    nflctrl.players.push(testPlayer);
    nflctrl.deletePlayer(testPlayer);
    $httpBackend.flush();

    expect(nflctrl.players.length).toBe(1);
  });
});
