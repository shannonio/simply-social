describe('NavbarCtrl', function() {

	beforeEach(module('simplySocial'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('NavbarCtrl', {$scope: scope});
    }));	

	it('should have a modal open function', inject(function() {
    scope.initModal();
    setTimeout(function() {
		  expect(scope.open).toBeDefined();
    }, 500);
		
	}));

});