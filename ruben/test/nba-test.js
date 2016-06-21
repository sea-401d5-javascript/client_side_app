'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('NBA Controller Test', () => {
  let nbactrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SportsApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      nbactrl = new $controller('NbaController');
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

    nbactrl.getPlayers();
    $httpBackend.flush();

    expect(nbactrl.notes[0].body).toBe('test player');
  });

  it('should create a player', () => {
    $httpBackend.expectPOST('http://localhost:3000/')
      .respond(200, {data: {body: 'test player'}});

    nbactrl.newPlayer = {body: 'test player'};
    nbactrl.addPlayer();
    $httpBackend.flush();

    expect(nbactrl.newPlayer).toBe(null);
  });

  it('should delete a player', () => {
    let testPlayer = {body: 'test player', _id:1};
    $httpBackend.expectDELETE('http://localhost:3000/1')
      .respond(200, {message: 'deleted'});

    nbactrl.players.push(testPlayer);
    nbactrl.deletePlayer(testPlayer);
    $httpBackend.flush();

    expect(nbactrl.players.length).toBe(1);
  });
});
