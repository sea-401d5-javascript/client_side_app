module.exports = function(app) {
  app.directive('venueItemDirective', function() {
    return {
      templateUrl: './templates/venues/item.html',
      restrict: 'AE',
      scope: {
        venue: '='
      },
      link: function($scope, elem, attr, controller) {
        $scope.deleteVenue = controller.deleteVenue;
        $scope.updateVenue = controller.updateVenue;
      },
      require: '^ngController'
    };
  });
};
