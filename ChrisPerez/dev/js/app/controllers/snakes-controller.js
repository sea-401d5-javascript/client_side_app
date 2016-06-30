module.exports = function(app){
  app.controller('SnakesController', ['$http', SnakesController]);
};

function SnakesController($http){
  this.$http = $http;
  this.snakes = []; // { "_id" : ObjectId("5768307acb689269b859775d"), "name" : "Dusty on Rails", "size" : 3, "weaselKiller" : true, "__v" : 0 }
  this.url = 'http://localhost:2222/snakes/';
}

SnakesController.prototype.getSnakes = function(){
  this.$http.get(this.url)
    .then((res)=>{
      this.snakes = res.data;
    }, (err)=>{
      console.log(err);
    });
};

SnakesController.prototype.addSnake = function(){
  this.$http.post(this.url, this.snake)
    .then((res)=>{
      this.snakes.push(res.data);
      this.snake = null;
    }, (err)=>{
      console.log(err);
    });
};

SnakesController.prototype.deleteSnake = function(snake){
  this.$http.delete(this.url + snake._id)
    .then(()=>{
      this.snakes.splice(this.snakes.indexOf(snake), 1);
    }, (err)=>{
      console.log(err);
    });
};

SnakesController.prototype.updateSnake = function(snake, updated){

  snake.size = updated.size;

  this.$http.put(this.url, snake)
    .then(()=>{
      this.snakes = this.snakes.map((s)=>{
        return s._id === snake._id ? snake : s;
      });
    }, (err)=>{
      console.log(err);
    });

}; //gonna want to add .bind(this) to all the prototype functions
