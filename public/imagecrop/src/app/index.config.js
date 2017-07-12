(function() {
  'use strict';

  angular
    .module('imagecrop')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,filepickerProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

      filepickerProvider.setKey('A5L5kGVxR228flaW54GJQz');
  }

})();
