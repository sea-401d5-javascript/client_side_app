module.exports = function(app) {
  app.controller('TreatsController', TreatsController);
};


function TreatsController($http) {
  const cookieUrl = 'http://localhost:3000/cookies';
  const candyUrl = 'http://localhost:3000/candy';
  this.treats = [];

  // GET routes------------------------------------

  TreatsController.prototype.getCookies = function() {
    $http.get(cookieUrl)
      .then((res) => {
        this.treats = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  TreatsController.prototype.getCandy = function() {
    $http.get(candyUrl)
      .then((res) => {
        this.treats = res.data.data;
      }, (err) => {
        console.log(err);
      });
  };

  // POST routes-----------------------------------
  TreatsController.prototype.addCookie = function() {
    $http.post(cookieUrl, this.treats)
      .then((res)=> {
        this.treats.push(res.data.data);
      }, (err) => {
        console.log(err);
      });
  };

  TreatsController.prototype.addCandy = function() {
    $http.post(candyUrl, this.treats)
      .then((res)=> {
        this.treats.push(res.data.data);
      }, (err) => {
        console.log(err);
      });
  };

  // PUT routes------------------------------------
  TreatsController.prototype.updateCookie = function(cookie, updateCookie) {
    cookie.name = updateCookie.name;
    cookie.edible = updateCookie.edible;
    cookie.stock = updateCookie.stock;
    $http.put(cookieUrl, cookie)
      .then(()=> {
        this.treats = this.treats.map(c => {
          return c._id === cookie._id ? cookie : c;
        });
      }, (err) => {
        console.log(err);
      });
  };

  this.updateCandy = function(candy, updateCandy) {
    candy.name = updateCandy.name;
    candy.edible = updateCandy.edible;
    candy.stock = updateCandy.stock;
    $http.put(candyUrl, candy)
      .then(()=> {
        this.treats = this.treats.map(c => {
          return c._id === candy._id ? candy : c;
        });
      }, (err) => {
        console.log(err);
      });
  };
  // DELETE routes---------------------------------

  this.deleteCookie = function(cookie) {
    $http.delete(cookieUrl + cookie._id)
      .then(()=> {
        this.treats = this.treats.filter((c)=> cookie._id !== c._id);
      },(err)=> {
        console.log(err);
      });
  };

  this.deleteCandy = function(candy) {
    $http.delete(candyUrl + candy._id)
      .then(()=> {
        this.treats = this.treats.filter((c)=> candy._id !== c._id);
      },(err)=> {
        console.log(err);
      });
  };
}
