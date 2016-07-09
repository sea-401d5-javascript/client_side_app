// 'use strict';
//
// const angular = require('angular');
// require('angular-mocks');
// require('../app/js/client.js');
//
// describe('MilkShake Controller Tests', () => {
//   let msctrl;
//   let $httpBackend;
//
//   beforeEach(() => {
//     angular.mock.module('IceCreameryApp');
//     angular.mock.inject(function($controller, _$httpBackend_) {
//       msctrl = new $controller('MilkShakeController');
//       $httpBackend = _$httpBackend_;
//     });
//   });
//
//   afterEach(() => {
//     $httpBackend.verifyNoOutstandingRequest();
//     $httpBackend.verifyNoOutstandingExpectation();
//   });
//
//   it('should have a milkshake array', () => {
//     expect(Array.isArray(msctrl.milkshake)).toBe(true);
//   });
//
//   it('should get a list of milkshakes ordered', () => {
//     $httpBackend.expectGET('http://localhost:3000/milkshake')
//     .respond(200, {flavor: 'chocolate'});
//
//     msctrl.getMilkShake();
//     $httpBackend.flush();
//     expect(msctrl.milkshake.flavor).toBe('chocolate');
//   });
//
//   it('should create a milkshake order', () => {
//     $httpBackend.expectPOST('http://localhost:3000/milkshake')
//     .respond(200, {flavor: 'coffee'});
//
//     msctrl.newMilkShake = {flavor: 'lemon'};
//     msctrl.addMilkShake();
//     $httpBackend.flush();
//     expect(msctrl.newMilkShake).toBe(null);
//   });
//
//   it('should delete an milkshake order', () => {
//     let testMilkShake = {flavor: 'rocky road', _id:2};
//     $httpBackend.expectDELETE('http://localhost:3000/milkshake/2')
//     .respond(200, {message: 'successfully deleted'});
//
//     msctrl.milkshake.push(testMilkShake);
//     msctrl.deleteMilkShake(testMilkShake);
//     $httpBackend.flush();
//     expect(msctrl.milkshake.length).toBe(0);
//   });
// });
