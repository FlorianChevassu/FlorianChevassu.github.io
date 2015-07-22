(function() {
  'use strict';

  angular
  .module('site')
  .factory('blogService', blogService);

  /** @ngInject */
  function blogService($log, $http) {
    var dataLocation = 'https://raw.githubusercontent.com/FlorianChevassu/amanite_template_engine/master/AmaniteConfig.cmake.in';

    var service = {
      getData: getData
    };

    return service;

    function getData() {

      return $http.get(dataLocation)
      .then(getDataComplete)
      .catch(getDataFailed);

      function getDataComplete(response) {
        service.data = response.data;
      }

      function getDataFailed(error) {
        $log.error('XHR Failed for getData.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
