'use strict';

const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../dev/js/client.js');

describe('weasel tests', ()=>{

  let weaselCtrl;
  let $httpBackend;

  beforeEach(()=>{
    angular.mock.module('SvW-App');
    angular.mock.inject(function($controller, _$httpBackend_){
      weaselCtrl = new $controller('WeaselsController');
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

  it('should have a weasels array', ()=>{
    expect(Array.isArray(weaselCtrl.weasels)).toBe(true);
  });

  it('should get a list of weasels', ()=>{
    $httpBackend.expectGET('http://localhost:2222/weasels/')
      .respond(200, {data: [{name: 'test snek', size: 1000}]});

    weaselCtrl.getWeasels();

    $httpBackend.flush();

    //expect(weaselCtrl.weasels[0].name).toBe('test snek');
  });

});
