(function() {
  angular.module('navModule')
    .controller('NavController', [
      NavBarController
    ]);
    function NavBarController() {
      var vm = this;

// THIS IS THE TOGGLE FUNCTIONALITY FOR THE DROPDOWN NAVBAR
      vm.dropDown = false;
      vm.changeClass = function() {
        if(!vm.dropDown) {
          vm.addClass();
        }
        else {
          vm.removeClass();
        }
      };

      vm.addClass = function() {
        console.log('add class is hit');
          var newClass = document.getElementById('navToggle');
          newClass.className += 'in';
          vm.dropDown = true;
      };
      vm.removeClass = function() {
        console.log('remove class is hit');
          var newClass = document.getElementById('navToggle').classList;
          newClass.remove('collapsein');
          newClass.add('collapse');
          vm.dropDown = false;
      }
    };

})();
