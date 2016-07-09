module.exports = function(IceCreameryApp) {
  IceCreameryApp.directive('icecreamList', function () {
    return {
      scope: {
        icecreams: '='
      },
      restrict: 'E',
      templateUrl: './templates/icecream/icecream-list-directive.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.getIceCream = controller.getIceCream;
      }
    };
  });
};
