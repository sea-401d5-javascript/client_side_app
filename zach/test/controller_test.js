const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('controller tests', () => {
  let perfctrl;
  let venuectrl;
  let $httpBackend;
  beforeEach(()=> {
    angular.mock.module('PerformanceApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      perfctrl = new $controller('PerformanceController');
      venuectrl = new $controller('VenueController');
      $httpBackend = _$httpBackend_;
    });
  });
  afterEach(()=> {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get a list of performances', () => {
    $httpBackend.expectGET('http://localhost:3000/performances')
      .respond(200, {performances: [{name: 'testPerf', venue: 'annex'}]});

    perfctrl.getPerformances();
    $httpBackend.flush();
    expect(perfctrl.performances.performances[0].venue).toBe('annex');
  });

  it('should be able to post a performance', () => {
    perfctrl.newPerformance = {name: 'testPerf', venue: 'annex'};
    $httpBackend.expectPOST('http://localhost:3000/performances')
      .respond(200, perfctrl.newPerformance);

    perfctrl.addPerformance();
    $httpBackend.flush();
    expect(perfctrl.performances[1].venue).toBe('annex');
  });
  it('should be able to update a performance', () => {

  });
  it('should get a list of venues', () => {
    $httpBackend.expectGET('http://localhost:3000/venues')
      .respond(200, {venues: [{name: 'testVenue', neighborhood: 'capitol hill', servesAlcohol: true}]});

    venuectrl.getVenues();
    $httpBackend.flush();
    expect(venuectrl.venues.venues[0].neighborhood).toBe('capitol hill');
  });
  it('should be able to post a venue', () => {
    venuectrl.newVenue = {name: 'testVenue', neighborhood: 'capitol hill'};
    $httpBackend.expectPOST('http://localhost:3000/venues/')
      .respond(200, venuectrl.newVenue);

    venuectrl.addVenue();
    $httpBackend.flush();
    expect(venuectrl.venues[1].neighborhood).toBe('capitol hill');
  });

});
