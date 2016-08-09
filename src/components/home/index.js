'use strict';

// angular.module('HomeModule', [])
//   .controller('HomeController', ['$scope', function($scope) {
//     $scope.dog = 'lucy';
//   }]);

(function() {
  angular.module('homeModule', []);
})();

require('./home-controller');
require('./home-directive');
