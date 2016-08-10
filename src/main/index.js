'use strict';

var angular = require('angular');
require(__dirname + '/../services/ajax-service');
// var projectData = require(__dirname + '/../data.json');
var projectData = require(__dirname + '/../data.js');

(function() {
  var app = angular.module('App', [
    'ngRoute',
    'navModule',
    'homeModule',
    'AjaxService'
    // MainController
  ])
  // .config(['$routeProvider', '$locationProvider', router]);
  //
  // function router($routeProvider, $locationProvider) {
  //   $routeProvider.when('/projectInfo', {
  //     template: require('../../src/components/project/projectInfo.html'),
  //     controller: 'homeController'
  //     // controllerAs: 'homeCtrl'
  //   })
  // }
  app.controller('mainController', [
    '$scope',
    '$location',
    '$anchorScroll',
    'ajax',
    MainController
  ]);

  function MainController($scope, $location, $anchorScroll, ajax) {
    var vm = this;

// MORE INFORMATION FUNCTIONALITY
    $scope.moreInfo = false;
    $scope.showMore = function() {
      $scope.moreInfo = true;
    };

    $scope.showProject = function(projectName) {
      console.log('SHOW PROJECT HIT WITH : ' + projectName);
      // $location.url('/projectInfo');
    }

// PROJECT DATA FROM REQUIRE STATEMENT
    $scope.projectData = projectData[0];
    $scope.scrollTo = function(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    }
  }

})();
