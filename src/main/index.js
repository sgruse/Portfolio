'use strict';

var angular = require('angular');

(function() {
  angular.module('App', [
    'ngRoute',
    'navModule',
    'HomeModule'
  ])
  .config(['$routeProvider', '$locationProvider', router]);

  function router($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
      template: require('../../src/components/home/home.html'),
      controller: 'HomeController'
    })
  };
})();
