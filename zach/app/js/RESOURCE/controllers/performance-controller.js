'use strict';

module.exports = function(app) {
  app.controller('PerformanceController', ['$http', 'ErrorService', PerformanceController]);
};

function PerformanceController($http, ErrorService) {
  this.$http = $http;
  this.newPerformance = {name: 'testPerformance'};
  this.performances = [{name: 'testPerformance', venue: 'Annex', venueObject: {neighborhood: 'Capitol Hill', servesAlcohol: true}}];
  this.errors = ErrorService.getErrors();
  this.addPerformance = function() {
    this.$http.post('http://localhost:3000/performances', this.newPerformance)
      .then((res) => {
        this.newPerformance.venueObject = [];
        this.newPerformance.venueObject.push(res.data.venueObject[0]);
        this.performances.push(this.newPerformance);
        this.newPerformance = null;
      }, ErrorService.logError('error adding performance to database'));
  }.bind(this);
  this.deletePerformance = function(performance) {
    this.$http.delete('http://localhost:3000/performances/' + performance.name)
      .then(() => {
        let index = this.performances.indexOf(performance);
        this.performances.splice(index, 1);
      }, ErrorService.logError('error deleting performance from database'));
  }.bind(this);
  this.updatePerformance = function(performance, updatedPerformance) {
    performance.name = updatedPerformance.name;
    performance.venue = updatedPerformance.venue;
    performance.startDate = updatedPerformance.startDate;
    performance.endDate = updatedPerformance.endDate;
    this.$http.put('http://localhost:3000/performances/', performance)
      .then(() => {
        this.performances = this.performances.map(p => {
          return p._id === performance._id ? performance : p;
        });
      }, ErrorService.logError('error updating performance in database'));
  }.bind(this);
}

PerformanceController.prototype.getPerformances = function() {
  this.$http.get('http://localhost:3000/performances')
    .then((res) => {
      this.performances = res.data;
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
