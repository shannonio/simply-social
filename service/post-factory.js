angular.module('simplySocial').factory('postFactory',function($http) {

	var postFactory = {

    get: function get() {
      var promise = $http({
        method: 'GET',
        url: '../mock/posts.json'
      });
      return promise;
    }

  };

	return postFactory;
});