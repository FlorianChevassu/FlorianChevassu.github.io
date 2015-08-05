(function() {
  'use strict';

  angular
      .module('site')
      .service('projects', projects);

  /** @ngInject */
  function projects() {
    var data = [
      {
        'title': 'Amanite Template Engine',
        'url': '#/prjects/AmaniteTemplateEngine',
        'description': 'Simple C++ templating engine',
        'logo': ''
      },
      {
        'title': 'APM',
        'url': '#/prjects/APM',
        'description': 'CMake based package manager. In development.',
        'logo': ''
      }
    ];

    this.getProjects = getProjects;

    function getProjects() {
      return data;
    }
  }

})();
