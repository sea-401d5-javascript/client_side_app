module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('icecreamAddOrder', function () {
    return {
      scope: {
      },
      restrict: 'E',
      templateUrl: './templates/icecream/icecream-addorder-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.addIceCream = controller.addIceCream;
      }
    };
  });
};
