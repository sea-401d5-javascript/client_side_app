module.exports = function(app){
  app.controller('SnakesController', ['$http', SnakesController]);
};

function SnakesController($http){
  this.$http = $http;
  this.critters = []; // { "_id" : ObjectId("5768307acb689269b859775d"), "name" : "Dusty on Rails", "size" : 3, "weaselKiller" : true, "__v" : 0 }
  this.url = 'http://localhost:2222/snakes/';
  this.getCritters = function(){
    $http.get(this.url)
    .then((res)=>{
      this.critters = res.data;
    }, (err)=>{
      console.log(err);
    });
  };

  this.addCritter = function(critter){
    $http.post(this.url, critter)
    .then((res)=>{
      this.critters.push(res.data);
    }, (err)=>{
      console.log(err);
    });
  }.bind(this);

  this.deleteCritter = function(critter){
    $http.delete(this.url + critter._id)
    .then(()=>{
      this.critters.splice(this.critters.indexOf(critter), 1);
    }, (err)=>{
      console.log(err);
    });
  }.bind(this);

  this.updateCritter = function(critter){

    $http.put(this.url, critter)
    .then(()=>{
      this.critters = this.critters.map((c)=>{
        return c._id === critter._id ? critter : c;
      });
    }, (err)=>{
      console.log(err);
    });
  }.bind(this);
}
