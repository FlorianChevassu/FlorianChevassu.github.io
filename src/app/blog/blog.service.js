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
      {
        id: 1,
        raw_url : "app/blog/posts/20_10_15_Stop_teaching_C.html",
        url : "20_10_15_Stop_teaching_C.html",
        date : new Date(2015, 10, 19)
      },
    ]
    };

    return service;
  }
})();
