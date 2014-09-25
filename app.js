angular.module('simplySocial', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('simplySocial').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });
    $stateProvider.state('all-posts', {
        url: '/all-posts',
        templateUrl: 'partial/all-posts/all-posts.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

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
