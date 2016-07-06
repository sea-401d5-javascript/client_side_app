'use strict';

module.exports = function(app) {

app.controller('NflController', ['$http', NflController]);

function NflController($http) {
  this.$http = $http;
  this.players = [];
}

NflController.prototype.getPlayer = function() {
  this.$http.get('http://localhost:3000/nflPlayers')
    .then((res) => {
      this.players = res.data;
    }, (err) => {
      console.log(err)
  });
}

NflController.prototype.addPlayer = function() {
  this.$http.post('http://localhost:3000/nflPlayers', this.newPlayer)
    .then((res) => {
      this.players.push(res.data);
      this.newPlayer = null;
    }, (err) => {
      console.log(err);
    });
};

NflController.prototype.deletePlayer = function(player) {
  this.$http.delete('http://localhost:3000/nflPlayers' + this.players._id)
  .then(() => {
    this.players.splice(this.players.indexOf(player), 1);
  }, (err) => {
    console.log(err);
  });
};


NflController.prototype.updatePlayer = function(player, updatedPlayer) {
  let arrayPlayer = this.players[this.players.indexOf(player)];
  arrayPlayer.body = updatedPlayer;
};
};
