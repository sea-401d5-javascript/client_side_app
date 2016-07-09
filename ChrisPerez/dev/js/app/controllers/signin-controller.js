module.exports = function(app){
  app.controller('SigninController', function($location, authService){
    this.goHome = function(){
      $location.url('/');
    };

    this.join = function(){
      $location.url('/signup');
    };

    this.logOut = authService.logOut;

    this.getToken = authService.getToken;

    this.signUp = function(user){
      authService.signUp(user)
        .then((res)=>{
          console.log(res, 'in signinctrl');
          this.goHome();
        })
        .then((err)=>{
          console.log(err);
        });
    };

    this.signIn = function(user){
      authService.signIn(user)
        .then((res)=>{
          console.log(res, 'signin res');
          this.goHome();
        })
        .then((err)=>{
          console.log(err);
        });
    };
  });
};
