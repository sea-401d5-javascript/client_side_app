module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('icecreamUpdateOrder', function () {
    return {
      scope: {
        icecream: '='
      },
      restrict: 'E',
      templateUrl: './templates/icecream/icecream-updateorder-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.updateIceCream = controller.updateIceCream;
        $scope.deleteIceCream = controller.deleteIceCream;
      }
    };
  });
};
