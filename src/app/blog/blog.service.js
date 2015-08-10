(function() {
  'use strict';

  angular
  .module('site')
  .factory('blogService', blogService);

  /** @ngInject */
  function blogService() {

    var service = {
      posts: [{
        raw_url : "app/blog/posts/06_08_15_hello_blog.html",
        url : "#/blog/post/06_08_15_hello_blog.html",
        date : new Date(2015, 8, 6)
      },
    ]
    };

    return service;
  }
})();
