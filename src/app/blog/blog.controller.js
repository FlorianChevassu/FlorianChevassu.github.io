(function() {
  'use strict';

  angular
    .module('site')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, blogService, $location, $stateParams) {
    $scope.posts = blogService.posts;
    $scope.isOnBlogIndex = function(){
      return $location.path() === "/blog";
    };
    $scope.blogPostFilter = function(value, index, array){
      if($stateParams.id === ""){
        return true;
      }else{
        return value.url === $stateParams.id;
      }
    }

    var currentPostId = $scope.posts.filter($scope.blogPostFilter)[0].id;

    $scope.showPager = function(){
      return $scope.posts.filter($scope.blogPostFilter).length === 1;
    }

    $scope.getNextPostLink = function(){
      var item = $scope.posts[currentPostId+1];
      if(item === undefined){
        return null;
      }else{
        return "#/blog/" + item.url;
      }
    }

    $scope.getPreviousPostLink = function(){
      var item = $scope.posts[currentPostId-1];
      if(item === undefined){
        return null;
      }else{
        return "#/blog/" + item.url;
      }
    }
  }
})();
