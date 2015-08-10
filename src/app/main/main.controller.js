(function() {
  'use strict';

  angular
    .module('site')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, projectsService, blogService) {
    var vm = this;

    vm.projects = projectsService.getProjects();
    vm.posts = blogService.posts;
    vm.nbBlogPostShown = 10;

  }
})();
