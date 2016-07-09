module.exports = function(app){
  app.controller('WeaselsController', ['$http', '$location', 'ErrorHandling', 'authService', WeaselsController]);
};

function WeaselsController($http, $location, ErrorHandling, authService){
  this.$http = $http;
  this.critters = []; //{ "_id" : ObjectId("57683082cb689269b859775e"), "name" : "Business Drew", "strength" : 3, "snakeKiller" : true, "__v" : 0 }
  this.login = function(){
    $location.url('/signin');
  };
  this.join = function(){
    $location.url('/signup');
  };
  const url = 'http://localhost:2222/weasels/';
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
