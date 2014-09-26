angular.module('simplySocial').filter('highlight', function($sce) {
  return function(input,arg) {
    if (input) {
      var _input = input.split(' ');
      _.each(input, function(word, i) { 
        if (word.indexOf('@') >= 0) {
          _input[i] = '<strong class="quiet">'+word+'</strong>';
        } 
      });

      return $sce.trustAsHtml(_input.join(' '));
    }
  };
});