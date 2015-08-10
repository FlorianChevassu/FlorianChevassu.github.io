(function() {
  'use strict';

  angular
    .module('site')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, blogService, $location) {
    $scope.posts = blogService.posts;
    $scope.isOnBlogIndex = function(){
      return $location.path() === "/blog";
    };
  }
})();
