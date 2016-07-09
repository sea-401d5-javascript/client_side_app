module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('icecreamOrderHistory', function () {
    return {
      scope: {
        icecreams: '='
      },
      restrict: 'E',
      templateUrl: './templates/icecream/icecream-orderhistory-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.getIceCream = controller.getIceCream;
      }
    };
  });
};
