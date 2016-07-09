module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('milkshakeOrderHistory', function() {
    return {
      scope: {
        milkshakes: '='
      },
      restrict: 'E',
      templateUrl: './templates/milkshake/milkshake-orderhistory-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.getMilkShake = controller.getMilkShake;
      }
    };
  });
};
