module.exports = function(app){
  app.directive('nbaDirective', function() {
    return {
      templateUrl:'./templates/nba-template.html',
      scope:{
        type:'@',
        frenchie: '='
      },
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deletePlayer = controller.deletePlayer;
        $scope.submitFrenchie = $scope.type === 'new player' ? controller.addPlayer : controller.updatePlayer;
      }
    };
  });
};
