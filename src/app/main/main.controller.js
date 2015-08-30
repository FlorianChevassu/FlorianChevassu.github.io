(function() {
  'use strict';

  angular
    .module('site')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, projectsService, blogService, $window) {
    var vm = this;

    //Hack to show the top of the window when loaded...
    $window.scrollTo(0,0);

    vm.projects = projectsService.getProjects();
    vm.posts = blogService.posts;
    vm.nbBlogPostShown = 10;

    //set a blank background only for CV... HACK
    $scope.backgroundClass = function($state){
      if($state === 'CV'){
        return "blank-page-content-background";
      }else{
        return "page-content-background";
      }
    };
  }
})();
