(function() {
  'use strict';

  angular
    .module('site')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, $window, $templateCache, $templateRequest, $sce, blogService, $dynamicState, $view) {
    // var data = blogService.getData();
    //
    // data.then(function(){
    //   $scope.data = blogService.data;
    // });

    $scope.posts = blogService.posts;


    // //LOAD BLOG POSTS
    // $scope.posts.forEach(function(post) {
    //   var templateUrl = $sce.getTrustedResourceUrl('#/blog/posts/' + post.route + '.html');
    //
    //   $templateRequest(templateUrl).then(function(template) {
    //       $templateCache.put(post.route + '.htm', template);
    //   }, function() {
    //       // An error has occurred
    //     }
    //   );
    // });

    // angular.forEach($scope.posts, function (value, key)
    //   {
    //     $dynamicState.addView('blog.list', value.route, 'app/blog/posts/' + value.route + '.html');
    //   });
    //


  }
})();
