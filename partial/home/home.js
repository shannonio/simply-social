angular.module('simplySocial').controller('HomeCtrl',function($scope, $rootScope){
  //set the default post view to list
  $scope.listType = 'list';

  $scope.changeListType = function changeListType(type) {
    $scope.listType = type;
    $rootScope.$broadcast('post.listChange.'+type);
  };

});