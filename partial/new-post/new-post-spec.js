describe('NewPostCtrl', function() {

  beforeEach(module('simplySocial'));

  var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('NewPostCtrl', {$scope: scope});
    }));  

  it('should ...', inject(function() {

    expect(1).toEqual(1);
    
  }));

});