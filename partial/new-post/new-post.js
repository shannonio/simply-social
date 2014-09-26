angular.module('simplySocial').controller('NewPostCtrl',function($scope, $rootScope){
  
  $scope.post = function() {
    $rootScope.$broadcast('post.new');
  };

});