const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('Company controller tests should', () => {
  let companyctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SharkTankApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      companyctrl = new $controller('CompanyController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });


  it('have a companies array', () => {
    expect(Array.isArray(companyctrl.companies)).toBe(true);
  });

  it('get a list of companies', () => {
    $httpBackend.expectGET('http://localhost:3000/companies')
      .respond(200, {data: [{name: 'Scrub Daddy', tvDealReached: true}]});

    companyctrl.getCompanies();
    $httpBackend.flush();
    expect(companyctrl.companies.data[0].name).toBe('Scrub Daddy');
  });

  it('delete a company', () => {
    companyctrl.companies = [{_id:'1234', name: 'Scrub Daddy'}];
    $httpBackend.expectDELETE('http://localhost:3000/companies/1234')
      .respond(200);

    companyctrl.deleteCompany({_id:'1234', name: 'Scrub Daddy'});
    $httpBackend.flush();
    expect(companyctrl.companies).toEqual([]);
  });

  it('update a company', () => {
    companyctrl.companies = [{_id:'1234', name: 'Scrub Daddy'}];
    $httpBackend.expectPUT('http://localhost:3000/companies')
      .respond(200);

    companyctrl.updateCompany({_id:'1234', name: 'Scrub Daddy'}, {_id:'1234', name: 'Scrub Daddy-o'});
    $httpBackend.flush();
    expect(companyctrl.companies).toEqual([{_id:'1234', name: 'Scrub Daddy-o'}]);
  });

  it('add a company', () => {
    companyctrl.companies = [];
    $httpBackend.expectPOST('http://localhost:3000/companies')
      .respond(200, {_id:'1234', name: 'Scrub Daddy'});

    companyctrl.addCompany({name: 'Scrub Daddy'});
    $httpBackend.flush();
    expect(companyctrl.companies).toEqual([{_id:'1234', name: 'Scrub Daddy'}]);
  });
});
