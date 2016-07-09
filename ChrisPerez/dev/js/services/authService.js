module.exports = function(app){
  app.factory('authService', function($http, $window){
    let token = $window.localStorage.token;
    const service = {};

    service.signUp = function(user){
      return $http.post('http://localhost:2222/signup', user)
        .then((res)=>{
          token = res.data.token;
          $window.localStorage.token = token;
          return res;
        });
    };

    service.signIn = function(user){
      let base64Auth = btoa(user.username + ':' + user.password);
      let authStr = 'Basic ' + base64Auth;

      return $http({
        method: 'GET',
        url: 'http://localhost:2222/login',
        headers: {
          authorization: authStr
        }
      }).then((res)=>{
        token = res.data.token;
        $window.localStorage.token = token;
        return res;
      });
    };

    service.logOut = function(){
      token = $window.localStorage.token = null;
    };

    service.getToken = function(){
      return token;
    };

    return service;
  });
};
