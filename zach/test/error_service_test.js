'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('error service tests', function() {
  let errorService;
  beforeEach(() => {
    angular.mock.module('PerformanceApp');
    angular.mock.inject(function(ErrorService) {
      errorService = ErrorService;
    });
  });
  it('should have a getter', () => {
    expect(typeof errorService.getErrors).toBe('function');
  });
  it('should get an array', () => {
    expect(Array.isArray(errorService.getErrors())).toBe(true);
  });
  it('logError should add an error to the log', () => {
    errorService.logError('test error')({});
    let errorArray = errorService.getErrors();
    expect(errorArray[0]).toBe('test error');
  });
});
