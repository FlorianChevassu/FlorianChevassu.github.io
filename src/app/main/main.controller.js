(function() {
  'use strict';

  angular
    .module('site')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, projectsService) {
    var vm = this;

    vm.projects = projectsService.getProjects();

  }
})();
