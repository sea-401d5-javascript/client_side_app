'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const perfItemTemplate = require('../app/templates/performances/item.html');
const perfListTemplate = require('../app/templates/performances/list.html');
const perfFormTemplate = require('../app/templates/performances/new_form.html');
const venItemTemplate = require('../app/templates/venues/item.html');
const venListTemplate = require('../app/templates/venues/list.html');
const venFormTemplate = require('../app/templates/venues/new_form.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;
  let perfctrl = {
    performances: [{name: 'test performance', venue: 'test venue'}]
  };

  beforeEach(() => {
    angular.mock.module('PerformanceApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });
  it('item directive should display title of a performance', () => {
    $httpBackend.expectGET('./templates/performances/item.html')
      .respond(200, perfItemTemplate);
    $scope.performance = {name: 'test performance'};
    let element = angular.element('<item-directive performance="performance"></item-directive');
    element.data('$ngControllerController', {});
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();
    expect(text).toBe('test performance');
  });
  it('venue item directive should display name of a venue', () => {
    $httpBackend.expectGET('./templates/venues/item.html')
      .respond(200, venItemTemplate);
    $scope.venue = {name: 'test venue'};
    let element = angular.element('<venue-item-directive venue="venue"></venue-item-directive');
    element.data('$ngControllerController', {});
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();
    expect(text).toBe('test venue');
  });
})
