describe('AllPostsCtrl', function() {

  beforeEach(module('simplySocial'));

  var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('AllPostsCtrl', {$scope: scope});
    }));  

  it('should have posts defined', inject(function() {
    scope.getPosts();
    
    setTimeout(function() {
      expect(scope.posts).toBeDefined();
    }, 500);
    
  }));  

});