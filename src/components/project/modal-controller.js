(function() {
  angular.module('modalModule')
    .controller('ModalController', [
      '$scope',
      'modal',
      modalController
    ]);

    function modalController($scope, modal){
      console.log('MODAL IS : ', modal);
      $scope.dog = modal.currentProject;

    };
})();
