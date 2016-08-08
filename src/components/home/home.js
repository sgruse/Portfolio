'use strict';

angular.module('HomeModule', [])
  .controller('HomeController', ['$scope', function($scope) {
    $scope.dog = 'lucy';
  }]);
