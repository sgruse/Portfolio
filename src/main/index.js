'use strict';

var angular = require('angular');

(function() {
  angular.module('App', [
    'HomeModule'
  ])
  .config(['$routeProvider', '$locationProvider', router]);

  // ADD PERSONAL ROUTING
  function router($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
      // templateUrl: require('../components/home/home.html'),
      templateUrl: './home.html',
      controller: 'HomeController'
    })
  };
})();
