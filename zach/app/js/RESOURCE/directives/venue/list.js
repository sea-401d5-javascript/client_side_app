module.exports = function(app) {
  app.directive('venueListDirective', function() {
    return {
      templateUrl: './templates/venues/list.html',
      scope: {
        venues: '='
      }
    };
  });
};
