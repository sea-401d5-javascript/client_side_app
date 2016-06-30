module.exports = function(app) {
  app.directive('listDirective', function() {
    return {
      templateUrl:'./templates/listTemplate.html',
      scope: {
        type:'@',
        animal:'='
      },
      require:'^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.name = $scope.type === 'frenchies' ? $scope.animal.name : $scope.animal.name;
        $scope.death = $scope.type === 'frenchies' ? $scope.animal.dogWalkers_bitten : $scope.animal.dog_died;
      }
    };
  });
};
