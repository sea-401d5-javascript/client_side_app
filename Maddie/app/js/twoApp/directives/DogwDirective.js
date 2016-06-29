module.exports = function(app) {
  app.directive('dogwDirective', function() {
    return {
      templateUrl: './templates/DogwTemplate.html',
      scope: {
        type:'@',
        dogwalker:'='
      },
      require:'^^ngController',
      link:function($scope, elem, attr, controller) {
        $scope.deleteDW = controller.deleteDW;
        $scope.submitDW = $scope.type === 'newDW' ? controller.addDW : controller.updateDW;
      }
    };
  });
};
