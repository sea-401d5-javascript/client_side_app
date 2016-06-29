module.exports = function(app){
  app.directive('frenchieDirective', function() {
    return {
      templateUrl:'./templates/FrenchieTemplate.html',
      scope:{
        type:'@',
        frenchie: '=' //resource
      },
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deleteFrenchies = controller.deleteFrenchies;
        $scope.submitFrenchie = $scope.type === 'new frenchie' ? controller.addFrenchies : controller.updateFrenchies;
      }
    };
  });
};
