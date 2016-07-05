module.exports = function(app) {
  app.directive('treatForm', function() {
    return {
      scope: {
        formtype:'@',
        type:'@',
        treat:'='
      },
      templateUrl: './templates/treats/treat_form.html',
      require: '^ngController',
      link: function(scope, elem, attr, controller) {

        var configMethods = {
          cookie: function(scope) {
            scope.delete = controller.deleteCookie;
            scope.submit = scope.formtype === 'new' ? controller.addCookie
            : controller.updateCookie;
          },
          candy: function(scope) {
            scope.delete = controller.deleteCandy;
            scope.submit = scope.formtype === 'new' ? controller.addCandy
            : controller.updateCandy;
          }
        };
        configMethods[scope.type](scope);
      }
    };
  });
};
