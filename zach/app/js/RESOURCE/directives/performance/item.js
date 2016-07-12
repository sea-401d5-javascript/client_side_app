module.exports = function(app) {
  app.directive('itemDirective', function() {
    return {
      templateUrl: './templates/performances/item.html',
      restrict: 'AE',
      scope: {
        performance: '='
      },
      link: function($scope, elem, attr, controller) {
        $scope.deletePerformance = controller.deletePerformance;
        $scope.updatePerformance = controller.updatePerformance;
      },
      require: '^ngController'
    };
  });
};
