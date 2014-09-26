angular.module('simplySocial').factory('ModalFactory', function ($compile, $rootScope, $controller, $http) {
  var modalFactory = function (config) {

    // check that there's a template provided
    if (typeof config.template === 'undefined' && typeof config.templateUrl === 'undefined') {
      throw new Error('The service needs an html template or a te  mplate url to be passed with the config object');
    }

    // define variables
    var template, html, scope,
        containerClass = 'ng-modal-container',
        overlayDivClass = 'ng-modal-overlay',
        useOverlay = typeof config.useOverlay === 'boolean' ? config.useOverlay : true,
        container = angular.element(config.selector || document.body),
        overlayDiv = '<div class="'+ overlayDivClass + '"></div>';

    // it even accepts a tempate url!
    if (config.templateUrl) {
      $http.get(config.templateUrl).then(function(response) {
        template = response.data;
        // the html var has to be set on the 2 options of the conditional since one has an async call
        html = '<div class="' + containerClass + '"><div class="ng-modal"><a href="" class="ng-modal-close" ng-click="turnMeOff()"></a>' + template + '</div></div>';
      });
    } else {
      template= config.template;
      html = '<div class="' + containerClass + '"><div class="ng-modal"><a href="" class="ng-modal-close" ng-click="turnMeOff()"></a>' + template + '</div></div>';
    }

    // Activates the modal.
    function turnMeOn (localVars) {
      var domElement, overlay;
      scope = $rootScope.$new();
      // assign the deactivation function to the created scope
      scope.turnMeOff = turnMeOff;

      // if there's a modal already on the DOM, remove it before adding another
      domElement = angular.element('.'+containerClass);
      domElement.remove();

      // if there's an overlay div already on the DOM, remove it before adding another
      overlay = angular.element('.' + overlayDivClass);
      overlay.remove();

      // if there's data passed along, copy it to the created scope
      if (localVars) {
        for (var prop in localVars) {
          scope[prop] = localVars[prop];
        }
      }

      // create DOM elements
      domElement = angular.element(html);
      
      // use the compile function to compile the HTML into a template/template function
      // and assign it scope
      $compile(domElement)(scope);

      // overlay is set to true by default
      if (useOverlay) {
        overlay = angular.element(overlayDiv);
        angular.element(document.body).append(overlay);
      }
      container.prepend(domElement);
    }

    // this is in charge of closing the modal
    function turnMeOff() {
      var domElement = angular.element('.' + containerClass),
          overlay = angular.element('.' + overlayDivClass);
      if (domElement) {
        domElement.remove();
      }
      if (overlay) {
        overlay.remove();
      }
      scope.$destroy();
    }

    // functions that can be called on the modal
    return {
      turnMeOn: turnMeOn,
      turnMeOff: turnMeOff
    };
  };

  return modalFactory;
});