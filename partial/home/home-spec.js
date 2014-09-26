describe('HomeCtrl', function() {

  beforeEach(module('simplySocial'));

  var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    }));  

  it('should have a list type', inject(function() {

    expect(scope.listType).toBeDefined();
    
  }));  

  it('should be of list type tile when changeListType("tile")', inject(function() {
    scope.changeListType('tile');
    expect(scope.listType).toEqual('tile');
    
  }));

});