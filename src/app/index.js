'use strict';

angular.module('layoutAndGrid', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/layout', {
        templateUrl: 'app/layout/layout.html',
        controller: 'LayoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
