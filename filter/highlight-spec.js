describe('highlight', function() {

  beforeEach(module('simplySocial'));

  it('should return a highlighted post body', inject(function($filter) {

    var filter = $filter('highlight');

    expect(filter('my post @blue')).toBeDefined();

  }));

});