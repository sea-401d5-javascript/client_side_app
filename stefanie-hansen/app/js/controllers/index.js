'use strict';

module.exports = function(app) {
  app.controller('ResourceController', ['$http', 'ParseService', ResourceController]);
};

function ResourceController($http, ParseService) {
  this.$http = $http;
  this.mode = 'list';
  this.editing = false;
  this.currentresource;
  this.updated = {};

  this.toggleItem = function(resource) {
    if (resource) this.currentresource = resource;
    this.mode === 'list' ? this.mode = 'item' : this.mode = 'list';
  }.bind(this);

  this.init = function() {
    ParseService.update(() => {
      this.supplements = ParseService.supplements;
      this.plants = ParseService.plants;
      console.log('this.supplements', this.supplements);
      console.log('this.plants', this.plants);
    });
  };

  this.addPlant = function() {
    $http.post('http://localhost:3000/plants', this.updated)
    .then(ParseService.constructResource), (err) => {
      console.log(err);
    };
  };

  this.deletePlant = function(plant) {
    $http.delete(`http://localhost:3000/plants/${plant._id}`)
    .then(() => {
      ParseService.plants.splice(ParseService.plants.indexOf(plant), 1);
      ParseService.update();
    }, (err) => {
      console.log(err);
    });
  };

  this.updatePlant = function(updated) {
    if (updated.commonName) this.currentresource.commonName = updated.commonName;
    if (updated.scientificName) this.currentresource.scientificName = updated.scientificName;
    if (updated.medicinalUses) this.currentresource.medicinalUses = updated.medicinalUses.split(',') || updated.medicinalUses;
    if (updated.nutritionalValue) this.currentresource.nutritionalValue = updated.nutritionalValue.split(',') || updated.nutritionalValue;
    if (updated.zone) this.currentresource.zone = parseInt(updated.zone);
    $http.put('http://localhost:3000/plants', this.currentresource)
      .then(() => {
        ParseService.plants = ParseService.plants.map(p => {
          return p._id === this.currentresource._id ? this.currentresource : p;
        });
        ParseService.update();
      }, (err) => {
        console.log(err);
      });
    this.updated = {};
  }.bind(this);

  this.addSupplement = function() {
    $http.post('http://localhost:3000/supplements', this.updated)
    .then((res) => {
      let newResource = ParseService.constructResource(res.data);
      ParseService.supplements.push(newResource);
      ParseService.update();
      this.updated = {};
    }, (err) => {
      console.log(err);
    });
  };

  this.deleteSupplement = function(supplement) {
    $http.delete(`http://localhost:3000/supplements/${supplement._id}`)
    .then(() => {
      ParseService.supplements.splice(ParseService.supplements.indexOf(supplement), 1);
      ParseService.update();
    }, (err) => {
      console.log(err);
    });
  };

  this.updateSupplement = function(updated) {
    if (updated.name) this.currentresource.name = updated.name;
    if (updated.medicinalEffects) this.currentresource.medicinalEffects = updated.medicinalEffects.split(',') || updated.medicinalEffects;
    if (updated.sideEffects) this.currentresource.sideEffects = updated.sideEffects.split(',') || updated.sideEffects;
    $http.put('http://localhost:3000/supplements', this.currentresource)
      .then(() => {
        ParseService.supplements = ParseService.supplements.map(s => {
          return s._id === this.currentresource._id ? this.currentresource : s;
        });
        ParseService.update();
        this.updated = {};
      }, (err) => {
        console.log(err);
      });
  }.bind(this);
}
