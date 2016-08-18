'use strict';

var angular = require('angular');
require(__dirname + '/../services/ajax-service');
require(__dirname + '/../services/modal-service');
var projectData = require(__dirname + '/../data.js');


(function() {
  var app = angular.module('App', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'navModule',
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
    var angularIcon = require('./img/icons/angular-icon.svg');
    var nodeIcon = require('./img/icons/node-icon.jpeg');
    var jsIcon = require('./img/icons/javascript-icon.png');
    var jqueryIcon = require('./img/icons/jquery-icon.png');
    var gitIcon = require('./img/icons/git-icon.jpg');
    var webpackIcon = require('./img/icons/webpack-icon.png');
    var awsIcon = require('./img/icons/aws-icon.jpeg');
    var gulpIcon = require('./img/icons/gulp-icon.png');
    var mochaIcon = require('./img/icons/mocha-icon.svg');
    var mongoIcon = require('./img/icons/mongo-icon.png');
    var bootstrapIcon = require('./img/icons/bootstrap-icon.svg');

    $scope.icons = [angularIcon, nodeIcon, jsIcon, jqueryIcon, bootstrapIcon, gitIcon, webpackIcon, awsIcon, gulpIcon, mochaIcon, mongoIcon];

// Social Icon
    var linkedIn = require('./img/icons/linkedin.svg');
    var gitHub = require('./img/icons/github.svg');
    var twitter = require('./img/icons/twitter.svg');
    var soundCloud = require('./img/icons/soundcloud.svg');

    $scope.myPic = require('./img/portfolio-pic.png');
    $scope.uwPic = require('./img/icons/uw.jpg');
    $scope.cfPic = require('./img/icons/codeFellows.png');
    $scope.hammer = require('./img/icons/hammer.png');
    $scope.socials = [linkedIn, gitHub, twitter, soundCloud];

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

// PROJECT DATA FROM REQUIRE STATEMENT
    $scope.projectData = projectData[0];
    $scope.scrollTo = function(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    }
  }

})();
