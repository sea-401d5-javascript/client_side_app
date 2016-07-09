module.exports = function(app){
  app.controller('SigninController', function($location, authService){
    this.goHome = function(){
      $location.url('/');
    };

    this.join = function(){
      $location.url('/signup');
    };

    this.signUp = function(user){
      authService.signUp(user)
        .then((res)=>{
          console.log(res, 'in signinctrl');
        })
        .then((err)=>{
          console.log(err);
        });
    };

    this.signIn = function(user){
      authService.signIn(user)
        .then((res)=>{
          console.log(res, 'signin res');
        });
    };
  });
};
