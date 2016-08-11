(function() {
  angular.module('modalModule')
    .controller('ModalController', [
      '$scope',
      'modal',
      modalController
    ]);

    function modalController($scope, modal){
      $scope.projectInfo = modal.currentProject;

    };
})();
