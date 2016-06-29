module.exports = function(app){
  app.controller('DogwalkerController', DogwalkerController);
};

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

DogwalkerController.prototype.updateDW = function(dogwalker, updatedDogwalker) {
  dogwalker.name = updatedDogwalker.name;
  dogwalker.dogs_died = updatedDogwalker.dogs_died;
  this.$http.put('http://localhost:3000/dogwalkers', dogwalker)
  .then(() => {
    this.dogwalkers = this.dogwalkers.map(ndw => {
      return ndw._id === dogwalker._id ? dogwalker : ndw;
    });
  }, (err) => {
    console.log(err);
  });
};
