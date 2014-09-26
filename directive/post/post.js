angular.module('simplySocial').directive('post', function($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
      'post': '=post'
		},
		templateUrl: 'directive/post/post.html',
		link: function(scope, element, attrs, fn) {
			scope.commentControlText = 'Expand';

			scope.changeCommentControl = function changeCommentControl() {
				scope.commentControlText = scope.commentControlText === 'Expand' ? 'Collapse' : 'Expand';
			};

			$rootScope.$on('post.listChange.tile', function() {
				scope.listType = 'tile';
			});			

			$rootScope.$on('post.listChange.list', function() {
				scope.listType = 'list';
			});
		}
	};
});
