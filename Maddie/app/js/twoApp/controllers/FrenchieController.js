module.exports = function(app) {
  app.controller('FrenchieController', FrenchieController);
};

function FrenchieController($http) {
  this.$http = $http;
  this.frenchies = [];

  this.getFrenchies = function() {
    this.$http.get('http://localhost:3000/frenchie')
    .then((res) => {
      this.frenchies = res.data.frenchie;
    }, (err) => {
      console.log(err);
    });
  };

  this.addFrenchies = function(frenchie) {
    this.$http.post('http://localhost:3000/frenchie', frenchie)
    .then((res) => {
      this.frenchies.push(res.data);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.deleteFrenchies = function(frenchie) {
    this.$http.delete('http://localhost:3000/frenchie/' + frenchie._id)
    .then(() => {
      console.log('delete prototype');
      let index = this.frenchies.indexOf(frenchie);
      this.frenchies.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.updateFrenchies = function(frenchie) {
    this.$http.put('http://localhost:3000/frenchie', frenchie)
    .then(() => {
      this.frenchies = this.frenchies.map(nf => {
        //console.log(nf._id === frenchie._id);
        return nf._id === frenchie._id ? frenchie : nf;
      });
      //console.log('after', this.frenchies);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);
}
