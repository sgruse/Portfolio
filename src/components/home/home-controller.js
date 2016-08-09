(function() {
  angular.module('homeModule')
    .controller('homeController', [
      '$scope',
      '$location',
      '$anchorScroll',
      HomeController
    ]);
    function HomeController($scope, $location, $anchorScroll) {
      var vm = this;

      vm.scrollTo = function(scrollLocation) {
        console.log('SCROLL HAS BEEN HIT WITH : ', scrollLocation);
        $location.hash(scrollLocation);
        $anchorScroll();
      }
    };
})();
