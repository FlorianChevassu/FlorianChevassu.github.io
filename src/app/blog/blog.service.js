(function() {
  'use strict';

  angular
  .module('site')
  .factory('blogService', blogService);

  /** @ngInject */
  function blogService($log, $http) {
    var root = 'https://api.github.com/repos/FlorianChevassu/site/contents/';
    var dataLocation = root + 'src/app/blog/posts';

    var service = {
      getData: getData,
      posts: [{
        route : "first_blog_post",
        title : "First blog post with beautiful title.",
        tags : ["C++", "WTF", "dfg"],
        include_tmpl: 'first_blog_post.html',
        snippet : "Emensis itaque difficultatibus <strong>multis</strong> et nive obrutis callibus plurimis ubi prope Rauracum ventum est ad supercilia fluminis Rheni, resistente multitudine Alamanna pontem suspendere navium conpage Romani vi nimia vetabantur ritu grandinis undique convolantibus telis, et cum id inpossibile videretur, imperator cogitationibus magnis attonitus, quid capesseret ambigebat."
      },
      {
        route : "second_blog_post",
        title : "second_blog_post with hateful title.",
        tags : ["C++", "WTF", "dfg"],
        include_tmpl: 'second_blog_post.html'
      }]
    };

    //getData();

    return service;

    function getData() {

      return $http.get(dataLocation)
      .then(getDataComplete)
      .catch(getDataFailed);

      function getDataComplete(response) {
        service.data = response.data;
      }

      function getDataFailed(error) {
        $log.error('XHR Failed for getData.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
