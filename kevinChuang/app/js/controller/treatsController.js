module.exports = function(app) {
  app.controller('TreatsController', TreatsController);
};


function TreatsController($http, ErrorService, TreatService) {
  this.$http = $http;
  this.cookieUrl = 'http://localhost:3000/cookies';
  this.candyUrl = 'http://localhost:3000/candy';
  this.cookieArray = [];
  this.candyArray = [];
  this.getTreats = TreatService.getTreats;
  this.addTreat = TreatService.addTreat;
}
// GET routes------------------------------------

TreatsController.prototype.getCookies = function() {
  this.$http.get(this.cookieUrl)
    .then((res) => {
      this.cookieArray = res.data;
    }, (err) => {
      console.log(err);
    });
  // this.getTreats(this.cookieUrl, this.cookieArray);
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
  this.addTreat(this.cookieUrl, this.cookie,this.cookieArray);
};

TreatsController.prototype.addCandy = function() {
  this.addTreat(this.candyUrl, this.candy, this.candyArray)
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
