angular.module('simplySocial', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'taiPlaceholder']);

angular.module('simplySocial').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    views: {
      'main': {
        templateUrl: 'partial/home/home.html'
      }
    }
  });
  $stateProvider.state('home.all-posts', {
    url: '/all-posts',
    views: {
      'home': {
        templateUrl: 'partial/all-posts/all-posts.html'
      }
    }
  });
  $stateProvider.state('settings', {
    url: '/home/settings',
    views: {
      'main': {
        templateUrl: 'partial/settings/settings.html'
      }
    }
  });
  /* Add New States Above */
  $urlRouterProvider.otherwise('/home/all-posts');

});

angular.module('simplySocial').run(function($rootScope) {

  $rootScope.safeApply = function(fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
