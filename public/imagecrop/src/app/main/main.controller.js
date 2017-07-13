(function() {
  'use strict';

  angular
    .module('imagecrop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec,$window, toastr,filepickerService) {
    var vm = this;
    vm.files = JSON.parse($window.localStorage.getItem('files') || '[]');
    vm.perview='';
    vm.perviewFlag=false;
    vm.pickFile=function (){
      filepickerService.pick(
          {mimetype: 'image/*'},
          onSuccess
      );
    };

    vm.onSuccess=function (Blob){
      vm.files.push(Blob);
      console.log(Blob);
    vm.perview=Blob.url;
        vm.perviewFlag=true;
        $window.localStorage.setItem('files', JSON.stringify(vm.files));
    };

  }
})();
