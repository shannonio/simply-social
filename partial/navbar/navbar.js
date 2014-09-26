angular.module('simplySocial').controller('NavbarCtrl',function($scope, $http, ModalFactory){
  
  $scope.initModal = function() {
    // instantiate modal service
    $http.get('/partial/new-post/new-post.html').then(function(response) {
      $scope.statusModal = new ModalFactory({
          template: response.data
      });
      $scope.open = $scope.statusModal.turnMeOn;
      $scope.post = $scope.statusModal.turnMeOff;
    });
    //catch event on create new post
    $scope.$on('post.new', function() {
      $scope.post();
    });
  };  

  $scope.initModal();

});