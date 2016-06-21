module.exports = function(app) {
  app.controller('TreatsController', TreatsController);
};


function TreatsController($http) {
  this.$http = $http;
  this.cookieUrl = 'http://localhost:3000/cookies';
  this.candyUrl = 'http://localhost:3000/candy';
  this.treats = [];
}
// GET routes------------------------------------

TreatsController.prototype.getCookies = function() {
  this.$http.get('http://localhost:3000/cookies')
    .then((res) => {
      this.treats = res.data;
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.getCandy = function() {
  this.$http.get(this.candyUrl)
    .then((res) => {
      this.treats = res.data;
    }, (err) => {
      console.log(err);
    });
};

// POST routes-----------------------------------
TreatsController.prototype.addCookie = function() {
  this.$http.post(this.cookieUrl, this.newCookie)
    .then((res)=> {
      this.treats.push(res.data);
      this.newCookie = null;
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.addCandy = function() {
  this.$http.post(this.candyUrl, this.newCandy)
    .then((res)=> {
      this.treats.push(res.data);
      this.newCandy = null;
    }, (err) => {
      console.log(err);
    });
};

// PUT routes------------------------------------
TreatsController.prototype.updateCookie = function(cookie, updateCookie) {
  if (updateCookie.name) cookie.name = updateCookie.name;
  if (updateCookie.edible) cookie.edible = updateCookie.edible;
  if (updateCookie.stock) cookie.stock = updateCookie.stock;
  this.$http.put(this.cookieUrl, cookie)
    .then(()=> {
      this.treats = this.treats.map(co => {
        return co._id === cookie._id ? cookie : co;
      });
    }, (err) => {
      console.log(err);
    });
};

TreatsController.prototype.updateCandy = function(candy, updateCandy) {
  if (updateCandy.name) candy.name = updateCandy.name;
  if (updateCandy.edible) candy.edible = updateCandy.edible;
  if (updateCandy.stock) candy.stock = updateCandy.stock;
  this.$http.put(this.candyUrl, candy)
    .then(()=> {
      this.treats = this.treats.map(ca => {
        return ca._id === candy._id ? candy : ca;
      });
    }, (err) => {
      console.log(err);
    });
};
// DELETE routes---------------------------------

TreatsController.prototype.deleteCookie = function(cookie) {
  this.$http.delete(this.cookieUrl +'/'+ cookie._id)
    .then(()=> {
      this.treats = this.treats.filter((c)=> cookie._id !== c._id);
    },(err)=> {
      console.log(err);
    });
};

TreatsController.prototype.deleteCandy = function(candy) {
  this.$http.delete(this.candyUrl +'/'+ candy._id)
    .then(()=> {
      this.treats = this.treats.filter((c)=> candy._id !== c._id);
    },(err)=> {
      console.log(err);
    });
};
