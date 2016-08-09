(function () {
  angular.module('navModule')
    .directive('navDirective', navBar);

    function navBar() {
      return {
        restrict: 'E',
        controller: 'NavController',
        controllerAs: 'navCtrl',
        // controller: 'homeController',
        // controllerAs: 'homeCtrl',
        template: require('./nav-view.html')
        // scope: {
        //   toggleVisibility: '&',
        // },
      };
    }
})();
