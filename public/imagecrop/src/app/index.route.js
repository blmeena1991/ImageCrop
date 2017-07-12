(function() {
  'use strict';

  angular
    .module('imagecrop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
          views: {
              'content@': {
                  templateUrl: 'imagecrop/src/app/main/main.html',
                  controller: 'MainController',
                  controllerAs: 'main'
              }
          }
      });
    $urlRouterProvider.otherwise('/');
  }

})();
