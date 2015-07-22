(function() {
  'use strict';

  angular
    .module('site')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

      $stateProvider.state('cv', {
        url: '/cv',
        templateUrl: 'app/cv/cv.html',
        controller: 'CvController',
        controllerAs: 'cv'
      });

      $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      });

      $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'blog'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
