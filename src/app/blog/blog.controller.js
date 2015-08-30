(function() {
  'use strict';

  angular
    .module('site')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, blogService, $location, $state, $stateParams, $anchorScroll) {
    $scope.selectedTags = "c++,cmake";
    $scope.currentState = $state;
    $scope.posts = blogService.posts;
    $scope.isOnBlogIndex = function(){
      return $location.path() === "/blog";
    };

    $scope.defaultBlogPostFilter = function(value/*, index, array*/){
      if($stateParams.id === "" || $stateParams.id === undefined){
        return true;
      }else{
        return value.url === $stateParams.id;
      }
    };

    $scope.blogPostFilter = $scope.defaultBlogPostFilter;

    var currentPostId = $scope.posts.filter($scope.blogPostFilter)[0].id;

    $scope.showPager = function(){
      return $scope.posts.filter($scope.blogPostFilter).length === 1;
    };

    $scope.getNextPostLink = function(){
      var item = $scope.posts[currentPostId+1];
      if(item === undefined){
        return null;
      }else{
        return "#/blog/" + item.url;
      }
    };

    $scope.getPreviousPostLink = function(){
      var item = $scope.posts[currentPostId-1];
      if(item === undefined){
        return null;
      }else{
        return "#/blog/" + item.url;
      }
    };

    $scope.scrollTo = function(id) {
      var old = $location.hash();
      $location.hash(id);
      $anchorScroll();
      //reset to old to keep any additional routing logic from kicking in
      $location.hash(old);
    };

    $scope.filterTags = function(tags){
      $scope.blogPostFilter = function(post){
        return [tags].every(function(searchTagElement) {
          return post.tags.some(function(postTagElement) {
            return postTagElement === searchTagElement;
          });
        });
      };
    };

  }
})();
