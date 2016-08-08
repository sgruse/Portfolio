(function() {
  angular.module('navModule')
    .controller('NavController', [
      NavBarController
    ]);
    function NavBarController() {
      var vm = this;

      vm.dropDown = false;
      vm.toggleDrop = function() {
        console.log('TOGGLE DROP HIT');
        if (!vm.dropDown) {
          console.log('IF HAS BEEN HIT');
          vm.dropDown = true;
        }
        else {
          vm.dropDown = false;
        }
      }
    };

})();
