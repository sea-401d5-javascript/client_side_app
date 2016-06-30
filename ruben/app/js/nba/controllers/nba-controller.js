'use strict';

module.exports = function(app) {

app.controller('NbaController', ['$http', NbaController]);

function NbaController($http) {
  this.$http = $http;
  this.players = [];
}

NbaController.prototype.getPlayer = function() {
  this.$http.get('http://localhost:3000/nbaPlayers')
    .then((res) => {
      this.players = res.data;
    }, (err) => {
      console.log(err)
  });
}

NbaController.prototype.addPlayer = function() {
  this.$http.post('http://localhost:3000/nbaPlayers', this.newPlayer)
    .then((res) => {
      this.players.push(res.data);
      this.newPlayer = null;
    }, (err) => {
      console.log(err);
    });
};

NbaController.prototype.deletePlayer = function(player) {
  this.$http.delete('http://localhost:3000/nbaPlayers' + this.players._id)
    .then(() => {
      this.players.splice(this.players.indexOf(player), 1);
    }, (err) => {
      console.log(err);
    });
};

NbaController.prototype.updatePlayer = function(player, updatedPlayer) {
  let arrayPlayer = this.players[this.players.indexOf(player)];
  arrayPlayer.body = updatedPlayer;
};
};
