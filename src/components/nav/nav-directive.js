(function () {
  angular.module('navModule')
    .directive('navDirective', navBar);

    function navBar() {
      return {
        restrict: 'E',
        controller: 'NavController',
        controllerAs: 'navCtrl',
        template: '<h1>Kamuel</h1>'
        // scope: {
        //   toggleVisibility: '&',
        // },
      };
    }
})();
