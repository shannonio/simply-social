angular.module('simplySocial').controller('AllPostsCtrl',function($scope, postFactory){

  $scope.getPosts = function getPosts() {
    postFactory.get().then(function(response) {
      $scope.posts = response.data.posts;
    });
  };

  $scope.getPosts();

});