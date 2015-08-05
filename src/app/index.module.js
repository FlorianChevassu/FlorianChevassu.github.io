(function() {
  'use strict';

  angular
    .module('site', ['ui.router', 'ui.bootstrap'])
    //add a state provider for the site
    .provider('$dynamicState', function($stateProvider){
        this.$get = function($state){
          return {
            addView:  function(state, title, templateUrl) {
                        var stateRef = $state.get(state);
                        stateRef["views"] = {};
                        stateRef["views"][title] = {};
                        stateRef["views"][title]["templateUrl"] = templateUrl;
                      },
          };
        };
      });

})();
