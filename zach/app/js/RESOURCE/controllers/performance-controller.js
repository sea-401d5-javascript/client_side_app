'use strict';

module.exports = function(app) {
  app.controller('PerformanceController', ['$http', PerformanceController]);
};

function PerformanceController($http) {
  this.$http = $http;
  this.performances = [{name: 'testPerformance', venue: 'Annex', venueObject: {neighborhood: 'Capitol Hill', servesAlcohol: true}}];
}

PerformanceController.prototype.getPerformances = function() {
  this.$http.get('http://localhost:3000/performances')
    .then((res) => {
      this.performances = res.data;
    }, (err) => {
      console.log(err);
    });
};

PerformanceController.prototype.addPerformance = function() {
  this.$http.post('http://localhost:3000/performances', this.newPerformance)
    .then(() => {
      this.performances.push(this.newPerformance);
      this.newPerformance = null;
    }, (err) => {
      console.log(err);
    });
};

PerformanceController.prototype.deletePerformance = function(performance) {
  this.$http.delete('http://localhost:3000/performances/' + performance.name)
    .then(() => {
      let index = this.performances.indexOf(performance);
      this.performances.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

PerformanceController.prototype.updatePerformance = function(performance, updatedPerformance) {
  performance.name = updatedPerformance.name;
  performance.venue = updatedPerformance.venue;
  performance.startDate = updatedPerformance.startDate;
  performance.endDate = updatedPerformance.endDate;
  this.$http.put('http://localhost:3000/performances/', performance)
    .then(() => {
      this.performances = this.performances.map(p => {
        return p._id === performance._id ? performance : p;
      });
    }, (err) => {
      console.log(err);
    });
};
