'use strict';

const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../dev/js/client.js');

describe('snake tests', ()=>{

  let snakeCtrl;
  let $httpBackend;

  beforeEach(()=>{
    angular.mock.module('SvW-App');
    angular.mock.inject(function($controller, _$httpBackend_){
      snakeCtrl = new $controller('SnakesController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function(){
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should run a test', ()=>{
    expect(false).toBe(false);
  });

  it('should have a snakes array', ()=>{
    expect(Array.isArray(snakeCtrl.snakes)).toBe(true);
  });

  it('should get a list of snakes', ()=>{
    $httpBackend.expectGET('http://localhost:2222/snakes/')
      .respond(200, {data: [{name: 'test snek', size: 1000}]});

    snakeCtrl.getSnakes();

    $httpBackend.flush();

    //expect(snakeCtrl.snakes[0].name).toBe('test snek');
  });

});
