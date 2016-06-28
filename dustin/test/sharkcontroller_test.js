const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('Shark controller tests should', () => {
  let sharkctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SharkTankApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      sharkctrl = new $controller('SharkController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });


  it('have a sharks array', () => {
    expect(Array.isArray(sharkctrl.sharks)).toBe(true);
  });

  it('get a list of sharks', () => {
    $httpBackend.expectGET('http://localhost:3000/sharks')
      .respond(200, {data: [{name: 'Mr. Wonderful'}]});

    sharkctrl.getSharks();
    $httpBackend.flush();
    expect(sharkctrl.sharks.data[0].name).toBe('Mr. Wonderful');
  });

  it('delete a shark', () => {
    sharkctrl.sharks = [{_id:'1234', name: 'Mr. Wonderful'}];
    $httpBackend.expectDELETE('http://localhost:3000/sharks/1234')
      .respond(200);

    sharkctrl.deleteShark({_id:'1234', name: 'Mr. Wonderful'});
    $httpBackend.flush();
    expect(sharkctrl.sharks).toEqual([]);
  });

  it('update a shark', () => {
    sharkctrl.sharks = [{_id:'1234', name: 'Mr. Wonderful'}];
    $httpBackend.expectPUT('http://localhost:3000/sharks')
      .respond(200);

    sharkctrl.updateShark({_id:'1234', name: 'Mr. Wonderful'}, {_id:'1234', name: 'Kevin'});
    $httpBackend.flush();
    expect(sharkctrl.sharks).toEqual([{_id:'1234', name: 'Kevin'}]);
  });

  it('add a shark', () => {
    sharkctrl.sharks = [];
    $httpBackend.expectPOST('http://localhost:3000/sharks')
      .respond(200, {_id:'1234', name: 'Mr. Wonderful'});

    sharkctrl.addShark({name: 'Mr. Wonderful'});
    $httpBackend.flush();
    expect(sharkctrl.sharks).toEqual([{_id:'1234', name: 'Mr. Wonderful'}]);
  });
});
