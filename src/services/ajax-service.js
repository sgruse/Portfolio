// var ajaxService = angular.module('AjaxService', []);

(function() {
  angular.module('AjaxService', [])
    .factory('ajax', [
      '$http',
      '$window',
      AjaxService
    ]);

    function AjaxService($http, $window) {
      var serviceObj = {};

      serviceObj.getData = function() {
        $http.get('../../data.json')
        .then(function successCallback(response) {
          serviceObj.projectData = response.data;
          return response.data;
        })
      }
      return serviceObj;
    }
})();
