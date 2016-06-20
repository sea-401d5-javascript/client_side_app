'use strict';

const angular = require('angular');
const app = angular.module('twoCRUDApp', []);

app.controller('FrenchieController', FrenchieController);

function FrenchieController($http) {
  this.$http = $http;
  this.frenchies = [];
}

FrenchieController.prototype.getFrenchies = function() {
  this.$http.get('http://localhost:3000/frenchie')
    .then((res) => {
      this.frenchies = res.data.frenchie;
    }, (err) => {
      console.log(err);
    });
};

FrenchieController.prototype.addFrenchies = function() {
  this.$http.post('http://localhost:3000/frenchie', this.newFrenchie)
    .then((res) => {
      this.frenchies.push(res.data);
      this.newFrenchie = null;
    }, (err) => {
      console.log(err);
    });
};

FrenchieController.prototype.deleteFrenchies = function(frenchie) {
  this.$http.delete('http://localhost:3000/frenchie/' + frenchie._id)
  .then(() => {
    console.log('delete prototype');
    let index = this.frenchies.indexOf(frenchie);
    this.frenchies.splice(index, 1);
  }, (err) => {
    console.log(err);
  });
};

FrenchieController.prototype.updateFrenchie = function(frenchie, updatedFrenchie) {
  //frenchie.data = updatedFrenchie.data;
  this.$http.put('http://localhost:3000/frenchie')
  .then(() => {
    let arrayF = this.frenchies[this.frenchies.indexOf(frenchie)];
    arrayF.body = updatedFrenchie;
    console.log(updatedFrenchie);
  }, (err) => {
    console.log(err);
  });
};

app.controller('DogwalkerController', DogwalkerController);

function DogwalkerController($http) {
  this.$http = $http;
  this.dogwalkers = [];
}

DogwalkerController.prototype.getDW = function() {
  console.log('get dw prototype');
  this.$http.get('http://localhost:3000/dogwalkers')
  .then((res) => {
    this.dogwalkers = res.data.dogwalkers;
  }, (err) => {
    console.log(err);
  });
};

DogwalkerController.prototype.addDW = function() {
  console.log('add prototpye');
  this.$http.post('http://localhost:3000/dogwalkers', this.newDW)
  .then((res) => {
    this.dogwalkers.push(res.data);
    this.newDW = null;
  }, (err) => {
    console.log(err);
  });
};

DogwalkerController.prototype.deleteDW = function(dogwalker) {
  this.$http.delete('http://localhost:3000/dogwalkers/' + dogwalker._id)
  .then(() => {
    let index = this.dogwalkers.indexOf(dogwalker);
    this.dogwalkers.splice(index, 1);
  }, (err) => {
    console.log(err);
  });
};

app.controller('mixedController', mixedController);

function mixedController($http) {
  this.$http = $http;
  this.mixed = [];
}

mixedController.prototype.death = function() {
  console.log('death is coming');
  this.$http.get('http://localhost:3000/unfortunate')
  .then((res) => {
    this.mixed = res.data.message;
  }, (err) => {
    console.log(err);
  });
};
