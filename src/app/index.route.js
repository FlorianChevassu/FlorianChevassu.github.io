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

    $stateProvider.state('blog.posts', {
      url: "/posts",
      views: {
        "first_blog_post": {
          'templateUrl': 'app/blog/posts/first_blog_post.html'
        },
        "second_blog_post": {
          'templateUrl': 'app/blog/posts/second_blog_post.html'
        }
      }
    });

    $stateProvider.state('blogPost', {
      url: "/blog/post/:id",
      templateUrl: function($stateParams){
        return 'app/blog/posts/' + $stateParams.id + '.html';
      },
      controller: function($scope, $stateParams, blogService){
        $scope.variable = 'VARIABLE';
        $scope.posts = blogService.posts;

        $scope.posts.forEach(function(element, index, array) {
          if(element.route === $stateParams.id){
            $scope.post = element;
          }
        });
      }
    });

    $urlRouterProvider.otherwise('/');
  }

})();
