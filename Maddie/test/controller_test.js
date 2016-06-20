'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('frenchie controller tests', () => {
  let frenchieCtrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('twoCRUDApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      frenchieCtrl = new $controller('FrenchieController');
      $httpBackend = _$httpBackend_;
    });
  });
  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });
  it('should get a list of frenchies', () => {
    $httpBackend.expectGET('http://localhost:3000/frenchie')
    .respond(200, {frenchie: [{name:'larry'}]});
    frenchieCtrl.getFrenchies();
    $httpBackend.flush();
    expect(frenchieCtrl.frenchies[0].name).toBe('larry');
  });
//it('should delete a frenchie', () => {
  //$httpBackend.expectDELETE('http://localhost:3000/frenchie/' + )
//})
});
