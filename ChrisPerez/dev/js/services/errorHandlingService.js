module.exports = function(app){
  app.factory('ErrorHandling', function($location){
    const service = {};
    const errors = [];
    service.logError = function(message){
      return function(err){
        errors.push(message);
        console.log(err);
        $location.url('/signin');
      };
    };
    service.getErrors = function(){
      return errors;
    };
    return service;
  });
};
