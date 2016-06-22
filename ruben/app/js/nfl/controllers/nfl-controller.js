'use strict';
const angular = require('angular');

const app = angular.module('NotesApp', []);

app.controller('NflController', ['$http', NflController]);

function NflController($http) {
  this.$http = $http;
  this.players = [{body: 'test player'}];
}

NflController.prototype.getPlayer = function() {
  this.$http.get('http:localhost/3000/')
    .then((res) => {
      this.players = res.data.data;
    }, (err) => {
      console.log(err)
  });
}

NflController.prototype.addPlayer = function() {
  this.$http.post('http://localhost:3000/', this.newPlayer)
    .then((res) => {
      this.players.push(res.data);
      this.newPlayer = null;
    }, (err) => {
      console.log(err);
    });
};

NflController.prototype.deletePlayer = function(note) {
  this.$http.delete('http://localhost:3000/' + player._id)
    .then(() => {
      let index = this.players.indexOf(note);
      this.notes.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
};

NflController.prototype.updatePlayer = function(player, updatedPlayer) {
  let arrayPlayer = this.players[this.players.indexOf(player)];
  arrayPlayer.body = updatedPlayer;
};
