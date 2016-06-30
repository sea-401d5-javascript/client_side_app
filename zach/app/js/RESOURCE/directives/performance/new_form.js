module.exports = function(app) {
  app.directive('newformDirective', function() {
    return {
      templateUrl: './templates/performances/new_form.html',
      scope: {
        newPerformance: '='
      },
      link: function($scope, elem, attr, controller) {
        $scope.addPerformance = controller.addPerformance;
      },
      require: '^ngController'
    };
  });
};
