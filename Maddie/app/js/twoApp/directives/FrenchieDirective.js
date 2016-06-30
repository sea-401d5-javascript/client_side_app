'use strict';
module.exports = function(app){
  app.directive('frenchieDirective', function() {
    return {
      templateUrl:'./templates/FrenchieTemplate.html',
      scope:{
        type:'@',
        frenchie: '=' //resource for config
        //attribute for animal---dogwalker vs frenchie
      },
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deleteFrenchies = controller.deleteFrenchies;
        $scope.submitFrenchie = $scope.type === 'new frenchie' ? controller.addFrenchies : controller.updateFrenchies;
      }
    };
  });
};
