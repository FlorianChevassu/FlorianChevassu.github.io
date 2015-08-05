!function(){"use strict";angular.module("site",["ui.router","ui.bootstrap"]).provider("$dynamicState",["$stateProvider",function(e){this.$get=["$state",function(e){return{addView:function(t,i,o){var n=e.get(t);n.views={},n.views[i]={},n.views[i].templateUrl=o}}}]}])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("site").service("webDevTec",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"Amanite Template Engine",url:"#/prjects/AmaniteTemplateEngine",description:"Simple C++ templating engine",logo:""},{title:"APM",url:"#/prjects/APM",description:"CMake based package manager. In development.",logo:""}];this.getProjects=e}angular.module("site").service("projects",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"Amanite Template Engine",url:"#/prjects/AmaniteTemplateEngine",description:"Simple C++ templating engine",logo:""},{title:"APM",url:"#/projects/APM",description:"CMake based package manager. In development.",logo:""}];this.getProjects=e}angular.module("site").service("projectsService",e)}(),function(){"use strict";function e(e,t){function i(i){function n(e){return e.data}function a(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return i||(i=30),t.get(o+"/contributors?per_page="+i).then(n)["catch"](a)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:o,getContributors:i};return n}angular.module("site").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(){}angular.module("site").controller("ProjectsController",e)}(),function(){"use strict";function e(e,t,i){var o=this;o.projects=i.getProjects()}angular.module("site").controller("MainController",e),e.$inject=["$scope","$timeout","projectsService"]}(),function(){"use strict";function e(e,t,i){function o(){a(),e(function(){s.classAnimation="rubberBand"},4e3)}function n(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function a(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(e){e.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1437489112236,s.showToastr=n,o()}angular.module("site").controller("CvController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e,t){function i(){function i(e){a.data=e.data}function o(t){e.error("XHR Failed for getData.\n"+angular.toJson(t.data,!0))}return t.get(n).then(i)["catch"](o)}var o="https://api.github.com/repos/FlorianChevassu/site/contents/",n=o+"src/app/blog/posts",a={getData:i,posts:[{route:"first_blog_post",title:"First blog post with beautiful title.",tags:["C++","WTF","dfg"],include_tmpl:"first_blog_post.html",snippet:"Emensis itaque difficultatibus <strong>multis</strong> et nive obrutis callibus plurimis ubi prope Rauracum ventum est ad supercilia fluminis Rheni, resistente multitudine Alamanna pontem suspendere navium conpage Romani vi nimia vetabantur ritu grandinis undique convolantibus telis, et cum id inpossibile videretur, imperator cogitationibus magnis attonitus, quid capesseret ambigebat."},{route:"second_blog_post",title:"second_blog_post with hateful title.",tags:["C++","WTF","dfg"],include_tmpl:"second_blog_post.html"}]};return a}angular.module("site").factory("blogService",e),e.$inject=["$log","$http"]}(),angular.module("site").directive("post",["$compile","$rootScope",function(e,t){return{restrict:"E",transclude:"true",template:"<div><span class='blue-line'></span><h3><a ng-href='#/blog/post/{{post.route}}'>{{post.title}}</a></h3><div class='block-container'><div class='block-left'><div ng-repeat='tag in post.tags'><h4 class='text-right'>{{tag}}</h4></div></div><div ng-transclude></div></div></div>",link:function(e,t,i,o){i.title&&(e.post.title=i.title),void 0!==i.tags&&(e.post.tags=i.tags.split(",")),i.route&&(e.post.route=i.route)}}}]),function(){"use strict";function e(e,t,i,o,n,a,s,l){e.posts=a.posts}angular.module("site").controller("BlogController",e),e.$inject=["$scope","$window","$templateCache","$templateRequest","$sce","blogService","$dynamicState","$view"]}(),function(){"use strict"}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.state("cv",{url:"/cv",templateUrl:"app/cv/cv.html",controller:"CvController",controllerAs:"cv"}),e.state("projects",{url:"/projects",templateUrl:"app/projects/projects.html",controller:"ProjectsController",controllerAs:"projects"}),e.state("projects.AmaniteTemplateEngine",{url:"/projects/amanite_template_engine",templateUrl:"app/projects/amanite_template_engine.html",parent:"projects"}),e.state("blog",{url:"/blog",templateUrl:"app/blog/blog.html",controller:"BlogController",controllerAs:"blog"}),e.state("blog.posts",{url:"/posts",views:{first_blog_post:{templateUrl:"app/blog/posts/first_blog_post.html"},second_blog_post:{templateUrl:"app/blog/posts/second_blog_post.html"}}}),e.state("blogPost",{url:"/blog/post/:id",templateUrl:function(e){return"app/blog/posts/"+e.id+".html"},controller:["$scope","$stateParams","blogService",function(e,t,i){e.variable="VARIABLE",e.posts=i.posts,e.posts.forEach(function(i,o,n){i.route===t.id&&(e.post=i)})}]}),t.otherwise("/")}angular.module("site").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("site").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("site").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("site").run(["$templateCache",function(e){e.put("app/blog/blog.html",'<div class="cv"><div class="row"><div class="col-md-9"><h1 class="cv-name">CppThings</h1><h2 class="cv-title">A blog about my day to day programming</h2></div></div><accordion close-others="oneAtATime"><post ng-repeat="post in posts" title="{{post.title}}" tags="{{post.tags.join(\',\')}}" route="{{post.route}}">{{post.snippet}}</post></accordion></div>'),e.put("app/blog/blog.post.html","<div>{{id}}</div>"),e.put("app/cv/cv.html",'<div class="cv"><div class="row"><div class="col-md-9"><h1 class="cv-name">CHEVASSU Florian</h1><h2 class="cv-title">Ingénieur étude et développement C++</h2></div><div class="pull-right"><div class="contact-panel"><p>5 allée Léopold Sédar Senghor</p><p>69007 Lyon</p><p><a href="mailto:chevassu.florian@gmail.com">chevassu.florian@gmail.com</a></p><p><i class="fa fa-phone"></i>06 75 11 86 03</p><p><i class="fa fa-github"></i> <a href="https://github.com/FlorianChevassu">FlorianChevassu</a></p><p><i class="fa fa-globe"></i> <a href="#/">FlorianChevassu.github.io</a></p></div></div></div><accordion close-others="oneAtATime"><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Exp&eacute;rience</h3></accordion-heading><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement d\'un composant COM Cape-Open permettant de simuler de façon rigoureuse l\'évolution de l\'état d\'un régénérateur d\'amine.<ul class="tags"><li>C++</li><li>COM</li><li>Fortran</li><li>Mathématiques Appliquées</li><li>Thermodynamique</li></ul></li><li>Maintenance et évolution d\'une librairie de calculs thermodynamiques en C++ : modernisation et industrialisation du code existant, refactoring, implémentation de nouveaux modèles.<ul class="tags"><li>C++</li><li>Thermodynamique</li></ul></li><li>Maintenance et évolution d’applications JEE basées sur Oracle 9 ias.<ul class="tags"><li>Java</li><li>Javascript</li><li>JSP</li><li>SQL</li></ul></li><li>Participation au développement d\'applications intranet.<ul class="tags"><li>Java (Spring)</li><li>Javascript (Angular)</li></ul></li></ul></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">2010-2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++ scientifique, Deployment, Besançon.</strong> Développement d\'une librairie de gestion de risques financiers en C++ :<ul><li>Implémentation de la partie calibration et simulation de séries temporelles de type GARCH et de la partie pricing ;</li><li>Co-écriture d’une <a href="http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2161561">publication</a> sur l’estimation par maximum de vraisemblance des modèles en espace d’état. Implémentation en Matlab, puis au sein de la librarie C++ dans le but de modéliser avec précision les séries de type ARMA ;</li><li>Déploiement des fonctionnalités de la librairie vers Matlab (fonction Mex) et vers Java (JNIs) ;</li><li>Paralélisation du code existant via OpenMP ;</li><li>Développement d\'un interface graphique permettant de démontrer les possibilités de la librairie en Flex (Adobe Air) ;</li></ul><ul class="tags"><li>C++</li><li>OpenMP</li><li>Matlab</li><li>Java</li><li>JNI</li><li>Flex</li><li>Mathématiques Appliquées</li></ul></div></div></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Formation</h3></accordion-heading></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Compétences</h3></accordion-heading><div class="block-container"><div class="block-left"></div><div class="block-right"><h4>Développement</h4></div></div><div class="block-container"><div class="block-left"><strong>C++</strong></div><div class="block-right">Connaissances approfondies. Normes C++ 11, 14 et 1z (17 ?). Librairies boost, POCO, Qt, Eigen, Armadillo. Parallélisation OpenMP, HPX, Boost.Compute</div></div><div class="block-container"><div class="block-left"></div><div class="block-right"><h4>Langues</h4></div></div><div class="block-container"><div class="block-left"><strong>Anglais</strong></div><div class="block-right"><span>Bon niveau - <em>Pratique régulière</em></span></div></div><div class="block-container"><div class="block-left"><strong>Espagnol</strong></div><div class="block-right"><span>Niveau moyen - <em>Connaissances acquises au sein de Deployment</em></span></div></div><div class="block-container"><div class="block-left"><strong>Néérlandais</strong></div><div class="block-right"><span>Notions - <em>Langue maternelle</em></span></div></div></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>mposihqsoih</h3></accordion-heading><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement du Régénérateur Rigoureux de Désulfo en C++ : Prise en main du code</li><li>Fortran et intégration des concepts métier, industrialisation du code en respectant la norme</li></ul>Cape-Open ; { Développements au sein de la librairie de calculs thermodynamiques Carnot en C++ : Evolution de l’architecture et implémentation de nouveaux modèles ; { Maintenance et évolution d’applications web (Géochim, Pétra, Oléum, Catasepa, etc.) ; { Développement, maintenance, et évolution de fichiers de suivi Excel.</div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement du Régénérateur Rigoureux de Désulfo en C++ : Prise en main du code</li><li>Fortran et intégration des concepts métier, industrialisation du code en respectant la norme</li></ul>Cape-Open ; { Développements au sein de la librairie de calculs thermodynamiques Carnot en C++ : Evolution de l’architecture et implémentation de nouveaux modèles ; { Maintenance et évolution d’applications web (Géochim, Pétra, Oléum, Catasepa, etc.) ; { Développement, maintenance, et évolution de fichiers de suivi Excel.</div></div><div class="block-container"><div class="block-left"><strong>Anglais</strong></div><div class="block-right"><span>Bon niveau</span><span class="pull-right">Pratique régulière</span></div></div></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>SDqsfihqskfu</h3></accordion-heading><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement du Régénérateur Rigoureux de Désulfo en C++ : Prise en main du code</li><li>Fortran et intégration des concepts métier, industrialisation du code en respectant la norme</li></ul>Cape-Open ; { Développements au sein de la librairie de calculs thermodynamiques Carnot en C++ : Evolution de l’architecture et implémentation de nouveaux modèles ; { Maintenance et évolution d’applications web (Géochim, Pétra, Oléum, Catasepa, etc.) ; { Développement, maintenance, et évolution de fichiers de suivi Excel.</div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement du Régénérateur Rigoureux de Désulfo en C++ : Prise en main du code</li><li>Fortran et intégration des concepts métier, industrialisation du code en respectant la norme</li></ul>Cape-Open ; { Développements au sein de la librairie de calculs thermodynamiques Carnot en C++ : Evolution de l’architecture et implémentation de nouveaux modèles ; { Maintenance et évolution d’applications web (Géochim, Pétra, Oléum, Catasepa, etc.) ; { Développement, maintenance, et évolution de fichiers de suivi Excel.</div></div><div class="block-container"><div class="block-left"><strong>Anglais</strong></div><div class="block-right"><span>Bon niveau</span><span class="pull-right">Pratique régulière</span></div></div></accordion-group></accordion></div>'),e.put("app/main/main.html",'<div class="jumbotron text-center"><h1>Florian CHEVASSU</h1><h2>Développeur C++ chevronné</h2><p class="citation"><em><q>People who think they know everything really annoy those of us who know we don\'t</q> - Bjarne Stroustrup</em></p></div><div class="row"><div class="col-md-12"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/amanite_template_engine_logo.png" alt="Amanite template engine"><div class="caption"><h3><a ng-href="#/Projects/AmaniteTemplateEngine">Amanite Template Engine</a></h3><p>A simple C++11 templating engine with full support for mustache templates</p></div></div></div><div class="col-md-12"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/APM.png" alt="APM"><div class="caption"><h3><a ng-href="#/Projects/APM">APM</a></h3><p>A CMake based C++ package manager</p></div></div></div></div>'),e.put("app/projects/projects.html",'<div class="projects"></div>'),e.put("app/blog/posts/first_blog_post.html",'<div class="cv"><div class="row"><div class="col-md-9"><h1 class="cv-name">CppThings</h1><h2 class="cv-title">A blog about my day to day programming</h2></div></div><post>A blog content that contains {{variable}} and <strong>html</strong> elements.</post></div>'),e.put("app/blog/posts/second_blog_post.html",'<div class="blog">2</div>')}]);