module.exports = function(app){
  app.directive('listDirective', function(){
    return{
      templateUrl:'./templates/listTemplate.html',
      scope: {
        animals:'=',
        type:'@'
      }
    };
  });
};
