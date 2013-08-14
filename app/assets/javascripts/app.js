'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'firebase', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/endorse-bilal-ayyub', {templateUrl: 'endorse-bilal-ayyub.html', controller: 'MyCtrl1'});
    $routeProvider.when('/bilal-ayyub-biography', {templateUrl: 'bio.html'});
    $routeProvider.when('/support-bilal-ayyub', {templateUrl: 'home.html', controller: 'NewsCtrl'});
    $routeProvider.when('/latest-news-about-bilal', {templateUrl: 'news.html', controller: 'NewsCtrl'});
    $routeProvider.when('/contact-bilal', {templateUrl: 'contact.html'});
    $routeProvider.when('/resources', {templateUrl: 'resources.html'});
    $routeProvider.otherwise({redirectTo: '/support-bilal-ayyub'});
  }]);
