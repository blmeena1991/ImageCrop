(function() {
  'use strict';

  angular
    .module('imagecrop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
