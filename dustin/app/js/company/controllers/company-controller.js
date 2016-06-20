module.exports = function (app) {
  app.controller('CompanyController', ['$http', CompanyController]);

  function CompanyController($http) {
    this.$http = $http;
    this.companies = [];
    this.openModal = function (modal) {
     let m = '#modal-' + modal;
     $(m)
       .modal('show');
    };
  }

  CompanyController.prototype.getCompanies = function () {
    this.$http.get('http://localhost:3000/companies')
      .then((res) => {
        this.companies = res.data;
      }, (err) => {
        console.log(err);
      });
  };

  CompanyController.prototype.addCompany = function () {
    this.$http.post('http://localhost:3000/companies', this.newCompany)
      .then((res) => {
        this.companies.push(res.data);
        this.newcompany = null;
      }, (err) => {
        console.log(err);
      });
  };

  CompanyController.prototype.deleteCompany = function (company) {
    this.$http.delete('http://localhost:3000/companies/' + company._id)
      .then(() => {
        let index = this.companies.indexOf(company);
        this.companies.splice(index, 1);
      }, (err) => {
        console.log(err);
      });
  };

  CompanyController.prototype.updateCompany = function (company, updateCompany) {
    company.name = updateCompany.name;
    this.$http.put('http://localhost:3000/companies', company)
      .then(() => {
        this.companies = this.companies.map(n => {
          return n._id === company._id ? company : n;
        });
      }, (err) => {
        console.log(err); 
      });
  };

};
