module.exports = function(app) {
  app.directive('listDirective', function() {
    return {
      templateUrl:'./templates/listTemplate.html',
      scope: {
        type:'@',
        animal:'='
      },
      require:'^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.death = $scope.type === 'frenchies' ? 'dogWalkers_bitten' : 'dogs_died';
      }
    };
  });
};
