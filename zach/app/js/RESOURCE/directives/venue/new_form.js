module.exports = function(app) {
  app.directive('venueNewformDirective', function() {
    return {
      templateUrl: './templates/venues/new_form.html',
      scope: {
        newVenue: '='
      },
      link: function($scope, elem, attr, controller) {
        $scope.addVenue = controller.addVenue;
      },
      require: '^ngController'
    };
  });
};
