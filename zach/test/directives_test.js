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

  beforeEach(() => {
    angular.mock.module('PerformanceApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });
  it('performance list should be a list of performances', () => {
    // $httpBackend.expectGET('./templates/performances/item.html')
    //   .respond(200, perfItemTemplate);
    // $scope.performances = {name: 'test performance'};
    // let link = $compile('<item-directive performance="performance"></item-directive');
    // let directive = link($scope);
    // $scope.$digest();
    // $httpBackend.flush();

  })
})
