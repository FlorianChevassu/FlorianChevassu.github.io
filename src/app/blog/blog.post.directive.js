'use strict';

angular.module('site').directive('post', function($compile, $rootScope) {
    return {
        restrict: 'E',
        //scope: { 'data': '=' },
        transclude: 'true',
        template: "<div>"+
                    "<span class='blue-line'></span>"+
                    "<h3><a ng-href='#/blog/post/{{post.route}}'>{{post.title}}</a></h3>"+
                    "<div class='block-container'>"+
                      "<div class='block-left'>"+
                        "<div ng-repeat='tag in post.tags'>"+
                          "<h4 class='text-right'>{{tag}}</h4>"+
                        "</div>"+
                      "</div>"+
                      "<div ng-transclude></div>"+
                    "</div>"+
                  "</div>",
        link: function(scope, element, attrs, blogService) {
          if(attrs.title){
            scope.post.title = attrs.title;
          }
          if(attrs.tags !== undefined){
            scope.post.tags = attrs.tags.split(",");
          }
          if(attrs.route){
            scope.post.route = attrs.route;
          }
        }
    };
});
