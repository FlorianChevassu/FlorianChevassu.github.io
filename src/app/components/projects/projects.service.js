(function() {
  'use strict';

  angular
      .module('site')
      .service('projectsService', projects);

  /** @ngInject */
  function projects() {
    var data = [
      {
        'title': 'Inquire',
        'url': 'https://github.com/InquirePackageManager/Inquire',
        'description': 'An experimental package manager written in pure CMake. In development.',
        'logo': ''
      },
      {
        'title': 'Amanite Template Engine',
        'url': 'https://github.com/FlorianChevassu/amanite_template_engine',
        'description': 'A simple C++11 templating engine with partial support for mustache templates.',
        'logo': ''
      }
    ];

    this.getProjects = getProjects;

    function getProjects() {
      return data;
    }
  }

})();
