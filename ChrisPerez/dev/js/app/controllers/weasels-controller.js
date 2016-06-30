module.exports = function(app){
  app.controller('WeaselsController', ['$http', WeaselsController]);

};

function WeaselsController($http){
  this.$http = $http;
  this.weasels = []; //{ "_id" : ObjectId("57683082cb689269b859775e"), "name" : "Business Drew", "strength" : 3, "snakeKiller" : true, "__v" : 0 }
  this.url = 'http://localhost:2222/weasels/';
}

WeaselsController.prototype.getWeasels = function(){
  this.$http.get(this.url)
    .then((res)=>{
      this.weasels = res.data;
    }, (err)=>{
      console.log(err);
    });
};

WeaselsController.prototype.addWeasel = function(){
  this.$http.post(this.url, this.weasel)
    .then((res)=>{
      this.weasels.push(res.data);
      this.weasel = null;
    }, (err)=>{
      console.log(err);
    });
};

WeaselsController.prototype.deleteWeasel = function(weasel){
  this.$http.delete(this.url + weasel._id)
    .then(()=>{
      this.weasels.splice(this.weasels.indexOf(weasel), 1);
    }, (err)=>{
      console.log(err);
    });
};

WeaselsController.prototype.updateWeasel = function(weasel, updated){

  weasel.strength = updated.strength;

  this.$http.put(this.url, weasel)
    .then(()=>{
      this.weasels = this.weasels.map((w)=>{
        return w._id === weasel._id ? weasel : w;
      });
    }, (err)=>{
      console.log(err);
    });

};  //gonna want to move the prototype into the controller function itself
