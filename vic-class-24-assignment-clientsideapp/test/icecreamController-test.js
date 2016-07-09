// 'use strict';
//
// const angular = require('angular');
// require('angular-mocks');
// require('../app/js/client.js');
//
// describe('IceCream Controller Tests', () => {
//   let icctrl;
//   let $httpBackend;
//
//   beforeEach(() => {
//     angular.mock.module('IceCreameryApp');
//     angular.mock.inject(function($controller, _$httpBackend_) {
//       icctrl = new $controller('IceCreamController');
//       $httpBackend = _$httpBackend_;
//     });
//   });
//
//   afterEach(() => {
//     $httpBackend.verifyNoOutstandingRequest();
//     $httpBackend.verifyNoOutstandingExpectation();
//   });
//
//   it('should have an icecream array', () => {
//     expect(Array.isArray(icctrl.icecream)).toBe(true);
//   });
//
//   it('should get a list of icecream ordered', () => {
//     $httpBackend.expectGET('http://localhost:3000/icecream')
//     .respond(200, {flavor: 'strawberry'});
//
//     icctrl.getIceCream();
//     $httpBackend.flush();
//     expect(icctrl.icecream.flavor).toBe('strawberry');
//   });
//
//   it('should create an icecream order', () => {
//     $httpBackend.expectPOST('http://localhost:3000/icecream')
//     .respond(200, {flavor: 'chocolate'});
//
//     icctrl.newIceCream = {flavor: 'chocolate'};
//     icctrl.addIceCream();
//     $httpBackend.flush();
//     expect(icctrl.newIceCream).toBe(null);
//   });
//
//   it('should delete an icecream order', () => {
//     let testIceCream = {flavor: 'butter pecan', _id:1};
//     $httpBackend.expectDELETE('http://localhost:3000/icecream/1')
//     .respond(200, {message: 'successfully deleted'});
//
//     icctrl.icecream.push(testIceCream);
//     icctrl.deleteIceCream(testIceCream);
//
//     $httpBackend.flush();
//
//     expect(icctrl.icecream.length).toBe(0);
//   });
// });
