module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('milkshakeList', function() {
    return {
      scope: {
        milkshakes: '='
      },
      restrict: 'E',
      templateUrl: './templates/milkshake/milkshake-list-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.getMilkShake = controller.getMilkShake;
      }
    };
  });
};
