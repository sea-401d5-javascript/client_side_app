module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('milkshakeAddOrder', function () {
    return {
      scope: {
      },
      restrict: 'E',
      templateUrl: './templates/milkshake/milkshake-addorder-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.addMilkShake = controller.addMilkShake;
      }
    };
  });
};
