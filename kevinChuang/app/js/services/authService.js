module.exports = function(app) {

  app.factory('AuthService', function($http) {
    var token;
    const service = {};

    service.signUp = function(user) {
      return $http.post('http://localhost:3000/signup', user)
      .then((res)=> {
        token = res.data.token;
        return res;
      });
    };

    service.signIn = function(user) {
      var base64Auth = btoa(user.username + ':' + user.password);
      var authString = 'Basic ' + base64Auth;

      return $http({
        url: 'http://localhost:3000/signin',
        method: 'POST',
        headers: {
          authorization: authString
        }
      }).then((res) => {
        token = res.data.token;
        return res;
      });
    };

    service.getToken = function() {
      return token;
    };
    return service;
  });
};
