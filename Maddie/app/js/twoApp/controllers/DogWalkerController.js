module.exports = function(app){
  app.controller('DogwalkerController', DogwalkerController);
};

function DogwalkerController($http) {
  this.$http = $http;
  this.dogwalkers = [];

  this.getDW = function() {
    this.$http.get('http://localhost:3000/dogwalkers')
    .then((res) => {
      this.dogwalkers = res.data.dogwalkers;
    }, (err) => {
      console.log(err);
    });
  };

  this.addDW = function(dogwalker) {
    this.$http.post('http://localhost:3000/dogwalkers', dogwalker)
    .then((res) => {
      this.dogwalkers.push(res.data);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.deleteDW = function(dogwalker) {
    this.$http.delete('http://localhost:3000/dogwalkers/' + dogwalker._id)
    .then(() => {
      let index = this.dogwalkers.indexOf(dogwalker);
      this.dogwalkers.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.updateDW = function(dogwalker) {
    this.$http.put('http://localhost:3000/dogwalkers', dogwalker)
    .then(() => {
      this.dogwalkers = this.dogwalkers.map(ndw => {
        return ndw._id === dogwalker._id ? dogwalker : ndw;
      });
    }, (err) => {
      console.log(err);
    });
  }.bind(this);
}
