module.exports = function(app){
  app.controller('SnakesController', ['$http', '$location', 'ErrorHandling', 'authService', SnakesController]);
};

function SnakesController($http, $location, ErrorHandling, authService){
  this.$http = $http;
  this.critters = []; // { "_id" : ObjectId("5768307acb689269b859775d"), "name" : "Dusty on Rails", "size" : 3, "weaselKiller" : true, "__v" : 0 }
  this.login = function(){
    $location.url('/signin');
  };
  this.join = function(){
    $location.url('/signup');
  };
  this.goSnakes = function(){
    $location.url('/snakes');
  };
  this.goHome = function(){
    $location.url('/');
  };

  this.getToken = authService.getToken;

  const url = 'http://localhost:2222/snakes/';
  this.getCritters = function(){
    $http.get(url)
    .then((res)=>{
      this.critters = res.data;
    }, ErrorHandling.logError('Error getting data'));
  };

  this.addCritter = function(critter){
    $http({
      method: 'POST',
      data: critter,
      headers: {
        token: authService.getToken()
      },
      url: url
    })
    .then((res)=>{
      this.critters.push(res.data);
    }, ErrorHandling.logError('Error adding data'));
  }.bind(this);

  this.deleteCritter = function(critter){
    $http({
      method: 'DELETE',
      data: critter,
      headers: {
        token: authService.getToken()
      },
      url: url + critter._id
    })
    .then(()=>{
      this.critters.splice(this.critters.indexOf(critter), 1);
    }, ErrorHandling.logError('Error removing data'));
  }.bind(this);

  this.updateCritter = function(critter){

    $http({
      method: 'PUT',
      data: critter,
      headers: {
        token: authService.getToken()
      },
      url: url
    })
    .then(()=>{
      this.critters = this.critters.map((c)=>{
        return c._id === critter._id ? critter : c;
      });
    }, ErrorHandling.logError('Error editing data'));
  }.bind(this);
}
