'use strict';

var angular = require('angular');
require(__dirname + '/../services/ajax-service');
require(__dirname + '/../services/modal-service');
// var projectData = require(__dirname + '/../data.json');
var projectData = require(__dirname + '/../data.js');

(function() {
  var app = angular.module('App', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'navModule',
    'homeModule',
    'modalModule',
    'ui.bootstrap',
    'AjaxService',
    'ModalService'
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
    '$uibModal',
    'ajax',
    'modal',
    MainController
  ]);

  function MainController($scope, $location, $anchorScroll, $uibModal, ajax, modal) {
    var vm = this;

// ICONS
    $scope.angularIcon = require('./img/icons/angular-icon.svg');

// MODAL FUNCTIONALITY
    $scope.showProject = function (project) {
      modal.setModal(project);
      setModal();
    };

    function setModal() {
      $uibModal.open({
        template: require(__dirname + '/../components/project/modal.html'),
        controller: 'ModalController'
      })
    };

// MORE INFORMATION FUNCTIONALITY
    // $scope.moreInfo = false;
    // $scope.showMore = function() {
    //   $scope.moreInfo = true;
    // };

    // $scope.showProject = function(projectName) {
    //   console.log('SHOW PROJECT HIT WITH : ' + projectName);
    //   // $location.url('/projectInfo');
    // }

// PROJECT DATA FROM REQUIRE STATEMENT
    $scope.projectData = projectData[0];
    $scope.scrollTo = function(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    }
  }

})();
