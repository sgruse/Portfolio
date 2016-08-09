'use strict';

var angular = require('angular');

(function() {
  angular.module('App', [
    'ngRoute',
    'navModule',
    'homeModule'
    // MainController
  ])
  // .config(['$routeProvider', '$locationProvider', router]);
  //
  // function router($routeProvider, $locationProvider) {
  //   $routeProvider.when('/home', {
  //     template: require('../../src/components/home/home.html'),
  //     controller: 'homeController'
  //     // controllerAs: 'homeCtrl'
  //   })
  // };
  .controller('mainController', [
    '$scope',
    '$location',
    '$anchorScroll',
    MainController
  ]);

  function MainController($scope, $location, $anchorScroll) {
    var vm = this;

    $scope.scrollTo = function(scrollLocation) {
      console.log('SCROLL HAS BEEN HIT WITH : ', scrollLocation);
      $location.hash(scrollLocation);
      $anchorScroll();
    }
  }

})();
