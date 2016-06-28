module.exports = function (app) {
  app.controller('SharkController', ['$http', SharkController]);

  function SharkController($http) {
    this.$http = $http;
    this.sharks = [];
  }

  SharkController.prototype.getSharks = function () {
    this.$http.get('http://localhost:3000/sharks')
      .then((res) => {
        this.sharks = res.data;
      }, (err) => {
        console.log(err);
      });
  };

  SharkController.prototype.addShark = function () {
    this.$http.post('http://localhost:3000/sharks', this.newShark)
      .then((res) => {
        this.sharks.push(res.data);
        this.newshark = null;
      }, (err) => {
        console.log(err);
      });
  };

  SharkController.prototype.deleteShark = function (shark) {
    this.$http.delete('http://localhost:3000/sharks/' + shark._id)
      .then(() => {
        let index = this.sharks.indexOf(shark);
        this.sharks.splice(index, 1);
      }, (err) => {
        console.log(err);
      });
  };

  SharkController.prototype.updateShark = function (shark, updateShark) {
    shark.name = updateShark.name;
    this.$http.put('http://localhost:3000/sharks', shark)
      .then(() => {
        this.sharks = this.sharks.map(n => {
          return n._id === shark._id ? shark : n;
        });
      }, (err) => { 
        console.log(err);
      });
  };

};
