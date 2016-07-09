module.exports = function(app) {
  app.factory('TreatService', function() {
    const service={};
    service.getTreats = function(url, array) {
      this.$http.get(url)
        .then((res) => {
          array = res.data;
        }, (err) => {
          console.log(err);
        });
    };

    service.addTreat = function(url, treat, array) {
      this.$http.post(url, treat)
        .then((res)=> {
          array.push(res.data);
          treat = null;
        }, (err) => {
          $location.url('/signin');
          console.log(err);
        });
    };

    return service;
  });
};
