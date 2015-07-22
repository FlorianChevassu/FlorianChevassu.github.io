(function() {
  'use strict';

  angular
    .module('site')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($scope, $window, blogService) {
    var data = blogService.getData();

    data.then(function(){
      $window.alert(blogService.data);
    });
  }

  //https://raw.githubusercontent.com/FlorianChevassu/amanite_template_engine/master/AmaniteConfig.cmake.in
})();
