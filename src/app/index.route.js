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

    $stateProvider.state('projects.AmaniteTemplateEngine', {
      url: '/projects/amanite_template_engine',
      templateUrl: 'app/projects/amanite_template_engine.html',
      parent: 'projects'
    });

    $stateProvider.state('blog', {
      url: "/blog",
      templateUrl: 'app/blog/blog.html',
      controller: 'BlogController',
      controllerAs: 'blog',
    });

    $stateProvider.state('blog.post', {
      url: "/post/:id",
      templateUrl: 'app/blog/blog.html',
    });


    $stateProvider.state('about', {
      url: "/about",
      templateUrl: 'app/about/about.html',
    });

    $urlRouterProvider.otherwise('/');
  }

})();
