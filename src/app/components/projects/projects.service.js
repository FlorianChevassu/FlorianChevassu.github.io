(function() {
  'use strict';

  angular
      .module('site')
      .service('projectsService', projects);

  /** @ngInject */
  function projects() {
    var data = [
      {
        'title': 'Amanite Template Engine',
        'url': 'https://github.com/FlorianChevassu/amanite_template_engine',
        'description': 'A simple C++11 templating engine with partial support for mustache templates.',
        'logo': ''
      },
      {
        'title': 'APM',
        'url': 'https://github.com/FlorianChevassu/APM',
        'description': 'A pure CMake based package manager. In development.',
        'logo': ''
      }
    ];

    this.getProjects = getProjects;

    function getProjects() {
      return data;
    }
  }

})();
