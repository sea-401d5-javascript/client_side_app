module.exports = function(app) {
  app.controller('TreatsController', TreatsController);
};


function TreatsController($http, ErrorService) {
  this.$http = $http;
  this.cookieUrl = 'http://localhost:3000/cookies';
  this.candyUrl = 'http://localhost:3000/candy';
  this.cookieArray = [];
  this.candyArray = [];
}
// GET routes------------------------------------

TreatsController.prototype.getCookies = function() {
  this.$http.get('http://localhost:3000/cookies')
    .then((res) => {
      this.cookieArray = res.data;
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.getCandy = function() {
  this.$http.get(this.candyUrl)
    .then((res) => {
      this.candyArray = res.data;
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.getTreats = function() {
  this.getCookies();
  this.getCandy();
};

// POST routes-----------------------------------
TreatsController.prototype.addCookie = function() {
  this.$http.post(this.cookieUrl, this.cookie)
    .then((res)=> {
      this.cookieArray.push(res.data);
      this.cookie = null;
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.addCandy = function() {
  this.$http.post(this.candyUrl, this.candy)
    .then((res)=> {
      console.log(res.data);
      this.candyArray.push(res.data);
      this.candy = null;
    }, (err) => {
      console.log(err);
    });
}.bind(this);

// PUT routes------------------------------------
TreatsController.prototype.updateCookie = function(cookie) {
  this.$http.put(this.cookieUrl, cookie)
    .then(()=> {
      this.cookieArray = this.cookieArray.map(co => {
        return co._id === cookie._id ? cookie : co;
      });
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.updateCandy = function(candy) {
  this.$http.put(this.candyUrl, candy)
    .then(()=> {
      this.candyArray = this.candyArray.map(ca => {
        return ca._id === candy._id ? candy : ca;
      });
    }, (err) => {
      console.log(err);
    });
}.bind(this);
// DELETE routes---------------------------------

TreatsController.prototype.deleteCookie = function(cookie) {
  this.$http.delete(this.cookieUrl +'/'+ cookie._id)
    .then(()=> {
      this.cookieArray = this.cookieArray.filter((c)=> cookie._id !== c._id);
    },(err)=> {
      console.log(err);
    });
};

TreatsController.prototype.deleteCandy = function(candy) {
  this.$http.delete(this.candyUrl +'/'+ candy._id)
    .then(()=> {
      this.candyArray = this.candyArray.filter((c)=> candy._id !== c._id);
    },(err)=> {
      console.log(err);
    });
}.bind(this);
