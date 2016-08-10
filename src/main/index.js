'use strict';

var angular = require('angular');
require(__dirname + '/../services/ajax-service');
// var projectData = require(__dirname + '/../data.json');
var projectData = require(__dirname + '/../data.js');

(function() {
  angular.module('App', [
    'ngRoute',
    'navModule',
    'homeModule',
    'AjaxService'
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
    'ajax',
    MainController
  ]);

  function MainController($scope, $location, $anchorScroll, ajax) {
    var vm = this;
    $scope.projectData = projectData[0];
    // $scope.projectData;
    // $scope.getData = function () {
    //   console.log('GET DATA FUNCTION HAS BEEN HIT');
    //   $scope.projectData = ajax.getData();
    //   console.log('PROJECT DATA IS : ', $scope.projectData);
    // }
    $scope.scrollTo = function(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    }
  }

})();
