module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('milkshakeUpdateOrder', function() {
    return {
      scope: {
        milkshake: '='
      },
      restrict: 'E',
      templateUrl: './templates/milkshake/milkshake-updateorder-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.updateMilkShake = controller.updateMilkShake;
        $scope.deleteMilkShake = controller.deleteMilkShake;
      }
    };
  });
};
