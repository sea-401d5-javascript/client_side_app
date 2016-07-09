'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const icecreamAddOrder = require('../app/templates/icecream/icecream-addorder-directive.html');
const milkshakeAddOrder = require('../app/templates/milkshake/milkshake-addorder-directive.html');
const icecreamList = require('../app/templates/icecream/icecream-list-directive.html');
const milkshakeList = require('../app/templates/milkshake/milkshake-list-directive.html');
const icecreamUpdateOrder = require('../app/templates/icecream/icecream-updateorder-directive.html');
const milkshakeUpdateOrder = require('../app/templates/milkshake/milkshake-updateorder-directive.html');
const icecreamOrderHistory = require('../app/templates/icecream/icecream-orderhistory-directive.html');
const milkshakeOrderHistory = require('../app/templates/milkshake/milkshake-orderhistory-directive.html');


describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('IceCreameryApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should have input fields to add icecream order', () => {
    $httpBackend.expectGET('./templates/icecream/icecream-addorder-directive.html')
    .respond(200, icecreamAddOrder);

    let element = angular.element('<section ng-controller="IceCreamController as icctrl"><icecream-add-order></icecream-add-order></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let input = directive.find('input');
    let inputattr = input.attr('ng-model');
    let input2 = angular.element(input[1]);
    let inputattr2 = input2.attr('ng-model');
    let input3 = angular.element(input[2]);
    let inputattr3 = input3.attr('ng-model');

    expect(inputattr).toBe('newIceCream.flavor');
    expect(inputattr2).toBe('newIceCream.scoops');
    expect(inputattr3).toBe('newIceCream.vessel');
  });

  it('should have input boxes to add milkshake order', () => {
    $httpBackend.expectGET('./templates/milkshake/milkshake-addorder-directive.html')
    .respond(200, milkshakeAddOrder);

    let element = angular.element('<section ng-controller="MilkShakeController as msctrl"><milkshake-add-order></milkshake-add-order></section');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let input = directive.find('input');
    let inputattr = input.attr('ng-model');
    let input2 = angular.element(input[1]);
    let inputattr2 = input2.attr('ng-model');
    let input3 = angular.element(input[2]);
    let inputattr3 = input3.attr('ng-model');

    expect(inputattr).toBe('newMilkShake.flavor');
    expect(inputattr2).toBe('newMilkShake.scoops');
    expect(inputattr3).toBe('newMilkShake.milkRichness');
  });

  it('should give me a list of icecreams', () => {
    $httpBackend.expectGET('./templates/icecream/icecream-list-directive.html')
    .respond(200, icecreamList);
    $httpBackend.expectGET('./templates/icecream/icecream-updateorder-directive.html')
    .respond(200, icecreamUpdateOrder);

    $scope.icecream = [{
      flavor: 'chocolate',
      scoops: 2,
      vessel: 'cup'
    }, {
      flavor: 'vanilla',
      scoops: 3,
      vessel: 'waffle cone'
    }];

    let element = angular.element('<section ng-controller="IceCreamController as icctrl"><icecream-list icecreams="icecream"></icecream-list></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let list = directive.find('li');
    let span = directive.find('span');
    let span1 = angular.element(span[0]);
    let spantext = span1.text();
    let span2 = angular.element(span[1]);
    let spantext2 = span2.text();
    let span3 = angular.element(span[2]);
    let spantext3 = span3.text();

    expect(list.length).toBe(2);
    expect(spantext).toBe('chocolate');
    expect(spantext2).toBe('2');
    expect(spantext3).toBe('cup');
  });

  it('should give me a list of milkshakes', () => {
    $httpBackend.expectGET('./templates/milkshake/milkshake-list-directive.html')
    .respond(200, milkshakeList);
    $httpBackend.expectGET('./templates/milkshake/milkshake-updateorder-directive.html')
    .respond(200, milkshakeUpdateOrder);

    $scope.milkshake = [{
      flavor: 'pralines and cream',
      scoops: 2,
      milkRichness: 'whole milk'
    }, {
      flavor: 'orange',
      scoops: 4,
      milkRichness: 'skim milk'
    }];

    let element = angular.element('<section ng-controller="MilkShakeController as msctrl"><milkshake-list milkshakes="milkshake"></milkshake-list></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let list = directive.find('li');
    let span = directive.find('span');
    let span1 = angular.element(span[0]);
    let spantext = span1.text();
    let span2 = angular.element(span[1]);
    let spantext2 = span2.text();
    let span3 = angular.element(span[2]);
    let spantext3 = span3.text();

    expect(list.length).toBe(2);
    expect(spantext).toBe('pralines and cream');
    expect(spantext2).toBe('2');
    expect(spantext3).toBe('whole milk');
  });

  it('should have input fields to update an existing icecream order', () => {
    $httpBackend.expectGET('./templates/icecream/icecream-updateorder-directive.html')
    .respond(200, icecreamUpdateOrder);

    let element = angular.element('<section ng-controller="IceCreamController as icctrl"><icecream-update-order icecreams="icecreams"></icecream-update-order></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let input = directive.find('input');
    let inputattr = input.attr('ng-model');
    let input2 = angular.element(input[1]);
    let inputattr2 = input2.attr('ng-model');
    let input3 = angular.element(input[2]);
    let inputattr3 = input3.attr('ng-model');

    expect(inputattr).toBe('updatedIceCream.flavor');
    expect(inputattr2).toBe('updatedIceCream.scoops');
    expect(inputattr3).toBe('updatedIceCream.vessel');
  });

  it('should have input fields to update existing milkshake order', () => {
    $httpBackend.expectGET('./templates/milkshake/milkshake-updateorder-directive.html')
    .respond(200, milkshakeUpdateOrder);

    let element = angular.element('<section ng-controller="MilkShakeController as msctrl"><milkshake-update-order milkshakes="milkshake"></milkshake-update-order></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let input = directive.find('input');
    let inputattr = input.attr('ng-model');
    let input2 = angular.element(input[1]);
    let inputattr2 = input2.attr('ng-model');
    let input3 = angular.element(input[2]);
    let inputattr3 = input3.attr('ng-model');

    expect(inputattr).toBe('updatedMilkShake.flavor');
    expect(inputattr2).toBe('updatedMilkShake.scoops');
    expect(inputattr3).toBe('updatedMilkShake.milkRichness');
  });

  it('should call a function to get icecream order list and have icecream list directive', () => {
    $httpBackend.expectGET('./templates/icecream/icecream-orderhistory-directive.html')
    .respond(200, icecreamOrderHistory);
    $httpBackend.expectGET('./templates/icecream/icecream-list-directive.html')
    .respond(200, icecreamList);
    $httpBackend.expectGET('./templates/icecream/icecream-addorder-directive.html')
    .respond(200, icecreamAddOrder);

    // $scope.icecreams = [{
    //   flavor: 'mint',
    //   scoops: 2,
    //   vessel: 'waffle cone'
    // }, {
    //   flavor: 'chocolate',
    //   scoops: 4,
    //   vessel: 'cup'
    // }];

    let element = angular.element('<section ng-controller="IceCreamController as icctrl"><icecream-order-history ng-init="getIceCream()" icecreams="icctrl.icecream"></icecream-order-history></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let orderhistory = directive.find('icecream-order-history');
    let geticecreams = orderhistory.attr('ng-init');
    let icecreamlist = directive.find('icecream-list');

    expect(geticecreams).toBe('getIceCream()');
    expect(icecreamlist.length).toBe(1);
  });

  it('should call a function to get milkshake order list and have milkshake list directive', () => {
    $httpBackend.expectGET('./templates/milkshake/milkshake-orderhistory-directive.html')
    .respond(200, milkshakeOrderHistory);
    $httpBackend.expectGET('./templates/milkshake/milkshake-list-directive.html')
    .respond(200, milkshakeList);
    $httpBackend.expectGET('./templates/milkshake/milkshake-addorder-directive.html')
    .respond(200, milkshakeAddOrder);

    let element = angular.element('<section ng-controller="MilkShakeController as msctrl"><milkshake-order-history ng-init="getMilkShake()" milkshakes="msctrl.milkshake"></milkshake-order-history></section>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let orderhistory = directive.find('milkshake-order-history');
    let getmilkshakes = orderhistory.attr('ng-init');
    let milkshakelist = directive.find('milkshake-list');

    expect(getmilkshakes).toBe('getMilkShake()');
    expect(milkshakelist.length).toBe(1);
  });
});
