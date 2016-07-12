module.exports = function(app) {
  app.directive('listDirective', function() {
    return {
      templateUrl: './templates/performances/list.html',
      scope: {
        performances: '='
      }
    };
  });
};
