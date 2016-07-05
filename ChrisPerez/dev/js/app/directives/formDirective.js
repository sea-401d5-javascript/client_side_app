module.exports = function(app){
  app.directive('changeDirective', function(){
    return {
      scope:{
        type: '@',
        critter: '=',
        team: '='
      },
      templateUrl: './templates/formDirective.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller){
        console.log(controller);
        $scope.submit = $scope.type === 'new' ? controller.addCritter : controller.updateCritter;
        $scope.deleteCritter = controller.deleteCritter;
      }
    };
  });
};
