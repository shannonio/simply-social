describe('HeroCtrl', function() {

  beforeEach(module('simplySocial'));

  var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HeroCtrl', {$scope: scope});
    }));  

  it('should be a hero!', inject(function() {

    expect(1).toEqual(1);
    
  }));

});