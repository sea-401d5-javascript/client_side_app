module.exports = function(app){
  app.directive('teamDirective', function(){
    return {
      templateUrl: './templates/teamDirective.html',
      scope: {
        critters: '=',
        team: '@'
      }
    };
  });
};
