(function() {
  'use strict';

  angular
  .module('site')
  .factory('blogService', blogService);

  /** @ngInject */
  function blogService() {

    var service = {
      posts: [{
        id: 0,
        raw_url : "app/blog/posts/06_08_15_hello_blog.html",
        url : "06_08_15_hello_blog.html",
        date : new Date(2015, 7, 6)
      },
      // {
      //   id: 1,
      //   raw_url : "app/blog/posts/12_08_15_APM_a_cmake_dependency_manager.html",
      //   url : "12_08_15_APM_a_cmake_dependency_manager.html",
      //   date : new Date(2015, 7, 12)
      // },
    ]
    };

    return service;
  }
})();
