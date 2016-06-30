module.exports = function(app) {
  app.directive('treatForm', function() {
    return {
      scope: {}, //TODO: make scope
      templateUrl: 'placeholder', //TODO: make template and connect it here
      require: '^ngController',
      link: function(scope, elem, attr, controller) {
        //TODO: link functions
      }
    };
  });
};
