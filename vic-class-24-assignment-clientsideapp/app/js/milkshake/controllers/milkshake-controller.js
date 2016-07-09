module.exports = function(app) {
  app.controller('MilkShakeController', MilkShakeController);
};

function MilkShakeController($http) {
  this.milkshake = [];

  this.getMilkShake = function() {
    $http.get('http://localhost:3000/milkshake')
    .then((res) => {
      this.milkshake = res.data;
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.addMilkShake = function(newMilkShake) {
    $http.post('http://localhost:3000/milkshake', newMilkShake)
    .then((res) => {
      this.milkshake.push(res.data);
      this.newMilkShake = null;
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.updateMilkShake = function(milkshake, updatedMilkShake) {
    milkshake.flavor = updatedMilkShake.flavor;
    milkshake.scoops = updatedMilkShake.scoops;
    milkshake.milkRichness = updatedMilkShake.milkRichness;
    $http.put('http://localhost:3000/milkshake/' + milkshake._id, milkshake)
    .then(() => {
      this.milkshake = this.milkshake.map(n => {
        return n._id === milkshake._id ? milkshake : n;
      });
    }, (err) => {
      console.log(err);
    });
  }.bind(this);

  this.deleteMilkShake = function(milkshake) {
    $http.delete('http://localhost:3000/milkshake/' + milkshake._id)
    .then(() => {
      let index = this.milkshake.indexOf(milkshake);
      this.milkshake.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  }.bind(this);
}
